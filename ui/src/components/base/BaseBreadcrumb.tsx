import { type PropsWithChildren, forwardRef } from "react";
import Link from "next/link"; // @todo - remove this import
import { Icon } from "@iconify/react";
import { useNuiDefaultProperty } from "~/Provider";
import { BaseDropdown } from "./BaseDropdown";
import { BaseDropdownItem } from "./BaseDropdownItem";
import { cn } from "~/utils";

type Item = {
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
};

type BaseBreadcrumbProps = PropsWithChildren<{
  /**
   * The items to display in the breadcrumb.
   *
   * If not provided, the breadcrumb will be generated
   * from the current route using page meta under `breadcrumb` key.
   */
  items?: Item[];

  /**
   * Render custom link
   *
   */
  renderLink?: (item: Item, index: number) => React.ReactNode;

  /**
   * Defines the hover color of the breadcrumb links
   *
   * @default 'primary'
   */
  color?: "primary" | "dark" | "black";

  /**
   * Optional CSS classes to apply to the component inner elements.
   */
  classes?: {
    /**
     * CSS classes to apply to the wrapper element.
     */
    wrapper?: string | string[];

    /**
     * CSS classes to apply to the list element.
     */
    list?: string | string[];

    /**
     * CSS classes to apply to the dropdown element.
     */
    dropdown?: string | string[];

    /**
     * CSS classes to apply to the item element.
     */
    item?: string | string[];
  };
}>;

const colors = {
  primary: "nui-breadcrumb-primary",
  dark: "nui-breadcrumb-dark",
  black: "nui-breadcrumb-black",
};

export const BaseBreadcrumb = forwardRef<HTMLElement, BaseBreadcrumbProps>(
  function BaseBreadcrumb({ ...props }, ref) {
    const color = useNuiDefaultProperty(props, "BaseBreadcrumb", "color");

    return (
      <nav
        ref={ref}
        className={cn(
          "nui-breadcrumb",
          color && colors[color],
          props.classes?.wrapper,
        )}
      >
        <ul className={cn("nui-breadcrumb-list", props.classes?.list)}>
          <li className="nui-breadcrumb-item-mobile">
            <BaseDropdown
              variant="context"
              size="md"
              classes={{
                wrapper: props.classes?.dropdown,
              }}
            >
              {props.items
                ?.slice(0, props.items.length - 1)
                .map((item, index) => (
                  <BaseDropdownItem
                    key={index}
                    href={item.href}
                    className="flex items-center gap-x-1"
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
                  {props.renderLink?.(item, index) || (
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
                  )}
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
