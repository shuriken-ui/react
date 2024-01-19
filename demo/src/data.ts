export type PageLink = { title: string; description?: string; href: string };

export type LinkGroup = { title: string; links: PageLink[] };

export const routes: LinkGroup[] = [
  {
    title: "Authority",
    links: [
      {
        title: "Colors",
        href: "/tests/authority/colors",
        description: "Basic colors",
      },
      {
        title: "Typography",
        href: "/tests/authority/typography",
        description: "Tailwind typography plugin",
      },
    ],
  },
  {
    title: "Base",
    links: [
      {
        title: "Breadcrumb",
        href: "/tests/base/breadcrumb",
        description: "Breadcrumb component",
      },
      {
        title: "Button Action",
        href: "/tests/base/button-action",
        description: "Button variations",
      },
      {
        title: "Button Close",
        href: "/tests/base/button-close",
        description: "Button Close variations",
      },
      {
        title: "Button Icon",
        href: "/tests/base/button-icon",
        description: "Button Icon variations",
      },
      {
        title: "Buttons",
        href: "/tests/base/buttons",
        description: "Button variations",
      },
      {
        title: "Card",
        href: "/tests/base/card",
        description: "SVG icons",
      },
      {
        title: "Dropdown",
        href: "/tests/base/dropdown",
        description: "Dropdown examples",
      },
      {
        title: "Icon Box",
        href: "/tests/base/icon-box",
        description: "Box wrappers for icons",
      },
      {
        title: "Mark",
        href: "/tests/base/mark",
        description: "Highlight text with a background color.",
      },
      {
        title: "Message",
        href: "/tests/base/message",
        description: "Base message component",
      },
      {
        title: "Pagination",
        href: "/tests/base/pagination",
        description: "SVG icons",
      },
      {
        title: "Shapes",
        href: "/tests/base/shapes",
        description: "Check out different shapes",
      },
      {
        title: "Skeleton",
        href: "/tests/base/skeleton",
        description: "SVG icons",
      },
      {
        title: "Snack",
        href: "/tests/base/snack",
        description: "Snack details",
      },
      {
        title: "Tag",
        href: "/tests/base/tag",
        description: "Tag variations",
      },
      {
        title: "Tooltips",
        href: "/tests/base/tooltips",
        description: "Add a tooltip to any element.",
      },
    ],
  },
  {
    title: "Form",
    links: [
      {
        title: "Checkbox",
        href: "/tests/form/checkbox",
        description: "Basic custom checkbox and radio",
      },
      {
        title: "Input",
        href: "/tests/form/input",
        description:
          "Check how different input sizes look like compared to each other.",
      },
      {
        title: "Progress",
        href: "/tests/form/progress",
        description: "Progress component",
      },
      {
        title: "Radio",
        href: "/tests/form/radio",
        description: "SVG icons",
      },
      {
        title: "Switch",
        href: "/tests/form/switch",
        description: "SVG icons",
      },
    ],
  },
  {
    title: "Images",
    links: [
      {
        title: "Avatar",
        href: "/tests/images/avatar",
        description: "SVG icon",
      },
      {
        title: "Icons",
        href: "/tests/images/icons",
        description: "SVG icon",
      },
      {
        title: "Mask",
        href: "/tests/images/mask",
        description: "Apply mask to different elements",
      },
    ],
  },
];
