import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { useNinjaId } from "../../../hooks/useNinjaId";
import { IconCheckCircle } from "../../icons/IconCheckCircle";
import { cn } from "../../../utils";

import "./BaseCheckboxAnimated.css";

type BaseCheckboxAnimatedProps = {
  /**
   * The value of the component.
   */
  value?: string;

  /**
   * The form input identifier.
   */
  id?: string;

  /**
   * The value of the component.
   */
  onChange?: (value: string) => void;

  /**
   * The value to set when the component is checked.
   */
  trueValue?: string;

  /**
   * The value to set when the component is unchecked.
   */
  falseValue?: string;

  /** The color of the checkbox. Can be 'default', 'primary', 'info', 'success', 'warning', or 'danger' */
  color?:
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "muted"
    | "light";

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

const colorStyle = {
  primary: "text-primary-500",
  info: "text-info-500",
  success: "text-success-500",
  warning: "text-warning-500",
  danger: "text-danger-500",
  light: "text-light-100",
  muted: "text-muted-400",
};

export type BaseCheckboxAnimatedRef = {
  container: HTMLDivElement | null;
  input: HTMLInputElement | null;
  innerElement: HTMLDivElement | null;
};

export const BaseCheckboxAnimated = forwardRef<
  BaseCheckboxAnimatedRef,
  BaseCheckboxAnimatedProps
>(function BaseCheckboxAnimated(
  {
    onChange = () => {},
    classes = {
      wrapper: [],
      label: [],
      input: [],
    },
    value = "",
    trueValue = "",
    falseValue = "",
    ...props
  },
  ref,
) {
  const [inputValue, setInputValue] = useState<string | undefined>(value);

  const id = useNinjaId(() => props.id);

  const containerRef = useRef<HTMLDivElement>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const innerElementRef = useRef<HTMLDivElement>(null);

  const isChecked =
    value !== undefined &&
    inputValue === trueValue &&
    inputValue !== falseValue;

  useImperativeHandle(
    ref,
    () => ({
      get container() {
        return containerRef.current;
      },
      get input() {
        return inputRef.current;
      },
      get innerElement() {
        return innerElementRef.current;
      },
    }),
    [],
  );

  function handleChange(val: string) {
    const checkValue = val === trueValue ? falseValue : trueValue;

    onChange(checkValue);

    setInputValue(checkValue);
  }

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (isChecked) {
      containerRef.current?.classList.add("is-checked");
      innerElementRef.current?.classList.add("is-opaque");
      timeout = setTimeout(() => {
        containerRef.current?.classList.remove("is-unchecked");
      }, 150);
    } else {
      containerRef.current?.classList.add("is-unchecked");
      containerRef.current?.classList.remove("is-checked");
      timeout = setTimeout(() => {
        innerElementRef.current?.classList.remove("is-opaque");
      }, 150);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [isChecked]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "nui-focus block focus-within:outline-current",
        classes?.wrapper,
      )}
    >
      <input
        id={id}
        ref={inputRef}
        type="checkbox"
        className={cn(
          "peer cursor-pointer disabled:cursor-not-allowed",
          classes?.input,
        )}
        checked={isChecked}
        value={inputValue}
        onChange={(e) => handleChange(e.target.value)}
      />

      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label
        htmlFor={id}
        className={cn(
          "peer-disabled:opacity-75",
          props.color && colorStyle[props.color],
          classes?.label,
        )}
      >
        <div ref={innerElementRef} />
        <IconCheckCircle />
      </label>
    </div>
  );
});
