import { Metadata } from "next";
import React from "react";
import Inputs from "./Inputs";
import NuiPreviewContainer from "@/components/NuiPreviewContainer";

import { getMeta } from "@/data/sidebar";

const meta = getMeta("form", "input");

export const metadata: Metadata = {
  ...meta,
};
export default function InputPage() {
  return (
    <NuiPreviewContainer title={meta.title}>
      <Inputs />
    </NuiPreviewContainer>
  );
}
