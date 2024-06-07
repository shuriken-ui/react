import { type ButtonHTMLAttributes, forwardRef } from "react";
import { useNuiDefaultProperty } from "~/Provider";
import { IconClose } from "~/components/icons";
import { cn } from "~/utils";

type BaseButtonCloseProps = ButtonHTMLAttributes<HTMLButtonElement> & {
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
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "none";

  /**
   * The radius of the button.
   *
   * @default 'full'
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";

  /**
   * The size of the button.
   *
   * @default 'sm'
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
};

const sizes = {
  xs: "nui-button-xs",
  sm: "nui-button-sm",
  md: "nui-button-md",
  lg: "nui-button-lg",
  xl: "nui-button-xl",
};

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
  primary: "nui-button-primary",
  info: "nui-button-info",
  success: "nui-button-success",
  warning: "nui-button-warning",
  danger: "nui-button-danger",
  none: "",
};

export const BaseButtonClose = forwardRef<
  HTMLButtonElement,
  BaseButtonCloseProps
>(function BaseButtonClose({ children, className, ...props }, ref) {
  const color = useNuiDefaultProperty(props, "BaseButtonClose", "color");
  const rounded = useNuiDefaultProperty(props, "BaseButtonClose", "rounded");
  const size = useNuiDefaultProperty(props, "BaseButtonClose", "size");

  const attrs = {
    ...props,
    color: undefined,
    rounded: undefined,
    size: undefined,
  };

  return (
    <button
      type="button"
      className={cn(
        "nui-button-close",
        size && sizes[size],
        rounded && radiuses[rounded],
        color && colors[color],
        className,
      )}
      {...attrs}
      ref={ref}
    >
      {children || <IconClose className="nui-button-icon" />}
    </button>
  );
});
