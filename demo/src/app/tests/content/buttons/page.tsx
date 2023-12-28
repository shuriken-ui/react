import { BaseButton, BaseHeading } from "@shuriken-ui/react";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Buttons",
  description: "Button variations",
};

function ButtonsPage() {
  return (
    <div className="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32">
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          Button sizes
        </BaseHeading>
        <div className="flex gap-2">
          <BaseButton size="sm">Button</BaseButton>
          <BaseButton color="muted" size="md">
            Button
          </BaseButton>
          <BaseButton color="primary" size="lg">
            Button
          </BaseButton>
          <BaseButton color="success" size="xl">
            Button
          </BaseButton>
        </div>
      </div>
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          Button Solid
        </BaseHeading>
        <div className="flex gap-2">
          <BaseButton flavor="solid" shadow="flat">
            Button
          </BaseButton>
          <BaseButton color="muted" flavor="solid" shadow="flat">
            Button
          </BaseButton>
          <BaseButton color="primary" flavor="solid" shadow="flat">
            Button
          </BaseButton>
          <BaseButton color="success" flavor="solid" shadow="flat">
            Button
          </BaseButton>
          <BaseButton color="info" flavor="solid" shadow="flat">
            Button
          </BaseButton>
          <BaseButton color="warning" flavor="solid" shadow="flat">
            Button
          </BaseButton>
          <BaseButton color="danger" flavor="solid" shadow="flat">
            Button
          </BaseButton>
          <BaseButton color="light" flavor="solid" shadow="flat">
            Button
          </BaseButton>
        </div>
      </div>
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          Button Pastel
        </BaseHeading>
        <div className="flex gap-2">
          <BaseButton flavor="pastel" shadow="flat">
            Button
          </BaseButton>
          <BaseButton color="muted" flavor="pastel" shadow="flat">
            Button
          </BaseButton>
          <BaseButton color="primary" flavor="pastel" shadow="flat">
            Button
          </BaseButton>
          <BaseButton color="success" flavor="pastel" shadow="flat">
            Button
          </BaseButton>
          <BaseButton color="info" flavor="pastel" shadow="flat">
            Button
          </BaseButton>
          <BaseButton color="warning" flavor="pastel" shadow="flat">
            Button
          </BaseButton>
          <BaseButton color="danger" flavor="pastel" shadow="flat">
            Button
          </BaseButton>
          <BaseButton color="light" flavor="pastel" shadow="flat">
            Button
          </BaseButton>
        </div>
      </div>
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          Button Outline
        </BaseHeading>
        <div className="flex gap-2">
          <BaseButton flavor="outline" shadow="flat">
            Button
          </BaseButton>
          <BaseButton color="muted" flavor="outline" shadow="flat">
            Button
          </BaseButton>
          <BaseButton color="primary" flavor="outline" shadow="flat">
            Button
          </BaseButton>
          <BaseButton color="success" flavor="outline" shadow="flat">
            Button
          </BaseButton>
          <BaseButton color="info" flavor="outline" shadow="flat">
            Button
          </BaseButton>
          <BaseButton color="warning" flavor="outline" shadow="flat">
            Button
          </BaseButton>
          <BaseButton color="danger" flavor="outline" shadow="flat">
            Button
          </BaseButton>
          <BaseButton color="light" flavor="outline" shadow="flat">
            Button
          </BaseButton>
        </div>
      </div>
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          Button shadow
        </BaseHeading>
        <div className="flex gap-2">
          <BaseButton shadow="flat">Button</BaseButton>
          <BaseButton color="muted" shadow="flat">
            Button
          </BaseButton>
          <BaseButton color="primary" shadow="flat">
            Button
          </BaseButton>
          <BaseButton color="success" shadow="flat">
            Button
          </BaseButton>
          <BaseButton color="info" shadow="flat">
            Button
          </BaseButton>
          <BaseButton color="warning" shadow="flat">
            Button
          </BaseButton>
          <BaseButton color="danger" shadow="flat">
            Button
          </BaseButton>
        </div>
      </div>
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          Button shadow hover
        </BaseHeading>
        <div className="flex gap-2">
          <BaseButton shadow="hover">Button</BaseButton>
          <BaseButton color="muted" shadow="hover">
            Button
          </BaseButton>
          <BaseButton color="primary" shadow="hover" badge badge-pulse>
            Button
          </BaseButton>
          <BaseButton color="success" shadow="hover">
            Button
          </BaseButton>
          <BaseButton color="info" shadow="hover">
            Button
          </BaseButton>
          <BaseButton color="warning" shadow="hover">
            Button
          </BaseButton>
          <BaseButton color="danger" shadow="hover">
            Button
          </BaseButton>
        </div>
      </div>
    </div>
  );
}

export default ButtonsPage;
