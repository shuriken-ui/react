import React from "react";
import { Metadata } from "next";
import NuiPreviewContainer from "@/components/NuiPreviewContainer";
import NuiPreview from "@/components/NuiPreview";
import Iconify from "@/components/Iconify";
import { BaseIconBox } from "@shuriken-ui/react";
import { getMeta } from "@/data/sidebar";

const meta = getMeta("base", "iconBox");

export const metadata: Metadata = {
  ...meta,
};
function IconBoxPage() {
  return (
    <NuiPreviewContainer title={meta.title}>
      <NuiPreview
        title="Rounded: full"
        description="Icon box component full radiuses"
      >
        <div className="flex flex-wrap items-end gap-2">
          <BaseIconBox
            size="xs"
            rounded="full"
            className="bg-muted-200 text-muted-500 dark:bg-muted-800"
          >
            <Iconify icon="ph:nut-duotone" className="h-3 w-3" />
          </BaseIconBox>
          <BaseIconBox
            size="sm"
            rounded="full"
            className="bg-muted-200 text-muted-500 dark:bg-muted-800"
          >
            <Iconify icon="ph:nut-duotone" className="h-4 w-4" />
          </BaseIconBox>
          <BaseIconBox
            size="md"
            rounded="full"
            className="bg-muted-200 text-muted-500 dark:bg-muted-800"
          >
            <Iconify icon="ph:nut-duotone" className="h-5 w-5" />
          </BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="full"
            className="bg-muted-200 text-muted-500 dark:bg-muted-800"
          >
            <Iconify icon="ph:nut-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox
            size="xl"
            rounded="full"
            className="bg-muted-200 text-muted-500 dark:bg-muted-800"
          >
            <Iconify icon="ph:nut-duotone" className="h-7 w-7" />
          </BaseIconBox>
          <BaseIconBox
            size="2xl"
            rounded="full"
            className="bg-muted-200 text-muted-500 dark:bg-muted-800"
          >
            <Iconify icon="ph:nut-duotone" className="h-8 w-8" />
          </BaseIconBox>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Rounded: lg"
        description="Icon box component lg radiuses"
      >
        <div className="flex flex-wrap items-end gap-2">
          <BaseIconBox
            size="xs"
            rounded="lg"
            className="bg-muted-200 text-muted-500 dark:bg-muted-800"
          >
            <Iconify icon="ph:nut-duotone" className="h-3 w-3" />
          </BaseIconBox>
          <BaseIconBox
            size="sm"
            rounded="lg"
            className="bg-muted-200 text-muted-500 dark:bg-muted-800"
          >
            <Iconify icon="ph:nut-duotone" className="h-4 w-4" />
          </BaseIconBox>
          <BaseIconBox
            size="md"
            rounded="lg"
            className="bg-muted-200 text-muted-500 dark:bg-muted-800"
          >
            <Iconify icon="ph:nut-duotone" className="h-5 w-5" />
          </BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="lg"
            className="bg-muted-200 text-muted-500 dark:bg-muted-800"
          >
            <Iconify icon="ph:nut-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox
            size="xl"
            rounded="lg"
            className="bg-muted-200 text-muted-500 dark:bg-muted-800"
          >
            <Iconify icon="ph:nut-duotone" className="h-7 w-7" />
          </BaseIconBox>
          <BaseIconBox
            size="2xl"
            rounded="lg"
            className="bg-muted-200 text-muted-500 dark:bg-muted-800"
          >
            <Iconify icon="ph:nut-duotone" className="h-8 w-8" />
          </BaseIconBox>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Rounded: md"
        description="Icon box component md radiuses"
      >
        <div className="flex flex-wrap items-end gap-2">
          <BaseIconBox
            size="xs"
            rounded="md"
            className="bg-muted-200 text-muted-500 dark:bg-muted-800"
          >
            <Iconify icon="ph:nut-duotone" className="h-3 w-3" />
          </BaseIconBox>
          <BaseIconBox
            size="sm"
            rounded="md"
            className="bg-muted-200 text-muted-500 dark:bg-muted-800"
          >
            <Iconify icon="ph:nut-duotone" className="h-4 w-4" />
          </BaseIconBox>
          <BaseIconBox
            size="md"
            rounded="md"
            className="bg-muted-200 text-muted-500 dark:bg-muted-800"
          >
            <Iconify icon="ph:nut-duotone" className="h-5 w-5" />
          </BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="md"
            className="bg-muted-200 text-muted-500 dark:bg-muted-800"
          >
            <Iconify icon="ph:nut-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox
            size="xl"
            rounded="md"
            className="bg-muted-200 text-muted-500 dark:bg-muted-800"
          >
            <Iconify icon="ph:nut-duotone" className="h-7 w-7" />
          </BaseIconBox>
          <BaseIconBox
            size="2xl"
            rounded="md"
            className="bg-muted-200 text-muted-500 dark:bg-muted-800"
          >
            <Iconify icon="ph:nut-duotone" className="h-8 w-8" />
          </BaseIconBox>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Rounded: sm"
        description="Icon box component sm radiuses"
      >
        <div className="flex flex-wrap items-end gap-2">
          <BaseIconBox
            size="xs"
            rounded="sm"
            className="bg-muted-200 text-muted-500 dark:bg-muted-800"
          >
            <Iconify icon="ph:nut-duotone" className="h-3 w-3" />
          </BaseIconBox>
          <BaseIconBox
            size="sm"
            rounded="sm"
            className="bg-muted-200 text-muted-500 dark:bg-muted-800"
          >
            <Iconify icon="ph:nut-duotone" className="h-4 w-4" />
          </BaseIconBox>
          <BaseIconBox
            size="md"
            rounded="sm"
            className="bg-muted-200 text-muted-500 dark:bg-muted-800"
          >
            <Iconify icon="ph:nut-duotone" className="h-5 w-5" />
          </BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="sm"
            className="bg-muted-200 text-muted-500 dark:bg-muted-800"
          >
            <Iconify icon="ph:nut-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox
            size="xl"
            rounded="sm"
            className="bg-muted-200 text-muted-500 dark:bg-muted-800"
          >
            <Iconify icon="ph:nut-duotone" className="h-7 w-7" />
          </BaseIconBox>
          <BaseIconBox
            size="2xl"
            rounded="sm"
            className="bg-muted-200 text-muted-500 dark:bg-muted-800"
          >
            <Iconify icon="ph:nut-duotone" className="h-8 w-8" />
          </BaseIconBox>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Rounded: none"
        description="Icon box component none radiuses"
      >
        <div className="flex flex-wrap items-end gap-2">
          <BaseIconBox
            size="xs"
            rounded="none"
            className="bg-muted-200 text-muted-500 dark:bg-muted-800"
          >
            <Iconify icon="ph:nut-duotone" className="h-3 w-3" />
          </BaseIconBox>
          <BaseIconBox
            size="sm"
            rounded="none"
            className="bg-muted-200 text-muted-500 dark:bg-muted-800"
          >
            <Iconify icon="ph:nut-duotone" className="h-4 w-4" />
          </BaseIconBox>
          <BaseIconBox
            size="md"
            rounded="none"
            className="bg-muted-200 text-muted-500 dark:bg-muted-800"
          >
            <Iconify icon="ph:nut-duotone" className="h-5 w-5" />
          </BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            className="bg-muted-200 text-muted-500 dark:bg-muted-800"
          >
            <Iconify icon="ph:nut-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox
            size="xl"
            rounded="none"
            className="bg-muted-200 text-muted-500 dark:bg-muted-800"
          >
            <Iconify icon="ph:nut-duotone" className="h-7 w-7" />
          </BaseIconBox>
          <BaseIconBox
            size="2xl"
            rounded="none"
            className="bg-muted-200 text-muted-500 dark:bg-muted-800"
          >
            <Iconify icon="ph:nut-duotone" className="h-8 w-8" />
          </BaseIconBox>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variant: solid"
        description="Icon box component solid variant"
      >
        <div className="flex flex-wrap items-end gap-4">
          <BaseIconBox size="lg" rounded="full" variant="solid" color="default">
            <Iconify icon="ph:skull-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox size="lg" rounded="full" variant="solid" color="primary">
            <Iconify icon="ph:armchair-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox size="lg" rounded="full" variant="solid" color="info">
            <Iconify icon="ph:confetti-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox size="lg" rounded="full" variant="solid" color="success">
            <Iconify icon="ph:check-circle-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox size="lg" rounded="full" variant="solid" color="warning">
            <Iconify icon="ph:lightbulb-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox size="lg" rounded="full" variant="solid" color="danger">
            <Iconify icon="ph:cookie-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox size="lg" rounded="full" variant="solid" color="light">
            <Iconify icon="ph:cactus-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox size="lg" rounded="full" variant="solid" color="dark">
            <Iconify icon="ph:shield-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox size="lg" rounded="full" variant="solid" color="black">
            <Iconify icon="ph:robot-duotone" className="h-6 w-6" />
          </BaseIconBox>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variant: pastel"
        description="Icon box component pastel variant"
      >
        <div className="flex flex-wrap items-end gap-4">
          <BaseIconBox
            size="lg"
            rounded="full"
            variant="pastel"
            color="default"
          >
            <Iconify icon="ph:skull-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="full"
            variant="pastel"
            color="primary"
          >
            <Iconify icon="ph:armchair-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox size="lg" rounded="full" variant="pastel" color="info">
            <Iconify icon="ph:confetti-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="full"
            variant="pastel"
            color="success"
          >
            <Iconify icon="ph:check-circle-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="full"
            variant="pastel"
            color="warning"
          >
            <Iconify icon="ph:lightbulb-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox size="lg" rounded="full" variant="pastel" color="danger">
            <Iconify icon="ph:cookie-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox size="lg" rounded="full" variant="pastel" color="light">
            <Iconify icon="ph:cactus-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox size="lg" rounded="full" variant="pastel" color="dark">
            <Iconify icon="ph:shield-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox size="lg" rounded="full" variant="pastel" color="black">
            <Iconify icon="ph:robot-duotone" className="h-6 w-6" />
          </BaseIconBox>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variant: outline"
        description="Icon box component outline variant"
      >
        <div className="flex flex-wrap items-end gap-4">
          <BaseIconBox
            size="lg"
            rounded="full"
            variant="outline"
            color="default"
          >
            <Iconify icon="ph:skull-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="full"
            variant="outline"
            color="primary"
          >
            <Iconify icon="ph:armchair-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox size="lg" rounded="full" variant="outline" color="info">
            <Iconify icon="ph:confetti-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="full"
            variant="outline"
            color="success"
          >
            <Iconify icon="ph:check-circle-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="full"
            variant="outline"
            color="warning"
          >
            <Iconify icon="ph:lightbulb-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="full"
            variant="outline"
            color="danger"
          >
            <Iconify icon="ph:cookie-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox size="lg" rounded="full" variant="outline" color="light">
            <Iconify icon="ph:cactus-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox size="lg" rounded="full" variant="outline" color="dark">
            <Iconify icon="ph:shield-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox size="lg" rounded="full" variant="outline" color="black">
            <Iconify icon="ph:robot-duotone" className="h-6 w-6" />
          </BaseIconBox>
        </div>
      </NuiPreview>

      <NuiPreview title="Mask: hex" description="Icon box component hex mask">
        <div className="flex flex-wrap items-end gap-4">
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="hex"
            color="default"
          >
            <Iconify icon="ph:skull-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="hex"
            color="primary"
          >
            <Iconify icon="ph:armchair-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="hex"
            color="info"
          >
            <Iconify icon="ph:confetti-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="hex"
            color="success"
          >
            <Iconify icon="ph:check-circle-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="hex"
            color="warning"
          >
            <Iconify icon="ph:lightbulb-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="hex"
            color="danger"
          >
            <Iconify icon="ph:cookie-duotone" className="h-6 w-6" />
          </BaseIconBox>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Mask: hexed"
        description="Icon box component hexed mask"
      >
        <div className="flex flex-wrap items-end gap-4">
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="hexed"
            color="default"
          >
            <Iconify icon="ph:skull-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="hexed"
            color="primary"
          >
            <Iconify icon="ph:armchair-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="hexed"
            color="info"
          >
            <Iconify icon="ph:confetti-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="hexed"
            color="success"
          >
            <Iconify icon="ph:check-circle-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="hexed"
            color="warning"
          >
            <Iconify icon="ph:lightbulb-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="hexed"
            color="danger"
          >
            <Iconify icon="ph:cookie-duotone" className="h-6 w-6" />
          </BaseIconBox>
        </div>
      </NuiPreview>

      <NuiPreview title="Mask: blob" description="Icon box component blob mask">
        <div className="flex flex-wrap items-end gap-4">
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="blob"
            color="default"
          >
            <Iconify icon="ph:skull-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="blob"
            color="primary"
          >
            <Iconify icon="ph:armchair-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="blob"
            color="info"
          >
            <Iconify icon="ph:confetti-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="blob"
            color="success"
          >
            <Iconify icon="ph:check-circle-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="blob"
            color="warning"
          >
            <Iconify icon="ph:lightbulb-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="blob"
            color="danger"
          >
            <Iconify icon="ph:cookie-duotone" className="h-6 w-6" />
          </BaseIconBox>
        </div>
      </NuiPreview>

      <NuiPreview title="Mask: deca" description="Icon box component deca mask">
        <div className="flex flex-wrap items-end gap-4">
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="deca"
            color="default"
          >
            <Iconify icon="ph:skull-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="deca"
            color="primary"
          >
            <Iconify icon="ph:armchair-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="deca"
            color="info"
          >
            <Iconify icon="ph:confetti-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="deca"
            color="success"
          >
            <Iconify icon="ph:check-circle-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="deca"
            color="warning"
          >
            <Iconify icon="ph:lightbulb-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="deca"
            color="danger"
          >
            <Iconify icon="ph:cookie-duotone" className="h-6 w-6" />
          </BaseIconBox>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Mask: diamond"
        description="Icon box component diamond mask"
      >
        <div className="flex flex-wrap items-end gap-4">
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="diamond"
            color="default"
          >
            <Iconify icon="ph:skull-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="diamond"
            color="primary"
          >
            <Iconify icon="ph:armchair-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="diamond"
            color="info"
          >
            <Iconify icon="ph:confetti-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="diamond"
            color="success"
          >
            <Iconify icon="ph:check-circle-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="diamond"
            color="warning"
          >
            <Iconify icon="ph:lightbulb-duotone" className="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="diamond"
            color="danger"
          >
            <Iconify icon="ph:cookie-duotone" className="h-6 w-6" />
          </BaseIconBox>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  );
}

export default IconBoxPage;
