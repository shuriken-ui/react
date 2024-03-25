"use client";

import React, { Fragment, useState } from "react";
import NuiPreview from "@/components/NuiPreview";
import { BaseFocusLoop, BaseCheckboxAnimated } from "@shuriken-ui/react";

const CheckboxAnimated = () => {
  const [options, setOptions] = useState([
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
    "Option 6",
    "Option 7",
    "Option 8",
    "Option 9",
    "Option 10",
    "Option 11",
    "Option 12",
    "Option 13",
    "Option 14",
    "Option 15",
    "Option 16",
    "Option 17",
    "Option 18",
    "Option 19",
  ]);

  const [checked, setChecked] = useState(false);

  const [customValue, setCustomValue] = useState<string>();
  function toggleOptions(value: string, checked: boolean) {
    if (checked) {
      setOptions((oldOptions) => {
        if (oldOptions.includes(value)) {
          return oldOptions;
        }
        return [...oldOptions, value];
      });
    } else {
      setOptions((oldOptions) =>
        oldOptions.filter((option) => option !== value)
      );
    }
  }

  return (
    <Fragment>
      <NuiPreview
        title="Color"
        description="Animated checkbox component colors"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-start">
          <BaseFocusLoop className="flex w-3/5 flex-wrap items-end gap-4">
            <BaseCheckboxAnimated
              value="Option 1"
              checked={options.includes("Option 1")}
              onChange={toggleOptions}
              classes={{ label: "text-primary-500" }}
            />
            <BaseCheckboxAnimated
              value="Option 2"
              checked={options.includes("Option 2")}
              onChange={toggleOptions}
              classes={{ label: "text-lime-500" }}
            />
            <BaseCheckboxAnimated
              value="Option 3"
              checked={options.includes("Option 3")}
              onChange={toggleOptions}
              classes={{ label: "text-green-500" }}
            />
            <BaseCheckboxAnimated
              value="Option 4"
              checked={options.includes("Option 4")}
              onChange={toggleOptions}
              classes={{ label: "text-emerald-500" }}
            />
            <BaseCheckboxAnimated
              value="Option 5"
              checked={options.includes("Option 5")}
              onChange={toggleOptions}
              classes={{ label: "text-teal-500" }}
            />
            <BaseCheckboxAnimated
              value="Option 6"
              checked={options.includes("Option 6")}
              onChange={toggleOptions}
              classes={{ label: "text-cyan-500" }}
            />
            <BaseCheckboxAnimated
              value="Option 7"
              checked={options.includes("Option 7")}
              onChange={toggleOptions}
              classes={{ label: "text-sky-500" }}
            />
            <BaseCheckboxAnimated
              value="Option 8"
              checked={options.includes("Option 8")}
              onChange={toggleOptions}
              classes={{ label: "text-blue-500" }}
            />
            <BaseCheckboxAnimated
              value="Option 9"
              checked={options.includes("Option 9")}
              onChange={toggleOptions}
              classes={{ label: "text-indigo-500" }}
            />
            <BaseCheckboxAnimated
              value="Option 10"
              checked={options.includes("Option 10")}
              onChange={toggleOptions}
              classes={{ label: "text-purple-500" }}
            />
            <BaseCheckboxAnimated
              value="Option 11"
              checked={options.includes("Option 11")}
              onChange={toggleOptions}
              classes={{ label: "text-fuchsia-500" }}
            />
            <BaseCheckboxAnimated
              value="Option 12"
              checked={options.includes("Option 12")}
              onChange={toggleOptions}
              classes={{ label: "text-pink-500" }}
            />
            <BaseCheckboxAnimated
              value="Option 13"
              checked={options.includes("Option 13")}
              onChange={toggleOptions}
              classes={{ label: "text-rose-500" }}
            />
            <BaseCheckboxAnimated
              value="Option 14"
              checked={options.includes("Option 14")}
              onChange={toggleOptions}
              classes={{ label: "text-red-500" }}
            />
            <BaseCheckboxAnimated
              value="Option 15"
              checked={options.includes("Option 15")}
              onChange={toggleOptions}
              classes={{ label: "text-orange-500" }}
            />
            <BaseCheckboxAnimated
              value="Option 16"
              checked={options.includes("Option 16")}
              onChange={toggleOptions}
              classes={{ label: "text-amber-500" }}
            />
            <BaseCheckboxAnimated
              value="Option 17"
              checked={options.includes("Option 17")}
              onChange={toggleOptions}
              classes={{ label: "text-yellow-500" }}
            />
            <BaseCheckboxAnimated
              value="Option 18"
              checked={options.includes("Option 18")}
              onChange={toggleOptions}
              classes={{ label: "text-muted-800 dark:text-muted-200" }}
            />
            <BaseCheckboxAnimated
              value="Option 19"
              checked={options.includes("Option 19")}
              onChange={toggleOptions}
              classes={{ label: "text-gray-400 dark:text-gray-500" }}
            />
          </BaseFocusLoop>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Value: boolean"
        description="Animated checkbox component boolean value"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-start">
          <div className="flex w-3/5 flex-wrap items-end gap-4">
            <BaseCheckboxAnimated
              checked={checked}
              classes={{ label: "text-primary-500" }}
              onChange={(_, checked) => setChecked(checked)}
            />
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
              value={customValue}
              trueValue="checked"
              falseValue="not-checked"
              classes={{ label: "text-primary-500" }}
              onChange={(value) => setCustomValue(value)}
            />
            {customValue}
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Value: static"
        description="Animated checkbox component static value"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-start">
          <BaseFocusLoop className="flex w-3/5 flex-wrap items-end gap-4">
            <BaseCheckboxAnimated classes={{ label: "text-primary-500" }} />
            <BaseCheckboxAnimated
              checked={true}
              classes={{ label: "text-primary-500" }}
            />
            <BaseCheckboxAnimated
              checked={true}
              disabled
              classes={{ label: "text-primary-500" }}
            />
          </BaseFocusLoop>
        </div>
      </NuiPreview>
    </Fragment>
  );
};

export default CheckboxAnimated;
