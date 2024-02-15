import { PropsWithChildren, forwardRef, useMemo } from "react";
import { useConfig } from "../../Provider";
import { BasePlaceload } from "./BasePlaceload";
import { useNinjaButton, NinjaButtonProps } from "../../hooks/useNinjaButton";
import { cn } from "../../utils";

type BaseButtonProps = Omit<NinjaButtonProps, "children"> &
  PropsWithChildren<{
    /** The type of the button. Can be 'button', 'submit', or 'reset'. */
    // type?: "button" | "submit" | "reset";

    /** The location to which the button should navigate when clicked. This is only applicable if the button is a link. */
    // to?: string;

    /** Using href instead of to result in a native anchor with no router functionality. */
    // href?: string;

    /** Whether the button should be disabled. */
    // disabled?: boolean;

    /** The value of the 'rel' attribute of the button. This attribute is used to specify the relationship of the linked document with the current document. */
    // rel?: string;

    /** The value of the 'target' attribute of the button. This attribute is used to specify where to open the linked document. */
    // target?: string;

    /** The size of the button */
    size?: "sm" | "md" | "lg" | "xl";

    /**
     * The variant of the button..
     *
     */
    variant?: "solid" | "outline" | "pastel";

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

    /**
     * The radius of the button.
     *
     */
    rounded?: "none" | "sm" | "md" | "lg" | "full";

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
  }>;

const badgeColors = {
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

const sizes = {
  sm: "nui-button-small",
  md: "nui-button-medium",
  lg: "nui-button-large",
  xl: "nui-button-big",
};

const radiuses = {
  none: "",
  sm: "nui-button-rounded",
  md: "nui-button-smooth",
  lg: "nui-button-curved",
  full: "nui-button-full",
};

const variants = {
  solid: "nui-button-solid",
  pastel: "nui-button-pastel",
  outline: "nui-button-outline",
};

const colors = {
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

const shadows = {
  flat: "nui-button-shadow",
  hover: "nui-button-shadow-hover",
};

export const BaseButton = forwardRef<
  HTMLAnchorElement & HTMLButtonElement,
  BaseButtonProps
>(function BaseButton(
  {
    disabled = false,
    badge = false,
    badgePulse = false,
    shadow,
    href,
    type,
    rel = "",
    target = "",
    className: classes,
    loading,
    children,
    ...props
  },
  ref,
) {
  const { is: Component, attributes } = useNinjaButton({
    href,
    type,
    target,
    rel,
    disabled,
  });

  const config = useConfig();

  const rounded = props.rounded ?? config.BaseButton?.rounded;

  const variant = props.variant ?? config.BaseButton?.variant;

  const color = props.color ?? config.BaseButton?.color;

  const size = props.size ?? config.BaseButton?.size;

  const badgeStyle = useMemo(() => {
    if (!color) {
      return "";
    }

    if (badge && ["default", "light", "muted", "none"].includes(color)) {
      return "";
    }

    return badgeColors[color];
  }, [color, badge]);

  return (
    <Component
      className={cn(
        "nui-button",
        loading && "nui-button-loading",
        size && sizes[size],
        rounded && radiuses[rounded],
        variant && variants[variant],
        color && colors[color],
        shadow && shadows[shadow],
        classes,
      )}
      {
        ...(props as object) /** TODO: add correct type */
      }
      {...attributes}
      ref={ref}
    >
      {!loading && children}
      {loading && <BasePlaceload className="h-4 w-12 rounded" />}
      {badge && (
        <span className={cn("nui-button-badge", badgeStyle)}>
          {badgePulse && <span className="nui-button-badge-pulse" />}
          <span className="nui-button-badge-inner" />
        </span>
      )}
    </Component>
  );
});
