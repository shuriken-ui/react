import type { FC, SVGProps } from "react";

export const IconMoon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        stroke="currentColor"
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
        className="stroke-2"
      />
    </svg>
  );
};
