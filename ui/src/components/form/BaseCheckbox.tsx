import { Ref, forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { cn } from "../../utils";
import { useConfig } from "../../Provider";
import { useNinjaId } from "../../hooks/useNinjaId";
import { IconCheck } from "../icons/IconCheck";
import { IconIndeterminate } from "../icons/IconIndeterminate";

type BaseCheckboxProps = {
  /**
   * The label to display for the checkbox.
   */
  label?: string;

  /**
   * Defines the value of the checkbox when it's checked.
   */
  value?: string;

  /**
   * The value to set when the checkbox is checked.
   */
  trueValue?: string;

  /**
   * The value to set when the checkbox is unchecked.
   */
  falseValue?: string;

  /**
   *  if the checkbox is checked
   */
  checked?: boolean;

  /**
   * The value of the component.
   * @param value The value of the checkbox.
   * @param checked Whether the checkbox is checked.
   */
  onChange?: (value: string, checked: boolean) => void;

  /**
   * The form input identifier.
   */
  id?: string;

  /**
   * An error message to display below the checkbox label.
   */
  error?: string | boolean;

  /**
   * Whether the checkbox is disabled.
   */
  disabled?: boolean;

  /**
   * Whether the checkbox is in indeterminate state.
   */
  indeterminate?: boolean;

  /**
   * The radius of the checkbox.
   *
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";

  /** The color of the checkbox. Can be 'default', 'primary', 'info', 'success', 'warning', or 'danger' */
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
   * Optional CSS classes to apply to the wrapper, label, and input elements.
   */
  classes?: {
    /**
     * CSS classes to apply to the wrapper element.
     */
    wrapper?: string | string[];

    /**
     * CSS classes to apply to the label element.
     */
    label?: string | string[];

    /**
     * CSS classes to apply to the input element.
     */
    input?: string | string[];
  };
};

const radiuses = {
  none: "",
  sm: "nui-checkbox-rounded",
  md: "nui-checkbox-smooth",
  lg: "nui-checkbox-curved",
  full: "nui-checkbox-full",
};

const colors = {
  default: "nui-checkbox-default",
  light: "nui-checkbox-light",
  muted: "nui-checkbox-muted",
  primary: "nui-checkbox-primary",
  info: "nui-checkbox-info",
  success: "nui-checkbox-success",
  warning: "nui-checkbox-warning",
  danger: "nui-checkbox-danger",
};

export type BaseCheckboxRef = {
  el: HTMLInputElement | null;
};

export const BaseCheckbox = forwardRef<BaseCheckboxRef, BaseCheckboxProps>(
  function BaseCheckbox(
    { error = "", trueValue, falseValue, onChange = () => {}, ...props },
    ref,
  ) {
    const inputRef = useRef<HTMLInputElement>(null);

    const config = useConfig();

    const rounded = props.rounded ?? config.BaseCheckbox?.rounded;

    const color = props.color ?? config.BaseCheckbox?.color;

    const id = useNinjaId(() => props.id);

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = props.indeterminate || false;
      }
    }, [props.indeterminate]);

    useImperativeHandle(
      ref,
      () => {
        return {
          get el() {
            return inputRef.current;
          },
        };
      },
      [],
    );

    return (
      <div
        className={cn(
          "nui-checkbox",
          props.disabled && "opacity-50",
          rounded && radiuses[rounded],
          color && colors[color],
          props.classes?.wrapper,
        )}
      >
        <div className="nui-checkbox-outer">
          <input
            id={id}
            ref={inputRef}
            value={props.value}
            disabled={props.disabled}
            className={cn("nui-checkbox-input", props.classes?.input)}
            type="checkbox"
            checked={props.checked}
            onChange={(e) => {
              if (trueValue && falseValue) {
                onChange(
                  e.target.checked ? trueValue : falseValue,
                  e.target.checked,
                );

                return;
              }

              onChange(e.target.value, e.target.checked);
            }}
          />
          <div className="nui-checkbox-inner" />
          <IconCheck className="nui-icon-check" />
          <IconIndeterminate className="nui-icon-indeterminate" />
        </div>
        <div className="nui-checkbox-label-wrapper">
          {props.label && (
            <label
              htmlFor={id}
              className={cn("nui-checkbox-label-text", props.classes?.label)}
            >
              {props.label}
            </label>
          )}
          {error && typeof error === "string" && (
            <div className="nui-checkbox-error">{error}</div>
          )}
        </div>
      </div>
    );
  },
);
