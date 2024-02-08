import React from "react";
import { getMeta } from "@/data/sidebar";
import { Metadata } from "next";
import NuiPreviewContainer from "@/components/NuiPreviewContainer";
import Progress from "./Progress";

const meta = getMeta("base", "progress");

export const metadata: Metadata = {
  ...meta,
};

export default function ProgressPage() {
  return (
    <NuiPreviewContainer title={meta.title}>
      <Progress />
    </NuiPreviewContainer>
  );
}
