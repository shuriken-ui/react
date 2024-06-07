import { BaseButton, BaseButtonGroup } from "@shuriken-ui/react";
import { Metadata } from "next";
import React from "react";
import NuiPreviewContainer from "@/components/NuiPreviewContainer";
import NuiPreview from "@/components/NuiPreview";
import Iconify from "@/components/Iconify";
import { getMeta } from "@/data/sidebar";

const meta = getMeta("base", "buttons");

export const metadata: Metadata = {
  ...meta,
};

export default function ButtonsPage() {
  return (
    <NuiPreviewContainer title={meta.title}>
      <NuiPreview title="Radius" description="Button component border radiuses">
        <div className="flex flex-wrap items-end gap-4">
          <BaseButton rounded="none">Button</BaseButton>
          <BaseButton rounded="sm">Button</BaseButton>
          <BaseButton rounded="md">Button</BaseButton>
          <BaseButton rounded="lg">Button</BaseButton>
          <BaseButton rounded="full">Button</BaseButton>
        </div>
      </NuiPreview>

      <NuiPreview title="Size" description="Button component sizes">
        <div className="flex flex-wrap items-end gap-4">
          <BaseButton size="sm" rounded="md">
            Button
          </BaseButton>
          <BaseButton size="md" rounded="md">
            Button
          </BaseButton>
          <BaseButton size="lg" rounded="md">
            Button
          </BaseButton>
          <BaseButton size="xl" rounded="md">
            Button
          </BaseButton>
        </div>
      </NuiPreview>

      <NuiPreview title="Badge" description="Button component badges">
        <div className="flex flex-wrap items-end gap-4">
          <BaseButton size="sm" rounded="md" badge badgePulse>
            Button
          </BaseButton>
          <BaseButton size="md" rounded="md" badge badgePulse>
            Button
          </BaseButton>
          <BaseButton size="lg" rounded="md" badge badgePulse>
            Button
          </BaseButton>
          <BaseButton size="xl" rounded="md" badge badgePulse>
            Button
          </BaseButton>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Link"
        description="Button component rendered as a link"
      >
        <div className="flex flex-wrap items-end gap-4">
          <BaseButton href="#" rounded="none">
            Button
          </BaseButton>
          <BaseButton href="#" rounded="sm">
            Button
          </BaseButton>
          <BaseButton href="#" rounded="md">
            Button
          </BaseButton>
          <BaseButton href="#" rounded="lg">
            Button
          </BaseButton>
          <BaseButton href="#" rounded="full">
            Button
          </BaseButton>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variant: solid"
        description="Button component solid variant"
      >
        <div className="flex flex-wrap items-end gap-4">
          <BaseButton variant="solid">Button</BaseButton>
          <BaseButton variant="solid" color="muted">Button</BaseButton>
          <BaseButton variant="solid" color="primary">Button</BaseButton>
          <BaseButton variant="solid" color="success">Button</BaseButton>
          <BaseButton variant="solid" color="info">Button</BaseButton>
          <BaseButton variant="solid" color="warning">Button</BaseButton>
          <BaseButton variant="solid" color="danger">Button</BaseButton>
          <BaseButton variant="solid" color="light">Button</BaseButton>
          <BaseButton variant="solid" color="dark">Button</BaseButton>
          <BaseButton variant="solid" color="black">Button</BaseButton>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variant: pastel"
        description="Button component pastel variant"
      >
        <div className="flex flex-wrap items-end gap-4">
          <BaseButton variant="pastel">Button</BaseButton>
          <BaseButton variant="pastel" color="muted">Button</BaseButton>
          <BaseButton variant="pastel" color="primary">Button</BaseButton>
          <BaseButton variant="pastel" color="success">Button</BaseButton>
          <BaseButton variant="pastel" color="info">Button</BaseButton>
          <BaseButton variant="pastel" color="warning">Button</BaseButton>
          <BaseButton variant="pastel" color="danger">Button</BaseButton>
          <BaseButton variant="pastel" color="light">Button</BaseButton>
          <BaseButton variant="pastel" color="dark">Button</BaseButton>
          <BaseButton variant="pastel" color="black">Button</BaseButton>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variant: outline"
        description="Button component outline variant"
      >
        <div className="flex flex-wrap items-end gap-4">
          <BaseButton variant="outline">Button</BaseButton>
          <BaseButton variant="outline" color="muted">Button</BaseButton>
          <BaseButton variant="outline" color="primary">Button</BaseButton>
          <BaseButton variant="outline" color="success">Button</BaseButton>
          <BaseButton variant="outline" color="info">Button</BaseButton>
          <BaseButton variant="outline" color="warning">Button</BaseButton>
          <BaseButton variant="outline" color="danger">Button</BaseButton>
          <BaseButton variant="outline" color="light">Button</BaseButton>
          <BaseButton variant="outline" color="dark">Button</BaseButton>
          <BaseButton variant="outline" color="black">Button</BaseButton>
        </div>
      </NuiPreview>

      <NuiPreview title="With icons" description="Button component with icons">
        <div className="flex flex-wrap items-end gap-4">
          <BaseButton color="default">
            <Iconify icon="lucide:moon" className="-ms-1 h-4 w-4" />
            <span>Button</span>
          </BaseButton>
          <BaseButton color="primary">
            <span>Button</span>
            <Iconify icon="lucide:arrow-right" className="me-1 h-4 w-4" />
          </BaseButton>
          <BaseButton color="success">
            <Iconify icon="cib:envato" className="-ms-1 h-4 w-4" />
            <span>Button</span>
          </BaseButton>
          <BaseButton color="info">
            <Iconify icon="fa:twitter" className="-ms-1 h-4 w-4" />
            <span>Button</span>
          </BaseButton>
          <BaseButton color="warning">
            <Iconify icon="ion:shapes" className="-ms-1 h-4 w-4" />
            <span>Button</span>
          </BaseButton>
          <BaseButton color="danger">
            <Iconify icon="ph:heart-duotone" className="-ms-1 h-4 w-4" />
            <span>Button</span>
          </BaseButton>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Shadow: flat"
        description="Button component with a flat shadow"
      >
        <div className="flex flex-wrap items-end gap-4">
          <BaseButton shadow="flat">Button</BaseButton>
          <BaseButton shadow="flat" color="muted">Button</BaseButton>
          <BaseButton shadow="flat" color="primary">Button</BaseButton>
          <BaseButton shadow="flat" color="success">Button</BaseButton>
          <BaseButton shadow="flat" color="info">Button</BaseButton>
          <BaseButton shadow="flat" color="warning">Button</BaseButton>
          <BaseButton shadow="flat" color="danger">Button</BaseButton>
          <BaseButton shadow="flat" color="light">Button</BaseButton>
          <BaseButton shadow="flat" color="dark">Button</BaseButton>
          <BaseButton shadow="flat" color="black">Button</BaseButton>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Shadow: hover"
        description="Button component with a hover shadow"
      >
        <div className="flex flex-wrap items-end gap-4">
          <BaseButton shadow="hover">Button</BaseButton>
          <BaseButton shadow="hover" color="muted">Button</BaseButton>
          <BaseButton shadow="hover" color="primary">Button</BaseButton>
          <BaseButton shadow="hover" color="success">Button</BaseButton>
          <BaseButton shadow="hover" color="info">Button</BaseButton>
          <BaseButton shadow="hover" color="warning">Button</BaseButton>
          <BaseButton shadow="hover" color="danger">Button</BaseButton>
          <BaseButton shadow="hover" color="light">Button</BaseButton>
          <BaseButton shadow="hover" color="dark">Button</BaseButton>
          <BaseButton shadow="hover" color="black">Button</BaseButton>
        </div>
      </NuiPreview>

      <NuiPreview
        title="State: loading"
        description="Button component in a loading state"
      >
        <div className="flex flex-wrap items-end gap-4">
          <BaseButton loading>Button</BaseButton>
          <BaseButton loading color="muted">Button</BaseButton>
          <BaseButton loading color="primary">Button</BaseButton>
          <BaseButton loading color="success">Button</BaseButton>
          <BaseButton loading color="info">Button</BaseButton>
          <BaseButton loading color="warning">Button</BaseButton>
          <BaseButton loading color="danger">Button</BaseButton>
          <BaseButton loading color="light">Button</BaseButton>
          <BaseButton loading color="dark">Button</BaseButton>
          <BaseButton loading color="black">Button</BaseButton>
        </div>
      </NuiPreview>

      <NuiPreview
        title="State: disabled"
        description="Button component in a disabled state"
      >
        <div className="flex flex-wrap items-end gap-4">
          <BaseButton disabled>Button</BaseButton>
          <BaseButton disabled color="muted">Button</BaseButton>
          <BaseButton disabled color="primary">Button</BaseButton>
          <BaseButton disabled color="success">Button</BaseButton>
          <BaseButton disabled color="info">Button</BaseButton>
          <BaseButton disabled color="warning">Button</BaseButton>
          <BaseButton disabled color="danger">Button</BaseButton>
          <BaseButton disabled color="light">Button</BaseButton>
          <BaseButton disabled color="dark">Button</BaseButton>
          <BaseButton disabled color="black">Button</BaseButton>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Group"
        description="Button component inside a button group"
      >
        <BaseButtonGroup>
          <BaseButton color="default">
            <Iconify icon="lucide:edit-3" className="-ms-1 h-3 w-3" />
            <span>Edit</span>
          </BaseButton>
          <BaseButton color="default">
            <Iconify icon="lucide:eye" className="-ms-1 h-3 w-3" />
            <span>View</span>
          </BaseButton>
          <BaseButton color="primary">
            <Iconify icon="lucide:box" className="-ms-1 h-3 w-3" />
            <span>Stash</span>
          </BaseButton>
          <BaseButton color="default">
            <Iconify icon="lucide:share-2" className="-ms-1 h-3 w-3" />
            <span>Share</span>
          </BaseButton>
        </BaseButtonGroup>
      </NuiPreview>
    </NuiPreviewContainer>
  );
}
