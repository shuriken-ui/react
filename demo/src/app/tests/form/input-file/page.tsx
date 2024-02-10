import React from "react";
import InputFile from "./InputFile";
import NuiPreviewContainer from "@/components/NuiPreviewContainer";

import { getMeta } from "@/data/sidebar";
import { Metadata } from "next";

const meta = getMeta("form", "inputFile");

export const metadata: Metadata = {
  ...meta,
};
export default function InputFilePage() {
  return (
    <NuiPreviewContainer title={meta.title}>
      <InputFile />
    </NuiPreviewContainer>
  );
}
