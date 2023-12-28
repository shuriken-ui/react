import { BaseButtonClose, BaseHeading } from "@shuriken-ui/react";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Button Close",
  description: "Button Close variations",
};

function ButtonClosePage() {
  return (
    <div className="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32">
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          Button shape
        </BaseHeading>
        <div className="flex gap-2">
          <BaseButtonClose color="primary" shape="straight">
            Button
          </BaseButtonClose>
          <BaseButtonClose color="primary" shape="rounded">
            Button
          </BaseButtonClose>
          <BaseButtonClose color="primary" shape="smooth">
            Button
          </BaseButtonClose>
          <BaseButtonClose color="primary" shape="curved">
            Button
          </BaseButtonClose>
          <BaseButtonClose color="primary" shape="full">
            Button
          </BaseButtonClose>
        </div>
      </div>
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          Button colors
        </BaseHeading>
        <div className="flex gap-2">
          <BaseButtonClose>Button</BaseButtonClose>
          <BaseButtonClose color="muted">Button</BaseButtonClose>
          <BaseButtonClose color="primary">Button</BaseButtonClose>
          <BaseButtonClose color="success">Button</BaseButtonClose>
          <BaseButtonClose color="info">Button</BaseButtonClose>
          <BaseButtonClose color="warning">Button</BaseButtonClose>
          <BaseButtonClose color="danger">Button</BaseButtonClose>
        </div>
      </div>
    </div>
  );
}

export default ButtonClosePage;
