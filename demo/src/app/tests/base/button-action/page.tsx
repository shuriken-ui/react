import { BaseButtonAction, BaseHeading } from "@shuriken-ui/react";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Button Action",
  description: "Button variations",
};

function ButtonActionPage() {
  return (
    <div className="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32">
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          Button shape
        </BaseHeading>
        <div className="flex gap-2">
          <BaseButtonAction shape="straight">Button</BaseButtonAction>
          <BaseButtonAction color="muted" shape="rounded">
            Button
          </BaseButtonAction>
          <BaseButtonAction color="primary" shape="curved">
            Button
          </BaseButtonAction>
          <BaseButtonAction color="success" shape="full">
            Button
          </BaseButtonAction>
        </div>
      </div>
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          Button colors
        </BaseHeading>
        <div className="flex gap-2">
          <BaseButtonAction>Button</BaseButtonAction>
          <BaseButtonAction color="muted">Button</BaseButtonAction>
          <BaseButtonAction color="primary">Button</BaseButtonAction>
          <BaseButtonAction color="success">Button</BaseButtonAction>
          <BaseButtonAction color="info">Button</BaseButtonAction>
          <BaseButtonAction color="warning">Button</BaseButtonAction>
          <BaseButtonAction color="danger">Button</BaseButtonAction>
        </div>
      </div>
    </div>
  );
}

export default ButtonActionPage;
