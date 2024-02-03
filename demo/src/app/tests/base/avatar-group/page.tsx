import { BaseAvatarGroup } from "@shuriken-ui/react";
import { Metadata } from "next";
import React from "react";
import NuiPreviewContainer from "@/components/NuiPreviewContainer";
import NuiPreview from "@/components/NuiPreview";

import { getMeta } from "@/data/sidebar";

const meta = getMeta("base", "avatarGroup");

export const metadata: Metadata = {
  ...meta,
};

const people = [
  {
    "data-nui-tooltip": "Clarissa Perez",
    src: "https://tairo.cssninja.io/img/avatars/19.svg",
  },
  {
    "data-nui-tooltip": "Aaaron Splatter",
    src: "https://tairo.cssninja.io/img/avatars/16.svg",
  },
  {
    "data-nui-tooltip": "Mike Miller",
    src: "https://tairo.cssninja.io/img/avatars/3.svg",
  },
  {
    "data-nui-tooltip": "Benedict Kessler",
    src: "https://tairo.cssninja.io/img/avatars/22.svg",
  },
  {
    "data-nui-tooltip": "Maya Rosselini",
    src: "https://tairo.cssninja.io/img/avatars/2.svg",
  },
];

export default function AvatarPage() {
  return (
    <NuiPreviewContainer title={meta.title}>
      <NuiPreview
        title="Size: xxs"
        description="Avatar group component xxs size"
      >
        <div className="flex flex-wrap items-end gap-4">
          <BaseAvatarGroup size="xxs" limit={4} avatars={people} />
        </div>
      </NuiPreview>

      <NuiPreview title="Size: xs" description="Avatar group component xs size">
        <div className="flex flex-wrap items-end gap-4">
          <BaseAvatarGroup size="xs" limit={4} avatars={people} />
        </div>
      </NuiPreview>

      <NuiPreview title="Size: sm" description="Avatar group component sm size">
        <div className="flex flex-wrap items-end gap-4">
          <BaseAvatarGroup size="sm" limit={4} avatars={people} />
        </div>
      </NuiPreview>

      <NuiPreview title="Size: md" description="Avatar group component md size">
        <div className="flex flex-wrap items-end gap-4">
          <BaseAvatarGroup size="md" limit={4} avatars={people} />
        </div>
      </NuiPreview>

      <NuiPreview title="Size: lg" description="Avatar group component lg size">
        <div className="flex flex-wrap items-end gap-4">
          <BaseAvatarGroup size="lg" limit={4} avatars={people} />
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  );
}
