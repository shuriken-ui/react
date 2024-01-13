/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { forwardRef, useRef } from "react";
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
   * The items to display in accordion.
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
   * Define the shape of the accordion
   */
  shape?: "straight" | "rounded" | "smooth" | "curved";

  /**
   * Define the icon used for accordion item toggle action
   */
  action?: "dot" | "chevron" | "plus";
};

const shapeStyle = {
  straight: "",
  rounded: "nui-accordion-rounded",
  smooth: "nui-accordion-smooth",
  curved: "nui-accordion-curved",
};

const actionStyle = {
  dot: "nui-accordion-dot",
  chevron: "nui-accordion-chevron",
  plus: "nui-accordion-plus",
};

export const BaseAccordion = forwardRef<HTMLDivElement, BaseAccordionProps>(
  function BaseAccordion(
    { openItems = [], action = "dot", items, exclusive = false, ...props },
    ref,
  ) {
    const config = useConfig();

    const shape = props.shape ?? config.defaultShapes.accordion;

    const internalOpenItems = useRef<number[]>(openItems);

    function toggle(key: number) {
      const wasOpen = internalOpenItems.current.includes(key);

      if (exclusive) {
        internalOpenItems.current.splice(0, internalOpenItems.current.length);
        if (!wasOpen) {
          props.onOpen?.(items[key]!);
          internalOpenItems.current.push(key);
        }

        return;
      }

      if (wasOpen) {
        internalOpenItems.current.splice(
          internalOpenItems.current.indexOf(key),
          1,
        );
      } else {
        props.onOpen?.(items[key]!);
        internalOpenItems.current.push(key);
      }
    }

    return (
      <BaseFocusLoop ref={ref}>
        {items.map((item, key) => (
          <div
            key={key}
            className={cn(
              "nui-accordion",
              actionStyle[action],
              shapeStyle[shape],
            )}
          >
            <details
              open={internalOpenItems.current.includes(key)}
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
