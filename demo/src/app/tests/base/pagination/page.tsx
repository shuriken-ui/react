import { BasePagination } from "@shuriken-ui/react";
import { Metadata } from "next";
import React from "react";

import { getMeta } from "@/data/sidebar";
import NuiPreviewContainer from "@/components/NuiPreviewContainer";
import Pagination from "./Pagination";

const meta = getMeta("base", "pagination");

export const metadata: Metadata = {
  ...meta,
};

export default function PaginationPage() {
  return (
    <NuiPreviewContainer title={meta.title}>
      <Pagination />
    </NuiPreviewContainer>
  );
}
