import { ButtonHTMLAttributes, forwardRef } from "react";
import { useConfig } from "../../Provider";
import { IconClose } from "../icons/IconClose";
import { cn } from "../../utils";

type BaseButtonCloseProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * The size of the button.
   *
   */
  size?: "xs" | "sm" | "md" | "lg";

  /**
   * The radius of the button.
   *
   * @since 2.0.0
   * @default 'full'
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";

  /**
   * The color of the button.
   *
   * @default 'default'
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
};

const sizes = {
  xs: "nui-button-xs",
  sm: "nui-button-sm",
  md: "nui-button-md",
  lg: "nui-button-lg",
};

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

export const BaseButtonClose = forwardRef<
  HTMLButtonElement,
  BaseButtonCloseProps
>(function BaseButtonClose(
  {
    size: sizeProp,
    rounded: roundedProp,
    color: colorProp,
    children,
    className,
    ...props
  },
  ref,
) {
  const config = useConfig();

  const size = sizeProp ?? config.BaseButtonClose?.size;

  const rounded = roundedProp ?? config.BaseButtonClose?.rounded;

  const color = colorProp ?? config.BaseButtonClose?.color;

  return (
    <button
      type="button"
      className={cn(
        "nui-button-close",
        size && sizes[size],
        rounded && radiuses[rounded],
        color && colors[color],
      )}
      {...props}
      ref={ref}
    >
      <IconClose className="nui-button-icon" />
    </button>
  );
});
