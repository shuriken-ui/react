import { Metadata } from "next";
import React from "react";
import { getMeta } from "@/data/sidebar";
import Listbox from "./Listbox";
import NuiPreviewContainer from "@/components/NuiPreviewContainer";

const meta = getMeta("form", "listbox");

export const metadata: Metadata = {
  ...meta,
};
export default function ListboxPage() {
  return (
    <NuiPreviewContainer title={meta.title}>
      <Listbox />
    </NuiPreviewContainer>
  );
}
