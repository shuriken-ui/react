import { type HTMLAttributes, forwardRef } from "react";
import { useNuiDefaultProperty } from "~/Provider";
import { cn } from "~/utils";

type BaseProseProps = HTMLAttributes<HTMLDivElement> & {
  /**
   * Inner elements shapes.
   *
   * @default 'none'
   */
  rounded?: "none" | "sm" | "md" | "lg";
};

const radiuses = {
  none: "nui-prose-rounded-none",
  sm: "nui-prose-rounded-sm",
  md: "nui-prose-rounded-md",
  lg: "nui-prose-rounded-lg",
};

export const BaseProse = forwardRef<HTMLDivElement, BaseProseProps>(
  function BaseProse({ children, ...props }, ref) {
    const rounded = useNuiDefaultProperty(props, "BaseProse", "rounded");

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
