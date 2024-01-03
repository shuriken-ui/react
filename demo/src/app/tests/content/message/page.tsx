import { BaseHeading, BaseMessage } from "@shuriken-ui/react";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Message",
  description: "Base message component",
};

function MessagePage() {
  return (
    <div className="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32">
      <div>
        <div>
          <BaseHeading size="xl" weight="medium" className="mb-10">
            Message Shape
          </BaseHeading>
        </div>
        <div className="grid grid-cols-5 gap-2">
          <BaseMessage
            type="muted"
            shape="straight"
            message="A muted message ..."
            closable
          />
          <BaseMessage
            type="default"
            shape="rounded"
            message="A default message ..."
            closable
          />
          <BaseMessage
            type="primary"
            shape="smooth"
            message="A primary message ..."
            closable
          />
          <BaseMessage
            type="info"
            shape="curved"
            message="An info message ..."
            closable
          />
          <BaseMessage
            type="success"
            shape="full"
            message="A success message ..."
            closable
          />
        </div>
      </div>
      <div>
        <div>
          <BaseHeading size="xl" weight="medium" className="mb-10">
            Message type
          </BaseHeading>
        </div>
        <div className="grid grid-cols-7 gap-2">
          <BaseMessage
            type="default"
            message="A default message ..."
            closable
          />
          <BaseMessage type="muted" message="A muted message ..." closable />
          <BaseMessage
            type="primary"
            message="A primary message ..."
            closable
          />
          <BaseMessage type="info" message="An info message ..." closable />
          <BaseMessage
            type="success"
            message="A success message ..."
            closable
          />
          <BaseMessage
            type="warning"
            message="A warning message ..."
            closable
          />
          <BaseMessage type="danger" message="A danger message ..." closable />
        </div>
      </div>
    </div>
  );
}

export default MessagePage;
