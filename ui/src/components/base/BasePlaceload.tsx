import { HTMLAttributes, forwardRef } from "react";

type BasePlaceloadProps = HTMLAttributes<HTMLDivElement>;

export const BasePlaceload = forwardRef<HTMLDivElement, BasePlaceloadProps>(
  function BasePlaceload({ className: classes = "" }) {
    return <div className={`nui-placeload animate-nui-placeload ${classes}`} />;
  },
);
