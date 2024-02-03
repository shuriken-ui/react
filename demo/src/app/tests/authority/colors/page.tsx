import React from "react";

import { Metadata } from "next";

import { getMeta } from "@/data/sidebar";
import NuiPreview from "@/components/NuiPreview";
import NuiPreviewContainer from "@/components/NuiPreviewContainer";

const meta = getMeta("authority", "colors");

export const metadata: Metadata = {
  ...meta,
};

function Colors() {
  return (
    <NuiPreviewContainer title={meta.title}>
      <NuiPreview title="Primary" description="The primary color">
        <div className="flex flex-wrap items-end gap-2">
          <div
            className="bg-primary-50 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-primary-50"
          ></div>
          <div
            className="bg-primary-100 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-primary-100"
          ></div>
          <div
            className="bg-primary-200 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-primary-200"
          ></div>
          <div
            className="bg-primary-300 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-primary-300"
          ></div>
          <div
            className="bg-primary-400 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-primary-400"
          ></div>
          <div
            className="bg-primary-500 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-primary-500"
          ></div>
          <div
            className="bg-primary-600 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-primary-600"
          ></div>
          <div
            className="bg-primary-700 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-primary-700"
          ></div>
          <div
            className="bg-primary-800 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-primary-800"
          ></div>
          <div
            className="bg-primary-900 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-primary-900"
          ></div>
          <div
            className="bg-primary-950 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-primary-950"
          ></div>
        </div>
      </NuiPreview>

      <NuiPreview title="Info" description="The info color">
        <div className="flex flex-wrap items-end gap-2">
          <div
            className="bg-info-50 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-info-50"
          ></div>
          <div
            className="bg-info-100 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-info-100"
          ></div>
          <div
            className="bg-info-200 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-info-200"
          ></div>
          <div
            className="bg-info-300 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-info-300"
          ></div>
          <div
            className="bg-info-400 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-info-400"
          ></div>
          <div
            className="bg-info-500 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-info-500"
          ></div>
          <div
            className="bg-info-600 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-info-600"
          ></div>
          <div
            className="bg-info-700 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-info-700"
          ></div>
          <div
            className="bg-info-800 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-info-800"
          ></div>
          <div
            className="bg-info-900 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-info-900"
          ></div>
          <div
            className="bg-info-950 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-info-950"
          ></div>
        </div>
      </NuiPreview>

      <NuiPreview title="Success" description="The success color">
        <div className="flex flex-wrap items-end gap-2">
          <div
            className="bg-success-50 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-success-50"
          ></div>
          <div
            className="bg-success-100 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-success-100"
          ></div>
          <div
            className="bg-success-200 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-success-200"
          ></div>
          <div
            className="bg-success-300 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-success-300"
          ></div>
          <div
            className="bg-success-400 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-success-400"
          ></div>
          <div
            className="bg-success-500 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-success-500"
          ></div>
          <div
            className="bg-success-600 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-success-600"
          ></div>
          <div
            className="bg-success-700 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-success-700"
          ></div>
          <div
            className="bg-success-800 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-success-800"
          ></div>
          <div
            className="bg-success-900 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-success-900"
          ></div>
          <div
            className="bg-success-950 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-success-950"
          ></div>
        </div>
      </NuiPreview>

      <NuiPreview title="Warning" description="The warning color">
        <div className="flex flex-wrap items-end gap-2">
          <div
            className="bg-warning-50 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-warning-50"
          ></div>
          <div
            className="bg-warning-100 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-warning-100"
          ></div>
          <div
            className="bg-warning-200 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-warning-200"
          ></div>
          <div
            className="bg-warning-300 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-warning-300"
          ></div>
          <div
            className="bg-warning-400 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-warning-400"
          ></div>
          <div
            className="bg-warning-500 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-warning-500"
          ></div>
          <div
            className="bg-warning-600 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-warning-600"
          ></div>
          <div
            className="bg-warning-700 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-warning-700"
          ></div>
          <div
            className="bg-warning-800 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-warning-800"
          ></div>
          <div
            className="bg-warning-900 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-warning-900"
          ></div>
          <div
            className="bg-warning-950 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-warning-950"
          ></div>
        </div>
      </NuiPreview>

      <NuiPreview title="Danger" description="The danger color">
        <div className="flex flex-wrap items-end gap-2">
          <div
            className="bg-danger-50 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-danger-50"
          ></div>
          <div
            className="bg-danger-100 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-danger-100"
          ></div>
          <div
            className="bg-danger-200 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-danger-200"
          ></div>
          <div
            className="bg-danger-300 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-danger-300"
          ></div>
          <div
            className="bg-danger-400 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-danger-400"
          ></div>
          <div
            className="bg-danger-500 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-danger-500"
          ></div>
          <div
            className="bg-danger-600 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-danger-600"
          ></div>
          <div
            className="bg-danger-700 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-danger-700"
          ></div>
          <div
            className="bg-danger-800 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-danger-800"
          ></div>
          <div
            className="bg-danger-900 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-danger-900"
          ></div>
          <div
            className="bg-danger-950 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-danger-950"
          ></div>
        </div>
      </NuiPreview>

      <NuiPreview title="Muted" description="The muted color">
        <div className="flex flex-wrap items-end gap-2">
          <div
            className="bg-muted-50 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-muted-50"
          ></div>
          <div
            className="bg-muted-100 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-muted-100"
          ></div>
          <div
            className="bg-muted-200 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-muted-200"
          ></div>
          <div
            className="bg-muted-300 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-muted-300"
          ></div>
          <div
            className="bg-muted-400 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-muted-400"
          ></div>
          <div
            className="bg-muted-500 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-muted-500"
          ></div>
          <div
            className="bg-muted-600 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-muted-600"
          ></div>
          <div
            className="bg-muted-700 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-muted-700"
          ></div>
          <div
            className="bg-muted-800 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-muted-800"
          ></div>
          <div
            className="bg-muted-900 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-muted-900"
          ></div>
          <div
            className="bg-muted-950 h-8 w-8 rounded-lg"
            data-nui-tooltip="bg-muted-950"
          ></div>
        </div>
      </NuiPreview>

      <NuiPreview title="Helpers" description="Nui bg helpers">
        <div className="flex flex-wrap items-end gap-2">
          <div
            className="nui-bg-white h-8 w-8 rounded-lg"
            data-nui-tooltip="nui-bg-white"
          ></div>
          <div
            className="nui-bg-50 h-8 w-8 rounded-lg"
            data-nui-tooltip="nui-bg-50"
          ></div>
          <div
            className="nui-bg-200 h-8 w-8 rounded-lg"
            data-nui-tooltip="nui-bg-200"
          ></div>
          <div
            className="nui-bg-300 h-8 w-8 rounded-lg"
            data-nui-tooltip="nui-bg-300"
          ></div>
          <div
            className="nui-bg-400 h-8 w-8 rounded-lg"
            data-nui-tooltip="nui-bg-400"
          ></div>
          <div
            className="nui-bg-500 h-8 w-8 rounded-lg"
            data-nui-tooltip="nui-bg-500"
          ></div>
          <div
            className="nui-bg-600 h-8 w-8 rounded-lg"
            data-nui-tooltip="nui-bg-600"
          ></div>
          <div
            className="nui-bg-700 h-8 w-8 rounded-lg"
            data-nui-tooltip="nui-bg-700"
          ></div>
          <div
            className="nui-bg-800 h-8 w-8 rounded-lg"
            data-nui-tooltip="nui-bg-800"
          ></div>
          <div
            className="nui-bg-900 h-8 w-8 rounded-lg"
            data-nui-tooltip="nui-bg-900"
          ></div>
          <div
            className="nui-bg-950 h-8 w-8 rounded-lg"
            data-nui-tooltip="nui-bg-950"
          ></div>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  );
}

export default Colors;
