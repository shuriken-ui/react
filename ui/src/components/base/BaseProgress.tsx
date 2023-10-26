import React, { FC, useMemo } from "react";
import { useConfig } from "../../Provider";

interface BaseProgressProps {
  /**
   * The color of the progress bar.
   */
  color?: "primary" | "info" | "success" | "warning" | "danger";

  /**
   * The contrast ot the progress bar.
   */
  contrast?: "default" | "contrast";

  /**
   * The shape of the progress bar.
   */
  shape?: "straight" | "rounded" | "curved" | "full";

  /**
   * The size of the progress bar.
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl";

  /**
   * The current value of the progress bar.
   * If `value` is not provided, the progress bar will be in an indeterminate state.
   */
  value?: number;

  /**
   * The maximum value of the progress bar.
   */
  max?: number;
}

const colorStyle = {
  primary: "nui-progress-primary",
  info: "nui-progress-info",
  success: "nui-progress-success",
  warning: "nui-progress-warning",
  danger: "nui-progress-danger",
};

const contrastStyle = {
  default: "nui-progress-default",
  contrast: "nui-progress-contrast",
};

const shapeStyle = {
  straight: "",
  rounded: "nui-progress-rounded",
  curved: "nui-progress-curved",
  full: "nui-progress-full",
};

const sizeStyle = {
  xs: "nui-progress-xs",
  sm: "nui-progress-sm",
  md: "nui-progress-md",
  lg: "nui-progress-lg",
  xl: "nui-progress-xl",
};

export const BaseProgress: FC<BaseProgressProps> = ({
  color = "primary",
  contrast = "default",
  shape: defaultShape,
  size = "sm",
  value: currentValue,
  max = 100,
}) => {
  const config = useConfig();

  const shape = defaultShape ?? config.defaultShapes.progress;

  const value = useMemo(() => {
    if (max === 0) {
      return 0;
    }

    return typeof currentValue === "number" ? (currentValue / max) * 100 : null;
  }, [currentValue, max]);

  return (
    <div
      role="progressbar"
      aria-valuenow={value || undefined}
      aria-valuemax={max}
      className={`nui-progress ${contrastStyle[contrast]} ${
        colorStyle[color]
      } ${sizeStyle[size]} ${shape ? shapeStyle[shape] : ""}`}
    >
      <div
        className={`nui-progress-bar ${
          value === null
            ? "nui-progress-indeterminate animate-nui-progress-indeterminate"
            : ""
        } `}
        style={{ width: value !== null ? `${value}%` : "100%" }}
      />
    </div>
  );
};
