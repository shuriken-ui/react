import { FC } from "react";
import { Icon } from "@iconify/react";
import { useConfig } from "../../Provider";

type BaseMessageProps = {
  /**
   * The type of the message.
   */
  type?:
    | "default"
    | "muted"
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger";

  /**
   * The shape of the message.
   */
  shape?: "straight" | "rounded" | "smooth" | "curved" | "full";

  /**
   * The message to display.
   */
  message?: string;

  /**
   * Whether to show an icon, or the name of the icon to display.
   */
  icon?: boolean | string;

  /**
   * Whether to show a close button.
   */
  closable?: boolean;

  /**
   * The icon to show in the close button
   */
  closeIcon?: string;
  /**
   * close handler
   */
  onClose?: () => void;
};

const shapeStyle = {
  straight: "",
  rounded: "nui-message-rounded",
  smooth: "nui-message-smooth",
  curved: "nui-message-curved",
  full: "nui-message-full",
};
const typeStyle = {
  default: "nui-message-default",
  muted: "nui-message-muted",
  primary: "nui-message-primary",
  info: "nui-message-info",
  success: "nui-message-success",
  warning: "nui-message-warning",
  danger: "nui-message-danger",
};
const iconTypeStyle = {
  info: "akar-icons:info-fill",
  warning: "ci:warning",
  danger: "ph:warning-octagon-fill",
  success: "carbon:checkmark-filled",
  primary: "",
  muted: "",
  default: "",
};

export const BaseMessage: FC<BaseMessageProps> = ({
  type = "success",
  shape: defaultShape,
  message = "",
  icon: defaultIcon = false,
  closable = false,
  closeIcon = "lucide:x",
  onClose = () => {},
}) => {
  const config = useConfig();

  const shape = defaultShape ?? config.defaultShapes.message;

  const icon =
    typeof defaultIcon === "string" ? defaultIcon : iconTypeStyle[type];

  return (
    <div
      className={`nui-message ${shape ? shapeStyle[shape] : ""}  ${
        typeStyle[type]
      }`}
    >
      {icon && (
        <div className="nui-message-icon-outer">
          <Icon icon={icon} name="icon" className="nui-message-icon" />
        </div>
      )}
      <span className="nui-message-inner-text">{message}</span>
      {closable && (
        <button
          type="button"
          tabIndex={0}
          className={`nui-message-close ${shape ? shapeStyle[shape] : ""}`}
          onClick={onClose}
        >
          <Icon icon={closeIcon} name="closeIcon" className="nui-close-icon" />
        </button>
      )}
    </div>
  );
};
