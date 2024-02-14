"use client";
import React, { Fragment, useState } from "react";
import NuiPreview from "@/components/NuiPreview";
import {
  BaseTextarea,
  BaseHeading,
  BaseButton,
  BaseAvatar,
} from "@shuriken-ui/react";

const Textarea = () => {
  const [fields, setFields] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
    fifth: "",
  });

  const [value, setValue] = useState("");
  return (
    <Fragment>
      <NuiPreview title="Radius" description="Textarea component radiuses">
        <div className="grid gap-6 md:max-w-4xl md:grid-cols-3">
          <BaseTextarea
            value={fields.first}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, first: value }))
            }
            label="Rounded: none"
            rounded="none"
            placeholder="Write a message..."
            rows="1"
            autogrow
          />
          <BaseTextarea
            value={fields.second}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, second: value }))
            }
            label="Rounded: sm"
            rounded="sm"
            placeholder="Write a message..."
            rows="1"
            autogrow
          />
          <BaseTextarea
            value={fields.third}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, third: value }))
            }
            label="Rounded: md"
            rounded="md"
            placeholder="Write a message..."
            rows="1"
            autogrow
          />
          <BaseTextarea
            value={fields.fourth}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, fourth: value }))
            }
            label="Rounded: lg"
            rounded="lg"
            placeholder="Write a message..."
            rows="1"
            autogrow
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Contrast: default-contrast"
        description="Textarea component default contrast"
      >
        <div className="grid gap-6 md:max-w-4xl md:grid-cols-3 mt-10">
          <BaseTextarea
            value={value}
            onChange={setValue}
            contrast="default-contrast"
            size="sm"
            label="Message"
            rounded="md"
            placeholder="Write a message..."
            colorFocus
          />
          <BaseTextarea
            value={value}
            onChange={setValue}
            contrast="default-contrast"
            label="Message"
            rounded="md"
            placeholder="Write a message..."
            colorFocus
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Contrast: muted"
        description="Textarea component muted"
      >
        <div className="grid gap-6 md:max-w-4xl md:grid-cols-3 mt-10">
          <BaseTextarea
            value={value}
            onChange={setValue}
            contrast="muted"
            size="sm"
            label="Message"
            rounded="md"
            placeholder="Write a message..."
            colorFocus
          />
          <BaseTextarea
            value={value}
            onChange={setValue}
            contrast="muted"
            label="Message"
            rounded="md"
            placeholder="Write a message..."
            colorFocus
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Contrast: muted-contrast"
        description="Textarea component muted contrast"
      >
        <div className="grid gap-6 md:max-w-4xl md:grid-cols-3 mt-10">
          <BaseTextarea
            value={value}
            onChange={setValue}
            contrast="muted-contrast"
            size="sm"
            label="Message"
            rounded="md"
            placeholder="Write a message..."
            colorFocus
          />
          <BaseTextarea
            value={value}
            onChange={setValue}
            contrast="muted-contrast"
            label="Message"
            rounded="md"
            placeholder="Write a message..."
            colorFocus
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Label: float"
        description="Textarea component label float"
      >
        <div className="grid gap-6 md:max-w-4xl md:grid-cols-3 mt-10">
          <BaseTextarea
            value={value}
            onChange={setValue}
            size="sm"
            label="Message"
            rounded="md"
            placeholder="Write a message..."
            labelFloat
          />
          <BaseTextarea
            value={value}
            onChange={setValue}
            label="Message"
            rounded="md"
            placeholder="Write a message..."
            labelFloat
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Focus" description="Textarea component focus color">
        <div className="grid gap-6 md:max-w-4xl md:grid-cols-3 mt-10">
          <BaseTextarea
            value={value}
            onChange={setValue}
            size="sm"
            label="Message"
            rounded="md"
            placeholder="Write a message..."
            colorFocus
          />
          <BaseTextarea
            value={value}
            onChange={setValue}
            label="Message"
            rounded="md"
            placeholder="Write a message..."
            colorFocus
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Error" description="Textarea component errors">
        <div className="grid gap-6 md:max-w-4xl md:grid-cols-3 mt-10">
          <BaseTextarea
            value={value}
            onChange={setValue}
            size="sm"
            label="Message"
            rounded="md"
            placeholder="Write a message..."
            error="Please enter a message"
          />
          <BaseTextarea
            value={value}
            onChange={setValue}
            label="Message"
            rounded="md"
            placeholder="Write a message..."
            error="Please enter a message"
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Loading"
        description="Textarea component loading state"
      >
        <div className="grid gap-6 md:max-w-4xl md:grid-cols-3 mt-10">
          <BaseTextarea
            value={value}
            onChange={setValue}
            size="sm"
            label="Message"
            rounded="md"
            placeholder="Write a message..."
            loading
          />
          <BaseTextarea
            value={value}
            onChange={setValue}
            label="Message"
            rounded="md"
            placeholder="Write a message..."
            loading
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Disabled"
        description="Textarea component disabled state"
      >
        <div className="grid gap-6 md:max-w-4xl md:grid-cols-3 mt-10">
          <BaseTextarea
            value={value}
            onChange={setValue}
            size="sm"
            label="Message"
            rounded="md"
            placeholder="Write a message..."
            disabled
          />
          <BaseTextarea
            value={value}
            onChange={setValue}
            label="Message"
            rounded="md"
            placeholder="Write a message..."
            disabled
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Addon" description="Textarea component custom addon">
        <div className="grid gap-6 md:max-w-6xl md:grid-cols-3 mt-10">
          <BaseTextarea
            value={value}
            onChange={setValue}
            size="sm"
            label="Message"
            rounded="md"
            placeholder="Write a message..."
            rows={6}
            addon
            addonElement={
              <Fragment>
                <div className="flex items-center gap-2">
                  <BaseAvatar
                    src="https://tairo.cssninja.io/img/avatars/2.svg"
                    class="me-1"
                    size="xs"
                  />

                  <BaseHeading
                    as="h4"
                    size="sm"
                    weight="semibold"
                    className="text-muted-800 dark:text-white"
                  >
                    Maya
                  </BaseHeading>
                </div>

                <div className="flex items-center gap-2">
                  <BaseButton size="sm">Post Comment</BaseButton>
                </div>
              </Fragment>
            }
          ></BaseTextarea>
          <BaseTextarea
            value={value}
            onChange={setValue}
            label="Message"
            rounded="md"
            placeholder="Write a message..."
            rows={6}
            addon
            addonElement={
              <Fragment>
                <div className="flex items-center gap-2">
                  <BaseAvatar
                    src="https://tairo.cssninja.io/img/avatars/2.svg"
                    class="me-1"
                    size="xs"
                  />

                  <BaseHeading
                    as="h4"
                    size="sm"
                    weight="semibold"
                    className="text-muted-800 dark:text-white"
                  >
                    Maya
                  </BaseHeading>
                </div>

                <div className="flex items-center gap-2">
                  <BaseButton size="sm">Post Comment</BaseButton>
                </div>
              </Fragment>
            }
          ></BaseTextarea>
        </div>
      </NuiPreview>
    </Fragment>
  );
};

export default Textarea;
