import { Metadata } from "next";
import React from "react";
import NuiPreviewContainer from "@/components/NuiPreviewContainer";
import NuiPreview from "@/components/NuiPreview";
import { BaseTag } from "@shuriken-ui/react";
import { getMeta } from "@/data/sidebar";

const meta = getMeta("base", "tag");

export const metadata: Metadata = {
  ...meta,
};
export default function TooltipsPage() {
  return (
    <NuiPreviewContainer title="Nui Tooltip">
      <NuiPreview title="Position" description="Tooltip component positions">
        <div className="flex flex-wrap gap-3">
          <BaseTag
            rounded="full"
            data-nui-tooltip="Top tooltip&#xa; the second line&#xa; the third line"
          >
            Hover/Focus Me
          </BaseTag>
          <BaseTag
            rounded="full"
            data-nui-tooltip-position="down"
            data-nui-tooltip="Bottom tooltip"
          >
            Hover/Focus Me
          </BaseTag>
          <BaseTag
            rounded="full"
            data-nui-tooltip-position="start"
            data-nui-tooltip="Start tooltip"
          >
            Hover/Focus Me
          </BaseTag>
          <BaseTag
            rounded="full"
            data-nui-tooltip-position="end"
            data-nui-tooltip="End tooltip"
          >
            Hover/Focus Me
          </BaseTag>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  );
}
