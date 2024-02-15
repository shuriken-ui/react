import { PropsWithChildren, forwardRef } from "react";
import { useNinjaButton, NinjaButtonProps } from "../../hooks/useNinjaButton";
import { useConfig } from "../../Provider";
import { BasePlaceload } from "./BasePlaceload";
import { cn } from "../../utils";

type BaseButtonActionProps = Omit<NinjaButtonProps, "children"> &
  PropsWithChildren<{
    /**
     * The type of button.
     */
    // type?: "button" | "submit" | "reset";

    /**
     * The route to navigate to when the button is clicked.
     */
    // to?: string;

    /** Using href instead of to result in a native anchor with no router functionality. */
    // href?: string;

    /**
     * Whether the button is disabled.
     */
    // disabled?: boolean;

    /**
     * The value for the `rel` attribute on the button.
     */
    // rel?: string;

    /**
     * The value for the `target` attribute on the button.
     */
    // target?: string;

    /**
     * The radius of the button.
     *
     */
    rounded?: "none" | "sm" | "md" | "lg" | "full";

    /**
     * Whether the button is in a loading state.
     */
    // loading?: boolean;

    /**
     * The color of the button.
     */
    color?:
      | "default"
      | "muted"
      | "primary"
      | "info"
      | "success"
      | "warning"
      | "danger"
      | "none";
  }>;

const radiuses = {
  none: "",
  sm: "nui-button-rounded",
  md: "nui-button-smooth",
  lg: "nui-button-curved",
  full: "nui-button-full",
};

const colors = {
  default: "nui-button-default",
  muted: "nui-button-muted",
  primary: "nui-button-primary",
  info: "nui-button-info",
  success: "nui-button-success",
  warning: "nui-button-warning",
  danger: "nui-button-danger",
  none: "",
};

export const BaseButtonAction = forwardRef<
  HTMLAnchorElement & HTMLButtonElement,
  BaseButtonActionProps
>(function BaseButtonAction(
  {
    target = "",
    href,
    type,
    rel = "",
    disabled = false,
    loading = false,
    children,
    className: classes,
    ...props
  },
  ref,
) {
  const { is: Component, attributes } = useNinjaButton({
    href,
    type,
    target,
    rel,
    disabled,
  });

  const config = useConfig();

  const rounded = props.rounded ?? config.BaseButtonAction?.rounded;

  const color = props.color ?? config.BaseButtonAction?.color;

  return (
    <Component
      className={cn(
        "nui-button-action",
        loading && "nui-button-loading",
        color && colors[color],
        rounded && radiuses[rounded],
        classes,
      )}
      {
        ...(props as object) /** TODO: add correct type */
      }
      {...attributes}
      ref={ref}
    >
      {loading ? <BasePlaceload className="h-3 w-8 rounded" /> : children}
    </Component>
  );
});
