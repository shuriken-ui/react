import React from "react";

import NuiPreviewContainer from "@/components/NuiPreviewContainer";
import NuiPreview from "@/components/NuiPreview";
import { BaseAccordion } from "@shuriken-ui/react";
import { getMeta } from "@/data/sidebar";
import { Metadata } from "next";

const meta = getMeta("base", "accordion");

export const metadata: Metadata = {
  ...meta,
};

const accordion = [
  {
    title: "Accordion Item 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? Inde igitur, inquit, ordiendum est. Primum quid tu dicis breve? Duo Reges: constructio interrete.",
  },
  {
    title: "Accordion Item 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? Inde igitur, inquit, ordiendum est. Primum quid tu dicis breve? Duo Reges: constructio interrete.",
  },
  {
    title: "Accordion Item 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? Inde igitur, inquit, ordiendum est. Primum quid tu dicis breve? Duo Reges: constructio interrete.",
  },
];

export default function AccordionPage() {
  return (
    <NuiPreviewContainer title={meta.title}>
      <NuiPreview title="Default" description="Default accordion style">
        <div className="md:max-w-lg">
          <BaseAccordion items={accordion} />
        </div>
      </NuiPreview>

      <NuiPreview title="Exclusive" description="Exclusive accordion style">
        <div className="md:max-w-lg">
          <BaseAccordion items={accordion} exclusive />
        </div>
      </NuiPreview>

      <NuiPreview title="Rounded" description="Accordion radius options">
        <div className="grid gap-4 md:grid-cols-2 max-w-4xl">
          <BaseAccordion items={accordion} exclusive rounded="none" />
          <BaseAccordion items={accordion} exclusive rounded="sm" />
          <BaseAccordion items={accordion} exclusive rounded="md" />
          <BaseAccordion items={accordion} exclusive rounded="lg" />
        </div>
      </NuiPreview>

      <NuiPreview title="Dot color" description="Accordion dot color options">
        <div className="grid gap-4 md:grid-cols-2 max-w-4xl">
          <BaseAccordion items={accordion} exclusive dotColor="primary" />
          <BaseAccordion items={accordion} exclusive dotColor="success" />
          <BaseAccordion items={accordion} exclusive dotColor="info" />
          <BaseAccordion items={accordion} exclusive dotColor="dark" />
        </div>
      </NuiPreview>

      <NuiPreview title="Chevron" description="Chevron accordion style">
        <div className="md:max-w-lg">
          <BaseAccordion items={accordion} exclusive action="chevron" />
        </div>
      </NuiPreview>

      <NuiPreview title="Plus" description="Plus accordion style">
        <div className="md:max-w-lg">
          <BaseAccordion items={accordion} exclusive action="plus" />
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  );
}
