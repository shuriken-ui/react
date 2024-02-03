/* eslint-disable react/no-unescaped-entities */
import {
  BaseHeading,
  BaseParagraph,
  BaseText,
  BaseLink,
} from "@shuriken-ui/react";
import { Metadata } from "next";
import React from "react";
import { getMeta } from "@/data/sidebar";
import NuiPreviewContainer from "@/components/NuiPreviewContainer";
import NuiPreview from "@/components/NuiPreview";

const meta = getMeta("authority", "typography");

export const metadata: Metadata = {
  ...meta,
};
function Typography() {
  return (
    <div>
      <NuiPreviewContainer title={meta.title}>
        <NuiPreview title="BaseHeading" description="Heading component">
          <BaseHeading
            as="h2"
            size="3xl"
            weight="extrabold"
            className="text-muted-800 dark:text-white"
          >
            A huge heading
          </BaseHeading>
          <BaseHeading
            as="h3"
            size="2xl"
            weight="bold"
            className="text-muted-800 dark:text-white"
          >
            A bold and very large heading
          </BaseHeading>
          <BaseHeading
            as="h4"
            size="lg"
            weight="semibold"
            className="text-muted-800 dark:text-white"
          >
            A smaller and less thicker heading
          </BaseHeading>
          <BaseHeading
            as="h5"
            size="md"
            weight="medium"
            className="text-muted-400"
          >
            Smaller and using another color
          </BaseHeading>
        </NuiPreview>

        <NuiPreview title="BaseParagraph" description="Paragraph component">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col">
              <BaseParagraph class="text-muted-400 dark:text-muted-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat
                enim Polemonis. Duo Reges: constructio interrete. Philosophi
                autem in suis lectulis plerumque moriuntur.
              </BaseParagraph>
            </div>

            <div className="flex flex-col space-y-2">
              <BaseParagraph
                size="sm"
                class="text-muted-400 dark:text-muted-400"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat
                enim Polemonis. Duo Reges: constructio interrete. Philosophi
                autem in suis lectulis plerumque moriuntur.
              </BaseParagraph>

              <BaseParagraph
                size="xs"
                weight="semibold"
                class="text-success-500"
              >
                Any text can have a different color
              </BaseParagraph>
            </div>
          </div>
        </NuiPreview>

        <NuiPreview title="BaseText" description="Text component">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col">
              <BaseText className="text-muted-500 dark:text-muted-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat
                enim Polemonis. Duo Reges: constructio interrete. Philosophi
                autem in suis lectulis plerumque moriuntur.
              </BaseText>
            </div>

            <div className="flex flex-col space-y-2">
              <BaseText
                size="sm"
                className="text-muted-400 dark:text-muted-400"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat
                enim Polemonis. Duo Reges: constructio interrete. Philosophi
                autem in suis lectulis plerumque moriuntur.
              </BaseText>

              <BaseText size="xs" weight="medium" className="text-success-500">
                Any text can have a different color
              </BaseText>
            </div>
          </div>
        </NuiPreview>

        <NuiPreview title="BaseLink" description="Link component">
          <BaseLink href="https://www.google.com">This is a link</BaseLink>
        </NuiPreview>

        <NuiPreview title="NuiMark" description="Marked text component">
          <mark className="nui-mark">Iam a marked text</mark>
        </NuiPreview>
      </NuiPreviewContainer>
    </div>
  );
}

export default Typography;
