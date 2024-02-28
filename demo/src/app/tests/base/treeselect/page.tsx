import React from "react";
import { getMeta } from "@/data/sidebar";
import { Metadata } from "next";
import TreeSelect from "./TreeSelect";
import NuiPreviewContainer from "@/components/NuiPreviewContainer";

const meta = getMeta("base", "treeselect");

export const metadata: Metadata = {
  ...meta,
};

export default function TreeSelectPage() {
  return (
    <NuiPreviewContainer title={meta.title}>
      <TreeSelect />
    </NuiPreviewContainer>
  );
}
