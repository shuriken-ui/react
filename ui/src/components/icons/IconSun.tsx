import { FC, SVGProps } from "react";

export const IconSun: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" stroke="currentColor" className="stroke-2">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </g>
    </svg>
  );
};
