import {
  BaseHeading,
  IconCheck,
  IconCheckCircle,
  IconChevronDown,
  IconClose,
  IconIndeterminate,
  IconMinus,
  IconMoon,
  IconPlus,
  IconSun,
} from "@shuriken-ui/react";
import { Metadata } from "next";
import React from "react";

import { getMeta } from "@/data/sidebar";
import NuiPreview from "@/components/NuiPreview";
import NuiPreviewContainer from "@/components/NuiPreviewContainer";

const meta = getMeta("authority", "icons");

export const metadata: Metadata = {
  ...meta,
};

export default function IconPage() {
  return (
    <NuiPreviewContainer title={meta.title}>
      <NuiPreview title="Nui Icons" description="Svg icons used in Nui">
        <div className="flex flex-wrap items-end gap-4">
          <IconCheck className="w-8 h-8" />
          <IconIndeterminate className="w-8 h-8" />
          <IconCheckCircle className="w-8 h-8" />
          <IconChevronDown className="w-8 h-8" />
          <IconClose className="w-8 h-8" />
          <IconMoon className="w-8 h-8" />
          <IconPlus className="w-8 h-8" />
          <IconMinus className="w-8 h-8" />
          <IconSun className="w-8 h-8" />
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  );
}
