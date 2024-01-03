"use client";

import { Icon } from "@iconify/react";
import { BaseHeading, BaseIconBox } from "@shuriken-ui/react";
import React from "react";

const IconBox = () => {
  return (
    <div className="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32">
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          Iconbox Shape
        </BaseHeading>
        <div className="grid grid-cols-4 gap-3">
          <BaseIconBox shape="straight" color="default">
            <Icon icon="ph:heartbeat-duotone" className="w-6 h-6" />
          </BaseIconBox>
          <BaseIconBox shape="rounded" color="primary">
            <Icon icon="ph:heartbeat-duotone" className="w-6 h-6" />
          </BaseIconBox>
          <BaseIconBox shape="curved" color="info">
            <Icon icon="ph:heartbeat-duotone" className="w-6 h-6" />
          </BaseIconBox>
          <BaseIconBox shape="full" color="success">
            <Icon icon="ph:heartbeat-duotone" className="w-6 h-6" />
          </BaseIconBox>
        </div>
      </div>
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          Iconbox Size
        </BaseHeading>
        <div className="grid grid-cols-6 gap-3">
          <BaseIconBox size="xs" color="default" bordered>
            <Icon icon="ph:heartbeat-duotone" className="w-6 h-6" />
          </BaseIconBox>
          <BaseIconBox size="sm" color="primary" bordered>
            <Icon icon="ph:heartbeat-duotone" className="w-6 h-6" />
          </BaseIconBox>
          <BaseIconBox size="md" color="info" bordered>
            <Icon icon="ph:heartbeat-duotone" className="w-6 h-6" />
          </BaseIconBox>
          <BaseIconBox size="lg" color="success" bordered>
            <Icon icon="ph:heartbeat-duotone" className="w-6 h-6" />
          </BaseIconBox>
          <BaseIconBox size="xl" color="warning" bordered>
            <Icon icon="ph:heartbeat-duotone" className="w-6 h-6" />
          </BaseIconBox>
          <BaseIconBox size="2xl" color="danger" bordered>
            <Icon icon="ph:heartbeat-duotone" className="w-6 h-6" />
          </BaseIconBox>
        </div>
      </div>
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          Iconbox solid
        </BaseHeading>
        <div className="grid grid-cols-7 gap-3">
          <BaseIconBox color="default" flavor="solid">
            <Icon icon="ph:heartbeat-duotone" className="w-6 h-6" />
          </BaseIconBox>
          <BaseIconBox color="invert" flavor="solid">
            <Icon icon="ph:heartbeat-duotone" className="w-6 h-6" />
          </BaseIconBox>
          <BaseIconBox color="primary" flavor="solid">
            <Icon icon="ph:heartbeat-duotone" className="w-6 h-6" />
          </BaseIconBox>
          <BaseIconBox color="info" flavor="solid">
            <Icon icon="ph:heartbeat-duotone" className="w-6 h-6" />
          </BaseIconBox>
          <BaseIconBox color="success" flavor="solid">
            <Icon icon="ph:heartbeat-duotone" className="w-6 h-6" />
          </BaseIconBox>
          <BaseIconBox color="warning" flavor="solid">
            <Icon icon="ph:heartbeat-duotone" className="w-6 h-6" />
          </BaseIconBox>
          <BaseIconBox color="danger" flavor="solid">
            <Icon icon="ph:heartbeat-duotone" className="w-6 h-6" />
          </BaseIconBox>
        </div>
      </div>
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          Iconbox outline
        </BaseHeading>
        <div className="grid grid-cols-7 gap-3">
          <BaseIconBox color="default" flavor="outline">
            <Icon icon="ph:heartbeat-duotone" className="w-6 h-6" />
          </BaseIconBox>
          <BaseIconBox color="invert" flavor="outline">
            <Icon icon="ph:heartbeat-duotone" className="w-6 h-6" />
          </BaseIconBox>
          <BaseIconBox color="primary" flavor="outline">
            <Icon icon="ph:heartbeat-duotone" className="w-6 h-6" />
          </BaseIconBox>
          <BaseIconBox color="info" flavor="outline">
            <Icon icon="ph:heartbeat-duotone" className="w-6 h-6" />
          </BaseIconBox>
          <BaseIconBox color="success" flavor="outline">
            <Icon icon="ph:heartbeat-duotone" className="w-6 h-6" />
          </BaseIconBox>
          <BaseIconBox color="warning" flavor="outline">
            <Icon icon="ph:heartbeat-duotone" className="w-6 h-6" />
          </BaseIconBox>
          <BaseIconBox color="danger" flavor="outline">
            <Icon icon="ph:heartbeat-duotone" className="w-6 h-6" />
          </BaseIconBox>
        </div>
      </div>
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          Iconbox custom
        </BaseHeading>
        <div className="flex gap-3">
          <BaseIconBox size="lg" className="bg-fuchsia-500/10 text-fuchsia-500">
            <Icon icon="ph:heartbeat-duotone" className="w-6 h-6" />
          </BaseIconBox>
          <BaseIconBox size="lg" className="bg-indigo-500/10 text-indigo-500">
            <Icon icon="ph:heartbeat-duotone" className="w-6 h-6" />
          </BaseIconBox>
          <BaseIconBox size="lg" className="bg-purple-500/10 text-purple-500">
            <Icon icon="ph:heartbeat-duotone" className="w-6 h-6" />
          </BaseIconBox>
        </div>
      </div>
    </div>
  );
};

export default IconBox;
