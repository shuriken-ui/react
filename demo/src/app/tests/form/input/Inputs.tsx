"use client";

import { BaseHeading, BaseInput } from "@shuriken-ui/react";
import React, { useState } from "react";

const Inputs = () => {
  const [text, setText] = useState<string | number>();
  return (
    <div className="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32">
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          BaseInput - Shape && label-float
        </BaseHeading>
        <div className="grid grid-cols-5 gap-4">
          <BaseInput
            labelFloat
            value={text}
            onChange={(value) => setText(value)}
            icon="lucide:search"
            size="sm"
            // kind="default"
            shape="straight"
            label="Straight Input"
          ></BaseInput>
          <BaseInput
            labelFloat
            value={text}
            onChange={(value) => setText(value)}
            icon="lucide:search"
            size="sm"
            // kind="default"
            shape="rounded"
            label="Rounded Input"
          ></BaseInput>
          <BaseInput
            labelFloat
            value={text}
            onChange={(value) => setText(value)}
            icon="lucide:search"
            size="sm"
            // kind="default"
            shape="smooth"
            label="Smooth Input"
          ></BaseInput>
          <BaseInput
            labelFloat
            value={text}
            onChange={(value) => setText(value)}
            icon="lucide:search"
            size="sm"
            // kind="default"
            shape="curved"
            label="Curved Input"
          ></BaseInput>
          <BaseInput
            labelFloat
            value={text}
            onChange={(value) => setText(value)}
            icon="lucide:search"
            size="sm"
            // kind="default"
            shape="full"
            label="Full Input"
          ></BaseInput>
        </div>
      </div>
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          {/* BaseInput - Kind */}
        </BaseHeading>
        <div className="grid grid-cols-4 gap-4">
          <BaseInput
            value={text}
            onChange={(value) => setText(value)}
            placeholder="Placeholder text"
            icon="lucide:search"
            size="sm"
            // kind="default"
            shape="curved"
            label="Default Input"
          ></BaseInput>
          <BaseInput
            value={text}
            onChange={(value) => setText(value)}
            placeholder="Placeholder text"
            icon="lucide:search"
            size="sm"
            // kind="default-contrast"
            shape="curved"
            label="Default contrast Input"
          ></BaseInput>
          <BaseInput
            value={text}
            onChange={(value) => setText(value)}
            placeholder="Placeholder text"
            icon="lucide:search"
            size="sm"
            // kind="muted"
            shape="curved"
            label="Muted Input"
          ></BaseInput>
          <BaseInput
            value={text}
            onChange={(value) => setText(value)}
            placeholder="Placeholder text"
            icon="lucide:search"
            size="sm"
            // kind="muted-contrast"
            shape="curved"
            label="Muted contrast Input"
          ></BaseInput>
        </div>
      </div>
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          BaseInput - Sizes
        </BaseHeading>
        <div className="grid grid-cols-3 gap-4">
          <BaseInput
            value={text}
            onChange={(value) => setText(value)}
            placeholder="Placeholder text"
            icon="lucide:search"
            size="sm"
            shape="curved"
            label="SM Input"
          ></BaseInput>
          <BaseInput
            value={text}
            onChange={(value) => setText(value)}
            placeholder="Placeholder text"
            icon="lucide:search"
            size="md"
            shape="curved"
            label="MD Input"
          ></BaseInput>
          <BaseInput
            value={text}
            onChange={(value) => setText(value)}
            placeholder="Placeholder text"
            icon="lucide:search"
            size="lg"
            shape="curved"
            label="LG Input"
          ></BaseInput>
        </div>
      </div>
    </div>
  );
};

export default Inputs;
