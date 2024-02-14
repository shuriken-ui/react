import { Metadata } from "next";
import React from "react";
import { getMeta } from "@/data/sidebar";
import NuiPreviewContainer from "@/components/NuiPreviewContainer";
import Textarea from "./Textarea";

const meta = getMeta("form", "textarea");

export const metadata: Metadata = {
  ...meta,
};
export default function TextareaPage() {
  return (
    <NuiPreviewContainer title={meta.title}>
      <Textarea />
    </NuiPreviewContainer>
  );
}
