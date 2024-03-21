import type { FC, SVGProps } from "react";

export const IconIndeterminate: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M2 12h20"
      />
    </svg>
  );
};
