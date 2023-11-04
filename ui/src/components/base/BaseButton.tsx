import { ReactNode, forwardRef } from "react";
import { useConfig } from "../../Provider";
import { BasePlaceload } from "./BasePlaceload";
import { useNinjaButton } from "../../hooks/use-ninja-button";

type BaseButtonProps = {
  /** The type of the button. Can be 'button', 'submit', or 'reset'. */
  type?: "button" | "submit" | "reset";

  /** The location to which the button should navigate when clicked. This is only applicable if the button is a link. */
  to?: string;

  /** Using href instead of to result in a native anchor with no router functionality. */
  href?: string;

  /** Whether the button should be disabled. */
  disabled?: boolean;

  /** The value of the 'rel' attribute of the button. This attribute is used to specify the relationship of the linked document with the current document. */
  rel?: string;

  /** The value of the 'target' attribute of the button. This attribute is used to specify where to open the linked document. */
  target?: string;

  /** The size of the button */
  size?: "sm" | "md" | "lg" | "xl";

  /** The flavor of the button. Can be 'solid', 'outline', or 'pastel'. */
  flavor?: "solid" | "outline" | "pastel";

  /** The color of the button. Can be 'default', 'primary', 'info', 'success', 'warning', 'danger', or 'none. */
  color?:
    | "default"
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "light"
    | "muted"
    | "none";

  /** The shape of the button. Can be 'straight', 'rounded', 'curved', or 'full'. */
  shape?: "straight" | "rounded" | "curved" | "smooth" | "full";

  /** Whether the button is in a loading state. */
  loading?: boolean;

  /** The badge indicator */
  badge?: boolean;

  /** Add a pulse animation on the badge */
  badgePulse?: boolean;

  /**
   * Adds a flat or a on hover shadow to the button.
   */
  shadow?: "flat" | "hover";

  /**
   * children
   */
  children: ReactNode;

  /**
   * css class
   */
  className?: string;
};

const badgeColorStyle = {
  primary: "nui-badge-primary",
  info: "nui-badge-info",
  success: "nui-badge-success",
  warning: "nui-badge-warning",
  danger: "nui-badge-danger",
  none: "",
  default: "",
  light: "",
  muted: "",
};

const sizeStyle = {
  sm: "nui-button-small",
  md: "nui-button-medium",
  lg: "nui-button-large",
  xl: "nui-button-big",
};

const shapeStyle = {
  straight: "",
  rounded: "nui-button-rounded",
  curved: "nui-button-curved",
  smooth: "nui-button-smooth",
  full: "nui-button-full",
};

const flavorStyle = {
  solid: "nui-button-solid",
  pastel: "nui-button-pastel",
  outline: "nui-button-outline",
};

const colorStyle = {
  none: "",
  default: "nui-button-default",
  primary: "nui-button-primary",
  info: "nui-button-info",
  success: "nui-button-success",
  warning: "nui-button-warning",
  danger: "nui-button-danger",
  light: "nui-button-light",
  muted: "nui-button-muted",
};

const shadowStyle = {
  flat: "nui-button-shadow",
  hover: "nui-button-shadow-hover",
};

export const BaseButton = forwardRef<
  HTMLAnchorElement & HTMLButtonElement,
  BaseButtonProps
>(function BaseButton(
  {
    flavor = "solid",
    color = "default",
    size = "md",
    shape: defaultShape,
    disabled = false,
    badge = false,
    badgePulse = false,
    shadow,
    rel = "",
    target = "",
    className: classes = "",
    loading,
    children,
    ...props
  },
  ref,
) {
  const { is: Component, attributes } = useNinjaButton({
    ...props,
    rel,
    target,
    disabled,
  });

  const config = useConfig();

  const shape = defaultShape ?? config.defaultShapes.button;

  const badgeStyle =
    badge && ["default", "light", "muted", "none"].includes(color)
      ? ""
      : `nui-button-badge ${badgeColorStyle[color]}`;

  return (
    <Component
      className={`nui-button ${loading ? "nui-button-loading" : ""} ${
        sizeStyle[size]
      } ${shape ? shapeStyle[shape] : ""} ${flavorStyle[flavor]} ${
        colorStyle[color]
      } ${shadow ? shadowStyle[shadow] : ""} ${classes}`}
      {...attributes}
      ref={ref}
    >
      {!loading && children}
      {loading && <BasePlaceload className="h-4 w-12 rounded" />}
      {badge && (
        <span className={badgeStyle}>
          {badgePulse && <span className="nui-button-badge-pulse" />}
          <span className="nui-button-badge-inner" />
        </span>
      )}
    </Component>
  );
});
