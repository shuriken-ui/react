import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "~/utils";
import { useNuiDefaultProperty } from "~/Provider";

type BaseTextProps = HTMLAttributes<HTMLParagraphElement> & {
  /**
   * The lead of the text.
   *
   * @default 'normal'
   */
  lead?: "none" | "tight" | "snug" | "normal" | "relaxed" | "loose";

  /**
   * The size of the text.
   *
   * @default 'md'
   */
  size?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl";

  /**
   * The weight of the text.
   *
   * @default 'normal'
   */
  weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
};

const sizes = {
  xs: "nui-content-xs",
  sm: "nui-content-sm",
  md: "nui-content-md",
  lg: "nui-content-lg",
  xl: "nui-content-xl",
  "2xl": "nui-content-2xl",
  "3xl": "nui-content-3xl",
  "4xl": "nui-content-4xl",
  "5xl": "nui-content-5xl",
  "6xl": "nui-content-6xl",
  "7xl": "nui-content-7xl",
  "8xl": "nui-content-8xl",
  "9xl": "nui-content-9xl",
};

const weights = {
  light: "nui-weight-light",
  normal: "nui-weight-normal",
  medium: "nui-weight-medium",
  semibold: "nui-weight-semibold",
  bold: "nui-weight-bold",
  extrabold: "nui-weight-extrabold",
};

const leads = {
  none: "nui-lead-none",
  tight: "nui-lead-tight",
  snug: "nui-lead-snug",
  normal: "nui-lead-normal",
  relaxed: "nui-lead-relaxed",
  loose: "nui-lead-loose",
};

export const BaseText = forwardRef<HTMLParagraphElement, BaseTextProps>(
  function BaseText({ children, ...props }, ref) {
    const lead = useNuiDefaultProperty(props, "BaseText", "lead");
    const size = useNuiDefaultProperty(props, "BaseText", "size");
    const weight = useNuiDefaultProperty(props, "BaseText", "weight");

    return (
      <p
        className={cn(
          "nui-text",
          size && sizes[size],
          weight && weights[weight],
          lead && leads[lead],
        )}
        ref={ref}
      >
        {children}
      </p>
    );
  },
);
