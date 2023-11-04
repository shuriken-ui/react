import { ButtonHTMLAttributes, forwardRef } from "react";
import { useConfig } from "../../Provider";
import { IconClose } from "../icons/IconClose";

type BaseButtonCloseProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * The shape of the button.
   */
  shape?: "straight" | "rounded" | "smooth" | "curved" | "full";

  /**
   * The color of the button. Can be 'default' or 'muted.
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

const shapeStyle = {
  straight: "",
  rounded: "nui-button-rounded",
  smooth: "nui-button-smooth",
  curved: "nui-button-curved",
  full: "nui-button-full",
};

const colorStyle = {
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
  { shape: defaultShape, color = "default", className: classes = "", ...props },
  ref,
) {
  const config = useConfig();

  const shape = defaultShape ?? config.defaultShapes.buttonClose;

  return (
    <button
      type="button"
      className={`nui-button-close ${shape ? shapeStyle[shape] : ""} ${
        colorStyle[color]
      } ${classes}`}
      {...props}
      ref={ref}
    >
      <IconClose className="nui-button-icon" />
    </button>
  );
});
