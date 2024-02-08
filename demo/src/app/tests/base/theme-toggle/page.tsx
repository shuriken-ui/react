import React from "react";
import NuiPreviewContainer from "@/components/NuiPreviewContainer";
import NuiPreview from "@/components/NuiPreview";
import { Metadata } from "next";
import { getMeta } from "@/data/sidebar";

import { BaseThemeToggle, BaseThemeSwitch } from "@shuriken-ui/react";

const meta = getMeta("base", "themeToggle");

export const metadata: Metadata = {
  ...meta,
};

export default function ThemeTogglePage() {
  return (
    <NuiPreviewContainer title={meta.title}>
      <NuiPreview
        title="Variations"
        description="Theme toggle component variations"
      >
        <div className="flex items-center gap-10">
          <BaseThemeToggle />

          <BaseThemeSwitch />
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  );
}
