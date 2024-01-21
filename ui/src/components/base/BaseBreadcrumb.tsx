import { PropsWithChildren, forwardRef } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { BaseDropdown } from "./BaseDropdown";
import { BaseDropdownItem } from "./BaseDropdownItem";
import { cn } from "../../utils";

type BaseBreadcrumbProps = PropsWithChildren<{
  /**
   * The items to display in the breadcrumb.
   *
   * If not provided, the breadcrumb will be generated
   * from the current route using page meta under `breadcrumb` key.
   */
  items?: {
    /**
     * The route to navigate to when the item is clicked.
     */
    href?: string;

    /**
     * The label to display for the item.
     */
    label?: string;

    /**
     * Whether to hide the label for the item.
     */
    hideLabel?: boolean;

    /**
     * An icon to display for the item.
     */
    icon?: string;

    /**
     * CSS classes to apply to the icon.
     */
    iconClasses?: string | string[];
  }[];
}>;

export const BaseBreadcrumb = forwardRef<HTMLElement, BaseBreadcrumbProps>(
  function BaseBreadcrumb(props, ref) {
    return (
      <nav className="nui-breadcrumb" ref={ref}>
        <ul className="nui-breadcrumb-list">
          <li className="nui-breadcrumb-item-mobile">
            <BaseDropdown flavor="context" size="md">
              {props.items
                ?.slice(0, props.items.length - 1)
                .map((item, index) => (
                  <BaseDropdownItem
                    key={index}
                    href={item.href}
                    // className="flex items-center gap-x-1"
                  >
                    {item.label}
                  </BaseDropdownItem>
                ))}
            </BaseDropdown>
          </li>
          {props.items &&
            props.items.map((item, index) => (
              <>
                <li
                  className={cn(
                    "nui-breadcrumb-item",
                    index !== props.items!.length - 1
                      ? "hidden sm:flex"
                      : "flex",
                  )}
                >
                  <Link
                    href={item.href || "#"}
                    className={cn(
                      "nui-item-inner",
                      item.href && "nui-has-link",
                    )}
                  >
                    {item.icon && (
                      <Icon
                        icon={item.icon}
                        className={cn("nui-item-icon", item.iconClasses)}
                      />
                    )}

                    {item.label && (
                      <span className={cn(item.hideLabel && "sr-only")}>
                        {item.label}
                      </span>
                    )}
                  </Link>
                </li>
                <li className="nui-breadcrumb-item">
                  {props.items && index < props.items.length - 1 && (
                    <div className="nui-item-inner">
                      <span className="nui-item-text">
                        {props.children || "."}
                      </span>
                    </div>
                  )}
                </li>
              </>
            ))}
        </ul>
      </nav>
    );
  },
);
