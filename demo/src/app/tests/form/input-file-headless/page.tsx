import React from "react";
import NuiPreviewContainer from "@/components/NuiPreviewContainer";

import { getMeta } from "@/data/sidebar";
import { Metadata } from "next";
import InputFileHeadless from "./InputFileHeadless";

const meta = getMeta("form", "inputFileHeadless");

export const metadata: Metadata = {
  ...meta,
};
export default function InputFileHeadlessPage() {
  return (
    <NuiPreviewContainer title={meta.title}>
      <InputFileHeadless />
    </NuiPreviewContainer>
  );
}
