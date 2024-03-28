"use client";

import React, { Fragment, useRef, useState } from "react";

import {
  BaseCheckboxAnimated,
  BaseFocusLoop,
  BaseHeading,
} from "@shuriken-ui/react";

import NuiPreview from "@/components/NuiPreview";

// const options = 

const Checkboxes = () => {
  const [options, setOptions] = useState<string[]>([
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    'Option 6',
    'Option 7',
    'Option 8',
    'Option 9',
    'Option 10',
    'Option 11',
    'Option 12',
    'Option 13',
    'Option 14',
    'Option 15',
    'Option 16',
    'Option 17',
    'Option 18',
    'Option 19',
  ])
  const [checked, setChecked] = useState(false)
  const [customValue, setCustomValue] = useState<'checked' | 'not-checked'>('not-checked')
  return (
    <>
      <NuiPreview
        title="Color"
        description="Animated checkbox component colors"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-start">
          <BaseFocusLoop className="flex w-3/5 flex-wrap items-end gap-4">
            <BaseCheckboxAnimated 
              modelValue={options}
              onChange={(value) => setOptions(value)} 
              value="Option 1" 
            />
            <BaseCheckboxAnimated
              modelValue={options}
              onChange={(value) => setOptions(value)}
              value="Option 2"
              classes={{ label: '!text-lime-500' }}
            />
            <BaseCheckboxAnimated
              modelValue={options}
              onChange={(value) => setOptions(value)}
              value="Option 3"
              classes={{ label: '!text-green-500' }}
            />
            <BaseCheckboxAnimated
              modelValue={options}
              onChange={(value) => setOptions(value)}
              value="Option 4"
              classes={{ label: '!text-emerald-500' }}
            />
            <BaseCheckboxAnimated
              modelValue={options}
              onChange={(value) => setOptions(value)}
              value="Option 5"
              classes={{ label: '!text-teal-500' }}
            />
            <BaseCheckboxAnimated
              modelValue={options}
              onChange={(value) => setOptions(value)}
              value="Option 6"
              classes={{ label: '!text-cyan-500' }}
            />
            <BaseCheckboxAnimated
              modelValue={options}
              onChange={(value) => setOptions(value)}
              value="Option 7"
              classes={{ label: '!text-sky-500' }}
            />
            <BaseCheckboxAnimated
              modelValue={options}
              onChange={(value) => setOptions(value)}
              value="Option 8"
              classes={{ label: '!text-blue-500' }}
            />
            <BaseCheckboxAnimated
              modelValue={options}
              onChange={(value) => setOptions(value)}
              value="Option 9"
              classes={{ label: '!text-indigo-500' }}
            />
            <BaseCheckboxAnimated
              modelValue={options}
              onChange={(value) => setOptions(value)}
              value="Option 10"
              classes={{ label: '!text-purple-500' }}
            />
            <BaseCheckboxAnimated
              modelValue={options}
              onChange={(value) => setOptions(value)}
              value="Option 11"
              classes={{ label: '!text-fuchsia-500' }}
            />
            <BaseCheckboxAnimated
              modelValue={options}
              onChange={(value) => setOptions(value)}
              value="Option 12"
              classes={{ label: '!text-pink-500' }}
            />
            <BaseCheckboxAnimated
              modelValue={options}
              onChange={(value) => setOptions(value)}
              value="Option 13"
              classes={{ label: '!text-rose-500' }}
            />
            <BaseCheckboxAnimated
              modelValue={options}
              onChange={(value) => setOptions(value)}
              value="Option 14"
              classes={{ label: '!text-red-500' }}
            />
            <BaseCheckboxAnimated
              modelValue={options}
              onChange={(value) => setOptions(value)}
              value="Option 15"
              classes={{ label: '!text-orange-500' }}
            />
            <BaseCheckboxAnimated
              modelValue={options}
              onChange={(value) => setOptions(value)}
              value="Option 16"
              classes={{ label: '!text-amber-500' }}
            />
            <BaseCheckboxAnimated
              modelValue={options}
              onChange={(value) => setOptions(value)}
              value="Option 17"
              classes={{ label: '!text-yellow-500' }}
            />
            <BaseCheckboxAnimated
              modelValue={options}
              onChange={(value) => setOptions(value)}
              value="Option 18"
              classes={{ label: '!text-muted-800 }drk:!text-muted-200' }}
            />
            <BaseCheckboxAnimated
              modelValue={options}
              onChange={(value) => setOptions(value)}
              value="Option 19"
              classes={{ label: '!text-gray-400 }drk:!text-gray-500' }}
            />
            <BaseCheckboxAnimated
              modelValue={options}
              onChange={(value) => setOptions(value)}
              value="Option 19"
              color="dark"
            />
            <BaseCheckboxAnimated
              modelValue={options}
              onChange={(value) => setOptions(value)}
              value="Option 19"
              color="black"
            />
          </BaseFocusLoop>
            <pre>{JSON.stringify(options, null, 2)}</pre>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Value: boolean"
        description="Animated checkbox component boolean value"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-start">
          <div className="flex w-3/5 flex-wrap items-end gap-4">
            <BaseCheckboxAnimated
              modelValue={checked}
              onChange={(value) => setChecked(value)}
              classes={{ label: 'text-primary-500' }}
            />
            <pre>{JSON.stringify(checked, null, 2)}</pre>
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Value: custom"
        description="Animated checkbox component custom value"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-start">
          <div className="flex w-3/5 flex-wrap items-end gap-4">
            <BaseCheckboxAnimated
              modelValue={customValue}
              onChange={(value) => setCustomValue(value)}
              trueValue="checked"
              falseValue="not-checked"
              classes={{ label: 'text-primary-500' }}
            />
            <pre>{JSON.stringify(customValue, null, 2)}</pre>
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Value: static"
        description="Animated checkbox component static value"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-start">
          <BaseFocusLoop className="flex w-3/5 flex-wrap items-end gap-4">
            <BaseCheckboxAnimated
              classes={{ label: 'text-primary-500' }}
            />
            <BaseCheckboxAnimated
              modelValue={true}
              classes={{ label: 'text-primary-500' }}
            />
            <BaseCheckboxAnimated
              modelValue={true}
              disabled
              classes={{ label: 'text-primary-500' }}
            />
          </BaseFocusLoop>
        </div>
      </NuiPreview>
      </>

  );
};

export default Checkboxes;
