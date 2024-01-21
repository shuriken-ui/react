"use client";

import React from "react";
import NuiPreviewContainer from "../../NuiPreviewContainer";
import { BaseBreadcrumb } from "@shuriken-ui/react";
import NuiPreview from "../../NuiPreview";

import { Icon } from "@iconify/react";

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
const Breadcrumb = () => {
  return (
    <div>
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
              <Icon icon="lucide:chevron-right" className="w-4 h-4" />
            </BaseBreadcrumb>

            <BaseBreadcrumb
              items={demoBreadcrumbTwo}
              //   separator="chevron"
            >
              <Icon icon="lucide:chevron-right" className="w-4 h-4" />
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
              <Icon icon="lucide:arrow-right" className="w-4 h-4" />
            </BaseBreadcrumb>

            <BaseBreadcrumb
              items={demoBreadcrumbTwo}
              //   separator="arrow"
            >
              <Icon icon="lucide:arrow-right" className="w-4 h-4" />
            </BaseBreadcrumb>
          </div>
        </NuiPreview>
      </NuiPreviewContainer>
    </div>
  );
};

export default Breadcrumb;
