import { ComponentPropsWithRef, ElementType, PropsWithChildren } from "react";

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
  BaseAccordion?: {
    /**
     * The radius of the accordion.
     *
     */
    rounded?: "none" | "sm" | "md" | "lg";
    /**
     * The action icon of the accordion.
     *
     */
    action?: "dot" | "chevron" | "plus";
  };

  BaseAutocomplete?: {
    /**
     * The radius of the autocomplete.
     *
     */
    rounded?: "none" | "sm" | "md" | "lg" | "full";
    /**
     * The size of the autocomplete.
     *
     */
    size?: "sm" | "md" | "lg";
    /**
     * The contrast of the autocomplete.
     *
     */
    contrast?: "default" | "default-contrast" | "muted" | "muted-contrast";
  };

  BaseAutocompleteItem?: {
    /**
     * The radius of the autocomplete item.
     *
     */
    rounded?: "none" | "sm" | "md" | "lg";
  };

  BaseAvatar?: {
    /**
     * The size of the avatar.
     *
     */
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
    /**
     * The radius of the avatar.
     *
     */
    rounded?: "none" | "sm" | "md" | "lg" | "full";
  };

  BaseAvatarGroup?: {
    /**
     * The limit of avatars to display.
     *
     */
    limit?: number;
    /**
     * The size of the avatar group.
     *
     */
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  };

  BaseButton?: {
    /**
     * Default variant for the BaseButton component
     *
     */
    variant?: "solid" | "pastel" | "outline";
    /**
     * Default rounded for the BaseButton component
     *
     */
    rounded?: "none" | "sm" | "md" | "lg" | "full";
    /**
     * Default color for the BaseButton component
     *
     */
    color?:
      | "default"
      | "primary"
      | "info"
      | "success"
      | "warning"
      | "danger"
      | "light"
      | "muted"
      | "none";
    /**
     * Default size for the BaseButton component
     *
     */
    size?: "sm" | "md" | "lg";
  };

  BaseButtonAction?: {
    /**
     * Default rounded for the BaseButtonAction component
     *
     */
    rounded?: "none" | "sm" | "md" | "lg" | "full";
    /**
     * Default color for the BaseButtonAction component
     *
     */
    color?:
      | "default"
      | "primary"
      | "info"
      | "success"
      | "warning"
      | "danger"
      | "muted"
      | "none";
  };

  BaseButtonClose?: {
    /**
     * Default size for the BaseButtonClose component
     *
     */
    size?: "xs" | "sm" | "md" | "lg";
    /**
     * Default rounded for the BaseButtonClose component
     *
     */
    rounded?: "none" | "sm" | "md" | "lg" | "full";
    /**
     * Default color for the BaseButtonClose component
     *
     */
    color?:
      | "default"
      | "primary"
      | "info"
      | "success"
      | "warning"
      | "danger"
      | "muted"
      | "none";
  };

  BaseButtonIcon?: {
    /**
     * Default rounded for the BaseButtonIcon component
     *
     */
    rounded?: "none" | "sm" | "md" | "lg" | "full";
    /**
     * Default color for the BaseButtonIcon component
     *
     */
    color?:
      | "default"
      | "primary"
      | "info"
      | "success"
      | "warning"
      | "danger"
      | "muted"
      | "none";
    /**
     * Default size for the BaseButton component
     *
     */
    size?: "sm" | "md" | "lg";
  };

  BaseCard?: {
    /**
     * Default rounded for the BaseCard component
     *
     */
    rounded?: "none" | "sm" | "md" | "lg";
    /**
     * Default color for the BaseCard component
     *
     */
    color?:
      | "white"
      | "white-contrast"
      | "muted"
      | "muted-contrast"
      | "primary"
      | "info"
      | "success"
      | "warning"
      | "danger"
      | "none";
  };

  BaseCheckbox?: {
    /**
     * Default rounded for the BaseCheckbox component
     *
     */
    rounded?: "none" | "sm" | "md" | "lg" | "full";
    /**
     * Default color for the BaseCheckbox component
     *
     */
    color?:
      | "default"
      | "light"
      | "muted"
      | "primary"
      | "info"
      | "success"
      | "warning"
      | "danger";
  };

  BaseCheckboxAnimated?: {
    /**
     * Default color for the BaseCheckbox component
     *
     */
    color?:
      | "light"
      | "muted"
      | "primary"
      | "info"
      | "success"
      | "warning"
      | "danger";
  };

  BaseDropdown?: {
    /**
     * The variant of the dropdown.
     *
     */
    variant?: "button" | "context" | "text";
    /**
     * The color of the dropdown button.
     *
     */
    buttonColor?:
      | "default"
      | "primary"
      | "info"
      | "success"
      | "warning"
      | "danger"
      | "light"
      | "muted"
      | "none";
    /**
     * The color of the dropdown.
     *
     */
    color?:
      | "white"
      | "white-contrast"
      | "muted"
      | "muted-contrast"
      | "primary"
      | "info"
      | "success"
      | "warning"
      | "danger"
      | "none";
    /**
     * Default rounded for the BaseDropdown component
     *
     */
    rounded?: "none" | "sm" | "md" | "lg" | "full";
    /**
     * The orientation of the dropdown.
     *
     * @deprecated use placement instead
     */
    orientation?: "start" | "end";
    /**
     * The placement of the dropdown via floating-ui
     *
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
     * Default size for the BaseDropdown component menu
     *
     */
    size?: "md" | "lg";
    /**
     * The label to display for the dropdown.
     *
     */
    label?: string;
    /**
     * The header label to display for the dropdown.
     *
     */
    headerLabel?: string;
    /**
     * Used a fixed strategy to float the component
     *
     */
    fixed?: boolean;
  };

  BaseDropdownItem?: {
    /**
     * The radius of the dropdown item.
     *
     */
    rounded?: "none" | "sm" | "md" | "lg";
    /**
     * The color of the dropdown item.
     *
     */
    color?: "default" | "contrast";
  };
  BaseHeading?: {
    /**
     * The tag of the heading.
     *
     */
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
    /**
     * The size of the heading.
     *
     */
    size?:
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
     *
     */
    weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
    /**
     * The lead of the heading.
     *
     */
    lead?: "none" | "tight" | "snug" | "normal" | "relaxed" | "loose";
  };

  BaseIconBox?: {
    /**
     * The variant of the icon box.
     *
     */
    variant?: "solid" | "outline" | "pastel";
    /**
     * The color of the icon box.
     *
     */
    color?:
      | "default"
      | "invert"
      | "primary"
      | "info"
      | "success"
      | "warning"
      | "danger"
      | "none";
    /**
     * The size of the icon box.
     *
     */
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
    /**
     * The radius of the icon box.
     *
     */
    rounded?: "none" | "sm" | "md" | "lg" | "full";
  };

  BaseInput?: {
    /**
     * The radius of the input.
     *
     */
    rounded?: "none" | "sm" | "md" | "lg" | "full";
    /**
     * The size of the input.
     *
     */
    size?: "sm" | "md" | "lg";
    /**
     * The contrast of the input.
     *
     */
    contrast?: "default" | "default-contrast" | "muted" | "muted-contrast";
  };

  BaseInputFile?: {
    /**
     * The radius of the input.
     *
     */
    rounded?: "none" | "sm" | "md" | "lg" | "full";
    /**
     * The size of the input.
     *
     */
    size?: "sm" | "md" | "lg";
    /**
     * The contrast of the input.
     *
     */
    contrast?: "default" | "default-contrast";
  };

  BaseInputNumber?: {
    /**
     * The inputmode to use for the input, usually for mobile devices.
     *
     */
    inputmode?: "decimal" | "numeric";
    /**
     * The radius of the input.
     *
     */
    rounded?: "none" | "sm" | "md" | "lg" | "full";
    /**
     * The size of the input.
     *
     */
    size?: "sm" | "md" | "lg";
    /**
     * The contrast of the input.
     *
     */
    contrast?: "default" | "default-contrast" | "muted" | "muted-contrast";
  };

  BaseKbd?: {
    /**
     * The radius of the kbd.
     *
     */
    rounded?: "none" | "sm" | "md" | "lg" | "full";
    /**
     * The size of the kbd.
     *
     */
    size?: "xs" | "sm" | "md" | "lg";
    /**
     * The color of the kbd.
     *
     */
    color?: "default" | "muted" | "none";
  };

  BaseListbox?: {
    /**
     * The radius of the input.
     *
     */
    rounded?: "none" | "sm" | "md" | "lg" | "full";
    /**
     * The size of the input.
     *
     */
    size?: "sm" | "md" | "lg";
    /**
     * The contrast of the input.
     *
     */
    contrast?: "default" | "default-contrast" | "muted" | "muted-contrast";
  };

  BaseMessage?: {
    /**
     * The type of the message.
     *
     */
    type?:
      | "default"
      | "muted"
      | "primary"
      | "info"
      | "success"
      | "warning"
      | "danger";
    /**
     * The radius of the message.
     *
     */
    rounded?: "none" | "sm" | "md" | "lg" | "full";
    /**
     * Determines if the message is closable.
     *
     */
    closable?: boolean;
  };

  BasePagination?: {
    /**
     * The radius of the pagination.
     *
     */
    rounded?: "none" | "sm" | "md" | "lg" | "full";
  };

  BaseParagraph?: {
    /**
     * The tag of the paragraph.
     *
     */
    as?: string;
    /**
     * The size of the paragraph.
     *
     */
    size?: "md";
    /**
     * The weight of the paragraph.
     *
     */
    weight?: "normal";
    /**
     * The lead of the paragraph.
     *
     */
    lead?: "normal";
  };

  BasePlaceholderPage?: {
    /**
     * The size of the placeholder image.
     *
     */
    imageSize?: "xs" | "sm" | "md" | "lg" | "xl";
  };

  BaseProgress?: {
    /**
     * The size of the progress.
     *
     */
    size?: "sm" | "md" | "lg" | "xl";
    /**
     * The grey shade of the progress.
     *
     */
    contrast?: "default" | "contrast";
    /**
     * The color of the progress.
     *
     */
    color?: "primary" | "info" | "success" | "warning" | "danger";
    /**
     * The radius of the progress.
     *
     */
    rounded?: "none" | "sm" | "md" | "lg" | "full";
  };

  BaseProse?: {
    /**
     * The radius of the prose.
     *
     */
    rounded?: "none" | "sm" | "md" | "lg";
  };

  BaseRadio?: {
    /**
     * Default color for the BaseRadio component
     *
     */
    color?:
      | "default"
      | "light"
      | "muted"
      | "primary"
      | "info"
      | "success"
      | "warning"
      | "danger";
  };

  BaseSelect?: {
    /**
     * The radius of the select.
     *
     */
    rounded?: "none" | "sm" | "md" | "lg" | "full";
    /**
     * The size of the select.
     *
     */
    size?: "sm" | "md" | "lg";
    /**
     * The contrast of the select.
     *
     */
    contrast?: "default" | "default-contrast" | "muted" | "muted-contrast";
  };

  BaseSnack?: {
    /**
     * The size of the snack.
     *
     */
    size?: "xs" | "sm" | "md";
    /**
     * The color of the snack.
     *
     */
    color?: "default" | "muted";
  };

  BaseSwitchBall?: {
    /**
     * The color of the switch.
     *
     */
    color?: "primary" | "info" | "success" | "warning" | "danger";
  };

  BaseSwitchThin?: {
    /**
     * The color of the switch.
     *
     */
    color?: "primary" | "info" | "success" | "warning" | "danger";
  };

  BaseTabs?: {
    /**
     * The type of the tabs.
     *
     */
    type?: "tabs" | "box";
    /**
     * The alignment of the tabs.
     *
     */
    justify?: "start" | "center" | "end";
  };

  BaseTabSlider?: {
    /**
     * The alignment of the tabs.
     *
     */
    justify?: "start" | "center" | "end";
    /**
     * The size of the tabs.
     *
     */
    size?: "sm" | "md";
    /**
     * The radius of the tabs.
     *
     */
    rounded?: "none" | "sm" | "md" | "lg" | "full";
  };
  BaseTag?: {
    /**
     * The variant of the tag.
     *
     */
    variant?: "solid" | "pastel" | "outline";
    /**
     * The color of the tag.
     *
     */
    color?:
      | "default"
      | "primary"
      | "info"
      | "success"
      | "warning"
      | "danger"
      | "muted";
    /**
     * The radius of the tag.
     *
     */
    rounded?: "none" | "sm" | "md" | "lg" | "full";
    /**
     * The size of the tag.
     *
     */
    size?: "sm" | "md";
  };

  BaseText?: {
    /**
     * The size of the text span.
     *
     */
    size?:
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
     *
     */
    weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
    /**
     * The lead of the text span.
     *
     */
    lead?: "none" | "tight" | "snug" | "normal" | "relaxed" | "loose";
  };

  BaseTextarea?: {
    /**
     * The radius of the textarea.
     *
     */
    rounded?: "none" | "sm" | "md" | "lg" | "full";
    /**
     * The size of the textarea.
     *
     */
    size?: "sm" | "md" | "lg";
    /**
     * The contrast of the textarea.
     *
     */
    contrast?: "default" | "default-contrast" | "muted" | "muted-contrast";
  };

  BaseTreeSelectItem?: {
    /**
     * The radius of the tree select item.
     *
     */
    rounded?: "none" | "sm" | "md" | "lg" | "full";
  };

  defaultShapes: {
    /**
     * Default shape for the BaseAccordion component
     */
    accordion?: "straight" | "rounded" | "smooth" | "curved";
    /**
     * Default shape for the BaseAutocompleteItem component
     */
    autocompleteItem?: "straight" | "rounded" | "smooth" | "curved" | "full";
    /**
     * Default shape for the BaseAvatar component
     */
    avatar?: "straight" | "rounded" | "curved" | "full";
    /**
     * Default shape for the BaseButton component
     */
    button?: "straight" | "rounded" | "curved" | "smooth" | "full";
    /**
     * Default shape for the BaseButtonAction component
     */
    buttonAction?: "straight" | "rounded" | "smooth" | "curved" | "full";
    /**
     * Default shape for the BaseButtonClose component
     */
    buttonIcon?: "straight" | "rounded" | "smooth" | "curved" | "full";
    /**
     * Default shape for the BaseButtonClose component
     */
    buttonClose?: "straight" | "rounded" | "smooth" | "curved" | "full";
    /**
     * Default shape for the BaseCard component
     */
    card?: "straight" | "rounded" | "smooth" | "curved";
    /**
     * Default shape for the BaseDropdown component
     */
    dropdown?: "straight" | "rounded" | "smooth" | "curved" | "full";
    /**
     * Default shape for the BaseIconBox component
     */
    iconBox?: "straight" | "rounded" | "curved" | "full";
    /**
     * Default shape for all input components component
     * - BaseAutocomplete
     * - BaseCheckbox
     * - BaseInput
     * - BaseInputFile
     * - BaseInputListbox
     * - BaseInputSelect
     * - BaseInputTextarea
     */
    input?: "straight" | "rounded" | "smooth" | "curved" | "full";
    /**
     * Default shape for the BaseMessage component
     */
    message?: "straight" | "rounded" | "smooth" | "curved" | "full";
    /**
     * Default shape for the BasePagination component
     */
    pagination?: "straight" | "rounded" | "smooth" | "curved" | "full";
    /**
     * Default shape for the BaseProgress component
     */
    progress?: "straight" | "rounded" | "curved" | "full";
    /**
     * Default shape for the BaseProse component
     */
    prose?: "straight" | "rounded" | "curved";
    /**
     * Default shape for the BaseTabSlider component
     */
    tabSlider?: "straight" | "rounded" | "smooth" | "curved" | "full";
    /**
     * Default shape for the BaseTag component
     */
    tag?: "straight" | "rounded" | "curved" | "full";
  };
};
