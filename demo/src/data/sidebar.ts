export type PageLink = {
  icon?: string;
  title: string;
  description: string;
  href: string;
};

export type LinkGroup = { title: string; links: Record<string, PageLink> };

/** sidebar navigation links */
export const sidebarlinks = {
  authority: {
    title: "Authority",
    links: {
      colors: {
        icon: "system-uicons:venn",
        title: "Colors",
        href: "/tests/authority/colors",
        description: "Color system",
      },
      icons: {
        icon: "system-uicons:diamond",
        title: "Icons",
        href: "/tests/authority/icons",
        description: "SVG icon",
      },
      prose: {
        icon: "system-uicons:paragraph-left",
        title: "BaseProse",
        href: "/tests/authority/prose",
        description: "Tailwind typography plugin",
      },
      typography: {
        icon: "system-uicons:paragraph-left",
        title: "Typography",
        href: "/tests/authority/typography",
        description: "Tailwind typography plugin",
      },
    },
  },
  base: {
    title: "Base",
    links: {
      accordion: {
        icon: "system-uicons:flip-view",
        title: "BaseAccordion",
        href: "/tests/base/accordion",
        description: "Accordion component",
      },
      avatarGroup: {
        icon: "system-uicons:users",
        title: "BaseAvatarGroup",
        href: "/tests/base/avatar-group",
        description: "Avatar group component",
      },
      avatar: {
        icon: "system-uicons:user-male",
        title: "BaseAvatar",
        href: "/tests/base/avatar",
        description: "Avatar component",
      },
      breadcrumb: {
        icon: "system-uicons:chain",
        title: "BaseBreadcrumb",
        href: "/tests/base/breadcrumb",
        description: "Breadcrumb component",
      },
      buttonAction: {
        icon: "system-uicons:duplicate-alt",
        title: "BaseButtonAction",
        href: "/tests/base/button-action",
        description: "Button component",
      },
      buttonClose: {
        icon: "system-uicons:cross-circle",
        title: "BaseButtonClose",
        href: "/tests/base/button-close",
        description: "Button close component",
      },
      buttonIcon: {
        icon: "system-uicons:plus-circle",
        title: "BaseButtonIcon",
        href: "/tests/base/button-icon",
        description: "Button icon component",
      },
      buttons: {
        icon: "system-uicons:duplicate-alt",
        title: "BaseButton",
        href: "/tests/base/buttons",
        description: "Button component",
      },
      card: {
        icon: "system-uicons:panel-top",
        title: "BaseCard",
        href: "/tests/base/card",
        description: "Card component",
      },
      dropdown: {
        icon: "system-uicons:maximise",
        title: "BaseDropdown",
        href: "/tests/base/dropdown",
        description: "Dropdown component",
      },
      focusLoop: {
        icon: "system-uicons:marquee",
        title: "BaseFocusLoop",
        href: "/tests/base/focus-loop",
        description: "Focus Loop component",
      },
      iconBox: {
        icon: "system-uicons:nut",
        title: "BaseIconBox",
        href: "/tests/base/icon-box",
        description: "Icon box component",
      },
      kbd: {
        icon: "system-uicons:browser",
        title: "BaseKbd",
        href: "/tests/base/kbd",
        description: "Kbd component",
      },
      list: {
        icon: "system-uicons:list",
        title: "BaseList",
        href: "/tests/base/list",
        description: "List component",
      },
      message: {
        icon: "system-uicons:postcard",
        title: "BaseMessage",
        href: "/tests/base/message",
        description: "Massage component",
      },
      pagination: {
        icon: "system-uicons:circle-menu",
        title: "BasePagination",
        href: "/tests/base/pagination",
        description: "Pagination component",
      },
      placeholder: {
        title: "BasePlaceholderPage",
        icon: "system-uicons:component-add",
        href: "/tests/base/placeholder",
        description: "Placeholder component",
      },
      placeload: {
        title: "BasePlaceload",
        icon: "system-uicons:card-timeline",
        href: "/tests/base/placeload",
        description: "Placeload component",
      },
      progress: {
        icon: "system-uicons:reset-temporary",
        title: "BaseProgress",
        href: "/tests/base/progress",
        description: "Progress component",
      },
      snack: {
        icon: "system-uicons:gift",
        title: "BaseSnack",
        href: "/tests/base/snack",
        description: "Snack component",
      },
      tabSlider: {
        icon: "system-uicons:split-three",
        title: "BaseTabSlider",
        href: "/tests/base/tab-slider",
        description: "Tab slider component",
      },
      tabs: {
        icon: "system-uicons:browser-alt",
        title: "BaseTabs",
        href: "/tests/base/tabs",
        description: "Tabs component",
      },
      tag: {
        icon: "system-uicons:tags",
        title: "BaseTag",
        href: "/tests/base/tag",
        description: "Tag component",
      },
      themeToggle: {
        icon: "system-uicons:toggles",
        title: "BaseThemeToggle",
        href: "/tests/base/theme-toggle",
        description: "Theme toggle component",
      },
      tooltips: {
        icon: "system-uicons:component-add",
        title: "Nui Tooltip",
        href: "/tests/base/tooltips",
        description: "Tooltip component",
      },
      treeselect: {
        icon: "system-uicons:hierarchy",
        title: "BaseTreeSelect",
        href: "/tests/base/treeselect",
        description: "Tree select component",
      },
    },
  },
  form: {
    title: "Form",
    links: {
      autocomplete: {
        icon: "system-uicons:zoom-reset",
        title: "BaseAutocomplete",
        href: "/tests/form/autocomplete",
        description: "Autocomplete component",
      },
      checkboxAnimated: {
        title: "BaseCheckboxAnimated",
        icon: "system-uicons:check-circle-outside",
        href: "/tests/form/checkbox-animated",
        description: "Animated checkbox component",
      },
      checkbox: {
        icon: "system-uicons:checkbox-checked",
        title: "BaseCheckbox",
        href: "/tests/form/checkbox",
        description: "Checkbox component",
      },
      fullscreenDropfile: {
        icon: "system-uicons:cloud-upload",
        title: "BaseFullscreenDropfile",
        href: "/tests/form/fullscreen-dropfile",
        description: "Dropfile component",
      },
      inputFileHeadless: {
        icon: "system-uicons:cloud-upload",
        title: "BaseInputFileHeadless",
        href: "/tests/form/input-file-headless",
        description: "Headless input file component",
      },
      inputFile: {
        icon: "system-uicons:cloud-upload",
        title: "BaseInputFile",
        href: "/tests/form/input-file",
        description: "Input file component",
      },
      input: {
        icon: "system-uicons:calendar-move",
        title: "BaseInput",
        href: "/tests/form/input",
        description: "Input component",
      },
      radio: {
        icon: "system-uicons:record",
        title: "BaseRadio",
        href: "/tests/form/radio",
        description: "Radio component",
      },
      switch: {
        icon: "system-uicons:toggle",
        title: "BaseSwitch",
        href: "/tests/form/switch",
        description: "Select component",
      },
    },
  },
} as const;

export function getLinks() {
  return Object.values(sidebarlinks).map((v) => ({
    ...v,
    links: Object.values(v.links) as PageLink[],
  }));
}

type KeysOfUnion<T> = T extends T ? keyof T : never;

type SidebarLinks = typeof sidebarlinks;

export function getMeta<
  Section extends keyof SidebarLinks,
  Comp extends KeysOfUnion<SidebarLinks[Section]["links"]>,
>(section: Section, component: Comp): { title: string; description: string } {
  const { title, description } = ((sidebarlinks?.[section]?.links as any)?.[
    component
  ] as PageLink) ?? { title: undefined, description: undefined };

  return { title, description };
}
