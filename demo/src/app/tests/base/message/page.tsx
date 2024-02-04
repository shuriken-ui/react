import { BaseHeading, BaseMessage } from "@shuriken-ui/react";
import { Metadata } from "next";
import React from "react";

import { getMeta } from "@/data/sidebar";
import NuiPreviewContainer from "@/components/NuiPreviewContainer";
import NuiPreview from "@/components/NuiPreview";

const meta = getMeta("base", "message");

export const metadata: Metadata = {
  ...meta,
};
function MessagePage() {
  return (
    <NuiPreviewContainer title={meta.title}>
      <NuiPreview title="Type" description="Message component types">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-2xl gap-4">
          <BaseMessage>A successful message.</BaseMessage>
          <BaseMessage type="info">An information message.</BaseMessage>
          <BaseMessage type="warning">A warning message.</BaseMessage>
          <BaseMessage type="danger">A destructive message.</BaseMessage>
        </div>
      </NuiPreview>

      <NuiPreview title="Icon" description="Message component icons">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-2xl gap-4">
          <BaseMessage icon>A successful message.</BaseMessage>
          <BaseMessage type="info" icon>
            An information message.
          </BaseMessage>
          <BaseMessage type="warning" icon>
            A warning message.
          </BaseMessage>
          <BaseMessage type="danger" icon>
            A destructive message.
          </BaseMessage>
        </div>
      </NuiPreview>

      <NuiPreview title="Radius" description="Message component radiuses">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-2xl gap-4">
          <BaseMessage icon rounded="sm">
            A successful message.
          </BaseMessage>
          <BaseMessage type="info" icon rounded="md">
            An information message.
          </BaseMessage>
          <BaseMessage type="warning" icon rounded="lg">
            A warning message.
          </BaseMessage>
          <BaseMessage type="danger" icon rounded="full">
            A destructive message.
          </BaseMessage>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  );
}

export default MessagePage;
