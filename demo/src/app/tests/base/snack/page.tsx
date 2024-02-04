import { BaseHeading, BaseSnack } from "@shuriken-ui/react";
import { Metadata } from "next";
import React from "react";
import NuiPreview from "@/components/NuiPreview";
import NuiPreviewContainer from "@/components/NuiPreviewContainer";
import { getMeta } from "@/data/sidebar";

const meta = getMeta("base", "snack");

export const metadata: Metadata = {
  ...meta,
};

function SnackPage() {
  return (
    <NuiPreviewContainer title={meta.title}>
      <NuiPreview title="Size" description="Snack component sizes">
        <div className="flex flex-wrap items-end gap-4">
          <BaseSnack label="React" color="default" size="xs" />
          <BaseSnack label="Angular" color="default" size="sm" />
          <BaseSnack label="Vue" color="default" size="md" />
        </div>
      </NuiPreview>

      <NuiPreview title="Color: default" description="Snack component default">
        <div className="flex flex-wrap items-end gap-4">
          <BaseSnack label="React" color="default" />
          <BaseSnack label="Angular" color="default" />
          <BaseSnack label="Vue" color="default" />
          <BaseSnack label="Html" color="default" />
          <BaseSnack label="Python" color="default" />
        </div>
      </NuiPreview>

      <NuiPreview title="Color: muted" description="Snack component muted">
        <div className="flex flex-wrap items-end gap-4">
          <BaseSnack label="React" color="muted" />
          <BaseSnack label="Angular" color="muted" />
          <BaseSnack label="Vue" color="muted" />
          <BaseSnack label="Html" color="muted" />
          <BaseSnack label="Python" color="muted" />
        </div>
      </NuiPreview>

      <NuiPreview title="Icon: default" description="Snack component icons">
        <div className="flex flex-wrap items-end gap-4">
          <BaseSnack
            label="React"
            color="default"
            size="xs"
            icon="logos:react"
          />
          <BaseSnack
            label="Angular"
            color="default"
            size="sm"
            icon="logos:angular-icon"
          />
          <BaseSnack label="Vue" color="default" size="md" icon="logos:vue" />
        </div>
      </NuiPreview>

      <NuiPreview title="Icon: muted" description="Snack component icons">
        <div className="flex flex-wrap items-end gap-4">
          <BaseSnack label="React" color="muted" size="xs" icon="logos:react" />
          <BaseSnack
            label="Angular"
            color="muted"
            size="sm"
            icon="logos:angular-icon"
          />
          <BaseSnack label="Vue" color="muted" size="md" icon="logos:vue" />
        </div>
      </NuiPreview>

      <NuiPreview title="Image: default" description="Snack component images">
        <div className="flex flex-wrap items-end gap-4">
          <BaseSnack
            label="Mike"
            color="default"
            size="xs"
            image="https://tairo.cssninja.io/img/avatars/3.svg"
          />
          <BaseSnack
            label="Maya"
            color="default"
            size="sm"
            image="https://tairo.cssninja.io/img/avatars/2.svg"
          />
          <BaseSnack
            label="John"
            color="default"
            size="md"
            image="https://tairo.cssninja.io/img/avatars/11.svg"
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Image: muted" description="Snack component images">
        <div className="flex flex-wrap items-end gap-4">
          <BaseSnack
            label="Mike"
            color="muted"
            size="xs"
            image="https://tairo.cssninja.io/img/avatars/3.svg"
          />
          <BaseSnack
            label="Maya"
            color="muted"
            size="sm"
            image="https://tairo.cssninja.io/img/avatars/2.svg"
          />
          <BaseSnack
            label="John"
            color="muted"
            size="md"
            image="https://tairo.cssninja.io/img/avatars/11.svg"
          />
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  );
}

export default SnackPage;
