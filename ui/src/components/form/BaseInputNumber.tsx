import {
  type HTMLAttributes,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { Icon } from "@iconify/react";
import { useNuiDefaultProperty } from "~/Provider";
import { cn } from "~/utils";
import { useNinjaId } from "~/hooks/useNinjaId";
import { BasePlaceload } from "~/components/base/BasePlaceload";
import { BaseInputHelpText } from "~/components/form/BaseInputHelpText";

type BaseInputNumberProps = HTMLAttributes<HTMLInputElement> & {
  /**
   * Callback function called when the value of the input changes.
   *
   * @param {string | number} value - The new value of the input.
   * @returns {void}
   */
  onChange?: (value: string | number) => void;

  /**
   * Used internaly to allow .lazy v-model modifiers.
   */
  stateModifiers?: {
    lazy?: boolean;
  };

  /**
   * Minimum value allowed when decrementing
   */
  min?: number;

  /**
   * Maximum value allowed when decrementing
   */
  max?: number;

  /**
   * Sets the stepping interval when clicking up and down spinner buttons
   */
  step?: number;

  /**
   * The form input identifier.
   */
  id?: string;

  /**
   * The type of input.
   */
  type?: string;

  /**
   * The label to display for the input.
   */
  label?: string;

  /**
   * If the label should be floating.
   */
  labelFloat?: boolean;

  /**
   * The placeholder to display for the input.
   */
  placeholder?: string;

  /**
   * The icon to display for the input.
   */
  icon?: string;

  /**
   * The icon to display for the decrement button.
   */
  iconDecrement?: string;

  /**
   * The icon to display for the increment button.
   */
  iconIncrement?: string;

  /**
   * The inputmode to use for the input, usually for mobile devices.
   */
  inputmode?: "numeric" | "decimal";

  /**
   * Whether the color of the input should change when it is focused.
   */
  colorFocus?: boolean;

  /**
   * Whether the input is in a loading state.
   */
  loading?: boolean;

  /**
   * Whether the input is in a disabled state.
   */
  disabled?: boolean;

  /**
   * An error message or boolean value indicating whether the input is in an error state.
   */
  error?: string | boolean;

  /**
   * The contrast of the input.
   *
   * @default 'default'
   */
  contrast?: "default" | "default-contrast" | "muted" | "muted-contrast";

  /**
   * The radius of the input.
   *
   * @since 2.0.0
   * @default 'sm'
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";

  /**
   * The size of the input.
   *
   * @default 'md'
   */
  size?: "sm" | "md" | "lg" | "xl";

  /**
   * Optional CSS classes to apply to the wrapper, label, input, addon, error, and icon elements.
   */
  classes?: {
    /**
     * CSS classes to apply to the wrapper element.
     */
    wrapper?: string | string[];

    /**
     * CSS classes to apply to the outer element.
     */
    outer?: string | string[];

    /**
     * CSS classes to apply to the label element.
     */
    label?: string | string[];

    /**
     * CSS classes to apply to the input element.
     */
    input?: string | string[];

    /**
     * CSS classes to apply to the addon element.
     */
    addon?: string | string[];

    /**
     * CSS classes to apply to the error element.
     */
    error?: string | string[];

    /**
     * CSS classes to apply to the icon element.
     */
    icon?: string | string[];

    /**
     * CSS classes to apply to the buttons wrapper.
     */
    buttons?: string | string[];
  };
};

const radiuses = {
  none: "",
  sm: "nui-input-number-rounded-sm",
  md: "nui-input-number-rounded-md",
  lg: "nui-input-number-rounded-lg",
  full: "nui-input-number-rounded-full",
};

const sizes = {
  sm: "nui-input-number-sm",
  md: "nui-input-number-md",
  lg: "nui-input-number-lg",
  xl: "nui-input-number-xl",
};

const contrasts = {
  default: "nui-input-number-default",
  "default-contrast": "nui-input-number-default-contrast",
  muted: "nui-input-number-muted",
  "muted-contrast": "nui-input-number-muted-contrast",
};

export type BaseInputNumberRef = {
  /**
   * The underlying HTMLInputElement element.
   */
  el: HTMLInputElement | null;

  /**
   * The internal id of the radio input.
   */
  id: string;
};

export const BaseInputNumber = forwardRef<
  BaseInputNumberRef,
  BaseInputNumberProps
>(function BaseInputNumber(
  {
    onChange = () => {},
    step = 1,
    type = "text",
    inputmode = "numeric",
    iconDecrement = "lucide:minus",
    iconIncrement = "lucide:plus",
    error = false,
    stateModifiers,
    ...props
  },
  ref,
) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState<number | string>();

  const incrementInterval = useRef<ReturnType<typeof setInterval>>();

  const decrementInterval = useRef<ReturnType<typeof setInterval>>();

  const contrast = useNuiDefaultProperty(props, "BaseInputNumber", "contrast");
  const rounded = useNuiDefaultProperty(props, "BaseInputNumber", "rounded");
  const size = useNuiDefaultProperty(props, "BaseInputNumber", "size");

  const id = useNinjaId(() => props.id);

  const placeholder = useMemo(() => {
    if (props.loading) {
      return undefined;
    }

    if (props.labelFloat) {
      return props.label;
    }

    return props.placeholder ?? "";
  }, [props.label, props.labelFloat, props.loading, props.placeholder]);

  function looseToNumber(val: string) {
    const n = Number.parseFloat(val);

    return Number.isNaN(n) ? val : n;
  }

  const floatPrecision = useMemo(() => {
    if (!Number.isFinite(step) || Number.isNaN(step)) return 0;
    let exp = 1;

    let precision = 0;

    while (Math.round(step * exp) / exp !== step) {
      exp *= 10;
      // eslint-disable-next-line no-plusplus
      precision++;
    }

    return precision;
  }, [step]);

  const floatPrecisionExp = useMemo(
    () => 10 ** floatPrecision,
    [floatPrecision],
  );

  const stepAbs = useMemo(() => Math.abs(step), [step]);

  function clamp(val: number) {
    const roundedValue =
      Math.round(val * floatPrecisionExp) / floatPrecisionExp;

    return Math.max(
      Math.min(roundedValue, props.max ?? Number.POSITIVE_INFINITY),
      props.min ?? Number.NEGATIVE_INFINITY,
    );
  }

  function increment() {
    if (props.disabled) return;
    if (value === undefined) {
      setValue(0);

      return;
    }

    if (typeof value === "number") {
      setValue((prevValue) => clamp((prevValue as number) + stepAbs));
    }
  }

  function decrement() {
    if (props.disabled) return;
    if (value === undefined) {
      setValue(0);

      return;
    }

    if (typeof value === "number") {
      setValue((prevValue) => clamp((prevValue as number) - stepAbs));
    }
  }

  function startIncrement() {
    if (props.disabled) return;

    increment();
    let i = 0;

    incrementInterval.current = setInterval(() => {
      // eslint-disable-next-line no-plusplus
      i++;
      increment();
      if (i > 10) {
        if (incrementInterval.current) {
          clearInterval(incrementInterval.current);
        }

        incrementInterval.current = setInterval(increment, 50);
      }
    }, 150);
  }

  function stopIncrement() {
    if (incrementInterval.current) {
      clearInterval(incrementInterval.current);
    }
  }

  function startDecrement() {
    if (props.disabled) return;

    decrement();
    let i = 0;

    decrementInterval.current = setInterval(() => {
      // eslint-disable-next-line no-plusplus
      i++;
      decrement();
      if (i > 10) {
        if (decrementInterval.current) {
          clearInterval(decrementInterval.current);
        }

        decrementInterval.current = setInterval(decrement, 50);
      }
    }, 150);
  }

  function stopDecrement() {
    if (decrementInterval.current) {
      clearInterval(decrementInterval.current);
    }
  }

  function handleUpdate(val: string) {
    setValue(looseToNumber(val));
  }

  useEffect(() => {
    if (value) {
      onChange(value);
    }
  }, [onChange, value]);

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

  useEffect(() => {
    return () => {
      if (incrementInterval.current) {
        clearInterval(incrementInterval.current);
      }

      if (decrementInterval.current) {
        clearInterval(decrementInterval.current);
      }
    };
  }, []);

  return (
    <div
      className={cn(
        "nui-input-number-wrapper",
        contrast && contrasts[contrast],
        size && sizes[size],
        rounded && radiuses[rounded],
        error && !props.loading && "nui-input-number-error",
        props.loading && "nui-input-number-loading",
        props.labelFloat && "nui-input-number-label-float",
        props.icon && "nui-has-icon",
        props.colorFocus && "nui-input-number-focus",
        props.classes?.wrapper,
      )}
    >
      {props.label && !props.labelFloat && (
        <label
          htmlFor={id}
          className={cn("nui-input-number-label", props.classes?.label)}
        >
          {props.label}
        </label>
      )}
      <div className={cn("nui-input-number-outer", props.classes?.outer)}>
        <div>
          {stateModifiers?.lazy ? (
            <input
              id={id}
              ref={inputRef}
              type={type}
              className={cn("nui-input-number", props.classes?.input)}
              placeholder={placeholder}
              inputMode={inputmode}
              disabled={props.disabled}
              onChange={(e) => handleUpdate(e.target.value)}
            />
          ) : (
            <input
              id={id}
              ref={inputRef}
              type={type}
              className={cn("nui-input-number", props.classes?.input)}
              placeholder={placeholder}
              inputMode={inputmode}
              disabled={props.disabled}
              onInput={(e) => handleUpdate(e.currentTarget.value)}
            />
          )}

          {props.label && props.labelFloat && (
            <label
              htmlFor={id}
              className={cn("nui-label-float", props.classes?.label)}
            >
              {props.label}
            </label>
          )}

          {props.loading && (
            <div className="nui-input-number-placeload">
              <BasePlaceload className="nui-placeload" />
            </div>
          )}

          {props.icon && (
            <div className={cn("nui-input-number-icon", props.classes?.icon)}>
              <Icon icon={props.icon} className="nui-input-number-icon-inner" />
            </div>
          )}

          <div
            className={cn("nui-input-number-buttons", props.classes?.buttons)}
          >
            <button
              type="button"
              aria-label="Decrement"
              onPointerDown={startDecrement}
              onPointerOut={stopDecrement}
              onPointerUp={stopDecrement}
              disabled={props.disabled}
            >
              <Icon icon={iconDecrement} />
            </button>
            <button
              type="button"
              aria-label="Increment"
              onPointerDown={startIncrement}
              onPointerOut={stopIncrement}
              onPointerUp={stopIncrement}
              disabled={props.disabled}
            >
              <Icon icon={iconIncrement} />
            </button>
          </div>
        </div>
      </div>

      {error && typeof error === "string" && (
        <BaseInputHelpText color="danger" className={cn(props.classes?.error)}>
          {error}
        </BaseInputHelpText>
      )}
    </div>
  );
});
