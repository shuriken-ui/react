import { HTMLAttributes, forwardRef } from "react";
import { cn } from "../../utils";

type BasePlaceloadProps = HTMLAttributes<HTMLDivElement>;

export const BasePlaceload = forwardRef<HTMLDivElement, BasePlaceloadProps>(
  function BasePlaceload({ className: classes }, ref) {
    return (
      <div
        className={cn("nui-placeload animate-nui-placeload", classes)}
        ref={ref}
      />
    );
  },
);
