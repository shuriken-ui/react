import { forwardRef } from "react";

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
};

export const BaseProgressCircle = forwardRef<
  SVGSVGElement,
  BaseProgressCircleProps
>(function BaseProgressCircle(
  { value: defaultValue = 0, max = 100, size = 60, thickness = 4 },
  ref,
) {
  const value = max === 0 ? 0 : (defaultValue / max) * 100;

  return (
    <svg
      ref={ref}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemax={max}
      className="block"
      viewBox="0 0 45 45"
      width={size}
      height={size}
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
        className="stroke-current transition-all duration-500"
        strokeWidth={thickness}
        strokeDasharray={`${value},100`}
        strokeLinecap="round"
        fill="none"
        cx="50%"
        cy="50%"
        r="15.91549431"
      />
    </svg>
  );
});

// TODO: STYLES
// <style scoped>
// .block {
//   animation: circle-chart-fill 2.4s reverse;
//   transform: rotate(-90deg);
//   transform-origin: center;
//   animation-timing-function: cubic-bezier(0.78, 0.59, 0.19, 0.33);
// }

// .block svg circle:nth-child(2) {
//   animation: circle-chart-fill 2.4s reverse;
//   transform: rotate(-90deg);
//   transform-origin: center;
//   animation-timing-function: cubic-bezier(0.78, 0.59, 0.19, 0.33);
// }

// @keyframes circle-chart-fill {
//   50% {
//     stroke-dasharray: 0 0;
//   }

//   100% {
//     stroke-dasharray: 0 100;
//   }
// }

// @keyframes circle-chart-fill-2 {
//   from {
//     opacity: 1;
//   }

//   to {
//     stroke-dasharray: 0 100;
//     opacity: 0;
//   }
// }

// @keyframes circle-chart-fill-3 {
//   0% {
//     opacity: 1;
//   }

//   50% {
//     opacity: 1;
//     stroke-dasharray: 0 100;
//   }

//   100% {
//     stroke-dasharray: 0 100;
//     opacity: 0;
//   }
// }
// </style>
