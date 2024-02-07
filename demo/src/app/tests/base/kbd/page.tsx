import React from "react";
import { getMeta } from "@/data/sidebar";
import { Metadata } from "next";
import NuiPreviewContainer from "@/components/NuiPreviewContainer";
import NuiPreview from "@/components/NuiPreview";
import { BaseKbd } from "@shuriken-ui/react";

const meta = getMeta("base", "kbd");

export const metadata: Metadata = {
  ...meta,
};

export default function KbdPage() {
  return (
    <NuiPreviewContainer title={meta.title}>
      <NuiPreview
        title="Rounded: none: icon"
        description="Kbd component radius with icon"
      >
        <div className="flex flex-wrap items-end gap-3">
          <BaseKbd
            size="xs"
            color="default"
            rounded="none"
            icon="ri:command-line"
          />
          <BaseKbd
            size="sm"
            color="default"
            rounded="none"
            icon="ri:command-line"
          />
          <BaseKbd
            size="md"
            color="default"
            rounded="none"
            icon="ri:command-line"
          />
          <BaseKbd
            size="lg"
            color="default"
            rounded="none"
            icon="ri:command-line"
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Rounded: sm: icon"
        description="Kbd component radius with icon"
      >
        <div className="flex flex-wrap items-end gap-3">
          <BaseKbd
            size="xs"
            color="default"
            rounded="sm"
            icon="ri:command-line"
          />
          <BaseKbd
            size="sm"
            color="default"
            rounded="sm"
            icon="ri:command-line"
          />
          <BaseKbd
            size="md"
            color="default"
            rounded="sm"
            icon="ri:command-line"
          />
          <BaseKbd
            size="lg"
            color="default"
            rounded="sm"
            icon="ri:command-line"
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Rounded: md: icon"
        description="Kbd component radius with icon"
      >
        <div className="flex flex-wrap items-end gap-3">
          <BaseKbd
            size="xs"
            color="default"
            rounded="md"
            icon="ri:command-line"
          />
          <BaseKbd
            size="sm"
            color="default"
            rounded="md"
            icon="ri:command-line"
          />
          <BaseKbd
            size="md"
            color="default"
            rounded="md"
            icon="ri:command-line"
          />
          <BaseKbd
            size="lg"
            color="default"
            rounded="md"
            icon="ri:command-line"
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Rounded: lg: icon"
        description="Kbd component radius with icon"
      >
        <div className="flex flex-wrap items-end gap-3">
          <BaseKbd
            size="xs"
            color="default"
            rounded="lg"
            icon="ri:command-line"
          />
          <BaseKbd
            size="sm"
            color="default"
            rounded="lg"
            icon="ri:command-line"
          />
          <BaseKbd
            size="md"
            color="default"
            rounded="lg"
            icon="ri:command-line"
          />
          <BaseKbd
            size="lg"
            color="default"
            rounded="lg"
            icon="ri:command-line"
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Rounded: full: icon"
        description="Kbd component radius with icon"
      >
        <div className="flex flex-wrap items-end gap-3">
          <BaseKbd
            size="xs"
            color="default"
            rounded="full"
            icon="ri:command-line"
          />
          <BaseKbd
            size="sm"
            color="default"
            rounded="full"
            icon="ri:command-line"
          />
          <BaseKbd
            size="md"
            color="default"
            rounded="full"
            icon="ri:command-line"
          />
          <BaseKbd
            size="lg"
            color="default"
            rounded="full"
            icon="ri:command-line"
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Slot: default"
        description="Kbd component default slot"
      >
        <div className="flex flex-wrap items-end gap-3">
          <BaseKbd size="xs" color="default" rounded="md">
            ctrl
          </BaseKbd>
          <BaseKbd size="sm" color="default" rounded="md">
            ctrl
          </BaseKbd>
          <BaseKbd size="md" color="default" rounded="md">
            ctrl
          </BaseKbd>
          <BaseKbd size="lg" color="default" rounded="md">
            ctrl
          </BaseKbd>
        </div>
      </NuiPreview>

      <NuiPreview title="Color: muted" description="Kbd component muted color">
        <div className="flex flex-wrap items-end gap-3">
          <BaseKbd
            size="xs"
            color="muted"
            rounded="md"
            icon="ri:command-line"
          />
          <BaseKbd
            size="sm"
            color="muted"
            rounded="md"
            icon="ri:command-line"
          />
          <BaseKbd
            size="md"
            color="muted"
            rounded="md"
            icon="ri:command-line"
          />
          <BaseKbd
            size="lg"
            color="muted"
            rounded="md"
            icon="ri:command-line"
          />
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  );
}
