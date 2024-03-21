import { type ReactNode, forwardRef, useState } from "react";
import { Icon } from "@iconify/react";
import { cn } from "~/utils";
import { useNuiDefaultProperty } from "~/Provider";

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
   * Whether or not to hide the label for the tab.
   */
  hideLabel?: boolean;

  children:
    | ReactNode
    | ((activeValue: string, toggle: (value: string) => void) => ReactNode);

  /**
   * Defines the hover color of the active tab
   *
   * @default 'default'
   */
  color?: "default" | "primary" | "light" | "dark" | "black";

  /**
   * The horizontal alignment of the tabs.
   *
   * @default 'start'
   */
  justify?: "start" | "center" | "end";

  /**
   * The type of tabs to display..
   *
   * @default 'tabs'
   */
  type?: "tabs" | "box";
  /**
   * Optional CSS classes to apply to the component inner elements.
   */
  classes?: {
    /**
     * CSS classes to apply to the wrapper element.
     */
    wrapper?: string | string[];

    /**
     * CSS classes to apply to the inner element.
     */
    inner?: string | string[];

    /**
     * CSS classes to apply to the item element.
     */
    item?: string | string[];

    /**
     * CSS classes to apply to the content element.
     */
    content?: string | string[];
  };
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

const colors = {
  default: "nui-tabs-default",
  primary: "nui-tabs-primary",
  light: "nui-tabs-light",
  dark: "nui-tabs-dark",
  black: "nui-tabs-black",
};

export const BaseTabs = forwardRef<HTMLDivElement, BaseTabsProps>(
  function BaseTabs(
    { defaultValue = "", onChange = () => {}, tabs, children, ...props },
    ref,
  ) {
    const [activeValue, setActiveValue] = useState<string>(defaultValue);

    const color = useNuiDefaultProperty(props, "BaseTabs", "color");
    const justify = useNuiDefaultProperty(props, "BaseTabs", "justify");
    const type = useNuiDefaultProperty(props, "BaseTabs", "type");

    return (
      <div
        className={cn(
          "nui-tabs",
          justify && justifies[justify],
          colors && colors[color],
          props.type === "tabs" && "nui-tabs-bordered",
          props.classes?.wrapper,
        )}
        ref={ref}
      >
        <div className={cn("nui-tabs-inner", props.classes?.inner)}>
          {tabs.map((tab, index) => (
            <a
              href="#"
              key={index}
              className={cn(
                type && types[type],
                activeValue === tab.value && "nui-active",
                tab.icon && "nui-has-icon",
                props.classes?.item,
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
          <div className={cn("relative block", props.classes?.content)}>
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
