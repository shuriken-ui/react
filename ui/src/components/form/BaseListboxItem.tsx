import { type FC } from "react";
import { Icon } from "@iconify/react";
import { BaseAvatar } from "~/components/base/BaseAvatar";
import { BaseIconBox } from "~/components/base/BaseIconBox";
import { BaseHeading } from "~/components/base/BaseHeading";
import { BaseText } from "~/components/base/BaseText";

type BaseListboxItemProps = {
  /**
   * The values to display in the component.
   */
  value?: {
    /**
     * Internal value of the item.
     */
    value?: string;

    /**
     * Optional label to display instead of the value.
     */
    label?: string;

    /**
     * Optional sublabel to display for the item.
     */
    sublabel?: string;

    /**
     * Optional media (such as an image URL) to display for the item.
     */
    media?: string;

    /**
     * Optional icon to display for the item.
     */
    icon?: string;
  };

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
};

export const BaseListboxItem: FC<BaseListboxItemProps> = ({
  selectedIcon = "lucide:check",
  ...props
}) => {
  return (
    <>
      {props.value?.media && (
        <BaseAvatar src={props.value.media} size="xs" alt="" />
      )}
      {props.value?.icon && !props.value?.media && (
        <BaseIconBox size="sm" rounded="sm">
          <Icon
            icon={props.value.icon}
            className="text-muted-400 group-hover/nui-listbox-option:text-primary-500 h-5 w-5 transition-colors duration-200"
          />
        </BaseIconBox>
      )}

      <div className="nui-listbox-option-inner">
        <BaseHeading
          as="h4"
          weight={props.selected ? "semibold" : "normal"}
          size="sm"
          className="nui-listbox-heading"
        >
          {props.value?.label ? props.value.label : props.value?.value}
        </BaseHeading>

        {props.value?.sublabel && (
          <BaseText size="xs" className="nui-listbox-text">
            {props.value.sublabel}
          </BaseText>
        )}
      </div>

      {props.selected && (
        <span className="nui-listbox-selected-icon">
          <Icon
            icon={selectedIcon}
            className="nui-listbobx-selected-icon-inner"
          />
        </span>
      )}
    </>
  );
};
