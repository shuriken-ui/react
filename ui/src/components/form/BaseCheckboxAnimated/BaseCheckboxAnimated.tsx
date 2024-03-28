/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
  type ForwardedRef,
  type InputHTMLAttributes,
} from "react";
import { useNinjaId } from "~/hooks/useNinjaId";
import { IconCheckCircle } from "~/components/icons";
import { cn } from "~/utils";
import "./BaseCheckboxAnimated.css";

interface BaseCheckboxAnimatedAttributes<T> {
  modelValue?: T;
  /**
   * The value of the component.
   */
  value?: any;

  /**
   * Whether the component is checked.
   */
  checked?: boolean;

  /**
   * The form input identifier.
   */
  id?: string;

  /**
   * The value to set when the component is checked.
   */
  trueValue?: any;

  /**
   * The value to set when the component is unchecked.
   */
  falseValue?: any;

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
}

interface BaseCheckboxAnimatedEmits<T> {
  /**
   * The value of the component.
   */
  onChange?: (value: T) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface BaseCheckboxAnimatedSlots<T> {
  //
}

export interface BaseCheckboxAnimatedExpose {
  container: HTMLDivElement | null;
  input: HTMLInputElement | null;
  innerElement: HTMLDivElement | null;
}

type BaseCheckboxAnimatedPropsInner<T> = BaseCheckboxAnimatedAttributes<T> &
  BaseCheckboxAnimatedEmits<T> &
  BaseCheckboxAnimatedSlots<T>;

export type BaseCheckboxAnimatedProps<T> = BaseCheckboxAnimatedPropsInner<T> &
  Omit<
    InputHTMLAttributes<HTMLInputElement>,
    keyof BaseCheckboxAnimatedPropsInner<T>
  >;

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

function BaseCheckboxAnimatedInner<T>(
  {
    onChange = () => {},
    classes = {
      wrapper: [],
      label: [],
      input: [],
    },
    modelValue = undefined,
    value = undefined,
    trueValue = true,
    falseValue = false,
    id: idProps,
    color = undefined,
    ...props
  }: BaseCheckboxAnimatedProps<T>,
  ref?: ForwardedRef<BaseCheckboxAnimatedExpose | undefined>,
) {
  const [isChecked, setIsChecked] = useState(false);
  const [isUnchecked, setIsUnchecked] = useState(true);
  const [isOpaque, setIsOpaque] = useState(false);

  const id = useNinjaId(() => idProps);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const innerElementRef = useRef<HTMLDivElement>(null);

  const checked = useMemo(() => {
    if (modelValue === trueValue) {
      return true;
    }
    if (modelValue === falseValue) {
      return false;
    }

    return value === undefined
      ? false
      : Array.isArray(modelValue)
        ? modelValue.includes(value)
        : modelValue === value;
  }, [modelValue, trueValue, falseValue, value]);

  // const isChecked =
  //   value !== undefined &&
  //   modelValue === trueValue &&
  //   modelValue !== falseValue;

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

  function handleChange() {
    if (Array.isArray(modelValue)) {
      const values = [...modelValue];
      const _trueValue = value ?? trueValue;
      if (_trueValue === undefined) {
        return;
      }

      if (checked) {
        values.splice(values.indexOf(_trueValue), 1);
      } else {
        values.push(_trueValue);
      }

      onChange(values as T);
      return;
    }

    if (modelValue === trueValue) {
      onChange(falseValue);
      return;
    }

    onChange(trueValue);
  }

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (checked) {
      setIsChecked(true);
      setIsOpaque(true);

      if (window !== undefined) {
        timeout = setTimeout(() => {
          setIsUnchecked(false);
        }, 150);
      }
    } else {
      setIsUnchecked(true);
      setIsChecked(false);
      if (window !== undefined) {
        timeout = setTimeout(() => {
          setIsOpaque(false);
        }, 150);
      }
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [checked]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "nui-focus nui-animated-checkbox block focus-within:outline-current",
        isChecked ? "is-checked" : "",
        isUnchecked ? "is-unchecked" : "",
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
        checked={checked}
        {...props}
        onChange={() => handleChange()}
      />

      <label
        htmlFor={id}
        className={cn(
          "peer-disabled:opacity-75",
          color && colors[color],
          classes?.label,
        )}
      >
        <div
          ref={innerElementRef}
          className={cn([isOpaque ? "is-opaque" : ""])}
        />
        <IconCheckCircle />
      </label>
    </div>
  );
}

export const BaseCheckboxAnimated = forwardRef(BaseCheckboxAnimatedInner) as <
  T,
>(
  props: BaseCheckboxAnimatedProps<T> & {
    ref?: ForwardedRef<BaseCheckboxAnimatedExpose | undefined>;
  },
  ref?: ForwardedRef<BaseCheckboxAnimatedExpose | undefined>,
) => ReturnType<typeof BaseCheckboxAnimatedInner>;
