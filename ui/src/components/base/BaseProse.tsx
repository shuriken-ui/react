import { HTMLAttributes, forwardRef } from "react";
import { useConfig } from "../../Provider";
import { cn } from "../../utils";

type BaseProseProps = HTMLAttributes<HTMLDivElement> & {
  /**
   * Inner elements shapes.
   */
  shape?: "straight" | "rounded" | "curved";
};

const shapeStyle = {
  straight: "nui-prose-straight",
  rounded: "nui-prose-rounded",
  curved: "nui-prose-curved",
  full: "",
};

export const BaseProse = forwardRef<HTMLDivElement, BaseProseProps>(
  function BaseProse(
    { shape: defaultShape, children, className: classes },
    ref,
  ) {
    const config = useConfig();

    const shape = defaultShape ?? config.defaultShapes.progress;

    return (
      <div
        className={cn("nui-prose", shape && shapeStyle[shape], classes)}
        ref={ref}
      >
        {children}
      </div>
    );
  },
);
