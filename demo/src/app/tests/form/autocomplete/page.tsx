import { Metadata } from "next";
import React from "react";
import Autocompletes from "./Autocompletes";
import NuiPreviewContainer from "@/components/NuiPreviewContainer";
import { getMeta } from "@/data/sidebar";

const meta = getMeta("form", "autocomplete");

export const metadata: Metadata = {
  ...meta,
};
export default function CheckboxPage() {
  return (
    <NuiPreviewContainer title={meta.title}>
      <Autocompletes />
    </NuiPreviewContainer>
  );
}
