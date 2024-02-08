import { ReactNode, forwardRef, useState } from "react";
import { Icon } from "@iconify/react";
import { cn } from "../../utils";
import { useConfig } from "../../Provider";

interface BaseTabsProps {
  /**
   * An array of tab objects that contain a label and value
   */
  tabs: {
    /**
     * The label to display for the tab
     */
    label: string;
    /**
     * The value of the tab. This value will be used to identify the tab when it is selected.
     */
    value: string;
    /**
     * An optional icon to display next to the tab label
     */
    icon?: string;
  }[];

  /**
   * The value of the currently selected tab. This should match the value of one of the tabs in the tabs array.
   */
  defaultValue?: string;

  /**
   *
   * change handler function
   *
   */
  onChange?: (value: string) => void;

  /**
   * The type of tabs to display. Can be either "tabs" or "box".
   */
  type?: "tabs" | "box";

  /**
   * The horizontal alignment of the tabs.
   */
  justify?: "start" | "center" | "end";

  /**
   * Whether or not to hide the label for the tab.
   */
  hideLabel?: boolean;

  children:
    | ReactNode
    | ((activeValue: string, toggle: (value: string) => void) => ReactNode);
}

const justifies = {
  start: "",
  center: "nui-tabs-centered",
  end: "nui-tabs-end",
};

const types = {
  tabs: "nui-tab-item",
  box: "nui-pill-item",
};

export const BaseTabs = forwardRef<HTMLDivElement, BaseTabsProps>(
  function BaseTabs(
    { defaultValue = "", onChange = () => {}, tabs, children, ...props },
    ref,
  ) {
    const [activeValue, setActiveValue] = useState<string>(defaultValue);

    const config = useConfig();

    const justify = props.justify ?? config.BaseTabs?.justify;

    const type = props.type ?? config.BaseTabs?.type;

    return (
      <div className={cn("nui-tabs", justify && justifies[justify])} ref={ref}>
        <div className="nui-tabs-inner">
          {tabs.map((tab, index) => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
              href="#"
              key={index}
              className={cn(
                type && types[type],
                activeValue === tab.value && "nui-active",
                tab.icon && "nui-has-icon",
              )}
              tabIndex={0}
              onClick={(e) => {
                e.preventDefault();
                setActiveValue(tab.value);
                onChange(activeValue);
              }}
            >
              {tab.icon && (
                <Icon icon={tab.icon} className="me-1 block h-5 w-5" />
              )}
              <span
                className={cn(
                  type === "box" && tab.icon && "text-[.85rem]",
                  type === "box" && !tab.icon && "text-sm",
                  type === "tabs" && "text-sm",
                )}
              >
                {tab.label}
              </span>
            </a>
          ))}
        </div>

        {!!children && (
          <div className="relative block">
            {typeof children === "function"
              ? children(activeValue, (toggleValue) =>
                  setActiveValue(toggleValue),
                )
              : children}
          </div>
        )}
      </div>
    );
  },
);
