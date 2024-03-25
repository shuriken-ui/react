/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  type ReactNode,
  type Ref,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useDebounce } from "use-debounce";
import { Combobox } from "@headlessui/react";
import { Float } from "@headlessui-float/react";
import { Icon } from "@iconify/react";
import { useNuiDefaultProperty } from "~/Provider";
import { cn } from "~/utils";
import { BasePlaceload } from "../base/BasePlaceload";
import { BaseAutocompleteItem } from "./BaseAutocompleteItem";

type BaseAutocompleteProps<T = string> = {
  /**
   *
   */
  value?: T | T[];

  /**
   * The items to display in the component.
   */
  items?: T[];

  stateModifiers?: { prop?: boolean };

  /**
   *
   */
  onChange?: (item: T) => void;

  /**
   * The radius of the component.
   *
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";

  /**
   * The size of the autocomplete component.
   *
   */
  size?: "sm" | "md" | "lg";

  /**
   * The contrast of autocomplete component.
   *
   */
  contrast?: "default" | "default-contrast" | "muted" | "muted-contrast";

  /**
   * The label to display for the component.
   */
  label?: string;

  /**
   * If the label should be floating.
   */
  labelFloat?: boolean;

  /**
   * An icon to display for the component.
   */
  icon?: string;

  /**
   * Translation strings.
   */
  i18n?: {
    pending: string;
    empty: string;
  };

  /**
   * Placeholder text to display when the component is empty.
   */
  placeholder?: string;

  /**
   * Error text to display when the component is in an error state.
   */
  error?: string | boolean;

  /**
   * Value used when clearing the component value.
   */
  clearValue?: unknown;

  /**
   * The icon to show in the clear button
   */
  clearIcon?: string;

  /**
   * The icon to show in the chip buttons
   */
  chipClearIcon?: string;

  /**
   * The icon to show in the dropdown button
   */
  dropdownIcon?: string;

  /**
   * A function used to render the items as strings in either the input or the tag when multiple is true.
   */
  displayValue?: (item: T) => string;

  /**
   * The debounce time for the filterItems method.
   */
  filterDebounce?: number;

  /**
   * A function to filter the items when query is changed.
   *
   * You can use this method to implement your own filtering logic or to fetch items from an API.
   */
  filterItems?: (query?: string, items?: T[]) => Promise<T[]> | T[];

  /**
   * Optional CSS classes to apply to the wrapper, label, input, addon, error, and icon elements.
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

    /**
     * CSS classes to apply to the icon element.
     */
    icon?: string | string[];
  };

  /**
   * Allow custom entries by the user
   */
  allowCreate?: boolean;

  /**
   * Whether the component is in a loading state.
   */
  loading?: boolean;

  /**
   * Whether the component is disabled.
   */
  disabled?: boolean;

  /**
   * Whether the component can be cleared by the user.
   */
  clearable?: boolean;

  /**
   * Display a chevron icon to open suggestions
   */
  dropdown?: boolean;

  /**
   * Whether the component allows multiple selections.
   */
  multiple?: boolean;

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
     * The property to use for the key of the options.
     */
    value?: T extends object ? keyof T | ((arg: T) => string) : string;
    /**
     * The property to use for the label of the options.
     */
    label?: T extends object ? keyof T | ((arg: T) => string) : string;

    /**
     * The property to use for the sublabel of the options.
     */
    sublabel?: T extends object ? keyof T | ((arg: T) => string) : string;

    /**
     * The property to use for the media of the options.
     */
    media?: T extends object ? keyof T | ((arg: T) => string) : string;

    /**
     * The property to use for the icon of the options.
     */
    icon?: T extends object ? keyof T | ((arg: T) => string) : string;
  };

  renderClearIcon?: () => ReactNode;

  renderDropdownIcon?: (props: { open: boolean }) => ReactNode;

  renderIcon?: (props: { iconName: string }) => ReactNode;

  renderLabel?: (props: {
    query: string;
    filteredItems: T[];
    pending: boolean;
    items: T[];
  }) => ReactNode;

  renderAutocompleteMultipleListItem?: (props: {
    item: T;
    displayValue: string;
    removeItem: (item: T) => void;
  }) => ReactNode;

  renderPending?: (props: {
    query: string;
    filteredItems: T[];
    pending: boolean;
    items: T[];
  }) => ReactNode;

  renderEmpty?: (props: {
    query: string;
    filteredItems: T[];
    pending: boolean;
    items: T[];
  }) => ReactNode;

  renderStartItem?: (props: {
    query: string;
    filteredItems: T[];
    pending: boolean;
    items: T[];
  }) => ReactNode;

  renderEndItem?: (props: {
    query: string;
    filteredItems: T[];
    pending: boolean;
    items: T[];
  }) => ReactNode;

  renderCreateItem?: (props: {
    query: string;
    filteredItems: T[];
    pending: boolean;
    items: T[];
    active: boolean;
    selected: boolean;
  }) => ReactNode;

  renderItem?: (props: {
    query: string;
    filteredItems: T[];
    pending: boolean;
    items: T[];
    item: T;
    active: boolean;
    selected: boolean;
  }) => ReactNode;
};

const radiuses = {
  none: "",
  sm: "nui-autocomplete-rounded",
  md: "nui-autocomplete-smooth",
  lg: "nui-autocomplete-curved",
  full: "nui-autocomplete-full",
};

const sizes = {
  sm: "nui-autocomplete-sm",
  md: "nui-autocomplete-md",
  lg: "nui-autocomplete-lg",
};

const contrasts = {
  default: "nui-autocomplete-default",
  "default-contrast": "nui-autocomplete-default-contrast",
  muted: "nui-autocomplete-muted",
  "muted-contrast": "nui-autocomplete-muted-contrast",
};

export const BaseAutocomplete = forwardRef(function BaseAutocomplete<
  T = string,
>(
  {
    placeholder = "",
    label = "",
    error = "",
    i18n = {
      pending: "Loading ...",
      empty: "Nothing found.",
    },
    loading = false,
    disabled = false,
    clearable = false,
    clearIcon = "lucide:x",
    chipClearIcon = "lucide:x",
    dropdownIcon = "lucide:chevron-down",
    dropdown = false,
    multiple = false,
    filterDebounce = 0,
    classes = {},
    allowCreate = false,
    fixed = false,
    placement = "bottom-start",
    ...props
  }: BaseAutocompleteProps<T>,
  ref: Ref<HTMLElement>,
) {
  const rounded = useNuiDefaultProperty(props, "BaseAutocomplete", "rounded");

  const size = useNuiDefaultProperty(props, "BaseAutocomplete", "size");

  const contrast = useNuiDefaultProperty(props, "BaseAutocomplete", "contrast");

  const autocompleteValue = useMemo(() => props.value, [props.value]);

  const items = useMemo(() => props.items || [], [props.items]);

  const [query, setQuery] = useState("");

  const [filteredItems, setFilteredItems] = useState<
    Awaited<ReturnType<typeof filterResolved>>
  >(dropdown ? items : []);

  const [pendingFilter, setPendingFilter] = useState(false);

  const defaultDisplayValue = useCallback(
    (item: any): any => {
      if (props.stateModifiers?.prop && props.properties?.value) {
        const attr = props.properties.value;

        const result = items.find(
          (i) =>
            i &&
            typeof i === "object" &&
            (attr as keyof T) in i &&
            (i as any)[attr] === item,
        );

        if (result && props.properties.label) {
          // @ts-expect-error not sure what the issue is here
          return result[props.properties.label];
        }
      }

      if (item == null || typeof item === "string") return item;
      if (
        typeof item === "object" &&
        props.properties?.label &&
        (props.properties.label as string) in item
      ) {
        return item[props.properties.label];
      }

      return item;
    },
    [
      items,
      props.properties?.label,
      props.properties?.value,
      props.stateModifiers?.prop,
    ],
  );

  function handleChange(value: T) {
    if (props.stateModifiers?.prop && props.properties?.value) {
      const attr = props.properties.value as string;

      const val = items.find(
        (item) =>
          item &&
          typeof item === "object" &&
          attr in item &&
          (item as Record<string, unknown>)[attr] === value,
      );

      props.onChange?.(val!);

      return;
    }

    props.onChange?.(value);
  }

  const defaultFilter = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-shadow
    (query?: string, items?: T[]): T[] => {
      if (!query || !items) {
        return items ?? [];
      }

      const lower = query.toLowerCase();

      // eslint-disable-next-line   array-callback-return, consistent-return
      return items.filter((item: any) => {
        if (typeof item === "string")
          return item?.toLowerCase().includes(lower);
        if (
          typeof item === "object" &&
          props.properties?.label &&
          (props.properties.label as unknown as string) in item
        )
          return item[props.properties.label as unknown as string]
            .toLowerCase()
            .includes(lower);
        if (
          typeof item === "object" &&
          props.properties?.sublabel &&
          (props.properties.sublabel as unknown as string) in item
        )
          return item[props.properties.sublabel as unknown as string]
            .toLowerCase()
            .includes(lower);
      });
    },
    [props.properties?.label, props.properties?.sublabel],
  );

  const filterResolved = useMemo(
    () => (props.filterItems === undefined ? defaultFilter : props.filterItems),
    [defaultFilter, props.filterItems],
  );

  const displayValueResolved = useMemo(
    () =>
      props.displayValue === undefined
        ? defaultDisplayValue
        : props.displayValue,
    [defaultDisplayValue, props.displayValue],
  );

  const [debounced] = useDebounce(query, filterDebounce);

  const pendingDebounce = query !== debounced;

  const pending = pendingFilter || pendingDebounce;

  const queryCreate = query === "" ? null : query;

  function clear() {
    handleChange((props.clearValue ?? []) as T);
  }

  const iconResolved = useMemo(() => {
    if (
      autocompleteValue &&
      typeof autocompleteValue === "object" &&
      !Array.isArray(autocompleteValue) &&
      "icon" in autocompleteValue &&
      typeof autocompleteValue.icon === "string"
    ) {
      return autocompleteValue.icon;
    }

    return props.icon;
  }, [autocompleteValue, props.icon]);

  function removeItem(item: any) {
    if (!Array.isArray(autocompleteValue)) {
      handleChange(props.clearValue as T);

      return;
    }

    // eslint-disable-next-line no-plusplus
    for (let i = autocompleteValue.length - 1; i >= 0; --i) {
      if (props.properties?.value) {
        if (autocompleteValue[i] === item) {
          autocompleteValue.splice(i, 1);
        }
      }
      // eslint-disable-next-line eqeqeq
      else if (autocompleteValue[i] === item) {
        autocompleteValue.splice(i, 1);
      }
    }
  }

  function key(item: T) {
    if (props.properties == null) {
      return displayValueResolved(item);
    }

    if (typeof props.properties.value === "string") {
      return (item as any)[props.properties.value];
    }

    if (typeof props.properties.value === "function") {
      return props.properties.value(item as any);
    }

    return displayValueResolved(item);
  }

  useEffect(() => {
    const cb = async () => {
      setPendingFilter(true);
      try {
        // eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle
        const _filteredItems = await filterResolved(debounced, items);

        setFilteredItems(_filteredItems);
        // eslint-disable-next-line @typescript-eslint/no-shadow
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          // Ignore abort errors
          return;
        }

        throw error;
      } finally {
        setPendingFilter(false);
      }
    };

    cb();
  }, [debounced, filterResolved, items]);

  return (
    <Combobox
      value={autocompleteValue}
      // eslint-disable-next-line react/jsx-no-bind
      onChange={handleChange}
      // by={
      //   props.stateModifiers?.prop && props.properties?.value
      //     ? undefined
      //     : props.properties?.value
      // }
      //  multiple={multiple}
      disabled={disabled}
      className={cn(
        "nui-autocomplete",
        classes?.wrapper,
        size && sizes[size],
        contrast && contrasts[contrast],
        rounded && radiuses[rounded],
        props.icon && "nui-has-icon",
        props.labelFloat && "nui-autocomplete-label-float",
        loading && "nui-autocomplete-loading",
        "[&_.nui-autocomplete-results]:mt-[unset] [&_.nui-autocomplete-results]:[position:unset]",
      )}
      as="div"
      ref={ref}
    >
      <Float
        composable
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        onHide={() => setQuery("")}
        flip={!multiple}
        offset={5}
        strategy={fixed ? "fixed" : "absolute"}
        placement={placement}
        adaptiveWidth={fixed}
        zIndex={200}
      >
        <>
          {label && !props.labelFloat && (
            <Combobox.Label
              className={cn("nui-autocomplete-label", classes?.label)}
            >
              {props.renderLabel?.({ query, filteredItems, pending, items }) ||
                label}
            </Combobox.Label>
          )}

          {multiple && (
            <div className="nui-autocomplete-multiple">
              {Array.isArray(autocompleteValue) &&
                autocompleteValue.length > 0 && (
                  <ul className="nui-autocomplete-multiple-list">
                    {autocompleteValue.map((item) => (
                      <li key={String(item)}>
                        {props.renderAutocompleteMultipleListItem?.({
                          item,
                          displayValue: displayValueResolved(item),
                          removeItem,
                        }) || (
                          <div className="nui-autocomplete-multiple-list-item">
                            {displayValueResolved(item)}

                            <button
                              type="button"
                              onClick={() => removeItem(item)}
                            >
                              <Icon
                                icon={chipClearIcon}
                                className="nui-autocomplete-multiple-list-item-icon"
                              />
                            </button>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
            </div>
          )}
        </>

        <Float.Reference>
          <div className="nui-autocomplete-outer">
            <Combobox.Input
              className={cn(
                "nui-autocomplete-input",
                classes?.input,
                dropdown && !clearable && "!pe-12",
                dropdown && clearable && "!pe-[4.5rem]",
              )}
              displayValue={
                multiple ? undefined : (displayValueResolved as any)
              }
              placeholder={placeholder}
              // disabled={disabled} @see https://github.com/tailwindlabs/headlessui/discussions/1292#discussioncomment-2574738
              onChange={(event) => setQuery(event.target.value)}
            />

            {label && props.labelFloat && (
              <Combobox.Label className={cn("nui-label-float", classes?.label)}>
                {props.renderLabel?.({
                  query,
                  filteredItems,
                  pending,
                  items,
                }) || label}
              </Combobox.Label>
            )}

            {iconResolved && (
              <div className="nui-autocomplete-icon">
                {props.renderIcon?.({ iconName: iconResolved }) || (
                  <Icon
                    icon={iconResolved}
                    className="nui-autocomplete-icon-inner"
                  />
                )}
              </div>
            )}

            {clearable &&
              ((Array.isArray(autocompleteValue) &&
                autocompleteValue?.length > 0) ||
                (!Array.isArray(autocompleteValue) &&
                  autocompleteValue != null)) && (
                <button
                  type="button"
                  tabIndex={-1}
                  className={cn(
                    "nui-autocomplete-clear",
                    classes?.icon,
                    dropdown && "me-10",
                  )}
                  onClick={clear}
                >
                  {props.renderClearIcon?.() || (
                    <Icon
                      icon={clearIcon}
                      className="nui-autocomplete-clear-inner"
                    />
                  )}
                </button>
              )}

            {dropdown && (
              <Combobox.Button className="nui-autocomplete-clear nui-autocomplete-chevron">
                {({ open }) => (
                  <>
                    props.renderDropdownIcon?.({open}) || (
                    <Icon
                      icon={dropdownIcon}
                      className={cn(
                        "nui-autocomplete-clear-inner transition-transform duration-300",
                        classes?.icon,
                        open && "rotate-180",
                      )}
                    />
                    )
                  </>
                )}
              </Combobox.Button>
            )}

            {loading && (
              <div className="nui-autocomplete-placeload">
                <BasePlaceload
                  className={cn("nui-placeload", props.icon && "ms-6")}
                />
              </div>
            )}
          </div>
        </Float.Reference>

        <>
          {error && typeof error === "string" && (
            <span className="nui-autocomplete-error-text">{error}</span>
          )}
        </>

        <Float.Content className={cn(!fixed && "w-full")}>
          <Combobox.Options
            as="div"
            className={cn(
              (filteredItems.length > 0 || !allowCreate) &&
                "nui-autocomplete-results",
            )}
          >
            {filteredItems.length === 0 && pending ? (
              <div className="nui-autocomplete-results-placeholder">
                {props.renderPending?.({
                  query,
                  filteredItems,
                  pending,
                  items,
                }) || (
                  <span className="nui-autocomplete-results-placeholder-text">
                    {i18n.pending}
                  </span>
                )}
              </div>
            ) : filteredItems.length === 0 && !allowCreate ? (
              <div className="nui-autocomplete-results-placeholder">
                {props.renderEmpty?.({
                  query,
                  filteredItems,
                  pending,
                  items,
                }) || (
                  <span className="nui-autocomplete-results-placeholder-text">
                    {i18n.empty}
                  </span>
                )}
              </div>
            ) : (
              <>
                {props.renderStartItem && (
                  <div className="nui-autocomplete-results-header">
                    {props.renderStartItem({
                      query,
                      filteredItems,
                      pending,
                      items,
                    })}
                  </div>
                )}

                {allowCreate && queryCreate && (
                  <Combobox.Option as="div" value={queryCreate}>
                    {({ active, selected }) => (
                      <>
                        {props.renderCreateItem?.({
                          query,
                          filteredItems,
                          pending,
                          items,
                          active,
                          selected,
                        }) || (
                          <span className="nui-autocomplete-results-item">
                            Create {query}
                          </span>
                        )}
                      </>
                    )}
                  </Combobox.Option>
                )}

                {filteredItems.map((item) => (
                  <Combobox.Option
                    key={key(item)}
                    as="div"
                    className="nui-autocomplete-results-item"
                    value={
                      props.stateModifiers?.prop && props.properties?.value
                        ? (item as any)[props.properties.value]
                        : (item as any)
                    }
                  >
                    {({ active, selected }) => (
                      <>
                        {props.renderItem?.({
                          query,
                          filteredItems,
                          pending,
                          items,
                          item,
                          active,
                          selected,
                        }) || (
                          <BaseAutocompleteItem
                            context={{ query }}
                            rounded={props.rounded || rounded}
                            item={
                              props.properties
                                ? item
                                : ({
                                    label: displayValueResolved(item),
                                  } as T)
                            }
                            active={active}
                            selected={selected}
                            properties={props.properties as any}
                          />
                        )}
                      </>
                    )}
                  </Combobox.Option>
                ))}

                {props.renderEndItem && (
                  <div className="nui-autocomplete-results-footer">
                    {props.renderEndItem({
                      query,
                      filteredItems,
                      pending,
                      items,
                    })}
                  </div>
                )}
              </>
            )}
          </Combobox.Options>
        </Float.Content>
      </Float>
    </Combobox>
  );
});
