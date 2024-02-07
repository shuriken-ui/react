import { PropsWithChildren, forwardRef } from "react";
import { Icon } from "@iconify/react";
import { cn } from "../../utils";
import { useConfig } from "../../Provider";

type BaseKbdProps = PropsWithChildren<{
  /**
   * The radius of the kbd.
   *
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";

  /**
   * The radius of the kbd.
   *
   */
  size?: "xs" | "sm" | "md" | "lg";

  /**
   * The color of the kbd.
   *
   */
  color?: "default" | "muted" | "none";

  /**
   * The icon to display for the kbd.
   */
  icon?: string;

  /**
   * Optional CSS classes to apply to the wrapper, label, input, addon, error, and icon elements.
   */
  classes?: {
    /**
     * CSS classes to apply to the wrapper element.
     */
    wrapper?: string | string[];
  };
}>;

const radiuses = {
  none: "",
  sm: "nui-kbd-rounded-sm",
  md: "nui-kbd-rounded-md",
  lg: "nui-kbd-rounded-lg",
  full: "nui-kbd-rounded-full",
};

const sizes = {
  xs: "nui-kbd-xs",
  sm: "nui-kbd-sm",
  md: "nui-kbd-md",
  lg: "nui-kbd-lg",
};

const colors = {
  default: "nui-kbd-default",
  muted: "nui-kbd-muted",
  none: "",
};

export const BaseKbd = forwardRef<HTMLElement, BaseKbdProps>(
  function BaseKbd(props, ref) {
    const config = useConfig();

    const rounded = props.rounded ?? config.BaseKbd?.rounded;

    const size = props.size ?? config.BaseKbd?.size;

    const color = props.color ?? config.BaseKbd?.color;

    return (
      <kbd
        className={cn(
          "nui-kbd",
          color && colors[color],
          size && sizes[size],
          rounded && radiuses[rounded],
          props.classes?.wrapper,
        )}
        ref={ref}
      >
        {props.children
          ? props.children
          : props.icon && (
              <span className="nui-kbd-icon-outer">
                <Icon icon={props.icon} className="nui-kbd-icon-inner" />
              </span>
            )}
      </kbd>
    );
  },
);
