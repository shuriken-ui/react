export interface BaseButtonProperties {
  type?: "button" | "submit" | "reset";
  to?: string;
  href?: string;
  disabled?: boolean;
  rel?: string;
  target?: string;
}

export const useNinjaButton = (
  properties: BaseButtonProperties,
  {
    // @todo: make this configurable (design tokens)
    externalDefaultRelationship = "noopener noreferrer",
    externalDefaultTarget = "_blank",
  } = {},
) => {
  const is: "a" | "button" = properties.href ? "a" : "button";

  // TODO: MAKE IT WORK
  //   const is =
  //     properties.to ? NuxtLink : properties.href ? 'a' : 'button'
  const type = is === "button" ? properties.type || "button" : undefined;

  function getExternal() {
    if (typeof properties.to === "string" && properties.to.startsWith("http")) {
      return true;
    }

    // TODO: if (
    //   typeof properties.to === "object" &&
    //   "path" in properties.to &&
    //   properties.to.path.startsWith("http")
    // ) {
    //   return true;
    // }

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
    to: properties.disabled ? undefined : properties.to,
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
