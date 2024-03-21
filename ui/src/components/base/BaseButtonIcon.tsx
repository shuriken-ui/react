import { type PropsWithChildren, forwardRef } from "react";
import { useNuiDefaultProperty } from "~/Provider";
import { BasePlaceload } from "./BasePlaceload";
import { type NinjaButtonProps, useNinjaButton } from "~/hooks/useNinjaButton";
import { cn } from "~/utils";

type BaseButtonIconProps = Omit<NinjaButtonProps, "children"> &
  PropsWithChildren<{
    /**
     * The type of button.
     * If this is not set and the `to` property is set, the component will be treated as a link.
     */
    // type?: "button" | "submit" | "reset";

    /**
     * The route to navigate to when the button or link is clicked.
     * If this is set and the `type` property is not set, the component will be treated as a link.
     */
    // to?: string;

    /** Using href instead of to result in a native anchor with no router functionality. */
    // href?: string;

    /**
     * Whether the button or link is disabled.
     */
    // disabled?: boolean;

    /**
     * The value for the `rel` attribute on the button or link.
     * This property is only relevant for links.
     */
    // rel?: string;

    /**
     * The value for the `target` attribute on the button or link.
     * This property is only relevant for links.
     */
    // target?: string;

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
     * The radius of the button or link.
     *
     * @default 'sm'
     */
    rounded?: "none" | "sm" | "md" | "lg" | "full";

    /**
     * The size of the button.
     *
     * @default 'md'
     */
    size?: "sm" | "md" | "lg";
  }>;

const radiuses = {
  none: "",
  sm: "nui-button-rounded-sm",
  md: "nui-button-rounded-md",
  lg: "nui-button-rounded-lg",
  full: "nui-button-rounded-full",
};

const sizes = {
  sm: "nui-button-small",
  md: "nui-button-medium",
  lg: "nui-button-large",
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

export const BaseButtonIcon = forwardRef<
  HTMLAnchorElement & HTMLButtonElement,
  BaseButtonIconProps
>(function BaseButtonIcon(
  {
    type,
    href,
    disabled,
    rel = "",
    target = "",
    loading = false,
    className,
    children,
    ...props
  },
  ref,
) {
  const { is: Component, attributes } = useNinjaButton({
    href,
    type,
    rel,
    target,
    disabled,
  });

  const color = useNuiDefaultProperty(props, "BaseButtonIcon", "color");
  const rounded = useNuiDefaultProperty(props, "BaseButtonIcon", "rounded");
  const size = useNuiDefaultProperty(props, "BaseButtonIcon", "size");

  return (
    <Component
      className={cn(
        "nui-button-icon",
        loading && "nui-button-loading",
        rounded && radiuses[rounded],
        size && sizes[size],
        color && colors[color],
        className,
      )}
      {
        ...(props as object) /** TODO: add correct type */
      }
      {...attributes}
      ref={ref}
    >
      {loading ? <BasePlaceload className="h-4 w-4 rounded-md" /> : children}
    </Component>
  );
});
