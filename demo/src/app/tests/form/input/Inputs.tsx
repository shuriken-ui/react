"use client";

import {
  BaseInput,
  BaseButtonGroup,
  BaseSelect,
  BaseButton,
} from "@shuriken-ui/react";
import React, { Fragment, useState } from "react";
import NuiPreview from "@/components/NuiPreview";
import Iconify from "@/components/Iconify";

const Inputs = () => {
  const [fields, setFields] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
    fifth: "",
    sixth: "",
  });

  const [amount, setAmount] = useState<number | undefined>();
  const [taxes, setTaxes] = useState("With taxes");

  return (
    <Fragment>
      <NuiPreview title="Radius" description="Inputs radiuses">
        <div className="grid gap-6 md:max-w-4xl md:grid-cols-3">
          <BaseInput
            value={fields.first}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, first: value }))
            }
            rounded="none"
            label="Rounded: none"
            placeholder="Ex: username"
          />
          <BaseInput
            value={fields.second}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, second: value }))
            }
            rounded="sm"
            label="Rounded: sm"
            placeholder="Ex: username"
          />
          <BaseInput
            value={fields.third}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, third: value }))
            }
            rounded="md"
            label="Rounded: md"
            placeholder="Ex: username"
          />
          <BaseInput
            value={fields.fourth}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, fourth: value }))
            }
            rounded="lg"
            label="Rounded: lg"
            placeholder="Ex: username"
          />
          <BaseInput
            value={fields.fourth}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, fourth: value }))
            }
            rounded="full"
            label="Rounded: full"
            placeholder="Ex: username"
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Size" description="Input component sizes">
        <div className="flex flex-wrap items-end gap-3 max-w-5xl">
          <div className="flex-1">
            <BaseInput
              value={fields.first}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, first: value }))
              }
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Ex: username"
            />
          </div>
          <div className="flex-1">
            <BaseInput
              value={fields.second}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, second: value }))
              }
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Ex: username"
            />
          </div>
          <div className="flex-1">
            <BaseInput
              value={fields.third}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, third: value }))
              }
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Ex: username"
            />
          </div>
          <div className="flex-1">
            <BaseInput
              value={fields.third}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, third: value }))
              }
              size="xl"
              rounded="md"
              label="Size: xl"
              placeholder="Ex: username"
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
            <BaseInput
              value={fields.first}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, first: value }))
              }
              contrast="default-contrast"
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Ex: username"
            />
          </div>
          <div className="flex-1">
            <BaseInput
              value={fields.second}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, second: value }))
              }
              contrast="default-contrast"
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Ex: username"
            />
          </div>
          <div className="flex-1">
            <BaseInput
              value={fields.third}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, third: value }))
              }
              contrast="default-contrast"
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Ex: username"
            />
          </div>
          <div className="flex-1">
            <BaseInput
              value={fields.third}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, third: value }))
              }
              contrast="default-contrast"
              size="xl"
              rounded="md"
              label="Size: xl"
              placeholder="Ex: username"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Contrast: muted" description="Input component muted">
        <div className="flex flex-wrap items-end gap-3 max-w-5xl">
          <div className="flex-1">
            <BaseInput
              value={fields.first}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, first: value }))
              }
              contrast="muted"
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Ex: username"
            />
          </div>
          <div className="flex-1">
            <BaseInput
              value={fields.second}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, second: value }))
              }
              contrast="muted"
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Ex: username"
            />
          </div>
          <div className="flex-1">
            <BaseInput
              value={fields.third}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, third: value }))
              }
              contrast="muted"
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Ex: username"
            />
          </div>
          <div className="flex-1">
            <BaseInput
              value={fields.third}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, third: value }))
              }
              contrast="muted"
              size="xl"
              rounded="md"
              label="Size: xl"
              placeholder="Ex: username"
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
            <BaseInput
              value={fields.first}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, first: value }))
              }
              contrast="muted-contrast"
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Ex: username"
            />
          </div>
          <div className="flex-1">
            <BaseInput
              value={fields.second}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, second: value }))
              }
              contrast="muted-contrast"
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Ex: username"
            />
          </div>
          <div className="flex-1">
            <BaseInput
              value={fields.third}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, third: value }))
              }
              contrast="muted-contrast"
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Ex: username"
            />
          </div>
          <div className="flex-1">
            <BaseInput
              value={fields.third}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, third: value }))
              }
              contrast="muted-contrast"
              size="xl"
              rounded="md"
              label="Size: xl"
              placeholder="Ex: username"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Icon" description="Input component icons">
        <div className="flex flex-wrap items-end gap-3 max-w-5xl">
          <div className="flex-1">
            <BaseInput
              value={fields.first}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, first: value }))
              }
              icon="lucide:search"
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Ex: username"
            />
          </div>
          <div className="flex-1">
            <BaseInput
              value={fields.second}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, second: value }))
              }
              icon="lucide:search"
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Ex: username"
            />
          </div>
          <div className="flex-1">
            <BaseInput
              value={fields.third}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, third: value }))
              }
              icon="lucide:search"
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Ex: username"
            />
          </div>
          <div className="flex-1">
            <BaseInput
              value={fields.third}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, third: value }))
              }
              icon="lucide:search"
              size="xl"
              rounded="md"
              label="Size: xl"
              placeholder="Ex: username"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Focus" description="Input component color focus">
        <div className="flex flex-wrap items-end gap-3 max-w-5xl">
          <div className="flex-1">
            <BaseInput
              value={fields.first}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, first: value }))
              }
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Ex: username"
              colorFocus
            />
          </div>
          <div className="flex-1">
            <BaseInput
              value={fields.second}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, second: value }))
              }
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Ex: username"
              colorFocus
            />
          </div>
          <div className="flex-1">
            <BaseInput
              value={fields.third}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, third: value }))
              }
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Ex: username"
              colorFocus
            />
          </div>
          <div className="flex-1">
            <BaseInput
              value={fields.third}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, third: value }))
              }
              size="xl"
              rounded="md"
              label="Size: xl"
              placeholder="Ex: username"
              colorFocus
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Error" description="Input component errors">
        <div className="flex flex-wrap items-end gap-3 max-w-5xl">
          <div className="flex-1">
            <BaseInput
              value={fields.first}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, first: value }))
              }
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Ex: username"
              error="Please enter a valid username"
            />
          </div>
          <div className="flex-1">
            <BaseInput
              value={fields.second}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, second: value }))
              }
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Ex: username"
              error="Please enter a valid username"
            />
          </div>
          <div className="flex-1">
            <BaseInput
              value={fields.third}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, third: value }))
              }
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Ex: username"
              error="Please enter a valid username"
            />
          </div>
          <div className="flex-1">
            <BaseInput
              value={fields.third}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, third: value }))
              }
              size="xl"
              rounded="md"
              label="Size: xl"
              placeholder="Ex: username"
              error="Please enter a valid username"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Error: icon" description="Input component errors">
        <div className="flex flex-wrap items-end gap-3 max-w-5xl">
          <div className="flex-1">
            <BaseInput
              value={fields.first}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, first: value }))
              }
              icon="solar:user-speak-outline"
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Ex: username"
              error="Please enter a valid username"
            />
          </div>
          <div className="flex-1">
            <BaseInput
              value={fields.second}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, second: value }))
              }
              icon="solar:user-speak-outline"
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Ex: username"
              error="Please enter a valid username"
            />
          </div>
          <div className="flex-1">
            <BaseInput
              value={fields.third}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, third: value }))
              }
              icon="solar:user-speak-outline"
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Ex: username"
              error="Please enter a valid username"
            />
          </div>
          <div className="flex-1">
            <BaseInput
              value={fields.third}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, third: value }))
              }
              icon="solar:user-speak-outline"
              size="xl"
              rounded="md"
              label="Size: xl"
              placeholder="Ex: username"
              error="Please enter a valid username"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Slot: action" description="Input component actions">
        <div className="flex flex-wrap items-end gap-3 max-w-5xl">
          <div className="flex-1">
            <BaseInput
              value={fields.first}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, first: value }))
              }
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Ex: username"
              action={
                <button
                  type="button"
                  data-nui-tooltip="Save"
                  className="absolute top-0 end-0 z-[1] flex items-center justify-center h-8 w-8 text-muted-400 hover:text-primary-500 transition-colors duration-300"
                >
                  <Iconify icon="lucide:save" className="w-4 h-4" />
                </button>
              }
            ></BaseInput>
          </div>
          <div className="flex-1">
            <BaseInput
              value={fields.second}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, second: value }))
              }
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Ex: username"
              action={
                <button
                  type="button"
                  data-nui-tooltip="Save"
                  className="absolute top-0 end-0 z-[1] flex items-center justify-center h-10 w-10 text-muted-400 hover:text-primary-500 transition-colors duration-300"
                >
                  <Iconify icon="lucide:save" className="w-4 h-4" />
                </button>
              }
            ></BaseInput>
          </div>
          <div className="flex-1">
            <BaseInput
              value={fields.third}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, third: value }))
              }
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Ex: username"
              action={
                <button
                  type="button"
                  data-nui-tooltip="Save"
                  className="absolute top-0 end-0 z-[1] flex items-center justify-center h-12 w-12 text-muted-400 hover:text-primary-500 transition-colors duration-300"
                >
                  <Iconify icon="lucide:save" className="w-5 h-5" />
                </button>
              }
            ></BaseInput>
          </div>
          <div className="flex-1">
            <BaseInput
              value={fields.third}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, third: value }))
              }
              size="xl"
              rounded="md"
              label="Size: xl"
              placeholder="Ex: username"
              action={
                <button
                  type="button"
                  data-nui-tooltip="Save"
                  className="absolute top-0 end-0 z-[1] flex items-center justify-center h-12 w-12 text-muted-400 hover:text-primary-500 transition-colors duration-300"
                >
                  <Iconify icon="lucide:save" className="w-5 h-5" />
                </button>
              }
            ></BaseInput>
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Label: float"
        description="Autocomplete component label float"
      >
        <div className="grid gap-6 md:max-w-lg md:grid-cols-2">
          <BaseInput
            value={fields.first}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, first: value }))
            }
            size="sm"
            rounded="md"
            label="Size: sm"
            placeholder="Ex: username"
            labelFloat
          />
          <BaseInput
            value={fields.fourth}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, fourth: value }))
            }
            icon="lucide:search"
            size="sm"
            rounded="md"
            label="Size: sm"
            placeholder="Ex: username"
            labelFloat
          />
          <BaseInput
            value={fields.second}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, second: value }))
            }
            size="md"
            rounded="md"
            label="Size: md"
            placeholder="Ex: username"
            labelFloat
          />
          <BaseInput
            value={fields.fifth}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, fifth: value }))
            }
            icon="lucide:search"
            size="md"
            rounded="md"
            label="Size: md"
            placeholder="Ex: username"
            labelFloat
          />
          <BaseInput
            value={fields.third}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, third: value }))
            }
            size="lg"
            rounded="md"
            label="Size: lg"
            placeholder="Ex: username"
            labelFloat
          />
          <BaseInput
            value={fields.sixth}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, sixth: value }))
            }
            icon="lucide:search"
            size="lg"
            rounded="md"
            label="Size: lg"
            placeholder="Ex: username"
            labelFloat
          />
          <BaseInput
            value={fields.third}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, third: value }))
            }
            size="xl"
            rounded="md"
            label="Size: xl"
            placeholder="Ex: username"
            labelFloat
          />
          <BaseInput
            value={fields.sixth}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, sixth: value }))
            }
            icon="lucide:search"
            size="xl"
            rounded="md"
            label="Size: xl"
            placeholder="Ex: username"
            labelFloat
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Disabled" description="Input component disabled state">
        <div className="flex flex-wrap items-end gap-3 max-w-5xl">
          <div className="flex-1">
            <BaseInput
              value={fields.first}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, first: value }))
              }
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Ex: username"
              disabled
            />
          </div>
          <div className="flex-1">
            <BaseInput
              value={fields.second}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, second: value }))
              }
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Ex: username"
              disabled
            />
          </div>
          <div className="flex-1">
            <BaseInput
              value={fields.third}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, third: value }))
              }
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Ex: username"
              disabled
            />
          </div>
          <div className="flex-1">
            <BaseInput
              value={fields.third}
              onChange={(value) =>
                setFields((oldFields) => ({ ...oldFields, third: value }))
              }
              size="xl"
              rounded="md"
              label="Size: xl"
              placeholder="Ex: username"
              disabled
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Loading"
        description="Autocomplete component loading state"
      >
        <div className="grid gap-6 md:max-w-lg md:grid-cols-2">
          <BaseInput
            value={fields.first}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, first: value }))
            }
            size="sm"
            rounded="md"
            label="Size: sm"
            placeholder="Ex: username"
            loading
          />
          <BaseInput
            value={fields.fourth}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, fourth: value }))
            }
            icon="lucide:search"
            size="sm"
            rounded="md"
            label="Size: sm"
            placeholder="Ex: username"
            loading
          />
          <BaseInput
            value={fields.second}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, second: value }))
            }
            size="md"
            rounded="md"
            label="Size: md"
            placeholder="Ex: username"
            loading
          />
          <BaseInput
            value={fields.fifth}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, fifth: value }))
            }
            icon="lucide:search"
            size="md"
            rounded="md"
            label="Size: md"
            placeholder="Ex: username"
            loading
          />
          <BaseInput
            value={fields.third}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, third: value }))
            }
            size="lg"
            rounded="md"
            label="Size: lg"
            placeholder="Ex: username"
            loading
          />
          <BaseInput
            value={fields.sixth}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, sixth: value }))
            }
            icon="lucide:search"
            size="lg"
            rounded="md"
            label="Size: lg"
            placeholder="Ex: username"
            loading
          />
          <BaseInput
            value={fields.third}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, third: value }))
            }
            size="xl"
            rounded="md"
            label="Size: xl"
            placeholder="Ex: username"
            loading
          />
          <BaseInput
            value={fields.sixth}
            onChange={(value) =>
              setFields((oldFields) => ({ ...oldFields, sixth: value }))
            }
            icon="lucide:search"
            size="xl"
            rounded="md"
            label="Size: xl"
            placeholder="Ex: username"
            loading
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Group" description="Input component group">
        <BaseButtonGroup>
          <BaseButton color="muted">
            <span>USD</span>
          </BaseButton>
          <BaseInput
            value={amount}
            onChange={setAmount}
            classes={{
              wrapper: "w-28",
            }}
            type="number"
            placeholder="0.00"
          />
          <BaseSelect
            value={taxes}
            onChange={setTaxes}
            classes={{
              wrapper: "w-36",
            }}
          >
            <option value="With taxes">With taxes</option>

            <option value="Without taxes">Without taxes</option>
          </BaseSelect>
        </BaseButtonGroup>
      </NuiPreview>
    </Fragment>
  );
};

export default Inputs;
