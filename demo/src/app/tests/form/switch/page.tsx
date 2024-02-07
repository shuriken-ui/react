import React from "react";
import Switch from "./Switch";
import { Metadata } from "next";
import NuiPreviewContainer from "@/components/NuiPreviewContainer";

import { getMeta } from "@/data/sidebar";

const meta = getMeta("form", "switch");

export const metadata: Metadata = {
  ...meta,
};

function SwitchPage() {
  return (
    <NuiPreviewContainer title={meta.title}>
      <Switch />
    </NuiPreviewContainer>
  );
}

export default SwitchPage;
