/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { forwardRef, useState } from "react";
import { useConfig } from "../../Provider";
import { IconChevronDown, IconPlus } from "../icons";
import { cn } from "../../utils";
import { BaseFocusLoop } from "./BaseFocusLoop";
import { BaseHeading } from "./BaseHeading";
import { BaseParagraph } from "./BaseParagraph";

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
   * Define the radius of the accordion
   *
   */
  rounded?: "none" | "sm" | "md" | "lg";

  /**
   * Define the icon used for accordion item toggle action
   *
   */
  action?: "dot" | "chevron" | "plus";

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
};

const radiuses = {
  none: "",
  sm: "nui-accordion-rounded",
  md: "nui-accordion-smooth",
  lg: "nui-accordion-curved",
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
    const config = useConfig();

    const rounded = props.rounded ?? config.BaseAccordion?.rounded;

    const action = props.action ?? config.BaseAccordion?.action;

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
              rounded && radiuses[rounded],
            )}
          >
            <details
              open={internalOpenItems.includes(key)}
              className="nui-accordion-detail"
            >
              <summary
                className="nui-accordion-summary"
                // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
                tabIndex={0}
                onClick={(e) => {
                  e.preventDefault();
                  toggle(key);
                }}
              >
                <div className="nui-accordion-header">
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
              <div className="nui-accordion-content">
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
