import { type ElementType, forwardRef } from "react";
import { type PolymorphicComponentProps, type PolymorphicRef } from "~/types";
import { useNuiDefaultProperty } from "~/Provider";
import { cn } from "~/utils";

type BaseParagraphProps<E extends ElementType = "p"> = {
  /**
   * The HTML element or component name to use for the paragraph.
   */
  as?: E;

  /**
   * The lead of the paragraph.
   *
   * @default 'normal'
   */
  lead?: "none" | "tight" | "snug" | "normal" | "relaxed" | "loose";

  /**
   * The size of the paragraph.
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
   * The weight of the paragraph.
   *
   * @default 'normal'
   */
  weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
};

const sizes = {
  xs: "nui-paragraph-xs",
  sm: "nui-paragraph-sm",
  md: "nui-paragraph-md",
  lg: "nui-paragraph-lg",
  xl: "nui-paragraph-xl",
  "2xl": "nui-paragraph-2xl",
  "3xl": "nui-paragraph-3xl",
  "4xl": "nui-paragraph-4xl",
  "5xl": "nui-paragraph-5xl",
  "6xl": "nui-paragraph-6xl",
  "7xl": "nui-paragraph-7xl",
  "8xl": "nui-paragraph-8xl",
  "9xl": "nui-paragraph-9xl",
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

export const BaseParagraph = forwardRef(function BaseParagraph<
  E extends ElementType = "p",
>(
  {
    as: element,
    className: classes,
    children,
    ...props
  }: PolymorphicComponentProps<E, BaseParagraphProps<E>>,
  ref: PolymorphicRef<E>,
) {
  // const element = useNuiDefaultProperty(props, 'BaseParagraph', 'as') // @todo
  const lead = useNuiDefaultProperty(props, "BaseParagraph", "lead");
  const size = useNuiDefaultProperty(props, "BaseParagraph", "size");
  const weight = useNuiDefaultProperty(props, "BaseParagraph", "weight");

  const Component = element || "p";

  const attrs = {
    ...props,
    lead: undefined,
    size: undefined,
    weight: undefined,
  };

  return (
    <Component
      className={cn(
        "nui-paragraph",
        size && sizes[size],
        weight && weights[weight],
        lead && leads[lead],
        classes,
      )}
      {...attrs}
      ref={ref}
    >
      {children}
    </Component>
  );
});
