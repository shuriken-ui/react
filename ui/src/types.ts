import { ComponentPropsWithRef, ElementType, PropsWithChildren } from "react";

/** Polymotphic Component Utils */

/**
 * as props util
 */

type AsProp<C extends ElementType> = {
  as?: C;
};

/**
 * Utility to omit properties from a component's props
 */

type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P);

/**
 * Polymorphic Component Props
 */

export type PolymorphicComponentProps<
  C extends ElementType = "div",
  Props = object,
> = PropsWithChildren<Props & AsProp<C>> &
  Omit<ComponentPropsWithRef<C>, PropsToOmit<C, Props> | "ref">;

/**
 * Utility to extract the ref type for a component
 */

export type PolymorphicRef<C extends ElementType> =
  ComponentPropsWithRef<C>["ref"];

/**
 * Polymorphic Component Props with Ref
 */

export type PolymorphicComponentPropsWithRef<
  C extends ElementType = "div",
  Props = object,
> = PropsWithChildren<Props & AsProp<C>> &
  Omit<ComponentPropsWithRef<C>, PropsToOmit<C, Props>>;

/** ********************************************************************* */

export type ColorMode = "system" | "dark" | "light";
/**
 * Config
 */

export type DefaultShapes = {
  accordion: "straight" | "rounded" | "smooth" | "curved";
  autocompleteItem: "straight" | "rounded" | "smooth" | "curved" | "full";
  avatar: "straight" | "rounded" | "curved" | "full";
  button: "straight" | "rounded" | "curved" | "smooth" | "full";
  buttonAction: "straight" | "rounded" | "smooth" | "curved" | "full";
  buttonIcon: "straight" | "rounded" | "smooth" | "curved" | "full";
  buttonClose: "straight" | "rounded" | "smooth" | "curved" | "full";
  card: "straight" | "rounded" | "smooth" | "curved";
  dropdown: "straight" | "rounded" | "smooth" | "curved" | "full";
  iconBox: "straight" | "rounded" | "curved" | "full";
  input: "straight" | "rounded" | "smooth" | "curved" | "full";
  message: "straight" | "rounded" | "smooth" | "curved" | "full";
  pagination: "straight" | "rounded" | "smooth" | "curved" | "full";
  progress: "straight" | "rounded" | "curved" | "full";
  prose: "straight" | "rounded" | "curved";
  tabSlider: "straight" | "rounded" | "smooth" | "curved" | "full";
  tag: "straight" | "rounded" | "curved" | "full";
};

export type Config = {
  defaultShapes: DefaultShapes;
};
