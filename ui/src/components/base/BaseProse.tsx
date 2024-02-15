import { HTMLAttributes, forwardRef } from "react";
import { useConfig } from "../../Provider";
import { cn } from "../../utils";

type BaseProseProps = HTMLAttributes<HTMLDivElement> & {
  /**
   * Inner elements shapes.
   *
   */
  rounded?: "none" | "sm" | "md" | "lg";
};

const radiuses = {
  none: "nui-prose-straight",
  sm: "nui-prose-rounded",
  md: "nui-prose-smooth",
  lg: "nui-prose-curved",
};

export const BaseProse = forwardRef<HTMLDivElement, BaseProseProps>(
  function BaseProse({ children, ...props }, ref) {
    const config = useConfig();

    const rounded = props.rounded ?? config.BaseProse?.rounded;

    return (
      <div
        className={cn(
          "nui-prose",
          rounded && radiuses[rounded],
          props.className,
        )}
        ref={ref}
      >
        {children}
      </div>
    );
  },
);
