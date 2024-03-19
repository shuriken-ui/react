import { forwardRef, useMemo } from "react";
import { useNuiDefaultProperty } from "~/Provider";
import { cn } from "~/utils";

type BaseProgressProps = {
  /**
   * The current value of the progress bar.
   * If `value` is not provided, the progress bar will be in an indeterminate state.
   */
  value?: number;

  /**
   * The maximum value of the progress bar.
   */
  max?: number;

  /**
   * The color of the progress bar.
   *
   * @default 'primary'
   */
  color?:
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "light"
    | "dark"
    | "black";

  /**
   * The contrast ot the progress bar.
   *
   * @default 'default'
   */
  contrast?: "default" | "contrast";

  /**
   * The radius of the progress bar.
   *
   * @default 'full'
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";

  /**
   * The size of the progress bar.
   *
   * @default 'sm'
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl";

  /**
   * Optional CSS classes to apply to the component inner elements.
   */
  classes?: {
    /**
     * CSS classes to apply to the wrapper element.
     */
    wrapper?: string | string[];

    /**
     * CSS classes to apply to the progress element.
     */
    progress?: string | string[];
  };
};

const colors = {
  primary: "nui-progress-primary",
  info: "nui-progress-info",
  success: "nui-progress-success",
  warning: "nui-progress-warning",
  danger: "nui-progress-danger",
  light: "nui-progress-light",
  dark: "nui-progress-dark",
  black: "nui-progress-black",
};

const contrasts = {
  default: "nui-progress-default",
  contrast: "nui-progress-contrast",
};

const radiuses = {
  none: "",
  sm: "nui-progress-rounded-sm",
  md: "nui-progress-rounded-md",
  lg: "nui-progress-rounded-lg",
  full: "nui-progress-rounded-full",
};

const sizes = {
  xs: "nui-progress-xs",
  sm: "nui-progress-sm",
  md: "nui-progress-md",
  lg: "nui-progress-lg",
  xl: "nui-progress-xl",
};

export const BaseProgress = forwardRef<HTMLDivElement, BaseProgressProps>(
  function BaseProgress({ value: currentValue, max = 100, ...props }, ref) {
    const color = useNuiDefaultProperty(props, "BaseProgress", "color");
    const contrast = useNuiDefaultProperty(props, "BaseProgress", "contrast");
    const rounded = useNuiDefaultProperty(props, "BaseProgress", "rounded");
    const size = useNuiDefaultProperty(props, "BaseProgress", "size");

    const value = useMemo(() => {
      if (max === 0) {
        return 0;
      }

      return typeof currentValue === "number"
        ? (currentValue / max) * 100
        : undefined;
    }, [currentValue, max]);

    return (
      <div
        role="progressbar"
        aria-valuenow={value}
        aria-valuemax={max}
        className={cn(
          "nui-progress",
          size && sizes[size],
          contrast && contrasts[contrast],
          color && colors[color],
          rounded && radiuses[rounded],
          props.classes?.wrapper,
        )}
        ref={ref}
      >
        <div
          className={cn(
            "nui-progress-bar",
            value === undefined &&
              "nui-progress-indeterminate animate-nui-progress-indeterminate",
            props.classes?.progress,
          )}
          style={{ width: value !== undefined ? `${value}%` : "100%" }}
        />
      </div>
    );
  },
);
