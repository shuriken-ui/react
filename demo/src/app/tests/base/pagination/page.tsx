import { BaseHeading, BasePagination } from "@shuriken-ui/react";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Pagination",
  description: "SVG icons",
};

export default function PaginationPage() {
  return (
    <div className="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32">
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          Pagination Shape
        </BaseHeading>
        <div className="grid grid-cols-2 gap-4">
          <BasePagination
            itemPerPage={4}
            totalItems={200}
            currentPage={4}
            maxLinksDisplayed={2}
            shape="straight"
          />
          <BasePagination
            itemPerPage={4}
            totalItems={200}
            currentPage={4}
            maxLinksDisplayed={2}
            shape="rounded"
          />
          <BasePagination
            itemPerPage={4}
            totalItems={200}
            currentPage={4}
            maxLinksDisplayed={2}
            shape="smooth"
          />
          <BasePagination
            itemPerPage={4}
            totalItems={200}
            currentPage={4}
            maxLinksDisplayed={2}
            shape="curved"
          />
          <BasePagination
            itemPerPage={4}
            totalItems={200}
            currentPage={4}
            maxLinksDisplayed={2}
            shape="full"
          />
        </div>
      </div>
    </div>
  );
}
