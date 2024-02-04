import { Metadata } from "next";
import React from "react";
import Checkboxes from "./Checkboxes";
import NuiPreviewContainer from "@/components/NuiPreviewContainer";
import { getMeta } from "@/data/sidebar";

const meta = getMeta("form", "checkbox");

export const metadata: Metadata = {
  ...meta,
};
export default function CheckboxPage() {
  return (
    <NuiPreviewContainer title={meta.title}>
      <Checkboxes />
    </NuiPreviewContainer>
  );
}
