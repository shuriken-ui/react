export interface BaseButtonProperties {
  type?: "button" | "submit" | "reset";
  href?: string;
  disabled?: boolean;
  rel?: string;
  target?: string;
}

export type NinjaButton = "a" | "button";

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

  function getExternal() {
    if (
      typeof properties.href === "string" &&
      properties.href.startsWith("http")
    ) {
      return true;
    }

    return false;
  }

  const external = getExternal();

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
    rel,
    target,
  };

  return {
    attributes,
    is,
  };
};
