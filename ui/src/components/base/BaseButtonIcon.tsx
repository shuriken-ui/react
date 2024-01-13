import { HTMLAttributes, forwardRef } from "react";
import { useConfig } from "../../Provider";
import { BasePlaceload } from "./BasePlaceload";
import { useNinjaButton } from "../../hooks/useNinjaButton";
import { cn } from "../../utils";

type BaseButtonIconProps = HTMLAttributes<HTMLDivElement> & {
  /**
   * The type of button.
   * If this is not set and the `to` property is set, the component will be treated as a link.
   */
  type?: "button" | "submit" | "reset";

  /**
   * The route to navigate to when the button or link is clicked.
   * If this is set and the `type` property is not set, the component will be treated as a link.
   */
  to?: string;

  /** Using href instead of to result in a native anchor with no router functionality. */
  href?: string;

  /**
   * Whether the button or link is disabled.
   */
  disabled?: boolean;

  /**
   * The value for the `rel` attribute on the button or link.
   * This property is only relevant for links.
   */
  rel?: string;

  /**
   * The value for the `target` attribute on the button or link.
   * This property is only relevant for links.
   */
  target?: string;

  /**
   * The shape of the button or link.
   */
  shape?: "straight" | "rounded" | "smooth" | "curved" | "full";

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
   * The size of the button.
   */
  size?: "sm" | "md" | "lg";

  /**
   * Whether the button or link is in a loading state.
   */
  loading?: boolean;
};

const shapeStyle = {
  straight: "",
  rounded: "nui-button-rounded",
  smooth: "nui-button-smooth",
  curved: "nui-button-curved",
  full: "nui-button-full",
};

const sizeStyle = {
  sm: "nui-button-small",
  md: "nui-button-medium",
  lg: "nui-button-large",
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

export const BaseButtonIcon = forwardRef<
  HTMLAnchorElement & HTMLButtonElement,
  BaseButtonIconProps
>(function BaseButtonIcon(
  {
    color = "default",
    shape: defaultShape,

    rel = "",
    target = "",
    loading = false,
    size = "md",
    className: classes = "",
    children,
    ...props
  },
  ref,
) {
  const { is: Component, attributes } = useNinjaButton({
    ...props,
    rel,
    target,
  });

  const config = useConfig();

  const shape = defaultShape ?? config.defaultShapes.buttonIcon;

  return (
    <Component
      className={cn(
        "nui-button-icon",
        loading && "nui-button-loading",
        shapeStyle[shape],
        sizeStyle[size],
        colorStyle[color],
        classes,
      )}
      {...attributes}
      ref={ref}
    >
      {loading ? <BasePlaceload className="h-4 w-4 rounded-md" /> : children}
    </Component>
  );
});
