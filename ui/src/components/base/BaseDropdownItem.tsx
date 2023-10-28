import { Menu } from "@headlessui/react";
import React, { FC, ReactNode } from "react";

type BaseDropdownItemProps = {
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
   * The shape of the dropdown-item.
   */
  shape?: "straight" | "rounded" | "smooth" | "curved";

  /**
   * The color of the dropdown-item.
   */
  color?: "default" | "contrast";

  /**
   * The value for the `rel` attribute on the button.
   */
  rel?: string;

  /**
   * The value for the `target` attribute on the button.
   */
  target?: string;

  /**
   * The title to display for the dropdown item.
   */
  title?: string;

  /**
   * The text to display for the dropdown item.
   */
  text?: string;
  /**
   * Optional CSS classes to apply to the wrapper, label, input, addon, error, and icon elements.
   */
  classes?: {
    title?: string | string[];
    text?: string | string[];
  };

  /**
   * start slot
   */
  start?: ReactNode;

  /**
   * end slot
   */
  end?: ReactNode;
};

const shapeStyle = {
  straight: "",
  rounded: "nui-item-rounded",
  smooth: "nui-item-smooth",
  curved: "nui-item-curved",
};

const colorStyle = {
  default: "nui-item-default",
  contrast: "nui-item-contrast",
};

export const BaseDropdownItem: FC<BaseDropdownItemProps> = ({
  type,
  to,
  href,
  rel,
  target,
  title,
  text,
  shape,
  color = "default",
  disabled = false,
  start,
  end,
  classes = {
    title:
      "font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white",
    text: "text-muted-400 font-sans text-xs",
  },
}) => {
  // TODO:  const { is, attributes } = useNinjaButton(props)
  const Component = "div";

  return (
    <Menu.Item as="div">
      {({ active, close }) => (
        <Component
          className={`nui-dropdown-item ${active ? "nui-active" : ""} ${
            shape ? shapeStyle[shape] : ""
          } ${colorStyle[color]}`}
          onClick={close}
        >
          {start && start}
          <div className="nui-item-content">
            <div className={classes.title as string}>{title}</div>
            {text && <p className="text-muted-400 font-sans text-xs">{text}</p>}
          </div>
          {end && end}
        </Component>
      )}
    </Menu.Item>
  );
};
