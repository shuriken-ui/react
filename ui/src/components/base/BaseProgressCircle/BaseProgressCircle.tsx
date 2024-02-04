import { CSSProperties, SVGProps, forwardRef, useMemo } from "react";
import { cn } from "../../../utils";
import "./BaseProgressCircle.css";

type BaseProgressCircleProps = {
  /**
   * The current value of the progress circle.
   */
  value?: number;

  /**
   * The maximum value of the progress circle.
   */
  max?: number;

  /**
   * The size of the progress circle.
   */
  size?: number;

  /**
   * The thickness of the progress circle.
   */
  thickness?: number;

  /**
   * Enable/disable animation, or set the animation duration (in seconds).
   */
  animation?: boolean | number;
} & SVGProps<SVGElement>;

export const BaseProgressCircle = forwardRef<
  SVGSVGElement,
  BaseProgressCircleProps
>(function BaseProgressCircle(
  {
    value: defaultValue = 0,
    max = 100,
    size = 60,
    thickness = 4,
    animation = 2,
    className: classes,
  },
  ref,
) {
  const percent = max === 0 ? 0 : (defaultValue / max) * 100;

  const dasharray = `${percent} 100`;

  const duration = useMemo(() => {
    if (animation === false) {
      return "0s";
    }

    const maxDuration = animation === true ? 2 : animation;

    const ratio = percent / 100;

    return ratio ? `${Math.round(maxDuration * ratio * 10) / 10}s` : "0s";
  }, [animation, percent]);

  const cssVariables = {
    "--dasharray": dasharray,
    "--duration": duration,
  } as CSSProperties;

  return (
    <svg
      id="BaseProgressCircle"
      ref={ref}
      role="progressbar"
      aria-valuenow={percent}
      aria-valuemax={max}
      className={cn("block -rotate-90 origin-center", classes)}
      viewBox="0 0 45 45"
      width={size}
      height={size}
      style={cssVariables}
    >
      <circle
        className="text-muted-200 dark:text-muted-700 stroke-current"
        strokeWidth={thickness}
        fill="none"
        cx="50%"
        cy="50%"
        r="15.91549431"
      />
      <circle
        className="circle-value stroke-current transition-all duration-500"
        strokeWidth={thickness}
        strokeDasharray={`${percent},100`}
        strokeLinecap="round"
        fill="none"
        cx="50%"
        cy="50%"
        r="15.91549431"
      />
    </svg>
  );
});
