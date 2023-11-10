import { forwardRef } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Icon } from "@iconify/react";
import { useConfig } from "../../Provider";
import { BaseButton } from "./BaseButton";

type BaseDropdownProps = {
  /**
   * The flavor of the dropdown.
   */
  flavor?: "button" | "context" | "text";

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

  /**
   * The shape of the dropdown.
   */
  shape?: "straight" | "rounded" | "smooth" | "curved" | "full";

  /**
   * The orientation of the dropdown.
   */
  orientation?: "start" | "end";

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
};

const orientationStyle = {
  start: "nui-dropdown-start",
  end: "nui-dropdown-end",
};

const sizeStyle = {
  md: "nui-menu-md",
  lg: "nui-menu-lg",
};

const shapeStyle = {
  straight: "",
  rounded: "nui-menu-rounded",
  smooth: "nui-menu-smooth",
  curved: "nui-menu-curved",
  full: "nui-menu-curved",
};

const colorStyle = {
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
    {
      flavor = "button",
      buttonColor = "default",
      shape: defaultShape,
      orientation = "start",
      size = "md",
      color = "white",
      label = "",
      headerLabel,
    },
    ref,
  ) {
    const config = useConfig();

    const shape = defaultShape ?? config.defaultShapes.dropdown;

    return (
      <div
        className={`nui-dropdown  ${orientationStyle[orientation]}`}
        ref={ref}
      >
        <Menu as="div" className="nui-menu">
          {({ open, close }) => (
            <>
              <Menu.Button as="template">
                {flavor === "button" && (
                  <BaseButton
                    color={buttonColor}
                    shape={shape}
                    className="!pe-3 !ps-4"
                  >
                    <span>{label}</span>
                    <Icon
                      icon="lucide:chevron-down"
                      className={`nui-chevron ${open ? "rotate-180" : ""}`}
                    />
                  </BaseButton>
                )}
                {flavor === "context" && (
                  <button type="button" className="nui-context-button">
                    <span className="nui-context-button-inner">
                      <Icon
                        icon="lucide:more-horizontal"
                        className={`nui-context-icon ${
                          open ? "rotate-90" : ""
                        }`}
                      />
                    </span>
                  </button>
                )}
                {flavor === "text" && (
                  <button type="button" className="nui-text-button">
                    <span className="nui-text-button-inner">{label}</span>
                    <Icon
                      icon="lucide:chevron-down"
                      className={`nui-chevron ${open ? "rotate-180" : ""}`}
                    />
                  </button>
                )}
              </Menu.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-in"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Menu.Items
                  className={`nui-dropdown-menu  ${
                    shape ? shapeStyle[shape] : ""
                  } ${sizeStyle[size]} ${colorStyle[color]} `}
                >
                  {headerLabel && (
                    <div className="nui-menu-header">
                      <div className="nui-menu-header-inner">
                        <h4 className="nui-menu-header-title">{headerLabel}</h4>
                      </div>
                    </div>
                  )}
                  <div className="nui-menu-content" />
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    );
  },
);
