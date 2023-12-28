"use client";
import { Icon } from "@iconify/react";
import { BaseHeading, BaseButtonIcon } from "@shuriken-ui/react";
import React from "react";

const ButtonIcon = () => {
  return (
    <div className="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32">
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          Button icon shape
        </BaseHeading>
        <div className="flex gap-2">
          <BaseButtonIcon shape="straight">
            <Icon icon="ph:moon-duotone" className="w-5 h-5" />
          </BaseButtonIcon>
          <BaseButtonIcon shape="rounded">
            <Icon icon="ph:github-logo-duotone" className="w-5 h-5" />
          </BaseButtonIcon>
          <BaseButtonIcon shape="curved">
            <Icon icon="ph:game-controller-duotone" className="w-5 h-5" />
          </BaseButtonIcon>
          <BaseButtonIcon shape="full">
            <Icon icon="ph:heart-duotone" className="w-5 h-5" />
          </BaseButtonIcon>
        </div>
      </div>
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          Button icon colors
        </BaseHeading>
        <div className="flex gap-2">
          <BaseButtonIcon shape="full" color="default">
            <Icon icon="ph:heart-duotone" className="w-5 h-5" />
          </BaseButtonIcon>
          <BaseButtonIcon shape="full" color="muted">
            <Icon icon="ph:heart-duotone" className="w-5 h-5" />
          </BaseButtonIcon>
          <BaseButtonIcon shape="full" color="primary">
            <Icon icon="ph:heart-duotone" className="w-5 h-5" />
          </BaseButtonIcon>
          <BaseButtonIcon shape="full" color="info">
            <Icon icon="ph:heart-duotone" className="w-5 h-5" />
          </BaseButtonIcon>
          <BaseButtonIcon shape="full" color="success">
            <Icon icon="ph:heart-duotone" className="w-5 h-5" />
          </BaseButtonIcon>
          <BaseButtonIcon shape="full" color="warning">
            <Icon icon="ph:heart-duotone" className="w-5 h-5" />
          </BaseButtonIcon>
          <BaseButtonIcon shape="full" color="danger">
            <Icon icon="ph:heart-duotone" className="w-5 h-5" />
          </BaseButtonIcon>
          <BaseButtonIcon shape="full" color="none">
            <Icon icon="ph:heart-duotone" className="w-5 h-5" />
          </BaseButtonIcon>
        </div>
      </div>
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          Button icon size
        </BaseHeading>
        <div className="flex gap-2">
          <BaseButtonIcon shape="full" color="primary" size="sm">
            <Icon icon="ph:heart-duotone" className="w-5 h-5" />
          </BaseButtonIcon>
          <BaseButtonIcon shape="full" color="primary" size="md">
            <Icon icon="ph:heart-duotone" className="w-5 h-5" />
          </BaseButtonIcon>
          <BaseButtonIcon shape="full" color="primary" size="lg">
            <Icon icon="ph:heart-duotone" className="w-5 h-5" />
          </BaseButtonIcon>
        </div>
      </div>
    </div>
  );
};

export default ButtonIcon;
