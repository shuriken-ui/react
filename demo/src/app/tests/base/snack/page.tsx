import { BaseHeading, BaseSnack } from "@shuriken-ui/react";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Snack",
  description: "Snack details",
};
function SnackPage() {
  return (
    <div className="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32">
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          Snack
        </BaseHeading>
        <div className="flex gap-3 flex-wrap">
          <BaseSnack
            label="I am a default snack with Image"
            image="https://source.unsplash.com/random/"
            size="md"
          />
          <BaseSnack
            label="I am a default snack with Icon"
            icon="carbon:notification"
          />
          <BaseSnack label="I am a default snack" />
          <BaseSnack label="I am a muted snack" color="muted" />
          <BaseSnack label="I am a small snack" size="sm" />
        </div>
      </div>
    </div>
  );
}

export default SnackPage;
