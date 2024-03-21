import { type PropsWithChildren, forwardRef } from "react";
import { Icon } from "@iconify/react";
import { useNuiDefaultProperty } from "~/Provider";
import { cn } from "~/utils";

type BaseMessageProps = PropsWithChildren<{
  /**
   * The message to display.
   */
  message?: string;

  /**
   * Whether to show an icon, or the name of the icon to display.
   */
  icon?: boolean | string;

  /**
   * The icon to show in the close button
   */
  closeIcon?: string;

  /**
   * Whether to show a close button.
   */
  closable?: boolean;

  /**
   * The color of the message.
   *
   * @default 'default'
   */
  color?:
    | "default"
    | "default-contrast"
    | "muted"
    | "muted-contrast"
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger";

  /**
   * The radius of the message.
   *
   * @default 'sm'
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";

  /**
   * Optional CSS classes to apply to the component inner elements.
   */
  classes?: {
    /**
     * CSS classes to apply to the wrapper element.
     */
    wrapper?: string | string[];

    /**
     * CSS classes to apply to the icon element.
     */
    icon?: string | string[];

    /**
     * CSS classes to apply to the text element.
     */
    text?: string | string[];
  };

  /**
   * close handler
   */
  onClose?: () => void;
}>;

const radiuses = {
  none: "",
  sm: "nui-message-rounded-sm",
  md: "nui-message-rounded-md",
  lg: "nui-message-rounded-lg",
  full: "nui-message-rounded-full",
};

const colors = {
  default: "nui-message-default",
  "default-contrast": "nui-message-default-contrast",
  muted: "nui-message-muted",
  "muted-contrast": "nui-message-muted-contrast",
  primary: "nui-message-primary",
  info: "nui-message-info",
  success: "nui-message-success",
  warning: "nui-message-warning",
  danger: "nui-message-danger",
};

const iconTypes = {
  info: "akar-icons:info-fill",
  warning: "ci:warning",
  danger: "ph:warning-octagon-fill",
  success: "carbon:checkmark-filled",
  primary: "",
  muted: "",
  "muted-contrast": "",
  default: "",
  "default-contrast": "",
} as const;

export const BaseMessage = forwardRef<HTMLDivElement, BaseMessageProps>(
  function BaseMessage(
    {
      message = "",
      icon: defaultIcon = false,
      closable = false,
      closeIcon = "lucide:x",
      onClose = () => {},
      children,
      ...props
    },
    ref,
  ) {
    const color = useNuiDefaultProperty(props, "BaseMessage", "color");
    const rounded = useNuiDefaultProperty(props, "BaseMessage", "rounded");

    const icon =
      typeof defaultIcon === "string" ? defaultIcon : iconTypes[color];

    return (
      <div
        className={cn(
          "nui-message",
          rounded && radiuses[rounded],
          color && colors[color],
          props?.classes?.wrapper,
        )}
        ref={ref}
      >
        {defaultIcon && icon && (
          <div className="nui-message-icon-outer">
            <Icon icon={icon} name="icon" className="nui-message-icon" />
          </div>
        )}
        <span className="nui-message-inner-text">
          {message}
          {children}
        </span>
        {closable && (
          <button
            type="button"
            tabIndex={0}
            className={cn("nui-message-close", rounded && radiuses[rounded])}
            onClick={onClose}
          >
            <Icon
              icon={closeIcon}
              name="closeIcon"
              className="nui-close-icon"
            />
          </button>
        )}
      </div>
    );
  },
);
