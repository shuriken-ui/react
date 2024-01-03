import { BaseAvatar, BaseHeading } from "@shuriken-ui/react";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Mask",
  description: "Apply mask to different elements",
};
export default function MaskPage() {
  return (
    <div className="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32">
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          BaseAvatar mask
        </BaseHeading>
        <div className="grid grid-cols-8 gap-6">
          <BaseAvatar
            src="https://source.unsplash.com/random/"
            size="xl"
            className="nui-mask nui-mask-hex"
          />
          <BaseAvatar
            src="https://source.unsplash.com/random/"
            size="xl"
            className="nui-mask nui-mask-hexed"
          />
          <BaseAvatar
            src="https://source.unsplash.com/random/"
            size="xl"
            className="nui-mask nui-mask-deca"
          />
          <BaseAvatar
            src="https://source.unsplash.com/random/"
            size="xl"
            className="nui-mask nui-mask-blob"
          />
          <BaseAvatar
            src="https://source.unsplash.com/random/"
            size="xl"
            className="nui-mask nui-mask-diamond"
          />
        </div>
      </div>
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          img mask
        </BaseHeading>
        <div>
          <img
            src="https://source.unsplash.com/random/?technology"
            className="nui-mask nui-mask-hex hover:nui-mask-hexed max-w-xs"
          />
        </div>
      </div>
    </div>
  );
}
