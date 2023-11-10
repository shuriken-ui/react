import { FC, SVGProps } from "react";

export const IconCheckCircle: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg aria-hidden="true" viewBox="0 0 52 52" {...props}>
      <circle cx="26" cy="26" r="25" fill="none" stroke="currentColor" />
      <path
        fill="none"
        stroke="currentColor"
        d="m14.1 27.2 7.1 7.2 16.7-16.8"
      />
    </svg>
  );
};
