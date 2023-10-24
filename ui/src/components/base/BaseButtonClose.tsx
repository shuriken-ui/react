import React, { ButtonHTMLAttributes, FC } from "react";
import { useConfig } from "../../Provider";
import { IconClose } from "../icons/IconClose";

interface BaseButtonCloseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The shape of the button.
   */
  shape?: "straight" | "rounded" | "smooth" | "curved" | "full";
  /** The color of the button. Can be 'default' or 'muted. */
  color?:
    | "default"
    | "muted"
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "none";
}

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
export const BaseButtonClose: FC<BaseButtonCloseProps> = ({
  shape: defaultShape,
  color = "default",
  className: classes = "",
  ...props
}) => {
  const config = useConfig();
  const shape = defaultShape ?? config.defaultShapes.buttonClose;

  return (
    <button
      type="button"
      className={`nui-button-close ${shape ? shapeStyle[shape] : ""} ${
        colorStyle[color]
      } ${classes}`}
      {...props}
    >
      <IconClose className="nui-button-icon" />
    </button>
  );
};
