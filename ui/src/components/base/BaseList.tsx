import { FC, ReactNode } from "react";

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

  const orderedClasses = ordered ? "nui-list-ol" : "nui-list-ul";

  const hasMedia = media;

  return (
    <Component
      className={`nui-list   ${
        hasMedia ? "nui-list-media" : `nui-list-base ${orderedClasses}`
      } `}
    >
      {children}
    </Component>
  );
};
