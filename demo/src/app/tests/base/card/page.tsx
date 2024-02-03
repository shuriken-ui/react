import { BaseCard, BaseHeading, BaseParagraph } from "@shuriken-ui/react";
import { Metadata } from "next";
import React from "react";
import NuiPreview from "@/components/NuiPreview";
import NuiPreviewContainer from "@/components/NuiPreviewContainer";

import { getMeta } from "@/data/sidebar";

const meta = getMeta("base", "card");

export const metadata: Metadata = {
  ...meta,
};
function CardPage() {
  return (
    <NuiPreviewContainer title={meta.title}>
      <NuiPreview title="Radius" description="Card component radiuses">
        <div className="grid gap-4 md:grid-cols-2 max-w-3xl">
          <BaseCard rounded="none" className="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              className="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" className="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>

          <BaseCard rounded="sm" className="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              className="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" className="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>

          <BaseCard rounded="md" className="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              className="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" className="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>

          <BaseCard rounded="lg" className="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              className="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" className="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>
        </div>
      </NuiPreview>

      <NuiPreview title="Contrast" description="Card component contrasts">
        <div className="grid gap-4 md:grid-cols-2 max-w-3xl">
          <BaseCard color="white" rounded="md" className="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              className="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" className="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>

          <BaseCard color="white-contrast" rounded="md" className="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              className="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" className="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>

          <BaseCard color="muted" rounded="md" className="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              className="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" className="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>

          <BaseCard color="muted-contrast" rounded="md" className="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              className="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" className="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>
        </div>
      </NuiPreview>

      <NuiPreview title="Color" description="Card component colors">
        <div className="grid gap-4 md:grid-cols-2 max-w-3xl">
          <BaseCard color="white" rounded="md" className="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              className="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" className="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>

          <BaseCard color="primary" rounded="md" className="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              className="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" className="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>

          <BaseCard color="info" rounded="md" className="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              className="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" className="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>

          <BaseCard color="success" rounded="md" className="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              className="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" className="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>

          <BaseCard color="warning" rounded="md" className="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              className="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" className="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>

          <BaseCard color="danger" rounded="md" className="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              className="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" className="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Shadow: flat"
        description="Card component flat shadows"
      >
        <div className="grid gap-4 md:grid-cols-2 max-w-3xl">
          <BaseCard rounded="none" shadow="flat" className="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              className="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" className="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>

          <BaseCard rounded="sm" shadow="flat" className="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              className="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" className="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>

          <BaseCard rounded="md" shadow="flat" className="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              className="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" className="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>

          <BaseCard rounded="lg" shadow="flat" className="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              className="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" className="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Shadow: hover"
        description="Card component hover shadows"
      >
        <div className="grid gap-4 md:grid-cols-2 max-w-3xl">
          <BaseCard rounded="none" shadow="hover" className="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              className="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" className="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>

          <BaseCard rounded="sm" shadow="hover" className="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              className="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" className="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>

          <BaseCard rounded="md" shadow="hover" className="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              className="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" className="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>

          <BaseCard rounded="lg" shadow="hover" className="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              className="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" className="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  );
}

export default CardPage;
