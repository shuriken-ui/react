export const tree = [
  {
    item: "Item 1",
    children: [
      {
        item: "Item 1.1",
      },
      {
        item: "Item 1.2",
      },
    ],
  },
  {
    item: "Item 2",
  },
  {
    item: "Item 3",
    open: true,
    children: [
      {
        item: "Item 3.0",
      },
      {
        item: "Item 3.1",
        open: true,
        children: [
          {
            item: "Item 3.1.1",
          },
          {
            item: "Item 3.1.2",
            open: true,
            children: [],
          },
          {
            item: "Item 3.1.3",
          },
        ],
      },
      {
        item: "Item 3.2",
      },
      {
        item: "Item 3.3",
        children: [],
      },
    ],
  },
  {
    item: "Item 4",
    // open: true,
    children: async () => {
      await new Promise((resolve) => setTimeout(resolve, 8000));

      return Array.from(
        {
          length: 100,
        },
        (x, i) => ({
          item: `Item 4.${i}`,
          children: async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000));

            return Array.from(
              {
                length: 10,
              },
              (x, j) => ({
                item: `Item 4.${i}.${j}`,
              })
            );
          },
        })
      );
    },
  },
];

export const fileTree = [
  {
    item: ".app",
    children: [
      {
        item: "index.ts",
      },
      {
        item: "shims.d.ts",
      },
    ],
  },
  {
    item: "src",
    children: [
      {
        item: "empty",
        children: [],
      },
      {
        item: "home",
        children: [
          {
            item: "index.ts",
          },
          {
            item: "styles.css",
          },
        ],
      },
      {
        item: "index.vue",
      },
    ],
  },
  {
    item: "app.config.ts",
  },
  {
    item: "tailwind.config.cjs",
  },
];

export const topicTree = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return [
    {
      item: {
        media: undefined,
        name: "General",
        text: undefined,
      },
      open: true,
      children: [
        {
          item: {
            icon: "ph:cards-duotone",
            name: "Company",
            text: "Everything about the company",
          },
        },
        {
          item: {
            icon: "ph:buildings-duotone",
            name: "Company",
            text: "Select filial",
          },
          children: [
            {
              item: {
                icon: "ph:buildings-duotone",
                name: "Sub-Company 1",
                text: "Everything about the company",
              },
            },
            {
              item: {
                icon: "ph:buildings-duotone",
                name: "Sub-Company 2",
                text: "Everything about the company",
              },
            },
            {
              item: {
                icon: "ph:buildings-duotone",
                name: "Sub-Company 3",
                text: "Everything about the company",
              },
            },
          ],
        },
        {
          item: {
            icon: "ph:suitcase-duotone",
            name: "Business",
            text: "Questions regarding business",
          },
          children: [],
        },
      ],
    },
    {
      item: {
        icon: "ph:suitcase-duotone",
        name: "Business",
        text: "Questions regarding business",
      },
    },
    {
      item: {
        media: undefined,
        name: "Topics",
        text: undefined,
      },
      children: [
        {
          item: {
            media: undefined,
            name: "Business",
            text: undefined,
          },
          children: [
            {
              item: {
                icon: "ph:rocket-duotone",
                name: "Startups",
                text: "Managing startups",
              },
            },
            {
              item: {
                icon: "ph:robot-duotone",
                name: "Products",
                text: "Product lifecycles",
              },
            },
          ],
        },
        {
          item: {
            media: undefined,
            name: "Web Content",
            text: undefined,
          },
          children: [
            {
              item: {
                icon: "ph:pencil-duotone",
                name: "Blogging",
                text: "Tips & tricks about blogging",
                children: [],
              },
            },
            {
              item: {
                icon: "ph:circles-four-duotone",
                name: "Social media",
                text: "Managing social media content",
              },
            },
          ],
        },
      ],
    },
  ];
};

export const teamTree = [
  {
    item: {
      media: undefined,
      name: "Top Management",
      text: undefined,
    },
    children: [
      {
        item: {
          media: "https://media.cssninja.io/shuriken/avatars/8.svg",
          name: "Harold Frazier",
          text: "Group Founder",
        },
        children: [],
      },
      {
        item: {
          media: "https://media.cssninja.io/shuriken/avatars/5.svg",
          name: "Clarissa Miller",
          text: "Executive Director",
        },
      },
    ],
  },
  {
    item: {
      media: undefined,
      name: "Teams",
      text: undefined,
    },
    open: true,
    children: [
      {
        item: {
          media: undefined,
          name: "Marketing",
          text: undefined,
        },
        open: true,
        children: [
          {
            item: {
              media: "https://media.cssninja.io/shuriken/avatars/3.svg",
              name: "Clark Smith",
              text: "Marketing Associate",
            },
          },
          {
            item: {
              media: "https://media.cssninja.io/shuriken/avatars/2.svg",
              name: "Olga familly",
              text: "Marketing Associate",
            },
            children: [
              {
                item: {
                  media: "https://media.cssninja.io/shuriken/avatars/2.svg",
                  name: "Clark Smith",
                  text: "Marketing Associate",
                },
                children: [],
              },
              {
                item: {
                  media: "https://media.cssninja.io/shuriken/avatars/2.svg",
                  name: "Olga familly",
                  text: "Marketing Associate",
                },
              },
            ],
          },
          {
            item: {
              media: "https://media.cssninja.io/shuriken/avatars/16.svg",
              name: "Hermann Mayer",
              text: "Marketing Officer",
            },
          },
        ],
      },
      {
        item: {
          media: undefined,
          name: "Sales",
          text: undefined,
        },
        children: [
          {
            item: {
              media: "https://media.cssninja.io/shuriken/avatars/9.svg",
              name: "Anna Lopez",
              text: "Sales Manager",
            },
            children: [],
          },
          {
            item: {
              media: "https://media.cssninja.io/shuriken/avatars/25.svg",
              name: "Melany Lawfield",
              text: "Sales Manager",
            },
          },
        ],
      },
    ],
  },
  {
    item: {
      media: "https://media.cssninja.io/shuriken/avatars/14.svg",
      name: "Jean LeBeauss",
      text: "Marketing Associate",
    },
  },
];
