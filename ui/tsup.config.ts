import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["src/**/*.ts", "src/**/*.tsx"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  sourcemap: true,
  target: "es2022",
  external: ["react", "react/jsx-runtime"],
  minify: !options.watch,
  banner: { js: '"use client";' },
  injectStyle: true,
}));
