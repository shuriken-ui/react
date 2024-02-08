"use client";
import React, { Fragment, useState } from "react";
import NuiPreview from "@/components/NuiPreview";
import {
  BaseProgress,
  BaseButtonAction,
  BaseProgressCircle,
} from "@shuriken-ui/react";

const Progress = () => {
  const [progress, setProgress] = useState(25);
  const [progressCircle, setProgressCircle] = useState(25);

  console.log({ progress });

  return (
    <Fragment>
      <NuiPreview title="Bar" description="Progress component bar">
        <div className="max-w-xs space-y-4">
          <BaseProgress
            title="Default progress bar"
            size="sm"
            value={progress}
            color="primary"
          />
          <div className="flex justify-between gap-2">
            <BaseButtonAction
              type="button"
              className={
                progress === 25 ? "!border-primary-500 !text-primary-500" : ""
              }
              onClick={() => setProgress(25)}
            >
              25%
            </BaseButtonAction>
            <BaseButtonAction
              type="button"
              className={
                progress === 50 ? "!border-primary-500 !text-primary-500" : ""
              }
              onClick={() => setProgress(50)}
            >
              50%
            </BaseButtonAction>
            <BaseButtonAction
              type="button"
              className={
                progress === 75 ? "!border-primary-500 !text-primary-500" : ""
              }
              onClick={() => setProgress(75)}
            >
              75%
            </BaseButtonAction>
            <BaseButtonAction
              type="button"
              className={
                progress === 100 ? "!border-primary-500 !text-primary-500" : ""
              }
              onClick={() => setProgress(100)}
            >
              100%
            </BaseButtonAction>
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Circle" description="Progress component circle">
        <div className="max-w-xs space-y-4">
          <div className="flex items-end gap-2">
            <BaseProgressCircle
              title="Primary circle progress bar"
              size={45}
              value={progressCircle}
              className="text-primary-500"
            />
            <BaseProgressCircle
              title="Yellow circle progress bar"
              size={55}
              value={progressCircle}
              className="text-yellow-500"
            />
            <BaseProgressCircle
              title="Pink circle progress bar"
              size={75}
              value={progressCircle}
              className="text-pink-500"
            />
            <BaseProgressCircle
              title="Indigo circle progress bar"
              size={85}
              value={progressCircle}
              className="text-indigo-400"
            />
          </div>
          <div className="flex justify-between gap-2">
            <BaseButtonAction
              className={
                progressCircle === 25
                  ? "!border-primary-500 !text-primary-500"
                  : ""
              }
              onClick={() => setProgressCircle(25)}
            >
              25%
            </BaseButtonAction>
            <BaseButtonAction
              className={
                progressCircle === 50
                  ? "!border-primary-500 !text-primary-500"
                  : ""
              }
              onClick={() => setProgressCircle(50)}
            >
              50%
            </BaseButtonAction>
            <BaseButtonAction
              className={
                progressCircle === 75
                  ? "!border-primary-500 !text-primary-500"
                  : ""
              }
              onClick={() => setProgressCircle(75)}
            >
              75%
            </BaseButtonAction>
            <BaseButtonAction
              className={
                progressCircle === 100
                  ? "!border-primary-500 !text-primary-500"
                  : ""
              }
              onClick={() => setProgressCircle(100)}
            >
              100%
            </BaseButtonAction>
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Bar: size" description="Progress component bar sizes">
        <div className="max-w-xs space-y-4">
          <BaseProgress
            title="xs progress bar"
            size="xs"
            value={78}
            color="primary"
          />
          <BaseProgress
            title="sm progress bar"
            size="sm"
            value={78}
            color="primary"
          />
          <BaseProgress
            title="md progress bar"
            size="md"
            value={78}
            color="primary"
          />
          <BaseProgress
            title="lg progress bar"
            size="lg"
            value={78}
            color="primary"
          />
          <BaseProgress
            title="xl progress bar"
            size="xl"
            value={78}
            color="primary"
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Bar: color"
        description="Progress component bar colors"
      >
        <div className="max-w-xs space-y-4">
          <BaseProgress
            title="primary progress bar"
            size="sm"
            value={78}
            color="primary"
          />
          <BaseProgress
            title="success progress bar"
            size="sm"
            value={78}
            color="success"
          />
          <BaseProgress
            title="info progress bar"
            size="sm"
            value={78}
            color="info"
          />
          <BaseProgress
            title="warning progress bar"
            size="sm"
            value={78}
            color="warning"
          />
          <BaseProgress
            title="danger progress bar"
            size="sm"
            value={78}
            color="danger"
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Bar: indeterminate"
        description="Progress component bar indeterminate"
      >
        <div className="max-w-xs space-y-4">
          <BaseProgress
            title="indeterminate primary progress bar"
            size="sm"
            color="primary"
          />
          <BaseProgress
            title="indeterminate success progress bar"
            size="sm"
            color="success"
          />
          <BaseProgress
            title="indeterminate info progress bar"
            size="sm"
            color="info"
          />
          <BaseProgress
            title="indeterminate warning progress bar"
            size="sm"
            color="warning"
          />
          <BaseProgress
            title="indeterminate danger progress bar"
            size="sm"
            color="danger"
          />
        </div>
      </NuiPreview>
    </Fragment>
  );
};

export default Progress;
