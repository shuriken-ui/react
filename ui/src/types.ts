import type {
  ComponentPropsWithRef,
  ElementType,
  PropsWithChildren,
} from "react";

/** Polymotphic Component Utils */

/**
 * as props util
 */

type AsProp<C extends ElementType> = {
  as?: C;
};

/**
 * Utility to omit properties from a component's props
 */

type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P);

/**
 * Utility to make nested props optional
 */
export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

/**
 * Polymorphic Component Props
 */

export type PolymorphicComponentProps<
  C extends ElementType = "div",
  Props = object,
> = PropsWithChildren<Props & AsProp<C>> &
  Omit<ComponentPropsWithRef<C>, PropsToOmit<C, Props> | "ref">;

/**
 * Utility to extract the ref type for a component
 */

export type PolymorphicRef<C extends ElementType> =
  ComponentPropsWithRef<C>["ref"];

/**
 * Polymorphic Component Props with Ref
 */

export type PolymorphicComponentPropsWithRef<
  C extends ElementType = "div",
  Props = object,
> = PropsWithChildren<Props & AsProp<C>> &
  Omit<ComponentPropsWithRef<C>, PropsToOmit<C, Props>>;

/** ********************************************************************* */

export type ColorMode = "system" | "dark" | "light";
/**
 * Config
 */

export type Config = {
  // #region base
  BaseAccordion: {
    /**
     * The action icon of the accordion.
     */
    action: "dot" | "chevron" | "plus";
    /**
     * Default color for the accordion dot
     */
    dotColor:
      | "default"
      | "primary"
      | "success"
      | "info"
      | "warning"
      | "danger"
      | "dark"
      | "black";
    /**
     * The color of the accordion.
     */
    color: "default" | "default-contrast" | "muted" | "muted-contrast";
    /**
     * The radius of the accordion.
     */
    rounded: "none" | "sm" | "md" | "lg";
  };
  BaseAvatar: {
    /**
     * Default color for the avatar
     */
    color:
      | "white"
      | "muted"
      | "primary"
      | "success"
      | "info"
      | "warning"
      | "danger"
      | "pink"
      | "yellow"
      | "indigo"
      | "violet";
    /**
     * The radius of the avatar.
     *
     * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
     */
    rounded: "full";
    /**
     * The size of the avatar.
     */
    size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  };
  BaseAvatarGroup: {
    /**
     * The limit of avatars to display.
     */
    limit: number;
    /**
     * The size of the avatar group.
     */
    size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  };
  BaseBreadcrumb: {
    /**
     * Defines the hover color of the breadcrumb links
     */
    color: "primary" | "dark" | "black";
  };
  BaseButton: {
    /**
     * Default color for the BaseButton component
     */
    color:
      | "default"
      | "default-contrast"
      | "muted"
      | "muted-contrast"
      | "light"
      | "dark"
      | "primary"
      | "info"
      | "success"
      | "warning"
      | "danger"
      | "none";
    /**
     * Default rounded for the BaseButton component
     */
    rounded: "none" | "sm" | "md" | "lg" | "full";
    /**
     * Default size for the BaseButton component
     */
    size: "sm" | "md" | "lg" | "xl";
    /**
     * Default variant for the BaseButton component
     */
    variant: "solid" | "pastel" | "outline";
  };
  BaseButtonAction: {
    /**
     * Default color for the BaseButtonAction component
     */
    color:
      | "default"
      | "default-contrast"
      | "muted"
      | "muted-contrast"
      | "light"
      | "dark"
      | "primary"
      | "info"
      | "success"
      | "warning"
      | "danger"
      | "none";
    /**
     * Default rounded for the BaseButtonAction component
     */
    rounded: "none" | "sm" | "md" | "lg" | "full";
  };
  BaseButtonClose: {
    /**
     * Default color for the BaseButtonClose component
     */
    color:
      | "default"
      | "default-contrast"
      | "muted"
      | "muted-contrast"
      | "primary"
      | "info"
      | "success"
      | "warning"
      | "danger"
      | "none";
    /**
     * Default rounded for the BaseButtonClose component
     */
    rounded: "none" | "sm" | "md" | "lg" | "full";
    /**
     * Default size for the BaseButtonClose component
     */
    size: "xs" | "sm" | "md" | "lg" | "xl";
  };
  BaseButtonGroup: Record<string, never>;
  BaseButtonIcon: {
    /**
     * Default color for the BaseButtonIcon component
     */
    color:
      | "default"
      | "default-contrast"
      | "muted"
      | "muted-contrast"
      | "light"
      | "dark"
      | "primary"
      | "info"
      | "success"
      | "warning"
      | "danger"
      | "none";
    /**
     * Default rounded for the BaseButtonIcon component
     */
    rounded: "none" | "sm" | "md" | "lg" | "full";
    /**
     * Default size for the BaseButton component
     */
    size: "sm" | "md" | "lg" | "xl";
  };
  BaseCard: {
    /**
     * Default color for the BaseCard component
     */
    color:
      | "default"
      | "default-contrast"
      | "muted"
      | "muted-contrast"
      | "dark"
      | "black"
      | "primary"
      | "info"
      | "success"
      | "warning"
      | "danger"
      | "none";
    /**
     * Default rounded for the BaseCard component
     */
    rounded: "none" | "sm" | "md" | "lg";
  };
  BaseDropdown: {
    /**
     * The color of the dropdown button.
     */
    buttonColor:
      | "default"
      | "default-contrast"
      | "muted"
      | "muted-contrast"
      | "light"
      | "dark"
      | "black"
      | "primary"
      | "info"
      | "success"
      | "warning"
      | "danger"
      | "none";
    /**
     * The color of the dropdown.
     */
    color: "default" | "default-contrast" | "muted" | "muted-contrast" | "none";
    /**
     * The placement of the dropdown via floating-ui
     */
    placement:
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
     * Default rounded for the BaseDropdown component
     */
    rounded: "none" | "sm" | "md" | "lg" | "full";
    /**
     * Default size for the BaseDropdown component menu
     */
    size: "md" | "lg";
    /**
     * The variant of the dropdown.
     */
    variant: "button" | "context" | "text";
  };
  BaseDropdownDivider: Record<string, never>;
  BaseDropdownItem: {
    /**
     * The hover color of the dropdown item inner elements.
     */
    color:
      | "primary"
      | "info"
      | "success"
      | "warning"
      | "danger"
      | "dark"
      | "black";
    /**
     * The contrast of the dropdown item.
     */
    contrast: "default" | "contrast";
    /**
     * The radius of the dropdown item.
     */
    rounded: "none" | "sm" | "md" | "lg";
  };
  BaseHeading: {
    /**
     * The tag of the heading.
     */
    as: string;
    /**
     * The lead of the heading.
     */
    lead: "none" | "tight" | "snug" | "normal" | "relaxed" | "loose";
    /**
     * The size of the heading.
     */
    size:
      | "xs"
      | "sm"
      | "md"
      | "lg"
      | "xl"
      | "2xl"
      | "3xl"
      | "4xl"
      | "5xl"
      | "6xl"
      | "7xl"
      | "8xl"
      | "9xl";
    /**
     * The weight of the heading.
     */
    weight: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
  };
  BaseIconBox: {
    /**
     * The color of the icon box.
     */
    color:
      | "default"
      | "default-contrast"
      | "muted"
      | "muted-contrast"
      | "dark"
      | "light"
      | "black"
      | "primary"
      | "info"
      | "success"
      | "warning"
      | "danger"
      | "none";
    /**
     * The radius of the icon box.
     */
    rounded: "none" | "sm" | "md" | "lg" | "full";
    /**
     * The size of the icon box.
     */
    size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
    /**
     * The variant of the icon box.
     */
    variant: "solid" | "outline" | "pastel";
  };
  BaseKbd: {
    /**
     * The color of the kbd.
     */
    color: "default" | "muted" | "none";
    /**
     * The radius of the kbd.
     */
    rounded: "none" | "sm" | "md" | "lg" | "full";
    /**
     * The size of the kbd.
     */
    size: "xs" | "sm" | "md" | "lg";
  };
  BaseLink: Record<string, never>;
  BaseList: Record<string, never>;
  BaseListItem: Record<string, never>;
  BaseMessage: {
    /**
     * The color of the message.
     */
    color:
      | "default"
      | "default-contrast"
      | "muted"
      | "muted-muted"
      | "primary"
      | "info"
      | "success"
      | "warning"
      | "danger";
    /**
     * The radius of the message.
     */
    rounded: "none" | "sm" | "md" | "lg" | "full";

    /**
     * Default icons to apply to the messages, when the icon is active.
     */
    defaultIcons?: {
      default?: string;
      "default-contrast"?: string;
      muted?: string;
      "muted-contrast"?: string;
      info?: string;
      success?: string;
      warning?: string;
      danger?: string;
      primary?: string;
    };
  };
  BasePagination: {
    /**
     * The color of the pagination.
     */
    color: "primary" | "dark" | "black";
    /**
     * The radius of the pagination.
     */
    rounded: "none" | "sm" | "md" | "lg" | "full";
  };
  BaseParagraph: {
    /**
     * The tag of the paragraph.
     */
    as: string;
    /**
     * The lead of the paragraph.
     */
    lead: "none" | "tight" | "snug" | "normal" | "relaxed" | "loose";
    /**
     * The size of the paragraph.
     */
    size:
      | "xs"
      | "sm"
      | "md"
      | "lg"
      | "xl"
      | "2xl"
      | "3xl"
      | "4xl"
      | "5xl"
      | "6xl"
      | "7xl"
      | "8xl"
      | "9xl";
    /**
     * The weight of the paragraph.
     */
    weight: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
  };
  BasePlaceholderPage: {
    /**
     * The size of the placeholder image.
     */
    imageSize: "xs" | "sm" | "md" | "lg" | "xl";
  };
  BasePlaceload: Record<string, never>;
  BaseProgress: {
    /**
     * The color of the progress.
     */
    color:
      | "primary"
      | "info"
      | "success"
      | "warning"
      | "danger"
      | "light"
      | "dark"
      | "black";
    /**
     * The grey shade of the progress.
     */
    contrast: "default" | "contrast";
    /**
     * The radius of the progress.
     */
    rounded: "none" | "sm" | "md" | "lg" | "full";
    /**
     * The size of the progress.
     */
    size: "xs" | "sm" | "md" | "lg" | "xl";
  };
  BaseProgressCircle: {
    /**
     * The color of the progress circle.
     */
    color:
      | "primary"
      | "info"
      | "success"
      | "warning"
      | "danger"
      | "light"
      | "dark"
      | "black";
  };
  BaseProse: {
    /**
     * The radius of the prose.
     */
    rounded: "none" | "sm" | "md" | "lg";
  };
  BaseSnack: {
    /**
     * The color of the snack.
     */
    color: "default" | "default-contrast" | "muted" | "muted-contrast";
    /**
     * The size of the snack.
     */
    size: "xs" | "sm" | "md";
  };
  BaseTabs: {
    /**
     * The color of the active tab.
     */
    color: "default" | "primary" | "light" | "dark" | "black";
    /**
     * The alignment of the tabs.
     */
    justify: "start" | "center" | "end";
    /**
     * The type of the tabs.
     */
    type: "tabs" | "box";
  };
  BaseTabSlider: {
    /**
     * The color of the active tab.
     *
     * @type {}
     */
    color:
      | "default"
      | "default-contrast"
      | "primary"
      | "light"
      | "dark"
      | "black";
    /**
     * The alignment of the tabs.
     */
    justify: "start" | "center" | "end";
    /**
     * The radius of the tabs.
     */
    rounded: "none" | "sm" | "md" | "lg" | "full";
    /**
     * The size of the tabs.
     */
    size: "sm" | "md";
  };
  BaseTag: {
    /**
     * The color of the tag.
     *
     * @type {}
     */
    color:
      | "default"
      | "default-contrast"
      | "muted"
      | "muted-contrast"
      | "light"
      | "dark"
      | "black"
      | "primary"
      | "info"
      | "success"
      | "warning"
      | "danger";
    /**
     * The radius of the tag.
     */
    rounded: "none" | "sm" | "md" | "lg" | "full";
    /**
     * The size of the tag.
     */
    size: "sm" | "md";
    /**
     * The variant of the tag.
     */
    variant: "solid" | "pastel" | "outline";
  };
  BaseText: {
    /**
     * The lead of the text span.
     */
    lead: "none" | "tight" | "snug" | "normal" | "relaxed" | "loose";
    /**
     * The size of the text span.
     */
    size:
      | "xs"
      | "sm"
      | "md"
      | "lg"
      | "xl"
      | "2xl"
      | "3xl"
      | "4xl"
      | "5xl"
      | "6xl"
      | "7xl"
      | "8xl"
      | "9xl";
    /**
     * The weight of the text span.
     */
    weight: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
  };
  BaseThemeSwitch: {
    /**
     * Disables transitions when toggling between light and dark mode.
     */
    disableTransitions: boolean;
  };
  BaseThemeToggle: {
    /**
     * Disables transitions when toggling between light and dark mode.
     */
    disableTransitions: boolean;
  };
  // #endregion

  // #region form
  BaseAutocomplete: {
    /**
     * The contrast of the autocomplete.
     */
    contrast: "default" | "default-contrast" | "muted" | "muted-contrast";
    /**
     * Translation strings.
     */
    i18n: {
      empty: string;
      pending: string;
    };
    /**
     * The radius of the autocomplete.
     */
    rounded: "none" | "sm" | "md" | "lg" | "full";
    /**
     * The size of the autocomplete.
     */
    size: "sm" | "md" | "lg" | "xl";
  };
  BaseAutocompleteItem: {
    /**
     * The radius of the autocomplete item.
     */
    rounded: "none" | "sm" | "md" | "lg" | "full";
  };
  BaseCheckbox: {
    /**
     * Default color for the BaseCheckbox component
     */
    color:
      | "default"
      | "muted"
      | "light"
      | "dark"
      | "black"
      | "primary"
      | "info"
      | "success"
      | "warning"
      | "danger";
    /**
     * Default rounded for the BaseCheckbox component
     */
    rounded: "none" | "sm" | "md" | "lg" | "full";
  };
  BaseCheckboxAnimated: {
    /**
     * Default color for the BaseCheckbox component
     */
    color:
      | "primary"
      | "info"
      | "success"
      | "warning"
      | "danger"
      | "light"
      | "muted"
      | "dark"
      | "black";
  };
  BaseCheckboxHeadless: Record<string, never>;
  BaseFullscreenDropfile: {
    /**
     * The color of the icon.
     *
     * @type {'primary' | 'dark' | 'black'}
     */
    color: "primary" | "dark" | "black";
  };
  BaseInput: {
    /**
     * The contrast of the input.
     */
    contrast: "default" | "default-contrast" | "muted" | "muted-contrast";
    /**
     * The radius of the input.
     */
    rounded: "none" | "sm" | "md" | "lg" | "full";
    /**
     * The size of the input.
     */
    size: "sm" | "md" | "lg" | "xl";
  };
  BaseInputFile: {
    /**
     * The contrast of the input.
     */
    contrast: "default" | "default-contrast";
    /**
     * The radius of the input.
     */
    rounded: "none" | "sm" | "md" | "lg" | "full";
    /**
     * The size of the input.
     */
    size: "sm" | "md" | "lg" | "xl";
    /**
     * The translation strings for the input file.
     */
    i18n: {
      empty: string;
      invalid: string;
      multiple: string;
    };
  };
  BaseInputFileHeadless: Record<string, never>;
  BaseInputNumber: {
    /**
     * The contrast of the input.
     */
    contrast: "default" | "default-contrast" | "muted" | "muted-contrast";
    /**
     * The radius of the input.
     */
    rounded: "none" | "sm" | "md" | "lg" | "full";
    /**
     * The size of the input.
     */
    size: "sm" | "md" | "lg" | "xl";
  };
  BaseInputHelpText: {
    /**
     * The color of the text.
     *
     * @type {'default' | 'default-contrast' | 'muted' | 'muted-contrast' | 'light' | 'dark' | 'black' | 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'none'}
     */
    color: "default";
  };
  BaseListbox: {
    /**
     * The contrast of the input.
     */
    contrast: "default" | "default-contrast" | "muted" | "muted-contrast";
    /**
     * The placement of the dropdown via floating-ui
     */
    placement:
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
     * The radius of the input.
     */
    rounded: "none" | "sm" | "md" | "lg" | "full";
    /**
     * The size of the input.
     */
    size: "sm" | "md" | "lg" | "xl";
  };
  BaseListboxItem: Record<string, never>;
  BaseRadio: {
    /**
     * Default color for the BaseRadio component
     */
    color:
      | "default"
      | "light"
      | "muted"
      | "dark"
      | "black"
      | "primary"
      | "info"
      | "success"
      | "warning"
      | "danger";
  };
  BaseRadioHeadless: Record<string, never>;
  BaseSelect: {
    /**
     * The contrast of the select.
     */
    contrast: "default" | "default-contrast" | "muted" | "muted-contrast";
    /**
     * The radius of the select.
     */
    rounded: "none" | "sm" | "md" | "lg" | "full";
    /**
     * The size of the select.
     */
    size: "sm" | "md" | "lg" | "xl";
  };
  BaseSwitchBall: {
    /**
     * The color of the switch.
     */
    color:
      | "primary"
      | "info"
      | "success"
      | "warning"
      | "danger"
      | "dark"
      | "black";
  };
  BaseSwitchThin: {
    /**
     * The color of the switch.
     */
    color:
      | "primary"
      | "info"
      | "success"
      | "warning"
      | "danger"
      | "dark"
      | "black";
  };
  BaseTextarea: {
    /**
     * The contrast of the textarea.
     */
    contrast: "default" | "default-contrast" | "muted" | "muted-contrast";
    /**
     * The radius of the textarea.
     */
    rounded: "none" | "sm" | "md" | "lg" | "full";
    /**
     * The size of the textarea.
     */
    size: "sm" | "md" | "lg";
  };
  BaseTreeSelect: Record<string, never>;
  BaseTreeSelectItem: {
    /**
     * The radius of the tree select item.
     */
    rounded: "none" | "sm" | "md" | "lg" | "full";
  };
};
