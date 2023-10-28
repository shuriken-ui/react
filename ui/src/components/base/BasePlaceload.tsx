import { FC, HTMLAttributes } from "react";

type BasePlaceloadProps = HTMLAttributes<HTMLDivElement>;

export const BasePlaceload: FC<BasePlaceloadProps> = ({
  className: classes = "",
}) => {
  return <div className={`nui-placeload animate-nui-placeload ${classes}`} />;
};
