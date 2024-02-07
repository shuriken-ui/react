import React from "react";
import NuiPreviewContainer from "@/components/NuiPreviewContainer";
import NuiPreview from "@/components/NuiPreview";
import { BasePlaceholderPage, BaseButton } from "@shuriken-ui/react";
import { getMeta } from "@/data/sidebar";
import { Metadata } from "next";
import Image from "next/image";

const meta = getMeta("base", "placeholder");

export const metadata: Metadata = {
  ...meta,
};
export default function PlaceholderPage() {
  return (
    <NuiPreviewContainer title={meta.title}>
      <NuiPreview title="Default" description="Placeholder component default">
        <BasePlaceholderPage
          title="Looks like you are new!"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat enim Polemonis. Duo Reges."
          image={
            <Image
              width={320}
              height={214}
              src="https://tairo.cssninja.io/img/illustrations/placeholders/people/2.svg"
              alt="placeholder-image"
            />
          }
        >
          <div className="mt-2 flex justify-center gap-2">
            <BaseButton color="primary" rounded="md" className="h-11 w-40">
              Take some action
            </BaseButton>
          </div>
        </BasePlaceholderPage>
      </NuiPreview>
    </NuiPreviewContainer>
  );
}
