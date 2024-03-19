import type { FC, SVGProps } from "react";

export const IconClose: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M18 6 6 18M6 6l12 12"
      />
    </svg>
  );
};
