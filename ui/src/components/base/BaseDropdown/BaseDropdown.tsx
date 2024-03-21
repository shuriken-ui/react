import { type PropsWithChildren, type ReactNode, forwardRef } from "react";
import { Menu } from "@headlessui/react";
import { Icon } from "@iconify/react";
import { Float } from "@headlessui-float/react";
import { cn } from "~/utils";
import { BaseButton } from "~/components/base/BaseButton";
import { useNuiDefaultProperty } from "~/Provider";
import "./BaseDropdown.css";

type BaseDropdownProps = PropsWithChildren<{
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

  /**
   * The color of the button.
   *
   * @default 'default'
   */
  buttonColor?:
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
   * The color of the dropdown.
   *
   * @default 'default'
   */
  color?: "default" | "default-contrast" | "muted" | "muted-contrast" | "none";

  /**
   * The placement of the dropdown via floating-ui.
   *
   * @default 'bottom-start'
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
   * The radius of the dropdown button.
   *
   * @default 'sm'
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";

  /**
   * The size of the dropdown.
   *
   * @default 'md'
   */
  size?: "md" | "lg";

  /**
   * The variant of the dropdown.
   *
   * @default 'button'
   */
  variant?: "button" | "context" | "text";

  /**
   * Optional CSS classes to apply to the component inner elements.
   */
  classes?: {
    /**
     * CSS classes to apply to the wrapper element.
     */
    wrapper?: string | string[];

    /**
     * CSS classes to apply to the menu element.
     */
    menu?: string | string[];

    /**
     * CSS classes to apply to the header element.
     */
    header?: string | string[];

    /**
     * CSS classes to apply to the content element.
     */
    content?: string | string[];
  };

  /**
   *  The render function for custom button
   */
  renderButton?: ReactNode | ((open: boolean, close: () => void) => ReactNode);
}>;

const sizes = {
  md: "nui-menu-md",
  lg: "nui-menu-lg",
};

const radiuses = {
  none: "",
  sm: "nui-menu-rounded-sm",
  md: "nui-menu-rounded-md",
  lg: "nui-menu-rounded-lg",
  full: "nui-menu-rounded-lg",
};

const colors = {
  default: "nui-menu-default",
  "default-contrast": "nui-menu-default-contrast",
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
    { children, label = "", fixed = false, renderButton, ...props },
    ref,
  ) {
    const buttonColor = useNuiDefaultProperty(
      props,
      "BaseDropdown",
      "buttonColor",
    );
    const color = useNuiDefaultProperty(props, "BaseDropdown", "color");
    const placement = useNuiDefaultProperty(props, "BaseDropdown", "placement");
    const rounded = useNuiDefaultProperty(props, "BaseDropdown", "rounded");
    const size = useNuiDefaultProperty(props, "BaseDropdown", "size");
    const variant = useNuiDefaultProperty(props, "BaseDropdown", "variant");

    return (
      <div className={cn("nui-dropdown", props.classes?.wrapper)} ref={ref}>
        <Menu as="div" className="nui-menu">
          {({ open, close }) => (
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
              placement={placement}
              adaptiveWidth={fixed}
              zIndex={20}
            >
              <Menu.Button as="div">
                {typeof renderButton === "function" ? (
                  renderButton?.(open, close)
                ) : renderButton ? (
                  renderButton
                ) : (
                  <>
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
                      <button
                        type="button"
                        className="nui-context-button nui-focus"
                      >
                        <span className="nui-context-button-inner">
                          <Icon
                            icon="lucide:more-horizontal"
                            className={cn(
                              "nui-context-icon",
                              open && "rotate-90",
                            )}
                          />
                        </span>
                      </button>
                    )}
                    {variant === "text" && (
                      <button
                        type="button"
                        className="nui-text-button nui-focus"
                      >
                        <span className="nui-text-button-inner">{label}</span>
                        <Icon
                          icon="lucide:chevron-down"
                          className={cn("nui-chevron", open && "rotate-180")}
                        />
                      </button>
                    )}
                  </>
                )}
              </Menu.Button>

              <Menu.Items
                className={cn(
                  "nui-dropdown-menu",
                  size && sizes[size],
                  rounded && radiuses[rounded],
                  color && colors[color],
                  props.classes?.menu,
                )}
              >
                {props.headerLabel && (
                  <div className={cn("nui-menu-header", props.classes?.header)}>
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
