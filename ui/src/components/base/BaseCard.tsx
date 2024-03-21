import { type HTMLAttributes, forwardRef } from "react";
import { useNuiDefaultProperty } from "~/Provider";
import { cn } from "~/utils";

type BaseCardProps = HTMLAttributes<HTMLDivElement> & {
  /**
   * Adds a flat or a on hover shadow to the card.
   */
  shadow?: "flat" | "hover";

  /**
   * The color of the card.
   *
   * @default 'default'
   */
  color?:
    | "default"
    | "default-contrast"
    | "muted"
    | "muted-contrast"
    | "dark"
    | "black"
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "none";

  /**
   * The radius of the card.
   *
   * @default 'sm'
   */
  rounded?: "none" | "sm" | "md" | "lg";
};

const radiuses = {
  none: "",
  sm: "nui-card-rounded-sm",
  md: "nui-card-rounded-md",
  lg: "nui-card-rounded-lg",
};

const colors = {
  default: "nui-card-default",
  "default-contrast": "nui-card-default-contrast",
  muted: "nui-card-muted",
  "muted-contrast": "nui-card-muted-contrast",
  dark: "nui-card-dark",
  black: "nui-card-black",
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
  function BaseCard({ className: classes, children, ...props }, ref) {
    const color = useNuiDefaultProperty(props, "BaseCard", "color");
    const rounded = useNuiDefaultProperty(props, "BaseCard", "rounded");

    const attrs = {
      ...props,
      color: undefined,
      rounded: undefined,
    };

    return (
      <div
        className={cn(
          "nui-card",
          rounded && radiuses[rounded],
          color && colors[color],
          props.shadow && shadows[props.shadow],
          classes,
        )}
        {...attrs}
        ref={ref}
      >
        {children}
      </div>
    );
  },
);
