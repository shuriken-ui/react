import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

export interface BaseButtonProperties {
  type?: "button" | "submit" | "reset";
  href?: string;
  disabled?: boolean;
  rel?: string;
  target?: string;
}

export type NinjaButton = "a" | "button";

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  type: never;
  disabled: never;
  loading: never;
};
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href: never;
  rel: never;
  target: never;
  loading?: boolean;
};

export type NinjaButtonProps = AnchorProps | ButtonProps;

export const useNinjaButton = (
  properties: BaseButtonProperties,
  {
    // @todo: make this configurable (design tokens)
    externalDefaultRelationship = "noopener noreferrer",
    externalDefaultTarget = "_blank",
  } = {},
) => {
  // TODO: add next/link support
  const is: NinjaButton = properties.href ? "a" : "button";

  const type = is === "button" ? properties.type || "button" : undefined;

  const external =
    typeof properties.href === "string" && properties.href.startsWith("http");

  const rel = !external
    ? properties.rel
    : properties.rel ?? externalDefaultRelationship;

  const target = !external
    ? properties.target
    : properties.target ?? externalDefaultTarget;

  const attributes = {
    href: properties.disabled ? undefined : properties.href,
    disabled: properties.disabled,
    type,
    ...(rel ? { rel } : {}),
    ...(target ? { target } : {}),
  };

  return {
    attributes,
    is,
  };
};
