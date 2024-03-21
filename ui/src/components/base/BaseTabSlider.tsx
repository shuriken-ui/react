import { type ReactNode, forwardRef, useEffect, useState } from "react";
import { useNuiDefaultProperty } from "~/Provider";
import { cn } from "~/utils";

interface BaseTabSliderProps {
  /**
   * An array of objects representing each tab. Each object should have a 'label' and a 'value' property.
   */
  tabs: {
    /** The label displayed for the tab. */
    label?: string;
    /** The value associated with the tab. */
    value: string;
  }[];

  /**
   * The value of the currently selected tab.
   */
  defaultValue?: string;

  /**
   *
   * change handler function
   *
   */
  onChange?: (value: string) => void;

  children:
    | ReactNode
    | ((activeValue: string, toggle: (value: string) => void) => ReactNode);

  /**
   * Defines the color of the active tab
   *
   * @default 'default'
   */
  color?:
    | "default"
    | "default-contrast"
    | "primary"
    | "light"
    | "dark"
    | "black";

  /**
   * Controls the alignment of the tabs. Can be 'start', 'center', or 'end'.
   *
   * @default 'start'
   */
  justify?: "start" | "center" | "end";

  /**
   * Controls the radius of the tabs.
   *
   * @default 'lg'
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";

  /**
   * The size of the tabs.
   *
   * @default 'md'
   */
  size?: "sm" | "md";

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
     * CSS classes to apply to the track element.
     */
    track?: string | string[];

    /**
     * CSS classes to apply to the item element.
     */
    item?: string | string[];

    /**
     * CSS classes to apply to the naver element.
     */
    naver?: string | string[];

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

const sizes = {
  sm: "nui-tabs-sm",
  md: "nui-tabs-md",
};

const radiuses = {
  none: "",
  sm: "nui-tabs-rounded-sm",
  md: "nui-tabs-rounded-md",
  lg: "nui-tabs-rounded-lg",
  full: "nui-tabs-rounded-full",
};

const colors = {
  default: "nui-tabs-default",
  "default-contrast": "nui-tabs-default-contrast",
  primary: "nui-tabs-primary",
  light: "nui-tabs-light",
  dark: "nui-tabs-dark",
  black: "nui-tabs-black",
};

export const BaseTabSlider = forwardRef<HTMLDivElement, BaseTabSliderProps>(
  function BaseTabSlider(
    { tabs, defaultValue, onChange, children, ...props },
    ref,
  ) {
    const [activeValue, setActiveValue] = useState<string>(
      defaultValue || tabs[0]?.value || "",
    );

    const color = useNuiDefaultProperty(props, "BaseTabSlider", "color");
    const justify = useNuiDefaultProperty(props, "BaseTabSlider", "justify");
    const rounded = useNuiDefaultProperty(props, "BaseTabSlider", "rounded");
    const size = useNuiDefaultProperty(props, "BaseTabSlider", "size");

    const tabsLength = Math.min(3, Math.max(2, tabs.length));

    useEffect(() => {
      onChange?.(activeValue);
    }, [activeValue, onChange]);

    return (
      <div
        className={cn(
          "nui-tab-slider",
          color && colors[color],
          justify && justifies[justify],
          rounded && radiuses[rounded],
          size && sizes[size],
          tabsLength === 2 ? "nui-tabs-two-slots" : "nui-tabs-three-slots",
          props.classes?.wrapper,
        )}
        ref={ref}
      >
        <div className={cn("nui-tab-slider-inner", props.classes?.inner)}>
          <div className={cn("nui-tab-slider-track", props.classes?.track)}>
            {tabs.slice(0, tabsLength).map((tab, index) => (
              <button
                key={index}
                type="button"
                className={cn(
                  "nui-tab-slider-item",
                  activeValue === tab.value && "nui-active",
                  props.classes?.item,
                )}
                onKeyDown={(e) => {
                  if (e.code === "Space") {
                    setActiveValue(tab.value);
                  }
                }}
                onClick={() => setActiveValue(tab.value)}
              >
                {tab.label ?? tab.value}
              </button>
            ))}
            {activeValue && <div className="nui-tab-slider-naver" />}
          </div>
        </div>
        {!!children && (
          <div className={cn("nui-tab-content", props.classes?.content)}>
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
