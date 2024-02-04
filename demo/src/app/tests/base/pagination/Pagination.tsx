"use client";

import React, { Fragment } from "react";
import NuiPreview from "@/components/NuiPreview";
import { BasePagination } from "@shuriken-ui/react";
import { useSearchParams } from "next/navigation";

const Pagination = () => {
  const searchParams = useSearchParams();

  const currentPage = Number.parseInt(searchParams.get("page") || "1");
  return (
    <Fragment>
      <NuiPreview
        title="Rounded: none"
        description="Pagination component radius none"
      >
        <BasePagination
          itemPerPage={8}
          totalItems={512}
          currentPage={currentPage}
          maxLinksDisplayed={5}
          rounded="none"
        />
      </NuiPreview>

      <NuiPreview
        title="Rounded: sm"
        description="Pagination component radius sm"
      >
        <BasePagination
          itemPerPage={8}
          totalItems={512}
          currentPage={currentPage}
          maxLinksDisplayed={5}
          rounded="sm"
        />
      </NuiPreview>

      <NuiPreview
        title="Rounded: md"
        description="Pagination component radius md"
      >
        <BasePagination
          itemPerPage={8}
          totalItems={512}
          currentPage={currentPage}
          maxLinksDisplayed={5}
          rounded="md"
        />
      </NuiPreview>

      <NuiPreview
        title="Rounded: lg"
        description="Pagination component radius lg"
      >
        <BasePagination
          itemPerPage={8}
          totalItems={512}
          currentPage={currentPage}
          maxLinksDisplayed={5}
          rounded="lg"
        />
      </NuiPreview>

      <NuiPreview
        title="Rounded: full"
        description="Pagination component radius full"
      >
        <BasePagination
          itemPerPage={8}
          totalItems={512}
          currentPage={currentPage}
          maxLinksDisplayed={5}
          rounded="full"
        />
      </NuiPreview>
    </Fragment>
  );
};

export default Pagination;
