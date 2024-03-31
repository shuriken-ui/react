/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { type Ref, forwardRef, useCallback, useEffect, useState } from "react";
import { Listbox } from "@headlessui/react";
import { Float } from "@headlessui-float/react";
import { Icon } from "@iconify/react";
import { useNuiDefaultProperty } from "~/Provider";
import { cn } from "~/utils";
import { BaseListboxItem } from "./BaseListboxItem";
import { BaseIconBox } from "~/components/base/BaseIconBox";

import { BasePlaceload } from "~/components/base/BasePlaceload";
import { BaseAvatar } from "~/components/base/BaseAvatar";
import { BaseInputHelpText } from "~/components/form/BaseInputHelpText";

type BaseListboxProps<T = string> = {
  value?: T;

  onChange?: (value: T) => void;

  /**
   * The items to display in the multiselect.
   */
  items: T[];

  /**
   * Used internaly to allow .prop v-model modifier
   */
  stateModifiers?: {
    prop?: boolean;
  };

  /**
   * The label to display for the multiselect.
   */
  label?: string;

  /**
   * If the label should be floating.
   */
  labelFloat?: boolean;

  /**
   * The icon to display for the multiselect.
   */
  icon?: string;

  /**
   * The icon to show when the component is selected.
   */
  selectedIcon?: string;

  /**
   * The placeholder text to display when no selection has been made.
   */
  placeholder?: string;

  /**
   * An error message or boolean value indicating whether the input is in an error state.
   */
  error?: string | boolean;

  /**
   * Whether the multiselect is in a loading state.
   */
  loading?: boolean;

  /**
   * Whether the multiselect is disabled.
   */
  disabled?: boolean;

  /**
   * Wether the border should change color when focused
   */
  colorFocus?: boolean;

  /**
   * Whether the multiselect allows multiple selections.
   */
  multiple?: boolean;

  /**
   * The label to display for multiple selections, or a function that returns the label.
   */
  multipleLabel?: string | ((value: T[], labelProperty?: string) => string);

  /**
   * Used a fixed strategy to float the component
   */
  fixed?: boolean;

  /**
   * The properties to use for the value, label, sublabel, media, and icon of the options items.
   */
  properties?: {
    /**
     * The property to use for the value of the options.
     */
    value?: T extends object ? keyof T : string;

    /**
     * The property to use for the label of the options.
     */
    label?: T extends object ? keyof T : string;

    /**
     * The property to use for the sublabel of the options.
     */
    sublabel?: T extends object ? keyof T : string;

    /**
     * The property to use for the media of the options.
     */
    media?: T extends object ? keyof T : string;

    /**
     * The property to use for the icon of the options.
     */
    icon?: T extends object ? keyof T : string;
  };

  /**
   * The contrast of the listbox.
   *
   * @default 'default'
   */
  contrast?: "default" | "default-contrast" | "muted" | "muted-contrast";

  /**
   * The placement of the component via floating-ui.
   *
   * @default 'bottom-start'
   */
  placement?:
    | "top"
    | "top-start"
    | "top-end"
    | "right"
    | "right-start"
    | "right-end"
    | "bottom"
    | "bottom-start"
    | "bottom-end"
    | "left"
    | "left-start"
    | "left-end";

  /**
   * The radius of the multiselect.
   *
   * @default 'sm'
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";

  /**
   * The size of the listbox.
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
     * CSS classes to apply to the button element.
     */
    button?: string | string[];

    /**
     * CSS classes to apply to the icon element.
     */
    icon?: string | string[];

    /**
     * CSS classes to apply to the error element.
     */
    error?: string | string[];
  };
};

const radiuses = {
  none: "",
  sm: "nui-listbox-rounded-sm",
  md: "nui-listbox-rounded-md",
  lg: "nui-listbox-rounded-lg",
  full: "nui-listbox-rounded-full",
};

const sizes = {
  sm: "nui-listbox-sm",
  md: "nui-listbox-md",
  lg: "nui-listbox-lg",
};

const contrasts = {
  default: "nui-listbox-default",
  "default-contrast": "nui-listbox-default-contrast",
  muted: "nui-listbox-muted",
  "muted-contrast": "nui-listbox-muted-contrast",
};

export const BaseListbox = forwardRef(function BaseListbox<T = string>(
  {
    icon = "",
    selectedIcon = "lucide:check",
    label = "",
    placeholder = "",
    error = false,
    multipleLabel = (value: T[], labelProperty?: string): string => {
      if (value.length === 0) {
        return "No elements selected";
      }

      if (value.length > 1) {
        return `${value.length} elements selected`;
      }

      return labelProperty && typeof value?.[0] === "object"
        ? String((value?.[0] as Record<string, unknown>)?.[labelProperty])
        : String(value?.[0]);
    },
    multiple = false,
    loading = false,
    disabled = false,
    fixed = false,
    ...props
  }: BaseListboxProps<T>,
  ref: Ref<HTMLDivElement>,
) {
  const [value, setValue] = useState(props.value);

  const contrast = useNuiDefaultProperty(props, "BaseListbox", "contrast");
  const placement = useNuiDefaultProperty(props, "BaseListbox", "placement");
  const rounded = useNuiDefaultProperty(props, "BaseListbox", "rounded");
  const size = useNuiDefaultProperty(props, "BaseListbox", "size");

  const handleSetValue = useCallback(
    (_value: T) => {
      if (props.stateModifiers?.prop && props.properties?.value) {
        const attr = props.properties.value;

        return props.items.find(
          (item) =>
            item &&
            typeof item === "object" &&
            attr in item &&
            (item as any)[attr] === _value,
        );
      }

      return _value;
    },
    [props.items, props.properties?.value, props.stateModifiers?.prop],
  );

  useEffect(() => {
    if (!props.value) {
      return;
    }

    const newValue = handleSetValue(props.value);

    if (newValue) {
      setValue(newValue);
    }
  }, [handleSetValue, props.value]);

  return (
    <div
      className={cn(
        "nui-listbox",
        contrast && contrasts[contrast],
        size && sizes[size],
        rounded && radiuses[rounded],
        error && !loading && "nui-listbox-error",
        loading && "nui-listbox-loading",
        props.labelFloat && "nui-listbox-label-float",
        icon && "nui-has-icon",
        props.colorFocus && "nui-listbox-focus",
        props.classes?.wrapper,
      )}
      ref={ref}
    >
      <Listbox
        // by={props.stateModifiers?.prop ? undefined : props.properties?.value}
        value={value}
        onChange={(_value): void => {
          const newValue = handleSetValue(_value);

          if (newValue) {
            props.onChange?.(newValue);
            setValue(newValue);
          }
        }}
        multiple={multiple}
        disabled={disabled}
      >
        {({ open }) => (
          <Float
            composable
            leave="transition duration-100 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            flip
            offset={5}
            strategy={fixed ? "fixed" : "absolute"}
            placement={placement}
            adaptiveWidth={fixed}
            zIndex="20"
          >
            {label && !props.labelFloat ? (
              <Listbox.Label
                className={cn("nui-listbox-label", props.classes?.label)}
              >
                {label}
              </Listbox.Label>
            ) : (
              // eslint-disable-next-line react/jsx-no-useless-fragment
              <></>
            )}

            <div className={cn("nui-listbox-outer", props.classes?.outer)}>
              <Float.Reference>
                <div>
                  <Listbox.Button
                    // disabled={disabled}
                    className={cn("nui-listbox-button", props.classes?.button)}
                  >
                    <div className="nui-listbox-button-inner">
                      {icon && (
                        <BaseIconBox
                          size="xs"
                          rounded="sm"
                          color="none"
                          className={cn("nui-icon-box", props.classes?.icon)}
                        >
                          <Icon icon={icon} className="nui-icon-box-inner" />
                        </BaseIconBox>
                      )}

                      {Array.isArray(value) ? (
                        <>
                          {value.length === 0 && placeholder && (
                            <div
                              className={cn(
                                "nui-listbox-placeholder",
                                loading && "select-none text-transparent",
                              )}
                            >
                              {placeholder}
                            </div>
                          )}

                          <div
                            className={cn(
                              "block truncate text-left",
                              loading && "select-none text-transparent",
                              value.length === 0 &&
                                "text-muted-300 dark:text-muted-500",
                            )}
                          >
                            {typeof multipleLabel === "function"
                              ? multipleLabel(
                                  value,
                                  props.properties?.label as string | undefined,
                                )
                              : multipleLabel}
                          </div>
                        </>
                      ) : value ? (
                        <>
                          {props.properties?.media &&
                            (value as any)[props.properties.media] && (
                              <BaseAvatar
                                src={(value as any)[props.properties.media]}
                                size={size === "sm" ? "xxs" : "xs"}
                                className={cn(
                                  "me-2",
                                  size === "sm" ? "-ms-1" : "-ms-2",
                                )}
                              />
                            )}
                          {props.properties?.icon &&
                            (value as any)[props.properties.icon] && (
                              <BaseIconBox
                                size="xs"
                                rounded="sm"
                                color="none"
                                className="-ms-2 me-2"
                              >
                                <Icon
                                  icon={(value as any)[props.properties.icon]}
                                  className="h-4 w-4"
                                />
                              </BaseIconBox>
                            )}
                          <div
                            className={cn(
                              "truncate text-left",
                              loading && "select-none text-transparent",
                            )}
                          >
                            {props.properties?.label
                              ? (value as any)[props.properties.label]
                              : props.properties?.value
                                ? (value as any)[props.properties.value]
                                : value}
                          </div>
                        </>
                      ) : (
                        <div
                          className={cn(
                            "nui-listbox-placeholder",
                            loading && "select-none !text-transparent",
                          )}
                        >
                          {placeholder}
                        </div>
                      )}

                      <span className="nui-listbox-chevron nui-chevron">
                        <Icon
                          icon="lucide:chevron-down"
                          className={cn(
                            "nui-listbox-chevron-inner",
                            open && "rotate-180",
                          )}
                        />
                      </span>
                    </div>
                  </Listbox.Button>

                  {label && props.labelFloat && (
                    <Listbox.Label
                      className={cn(
                        "nui-label-float",
                        open && "nui-label-float-active",
                      )}
                    >
                      {label}
                    </Listbox.Label>
                  )}

                  {loading && (
                    <div
                      className={cn(
                        "nui-listbox-placeload nui-loading-placeload",
                        (props.properties?.media && size === "sm") ||
                          (props.properties?.icon && size === "sm")
                          ? "ms-5"
                          : "",
                        (props.properties?.media && size === "md") ||
                          (props.properties?.icon && size === "md")
                          ? "ms-6"
                          : "",
                        (props.properties?.media && size === "lg") ||
                          (props.properties?.icon && size === "lg")
                          ? "ms-7"
                          : "",
                      )}
                    >
                      <BasePlaceload className="nui-placeload" />
                    </div>
                  )}
                </div>
              </Float.Reference>

              <Float.Content className={cn(!fixed && "w-full")}>
                <Listbox.Options className="nui-listbox-options">
                  {props.items.map((item) => (
                    <Listbox.Option
                      key={
                        props.properties?.value
                          ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            (item as any)[props.properties.value]
                          : item
                      }
                      value={
                        props.stateModifiers?.prop && props.properties?.value
                          ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            (item as any)[props.properties.value]
                          : item
                      }
                    >
                      {({ active, selected }) => (
                        <li
                          className={cn(
                            "nui-listbox-option group/nui-listbox-option",
                            active && "nui-active",
                          )}
                        >
                          <BaseListboxItem
                            value={{
                              // eslint-disable-next-line no-nested-ternary
                              value: props.properties?.label
                                ? (item as any)[props.properties?.label]
                                : props.properties?.value
                                  ? (item as any)[props.properties?.value]
                                  : (item as any),
                              label:
                                props.properties?.label &&
                                (item as any)[props.properties?.label],
                              sublabel:
                                props.properties?.sublabel &&
                                (item as any)[props.properties?.sublabel],
                              media:
                                props.properties?.media &&
                                (item as any)[props.properties?.media],
                              icon:
                                props.properties?.icon &&
                                (item as any)[props.properties?.icon],
                            }}
                            selectedIcon={selectedIcon}
                            active={active}
                            selected={selected}
                          />
                        </li>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Float.Content>

              {error && typeof error === "string" && (
                <BaseInputHelpText
                  color="danger"
                  className={cn(props.classes?.error)}
                >
                  {error}
                </BaseInputHelpText>
              )}
            </div>
          </Float>
        )}
      </Listbox>
    </div>
  );
});
