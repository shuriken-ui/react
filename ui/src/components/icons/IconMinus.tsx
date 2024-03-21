import type { FC, SVGProps } from "react";

export const IconMinus: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 12h14"
      />
    </svg>
  );
};
