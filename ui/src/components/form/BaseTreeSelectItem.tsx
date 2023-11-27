import { PropsWithChildren, forwardRef } from "react";
import { Icon } from "@iconify/react";
import { cn } from "../../utils";
import { useConfig } from "../../Provider";
import { BaseAvatar } from "../base/BaseAvatar";
import { BaseIconBox } from "../base/BaseIconBox";
import { BaseText } from "../base/BaseText";

type BaseTreeSelectItemProps = PropsWithChildren<{
  /**
   * The items to display in the component.
   */
  value?: {
    /**
     * The name of the item.
     */
    name?: string;

    /**
     * Optional text to display for the item.
     */
    text?: string;

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
   * The level in the tree of the item.
   */
  level?: number;

  /**
   * Action triggered when the item is clicked.
   */
  toggle?: () => void;

  /**
   * The shape of the component.
   */
  shape?: "straight" | "rounded" | "curved" | "full";
}>;

export const BaseTreeSelectItem = forwardRef<
  HTMLDivElement,
  BaseTreeSelectItemProps
>(function BaseTreeSelectItem(
  { level = 1, shape: defaultShape, value, toggle, children },
  ref,
) {
  const config = useConfig();

  const shape = defaultShape ?? config.defaultShapes?.autocompleteItem;

  const Component = toggle ? "button" : "div";

  const ComponentProps = toggle
    ? {
        onClick: toggle,
        className: "nui-focus",
      }
    : {};

  return (
    <div
      className={cn(
        "flex items-center p-2 ps-0",
        shape === "rounded" && "rounded-md",
        shape === "curved" && "rounded-lg",
        shape === "full" && "rounded-xl",
      )}
      ref={ref}
    >
      {children}

      <Component className="flex items-center" {...ComponentProps}>
        {value && value.media && !value.icon && (
          <BaseAvatar src={value.media} size="xs" className="me-2" />
        )}

        {value && !value.media && value.icon && (
          <BaseIconBox size="xs" shape="full">
            <Icon icon={value.icon} className="h-4 w-4" />
          </BaseIconBox>
        )}

        <div className="flex flex-col items-start">
          {value && value.name && (
            <div className="text-muted-800 font-heading text-sm font-medium leading-none dark:text-white">
              {value.name}
            </div>
          )}

          {value && value.text && (
            <BaseText size="xs" className="text-muted-400">
              {value.text}
            </BaseText>
          )}
        </div>
      </Component>
    </div>
  );
});
