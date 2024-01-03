import { HTMLAttributes, forwardRef } from "react";
import { useConfig } from "src";
import { cn } from "../../utils";

type BaseIconBoxProps = HTMLAttributes<HTMLDivElement> & {
  /**
   * The shape of the icon.
   */
  shape?: "straight" | "rounded" | "curved" | "full";

  /**
   * The size of the icon.
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

  /** The color of the box. Can be 'default', 'primary', 'info', 'success', 'warning', or 'danger' */
  color?:
    | "default"
    | "invert"
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger";

  /** The flavor of the box. Can be 'solid', 'outline', or 'pastel'. */
  flavor?: "solid" | "outline" | "pastel";

  /**
   * Whether the icon is bordered.
   */
  bordered?: boolean;

  /**
   * Applies an svg mask from the available presets. (needs shape to be set to `straight`).
   */
  mask?: "hex" | "hexed" | "deca" | "blob" | "diamond";
};

const shapeStyle = {
  straight: "",
  rounded: "nui-box-rounded",
  curved: "nui-box-curved",
  full: "nui-box-full",
};

const sizeStyle = {
  xs: "nui-box-xs",
  sm: "nui-box-sm",
  md: "nui-box-md",
  lg: "nui-box-lg",
  xl: "nui-box-xl",
  "2xl": "nui-box-2xl",
};

const flavorStyle = {
  solid: "nui-box-solid",
  pastel: "nui-box-pastel",
  outline: "nui-box-outline",
};

const colorStyle = {
  default: "nui-box-default",
  invert: "nui-box-invert",
  primary: "nui-box-primary",
  info: "nui-box-info",
  success: "nui-box-success",
  warning: "nui-box-warning",
  danger: "nui-box-danger",
};

const maskStyle = {
  hex: "nui-mask nui-mask-hex",
  hexed: "nui-mask nui-mask-hexed",
  deca: "nui-mask nui-mask-deca",
  blob: "nui-mask nui-mask-blob",
  diamond: "nui-mask nui-mask-diamond",
};

export const BaseIconBox = forwardRef<HTMLDivElement, BaseIconBoxProps>(
  function BaseIconBox(
    {
      shape: defaultShape,
      size = "xs",
      color,
      flavor = "pastel",
      bordered = false,
      mask,
      children,
      className: classes,
    },
    ref,
  ) {
    const config = useConfig();

    const shape = defaultShape ?? config.defaultShapes.iconBox;

    return (
      <div
        className={cn(
          "nui-icon-box",
          bordered && "nui-box-bordered",
          shape && shapeStyle[shape],
          sizeStyle[size],
          flavorStyle[flavor],
          color && colorStyle[color],
          mask && maskStyle[mask],
          classes,
        )}
        ref={ref}
      >
        {children}
      </div>
    );
  },
);
