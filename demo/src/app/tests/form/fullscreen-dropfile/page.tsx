import React from "react";

import { getMeta } from "@/data/sidebar";
import { Metadata } from "next";
import NuiPreviewContainer from "@/components/NuiPreviewContainer";
import FullScreenDropFile from "./FullScreenDropFile";

const meta = getMeta("form", "fullscreenDropfile");

export const metadata: Metadata = {
  ...meta,
};
export default function FullScreenDropFilePage() {
  return (
    <NuiPreviewContainer title={meta.title}>
      <FullScreenDropFile />
    </NuiPreviewContainer>
  );
}
