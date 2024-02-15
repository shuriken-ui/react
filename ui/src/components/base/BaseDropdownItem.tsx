import { Menu } from "@headlessui/react";
import { PropsWithChildren, ReactNode, forwardRef } from "react";
import { NinjaButtonProps, useNinjaButton } from "../../hooks/useNinjaButton";
import { cn } from "../../utils";

type BaseDropdownItemProps = Omit<NinjaButtonProps, "children"> &
  PropsWithChildren<{
    /**
     * The type of button.
     */
    // type?: "button" | "submit" | "reset";

    /** Using href instead of to result in a native anchor with no router functionality. */
    // href?: string;

    /**
     * Whether the button is disabled.
     */
    // disabled?: boolean;

    /**
     * The radius of the dropdown-item.
     *
     */
    rounded?: "none" | "sm" | "md" | "lg";

    /**
     * The color of the dropdown-item.
     */
    color?: "default" | "contrast";

    /**
     * The value for the `rel` attribute on the button.
     */
    // rel?: string;

    /**
     * The value for the `target` attribute on the button.
     */
    // target?: string;

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
  }>;

const radiuses = {
  none: "",
  sm: "nui-item-rounded",
  md: "nui-item-smooth",
  lg: "nui-item-curved",
};

const colors = {
  default: "nui-item-default",
  contrast: "nui-item-contrast",
};

export const BaseDropdownItem = forwardRef<
  HTMLAnchorElement & HTMLButtonElement,
  BaseDropdownItemProps
>(function BaseDropdownItem(
  {
    title,
    text,
    rounded,
    color = "default",
    disabled = false,
    start,
    end,
    classes = {
      title:
        "font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white",
      text: "text-muted-400 font-sans text-xs",
    },
    rel,
    target,
    href,
    type,
    children,
    className,
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

  return (
    <Menu.Item as="div">
      {({ active, close }) => (
        <Component
          className={cn(
            "nui-dropdown-item",
            active && "nui-active",
            rounded && radiuses[rounded],
            color && colors[color],
            className,
          )}
          {
            ...(props as object) /** TODO: add correct type */
          }
          onClick={close}
          {...attributes}
          ref={ref}
        >
          {start}
          <div className="nui-item-content">
            <div className={cn(classes?.title)}>{children || title}</div>
            {text && <p className="text-muted-400 font-sans text-xs">{text}</p>}
          </div>
          {end}
        </Component>
      )}
    </Menu.Item>
  );
});
