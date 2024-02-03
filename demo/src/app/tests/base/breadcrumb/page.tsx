import { Metadata } from "next";
import React from "react";

import { getMeta } from "@/data/sidebar";
import Iconify from "@/components/Iconify";
import NuiPreviewContainer from "@/components/NuiPreviewContainer";
import NuiPreview from "@/components/NuiPreview";
import { BaseBreadcrumb } from "@shuriken-ui/react";

const meta = getMeta("base", "breadcrumb");

export const metadata: Metadata = {
  ...meta,
};

const demoBreadcrumbOne = [
  {
    label: "Home",
    hideLabel: false,
    icon: "lucide:home",
    href: "#",
  },
  {
    label: "Products",
    hideLabel: false,
    href: "#",
  },
  {
    label: "Laptops",
    hideLabel: false,
    href: "#",
  },
];

const demoBreadcrumbTwo = [
  {
    label: "Home",
    hideLabel: false,
    icon: "lucide:home",
    href: "#",
  },
  {
    label: "Products",
    hideLabel: false,
    icon: "lucide:layout-grid",
    href: "#",
  },
  {
    label: "Laptops",
    hideLabel: false,
    icon: "lucide:laptop",
    href: "#",
  },
];

export default function BreadcrumbPage() {
  return (
    <NuiPreviewContainer title="BaseBreadcrumb">
      <NuiPreview
        title="Separator: dot"
        description="Breadcrumb component with dot separator"
      >
        <div className="flex flex-col gap-4 pt-4">
          <BaseBreadcrumb items={demoBreadcrumbOne} />

          <BaseBreadcrumb items={demoBreadcrumbTwo} />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Separator: slash"
        description="Breadcrumb component with slash separator"
      >
        <div className="flex flex-col gap-4 pt-4">
          <BaseBreadcrumb
            items={demoBreadcrumbOne}
            //   separator="slash"
          >
            /
          </BaseBreadcrumb>

          <BaseBreadcrumb
            items={demoBreadcrumbTwo}
            // separator="slash"
          >
            /
          </BaseBreadcrumb>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Separator: chevron"
        description="Breadcrumb component with chevron separator"
      >
        <div className="flex flex-col gap-4 pt-4">
          <BaseBreadcrumb
            items={demoBreadcrumbOne}
            //   separator="chevron"
          >
            <Iconify icon="lucide:chevron-right" className="w-4 h-4" />
          </BaseBreadcrumb>

          <BaseBreadcrumb
            items={demoBreadcrumbTwo}
            //   separator="chevron"
          >
            <Iconify icon="lucide:chevron-right" className="w-4 h-4" />
          </BaseBreadcrumb>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Separator: arrow"
        description="Breadcrumb component with arrow separator"
      >
        <div className="flex flex-col gap-4 pt-4">
          <BaseBreadcrumb
            items={demoBreadcrumbOne}
            //   separator="arrow"
          >
            <Iconify icon="lucide:arrow-right" className="w-4 h-4" />
          </BaseBreadcrumb>

          <BaseBreadcrumb
            items={demoBreadcrumbTwo}
            //   separator="arrow"
          >
            <Iconify icon="lucide:arrow-right" className="w-4 h-4" />
          </BaseBreadcrumb>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  );
}
