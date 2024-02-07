import { Metadata } from "next";
import React from "react";
import { getMeta } from "@/data/sidebar";
import NuiPreviewContainer from "@/components/NuiPreviewContainer";
import NuiPreview from "@/components/NuiPreview";
import { BaseList, BaseListItem, BaseAvatar } from "@shuriken-ui/react";
import Iconify from "@/components/Iconify";

const meta = getMeta("base", "list");

export const metadata: Metadata = {
  ...meta,
};

export default function BaseListPage() {
  return (
    <NuiPreviewContainer title={meta.title}>
      <NuiPreview title="Unordered" description="List component unordered">
        <BaseList className="ps-4">
          <li>Finish project UX</li>

          <li>Meet with Andy at 3:00pm</li>

          <li>Get groceries for Anna</li>

          <li>Pay water bill</li>
        </BaseList>
      </NuiPreview>

      <NuiPreview title="Ordered" description="List component ordered">
        <BaseList ordered className="ps-4">
          <li>Finish project UX</li>

          <li>Meet with Andy at 3:00pm</li>

          <li>Get groceries for Anna</li>

          <li>Pay water bill</li>
        </BaseList>
      </NuiPreview>

      <NuiPreview title="Subtitle" description="List component subtitle">
        <BaseList>
          <BaseListItem
            title="Finish project UX"
            subtitle="Close resubing pending tasks"
          />
          <BaseListItem
            title="Meet with Andy at 3:00pm"
            subtitle="Meeting about next project steps"
          />
          <BaseListItem
            title="Get groceries for Anna"
            subtitle="In preparation of next Friday's party"
          />
          <BaseListItem
            title="Pay water bill"
            subtitle="Bill must be paid before next Tuesday"
          />
        </BaseList>
      </NuiPreview>

      <NuiPreview title="Icon" description="List component icon">
        <BaseList>
          <BaseListItem
            title="Finish project UX"
            subtitle="Close resubing pending tasks"
          >
            <Iconify
              icon="ph:check-circle-duotone"
              className="text-info-500 h-6 w-6"
            />
          </BaseListItem>
          <BaseListItem
            title="Meet with Andy at 3:00pm"
            subtitle="Meeting about next project steps"
          >
            <Iconify
              icon="ph:timer-duotone"
              className="text-success-500 h-6 w-6"
            />
          </BaseListItem>
          <BaseListItem
            title="Get groceries for Anna"
            subtitle="In preparation of next Friday's party"
          >
            <Iconify
              icon="ph:confetti-duotone"
              className="h-6 w-6 text-yellow-400"
            />
          </BaseListItem>
          <BaseListItem
            title="Pay water bill"
            subtitle="Bill must be paid before next Tuesday"
          >
            <Iconify
              icon="ph:receipt-duotone"
              className="text-danger-500 h-6 w-6"
            />
          </BaseListItem>
        </BaseList>
      </NuiPreview>

      <NuiPreview title="Avatar" description="List component avatar">
        <BaseList>
          <BaseListItem
            title="Finish project UX"
            subtitle="Close resubing pending tasks"
          >
            <BaseAvatar src="https://tairo.cssninja.io/img/avatars/10.svg" />
          </BaseListItem>
          <BaseListItem
            title="Meet with Andy at 3:00pm"
            subtitle="Meeting about next project steps"
          >
            <BaseAvatar src="https://tairo.cssninja.io/img/avatars/25.svg" />
          </BaseListItem>
          <BaseListItem
            title="Get groceries for Anna"
            subtitle="In preparation of next Friday's party"
          >
            <BaseAvatar src="https://tairo.cssninja.io/img/avatars/15.svg" />
          </BaseListItem>
          <BaseListItem
            title="Pay water bill"
            subtitle="Bill must be paid before next Tuesday"
          >
            <BaseAvatar src="https://tairo.cssninja.io/img/avatars/4.svg" />
          </BaseListItem>
        </BaseList>
      </NuiPreview>
    </NuiPreviewContainer>
  );
}
