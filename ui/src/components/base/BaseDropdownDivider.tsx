import { forwardRef } from "react";

export const BaseDropdownDivider = forwardRef<HTMLDivElement>(
  function BaseDropdownDivider(props, ref) {
    return <div className="nui-dropdown-divider" ref={ref} />;
  },
);
