import { forwardRef, useMemo } from "react";
import { useConfig } from "../../Provider";
import { cn } from "../../utils";

type BaseProgressProps = {
  /**
   * The size of the progress bar.
   *
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl";

  /**
   * The contrast ot the progress bar.
   *
   */
  contrast?: "default" | "contrast";

  /**
   * The color of the progress bar.
   *
   */
  color?: "primary" | "info" | "success" | "warning" | "danger";

  /**
   * The radius of the progress bar.
   *
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";

  /**
   * The current value of the progress bar.
   * If `value` is not provided, the progress bar will be in an indeterminate state.
   */
  value?: number;

  /**
   * The maximum value of the progress bar.
   */
  max?: number;
};

const colors = {
  primary: "nui-progress-primary",
  info: "nui-progress-info",
  success: "nui-progress-success",
  warning: "nui-progress-warning",
  danger: "nui-progress-danger",
};

const contrasts = {
  default: "nui-progress-default",
  contrast: "nui-progress-contrast",
};

const radiuses = {
  none: "",
  sm: "nui-progress-rounded",
  md: "nui-progress-smooth",
  lg: "nui-progress-curved",
  full: "nui-progress-full",
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
    const config = useConfig();

    const size = props.size ?? config.BaseProgress?.size;

    const contrast = props.contrast ?? config.BaseProgress?.contrast;

    const color = props.color ?? config.BaseProgress?.color;

    const rounded = props.rounded ?? config.BaseProgress?.rounded;

    const value = useMemo(() => {
      if (max === 0) {
        return 0;
      }

      return typeof currentValue === "number"
        ? (currentValue / max) * 100
        : undefined;
    }, [currentValue, max]);

    return (
      // eslint-disable-next-line jsx-a11y/control-has-associated-label
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
        )}
        ref={ref}
      >
        <div
          className={cn(
            "nui-progress-bar",
            value === undefined &&
              "nui-progress-indeterminate animate-nui-progress-indeterminate",
          )}
          style={{ width: value !== undefined ? `${value}%` : "100%" }}
        />
      </div>
    );
  },
);
