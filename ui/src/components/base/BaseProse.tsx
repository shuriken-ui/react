import { ReactNode, forwardRef } from "react";
import { useConfig } from "../../Provider";

interface BaseProseProps {
  /**
   * children
   */
  children: ReactNode;

  /**
   * Inner elements shapes.
   */
  shape?: "straight" | "rounded" | "curved";
}

const shapeStyle = {
  straight: "nui-prose-straight",
  rounded: "nui-prose-rounded",
  curved: "nui-prose-curved",
  full: "",
};

export const BaseProse = forwardRef<HTMLDivElement, BaseProseProps>(
  function BaseProse({ shape: defaultShape, children }, ref) {
    const config = useConfig();

    const shape = defaultShape ?? config.defaultShapes.progress;

    return (
      <div className={`nui-prose ${shape ? shapeStyle[shape] : ""}`} ref={ref}>
        {children}
      </div>
    );
  },
);
