export type PageLink = {
  icon?: string;
  title: string;
  description: string;
  href: string;
};

export type LinkGroup = { title: string; links: PageLink[] };

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
      breadcrumb: {
        icon: "system-uicons:chain",
        title: "Breadcrumb",
        href: "/tests/base/breadcrumb",
        description: "Breadcrumb component",
      },
      buttonAction: {
        icon: "system-uicons:duplicate-alt",
        title: "Button Action",
        href: "/tests/base/button-action",
        description: "Button variations",
      },
      buttonClose: {
        icon: "system-uicons:cross-circle",
        title: "Button Close",
        href: "/tests/base/button-close",
        description: "Button Close variations",
      },
      buttonIcon: {
        icon: "system-uicons:plus-circle",
        title: "Button Icon",
        href: "/tests/base/button-icon",
        description: "Button Icon variations",
      },
      buttons: {
        icon: "system-uicons:duplicate-alt",
        title: "Buttons",
        href: "/tests/base/buttons",
        description: "Button variations",
      },
      card: {
        icon: "system-uicons:panel-top",
        title: "Card",
        href: "/tests/base/card",
        description: "SVG icons",
      },
      dropdown: {
        icon: "system-uicons:maximise",
        title: "Dropdown",
        href: "/tests/base/dropdown",
        description: "Dropdown examples",
      },
      iconBox: {
        icon: "system-uicons:nut",
        title: "Icon Box",
        href: "/tests/base/icon-box",
        description: "Box wrappers for icons",
      },
      mark: {
        title: "Mark",
        href: "/tests/base/mark",
        description: "Highlight text with a background color.",
      },
      message: {
        icon: "system-uicons:postcard",
        title: "Message",
        href: "/tests/base/message",
        description: "Base message component",
      },
      pagination: {
        icon: "system-uicons:circle-menu",
        title: "Pagination",
        href: "/tests/base/pagination",
        description: "SVG icons",
      },
      shapes: {
        title: "Shapes",
        href: "/tests/base/shapes",
        description: "Check out different shapes",
      },
      skeleton: {
        title: "Skeleton",
        href: "/tests/base/skeleton",
        description: "SVG icons",
      },
      snack: {
        icon: "system-uicons:gift",
        title: "Snack",
        href: "/tests/base/snack",
        description: "Snack details",
      },
      tag: {
        icon: "system-uicons:tags",
        title: "Tag",
        href: "/tests/base/tag",
        description: "Tag variations",
      },
      tooltips: {
        icon: "system-uicons:component-add",
        title: "Tooltips",
        href: "/tests/base/tooltips",
        description: "Add a tooltip to any element.",
      },
    },
  },
  form: {
    title: "Form",
    links: {
      checkbox: {
        icon: "system-uicons:checkbox-checked",
        title: "Checkbox",
        href: "/tests/form/checkbox",
        description: "Basic custom checkbox and radio",
      },
      input: {
        icon: "system-uicons:calendar-move",
        title: "Input",
        href: "/tests/form/input",
        description:
          "Check how different input sizes look like compared to each other.",
      },
      progress: {
        title: "Progress",
        href: "/tests/form/progress",
        description: "Progress component",
      },
      radio: {
        icon: "system-uicons:record",
        title: "Radio",
        href: "/tests/form/radio",
        description: "SVG icons",
      },
      switch: {
        icon: "system-uicons:toggle",
        title: "Switch",
        href: "/tests/form/switch",
        description: "SVG icons",
      },
    },
  },
  images: {
    title: "Images",
    links: {
      avatar: {
        title: "Avatar",
        href: "/tests/images/avatar",
        description: "SVG icon",
      },
      icons: {
        title: "Icons",
        href: "/tests/images/icons",
        description: "SVG icon",
      },
      mask: {
        title: "Mask",
        href: "/tests/images/mask",
        description: "Apply mask to different elements",
      },
    },
  },
} as const;

