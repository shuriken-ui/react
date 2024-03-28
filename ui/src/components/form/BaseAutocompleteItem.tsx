/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable consistent-return */
import React, { type ReactNode, type Ref, forwardRef, useMemo } from "react";
import { Icon } from "@iconify/react";
import { useConfig } from "~/Provider";
import { cn } from "~/utils";
import { BaseAvatar } from "../base/BaseAvatar";
import { BaseIconBox } from "../base/BaseIconBox";
import { BaseHeading } from "../base/BaseHeading";
import { BaseText } from "../base/BaseText";

import { useNinjaMark } from "~/hooks/useNinjaMark";

type BaseAutocompleteItemProps<T> = {
  /**
   * The items to display in the component.
   */
  item?: T;

  /**
   * The radius of the component.
   *
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";

  /**
   * The icon to show when the component is selected.
   */
  selectedIcon?: string;

  /**
   * Whether the item is focus/hover or not.
   */
  active?: boolean;

  /**
   * Whether the item is selected or not.
   */
  selected?: boolean;

  /**
   * CSS Class applied to the matching part of the text.
   */
  mark?: string;
  /**
   * The properties to use for the value, label, sublabel, media, and icon of the options items.
   */
  properties?: {
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

  renderSelectedIcon?: () => ReactNode;

  context: {
    query: string;
  };
};

const radiuses = {
  none: "",
  sm: "rounded-md",
  md: "rounded-lg",
  lg: "rounded-xl",
  full: "rounded-xl",
};

export const BaseAutocompleteItem = forwardRef(function BaseAutocompleteItem<
  T = string,
>(
  {
    mark = "nui-mark",
    selectedIcon = "lucide:check",
    properties = {
      label: "label",
      sublabel: "sublabel",
      media: "media",
      icon: "icon",
    } as any,
    ...props
  }: BaseAutocompleteItemProps<T>,
  ref: Ref<HTMLDivElement>,
) {
  const config = useConfig();

  const rounded = config.BaseAutocompleteItem?.rounded;

  const label = useMemo(() => {
    if (props.item == null || properties == null) {
      return;
    }

    if (typeof properties?.label === "string") {
      return (props?.item as any)[properties?.label];
    }

    if (typeof properties?.label === "function") {
      return (properties.label as (item: T) => string)(props.item);
    }
  }, [properties, props.item]);

  const sublabel = useMemo(() => {
    if (props.item == null || properties == null) {
      return;
    }

    if (typeof properties.sublabel === "string") {
      return (props.item as any)[properties.sublabel];
    }

    if (typeof properties.sublabel === "function") {
      return properties.sublabel(props.item);
    }
  }, [properties, props.item]);

  const media = useMemo(() => {
    if (props.item == null || properties == null) {
      return;
    }

    if (typeof properties.media === "string") {
      return (props.item as any)[properties.media];
    }

    if (typeof properties.media === "function") {
      return properties.media(props.item);
    }
  }, [properties, props.item]);

  const icon = useMemo(() => {
    if (props.item == null || properties == null) {
      return;
    }

    if (typeof properties.icon === "string") {
      return (props.item as any)[properties.icon];
    }

    if (typeof properties.icon === "function") {
      return properties.icon(props.item);
    }
  }, [properties, props.item]);

  const { query } = props.context;

  const markedLabel = useNinjaMark(label, query, mark);

  const markedSublabel = useNinjaMark(sublabel, query, mark);

  return (
    <div
      className={cn(
        "flex cursor-pointer items-center p-2 transition-colors duration-300",
        props.active && "bg-muted-100 dark:bg-muted-700",
        rounded && radiuses[rounded],
      )}
      ref={ref}
    >
      {media && !icon && (
        <BaseAvatar src={media} size="xs" classes={{ wrapper: "me-3" }} />
      )}
      {icon && !media && (
        <BaseIconBox size="sm" rounded="sm" color="none" className="me-1">
          <Icon
            icon={icon}
            className={cn(
              "h-4 w-4",
              props.selected ? "text-primary-500" : "text-muted-500",
            )}
          />
        </BaseIconBox>
      )}

      <div>
        <BaseHeading
          as="h4"
          weight={props.selected ? "semibold" : "normal"}
          size="sm"
          className="text-muted-800 dark:text-white"
        >
          <span dangerouslySetInnerHTML={{ __html: markedLabel }} />
        </BaseHeading>

        {sublabel && (
          <BaseText size="xs" className="text-muted-400">
            <span dangerouslySetInnerHTML={{ __html: markedSublabel }} />
          </BaseText>
        )}
      </div>

      {props.selected && (
        <div
          className={cn(
            "ms-auto flex items-center justify-center",
            media && "h-8 w-8",
            icon && "h-8 w-8",
          )}
        >
          {props.renderSelectedIcon?.() || (
            <Icon
              icon={selectedIcon}
              className="text-success-500 block h-4 w-4"
            />
          )}
        </div>
      )}
    </div>
  );
});
