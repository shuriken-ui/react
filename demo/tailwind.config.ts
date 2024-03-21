import { withShurikenUI } from "@shuriken-ui/tailwind";

export default withShurikenUI({
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@shuriken-ui/react/dist/**/*.mjs",
  ],
  theme: {
    extend: {
      shurikenUi: {},
    },
  },
});
