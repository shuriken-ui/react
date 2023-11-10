import { HTMLAttributes, forwardRef } from "react";
import { useConfig } from "../../Provider";

type BaseCardProps = HTMLAttributes<HTMLDivElement> & {
  /**
   * The shape of the card.
   */
  shape?: "straight" | "rounded" | "smooth" | "curved";

  /**
   * Whether the card is elevated.
   */
  elevated?: boolean;

  /**
   * Whether the card is elevated on hover.
   */
  elevatedHover?: boolean;

  /**
   * The color of the card.
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
};

const shapeStyle = {
  straight: "",
  rounded: "nui-card-rounded",
  smooth: "nui-card-smooth",
  curved: "nui-card-curved",
};

const colorStyle = {
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

export const BaseCard = forwardRef<HTMLDivElement, BaseCardProps>(
  function BaseCard(
    {
      shape: defaultShape,
      elevated = false,
      elevatedHover = false,
      color = "white",
      className: classes = "",
      children,
      ...props
    },
    ref,
  ) {
    const config = useConfig();

    const shape = defaultShape ?? config.defaultShapes.card;

    return (
      <div
        className={`nui-card  ${shape && shapeStyle[shape]} ${
          colorStyle[color]
        }  ${elevated ? "nui-card-shadow" : ""}  ${
          elevatedHover ? "nui-card-shadow-hover" : ""
        } ${classes}`}
        {...props}
        ref={ref}
      >
        {children}
      </div>
    );
  },
);
