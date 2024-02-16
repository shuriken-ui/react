import { BaseAvatar } from "@shuriken-ui/react";
import { Metadata } from "next";
import React from "react";

import { getMeta } from "@/data/sidebar";
import NuiPreviewContainer from "@/components/NuiPreviewContainer";
import NuiPreview from "@/components/NuiPreview";

const meta = getMeta("base", "avatar");

export const metadata: Metadata = {
  ...meta,
};

export default function AvatarPage() {
  return (
    <NuiPreviewContainer title={meta.title}>
      <NuiPreview
        title="Rounded: full"
        description="Avatar component full radius"
      >
        <div className="flex flex-wrap items-end gap-4">
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/20.svg"
            size="xxs"
            rounded="full"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/1.svg"
            size="xs"
            rounded="full"
          />
          <BaseAvatar src="https://tairo.cssninja.io/img/avatars/5.svg" />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/4.svg"
            size="md"
            rounded="full"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/3.svg"
            size="lg"
            rounded="full"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/8.svg"
            size="xl"
            rounded="full"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/16.svg"
            size="2xl"
            rounded="full"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/2.svg"
            size="3xl"
            rounded="full"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/10.svg"
            size="4xl"
            rounded="full"
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Rounded: lg" description="Avatar component lg radius">
        <div className="flex flex-wrap items-end gap-4">
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/20.svg"
            size="xxs"
            rounded="lg"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/1.svg"
            size="xs"
            rounded="lg"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/5.svg"
            rounded="lg"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/4.svg"
            size="md"
            rounded="lg"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/3.svg"
            size="lg"
            rounded="lg"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/8.svg"
            size="xl"
            rounded="lg"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/16.svg"
            size="2xl"
            rounded="lg"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/2.svg"
            size="3xl"
            rounded="lg"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/10.svg"
            size="4xl"
            rounded="lg"
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Rounded: md" description="Avatar component md radius">
        <div className="flex flex-wrap items-end gap-4">
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/20.svg"
            size="xxs"
            rounded="md"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/1.svg"
            size="xs"
            rounded="md"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/5.svg"
            rounded="md"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/4.svg"
            size="md"
            rounded="md"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/3.svg"
            size="lg"
            rounded="md"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/8.svg"
            size="xl"
            rounded="md"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/16.svg"
            size="2xl"
            rounded="md"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/2.svg"
            size="3xl"
            rounded="md"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/10.svg"
            size="4xl"
            rounded="md"
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Rounded: sm" description="Avatar component sm radius">
        <div className="flex flex-wrap items-end gap-4">
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/20.svg"
            size="xxs"
            rounded="sm"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/1.svg"
            size="xs"
            rounded="sm"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/5.svg"
            rounded="sm"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/4.svg"
            size="md"
            rounded="sm"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/3.svg"
            size="lg"
            rounded="sm"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/8.svg"
            size="xl"
            rounded="sm"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/16.svg"
            size="2xl"
            rounded="sm"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/2.svg"
            size="3xl"
            rounded="sm"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/10.svg"
            size="4xl"
            rounded="sm"
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Rounded: none"
        description="Avatar component none radius"
      >
        <div className="flex flex-wrap items-end gap-4">
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/20.svg"
            size="xxs"
            rounded="none"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/1.svg"
            size="xs"
            rounded="none"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/5.svg"
            rounded="none"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/4.svg"
            size="md"
            rounded="none"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/3.svg"
            size="lg"
            rounded="none"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/8.svg"
            size="xl"
            rounded="none"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/16.svg"
            size="2xl"
            rounded="none"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/2.svg"
            size="3xl"
            rounded="none"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/10.svg"
            size="4xl"
            rounded="none"
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Dot: rounded: full"
        description="Avatar component dot with full radius"
      >
        <div className="flex flex-wrap items-end gap-4">
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/20.svg"
            rounded="full"
            size="xxs"
            dot="success"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/1.svg"
            rounded="full"
            size="xs"
            dot="success"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/5.svg"
            rounded="full"
            dot="info"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/4.svg"
            rounded="full"
            size="md"
            dot="warning"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/3.svg"
            rounded="full"
            size="lg"
            dot="pink"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/8.svg"
            rounded="full"
            size="xl"
            dot="danger"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/16.svg"
            rounded="full"
            size="2xl"
            dot="yellow"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/2.svg"
            rounded="full"
            size="3xl"
            dot="info"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/10.svg"
            rounded="full"
            size="4xl"
            dot="success"
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Dot: rounded: none | sm | md | lg"
        description="Avatar component dot with other radiuses"
      >
        <div className="flex flex-wrap items-end gap-4">
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/20.svg"
            rounded="lg"
            size="xxs"
            dot="success"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/1.svg"
            rounded="lg"
            size="xs"
            dot="success"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/5.svg"
            rounded="lg"
            dot="info"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/4.svg"
            rounded="lg"
            size="md"
            dot="warning"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/3.svg"
            rounded="lg"
            size="lg"
            dot="pink"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/8.svg"
            rounded="lg"
            size="xl"
            dot="danger"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/16.svg"
            rounded="lg"
            size="2xl"
            dot="yellow"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/2.svg"
            rounded="lg"
            size="3xl"
            dot="info"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/10.svg"
            rounded="lg"
            size="4xl"
            dot="success"
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Badge: rounded: full"
        description="Avatar component badge with full radius"
      >
        <div className="flex flex-wrap items-end gap-4">
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/20.svg"
            rounded="full"
            size="xxs"
            badgeSrc="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/1.svg"
            rounded="full"
            size="xs"
            badgeSrc="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/5.svg"
            rounded="full"
            badgeSrc="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/4.svg"
            rounded="full"
            size="md"
            badgeSrc="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/3.svg"
            rounded="full"
            size="lg"
            badgeSrc="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
          />
          <BaseAvatar
            rounded="full"
            src="https://tairo.cssninja.io/img/avatars/8.svg"
            size="xl"
            badgeSrc="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
          />
          <BaseAvatar
            rounded="full"
            src="https://tairo.cssninja.io/img/avatars/16.svg"
            size="2xl"
            badgeSrc="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
          />
          <BaseAvatar
            rounded="full"
            src="https://tairo.cssninja.io/img/avatars/2.svg"
            size="3xl"
            badgeSrc="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
          />
          <BaseAvatar
            rounded="full"
            src="https://tairo.cssninja.io/img/avatars/10.svg"
            size="4xl"
            badgeSrc="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Badge: rounded: none | sm | md | lg"
        description="Avatar component badge with other radiuses"
      >
        <div className="flex flex-wrap items-end gap-4">
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/20.svg"
            rounded="lg"
            size="xxs"
            badgeSrc="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/1.svg"
            rounded="lg"
            size="xs"
            badgeSrc="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/5.svg"
            rounded="lg"
            badgeSrc="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/4.svg"
            rounded="lg"
            size="md"
            badgeSrc="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/3.svg"
            rounded="lg"
            size="lg"
            badgeSrc="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
          />
          <BaseAvatar
            rounded="lg"
            src="https://tairo.cssninja.io/img/avatars/8.svg"
            size="xl"
            badgeSrc="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
          />
          <BaseAvatar
            rounded="lg"
            src="https://tairo.cssninja.io/img/avatars/16.svg"
            size="2xl"
            badgeSrc="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
          />
          <BaseAvatar
            rounded="lg"
            src="https://tairo.cssninja.io/img/avatars/2.svg"
            size="3xl"
            badgeSrc="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
          />
          <BaseAvatar
            rounded="lg"
            src="https://tairo.cssninja.io/img/avatars/10.svg"
            size="4xl"
            badgeSrc="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Fake: Rounded: full"
        description="Avatar component fake full radius"
      >
        <div className="flex flex-wrap items-end gap-4">
          <BaseAvatar
            text="H"
            size="xxs"
            className="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
          ></BaseAvatar>
          <BaseAvatar
            text="H"
            size="xs"
            className="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
          ></BaseAvatar>
          <BaseAvatar
            text="H"
            size="sm"
            className="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
          />
          <BaseAvatar
            text="H"
            size="md"
            className="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
          />
          <BaseAvatar
            text="H"
            size="lg"
            className="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
          />
          <BaseAvatar
            text="H"
            size="xl"
            className="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
          />
          <BaseAvatar
            text="H"
            size="2xl"
            className="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
          />
          <BaseAvatar
            text="H"
            size="3xl"
            className="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
          />
          <BaseAvatar
            text="H"
            size="4xl"
            className="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Fake: Rounded: none | sm | md | lg"
        description="Avatar component fake other radiuses"
      >
        <div className="flex flex-wrap items-end gap-4">
          <BaseAvatar
            text="H"
            size="xxs"
            rounded="lg"
            className="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
          ></BaseAvatar>
          <BaseAvatar
            text="H"
            size="xs"
            rounded="lg"
            className="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
          ></BaseAvatar>
          <BaseAvatar
            text="H"
            size="sm"
            rounded="lg"
            className="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
          />
          <BaseAvatar
            text="H"
            size="md"
            rounded="lg"
            className="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
          />
          <BaseAvatar
            text="H"
            size="lg"
            rounded="lg"
            className="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
          />
          <BaseAvatar
            text="H"
            size="xl"
            rounded="lg"
            className="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
          />
          <BaseAvatar
            text="H"
            size="2xl"
            rounded="lg"
            className="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
          />
          <BaseAvatar
            text="H"
            size="3xl"
            rounded="lg"
            className="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
          />
          <BaseAvatar
            text="H"
            size="4xl"
            rounded="lg"
            className="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Fake: Badge: full"
        description="Avatar component fake badge full radius"
      >
        <div className="flex flex-wrap items-end gap-4">
          <BaseAvatar
            text="H"
            size="xxs"
            badgeSrc="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
            className="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
          ></BaseAvatar>
          <BaseAvatar
            text="H"
            size="xs"
            badgeSrc="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
            className="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
          ></BaseAvatar>
          <BaseAvatar
            text="H"
            size="sm"
            badgeSrc="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
            className="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
          />
          <BaseAvatar
            text="H"
            size="md"
            badgeSrc="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
            className="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
          />
          <BaseAvatar
            text="H"
            size="lg"
            badgeSrc="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
            className="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
          />
          <BaseAvatar
            text="H"
            size="xl"
            badgeSrc="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
            className="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
          />
          <BaseAvatar
            text="H"
            size="2xl"
            badgeSrc="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
            className="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
          />
          <BaseAvatar
            text="H"
            size="3xl"
            badgeSrc="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
            className="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
          />
          <BaseAvatar
            text="H"
            size="4xl"
            badgeSrc="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
            className="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Fake: Badge: none | sm | md | lg"
        description="Avatar component fake badge other radiuses"
      >
        <div className="flex flex-wrap items-end gap-4">
          <BaseAvatar
            text="H"
            size="xxs"
            rounded="lg"
            badgeSrc="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
            className="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
          ></BaseAvatar>
          <BaseAvatar
            text="H"
            size="xs"
            rounded="lg"
            badgeSrc="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
            className="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
          ></BaseAvatar>
          <BaseAvatar
            text="H"
            size="sm"
            rounded="lg"
            badgeSrc="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
            className="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
          />
          <BaseAvatar
            text="H"
            size="md"
            rounded="lg"
            badgeSrc="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
            className="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
          />
          <BaseAvatar
            text="H"
            size="lg"
            rounded="lg"
            badgeSrc="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
            className="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
          />
          <BaseAvatar
            text="H"
            size="xl"
            rounded="lg"
            badgeSrc="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
            className="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
          />
          <BaseAvatar
            text="H"
            size="2xl"
            badgeSrc="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
            className="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
          />
          <BaseAvatar
            text="H"
            size="3xl"
            rounded="lg"
            badgeSrc="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
            className="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
          />
          <BaseAvatar
            text="H"
            size="4xl"
            rounded="lg"
            badgeSrc="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
            className="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Mask: hex" description="Avatar component hex mask">
        <div className="flex flex-wrap items-end gap-4">
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/20.svg"
            size="xxs"
            rounded="none"
            mask="hex"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/1.svg"
            size="xs"
            rounded="none"
            mask="hex"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/5.svg"
            rounded="none"
            mask="hex"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/4.svg"
            size="md"
            rounded="none"
            mask="hex"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/3.svg"
            size="lg"
            rounded="none"
            mask="hex"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/8.svg"
            size="xl"
            rounded="none"
            mask="hex"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/16.svg"
            size="2xl"
            rounded="none"
            mask="hex"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/2.svg"
            size="3xl"
            rounded="none"
            mask="hex"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/10.svg"
            size="4xl"
            rounded="none"
            mask="hex"
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Mask: hexed" description="Avatar component hexed mask">
        <div className="flex flex-wrap items-end gap-4">
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/20.svg"
            size="xxs"
            rounded="none"
            mask="hexed"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/1.svg"
            size="xs"
            rounded="none"
            mask="hexed"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/5.svg"
            rounded="none"
            mask="hexed"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/4.svg"
            size="md"
            rounded="none"
            mask="hexed"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/3.svg"
            size="lg"
            rounded="none"
            mask="hexed"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/8.svg"
            size="xl"
            rounded="none"
            mask="hexed"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/16.svg"
            size="2xl"
            rounded="none"
            mask="hexed"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/2.svg"
            size="3xl"
            rounded="none"
            mask="hexed"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/10.svg"
            size="4xl"
            rounded="none"
            mask="hexed"
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Mask: blob" description="Avatar component blob mask">
        <div className="flex flex-wrap items-end gap-4">
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/20.svg"
            size="xxs"
            rounded="none"
            mask="blob"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/1.svg"
            size="xs"
            rounded="none"
            mask="blob"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/5.svg"
            rounded="none"
            mask="blob"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/4.svg"
            size="md"
            rounded="none"
            mask="blob"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/3.svg"
            size="lg"
            rounded="none"
            mask="blob"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/8.svg"
            size="xl"
            rounded="none"
            mask="blob"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/16.svg"
            size="2xl"
            rounded="none"
            mask="blob"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/2.svg"
            size="3xl"
            rounded="none"
            mask="blob"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/10.svg"
            size="4xl"
            rounded="none"
            mask="blob"
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Mask: deca" description="Avatar component deca mask">
        <div className="flex flex-wrap items-end gap-4">
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/20.svg"
            size="xxs"
            rounded="none"
            mask="deca"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/1.svg"
            size="xs"
            rounded="none"
            mask="deca"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/5.svg"
            rounded="none"
            mask="deca"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/4.svg"
            size="md"
            rounded="none"
            mask="deca"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/3.svg"
            size="lg"
            rounded="none"
            mask="deca"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/8.svg"
            size="xl"
            rounded="none"
            mask="deca"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/16.svg"
            size="2xl"
            rounded="none"
            mask="deca"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/2.svg"
            size="3xl"
            rounded="none"
            mask="deca"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/10.svg"
            size="4xl"
            rounded="none"
            mask="deca"
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Mask: diamond"
        description="Avatar component diamond mask"
      >
        <div className="flex flex-wrap items-end gap-4">
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/20.svg"
            size="xxs"
            rounded="none"
            mask="diamond"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/1.svg"
            size="xs"
            rounded="none"
            mask="diamond"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/5.svg"
            rounded="none"
            mask="diamond"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/4.svg"
            size="md"
            rounded="none"
            mask="diamond"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/3.svg"
            size="lg"
            rounded="none"
            mask="diamond"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/8.svg"
            size="xl"
            rounded="none"
            mask="diamond"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/16.svg"
            size="2xl"
            rounded="none"
            mask="diamond"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/2.svg"
            size="3xl"
            rounded="none"
            mask="diamond"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/10.svg"
            size="4xl"
            rounded="none"
            mask="diamond"
          />
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  );
}
