import { PropsWithChildren, forwardRef } from "react";
import { useConfig } from "../../Provider";
import { cn } from "../../utils";

type BaseTagProps = PropsWithChildren<{
  /**
   * The variant of the tag.
   *
   */
  variant?: "solid" | "outline" | "pastel";

  /**
   * The color of the tag.
   *
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
   * The radius of the tag.
   *
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";

  /**
   * The size of the tag.
   *
   */
  size?: "sm" | "md";

  /**
   * Determines when the tag should have a shadow.
   */
  shadow?: "flat" | "hover";
}>;

const variants = {
  solid: "nui-tag-solid",
  pastel: "nui-tag-pastel",
  outline: "nui-tag-outline",
};

const radiuses = {
  none: "",
  sm: "nui-tag-rounded",
  md: "nui-tag-smooth",
  lg: "nui-tag-curved",
  full: "nui-tag-full",
};

const colors = {
  default: "nui-tag-default",
  muted: "nui-tag-muted",
  primary: "nui-tag-primary",
  info: "nui-tag-info",
  success: "nui-tag-success",
  warning: "nui-tag-warning",
  danger: "nui-tag-danger",
};

const sizes = {
  sm: "nui-tag-sm",
  md: "nui-tag-md",
};

const shadows = {
  flat: "nui-tag-shadow",
  hover: "nui-tag-shadow-hover",
};

export const BaseTag = forwardRef<HTMLSpanElement, BaseTagProps>(
  function BaseTag(
    {
      children,
      variant: variantProp,
      rounded: roundedProp,
      color: colorProp,
      size: sizeProp,
      shadow: shadowProp,
      ...props
    },
    ref,
  ) {
    const config = useConfig();

    const variant = variantProp ?? config.BaseTag?.variant;

    const rounded = roundedProp ?? config.BaseTag?.rounded;

    const color = colorProp ?? config.BaseTag?.color;

    const size = sizeProp ?? config.BaseTag?.size;

    return (
      <span
        className={cn(
          "nui-tag",
          size && sizes[size],
          rounded && radiuses[rounded],
          variant && variants[variant],
          color && colors[color],
          shadowProp && shadows[shadowProp],
        )}
        {...props}
        ref={ref}
      >
        {children}
      </span>
    );
  },
);
