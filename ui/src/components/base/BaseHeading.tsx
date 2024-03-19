import { type Ref, forwardRef } from "react";
import { type PolymorphicComponentProps } from "~/types";
import { cn } from "~/utils";
import { useNuiDefaultProperty } from "~/Provider";

type Headings = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";

type HeadingProps<E extends Headings> = {
  /**
   * The heading element to use (e.g. 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p').
   */
  as?: E;

  /**
   * The size of the heading.
   *
   * @default 'xl'
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
   * The spacing below the heading.
   *
   * @default 'normal'
   */
  lead?: "none" | "tight" | "snug" | "normal" | "relaxed" | "loose";

  /**
   * The weight of the heading.
   *
   * @default 'semibold'
   */
  weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
};

const sizes = {
  xs: "nui-heading-xs",
  sm: "nui-heading-sm",
  md: "nui-heading-md",
  lg: "nui-heading-lg",
  xl: "nui-heading-xl",
  "2xl": "nui-heading-2xl",
  "3xl": "nui-heading-3xl",
  "4xl": "nui-heading-4xl",
  "5xl": "nui-heading-5xl",
  "6xl": "nui-heading-6xl",
  "7xl": "nui-heading-7xl",
  "8xl": "nui-heading-8xl",
  "9xl": "nui-heading-9xl",
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

export const BaseHeading = forwardRef(function BaseHeading<
  E extends Headings = "p",
>(
  {
    as: element,
    className: classes,
    children,
    ...props
  }: PolymorphicComponentProps<E, HeadingProps<E>>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: Ref<any>,
) {
  // const element = useNuiDefaultProperty(props, "BaseHeading", "as"); // @todo
  const lead = useNuiDefaultProperty(props, "BaseHeading", "lead");
  const size = useNuiDefaultProperty(props, "BaseHeading", "size");
  const weight = useNuiDefaultProperty(props, "BaseHeading", "weight");

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
        "nui-heading",
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
