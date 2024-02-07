import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "../../utils";
import { useNinjaId } from "../../hooks/useNinjaId";
import { useConfig } from "../../Provider";

type BaseRadioProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "className"
> & {
  /**
   *  Callback function called when the value of the input changes.
   */
  onChange?: (value: string) => void;

  /**
   * The label for the radio input.
   */
  label?: string;

  /** The color of the radio. */
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
   * An error message to display below the radio label.
   */
  error?: string | boolean;

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

const colors = {
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
      color: colorProp,
      classes,
      label,
      error,
      id: radioId,
      value,
      onChange,
      ...props
    },
    ref,
  ) {
    const config = useConfig();

    const id = useNinjaId(() => radioId);

    const color = colorProp ?? config.BaseRadio?.color;

    return (
      <div
        className={cn("nui-radio", color && colors[color], classes?.wrapper)}
      >
        <div className="nui-radio-outer">
          <input
            id={id}
            ref={ref}
            type="radio"
            className="nui-radio-input"
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            {...props}
          />

          <div className={cn("nui-radio-inner", classes?.inputBg)} />
          <div className={cn("nui-radio-dot", classes?.inputDot)} />
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
