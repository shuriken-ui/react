import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import { useNinjaId } from "~/hooks/useNinjaId";
import { IconCheckCircle } from "~/components/icons";
import { cn } from "~/utils";

import "./BaseCheckboxAnimated.css";
import { useNuiDefaultProperty } from "~/Provider";

type BaseCheckboxAnimatedProps = {
  /**
   * The value of the component.
   */
  value?: string;

  /**
   * Whether the component is checked.
   */
  checked?: boolean;

  /**
   * The form input identifier.
   */
  id?: string;

  /**
   * The value of the component.
   */
  onChange?: (value: string, checked: boolean) => void;

  /**
   * The value to set when the component is checked.
   */
  trueValue?: string;

  /**
   * The value to set when the component is unchecked.
   */
  falseValue?: string;

  /** The color of the checkbox.
   *
   * @default 'primary'
   */
  color?:
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "muted"
    | "light"
    | "dark"
    | "black";

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

const colors = {
  primary: "text-primary-500",
  info: "text-info-500",
  success: "text-success-500",
  warning: "text-warning-500",
  danger: "text-danger-500",
  light: "text-light-100",
  muted: "text-muted-400",
  dark: "text-muted-900 dark:text-muted-100",
  black: "text-black dark:text-white",
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
    trueValue = "",
    falseValue = "",
    ...props
  },
  ref,
) {
  const color = useNuiDefaultProperty(props, "BaseCheckboxAnimated", "color");

  const id = useNinjaId(() => props.id);

  const containerRef = useRef<HTMLDivElement>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const innerElementRef = useRef<HTMLDivElement>(null);

  const isChecked = useMemo(() => {
    if (props.checked !== undefined) {
      return props.checked;
    }

    return (
      props.value !== undefined &&
      props.value === trueValue &&
      props.value !== falseValue
    );
  }, [props.value, props.checked, trueValue, falseValue]);

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

  function handleChange(val: string, checked: boolean) {
    if (trueValue === "" || falseValue === "") {
      onChange(val, checked);

      return;
    }

    const checkValue = val === trueValue ? falseValue : trueValue;

    onChange(checkValue, checked);
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
        "nui-focus nui-animated-checkbox block focus-within:outline-current",
        classes?.wrapper,
      )}
    >
      <input
        id={id}
        ref={inputRef}
        type="checkbox"
        className={cn(
          "peer cursor-pointer disabled:cursor-not-allowed absolute top-0 left-0 h-full w-full opacity-0 z-[1]",
          classes?.input,
        )}
        checked={isChecked}
        value={props.value}
        onChange={(e) => handleChange(e.target.value, e.target.checked)}
      />

      <label
        htmlFor={id}
        className={cn(
          "peer-disabled:opacity-75 relative size-8",
          color && colors[color],
          classes?.label,
        )}
      >
        <div
          ref={innerElementRef}
          className="absolute
         top-0 left-0 size-8 rounded-[50%] z-0 opacity-100 transition-all duration-200 border border-[var(--animated-checkbox-border)]"
        />
        <IconCheckCircle />
      </label>
    </div>
  );
});
