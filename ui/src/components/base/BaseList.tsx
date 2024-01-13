import { FC, ReactNode } from "react";
import { cn } from "../../utils";

type BaseListProps = {
  /**
   * If the list should be ordered.
   */
  ordered?: boolean;

  /**
   * Force the list to be media.
   */
  media?: boolean;

  children?: ReactNode;
};

export const BaseList: FC<BaseListProps> = ({
  ordered = false,
  media,
  children,
}) => {
  const Component = ordered ? "ol" : "ul";

  const hasMedia = media;

  return (
    <Component
      className={cn(
        "nui-list",
        hasMedia
          ? "nui-list-media"
          : ["nui-list-base", ordered ? "nui-list-ol" : "nui-list-ul"],
      )}
    >
      {children}
    </Component>
  );
};
