import React from "react";
import { getMeta } from "@/data/sidebar";
import Tabs from "./Tabs";
import NuiPreviewContainer from "@/components/NuiPreviewContainer";
import { Metadata } from "next";

const meta = getMeta("base", "tabs");

export const metadata: Metadata = {
  ...meta,
};

export default function TabsPage() {
  return (
    <NuiPreviewContainer title={meta.title}>
      <Tabs />
    </NuiPreviewContainer>
  );
}
