"use client";

import { BaseSelect, useColorMode, ColorMode } from "@shuriken-ui/react";
import React from "react";

const ThemeSwitcher = () => {
  const color = useColorMode();

  return (
    <BaseSelect
      onChange={(newColor) => {
        color.setColorMode(newColor as ColorMode);
      }}
      value={color.colorMode.preference}
      size="sm"
    >
      <option value="system">system</option>
      <option value="light">light</option>
      <option value="dark">dark</option>
    </BaseSelect>
  );
};

export default ThemeSwitcher;
