import { Metadata } from "next";
import React from "react";
import { getMeta } from "@/data/sidebar";
import NuiPreviewContainer from "@/components/NuiPreviewContainer";
import Select from "./Select";

const meta = getMeta("form", "select");

export const metadata: Metadata = {
  ...meta,
};
export default function SelectPage() {
  return (
    <NuiPreviewContainer title={meta.title}>
      <Select />
    </NuiPreviewContainer>
  );
}
