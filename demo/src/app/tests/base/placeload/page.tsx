import { Metadata } from "next";
import React from "react";
import { getMeta } from "@/data/sidebar";
import NuiPreviewContainer from "@/components/NuiPreviewContainer";
import NuiPreview from "@/components/NuiPreview";

import { BasePlaceload, BaseCard } from "@shuriken-ui/react";

const meta = getMeta("base", "placeload");

export const metadata: Metadata = {
  ...meta,
};

export default function PlaceloadPage() {
  return (
    <NuiPreviewContainer title={meta.title}>
      <NuiPreview title="Text" description="Placeload component text">
        <div className="max-w-sm space-y-2">
          <BasePlaceload className="h-4 w-full rounded" />
          <BasePlaceload className="h-4 w-[85%] rounded" />
        </div>
      </NuiPreview>

      <NuiPreview title="Shape" description="Placeload component shape">
        <div className="flex flex-wrap items-end gap-2">
          <BasePlaceload className="h-10 w-10 rounded" />
          <BasePlaceload className="h-12 w-12 rounded-xl" />
          <BasePlaceload className="h-16 w-16 rounded-full" />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Composition"
        description="Placeload component composition"
      >
        <div className="max-w-sm">
          <BaseCard rounded="md" className="p-4 md:p-6">
            <div className="flex items-center">
              <BasePlaceload className="h-10 w-10 rounded-full" />
              <div className="ms-3 grow space-y-2">
                <BasePlaceload className="h-3 w-full rounded" />
                <BasePlaceload className="h-3 w-[85%] rounded" />
              </div>
            </div>
          </BaseCard>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  );
}
