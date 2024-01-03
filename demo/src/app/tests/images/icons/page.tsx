import {
  BaseHeading,
  IconCheck,
  IconCheckCircle,
  IconChevronDown,
  IconClose,
  IconIndeterminate,
  IconMinus,
  IconMoon,
  IconPlus,
  IconSun,
} from "@shuriken-ui/react";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Icons",
  description: "SVG icons",
};

export default function IconPage() {
  return (
    <div className="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32">
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          Icons
        </BaseHeading>
        <div className="grid grid-cols-12 gap-6">
          <IconCheck />
          <IconIndeterminate />
          <IconCheckCircle />
          <IconChevronDown />
          <IconClose />
          <IconMoon />
          <IconPlus />
          <IconMinus />
          <IconSun />
        </div>
      </div>
    </div>
  );
}
