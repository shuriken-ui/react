import { HTMLAttributes, forwardRef } from "react";
import { useConfig } from "../../Provider";
import { cn } from "../../utils";

type BaseIconBoxProps = HTMLAttributes<HTMLDivElement> & {
  /**
   * The variant of the box.
   *
   */
  variant?: "solid" | "outline" | "pastel";

  /** The color of the box.
   *
   * @default 'default'
   */
  color?:
    | "default"
    | "invert"
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "none";

  /**
   * The size of the icon.
   *
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

  /**
   * The radius of the icon.
   *
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";

  /**
   * Applies an svg mask from the available presets. (needs rounded to be set to `none`).
   */
  mask?: "hex" | "hexed" | "deca" | "blob" | "diamond";

  /**
   * Whether the icon is bordered.
   */
  bordered?: boolean;
};

const radiuses = {
  none: "",
  sm: "nui-box-rounded",
  md: "nui-box-smooth",
  lg: "nui-box-curved",
  full: "nui-box-full",
};

const sizes = {
  xs: "nui-box-xs",
  sm: "nui-box-sm",
  md: "nui-box-md",
  lg: "nui-box-lg",
  xl: "nui-box-xl",
  "2xl": "nui-box-2xl",
};

const variants = {
  solid: "nui-box-solid",
  pastel: "nui-box-pastel",
  outline: "nui-box-outline",
};

const colors = {
  default: "nui-box-default",
  invert: "nui-box-invert",
  primary: "nui-box-primary",
  info: "nui-box-info",
  success: "nui-box-success",
  warning: "nui-box-warning",
  danger: "nui-box-danger",
  none: "",
};

const masks = {
  hex: "nui-mask nui-mask-hex",
  hexed: "nui-mask nui-mask-hexed",
  deca: "nui-mask nui-mask-deca",
  blob: "nui-mask nui-mask-blob",
  diamond: "nui-mask nui-mask-diamond",
};

export const BaseIconBox = forwardRef<HTMLDivElement, BaseIconBoxProps>(
  function BaseIconBox(
    { bordered = false, children, className: classes, ...props },
    ref,
  ) {
    const config = useConfig();

    const variant = props.variant ?? config.BaseIconBox?.variant;

    const color = props.color ?? config.BaseIconBox?.color;

    const size = props.size ?? config.BaseIconBox?.size;

    const rounded = props.rounded ?? config.BaseIconBox?.rounded;

    return (
      <div
        className={cn(
          "nui-icon-box",
          bordered && "nui-box-bordered",
          rounded && radiuses[rounded],
          size && sizes[size],
          variant && variants[variant],
          color && colors[color],
          (props.rounded === "none" || rounded === "none") &&
            props.mask &&
            masks[props.mask],
          classes,
        )}
        ref={ref}
      >
        {children}
      </div>
    );
  },
);
