import { FC, ReactNode } from "react";
import { useConfig } from "../../Provider";

interface BaseProseProps {
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

export const BaseProse: FC<BaseProseProps> = ({
  shape: defaultShape,
  children,
}) => {
  const config = useConfig();

  const shape = defaultShape ?? config.defaultShapes.progress;

  return (
    <div className={`nui-prose ${shape ? shapeStyle[shape] : ""}`}>
      {children}
    </div>
  );
};
