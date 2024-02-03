import { HTMLAttributes, forwardRef } from "react";
import { useConfig } from "../../Provider";
import { cn } from "../../utils";

type BaseCardProps = HTMLAttributes<HTMLDivElement> & {
  /**
   * The radius of the card.
   *
   */
  rounded?: "none" | "sm" | "md" | "lg";

  /**
   * The color of the card.
   *
   */
  color?:
    | "white"
    | "white-contrast"
    | "muted"
    | "muted-contrast"
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "none";

  /**
   * Adds a flat or a on hover shadow to the card.
   */
  shadow?: "flat" | "hover";
};

const radiuses = {
  none: "",
  sm: "nui-card-rounded",
  md: "nui-card-smooth",
  lg: "nui-card-curved",
};

const colors = {
  white: "nui-card-white",
  "white-contrast": "nui-card-white-contrast",
  muted: "nui-card-muted",
  "muted-contrast": "nui-card-muted-contrast",
  primary: "nui-card-primary",
  info: "nui-card-info",
  success: "nui-card-success",
  warning: "nui-card-warning",
  danger: "nui-card-danger",
  none: "",
};

const shadows = {
  flat: "nui-card-shadow",
  hover: "nui-card-shadow-hover",
};

export const BaseCard = forwardRef<HTMLDivElement, BaseCardProps>(
  function BaseCard(
    {
      rounded: roundedProp,
      color: colorProp,
      className: classes,
      children,
      ...props
    },
    ref,
  ) {
    const config = useConfig();

    const rounded = roundedProp ?? config.BaseCard?.rounded;

    const color = colorProp ?? config.BaseCard?.color;

    return (
      <div
        className={cn(
          "nui-card",
          rounded && radiuses[rounded],
          color && colors[color],
          props.shadow && shadows[props.shadow],
          classes,
        )}
        {...props}
        ref={ref}
      >
        {children}
      </div>
    );
  },
);
