import { Metadata } from "next";
import React from "react";
import { getMeta } from "@/data/sidebar";
import NuiPreviewContainer from "@/components/NuiPreviewContainer";
import NuiPreview from "@/components/NuiPreview";
import { BaseFocusLoop, BaseButton } from "@shuriken-ui/react";

const meta = getMeta("base", "focusLoop");

export const metadata: Metadata = {
  ...meta,
};

export default function BaseFocusLoopPage() {
  return (
    <NuiPreviewContainer title={meta.title}>
      <NuiPreview title="Main demo" description="Focus Loop component demo">
        <BaseFocusLoop className="flex flex-wrap items-end gap-2">
          <BaseButton>Button</BaseButton>
          <BaseButton color="primary">Button</BaseButton>
          <BaseButton color="success">Button</BaseButton>
          <BaseButton color="info">Button</BaseButton>
          <BaseButton color="warning">Button</BaseButton>
          <BaseButton color="danger">Button</BaseButton>
          <BaseButton color="muted">Button</BaseButton>
        </BaseFocusLoop>
      </NuiPreview>
    </NuiPreviewContainer>
  );
}
