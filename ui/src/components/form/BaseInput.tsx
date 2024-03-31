import {
  type HTMLAttributes,
  type ReactNode,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import { Icon } from "@iconify/react";
import { cn } from "~/utils";
import { useNuiDefaultProperty } from "~/Provider";
// import { useNinjaId } from "~/hooks/useNinjaId";
import { BasePlaceload } from "~/components/base/BasePlaceload";
import { BaseInputHelpText } from "~/components/form/BaseInputHelpText";

type BaseInputProps = HTMLAttributes<HTMLInputElement> & {
  /**
   * Callback function called when the value of the input changes.
   *
   * @param {string | number} value - The new value of the input.
   * @returns {void}
   */
  onChange?: (value: string | number) => void;

  /**
   * The value of the input.
   */
  value?: string | number;

  /**
   * Used internaly to allow .number, .trim
   * and .lazy v-model modifiers.
   */
  stateModifiers?: {
    number?: boolean;
    trim?: boolean;
    lazy?: boolean;
  };

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
   * The icon to display for the input.
   */
  icon?: string;

  /**
   * The placeholder to display for the input.
   */
  placeholder?: string;

  /**
   * An error message or boolean value indicating whether the input is in an error state.
   */
  error?: string | boolean;

  /**
   * Whether the color of the input should change when it is focused.
   */
  colorFocus?: boolean;

  /**
   * Whether the input is in a loading state.
   */
  loading?: boolean;

  /**
   * The contrast of the input.
   *
   * @default 'default'
   */
  contrast?: "default" | "default-contrast" | "muted" | "muted-contrast";

  /**
   * The radius of the input.
   *
   * @default 'sm'
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";

  /**
   * The size of the input.
   *
   * @default 'md'
   */
  size?: "sm" | "md" | "lg";

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
  };

  action?: ReactNode;
};

const radiuses = {
  none: "",
  sm: "nui-input-rounded-sm",
  md: "nui-input-rounded-md",
  lg: "nui-input-rounded-lg",
  full: "nui-input-rounded-full",
};

const sizes = {
  sm: "nui-input-sm",
  md: "nui-input-md",
  lg: "nui-input-lg",
};

const contrasts = {
  default: "nui-input-default",
  "default-contrast": "nui-input-default-contrast",
  muted: "nui-input-muted",
  "muted-contrast": "nui-input-muted-contrast",
};

export type BaseInputRef = {
  /**
   * The underlying HTMLInputElement element.
   */
  el: HTMLInputElement | null;

  /**
   * The internal id of the input.
   */
  id: string;
};

export const BaseInput = forwardRef<BaseInputRef, BaseInputProps>(
  function BaseInput(
    {
      placeholder: defaultPlaceholder,
      loading = false,
      labelFloat = false,
      error = false,
      stateModifiers,
      type = "text",
      label,
      action,
      id,
      icon,
      classes,
      colorFocus,
      value,
      onChange,
      ...props
    },
    ref,
  ) {
    const inputRef = useRef<HTMLInputElement>(null);

    const contrast = useNuiDefaultProperty(props, "BaseInput", "contrast");
    const rounded = useNuiDefaultProperty(props, "BaseInput", "rounded");
    const size = useNuiDefaultProperty(props, "BaseInput", "size");

    const attrs = {
      ...props,
      contrast: undefined,
      rounded: undefined,
      size: undefined,
    };

    const placeholder = useMemo(() => {
      if (loading) {
        return undefined;
      }

      if (labelFloat) {
        return label;
      }

      return defaultPlaceholder ?? "";
    }, [label, labelFloat, loading, defaultPlaceholder]);

    function looseToNumber(val: string) {
      const n = Number.parseFloat(val);

      return Number.isNaN(n) ? val : n;
    }

    function handleUpdate(val: string) {
      if (stateModifiers?.trim) {
        onChange?.(val.trim());
      } else if (stateModifiers?.number) {
        onChange?.(looseToNumber(val));
      } else {
        onChange?.(val);
      }
    }

    useImperativeHandle(
      ref,
      () => ({
        get el() {
          return inputRef.current;
        },
        id: id || "",
      }),
      [id],
    );

    return (
      <div
        className={cn(
          "nui-input-wrapper",
          contrast && contrasts[contrast],
          size && sizes[size],
          rounded && radiuses[rounded],
          error && !loading && "nui-input-error",
          loading && "nui-input-loading",
          labelFloat && "nui-input-label-float",
          icon && "nui-has-icon",
          colorFocus && "nui-input-focus",
          classes?.wrapper,
        )}
      >
        {label && !labelFloat && (
          <label className={cn("nui-input-label", classes?.label)} htmlFor={id}>
            {label}
          </label>
        )}
        <div className={cn("nui-input-outer", classes?.outer)}>
          <div>
            {stateModifiers?.lazy ? (
              <input
                id={id}
                ref={inputRef}
                type={type}
                className={cn("nui-input", classes?.input)}
                placeholder={placeholder}
                onChange={(e) => handleUpdate(e.target.value)}
                value={value}
                {...attrs}
              />
            ) : (
              <input
                id={id}
                ref={inputRef}
                type={type}
                className={cn("nui-input", classes?.input)}
                placeholder={placeholder}
                onInput={(e) => handleUpdate(e.currentTarget.value)}
                value={value}
                {...attrs}
              />
            )}
            {label && labelFloat && (
              <label
                htmlFor={id}
                className={cn("nui-label-float", classes?.label)}
              >
                {label}
              </label>
            )}
            {loading && (
              <div className="nui-input-placeload">
                <BasePlaceload className="nui-placeload" />
              </div>
            )}
            {icon && (
              <div className={cn("nui-input-icon", classes?.icon)}>
                <Icon icon={icon} className="nui-input-icon-inner" />
              </div>
            )}

            {action}
          </div>
          {error && typeof error === "string" && (
            <BaseInputHelpText color="danger" className={cn(classes?.error)}>
              {error}
            </BaseInputHelpText>
          )}
        </div>
      </div>
    );
  },
);
