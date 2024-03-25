import React from "react";

import { getMeta } from "@/data/sidebar";
import { Metadata } from "next";
import NuiPreviewContainer from "@/components/NuiPreviewContainer";
import CheckboxAnimated from "./CheckboxAnimated";

const meta = getMeta("form", "checkboxAnimated");

export const metadata: Metadata = {
  ...meta,
};
export default function page() {
  return (
    <NuiPreviewContainer title={meta.title}>
      <CheckboxAnimated />
    </NuiPreviewContainer>
  );
}
