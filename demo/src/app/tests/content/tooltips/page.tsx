import { BaseHeading } from "@shuriken-ui/react";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Tooltips",
  description: "Add a tooltip to any element.",
};

function TooltipsPage() {
  return (
    <div className="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32">
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          Tooltips
        </BaseHeading>
      </div>
      <div className="flex gap-2">
        <span
          data-nui-tooltip="default tooltip:&#xa;- test second line&#xa;- test thrid line"
        >
          hover me
        </span>
        <button data-nui-tooltip="default tooltip">focus me</button>
      </div>
      <div className="flex gap-2">
        <span
          data-nui-tooltip-position="down"
          data-nui-tooltip="default tooltip:&#xa;- test second line&#xa;- test thrid line"
        >
          hover me (down)
        </span>
        <button
          data-nui-tooltip-position="down"
          data-nui-tooltip="default tooltip"
        >
          focus me (down)
        </button>
      </div>
      <div className="flex gap-2">
        <span
          data-nui-tooltip-position="start"
          data-nui-tooltip="default tooltip:&#xa;- test second line&#xa;- test thrid line"
        >
          hover me (start)
        </span>
        <button
          data-nui-tooltip-position="start"
          data-nui-tooltip="default tooltip"
        >
          focus me (start)
        </button>
      </div>
      <div className="flex gap-2">
        <span
          data-nui-tooltip-position="end"
          data-nui-tooltip="default tooltip:&#xa;- test second line&#xa;- test thrid line"
        >
          hover me (end)
        </span>
        <button
          data-nui-tooltip-position="end"
          data-nui-tooltip="default tooltip"
        >
          focus me (end)
        </button>
      </div>
    </div>
  );
}

export default TooltipsPage;
