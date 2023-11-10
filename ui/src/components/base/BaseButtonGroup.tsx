import { HTMLAttributes, forwardRef } from "react";

export const BaseButtonGroup = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(function BaseButtonGroup(
  { className: classes = "", children, ...props },
  ref,
) {
  return (
    <div className={`nui-button-group ${classes}`} {...props} ref={ref}>
      {children}
    </div>
  );
});
