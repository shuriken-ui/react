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
      iconBox: {
        icon: "system-uicons:nut",
        title: "BaseIconBox",
        href: "/tests/base/icon-box",
        description: "Icon box component",
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
      snack: {
        icon: "system-uicons:gift",
        title: "BaseSnack",
        href: "/tests/base/snack",
        description: "Snack component",
      },
      tag: {
        icon: "system-uicons:tags",
        title: "BaseTag",
        href: "/tests/base/tag",
        description: "Tag component",
      },
      tooltips: {
        icon: "system-uicons:component-add",
        title: "Nui Tooltip",
        href: "/tests/base/tooltips",
        description: "Tooltip component",
      },
    },
  },
  form: {
    title: "Form",
    links: {
      checkbox: {
        icon: "system-uicons:checkbox-checked",
        title: "BaseCheckbox",
        href: "/tests/form/checkbox",
        description: "Checkbox component",
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
