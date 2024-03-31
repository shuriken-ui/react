import { type HTMLAttributes, forwardRef } from "react";
import { useNuiDefaultProperty } from "~/Provider";
import { cn } from "~/utils";

type BaseINputHelpTextProps = HTMLAttributes<HTMLSpanElement> & {
  /**
   * The color of the text.
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
};

const colors = {
  default: "text-inherit",
  "default-contrast": "text-inherit",
  muted: "text-muted-500 dark:text-muted-400",
  "muted-contrast": "text-muted-500 dark:text-muted-400",
  primary: "text-primary-500",
  info: "text-info-500",
  success: "text-success-500",
  warning: "text-warning-500",
  danger: "text-danger-500",
  light: "text-muted-100",
  dark: "text-muted-900 dark:text-muted-100",
  black: "text-black dark:text-white",
  none: "",
};

export const BaseInputHelpText = forwardRef<
  HTMLSpanElement,
  BaseINputHelpTextProps
>(function BaseInputHelpText({ className: classes, children, ...props }, ref) {
  const color = useNuiDefaultProperty(props, "BaseInputHelpText", "color");

  return (
    <span
      className={cn("nui-input-help-text", color && colors[color], classes)}
      ref={ref}
    >
      {children}
    </span>
  );
});
