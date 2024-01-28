import { PropsWithChildren, forwardRef, useMemo } from "react";
import { Menu } from "@headlessui/react";
import { Icon } from "@iconify/react";
import { Float } from "@headlessui-float/react";
import { cn } from "../../../utils";
import { BaseButton } from "../BaseButton";
import { useConfig } from "../../../Provider";
import "./BaseDropdown.css";

type BaseDropdownProps = PropsWithChildren<{
  /**
   * The variant of the dropdown.
   *
   */
  variant?: "button" | "context" | "text";

  /**
   * The color of the button.
   */
  buttonColor?:
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
   * The color of the dropdown.
   */
  color?: "white" | "white-contrast" | "muted" | "muted-contrast" | "none";

  /**
   * The radius of the dropdown button.
   *
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";

  /**
   * The orientation of the dropdown.
   *
   * @deprecated use placement instead
   */
  orientation?: "start" | "end";

  /**
   * The placement of the dropdown via floating-ui.
   */
  placement?:
    | "top"
    | "top-start"
    | "top-end"
    | "right"
    | "right-start"
    | "right-end"
    | "bottom"
    | "bottom-start"
    | "bottom-end"
    | "left"
    | "left-start"
    | "left-end";

  /**
   * The size of the dropdown.
   */
  size?: "md" | "lg";

  /**
   * The label to display for the dropdown.
   */
  label?: string;

  /**
   * The header label to display for the dropdown.
   */
  headerLabel?: string;

  /**
   * Used a fixed strategy to float the component
   */
  fixed?: boolean;
}>;

const sizes = {
  md: "nui-menu-md",
  lg: "nui-menu-lg",
};

const radiuses = {
  none: "",
  sm: "nui-menu-rounded",
  md: "nui-menu-smooth",
  lg: "nui-menu-curved",
  full: "nui-menu-curved",
};

const buttonColors = {
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

const colors = {
  white: "nui-menu-white",
  "white-contrast": "nui-menu-white-contrast",
  muted: "nui-menu-muted",
  "muted-contrast": "nui-menu-muted-contrast",
  primary: "nui-menu-primary",
  info: "nui-menu-info",
  success: "nui-menu-success",
  warning: "nui-menu-warning",
  danger: "nui-menu-danger",
  none: "",
};

export const BaseDropdown = forwardRef<HTMLDivElement, BaseDropdownProps>(
  function BaseDropdown(
    { children, label = "", fixed = false, ...props },
    ref,
  ) {
    const config = useConfig();

    const variant = props.variant ?? config.BaseDropdown?.variant;

    const buttonColor = props.buttonColor ?? config.BaseDropdown?.buttonColor;

    const color = props.color ?? config.BaseDropdown?.color;

    const rounded = props.rounded ?? config.BaseDropdown?.rounded;

    const size = props.size ?? config.BaseDropdown?.size;

    const orientation = props.orientation ?? config.BaseDropdown?.orientation;

    /**
     * fallback placement with old orientation value
     * @todo remove this on next major version
     */
    const placementValue = useMemo(() => {
      if (props.placement) {
        return props.placement;
      }

      return props.orientation === "end" ? "bottom-end" : "bottom-start";
    }, [props.orientation, props.placement]);

    return (
      <div className={cn("nui-dropdown")} ref={ref}>
        <Menu as="div" className="nui-menu">
          {({ open }) => (
            <Float
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-in"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
              flip
              offset={props.variant === "context" ? 6 : 4}
              strategy={fixed ? "fixed" : "absolute"}
              placement={placementValue}
              adaptiveWidth={fixed}
              zIndex={20}
            >
              <Menu.Button as="div">
                {variant === "button" && (
                  <BaseButton
                    color={buttonColor}
                    rounded={rounded}
                    className="!pe-3 !ps-4"
                  >
                    <span>{label}</span>
                    <Icon
                      icon="lucide:chevron-down"
                      className={cn("nui-chevron", open && "rotate-180")}
                    />
                  </BaseButton>
                )}
                {variant === "context" && (
                  // eslint-disable-next-line jsx-a11y/control-has-associated-label
                  <button
                    type="button"
                    className="nui-context-button nui-focus"
                  >
                    <span className="nui-context-button-inner">
                      <Icon
                        icon="lucide:more-horizontal"
                        className={cn("nui-context-icon", open && "rotate-90")}
                      />
                    </span>
                  </button>
                )}
                {variant === "text" && (
                  <button type="button" className="nui-text-button nui-focus">
                    <span className="nui-text-button-inner">{label}</span>
                    <Icon
                      icon="lucide:chevron-down"
                      className={cn("nui-chevron", open && "rotate-180")}
                    />
                  </button>
                )}
              </Menu.Button>

              <Menu.Items
                className={cn(
                  "nui-dropdown-menu",
                  size && sizes[size],
                  rounded && radiuses[rounded],
                  color && colors[color],
                )}
              >
                {props.headerLabel && (
                  <div className="nui-menu-header">
                    <div className="nui-menu-header-inner">
                      <h4 className="nui-menu-header-title">
                        {props.headerLabel}
                      </h4>
                    </div>
                  </div>
                )}
                <div className="nui-menu-content">{children}</div>
              </Menu.Items>
            </Float>
          )}
        </Menu>
      </div>
    );
  },
);
