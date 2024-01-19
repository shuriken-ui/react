import React from "react";

import { BaseHeading } from "@shuriken-ui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colors",
  description: "Basic colors",
};

function Colors() {
  return (
    <div className="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32">
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          Colors
        </BaseHeading>
        <div className="grid grid-cols-6 gap-6">
          <div className="bg-primary-500 aspect-1 flex items-center justify-center">
            <span className="text-primary-100">primary</span>
          </div>
          <div className="bg-success-500 aspect-1 flex items-center justify-center">
            <span className="text-success-100">success</span>
          </div>
          <div className="bg-warning-500 aspect-1 flex items-center justify-center">
            <span className="text-warning-100">warning</span>
          </div>
          <div className="bg-danger-500 aspect-1 flex items-center justify-center">
            <span className="text-danger-100">danger</span>
          </div>
          <div className="bg-info-500 aspect-1 flex items-center justify-center">
            <span className="text-info-100">info</span>
          </div>
          <div className="bg-muted-500 aspect-1 flex items-center justify-center">
            <span className="text-muted-100">muted</span>
          </div>
        </div>
      </div>

      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          nui helpers
        </BaseHeading>
        <div className="grid grid-cols-6 gap-6">
          <div className="nui-bg-white aspect-1 flex flex-col items-center justify-center">
            <span className="nui-text-black">nui-bg-white</span>
            <small className="nui-text-black">nui-text-black</small>
          </div>
          <div className="nui-bg-50 aspect-1 flex flex-col items-center justify-center">
            <span className="nui-text-950">nui-bg-50</span>
            <small className="nui-text-950">nui-text-950</small>
          </div>
          <div className="nui-bg-50 aspect-1 flex flex-col items-center justify-center">
            <span className="nui-text-900">nui-bg-50</span>
            <small className="nui-text-900">nui-text-900</small>
          </div>
          <div className="nui-bg-100 aspect-1 flex flex-col items-center justify-center">
            <span className="nui-text-900">nui-bg-100</span>
            <small className="nui-text-900">nui-text-900</small>
          </div>
          <div className="nui-bg-200 aspect-1 flex flex-col items-center justify-center">
            <span className="nui-text-800">nui-bg-200</span>
            <small className="nui-text-800">nui-text-800</small>
          </div>
          <div className="nui-bg-300 aspect-1 flex flex-col items-center justify-center">
            <span className="nui-text-700">nui-bg-300</span>
            <small className="nui-text-700">nui-text-700</small>
          </div>
          <div className="nui-bg-400 aspect-1 flex flex-col items-center justify-center">
            <span className="nui-text-600">nui-bg-400</span>
            <small className="nui-text-600">nui-text-600</small>
          </div>
          <div className="nui-bg-500 aspect-1 flex flex-col items-center justify-center">
            <span className="nui-text-500">nui-bg-500</span>
            <small className="nui-text-500">nui-text-500</small>
          </div>
          <div className="nui-bg-600 aspect-1 flex flex-col items-center justify-center">
            <span className="nui-text-400">nui-bg-600</span>
            <small className="nui-text-400">nui-text-400</small>
          </div>
          <div className="nui-bg-700 aspect-1 flex flex-col items-center justify-center">
            <span className="nui-text-300">nui-bg-700</span>
            <small className="nui-text-300">nui-text-300</small>
          </div>
          <div className="nui-bg-800 aspect-1 flex flex-col items-center justify-center">
            <span className="nui-text-200">nui-bg-800</span>
            <small className="nui-text-200">nui-text-200</small>
          </div>
          <div className="nui-bg-900 aspect-1 flex flex-col items-center justify-center">
            <span className="nui-text-100">nui-bg-900</span>
            <small className="nui-text-100">nui-text-100</small>
          </div>
          <div className="nui-bg-950 aspect-1 flex flex-col items-center justify-center">
            <span className="nui-text-50">nui-bg-950</span>
            <small className="nui-text-50">nui-text-50</small>
          </div>
          <div className="nui-bg-black aspect-1 flex flex-col items-center justify-center">
            <span className="nui-text-white">nui-bg-black</span>
            <small className="nui-text-white">nui-text-white</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Colors;
