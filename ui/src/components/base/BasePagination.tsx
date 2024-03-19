import { type ReactNode, type MouseEvent, forwardRef, useMemo } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link"; // @todo: remove this import
import { Icon } from "@iconify/react";
import { useNuiDefaultProperty } from "~/Provider";
import { cn } from "~/utils";

import { BaseFocusLoop } from "./BaseFocusLoop";

type BasePaginationProps = {
  /**
   * The number of items to display per page.
   */
  itemPerPage: number;

  /**
   * The total number of items.
   */
  totalItems: number;

  /**
   * The current page number.
   */
  currentPage?: number;

  /**
   * The callback to set the current page.
   */
  setCurrentPage?: (page: number) => void;

  /**
   * The maximum number of links to display.
   */
  maxLinksDisplayed?: number;

  /**
   * Whether to disable routing.
   */
  noRouter?: boolean;

  /**
   * The query key to use for routing.
   */
  routerQueryKey?: string;

  /**
   * The icon to show for the previous button.
   */
  previousIcon?: string;

  /**
   * The icon to show for the next button.
   */
  nextIcon?: string;

  /**
   * The ellipsis to show when there are too many links.
   */
  ellipsis?: string;

  /**
   * The color of the pagination active button.
   *
   * @default 'primary'
   */
  color?: "primary" | "dark" | "black";

  /**
   * The radius of the pagination.
   *
   * @default 'sm'
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";

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
     * CSS classes to apply to the link element.
     */
    link?: string | string[];

    /**
     * CSS classes to apply to the ellipsis element.
     */
    ellipsis?: string | string[];

    /**
     * CSS classes to apply to the buttons element.
     */
    buttons?: string | string[];

    /**
     * CSS classes to apply to the button element.
     */
    button?: string | string[];
  };

  /**
   * The content to show before the pagination.
   */
  beforePagination?: ReactNode;

  /**
   * The content to show before the navigation.
   */
  beforeNavigation?: ReactNode;

  /**
   * The content to show after the pagination.
   */
  afterPagination?: ReactNode;

  /**
   * The content to show after the navigation.
   */
  afterNavigation?: ReactNode;
};

const radiuses = {
  none: "",
  sm: "nui-pagination-rounded-sm",
  md: "nui-pagination-rounded-md",
  lg: "nui-pagination-rounded-lg",
  full: "nui-pagination-rounded-full",
};

const colors = {
  primary: "nui-pagination-primary",
  dark: "nui-pagination-dark",
  black: "nui-pagination-black",
};

export const BasePagination = forwardRef<HTMLDivElement, BasePaginationProps>(
  function BasePagination(
    {
      currentPage = 1,
      maxLinksDisplayed = 3,
      routerQueryKey = "page",
      ellipsis = "…",
      previousIcon = "lucide:chevron-left",
      nextIcon = "lucide:chevron-right",
      setCurrentPage = () => {},
      ...props
    },
    ref,
  ) {
    // const config = useConfig();
    const color = useNuiDefaultProperty(props, "BasePagination", "color");
    const rounded = useNuiDefaultProperty(props, "BasePagination", "rounded");

    const searchParams = useSearchParams();

    const pathname = usePathname();

    const lastPage = Math.ceil(props.totalItems / props.itemPerPage) || 1;

    const totalPageDisplayed = useMemo(() => {
      return lastPage > maxLinksDisplayed + 2
        ? maxLinksDisplayed + 2
        : lastPage;
    }, [lastPage, maxLinksDisplayed]);

    const pages = useMemo(() => {
      const pagesList: number[] = [];

      let firstButton = currentPage - Math.floor(totalPageDisplayed / 2);

      let lastButton =
        firstButton + (totalPageDisplayed - Math.ceil(totalPageDisplayed % 2));

      if (firstButton < 1) {
        firstButton = 1;
        lastButton = firstButton + (totalPageDisplayed - 1);
      }

      if (lastButton > lastPage) {
        lastButton = lastPage;
        firstButton = lastButton - (totalPageDisplayed - 1);
      }

      for (let page = firstButton; page <= lastButton; page += 1) {
        if (page === firstButton || page === lastButton) {
          // eslint-disable-next-line no-continue
          continue;
        }

        pagesList.push(page);
      }

      return pagesList;
    }, [currentPage, lastPage, totalPageDisplayed]);

    const showLastLink = lastPage > 1;

    const paginatedLink = (page = 1) => {
      if (props.noRouter) {
        return {};
      }

      const validatedPage = Math.max(1, Math.min(page, lastPage));

      const query: Record<string, string | number | undefined> = {};

      searchParams.forEach((value, key) => {
        query[key] = value;
      });

      if (routerQueryKey) {
        query[routerQueryKey] = validatedPage <= 1 ? undefined : validatedPage;
      }

      let queryString = Object.keys(query)
        .filter((q) => query[q])
        .map((q) => `${q}=${query[q]}`)
        .join("&");

      if (queryString.length > 0) {
        queryString = `?${queryString}`;
      }

      return `${pathname}${queryString}`;
    };

    const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, page = 1) => {
      const validatedPage = Math.max(1, Math.min(page, lastPage));

      setCurrentPage(validatedPage);

      if (props.noRouter) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    return (
      <div
        className={cn(
          "nui-pagination",
          rounded && radiuses[rounded],
          color && colors[color],
          props.classes?.wrapper,
        )}
        ref={ref}
      >
        <BaseFocusLoop
          as="ul"
          className={cn(
            "nui-pagination-list",
            rounded && radiuses[rounded],
            props.classes?.list,
          )}
        >
          {props.beforePagination}
          <li>
            <Link
              href={paginatedLink(1)}
              tabIndex={0}
              className={cn(
                "nui-pagination-link",
                currentPage === 1 && "nui-active",
                rounded && radiuses[rounded],
                props.classes?.link,
              )}
              onKeyDown={(e) => e.key === " " && e.currentTarget.click()}
              onClick={(e) => handleLinkClick(e, 1)}
            >
              1
            </Link>
          </li>

          {showLastLink && pages.length > 0 && pages[0]! > 2 && (
            <li>
              <span
                className={cn(
                  "nui-pagination-ellipsis",
                  rounded && radiuses[rounded],
                  props.classes?.ellipsis,
                )}
              >
                {ellipsis}
              </span>
            </li>
          )}

          {pages.map((page) => (
            <li key={page}>
              <Link
                href={paginatedLink(page)}
                tabIndex={0}
                aria-current={currentPage === page ? "page" : undefined}
                className={cn(
                  "nui-pagination-link",
                  currentPage === page && "nui-active",
                  rounded && radiuses[rounded],
                  props.classes?.link,
                )}
                onKeyDown={(e) => e.key === " " && e.currentTarget.click()}
                onClick={(e) => handleLinkClick(e, page)}
              >
                {page}
              </Link>
            </li>
          ))}

          {showLastLink && pages[pages.length - 1]! < lastPage - 1 && (
            <li>
              <span
                className={cn(
                  "nui-pagination-ellipsis",
                  rounded && radiuses[rounded],
                  props.classes?.ellipsis,
                )}
              >
                {ellipsis}
              </span>
            </li>
          )}

          {showLastLink && (
            <li>
              <Link
                href={paginatedLink(lastPage)}
                tabIndex={0}
                className={cn(
                  "nui-pagination-link",
                  currentPage === lastPage && "nui-active",
                  rounded && radiuses[rounded],
                  props.classes?.link,
                )}
                onKeyDown={(e) => e.key === " " && e.currentTarget.click()}
                onClick={(e) => handleLinkClick(e, lastPage)}
              >
                {lastPage}
              </Link>
            </li>
          )}
          {props.afterPagination}
        </BaseFocusLoop>

        <BaseFocusLoop
          className={cn(
            "nui-pagination-buttons",
            rounded && radiuses[rounded],
            props.classes?.buttons,
          )}
        >
          {props.beforeNavigation}

          {/* <!-- Previous --> */}
          <Link
            href={paginatedLink(currentPage - 1)}
            tabIndex={0}
            className={cn("nui-pagination-button", props.classes?.button)}
            onKeyDown={(e) => e.key === " " && e.currentTarget.click()}
            onClick={(e) => handleLinkClick(e, currentPage - 1)}
          >
            <Icon icon={previousIcon} className="pagination-button-icon" />
          </Link>

          {/* <!-- Next --> */}
          <Link
            href={paginatedLink(currentPage + 1)}
            tabIndex={0}
            className={cn("nui-pagination-button", props.classes?.button)}
            onKeyDown={(e) => e.key === " " && e.currentTarget.click()}
            onClick={(e) => handleLinkClick(e, currentPage + 1)}
          >
            <Icon icon={nextIcon} className="pagination-button-icon" />
          </Link>
          {props.afterNavigation}
        </BaseFocusLoop>
      </div>
    );
  },
);
