import {
  PropsWithChildren,
  SelectHTMLAttributes,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import { Icon } from "@iconify/react";
import { useNinjaId } from "../../hooks/useNinjaId";
import { cn } from "../../utils";
import { useConfig } from "../../Provider";
import { BasePlaceload } from "../base/BasePlaceload";
import { IconChevronDown } from "../icons/IconChevronDown";

type BaseSelectProps = PropsWithChildren<{
  /**
   * A function that is called when the value of the select changes.
   *
   * @param value - The selected value of the select.
   */
  onChange?: (value: string) => void;

  /**
   * The form input identifier.
   */
  id?: string;

  /**
   * The radius of the select input.
   *
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";

  /**
   * The label text for the select input.
   */
  label?: string;

  /**
   * Empty option text added to the beginning of the select input.
   */
  placeholder?: string;

  /**
   * If the label should be floating.
   */
  labelFloat?: boolean;

  /**
   * An icon to display in the select input.
   */
  icon?: string;

  /**
   * Whether the select input is in a loading state.
   */
  loading?: boolean;

  /**
   * Whether the select input is disabled.
   */
  disabled?: boolean;

  /**
   * Whether the select input is read-only.
   */
  readonly?: boolean;

  /**
   * An error message to display, or a boolean indicating whether there is an error.
   */
  error?: string | boolean;

  /**
   * The size of the select input.
   */
  size?: "sm" | "md" | "lg";

  /**
   * The contrast of the select input.
   */
  contrast?: "default" | "default-contrast" | "muted" | "muted-contrast";

  /**
   * Classes to apply to the select input.
   */
  classes?: {
    /**
     * A class or classes to apply to the wrapper element.
     */
    wrapper?: string | string[];

    /**
     * A class or classes to apply to the label element.
     */
    label?: string | string[];

    /**
     * A class or classes to apply to the select element.
     */
    select?: string | string[];

    /**
     * A class or classes to apply to the chevron element.
     */
    chevron?: string | string[];

    /**
     * A class or classes to apply to the icon element.
     */
    icon?: string | string[];

    /**
     * A class or classes to apply to the error element.
     */
    error?: string | string[];
  };
}>;

const radiuses = {
  none: "",
  sm: "nui-select-rounded",
  md: "nui-select-smooth",
  lg: "nui-select-curved",
  full: "nui-select-full",
};

const sizes = {
  sm: "nui-select-sm",
  md: "nui-select-md",
  lg: "nui-select-lg",
};

const contrasts = {
  default: "nui-select-default",
  "default-contrast": "nui-select-default-contrast",
  muted: "nui-select-muted",
  "muted-contrast": "nui-select-muted-contrast",
};

export type BaseSelectRef = {
  /**
   * The underlying HTMLInputElement element.
   */
  el: HTMLSelectElement | null;

  /**
   * The internal id of the select input.
   */
  id: string;
};

export const BaseSelect = forwardRef<
  BaseSelectRef,
  BaseSelectProps &
    Omit<SelectHTMLAttributes<HTMLSelectElement>, keyof BaseSelectProps>
>(function BaseSelect(
  { label = "", onChange = (val) => {}, error = false, children, ...props },
  ref,
) {
  const selectRef = useRef<HTMLSelectElement>(null);

  const config = useConfig();

  const rounded = props.rounded ?? config.BaseSelect?.rounded;

  const size = props.size ?? config.BaseSelect?.size;

  const contrast = props.contrast ?? config.BaseSelect?.contrast;

  const id = useNinjaId(() => props.id);

  const placeholder = useMemo(() => {
    if (props.loading) {
      return undefined;
    }

    if (props.labelFloat) {
      return label;
    }

    return props.placeholder ?? "";
  }, [label, props.labelFloat, props.loading, props.placeholder]);

  useImperativeHandle(
    ref,
    () => ({
      get el() {
        return selectRef.current;
      },
      id,
    }),
    [id],
  );

  return (
    <div
      className={cn(
        "nui-select-wrapper",
        contrast && contrasts[contrast],
        size && sizes[size],
        rounded && radiuses[rounded],
        error && !props.loading && "nui-select-error",
        props.loading && "nui-select-loading",
        props.labelFloat && "nui-select-label-float",
        props.icon && "nui-has-icon",
        props.classes?.wrapper,
      )}
    >
      {label && !props.labelFloat && (
        <label
          className={cn("nui-select-label", props.classes?.label)}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <div className="nui-select-outer">
        <select
          id={id}
          ref={selectRef}
          disabled={props.disabled}
          className={cn("nui-select", props.classes?.select)}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          value={props.value}
        >
          {placeholder && (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          )}

          {children}
        </select>

        {label && props.labelFloat && (
          <label
            htmlFor={id}
            className={cn("nui-label-float", props.classes?.label)}
          >
            {label}
          </label>
        )}

        {props.loading && (
          <div className="nui-select-placeload">
            <BasePlaceload className="nui-placeload" />
          </div>
        )}

        {props.icon && (
          <div className={cn("nui-select-icon", props.classes?.icon)}>
            <Icon className="nui-select-icon-inner" icon={props.icon} />
          </div>
        )}

        <div
          className={cn(
            "nui-select-chevron  nui-chevron",
            props.classes?.chevron,
          )}
        >
          <IconChevronDown className="nui-select-chevron-inner" />
        </div>

        {error && typeof error === "string" && (
          <span className={cn("nui-select-error-text", props.classes?.error)}>
            {error}
          </span>
        )}
      </div>
    </div>
  );
});
