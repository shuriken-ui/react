import React from "react";
import Radio from "./Radio";
import { Metadata } from "next";
import NuiPreviewContainer from "@/components/NuiPreviewContainer";

import { getMeta } from "@/data/sidebar";

const meta = getMeta("form", "radio");

export const metadata: Metadata = {
  ...meta,
};
function RadioPage() {
  return (
    <NuiPreviewContainer>
      <Radio />
    </NuiPreviewContainer>
  );
}

export default RadioPage;
