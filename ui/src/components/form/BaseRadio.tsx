import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "../../utils";
import { useNinjaId } from "../../hooks/useNinjaId";

type BaseRadioProps = InputHTMLAttributes<HTMLInputElement> & {
  /**
   * The form input identifier.
   */
  //   id?: string;

  /**
   * The value of the radio input.
   */
  //   value?: string;

  /**
   * The model value of the radio input.
   */
  //   modelValue?: T;

  /**
   * The label for the radio input.
   */
  label?: string;

  /**
   * An error message to display below the radio label.
   */
  error?: string | boolean;

  /** The color of the radio. Can be 'default', 'primary', 'info', 'success', 'warning', or 'danger' */
  color?:
    | "default"
    | "light"
    | "muted"
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger";

  /**
   * Classes to apply to the various parts of the radio input.
   */
  classes?: {
    /**
     * Classes to apply to the wrapper element of the radio input.
     */
    wrapper?: string | string[];

    /**
     * Classes to apply to the label element of the radio input.
     */
    label?: string | string[];

    /**
     * Classes to apply to the dot element inside the radio input.
     */
    inputDot?: string | string[];

    /**
     * Classes to apply to the background element inside the radio input.
     */
    inputBg?: string | string[];
  };
};

const colorStyle = {
  default: "nui-radio-default",
  light: "nui-radio-light",
  muted: "nui-radio-muted",
  primary: "nui-radio-primary",
  info: "nui-radio-info",
  success: "nui-radio-success",
  warning: "nui-radio-warning",
  danger: "nui-radio-danger",
};

export const BaseRadio = forwardRef<HTMLInputElement, BaseRadioProps>(
  function BaseRadio(
    {
      color,
      classes,
      label,
      error,
      id: radioId,
      className: _,
      type = "radio",
      ...props
    },
    ref,
  ) {
    const id = useNinjaId(() => radioId);

    return (
      <div
        className={cn(
          "nui-radio",
          color && colorStyle[color],
          classes?.wrapper,
        )}
      >
        <div className="nui-radio-outer">
          <input
            id={id}
            ref={ref}
            type={type}
            className="nui-radio-input"
            {...props}
          />

          {classes?.inputBg && <div className="nui-radio-inner" />}

          {classes?.inputDot && <div className="nui-radio-dot" />}
        </div>
        <div className="nui-radio-label-wrapper">
          {label && (
            <label
              htmlFor={id}
              className={cn("nui-radio-label-text", classes?.label)}
            >
              {label}
            </label>
          )}

          {error && typeof error === "string" && (
            <div className="nui-radio-error">{error}</div>
          )}
        </div>
      </div>
    );
  },
);
