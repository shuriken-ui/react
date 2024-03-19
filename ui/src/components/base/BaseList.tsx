import { type FC, type PropsWithChildren, Children } from "react";
import { cn } from "~/utils";

type BaseListProps = PropsWithChildren<{
  className?: string;

  /**
   * If the list should be ordered.
   */
  ordered?: boolean;

  /**
   * Force the list to be media.
   */
  media?: boolean;
}>;

export const BaseList: FC<BaseListProps> = ({
  ordered = false,
  media,
  children,
  className: classes,
}) => {
  const Component = ordered ? "ol" : "ul";

  const hasMedia =
    media ??
    Children.toArray(children).some((child) => {
      if (typeof child === "string") {
        return false;
      }

      return typeof (child as { type: unknown }).type !== "string";
    });

  return (
    <Component
      className={cn(
        "nui-list",
        hasMedia && "nui-list-media",
        !hasMedia && ["nui-list-base", ordered ? "nui-list-ol" : "nui-list-ul"],
        classes,
      )}
    >
      {children}
    </Component>
  );
};
