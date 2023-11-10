import { ComponentPropsWithRef, ElementType, ReactNode } from "react";

type AnchorLike = ElementType;

// TODO: match AnchorLike to be some a tag props

type BaseLinkProps<T extends AnchorLike = "a"> = Omit<
  ComponentPropsWithRef<T>,
  "children" | "as"
> & {
  as?: T;
  children: ReactNode;
};

export const BaseLink = <T extends AnchorLike = "a">({
  as: element,
  children,
  className: classes = "",
  ...props
}: BaseLinkProps<T>) => {
  const Component = element || "a";

  return (
    <Component className={`nui-link ${classes}`} {...props}>
      {children}
    </Component>
  );
};
