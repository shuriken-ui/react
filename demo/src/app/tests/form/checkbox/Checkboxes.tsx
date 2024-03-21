"use client";

import React, { Fragment, useState } from "react";

import {
  BaseCheckbox,
  BaseFocusLoop,
  BaseHeading,
  BaseCheckboxHeadless,
  BaseCard,
  BaseAvatar,
  BaseText,
} from "@shuriken-ui/react";

import NuiPreview from "@/components/NuiPreview";

const Checkboxes = () => {
  const [options, setOptions] = useState({
    first: true,
    second: true,
    third: true,
    fourth: true,
    fifth: true,
    sixth: true,
    seventh: true,
    eighth: true,
  });

  const [disabledValue] = useState(true);
  const [customValue, setCustomValue] = useState("not-checked");
  // const [multipleValue, setMultipleValue] = useState(["Option 1", "Option 2"]);

  const [selectedPeople, setSelectedPeople] = useState<string[]>([]);

  function toggleOption(option: string, checked: boolean) {
    if (checked) {
      setMultipleValue((oldMultipleValue) => [...oldMultipleValue, option]);
    } else {
      setMultipleValue((oldMultipleValue) =>
        oldMultipleValue.filter((val) => val !== option)
      );
    }
  }

  function toggleSelectedPeople(value: string, checked: boolean) {
    if (checked) {
      setSelectedPeople((prev) => [...prev, value]);
    } else {
      setSelectedPeople((prev) => prev.filter((p) => p !== value));
    }
  }
  return (
    <Fragment>
      <NuiPreview
        title="Rounded: none"
        description="Checkbox component none radius"
      >
        <BaseFocusLoop className="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4">
          <BaseCheckbox
            label="Default"
            rounded="none"
            aria-invalid="true"
            checked={options.first}
            onChange={(checked) =>
              setOptions((oldOptions) => ({ ...oldOptions, first: checked }))
            }
          />
          <BaseCheckbox
            label="Muted"
            rounded="none"
            color="muted"
            checked={options.second}
            onChange={(checked) =>
              setOptions((oldOptions) => ({ ...oldOptions, second: checked }))
            }
          />
          <BaseCheckbox
            label="Primary"
            rounded="none"
            color="primary"
            checked={options.third}
            onChange={(checked) =>
              setOptions((oldOptions) => ({ ...oldOptions, third: checked }))
            }
          />
          <BaseCheckbox
            label="Info"
            rounded="none"
            color="info"
            checked={options.fourth}
            onChange={(checked) =>
              setOptions((oldOptions) => ({ ...oldOptions, fourth: checked }))
            }
          />
          <BaseCheckbox
            label="Success"
            rounded="none"
            color="success"
            checked={options.fifth}
            onChange={(checked) =>
              setOptions((oldOptions) => ({ ...oldOptions, fifth: checked }))
            }
          />
          <BaseCheckbox
            label="Warning"
            rounded="none"
            color="warning"
            checked={options.sixth}
            onChange={(checked) =>
              setOptions((oldOptions) => ({ ...oldOptions, sixth: checked }))
            }
          />
          <BaseCheckbox
            label="Danger"
            rounded="none"
            color="danger"
            checked={options.seventh}
            onChange={(checked) =>
              setOptions((oldOptions) => ({ ...oldOptions, seventh: checked }))
            }
          />
        </BaseFocusLoop>
      </NuiPreview>

      <NuiPreview
        title="Rounded: sm"
        description="Checkbox component sm radius"
      >
        <BaseFocusLoop className="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4">
          <BaseCheckbox
            label="Default"
            rounded="sm"
            checked={options.first}
            onChange={(checked) =>
              setOptions((oldOptions) => ({ ...oldOptions, first: checked }))
            }
          />
          <BaseCheckbox
            label="Muted"
            rounded="sm"
            color="muted"
            checked={options.second}
            onChange={(checked) =>
              setOptions((oldOptions) => ({ ...oldOptions, second: checked }))
            }
          />
          <BaseCheckbox
            label="Primary"
            rounded="sm"
            color="primary"
            checked={options.third}
            onChange={(checked) =>
              setOptions((oldOptions) => ({ ...oldOptions, third: checked }))
            }
          />
          <BaseCheckbox
            label="Info"
            rounded="sm"
            color="info"
            checked={options.fourth}
            onChange={(checked) =>
              setOptions((oldOptions) => ({ ...oldOptions, fourth: checked }))
            }
          />
          <BaseCheckbox
            label="Success"
            rounded="sm"
            color="success"
            checked={options.fifth}
            onChange={(checked) =>
              setOptions((oldOptions) => ({ ...oldOptions, fifth: checked }))
            }
          />
          <BaseCheckbox
            label="Warning"
            rounded="sm"
            color="warning"
            checked={options.sixth}
            onChange={(checked) =>
              setOptions((oldOptions) => ({ ...oldOptions, sixth: checked }))
            }
          />
          <BaseCheckbox
            label="Danger"
            rounded="sm"
            color="danger"
            checked={options.seventh}
            onChange={(checked) =>
              setOptions((oldOptions) => ({ ...oldOptions, seventh: checked }))
            }
          />
        </BaseFocusLoop>
      </NuiPreview>

      <NuiPreview
        title="Rounded: md"
        description="Checkbox component md radius"
      >
        <BaseFocusLoop className="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4">
          <BaseCheckbox
            label="Default"
            rounded="md"
            checked={options.first}
            onChange={(checked) =>
              setOptions((oldOptions) => ({ ...oldOptions, first: checked }))
            }
          />
          <BaseCheckbox
            label="Muted"
            rounded="md"
            color="muted"
            checked={options.second}
            onChange={(checked) => {
              setOptions((oldOptions) => ({ ...oldOptions, second: checked }));
            }}
          />
          <BaseCheckbox
            label="Primary"
            rounded="md"
            color="primary"
            checked={options.third}
            onChange={(checked) =>
              setOptions((oldOptions) => ({ ...oldOptions, third: checked }))
            }
          />
          <BaseCheckbox
            label="Info"
            rounded="md"
            color="info"
            checked={options.fourth}
            onChange={(checked) =>
              setOptions((oldOptions) => ({ ...oldOptions, fourth: checked }))
            }
          />
          <BaseCheckbox
            label="Success"
            rounded="md"
            color="success"
            checked={options.fifth}
            onChange={(checked) => {
              setOptions((oldOptions) => ({ ...oldOptions, fifth: checked }));
            }}
          />
          <BaseCheckbox
            label="Warning"
            rounded="md"
            color="warning"
            checked={options.sixth}
            onChange={(checked) => {
              setOptions((oldOptions) => ({ ...oldOptions, sixth: checked }));
            }}
          />
          <BaseCheckbox
            label="Danger"
            rounded="md"
            color="danger"
            checked={options.seventh}
            onChange={(checked) => {
              setOptions((oldOptions) => ({ ...oldOptions, seventh: checked }));
            }}
          />
        </BaseFocusLoop>
      </NuiPreview>

      <NuiPreview
        title="Rounded: lg"
        description="Checkbox component lg radius"
      >
        <BaseFocusLoop className="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4">
          <BaseCheckbox
            label="Default"
            rounded="lg"
            checked={options.first}
            onChange={(checked) =>
              setOptions((oldOptions) => ({ ...oldOptions, first: checked }))
            }
          />
          <BaseCheckbox
            label="Muted"
            rounded="lg"
            color="muted"
            checked={options.second}
            onChange={(checked) => {
              setOptions((oldOptions) => ({ ...oldOptions, second: checked }));
            }}
          />
          <BaseCheckbox
            label="Primary"
            rounded="lg"
            color="primary"
            checked={options.third}
            onChange={(checked) => {
              setOptions((oldOptions) => ({ ...oldOptions, third: checked }));
            }}
          />
          <BaseCheckbox
            label="Info"
            rounded="lg"
            color="info"
            checked={options.fourth}
            onChange={(checked) => {
              setOptions((oldOptions) => ({ ...oldOptions, fourth: checked }));
            }}
          />
          <BaseCheckbox
            label="Success"
            rounded="lg"
            color="success"
            checked={options.fifth}
            onChange={(checked) => {
              setOptions((oldOptions) => ({ ...oldOptions, fifth: checked }));
            }}
          />
          <BaseCheckbox
            label="Warning"
            rounded="lg"
            color="warning"
            checked={options.sixth}
            onChange={(checked) => {
              setOptions((oldOptions) => ({ ...oldOptions, sixth: checked }));
            }}
          />
          <BaseCheckbox
            label="Danger"
            rounded="lg"
            color="danger"
            checked={options.seventh}
            onChange={(checked) => {
              setOptions((oldOptions) => ({ ...oldOptions, seventh: checked }));
            }}
          />
        </BaseFocusLoop>
      </NuiPreview>

      <NuiPreview
        title="Rounded: full"
        description="Checkbox component full radius"
      >
        <BaseFocusLoop className="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4">
          <BaseCheckbox
            value={options.first}
            label="Default"
            rounded="full"
            checked={options.first}
            onChange={(checked) =>
              setOptions((oldOptions) => ({ ...oldOptions, first: checked }))
            }
          />
          <BaseCheckbox
            value={options.second}
            label="Muted"
            rounded="full"
            color="muted"
            checked={options.second}
            onChange={(checked) => {
              setOptions((oldOptions) => ({ ...oldOptions, second: checked }));
            }}
          />
          <BaseCheckbox
            value={options.third}
            label="Primary"
            rounded="full"
            color="primary"
            checked={options.third}
            onChange={(checked) => {
              setOptions((oldOptions) => ({ ...oldOptions, third: checked }));
            }}
          />
          <BaseCheckbox
            value={options.fourth}
            label="Info"
            rounded="full"
            color="info"
            checked={options.fourth}
            onChange={(checked) => {
              setOptions((oldOptions) => ({ ...oldOptions, fourth: checked }));
            }}
          />
          <BaseCheckbox
            value={options.fifth}
            label="Success"
            rounded="full"
            color="success"
            checked={options.fifth}
            onChange={(checked) => {
              setOptions((oldOptions) => ({ ...oldOptions, fifth: checked }));
            }}
          />
          <BaseCheckbox
            value={options.sixth}
            label="Warning"
            rounded="full"
            color="warning"
            checked={options.sixth}
            onChange={(checked) => {
              setOptions((oldOptions) => ({ ...oldOptions, sixth: checked }));
            }}
          />
          <BaseCheckbox
            value={options.seventh}
            label="Danger"
            rounded="full"
            color="danger"
            checked={options.seventh}
            onChange={(checked) => {
              setOptions((oldOptions) => ({ ...oldOptions, seventh: checked }));
            }}
          />
        </BaseFocusLoop>
      </NuiPreview>

      <NuiPreview
        title="State: disabled"
        description="Checkbox component disabled state"
      >
        <BaseCheckbox value={disabledValue} disabled label="I'm disabled" />
      </NuiPreview>

      <NuiPreview
        title="Value: custom"
        description="Checkbox component custom value"
      >
        <BaseCheckbox
          value={customValue}
          name="true-false"
          label={customValue}
          rounded="full"
          trueValue={"checked"}
          falseValue={"not-checked"}
          color="muted"
          onChange={(_, value) => {
            setCustomValue(value!);
          }}
        />
      </NuiPreview>

      {/* <pre>{JSON.stringify(multipleValue, null, 2)}</pre>
      <NuiPreview
        title="Value: multiple"
        description="Checkbox component multiple values"
      >
        <BaseFocusLoop className="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4">
          <BaseCheckbox
            name="multiple-demo-1"
            label="Option 1"
            value="Option 1"
            rounded="lg"
            color="muted"
            checked={multipleValue.includes("Option 1")}
            onChange={(checked) => toggleOption(checked)}
          />

          <BaseCheckbox
            name="multiple-demo-2"
            label="Option 2"
            value="Option 2"
            rounded="lg"
            color="muted"
            checked={multipleValue.includes("Option 2")}
            onChange={toggleOption}
          />

          <BaseCheckbox
            name="multiple-demo-3"
            label="Option 3"
            value="Option 3"
            rounded="lg"
            color="muted"
            checked={multipleValue.includes("Option 3")}
            onChange={toggleOption}
          />

          <BaseCheckbox
            name="multiple-demo-4"
            label="Option 4"
            value="Option 4"
            rounded="lg"
            color="muted"
            checked={multipleValue.includes("Option 4")}
            onChange={toggleOption}
          />

          <BaseCheckbox
            name="multiple-demo-5"
            label="Option 5"
            value="Option 5"
            rounded="lg"
            color="muted"
            checked={multipleValue.includes("Option 5")}
            onChange={toggleOption}
          />
        </BaseFocusLoop>
      </NuiPreview> */}

      <NuiPreview
        title="Color: custom"
        description="Checkbox component custom colors"
      >
        <BaseFocusLoop className="grid grid-cols-2 gap-6 md:max-w-2xl md:grid-cols-4">
          <BaseCheckbox
            checked={options.first}
            label="Rounded: none"
            rounded="none"
            classes={{ wrapper: "!text-gray-500" }}
          />

          <BaseCheckbox
            checked={options.second}
            label="Rounded: none"
            rounded="none"
            classes={{ wrapper: "!text-emerald-500" }}
          />

          <BaseCheckbox
            checked={options.third}
            label="Rounded: sm"
            rounded="sm"
            classes={{ wrapper: "!text-yellow-500" }}
          />

          <BaseCheckbox
            checked={options.fourth}
            label="Rounded: sm"
            rounded="sm"
            classes={{ wrapper: "!text-pink-500" }}
          />

          <BaseCheckbox
            checked={options.fifth}
            label="Rounded: lg"
            rounded="lg"
            classes={{ wrapper: "!text-indigo-500" }}
          />

          <BaseCheckbox
            checked={options.sixth}
            label="Rounded: lg"
            rounded="lg"
            classes={{ wrapper: "!text-primary-500" }}
          />

          <BaseCheckbox
            checked={options.seventh}
            label="Rounded: full"
            rounded="full"
            classes={{ wrapper: "!text-amber-500" }}
          />

          <BaseCheckbox
            checked={options.eighth}
            label="Rounded: full"
            rounded="full"
            classes={{ wrapper: "!text-rose-500" }}
          />
        </BaseFocusLoop>
      </NuiPreview>

      <NuiPreview title="Headless" description="Checkbox component headless">
        <div className="w-full max-w-3xl">
          <form className="mx-auto w-full">
            <fieldset className="w-full space-y-6">
              <div className="border-muted-200 dark:border-muted-700 flex items-center justify-between border-b py-4">
                <legend className="text-muted-800 dark:text-muted-100 font-sans text-xl font-medium">
                  Select people
                </legend>

                <button
                  type="reset"
                  onClick={(e) => {
                    e.preventDefault();

                    setSelectedPeople([]);
                  }}
                  className="text-primary-500 font-sans text-sm font-medium underline-offset-4 hover:underline"
                >
                  Cancel
                </button>
              </div>

              <div className="grid gap-6 sm:grid-cols-3">
                <BaseCheckboxHeadless
                  onChange={toggleSelectedPeople}
                  checked={selectedPeople.includes("team_member_1")}
                  value="team_member_1"
                >
                  <BaseCard
                    rounded="md"
                    className="peer-checked:!border-primary-500 peer-checked:[&_.child]:!text-primary-500 border-2 p-4 opacity-50 peer-checked:opacity-100"
                  >
                    <div className="flex w-full items-center gap-2">
                      <BaseAvatar src="https://tairo.cssninja.io/img/avatars/10.svg" />

                      <div>
                        <BaseHeading
                          as="h4"
                          size="sm"
                          weight="medium"
                          lead="none"
                        >
                          Kendra Wilson
                        </BaseHeading>

                        <BaseText size="xs" className="text-muted-400">
                          Software Engineer
                        </BaseText>
                      </div>

                      <div className="child text-muted-300 ms-auto">
                        <div className="h-3 w-3 rounded-full bg-current"></div>
                      </div>
                    </div>
                  </BaseCard>
                </BaseCheckboxHeadless>

                <BaseCheckboxHeadless
                  onChange={toggleSelectedPeople}
                  checked={selectedPeople.includes("team_member_2")}
                  value="team_member_2"
                >
                  <BaseCard
                    rounded="md"
                    className="peer-checked:!border-primary-500 peer-checked:[&_.child]:!text-primary-500 border-2 p-4 opacity-50 peer-checked:opacity-100"
                  >
                    <div className="flex w-full items-center gap-2">
                      <BaseAvatar src="https://tairo.cssninja.io/img/avatars/16.svg" />

                      <div>
                        <BaseHeading
                          as="h4"
                          size="sm"
                          weight="medium"
                          lead="none"
                        >
                          Hermann Mayer
                        </BaseHeading>

                        <BaseText size="xs" className="text-muted-400">
                          Sales Manager
                        </BaseText>
                      </div>

                      <div className="child text-muted-300 ms-auto">
                        <div className="h-3 w-3 rounded-full bg-current"></div>
                      </div>
                    </div>
                  </BaseCard>
                </BaseCheckboxHeadless>

                <BaseCheckboxHeadless
                  onChange={toggleSelectedPeople}
                  checked={selectedPeople.includes("team_member_3")}
                  value="team_member_3"
                >
                  <BaseCard
                    rounded="md"
                    className="peer-checked:!border-primary-500 peer-checked:[&_.child]:!text-primary-500 border-2 p-4 opacity-50 peer-checked:opacity-100"
                  >
                    <div className="flex w-full items-center gap-2">
                      <BaseAvatar src="https://tairo.cssninja.io/img/avatars/25.svg" />

                      <div>
                        <BaseHeading
                          as="h4"
                          size="sm"
                          weight="medium"
                          lead="none"
                        >
                          Melany Lawright
                        </BaseHeading>

                        <BaseText size="xs" className="text-muted-400">
                          HR Manager
                        </BaseText>
                      </div>

                      <div className="child text-muted-300 ms-auto">
                        <div className="h-3 w-3 rounded-full bg-current"></div>
                      </div>
                    </div>
                  </BaseCard>
                </BaseCheckboxHeadless>
              </div>
            </fieldset>
          </form>
        </div>
      </NuiPreview>
    </Fragment>
  );
};

export default Checkboxes;
