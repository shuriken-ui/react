import { HTMLAttributes, forwardRef } from "react";
import { cn } from "../../utils";

export const BaseButtonGroup = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(function BaseButtonGroup(
  { className: classes = "", children, ...props },
  ref,
) {
  return (
    <div className={cn("nui-button-group", classes)} {...props} ref={ref}>
      {children}
    </div>
  );
});
