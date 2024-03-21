import { defineConfig } from "tsup";
// import { spawnSync } from "node:child_process";

export default defineConfig((options) => ({
  entry: ["src/**/*.ts", "src/**/*.tsx"],
  format: ["cjs", "esm"],
  dts: true,

  // dts: false,
  // async onSuccess() {
  //   console.log("DTS: build...");
  //   const t = spawnSync("tsc", ["--emitDeclarationOnly", "--declaration"]);
  //   console.log("DTS:");
  //   console.log(t.output.toString());
  //   console.log("DTS: build...done");
  // },

  clean: true,
  sourcemap: !!options.watch,
  target: "es2022",
  external: ["react", "react/jsx-runtime"],
  minify: !options.watch,
  banner: { js: '"use client";' },
  injectStyle: true,
}));
