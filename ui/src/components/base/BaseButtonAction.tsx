import { FC, ReactNode } from "react";
import { BasePlaceload, useConfig } from "src";
import { useNinjaButton } from "../../hooks/use-ninja-button";

type BaseButtonActionProps = {
  /**
   * The type of button.
   */
  type?: "button" | "submit" | "reset";

  /**
   * The route to navigate to when the button is clicked.
   */
  to?: string;

  /** Using href instead of to result in a native anchor with no router functionality. */
  href?: string;

  /**
   * Whether the button is disabled.
   */
  disabled?: boolean;

  /**
   * The value for the `rel` attribute on the button.
   */
  rel?: string;

  /**
   * The value for the `target` attribute on the button.
   */
  target?: string;

  /**
   * The shape of the button.
   */
  shape?: "straight" | "rounded" | "smooth" | "curved" | "full";

  /**
   * Whether the button is in a loading state.
   */
  loading?: boolean;

  /**
   * The color of the button.
   */
  color?:
    | "default"
    | "muted"
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "none";

  /**
   * children
   */
  children: ReactNode;
};

const shapeStyle = {
  straight: "",
  rounded: "nui-button-rounded",
  smooth: "nui-button-smooth",
  curved: "nui-button-curved",
  full: "nui-button-full",
};

const colorStyle = {
  default: "nui-button-default",
  muted: "nui-button-muted",
  primary: "nui-button-primary",
  info: "nui-button-info",
  success: "nui-button-success",
  warning: "nui-button-warning",
  danger: "nui-button-danger",
  none: "",
};

export const BaseButtonAction: FC<BaseButtonActionProps> = ({
  shape: defaultShape,
  target = "",
  rel = "",
  color = "default",
  disabled = false,
  loading = false,
  children,
  ...props
}) => {
  const { is: Component, attributes } = useNinjaButton({
    ...props,
    target,
    rel,
    disabled,
  });

  const config = useConfig();

  const shape = defaultShape ?? config.defaultShapes.buttonAction;

  return (
    <Component
      className={`nui-button-action ${loading ? "nui-button-loading" : ""} ${
        colorStyle[color]
      } ${shape ? shapeStyle[shape] : ""}`}
      {...attributes}
    >
      {loading ? <BasePlaceload className="h-3 w-8 rounded" /> : children}
    </Component>
  );
};
