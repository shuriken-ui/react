/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Ref, forwardRef, useCallback, useEffect, useState } from "react";
import { Listbox } from "@headlessui/react";
import { Float } from "@headlessui-float/react";
import { Icon } from "@iconify/react";
import { useConfig } from "../../Provider";
import { cn } from "../../utils";
import { BaseListboxItem } from "./BaseListboxItem";
import { BaseIconBox } from "../base/BaseIconBox";

import { BasePlaceload } from "../base/BasePlaceload";
import { BaseAvatar } from "../base/BaseAvatar";

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
   * The radius of the multiselect.
   *
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";

  /**
   * The label to display for the multiselect.
   */
  label?: string;

  /**
   * If the label should be floating.
   */
  labelFloat?: boolean;

  /**
   * Whether the multiselect is in a loading state.
   */
  loading?: boolean;

  /**
   * An error message or boolean value indicating whether the input is in an error state.
   */
  error?: string | boolean;

  /**
   * Whether the multiselect is disabled.
   */
  disabled?: boolean;

  /**
   * The icon to display for the multiselect.
   */
  icon?: string;

  /**
   * The icon to show when the component is selected.
   */
  selectedIcon?: string;

  /**
   * Whether the multiselect allows multiple selections.
   */
  multiple?: boolean;

  /**
   * The label to display for multiple selections, or a function that returns the label.
   */
  multipleLabel?: string | ((value: T[], labelProperty?: string) => string);

  /**
   * The placeholder text to display when no selection has been made.
   */
  placeholder?: string;

  /**
   * The size of the listbox.
   */
  size?: "sm" | "md" | "lg";

  /**
   * The contrast of the listbox.
   */
  contrast?: "default" | "default-contrast" | "muted" | "muted-contrast";

  /**
   * Used a fixed strategy to float the component
   */
  fixed?: boolean;

  /**
   * The placement of the component via floating-ui.
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
};

const radiuses = {
  none: "",
  sm: "nui-listbox-rounded",
  md: "nui-listbox-smooth",
  lg: "nui-listbox-curved",
  full: "nui-listbox-full",
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
    placement = "bottom-start",
    ...props
  }: BaseListboxProps<T>,
  ref: Ref<HTMLDivElement>,
) {
  const config = useConfig();

  const [value, setValue] = useState(props.value);

  const rounded = props.rounded ?? config.BaseListbox?.rounded;

  const size = props.size ?? config.BaseListbox?.size;

  const contrast = props.contrast ?? config.BaseListbox?.contrast;

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
            offset="5"
            strategy={fixed ? "fixed" : "absolute"}
            placement={placement}
            adaptiveWidth={fixed}
            zIndex="20"
          >
            {label && !props.labelFloat ? (
              <Listbox.Label className="nui-listbox-label">
                {label}
              </Listbox.Label>
            ) : (
              // eslint-disable-next-line react/jsx-no-useless-fragment
              <></>
            )}

            <div className="nui-listbox-outer">
              <Float.Reference>
                <div>
                  <Listbox.Button
                    // disabled={disabled}
                    className="nui-listbox-button"
                  >
                    <div className="nui-listbox-button-inner">
                      {icon && (
                        <BaseIconBox
                          size="xs"
                          rounded="sm"
                          color="none"
                          className="nui-icon-box"
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
                <span className="text-danger-600 mt-1 block font-sans text-[0.65rem] font-medium leading-none">
                  {error}
                </span>
              )}
            </div>
          </Float>
        )}
      </Listbox>
    </div>
  );
});
