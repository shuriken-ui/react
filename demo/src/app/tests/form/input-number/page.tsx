import { Metadata } from "next";
import React from "react";
import InputNumbers from "./InputNumber";
import NuiPreviewContainer from "@/components/NuiPreviewContainer";

import { getMeta } from "@/data/sidebar";

const meta = getMeta("form", "input");

export const metadata: Metadata = {
  ...meta,
};
export default function InputPage() {
  return (
    <NuiPreviewContainer title={meta.title}>
      <InputNumbers />
    </NuiPreviewContainer>
  );
}
