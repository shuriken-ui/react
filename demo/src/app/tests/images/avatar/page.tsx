import { BaseAvatar, BaseHeading } from "@shuriken-ui/react";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Avatar",
  description: "SVG icons",
};

function AvatarPage() {
  return (
    <div className="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32">
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          BaseAvatar Shape
        </BaseHeading>
        <div className="grid grid-cols-8 gap-6">
          <div className="flex flex-col items-center">
            <BaseAvatar
              src="https://source.unsplash.com/random/"
              dot
              badgeSrc="https://source.unsplash.com/random/"
            />
            <small>default</small>
          </div>
          <div className="flex flex-col items-center">
            <BaseAvatar
              src="https://source.unsplash.com/random/"
              shape="straight"
              dot
              badgeSrc="https://source.unsplash.com/random/"
            />
            <small>straight</small>
          </div>
          <div className="flex flex-col items-center">
            <BaseAvatar
              src="https://source.unsplash.com/random/"
              shape="rounded"
              dot
            />
            <small>rounded</small>
          </div>
          <div className="flex flex-col items-center">
            <BaseAvatar
              src="https://source.unsplash.com/random/"
              shape="curved"
              dot
            />
            <small>curved</small>
          </div>
          <div className="flex flex-col items-center">
            <BaseAvatar
              src="https://source.unsplash.com/random/"
              shape="full"
              dot="warning"
              ring
            />
            <small>full</small>
          </div>
        </div>
      </div>
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          BaseAvatar Mask
        </BaseHeading>
        <div className="grid grid-cols-8 gap-6">
          <div className="flex flex-col items-center">
            <BaseAvatar
              src="https://source.unsplash.com/random/"
              shape="straight"
              mask="hex"
              dot
            />
            <small>hex</small>
          </div>
          <div className="flex flex-col items-center">
            <BaseAvatar
              src="https://source.unsplash.com/random/"
              shape="straight"
              mask="hexed"
              dot
            />
            <small>hexed</small>
          </div>
          <div className="flex flex-col items-center">
            <BaseAvatar
              src="https://source.unsplash.com/random/"
              shape="straight"
              mask="deca"
              dot
            />
            <small>deca</small>
          </div>
          <div className="flex flex-col items-center">
            <BaseAvatar
              src="https://source.unsplash.com/random/"
              shape="straight"
              mask="blob"
              dot
            />
            <small>blob</small>
          </div>
          <div className="flex flex-col items-center">
            <BaseAvatar
              src="https://source.unsplash.com/random/"
              shape="straight"
              mask="diamond"
              dot
            />
            <small>diamond</small>
          </div>
        </div>
      </div>
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          BaseAvatar Sizes
        </BaseHeading>
        <div className="grid grid-cols-9">
          <div className="flex flex-col items-center">
            <BaseAvatar
              src="https://source.unsplash.com/random/"
              size="xxs"
              dot
            />
            <small>xxs</small>
          </div>
          <div className="flex flex-col items-center">
            <BaseAvatar
              src="https://source.unsplash.com/random/"
              size="xs"
              dot
            />
            <small>xs</small>
          </div>
          <div className="flex flex-col items-center">
            <BaseAvatar
              src="https://source.unsplash.com/random/"
              size="sm"
              dot
            />
            <small>sm</small>
          </div>
          <div className="flex flex-col items-center">
            <BaseAvatar
              src="https://source.unsplash.com/random/"
              size="md"
              dot
            />
            <small>md</small>
          </div>
          <div className="flex flex-col items-center">
            <BaseAvatar
              src="https://source.unsplash.com/random/"
              size="lg"
              dot
            />
            <small>lg</small>
          </div>
          <div className="flex flex-col items-center">
            <BaseAvatar
              src="https://source.unsplash.com/random/"
              size="xl"
              dot
            />
            <small>xl</small>
          </div>
          <div className="flex flex-col items-center">
            <BaseAvatar
              src="https://source.unsplash.com/random/"
              size="2xl"
              dot
            />
            <small>2xl</small>
          </div>
          <div className="flex flex-col items-center">
            <BaseAvatar
              src="https://source.unsplash.com/random/"
              size="3xl"
              dot
            />
            <small>3xl</small>
          </div>
          <div className="flex flex-col items-center">
            <BaseAvatar
              src="https://source.unsplash.com/random/"
              size="4xl"
              dot
            />
            <small>4xl</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvatarPage;