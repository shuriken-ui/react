import { forwardRef } from "react";

export const BasePlacehold = forwardRef<HTMLDivElement>(
  function BasePlacehold(props, ref) {
    return (
      <div
        className="nui-placeload animate-nui-placeload"
        {...props}
        ref={ref}
      />
    );
  },
);
