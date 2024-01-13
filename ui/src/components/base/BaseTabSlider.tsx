import { forwardRef, useEffect, useState } from "react";
import { useConfig } from "../../Provider";
import { cn } from "../../utils";

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

  /**
   * Controls the alignment of the tabs. Can be 'start', 'center', or 'end'.
   */
  justify?: "start" | "center" | "end";

  /**
   * The size of the tabs.
   */
  size?: "sm" | "md";

  /**
   * Controls the shape of the tabs. Can be 'rounded' or 'full'.
   */
  shape?: "straight" | "rounded" | "smooth" | "curved" | "full";

  /**
   * Controls the size of the tabs. Can be condensed or default.
   */
  condensed?: boolean;
}

const justifyStyle = {
  start: "",
  center: "nui-tabs-centered",
  end: "nui-tabs-end",
};

const sizeStyle = {
  sm: "nui-tabs-sm",
  md: "nui-tabs-md",
};

const shapeStyle = {
  straight: "",
  rounded: "nui-tabs-rounded",
  smooth: "nui-tabs-smooth",
  curved: "nui-tabs-curved",
  full: "nui-tabs-full",
};

export const BaseTabSlider = forwardRef<HTMLDivElement, BaseTabSliderProps>(
  function BaseTabSlider(
    {
      size = "md",
      tabs,
      condensed,
      justify,
      shape: defaultShape,
      defaultValue,
      onChange = () => {},
    },
    ref,
  ) {
    const [activeValue, setActiveValue] = useState<string>(
      defaultValue || tabs[0]?.value || "",
    );

    const config = useConfig();

    const shape = defaultShape ?? config.defaultShapes.tabSlider;

    const tabsLength = Math.min(3, Math.max(2, tabs.length));

    useEffect(() => {
      onChange(activeValue);
    }, [activeValue, onChange]);

    return (
      <div
        className={cn(
          "nui-tab-slider",
          justify && justifyStyle[justify],
          shape && shapeStyle[shape],
          sizeStyle[size],
          tabsLength === 2 ? "nui-tabs-two-slots" : "nui-tabs-three-slots",
        )}
        ref={ref}
      >
        <div className="nui-tab-slider-inner">
          <div className="nui-tab-slider-track">
            {tabs.slice(0, tabsLength).map((tab, index) => (
              <button
                key={index}
                type="button"
                className={cn(
                  "nui-tab-slider-item",
                  activeValue === tab.value && "nui-active",
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
        <div className="nui-tab-content">{activeValue}</div>
      </div>
    );
  },
);
