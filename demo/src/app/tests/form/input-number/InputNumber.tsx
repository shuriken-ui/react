"use client";

import {
  BaseInputNumber,
} from "@shuriken-ui/react";
import React, { Fragment, useState } from "react";
import NuiPreview from "@/components/NuiPreview";
import Iconify from "@/components/Iconify";

const InputNumbers = () => {
  const [fields, setFields] = useState({
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    fifth: 0,
    sixth: 0,
  });

  return (
    <Fragment>
      <NuiPreview title="Radius" description="Inputs radiuses">
      <div className="grid gap-6 md:max-w-4xl md:grid-cols-3">
          <BaseInputNumber
            inputMode="numeric"
            value={fields.first}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, first: value }))
            }
            rounded="none"
            label="Rounded: none"
            placeholder="Quantity"
          />
          <BaseInputNumber
            inputMode="numeric"
            value={fields.second}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, second: value }))
            }
            rounded="sm"
            label="Rounded: sm"
            placeholder="Quantity"
          />
          <BaseInputNumber
            inputMode="numeric"
            value={fields.third}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, third: value }))
            }
            rounded="md"
            label="Rounded: md"
            placeholder="Quantity"
          />
          <BaseInputNumber
            inputMode="numeric"
            value={fields.fourth}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, fourth: value }))
            }
            rounded="lg"
            label="Rounded: lg"
            placeholder="Quantity"
          />
          <BaseInputNumber
            inputMode="numeric"
            value={fields.fourth}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, fourth: value }))
            }
            rounded="full"
            label="Rounded: full"
            placeholder="Quantity"
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Size" description="Input component sizes">
        <div className="flex flex-wrap items-end gap-3 max-w-5xl">
          <div className="flex-1">
            <BaseInputNumber
              value={fields.first}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, first: value }))
              }
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Quantity"
            />
          </div>
          <div className="flex-1">
            <BaseInputNumber
              value={fields.second}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, second: value }))
              }
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Quantity"
            />
          </div>
          <div className="flex-1">
            <BaseInputNumber
              value={fields.third}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, third: value }))
              }
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Quantity"
            />
          </div>
          <div className="flex-1">
            <BaseInputNumber
              value={fields.third}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, third: value }))
              }
              size="xl"
              rounded="md"
              label="Size: xl"
              placeholder="Quantity"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Contrast: default-contrast"
        description="Input component default contrast"
      >
        <div className="flex flex-wrap items-end gap-3 max-w-5xl">
          <div className="flex-1">
            <BaseInputNumber
              value={fields.first}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, first: value }))
              }
              contrast="default-contrast"
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Quantity"
            />
          </div>
          <div className="flex-1">
            <BaseInputNumber
              value={fields.second}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, second: value }))
              }
              contrast="default-contrast"
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Quantity"
            />
          </div>
          <div className="flex-1">
            <BaseInputNumber
              value={fields.third}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, third: value }))
              }
              contrast="default-contrast"
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Quantity"
            />
          </div>
          <div className="flex-1">
            <BaseInputNumber
              value={fields.third}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, third: value }))
              }
              contrast="default-contrast"
              size="xl"
              rounded="md"
              label="Size: xl"
              placeholder="Quantity"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Contrast: muted" description="Input component muted">
        <div className="flex flex-wrap items-end gap-3 max-w-5xl">
          <div className="flex-1">
            <BaseInputNumber
              value={fields.first}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, first: value }))
              }
              contrast="muted"
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Quantity"
            />
          </div>
          <div className="flex-1">
            <BaseInputNumber
              value={fields.second}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, second: value }))
              }
              contrast="muted"
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Quantity"
            />
          </div>
          <div className="flex-1">
            <BaseInputNumber
              value={fields.third}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, third: value }))
              }
              contrast="muted"
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Quantity"
            />
          </div>
          <div className="flex-1">
            <BaseInputNumber
              value={fields.third}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, third: value }))
              }
              contrast="muted"
              size="xl"
              rounded="md"
              label="Size: xl"
              placeholder="Quantity"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Contrast: muted-contrast"
        description="Input component muted contrast"
      >
        <div className="flex flex-wrap items-end gap-3 max-w-5xl">
          <div className="flex-1">
            <BaseInputNumber
              value={fields.first}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, first: value }))
              }
              contrast="muted-contrast"
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Quantity"
            />
          </div>
          <div className="flex-1">
            <BaseInputNumber
              value={fields.second}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, second: value }))
              }
              contrast="muted-contrast"
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Quantity"
            />
          </div>
          <div className="flex-1">
            <BaseInputNumber
              value={fields.third}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, third: value }))
              }
              contrast="muted-contrast"
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Quantity"
            />
          </div>
          <div className="flex-1">
            <BaseInputNumber
              value={fields.third}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, third: value }))
              }
              contrast="muted-contrast"
              size="xl"
              rounded="md"
              label="Size: xl"
              placeholder="Quantity"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Icon" description="Input component icons">
        <div className="flex flex-wrap items-end gap-3 max-w-5xl">
          <div className="flex-1">
            <BaseInputNumber
              value={fields.first}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, first: value }))
              }
              icon="lucide:star"
              iconIncrement="lucide:chevron-right"
              iconDecrement="lucide:chevron-left"
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Quantity"
            />
          </div>
          <div className="flex-1">
            <BaseInputNumber
              value={fields.second}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, second: value }))
              }
              icon="lucide:star"
              iconIncrement="lucide:alarm-plus"
              iconDecrement="lucide:alarm-minus"
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Quantity"
            />
          </div>
          <div className="flex-1">
            <BaseInputNumber
              value={fields.third}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, third: value }))
              }
              icon="lucide:star"
              iconIncrement="lucide:chevron-right"
              iconDecrement="lucide:chevron-left"
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Quantity"
            />
          </div>
          <div className="flex-1">
            <BaseInputNumber
              value={fields.third}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, third: value }))
              }
              icon="lucide:star"
              iconIncrement="lucide:alarm-plus"
              iconDecrement="lucide:alarm-minus"
              size="xl"
              rounded="md"
              label="Size: xl"
              placeholder="Quantity"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Focus" description="Input component color focus">
        <div className="flex flex-wrap items-end gap-3 max-w-5xl">
          <div className="flex-1">
            <BaseInputNumber
              value={fields.first}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, first: value }))
              }
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Quantity"
              colorFocus
            />
          </div>
          <div className="flex-1">
            <BaseInputNumber
              value={fields.second}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, second: value }))
              }
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Quantity"
              colorFocus
            />
          </div>
          <div className="flex-1">
            <BaseInputNumber
              value={fields.third}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, third: value }))
              }
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Quantity"
              colorFocus
            />
          </div>
          <div className="flex-1">
            <BaseInputNumber
              value={fields.third}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, third: value }))
              }
              size="xl"
              rounded="md"
              label="Size: xl"
              placeholder="Quantity"
              colorFocus
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Error" description="Input component errors">
        <div className="flex flex-wrap items-end gap-3 max-w-5xl">
          <div className="flex-1">
            <BaseInputNumber
              value={fields.first}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, first: value }))
              }
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Quantity"
              error="Please enter a valid value"
            />
          </div>
          <div className="flex-1">
            <BaseInputNumber
              value={fields.second}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, second: value }))
              }
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Quantity"
              error="Please enter a valid value"
            />
          </div>
          <div className="flex-1">
            <BaseInputNumber
              value={fields.third}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, third: value }))
              }
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Quantity"
              error="Please enter a valid value"
            />
          </div>
          <div className="flex-1">
            <BaseInputNumber
              value={fields.third}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, third: value }))
              }
              size="xl"
              rounded="md"
              label="Size: xl"
              placeholder="Quantity"
              error="Please enter a valid value"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Error: icon" description="Input component errors">
        <div className="flex flex-wrap items-end gap-3 max-w-5xl">
          <div className="flex-1">
            <BaseInputNumber
              value={fields.first}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, first: value }))
              }
              icon="solar:user-speak-outline"
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Quantity"
              error="Please enter a valid value"
            />
          </div>
          <div className="flex-1">
            <BaseInputNumber
              value={fields.second}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, second: value }))
              }
              icon="solar:user-speak-outline"
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Quantity"
              error="Please enter a valid value"
            />
          </div>
          <div className="flex-1">
            <BaseInputNumber
              value={fields.third}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, third: value }))
              }
              icon="solar:user-speak-outline"
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Quantity"
              error="Please enter a valid value"
            />
          </div>
          <div className="flex-1">
            <BaseInputNumber
              value={fields.third}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, third: value }))
              }
              icon="solar:user-speak-outline"
              size="xl"
              rounded="md"
              label="Size: xl"
              placeholder="Quantity"
              error="Please enter a valid value"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Label: float"
        description="Input Number component label float"
      >
        <div className="grid gap-6 md:max-w-lg md:grid-cols-2">
          <BaseInputNumber
            value={fields.first}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, first: value }))
            }
            size="sm"
            rounded="md"
            label="Size: sm"
            placeholder="Quantity"
            labelFloat
          />
          <BaseInputNumber
            value={fields.fourth}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, fourth: value }))
            }
            icon="lucide:star"
            size="sm"
            rounded="md"
            label="Size: sm"
            placeholder="Quantity"
            labelFloat
          />
          <BaseInputNumber
            value={fields.second}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, second: value }))
            }
            size="md"
            rounded="md"
            label="Size: md"
            placeholder="Quantity"
            labelFloat
          />
          <BaseInputNumber
            value={fields.fifth}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, fifth: value }))
            }
            icon="lucide:star"
            size="md"
            rounded="md"
            label="Size: md"
            placeholder="Quantity"
            labelFloat
          />
          <BaseInputNumber
            value={fields.third}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, third: value }))
            }
            size="lg"
            rounded="md"
            label="Size: lg"
            placeholder="Quantity"
            labelFloat
          />
          <BaseInputNumber
            value={fields.sixth}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, sixth: value }))
            }
            icon="lucide:star"
            size="lg"
            rounded="md"
            label="Size: lg"
            placeholder="Quantity"
            labelFloat
          />
          <BaseInputNumber
            value={fields.third}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, third: value }))
            }
            size="xl"
            rounded="md"
            label="Size: xl"
            placeholder="Quantity"
            labelFloat
          />
          <BaseInputNumber
            value={fields.sixth}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, sixth: value }))
            }
            icon="lucide:star"
            size="xl"
            rounded="md"
            label="Size: xl"
            placeholder="Quantity"
            labelFloat
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Disabled" description="Input component disabled state">
        <div className="flex flex-wrap items-end gap-3 max-w-5xl">
          <div className="flex-1">
            <BaseInputNumber
              value={fields.first}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, first: value }))
              }
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Quantity"
              disabled
            />
          </div>
          <div className="flex-1">
            <BaseInputNumber
              value={fields.second}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, second: value }))
              }
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Quantity"
              disabled
            />
          </div>
          <div className="flex-1">
            <BaseInputNumber
              value={fields.third}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, third: value }))
              }
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Quantity"
              disabled
            />
          </div>
          <div className="flex-1">
            <BaseInputNumber
              value={fields.third}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, third: value }))
              }
              size="xl"
              rounded="md"
              label="Size: xl"
              placeholder="Quantity"
              disabled
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Loading"
        description="Input Number component loading state"
      >
        <div className="grid gap-6 md:max-w-lg md:grid-cols-2">
          <BaseInputNumber
            value={fields.first}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, first: value }))
            }
            size="sm"
            rounded="md"
            label="Size: sm"
            placeholder="Quantity"
            loading
          />
          <BaseInputNumber
            value={fields.fourth}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, fourth: value }))
            }
            icon="lucide:star"
            size="sm"
            rounded="md"
            label="Size: sm"
            placeholder="Quantity"
            loading
          />
          <BaseInputNumber
            value={fields.second}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, second: value }))
            }
            size="md"
            rounded="md"
            label="Size: md"
            placeholder="Quantity"
            loading
          />
          <BaseInputNumber
            value={fields.fifth}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, fifth: value }))
            }
            icon="lucide:star"
            size="md"
            rounded="md"
            label="Size: md"
            placeholder="Quantity"
            loading
          />
          <BaseInputNumber
            value={fields.third}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, third: value }))
            }
            size="lg"
            rounded="md"
            label="Size: lg"
            placeholder="Quantity"
            loading
          />
          <BaseInputNumber
            value={fields.sixth}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, sixth: value }))
            }
            icon="lucide:star"
            size="lg"
            rounded="md"
            label="Size: lg"
            placeholder="Quantity"
            loading
          />
          <BaseInputNumber
            value={fields.third}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, third: value }))
            }
            size="xl"
            rounded="md"
            label="Size: xl"
            placeholder="Quantity"
            loading
          />
          <BaseInputNumber
            value={fields.sixth}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, sixth: value }))
            }
            icon="lucide:star"
            size="xl"
            rounded="md"
            label="Size: xl"
            placeholder="Quantity"
            loading
          />
        </div>
      </NuiPreview>
    </Fragment>
  );
};

export default InputNumbers;
