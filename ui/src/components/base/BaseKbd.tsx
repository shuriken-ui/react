import { type HTMLAttributes, forwardRef } from "react";
import { Icon } from "@iconify/react";
import { cn } from "~/utils";
import { useNuiDefaultProperty } from "~/Provider";

type BaseKbdProps = HTMLAttributes<HTMLElement> & {
  /**
   * The icon to display for the kbd.
   */
  icon?: string;

  /**
   * The color of the kbd.
   *
   * @default 'default'
   */
  color?: "default" | "default-contrast" | "muted" | "muted-contrast" | "none";

  /**
   * The radius of the kbd.
   *
   * @default 'sm'
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";

  /**
   * The radius of the kbd.
   *
   * @default 'sm'
   */
  size?: "xs" | "sm" | "md" | "lg";
};

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
  none: "",
  default: "nui-kbd-default",
  "default-contrast": "nui-kbd-default-contrast",
  muted: "nui-kbd-muted",
  "muted-contrast": "nui-kbd-muted-contrast",
};

export const BaseKbd = forwardRef<HTMLElement, BaseKbdProps>(function BaseKbd(
  { className: classes, ...props },
  ref,
) {
  const color = useNuiDefaultProperty(props, "BaseKbd", "color");
  const rounded = useNuiDefaultProperty(props, "BaseKbd", "rounded");
  const size = useNuiDefaultProperty(props, "BaseKbd", "size");

  return (
    <kbd
      className={cn(
        "nui-kbd",
        color && colors[color],
        size && sizes[size],
        rounded && radiuses[rounded],
        classes,
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
});
