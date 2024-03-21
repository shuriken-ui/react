import { type PropsWithChildren, forwardRef } from "react";
import { type NinjaButtonProps, useNinjaButton } from "~/hooks/useNinjaButton";
import { useNuiDefaultProperty } from "~/Provider";
import { BasePlaceload } from "./BasePlaceload";
import { cn } from "~/utils";

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
     * Whether the button is in a loading state.
     */
    // loading?: boolean;

    /**
     * The color of the button.
     *
     * @default 'default'
     */
    color?:
      | "default"
      | "default-contrast"
      | "muted"
      | "muted-contrast"
      | "light"
      | "dark"
      | "black"
      | "primary"
      | "info"
      | "success"
      | "warning"
      | "danger"
      | "none";

    /**
     * The radius of the button.
     *
     * @default 'sm'
     */
    rounded?: "none" | "sm" | "md" | "lg" | "full";
  }>;

const radiuses = {
  none: "",
  sm: "nui-button-rounded-sm",
  md: "nui-button-rounded-md",
  lg: "nui-button-rounded-lg",
  full: "nui-button-rounded-full",
};

const colors = {
  default: "nui-button-default",
  "default-contrast": "nui-button-default-contrast",
  muted: "nui-button-muted",
  "muted-contrast": "nui-button-muted-contrast",
  light: "nui-button-light",
  dark: "nui-button-dark",
  black: "nui-button-black",
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

  const color = useNuiDefaultProperty(props, "BaseButtonAction", "color");
  const rounded = useNuiDefaultProperty(props, "BaseButtonAction", "rounded");

  const attrs: Record<string, unknown> = {
    ...attributes,
    ...props,
    color: undefined,
    rounded: undefined,
  };

  return (
    <Component
      className={cn(
        "nui-button-action",
        loading && "nui-button-loading",
        color && colors[color],
        rounded && radiuses[rounded],
        classes,
      )}
      {...attrs}
      ref={ref}
    >
      {loading ? <BasePlaceload className="h-3 w-8 rounded" /> : children}
    </Component>
  );
});
