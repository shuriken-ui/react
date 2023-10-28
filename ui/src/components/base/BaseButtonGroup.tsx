import { FC, HTMLAttributes } from "react";

export const BaseButtonGroup: FC<HTMLAttributes<HTMLDivElement>> = ({
  className: classes = "",
  children,
  ...props
}) => {
  return (
    <div className={`nui-button-group ${classes}`} {...props}>
      {children}
    </div>
  );
};
