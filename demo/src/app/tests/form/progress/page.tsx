import {
  BaseHeading,
  BaseProgress,
  BaseProgressCircle,
} from "@shuriken-ui/react";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Progress",
  description: "Progress component",
};
function ProgressPage() {
  return (
    <div className="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32">
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          ProgressCircle Sizes
        </BaseHeading>
        <div className="grid grid-cols-5 gap-4">
          <BaseProgressCircle
            size={20}
            value={10}
            className="text-primary-500"
          />
          <BaseProgressCircle
            size={40}
            value={45}
            className="text-success-500"
          />
          <BaseProgressCircle size={60} value={50} className="text-info-500" />
          <BaseProgressCircle
            size={70}
            value={75}
            className="text-warning-500"
            animation={1}
          />
          <BaseProgressCircle
            size={80}
            value={100}
            max={200}
            className="text-danger-500"
            animation={false}
          />
        </div>
      </div>
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          Progress Shape
        </BaseHeading>
        <div className="grid grid-cols-4 gap-4">
          <BaseProgress shape="straight" value={75} />
          <BaseProgress shape="rounded" value={75} />
          <BaseProgress shape="curved" value={75} />
          <BaseProgress shape="full" value={75} />
        </div>
      </div>
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          Progress kind
        </BaseHeading>
        <div className="grid grid-cols-5 gap-4">
          <BaseProgress
            // kind="default"
            value={75}
          />
          <BaseProgress
            // kind="contrast"
            value={75}
          />
          <BaseProgress
          // kind="default"
          />
          <BaseProgress
          //  kind="contrast"
          />
        </div>
      </div>
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          Progress Colors
        </BaseHeading>
        <div className="grid grid-cols-5 gap-4">
          <BaseProgress color="primary" value={75} />
          <BaseProgress color="info" value={75} />
          <BaseProgress color="success" value={75} />
          <BaseProgress color="warning" value={75} />
          <BaseProgress color="danger" value={75} />
        </div>
      </div>
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          Progress Sizes
        </BaseHeading>
        <div className="grid grid-cols-5 gap-4">
          <BaseProgress size="xs" value={75} />
          <BaseProgress size="sm" value={75} />
          <BaseProgress size="md" value={75} />
          <BaseProgress size="lg" value={75} />
          <BaseProgress size="xl" value={75} />
        </div>
      </div>
    </div>
  );
}

export default ProgressPage;
