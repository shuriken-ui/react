import { BaseMessage } from '@shuriken-ui/react'
import { Metadata } from 'next'
import React from 'react'

import { getMeta } from '@/data/sidebar'
import NuiPreviewContainer from '@/components/NuiPreviewContainer'
import NuiPreview from '@/components/NuiPreview'

const meta = getMeta('base', 'message')

export const metadata: Metadata = {
  ...meta,
}
function MessagePage() {
  return (
    <NuiPreviewContainer title={meta.title}>
      <NuiPreview title="Color" description="Message component colors">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-2xl gap-4">
          <BaseMessage color="success">A successful message.</BaseMessage>
          <BaseMessage color="info">An information message.</BaseMessage>
          <BaseMessage color="warning">A warning message.</BaseMessage>
          <BaseMessage color="danger">A destructive message.</BaseMessage>
          <BaseMessage color="default">A default message.</BaseMessage>
          <BaseMessage color="muted">A muted message.</BaseMessage>
        </div>
      </NuiPreview>

      <NuiPreview title="Icon" description="Message component icons">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-2xl gap-4">
          <BaseMessage color="success" icon>
            A successful message.
          </BaseMessage>
          <BaseMessage color="info" icon>
            An information message.
          </BaseMessage>
          <BaseMessage color="warning" icon>
            A warning message.
          </BaseMessage>
          <BaseMessage color="danger" icon>
            A destructive message.
          </BaseMessage>
          <BaseMessage color="default" icon="mingcute:avalanche-avax-fill">
            A default message.
          </BaseMessage>
          <BaseMessage color="muted" icon="mingcute:desk-lamp-fill">
            A muted message.
          </BaseMessage>
        </div>
      </NuiPreview>

      <NuiPreview title="Radius" description="Message component radiuses">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-2xl gap-4">
          <BaseMessage color="success" icon rounded="sm">
            A successful message.
          </BaseMessage>
          <BaseMessage color="info" icon rounded="md">
            An information message.
          </BaseMessage>
          <BaseMessage color="warning" icon rounded="lg">
            A warning message.
          </BaseMessage>
          <BaseMessage color="danger" icon rounded="full">
            A destructive message.
          </BaseMessage>
        </div>
      </NuiPreview>

      <NuiPreview title="Closable" description="Message component close button">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-2xl gap-4">
          <BaseMessage color="success" icon rounded="sm" closable>
            A successful message.
          </BaseMessage>
          <BaseMessage color="info" icon rounded="md" closable>
            An information message.
          </BaseMessage>
          <BaseMessage color="warning" icon rounded="lg" closable>
            A warning message.
          </BaseMessage>
          <BaseMessage color="danger" icon rounded="full" closable>
            A destructive message.
          </BaseMessage>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  )
}

export default MessagePage
