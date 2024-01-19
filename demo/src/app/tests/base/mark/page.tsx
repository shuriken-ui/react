import { BaseHeading } from "@shuriken-ui/react";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Mark",
  description: "Highlight text with a background color.",
};

function MarkPage() {
  return (
    <div className="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32">
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          Mark
        </BaseHeading>
      </div>
      <div className="flex gap-2">
        <mark className="nui-mark">test</mark>
      </div>
    </div>
  );
}

export default MarkPage;
