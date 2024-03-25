import React from "react";
import NuiPreviewContainer from "@/components/NuiPreviewContainer";

import { getMeta } from "@/data/sidebar";
import { Metadata } from "next";
import Autocomplete from "./Autocomplete";

const meta = getMeta("form", "autocomplete");

export const metadata: Metadata = {
  ...meta,
};
export default function AutocompletePage() {
  return (
    <NuiPreviewContainer title={meta.title}>
      <Autocomplete />
    </NuiPreviewContainer>
  );
}
