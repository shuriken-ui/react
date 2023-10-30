import { FC, ReactNode, forwardRef } from "react";
import { useConfig } from "../../Provider";

interface BaseTagProps {
  /**
   * children
   */
  children: ReactNode;

  /**
   * The flavor of the tag.
   */
  flavor?: "solid" | "outline" | "pastel";

  /**
   * The color of the tag.
   */
  color?:
    | "default"
    | "muted"
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger";

  /**
   * The shape of the tag.
   */
  shape?: "straight" | "rounded" | "curved" | "full";

  /**
   * The size of the tag.
   */
  size?: "sm" | "md";

  /**
   * Determines when the tag should have a shadow.
   */
  shadow?: "flat" | "hover";
}

const flavorStyle = {
  solid: "nui-tag-solid",
  pastel: "nui-tag-pastel",
  outline: "nui-tag-outline",
};

const shapeStyle = {
  straight: "",
  rounded: "nui-tag-rounded",
  smooth: "nui-tag-smooth",
  curved: "nui-tag-curved",
  full: "nui-tag-full",
};

const colorStyle = {
  default: "nui-tag-default",
  muted: "nui-tag-muted",
  primary: "nui-tag-primary",
  info: "nui-tag-info",
  success: "nui-tag-success",
  warning: "nui-tag-warning",
  danger: "nui-tag-danger",
};

const shadowStyle = {
  flat: "nui-tag-shadow",
  hover: "nui-tag-shadow-hover",
};

const sizeStyle = {
  sm: "nui-tag-sm",
  md: "nui-tag-md",
};

export const BaseTag = forwardRef<HTMLSpanElement, BaseTagProps>(
  function BaseTag(
    {
      flavor = "solid",
      color = "default",
      shape: defaultShape,
      shadow,
      size = "md",
      children,
    },
    ref,
  ) {
    const config = useConfig();

    const shape = defaultShape ?? config.defaultShapes.tag;

    return (
      <span
        className={`nui-tag ${sizeStyle[size]} ${flavorStyle[flavor]} ${
          colorStyle[color]
        } ${shape ? shapeStyle[shape] : ""} ${
          shadow && flavor === "solid" ? shadowStyle[shadow] : ""
        }`}
        ref={ref}
      >
        {children}
      </span>
    );
  },
);
