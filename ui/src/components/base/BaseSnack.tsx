import { FC } from "react";
import { Icon } from "@iconify/react";
import { BaseButtonClose } from "./BaseButtonClose";

interface BaseSnackProps {
  /**
   * The text to display in the snackbar.
   */
  label?: string;

  /**
   * An optional icon to display in the snackbar.
   */
  icon?: string;
  /**
   * Click handler
   */

  onClick?: () => void;
  /**
   * An optional image to display in the snackbar.
   */
  image?: string;

  /**
   * The size of the snack.
   */
  size?: "sm" | "md";

  /**
   * The color of snack, might be 'default' or 'muted'.
   */
  color?: "default" | "muted";
}

const sizeStyle = {
  sm: "nui-snack-sm",
  md: "nui-snack-md",
};

const colorStyle = {
  default: "nui-snack-default",
  muted: "nui-snack-muted",
};

export const BaseSnack: FC<BaseSnackProps> = ({
  icon,
  image,
  label = "",
  size = "md",
  color = "default",
  onClick = () => {},
}) => {
  return (
    <div
      className={`nui-snack  ${sizeStyle[size]} ${colorStyle[color]} ${
        icon || image ? "nui-has-media" : ""
      }`}
    >
      {icon && !image && (
        <div className="nui-snack-icon">
          <Icon icon={icon} name={icon} className="nui-snack-icon-inner" />
        </div>
      )}
      {image && !icon && (
        <div className="nui-snack-image">
          <img src={image} className="nui-snack-image-inner" alt="" />
        </div>
      )}
      <span className="nui-snack-text">
        <slot>{label}</slot>
      </span>
      <BaseButtonClose
        className="nui-snack-button"
        shape="full"
        onClick={onClick}
      />
    </div>
  );
};
