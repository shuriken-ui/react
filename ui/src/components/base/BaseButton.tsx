import { type PropsWithChildren, forwardRef } from "react";
import { useNuiDefaultProperty } from "~/Provider";
import { BasePlaceload } from "./BasePlaceload";
import { type NinjaButtonProps, useNinjaButton } from "~/hooks/useNinjaButton";
import { cn } from "~/utils";

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

    /**
     * Adds a flat or a on hover shadow to the button.
     */
    shadow?: "flat" | "hover";

    /** The button badge indicator */
    badge?: boolean;

    /** Add a pulse animation on the badge */
    badgePulse?: boolean;

    /** Whether the button is in a loading state. */
    loading?: boolean;

    /** Whether the button should be disabled. */
    disabled?: boolean;

    /**
     * The color of the button.
     *
     * @default 'default'
     */
    color?:
      | "default"
      | "default-contrast"
      | "muted"
      | "muted-contrast"
      | "light"
      | "dark"
      | "black"
      | "primary"
      | "info"
      | "success"
      | "warning"
      | "danger"
      | "none";

    /**
     * The radius of the button.
     *
     * @default 'sm'
     */
    rounded?: "none" | "sm" | "md" | "lg" | "full";

    /**
     * The size of the button
     *
     * @default 'md'
     */
    size?: "sm" | "md" | "lg" | "xl";

    /**
     * The variant of the button..
     *
     * @default 'solid'
     */
    variant?: "solid" | "outline" | "pastel";
  }>;

const badgeColors = {
  primary: "nui-badge-primary",
  info: "nui-badge-info",
  success: "nui-badge-success",
  warning: "nui-badge-warning",
  danger: "nui-badge-danger",
  none: "",
  default: "",
  "default-contrast": "",
  light: "",
  dark: "",
  black: "",
  muted: "",
  "muted-contrast": "",
};

const sizes = {
  sm: "nui-button-sm",
  md: "nui-button-md",
  lg: "nui-button-lg",
  xl: "nui-button-xl",
};

const radiuses = {
  none: "",
  sm: "nui-button-rounded-sm",
  md: "nui-button-rounded-md",
  lg: "nui-button-rounded-lg",
  full: "nui-button-rounded-full",
};

const variants = {
  solid: "nui-button-solid",
  pastel: "nui-button-pastel",
  outline: "nui-button-outline",
};

const colors = {
  none: "",
  default: "nui-button-default",
  "default-contrast": "nui-button-default-contrast",
  primary: "nui-button-primary",
  info: "nui-button-info",
  success: "nui-button-success",
  warning: "nui-button-warning",
  danger: "nui-button-danger",
  muted: "nui-button-muted",
  "muted-contrast": "nui-button-muted-contrast",
  light: "nui-button-light",
  dark: "nui-button-dark",
  black: "nui-button-black",
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

  const color = useNuiDefaultProperty(props, "BaseButton", "color");
  const rounded = useNuiDefaultProperty(props, "BaseButton", "rounded");
  const size = useNuiDefaultProperty(props, "BaseButton", "size");
  const variant = useNuiDefaultProperty(props, "BaseButton", "variant");

  const attrs: Record<string, unknown> = {
    ...attributes,
    ...props,
    color: undefined,
    rounded: undefined,
    size: undefined,
    variant: undefined,
  };

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
      {...attrs}
      ref={ref}
    >
      {!loading && children}
      {loading && <BasePlaceload className="h-4 w-12 rounded" />}
      {badge && (
        <span className={cn("nui-button-badge", badgeColors[color])}>
          {badgePulse && <span className="nui-button-badge-pulse" />}
          <span className="nui-button-badge-inner" />
        </span>
      )}
    </Component>
  );
});
