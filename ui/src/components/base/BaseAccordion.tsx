import { forwardRef, useState } from "react";
import { useNuiDefaultProperty } from "~/Provider";
import { IconChevronDown, IconPlus } from "~/components/icons";
import { cn } from "~/utils";
import { BaseFocusLoop } from "~/components/base/BaseFocusLoop";
import { BaseHeading } from "~/components/base/BaseHeading";
import { BaseParagraph } from "~/components/base/BaseParagraph";

type Item = {
  /**
   * The title of the accordion item.
   */
  title: string;
  /**
   * The content of the accordion item.
   */
  content: string;
};

type BaseAccordionProps = {
  /**
   *
   * The callback function that is called when an accordion item is opened.
   */
  onOpen?: (item: Item) => void;

  /**
   * The items to display in the accordion.
   */
  items: Item[];

  /**
   * Indexes of the items that should be opened by default.
   */
  openItems?: number[];

  /**
   * Whether if multiple elements in the accordion can be opened at same time or not.
   */
  exclusive?: boolean;

  /**
   * Defines the icon used for accordion item toggle action
   *
   * @default 'dot'
   */
  action?: "dot" | "chevron" | "plus";

  /**
   * Defines the color of the accordion
   *
   * @default 'default'
   */
  color?: "default" | "default-contrast" | "muted" | "muted-contrast";

  /**
   * Defines the color of the accordion dot
   *
   * @default 'primary'
   */
  dotColor?:
    | "default"
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "dark"
    | "black";

  /**
   * Defines the radius of the accordion
   *
   * @default 'sm'
   */
  rounded?: "none" | "sm" | "md" | "lg";

  /**
   * Optional CSS classes to apply to the wrapper, label, input, addon, error, and icon elements.
   */
  classes?: {
    /**
     * CSS classes to apply to the wrapper element.
     */
    wrapper?: string | string[];

    /**
     * CSS classes to apply to the details element.
     */
    details?: string | string[];

    /**
     * CSS classes to apply to the summary element.
     */
    summary?: string | string[];

    /**
     * CSS classes to apply to the header element.
     */
    header?: string | string[];

    /**
     * CSS classes to apply to the content element.
     */
    content?: string | string[];
  };
};

const colors = {
  default: "nui-accordion-default",
  "default-contrast": "nui-accordion-default-contrast",
  muted: "nui-accordion-muted",
  "muted-contrast": "nui-accordion-muted-contrast",
};

const dotColors = {
  default: "nui-dot-default",
  primary: "nui-dot-primary",
  info: "nui-dot-info",
  success: "nui-dot-success",
  warning: "nui-dot-warning",
  danger: "nui-dot-danger",
  dark: "nui-dot-dark",
  black: "nui-dot-black",
};

const radiuses = {
  none: "",
  sm: "nui-accordion-rounded-sm",
  md: "nui-accordion-rounded-md",
  lg: "nui-accordion-rounded-lg",
};

const actions = {
  dot: "nui-accordion-dot",
  chevron: "nui-accordion-chevron",
  plus: "nui-accordion-plus",
};

export const BaseAccordion = forwardRef<HTMLDivElement, BaseAccordionProps>(
  function BaseAccordion(
    { openItems = [], items, exclusive = false, ...props },
    ref,
  ) {
    const action = useNuiDefaultProperty(props, "BaseAccordion", "action");
    const color = useNuiDefaultProperty(props, "BaseAccordion", "color");
    const dotColor = useNuiDefaultProperty(props, "BaseAccordion", "dotColor");
    const rounded = useNuiDefaultProperty(props, "BaseAccordion", "rounded");

    const [internalOpenItems, setInternalOpenItems] =
      useState<number[]>(openItems);

    function toggle(key: number) {
      const wasOpen = internalOpenItems.includes(key);

      if (exclusive) {
        setInternalOpenItems((prevOpenItems) =>
          prevOpenItems.splice(0, prevOpenItems.length),
        );

        if (!wasOpen) {
          props.onOpen?.(items[key]!);
          setInternalOpenItems((prevOpenItems) => [...prevOpenItems, key]);
        }

        return;
      }

      if (wasOpen) {
        setInternalOpenItems((prevOpenItems) =>
          prevOpenItems.splice(prevOpenItems.indexOf(key), 1),
        );
      } else {
        props.onOpen?.(items[key]!);
        setInternalOpenItems((prevOpenItems) => [...prevOpenItems, key]);
      }
    }

    return (
      <BaseFocusLoop ref={ref}>
        {items.map((item, key) => (
          <div
            key={key}
            className={cn(
              "nui-accordion",
              action && actions[action],
              color && colors[color],
              dotColor && dotColors[dotColor],
              rounded && radiuses[rounded],
              props.classes?.wrapper,
            )}
          >
            <details
              open={internalOpenItems.includes(key)}
              className={cn("nui-accordion-detail", props.classes?.details)}
            >
              <summary
                className={cn("nui-accordion-summary", props.classes?.summary)}
                tabIndex={0}
                onClick={(e) => {
                  e.preventDefault();
                  toggle(key);
                }}
              >
                <div
                  className={cn("nui-accordion-header", props.classes?.header)}
                >
                  <BaseHeading
                    as="h4"
                    size="sm"
                    weight="semibold"
                    lead="none"
                    className="nui-accordion-header-inner"
                  >
                    {item.title}
                  </BaseHeading>

                  {action === "dot" && <div className="nui-accordion-dot" />}
                  {action === "chevron" && (
                    <div className="nui-icon-outer">
                      <IconChevronDown className="nui-chevron-icon" />
                    </div>
                  )}
                  {action === "plus" && (
                    <div className="nui-icon-outer">
                      <IconPlus className="nui-plus-icon" />
                    </div>
                  )}
                </div>
              </summary>
              <div
                className={cn("nui-accordion-content", props.classes?.content)}
              >
                <BaseParagraph size="md" lead="tight">
                  {item.content}
                </BaseParagraph>
              </div>
            </details>
          </div>
        ))}
      </BaseFocusLoop>
    );
  },
);
