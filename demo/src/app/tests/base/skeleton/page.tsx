import { BaseHeading } from "@shuriken-ui/react";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Skeleton",
  description: "SVG icons",
};

function SkeletonPage() {
  return (
    <div className="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32">
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          Skeleton
        </BaseHeading>
      </div>
      <div className="flex gap-2">
        <div className="nui-placeload animate-nui-placeload w-20 h-20 rounded-full"></div>
        <div className="nui-placeload animate-nui-placeload w-96 h-20"></div>
      </div>
    </div>
  );
}

export default SkeletonPage;
