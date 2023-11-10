import { ReactNode, forwardRef } from "react";
import { BaseParagraph } from "./BaseParagraph";
import { BaseHeading } from "./BaseHeading";

type BaseListItemProps = {
  /**
   * The title of the list item.
   */
  title?: string;

  /**
   * The subtitle of the list item.
   */
  subtitle?: string;

  /**
   * children
   */
  children: ReactNode;

  /**
   * end
   */
  end: ReactNode;
};

export const BaseListItem = forwardRef<HTMLLIElement, BaseListItemProps>(
  function BaseListItem({ title, subtitle, children, end }, ref) {
    return (
      <li className="nui-list-item" ref={ref}>
        {children}

        <div>
          {title && (
            <BaseHeading as="h6" weight="medium" size="md" lead="tight">
              {title}
            </BaseHeading>
          )}
          {subtitle && (
            <BaseParagraph
              size="xs"
              className="text-muted-500 dark:text-muted-400"
            >
              {subtitle}
            </BaseParagraph>
          )}
        </div>

        <div className="ms-auto">{end}</div>
      </li>
    );
  },
);
