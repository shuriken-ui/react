import { FC, ImgHTMLAttributes } from "react";
import { useConfig } from "../../Provider";

type BaseAvatarProps = ImgHTMLAttributes<HTMLImageElement> & {
  /**
   * The URL of the image to display.
   */
  //   src?: string;

  /**
   * The URL of a dark version of the image to display when the component is in dark mode.
   */
  srcDark?: string;

  /**
   * The URL of a badge to display on top of the image.
   */
  badgeSrc?: string;

  /**
   * The text to display below the image.
   */
  text?: string;

  /**
   * The size of the image.
   */
  size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";

  /**
   * The shape of the image.
   */
  shape?: "straight" | "rounded" | "curved" | "full";

  /**
   * Applies an svg mask from the available presets. (needs shape to be set to `straight`).
   */
  mask?: "hex" | "hexed" | "deca" | "blob" | "diamond";

  /**
   * Whether to display a dot on top of the image, or the color of the dot.
   */
  dot?:
    | boolean
    | "primary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "pink"
    | "yellow";

  /**
   * Whether to display a ring around the image .
   */
  ring?:
    | boolean
    | "primary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "pink"
    | "yellow";
};

const dotStyle = {
  success: "nui-dot-success",
  primary: "nui-dot-primary",
  info: "nui-dot-info",
  warning: "nui-dot-warning",
  danger: "nui-dot-danger",
  pink: "nui-dot-pink",
  yellow: "nui-dot-yellow",
};

const ringStyle = {
  success: "nui-ring-success",
  primary: "nui-ring-primary",
  info: "nui-ring-info",
  warning: "nui-ring-warning",
  danger: "nui-ring-danger",
  pink: "nui-ring-pink",
  yellow: "nui-ring-yellow",
};

const sizeStyle = {
  xxs: "nui-avatar-xxs",
  xs: "nui-avatar-xs",
  sm: "nui-avatar-sm",
  md: "nui-avatar-md",
  lg: "nui-avatar-lg",
  xl: "nui-avatar-xl",
  "2xl": "nui-avatar-2xl",
  "3xl": "nui-avatar-3xl",
  "4xl": "nui-avatar-4xl",
};

const shapeStyle = {
  straight: "nui-avatar-straight",
  rounded: "nui-avatar-rounded",
  curved: "nui-avatar-curved",
  full: "nui-avatar-full",
};

const maskStyle = {
  hex: "nui-mask-hex",
  hexed: "nui-mask-hexed",
  deca: "nui-mask-deca",
  blob: "nui-mask-blob",
  diamond: "nui-mask-diamond",
};

export const BaseAvatar: FC<BaseAvatarProps> = ({
  src,
  srcDark,
  text = "?",
  badgeSrc,
  size = "sm",
  shape: defaultShape,
  mask,
  dot = false,
  ring = false,
  alt = "",
}) => {
  const config = useConfig();

  const shape = defaultShape ?? config.defaultShapes.avatar;

  return (
    <div
      className={`nui-avatar 
      ${sizeStyle[size]} ${shape ? shapeStyle[shape] : ""} ${
        mask ? `nui-avatar-mask  ${maskStyle[mask]}` : ""
      }   ${
        ring === true
          ? `nui-avatar-ring ${ringStyle.primary}`
          : `nui-avatar-ring  ${ring ? ringStyle[ring] : ""}`
      } `}
    >
      <div className="nui-avatar-inner">
        {src && (
          <img
            src={src}
            className={`nui-avatar-img ${srcDark ? "dark:hidden" : ""}`}
            alt={alt}
          />
        )}

        {src && srcDark && (
          <img src={srcDark} className="nui-avatar-img hidden" alt="" />
        )}

        {!src && <span className="nui-avatar-text">{text}</span>}
      </div>

      {badgeSrc && (
        <div className="nui-avatar-badge">
          <img src={badgeSrc} className="nui-badge-img" alt="" />
        </div>
      )}

      {dot && (
        <span
          className={`nui-avatar-dot  ${
            dot === true ? dotStyle.primary : dotStyle[dot]
          } `}
        />
      )}
    </div>
  );
};
