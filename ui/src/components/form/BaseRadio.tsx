import {
  type InputHTMLAttributes,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { cn } from "~/utils";
import { useNinjaId } from "~/hooks/useNinjaId";
import { useNuiDefaultProperty } from "~/Provider";

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

  /**
   * An error message to display below the radio label.
   */
  error?: string | boolean;

  /**
   * The color of the radio.
   *
   * @default 'default'
   */
  color?:
    | "default"
    | "muted"
    | "light"
    | "dark"
    | "black"
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

const colors = {
  default: "nui-radio-default",
  muted: "nui-radio-muted",
  light: "nui-radio-light",
  dark: "nui-radio-dark",
  black: "nui-radio-black",
  primary: "nui-radio-primary",
  info: "nui-radio-info",
  success: "nui-radio-success",
  warning: "nui-radio-warning",
  danger: "nui-radio-danger",
};

export type BaseRadioRef = {
  /**
   * The underlying HTMLInputElement element.
   */
  el: HTMLInputElement | null;

  /**
   * The internal id of the radio input.
   */
  id: string;
};

export const BaseRadio = forwardRef<BaseRadioRef, BaseRadioProps>(
  function BaseRadio(
    { classes, label, error, id: radioId, value, onChange, ...props },
    ref,
  ) {
    const inputRef = useRef<HTMLInputElement>(null);

    const id = useNinjaId(() => radioId);

    const color = useNuiDefaultProperty(props, "BaseRadio", "color");

    const attrs = {
      ...props,
      color: undefined,
    };

    useImperativeHandle(
      ref,
      () => ({
        get el() {
          return inputRef.current;
        },
        id,
      }),
      [id],
    );

    return (
      <div
        className={cn("nui-radio", color && colors[color], classes?.wrapper)}
      >
        <div className="nui-radio-outer">
          <input
            id={id}
            ref={inputRef}
            type="radio"
            className="nui-radio-input"
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            {...attrs}
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
