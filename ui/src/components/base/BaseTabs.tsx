import { forwardRef, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { cn } from "../../utils";

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
   * The horizontal alignment of the tabs. Can be "start", "center", or "end".
   */
  justify?: "start" | "center" | "end";

  /**
   * Whether or not to display the tabs as boxes.
   */
  boxed?: boolean;

  /**
   * Whether or not to hide the label for the tab.
   */
  hideLabel?: boolean;
}

const justifyStyle = {
  start: "",
  center: "nui-tabs-centered",
  end: "nui-tabs-end",
};

const typeStyle = {
  tabs: "nui-tab-item",
  box: "nui-pill-item",
};

export const BaseTabs = forwardRef<HTMLDivElement, BaseTabsProps>(
  function BaseTabs(
    {
      justify,
      type = "box",
      boxed,
      hideLabel,
      defaultValue = "",
      onChange = () => {},
      tabs,
    },
    ref,
  ) {
    const [activeValue, setActiveValue] = useState<string>(defaultValue);

    useEffect(() => {
      onChange(activeValue);
    }, [activeValue, onChange]);

    return (
      <div
        className={cn("nui-tabs", justify && justifyStyle[justify])}
        ref={ref}
      >
        <div className="nui-tabs-inner">
          {tabs.map((tab, index) => (
            <a
              href="/#"
              key={index}
              className={cn(
                typeStyle[type],
                activeValue === tab.value && "nui-active",
                tab.icon && "nui-has-icon",
              )}
              tabIndex={0}
              onClick={() => {
                setActiveValue(tab.value);
              }}
            >
              {tab.icon && (
                <Icon icon={tab.icon} className="me-1 block h-5 w-5" />
              )}
              <span
                className={cn(
                  type === "box" && tab.icon && "text-[.85rem]",
                  type === "tabs" && "text-sm",
                )}
              >
                {tab.label}
              </span>
            </a>
          ))}
        </div>

        <div className="relative block">{activeValue}</div>
      </div>
    );
  },
);
