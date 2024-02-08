import React, { Fragment } from "react";

import { getMeta } from "@/data/sidebar";
import { Metadata } from "next";
import NuiPreviewContainer from "@/components/NuiPreviewContainer";
import TabSlider from "./TabSlider";

const meta = getMeta("base", "tabSlider");

export const metadata: Metadata = {
  ...meta,
};

export default function TabSliderPage() {
  return (
    <NuiPreviewContainer title={meta.title}>
      <TabSlider />
    </NuiPreviewContainer>
  );
}
