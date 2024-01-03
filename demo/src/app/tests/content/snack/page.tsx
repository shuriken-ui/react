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
        <div className="flex gap-3">
          <BaseSnack label="I am a default snack" />
          <BaseSnack
            label="I am a muted snack"
            //   kind="muted"
          />
          <BaseSnack label="I am a small snack" size="sm" />
        </div>
      </div>
    </div>
  );
}

export default SnackPage;
