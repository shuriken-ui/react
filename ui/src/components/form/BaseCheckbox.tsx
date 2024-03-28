import {
  type MouseEventHandler,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  type ForwardedRef,
  type InputHTMLAttributes,
} from "react";
import { cn } from "~/utils";
import { useNuiDefaultProperty } from "~/Provider";
import { useNinjaId } from "~/hooks/useNinjaId";
import { IconCheck } from "../icons/IconCheck";
import { IconIndeterminate } from "../icons/IconIndeterminate";

interface BaseCheckboxAttributes<T> {
  /**
   * The label to display for the checkbox.
   */
  label?: string;

  /**
   * Defines the value of the checkbox when it's checked.
   */
  value?: T;

  /**
   * The value to set when the checkbox is checked.
   */
  trueValue?: T;

  /**
   * The value to set when the checkbox is unchecked.
   */
  falseValue?: T;

  /**
   *  if the checkbox is checked
   */
  checked?: boolean;

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

  /** The color of the checkbox.
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
   * The radius of the checkbox.
   *
   * @default 'sm'
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";

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
}

interface BaseCheckboxEmits<T> {
  /**
   * The value of the component.
   * @param checked Whether the checkbox is checked.
   * @param value The value associated with the checkbox.
   */
  onChange?: (checked: boolean, value: NonNullable<T>) => void;

  /**
   * The function to call when the checkbox is clicked.
   */
  onClick?: MouseEventHandler<HTMLInputElement>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface BaseCheckboxSlots<T> {
  //
}

export interface BaseCheckboxExpose {
  el: HTMLInputElement | null;
}

type BaseCheckboxPropsInner<T> = BaseCheckboxAttributes<T> &
  BaseCheckboxEmits<T> &
  BaseCheckboxSlots<T>;

export type BaseCheckboxProps<T> = BaseCheckboxPropsInner<T> &
  Omit<InputHTMLAttributes<HTMLInputElement>, keyof BaseCheckboxPropsInner<T>>;

const radiuses = {
  none: "",
  sm: "nui-checkbox-rounded-sm",
  md: "nui-checkbox-rounded-md",
  lg: "nui-checkbox-rounded-lg",
  full: "nui-checkbox-rounded-full",
};

const colors = {
  default: "nui-checkbox-default",
  muted: "nui-checkbox-muted",
  light: "nui-checkbox-light",
  dark: "nui-checkbox-dark",
  black: "nui-checkbox-black",
  primary: "nui-checkbox-primary",
  info: "nui-checkbox-info",
  success: "nui-checkbox-success",
  warning: "nui-checkbox-warning",
  danger: "nui-checkbox-danger",
};

function BaseCheckboxInner<T>(
  {
    error = "",
    trueValue,
    falseValue,
    onChange = () => {},
    ...props
  }: BaseCheckboxProps<T>,
  ref?: ForwardedRef<BaseCheckboxExpose | undefined>,
): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);

  const color = useNuiDefaultProperty(props, "BaseCheckbox", "color");
  const rounded = useNuiDefaultProperty(props, "BaseCheckbox", "rounded");

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
          disabled={props.disabled}
          className={cn("nui-checkbox-input", props.classes?.input)}
          type="checkbox"
          checked={props.checked}
          onClick={props.onClick}
          onChange={(e) => {
            onChange(
              e.target.checked,
              ((e.target.checked ? trueValue : falseValue) ??
                e.target.checked) as NonNullable<T>,
            );
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
}

export const BaseCheckbox = forwardRef(BaseCheckboxInner) as <T>(
  props: BaseCheckboxProps<T> & {
    ref?: ForwardedRef<BaseCheckboxExpose | undefined>;
  },
  ref?: ForwardedRef<BaseCheckboxExpose | undefined>,
) => ReturnType<typeof BaseCheckboxInner>;
