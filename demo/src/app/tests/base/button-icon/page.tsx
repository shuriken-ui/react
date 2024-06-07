import { Metadata } from "next";
import React from "react";
import NuiPreview from "@/components/NuiPreview";
import { BaseButtonGroup, BaseButtonIcon } from "@shuriken-ui/react";
import NuiPreviewContainer from "@/components/NuiPreviewContainer";
import Iconify from "@/components/Iconify";
import { getMeta } from "@/data/sidebar";

const meta = getMeta("base", "buttonIcon");

export const metadata: Metadata = {
  ...meta,
};

export default function ButtonIconPage() {
  return (
    <NuiPreviewContainer title={meta.title}>
      <NuiPreview title="Radius" description="Button icon component radiuses">
        <div className="flex flex-wrap items-end gap-2">
          <BaseButtonIcon rounded="none">
            <Iconify icon="ph:moon-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="sm">
            <Iconify icon="ph:github-logo-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="md">
            <Iconify icon="ph:game-controller-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="lg">
            <Iconify icon="ph:alien-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="full">
            <Iconify icon="ph:heart-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
        </div>
      </NuiPreview>

      <NuiPreview title="Size" description="Button icon component sizes">
        <div className="flex flex-wrap items-end gap-2">
          <BaseButtonIcon size="sm" rounded="md">
            <Iconify icon="ph:game-controller-duotone" className="h-4 w-4" />
          </BaseButtonIcon>
          <BaseButtonIcon size="md" rounded="md">
            <Iconify icon="ph:game-controller-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon size="lg" rounded="md">
            <Iconify icon="ph:game-controller-duotone" className="h-6 w-6" />
          </BaseButtonIcon>
          <BaseButtonIcon size="xl" rounded="md">
            <Iconify icon="ph:game-controller-duotone" className="h-7 w-7" />
          </BaseButtonIcon>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: default"
        description="Button icon component default color"
      >
        <div className="flex flex-wrap items-end gap-2">
          <BaseButtonIcon rounded="none" color="default">
            <Iconify icon="ph:moon-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="sm" color="default">
            <Iconify icon="ph:github-logo-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="md" color="default">
            <Iconify icon="ph:game-controller-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="lg" color="default">
            <Iconify icon="ph:alien-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="full" color="default">
            <Iconify icon="ph:heart-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: muted"
        description="Button icon component muted color"
      >
        <div className="flex flex-wrap items-end gap-2">
          <BaseButtonIcon rounded="none" color="muted">
            <Iconify icon="ph:moon-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="sm" color="muted">
            <Iconify icon="ph:github-logo-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="md" color="muted">
            <Iconify icon="ph:game-controller-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="lg" color="muted">
            <Iconify icon="ph:alien-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="full" color="muted">
            <Iconify icon="ph:heart-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: primary"
        description="Button icon component primary color"
      >
        <div className="flex flex-wrap items-end gap-2">
          <BaseButtonIcon rounded="none" color="primary">
            <Iconify icon="ph:moon-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="sm" color="primary">
            <Iconify icon="ph:github-logo-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="md" color="primary">
            <Iconify icon="ph:game-controller-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="lg" color="primary">
            <Iconify icon="ph:alien-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="full" color="primary">
            <Iconify icon="ph:heart-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: info"
        description="Button icon component info color"
      >
        <div className="flex flex-wrap items-end gap-2">
          <BaseButtonIcon rounded="none" color="info">
            <Iconify icon="ph:moon-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="sm" color="info">
            <Iconify icon="ph:github-logo-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="md" color="info">
            <Iconify icon="ph:game-controller-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="lg" color="info">
            <Iconify icon="ph:alien-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="full" color="info">
            <Iconify icon="ph:heart-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: success"
        description="Button icon component success color"
      >
        <div className="flex flex-wrap items-end gap-2">
          <BaseButtonIcon rounded="none" color="success">
            <Iconify icon="ph:moon-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="sm" color="success">
            <Iconify icon="ph:github-logo-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="md" color="success">
            <Iconify icon="ph:game-controller-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="lg" color="success">
            <Iconify icon="ph:alien-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="full" color="success">
            <Iconify icon="ph:heart-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: warning"
        description="Button icon component warning color"
      >
        <div className="flex flex-wrap items-end gap-2">
          <BaseButtonIcon rounded="none" color="warning">
            <Iconify icon="ph:moon-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="sm" color="warning">
            <Iconify icon="ph:github-logo-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="md" color="warning">
            <Iconify icon="ph:game-controller-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="lg" color="warning">
            <Iconify icon="ph:alien-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="full" color="warning">
            <Iconify icon="ph:heart-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: danger"
        description="Button icon component danger color"
      >
        <div className="flex flex-wrap items-end gap-2">
          <BaseButtonIcon rounded="none" color="danger">
            <Iconify icon="ph:moon-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="sm" color="danger">
            <Iconify icon="ph:github-logo-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="md" color="danger">
            <Iconify icon="ph:game-controller-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="lg" color="danger">
            <Iconify icon="ph:alien-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="full" color="danger">
            <Iconify icon="ph:heart-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
        </div>
      </NuiPreview>
      
      <NuiPreview
        title="Color: light"
        description="Button icon component light color"
      >
        <div className="flex flex-wrap items-end gap-2">
          <BaseButtonIcon rounded="none" color="light">
            <Iconify icon="ph:moon-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="sm" color="light">
            <Iconify icon="ph:github-logo-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="md" color="light">
            <Iconify icon="ph:game-controller-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="lg" color="light">
            <Iconify icon="ph:alien-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="full" color="light">
            <Iconify icon="ph:heart-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: dark"
        description="Button icon component dark color"
      >
        <div className="flex flex-wrap items-end gap-2">
          <BaseButtonIcon rounded="none" color="dark">
            <Iconify icon="ph:moon-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="sm" color="dark">
            <Iconify icon="ph:github-logo-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="md" color="dark">
            <Iconify icon="ph:game-controller-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="lg" color="dark">
            <Iconify icon="ph:alien-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="full" color="dark">
            <Iconify icon="ph:heart-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: black"
        description="Button icon component black color"
      >
        <div className="flex flex-wrap items-end gap-2">
          <BaseButtonIcon rounded="none" color="black">
            <Iconify icon="ph:moon-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="sm" color="black">
            <Iconify icon="ph:github-logo-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="md" color="black">
            <Iconify icon="ph:game-controller-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="lg" color="black">
            <Iconify icon="ph:alien-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="full" color="black">
            <Iconify icon="ph:heart-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
        </div>
      </NuiPreview>
      <NuiPreview
        title="State: loading"
        description="Button icon component in loading state"
      >
        <div className="flex flex-wrap items-end gap-2">
          <BaseButtonIcon rounded="none" loading>
            <Iconify icon="ph:moon-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="sm" loading>
            <Iconify icon="ph:github-logo-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="md" loading>
            <Iconify icon="ph:game-controller-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="lg" loading>
            <Iconify icon="ph:alien-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="full" loading>
            <Iconify icon="ph:heart-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
        </div>
      </NuiPreview>

      <NuiPreview
        title="State: disabled"
        description="Button icon component in disabled state"
      >
        <div className="flex flex-wrap items-end gap-2">
          <BaseButtonIcon rounded="none" disabled>
            <Iconify icon="ph:moon-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="sm" disabled>
            <Iconify icon="ph:github-logo-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="md" disabled>
            <Iconify icon="ph:game-controller-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="lg" disabled>
            <Iconify icon="ph:alien-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="full" disabled>
            <Iconify icon="ph:heart-duotone" className="h-5 w-5" />
          </BaseButtonIcon>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Group"
        description="Button icon component inside a group"
      >
        <div className="flex flex-wrap items-end gap-2">
          <BaseButtonGroup>
            <BaseButtonIcon rounded="md" color="default">
              <Iconify icon="ph:moon-duotone" className="h-5 w-5" />
            </BaseButtonIcon>
            <BaseButtonIcon rounded="md" color="default">
              <Iconify icon="ph:github-logo-duotone" className="h-5 w-5" />
            </BaseButtonIcon>
            <BaseButtonIcon rounded="md" color="default">
              <Iconify icon="ph:game-controller-duotone" className="h-5 w-5" />
            </BaseButtonIcon>
            <BaseButtonIcon rounded="md" color="default">
              <Iconify icon="ph:alien-duotone" className="h-5 w-5" />
            </BaseButtonIcon>
            <BaseButtonIcon rounded="md" color="default">
              <Iconify icon="ph:heart-duotone" className="h-5 w-5" />
            </BaseButtonIcon>
          </BaseButtonGroup>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  );
}
