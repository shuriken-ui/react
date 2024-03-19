import type { FC, SVGProps } from "react";

export const IconChevronDown: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m6 9 6 6 6-6"
      />
    </svg>
  );
};
