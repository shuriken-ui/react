"use client";
import { Fragment, useState } from "react";
import { BaseSelect, BaseFocusLoop } from "@shuriken-ui/react";
import NuiPreview from "@/components/NuiPreview";
const Select = () => {
  const [options, setOptions] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
    fifth: "",
  });
  return (
    <Fragment>
      <NuiPreview title="Radius" description="Select component radiuses">
        <BaseFocusLoop class="grid gap-6 md:max-w-4xl md:grid-cols-3">
          <BaseSelect
            value={options.first}
            onChange={(value) =>
              setOptions((oldOptions) => ({ ...oldOptions, first: value }))
            }
            rounded="none"
            label="Rounded: none"
          >
            <option value="">Select a hero</option>
            <option value="Superman">Superman</option>
            <option value="Batman">Batman</option>
            <option value="Iron man">Iron man</option>
            <option value="Magneto">Magneto</option>
            <option value="Cyclops">Cyclops</option>
          </BaseSelect>
          <BaseSelect
            value={options.second}
            onChange={(value) =>
              setOptions((oldOptions) => ({ ...oldOptions, second: value }))
            }
            rounded="sm"
            label="Rounded: sm"
          >
            <option value="">Select a hero</option>
            <option value="Superman">Superman</option>
            <option value="Batman">Batman</option>
            <option value="Iron man">Iron man</option>
            <option value="Magneto">Magneto</option>
            <option value="Cyclops">Cyclops</option>
          </BaseSelect>
          <BaseSelect
            value={options.third}
            onChange={(value) =>
              setOptions((oldOptions) => ({ ...oldOptions, third: value }))
            }
            rounded="md"
            label="Rounded: md"
          >
            <option value="">Select a hero</option>
            <option value="Superman">Superman</option>
            <option value="Batman">Batman</option>
            <option value="Iron man">Iron man</option>
            <option value="Magneto">Magneto</option>
            <option value="Cyclops">Cyclops</option>
          </BaseSelect>
          <BaseSelect
            value={options.fourth}
            onChange={(value) =>
              setOptions((oldOptions) => ({ ...oldOptions, fourth: value }))
            }
            rounded="lg"
            label="Rounded: lg"
          >
            <option value="">Select a hero</option>
            <option value="Superman">Superman</option>
            <option value="Batman">Batman</option>
            <option value="Iron man">Iron man</option>
            <option value="Magneto">Magneto</option>
            <option value="Cyclops">Cyclops</option>
          </BaseSelect>
          <BaseSelect
            value={options.fifth}
            onChange={(value) =>
              setOptions((oldOptions) => ({ ...oldOptions, fifth: value }))
            }
            rounded="full"
            label="Rounded: full"
          >
            <option value="">Select a hero</option>
            <option value="Superman">Superman</option>
            <option value="Batman">Batman</option>
            <option value="Iron man">Iron man</option>
            <option value="Magneto">Magneto</option>
            <option value="Cyclops">Cyclops</option>
          </BaseSelect>
        </BaseFocusLoop>
      </NuiPreview>

      <NuiPreview title="Size" description="Select component sizes">
        <div className="flex flex-wrap items-end gap-3 max-w-3xl">
          <div className="flex-1">
            <BaseSelect
              value={options.first}
              onChange={(value) =>
                setOptions((oldOptions) => ({ ...oldOptions, first: value }))
              }
              size="sm"
              rounded="md"
              label="Rounded: md"
            >
              <option value="">Select a hero</option>
              <option value="Superman">Superman</option>
              <option value="Batman">Batman</option>
              <option value="Iron man">Iron man</option>
              <option value="Magneto">Magneto</option>
              <option value="Cyclops">Cyclops</option>
            </BaseSelect>
          </div>

          <div className="flex-1">
            <BaseSelect
              value={options.second}
              onChange={(value) =>
                setOptions((oldOptions) => ({ ...oldOptions, second: value }))
              }
              size="md"
              rounded="md"
              label="Rounded: md"
            >
              <option value="">Select a hero</option>
              <option value="Superman">Superman</option>
              <option value="Batman">Batman</option>
              <option value="Iron man">Iron man</option>
              <option value="Magneto">Magneto</option>
              <option value="Cyclops">Cyclops</option>
            </BaseSelect>
          </div>

          <div className="flex-1">
            <BaseSelect
              value={options.third}
              onChange={(value) =>
                setOptions((oldOptions) => ({ ...oldOptions, third: value }))
              }
              size="lg"
              rounded="md"
              label="Rounded: md"
            >
              <option value="">Select a hero</option>
              <option value="Superman">Superman</option>
              <option value="Batman">Batman</option>
              <option value="Iron man">Iron man</option>
              <option value="Magneto">Magneto</option>
              <option value="Cyclops">Cyclops</option>
            </BaseSelect>
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Contrast: default-contrast"
        description="Select component default contrast"
      >
        <div className="flex flex-wrap items-end gap-3 max-w-3xl">
          <div className="flex-1">
            <BaseSelect
              value={options.first}
              onChange={(value) =>
                setOptions((oldOptions) => ({ ...oldOptions, first: value }))
              }
              contrast="default-contrast"
              size="sm"
              rounded="md"
              label="Rounded: md"
            >
              <option value="">Select a hero</option>
              <option value="Superman">Superman</option>
              <option value="Batman">Batman</option>
              <option value="Iron man">Iron man</option>
              <option value="Magneto">Magneto</option>
              <option value="Cyclops">Cyclops</option>
            </BaseSelect>
          </div>

          <div className="flex-1">
            <BaseSelect
              value={options.second}
              onChange={(value) =>
                setOptions((oldOptions) => ({ ...oldOptions, second: value }))
              }
              contrast="default-contrast"
              size="md"
              rounded="md"
              label="Rounded: md"
            >
              <option value="">Select a hero</option>
              <option value="Superman">Superman</option>
              <option value="Batman">Batman</option>
              <option value="Iron man">Iron man</option>
              <option value="Magneto">Magneto</option>
              <option value="Cyclops">Cyclops</option>
            </BaseSelect>
          </div>

          <div className="flex-1">
            <BaseSelect
              value={options.third}
              onChange={(value) =>
                setOptions((oldOptions) => ({ ...oldOptions, third: value }))
              }
              contrast="default-contrast"
              size="lg"
              rounded="md"
              label="Rounded: md"
            >
              <option value="">Select a hero</option>
              <option value="Superman">Superman</option>
              <option value="Batman">Batman</option>
              <option value="Iron man">Iron man</option>
              <option value="Magneto">Magneto</option>
              <option value="Cyclops">Cyclops</option>
            </BaseSelect>
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Contrast: muted" description="Select component muted">
        <div className="flex flex-wrap items-end gap-3 max-w-3xl">
          <div className="flex-1">
            <BaseSelect
              value={options.first}
              onChange={(value) =>
                setOptions((oldOptions) => ({ ...oldOptions, first: value }))
              }
              contrast="muted"
              size="sm"
              rounded="md"
              label="Rounded: md"
            >
              <option value="">Select a hero</option>
              <option value="Superman">Superman</option>
              <option value="Batman">Batman</option>
              <option value="Iron man">Iron man</option>
              <option value="Magneto">Magneto</option>
              <option value="Cyclops">Cyclops</option>
            </BaseSelect>
          </div>

          <div className="flex-1">
            <BaseSelect
              value={options.second}
              onChange={(value) =>
                setOptions((oldOptions) => ({ ...oldOptions, second: value }))
              }
              contrast="muted"
              size="md"
              rounded="md"
              label="Rounded: md"
            >
              <option value="">Select a hero</option>
              <option value="Superman">Superman</option>
              <option value="Batman">Batman</option>
              <option value="Iron man">Iron man</option>
              <option value="Magneto">Magneto</option>
              <option value="Cyclops">Cyclops</option>
            </BaseSelect>
          </div>

          <div className="flex-1">
            <BaseSelect
              value={options.third}
              onChange={(value) =>
                setOptions((oldOptions) => ({ ...oldOptions, third: value }))
              }
              contrast="muted"
              size="lg"
              rounded="md"
              label="Rounded: md"
            >
              <option value="">Select a hero</option>
              <option value="Superman">Superman</option>
              <option value="Batman">Batman</option>
              <option value="Iron man">Iron man</option>
              <option value="Magneto">Magneto</option>
              <option value="Cyclops">Cyclops</option>
            </BaseSelect>
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Contrast: muted-contrast"
        description="Select component muted contrast"
      >
        <div className="flex flex-wrap items-end gap-3 max-w-3xl">
          <div className="flex-1">
            <BaseSelect
              value={options.first}
              onChange={(value) =>
                setOptions((oldOptions) => ({ ...oldOptions, first: value }))
              }
              contrast="muted-contrast"
              size="sm"
              rounded="md"
              label="Rounded: md"
            >
              <option value="">Select a hero</option>
              <option value="Superman">Superman</option>
              <option value="Batman">Batman</option>
              <option value="Iron man">Iron man</option>
              <option value="Magneto">Magneto</option>
              <option value="Cyclops">Cyclops</option>
            </BaseSelect>
          </div>

          <div className="flex-1">
            <BaseSelect
              value={options.second}
              onChange={(value) =>
                setOptions((oldOptions) => ({ ...oldOptions, second: value }))
              }
              contrast="muted-contrast"
              size="md"
              rounded="md"
              label="Rounded: md"
            >
              <option value="">Select a hero</option>
              <option value="Superman">Superman</option>
              <option value="Batman">Batman</option>
              <option value="Iron man">Iron man</option>
              <option value="Magneto">Magneto</option>
              <option value="Cyclops">Cyclops</option>
            </BaseSelect>
          </div>

          <div className="flex-1">
            <BaseSelect
              value={options.third}
              onChange={(value) =>
                setOptions((oldOptions) => ({ ...oldOptions, third: value }))
              }
              contrast="muted-contrast"
              size="lg"
              rounded="md"
              label="Rounded: md"
            >
              <option value="">Select a hero</option>
              <option value="Superman">Superman</option>
              <option value="Batman">Batman</option>
              <option value="Iron man">Iron man</option>
              <option value="Magneto">Magneto</option>
              <option value="Cyclops">Cyclops</option>
            </BaseSelect>
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Option group"
        description="Select component option groups"
      >
        <div className="flex flex-wrap items-end gap-3 max-w-3xl">
          <div className="flex-1">
            <BaseSelect
              value={options.first}
              onChange={(value) =>
                setOptions((oldOptions) => ({ ...oldOptions, first: value }))
              }
              size="sm"
              rounded="md"
              label="Rounded: md"
            >
              <option value="">Select a hero</option>
              <optgroup label="Marvel">
                <option value="Iron man">Iron man</option>
                <option value="Magneto">Magneto</option>
                <option value="Cyclops">Cyclops</option>
              </optgroup>
              <optgroup label="DC Comics">
                <option value="Superman">Superman</option>
                <option value="Batman">Batman</option>
              </optgroup>
            </BaseSelect>
          </div>

          <div className="flex-1">
            <BaseSelect
              value={options.second}
              onChange={(value) =>
                setOptions((oldOptions) => ({ ...oldOptions, second: value }))
              }
              size="md"
              rounded="md"
              label="Rounded: md"
            >
              <option value="">Select a hero</option>
              <optgroup label="Marvel">
                <option value="Iron man">Iron man</option>
                <option value="Magneto">Magneto</option>
                <option value="Cyclops">Cyclops</option>
              </optgroup>
              <optgroup label="DC Comics">
                <option value="Superman">Superman</option>
                <option value="Batman">Batman</option>
              </optgroup>
            </BaseSelect>
          </div>

          <div className="flex-1">
            <BaseSelect
              value={options.third}
              onChange={(value) =>
                setOptions((oldOptions) => ({ ...oldOptions, third: value }))
              }
              size="lg"
              rounded="md"
              label="Rounded: md"
            >
              <option value="">Select a hero</option>
              <optgroup label="Marvel">
                <option value="Iron man">Iron man</option>
                <option value="Magneto">Magneto</option>
                <option value="Cyclops">Cyclops</option>
              </optgroup>
              <optgroup label="DC Comics">
                <option value="Superman">Superman</option>
                <option value="Batman">Batman</option>
              </optgroup>
            </BaseSelect>
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Icon" description="Select component icons">
        <div className="flex flex-wrap items-end gap-3 max-w-3xl">
          <div className="flex-1">
            <BaseSelect
              value={options.first}
              onChange={(value) =>
                setOptions((oldOptions) => ({ ...oldOptions, first: value }))
              }
              icon="fa6-solid:mask"
              size="sm"
              rounded="md"
              label="Rounded: md"
            >
              <option value="">Select a hero</option>
              <option value="Superman">Superman</option>
              <option value="Batman">Batman</option>
              <option value="Iron man">Iron man</option>
              <option value="Magneto">Magneto</option>
              <option value="Cyclops">Cyclops</option>
            </BaseSelect>
          </div>

          <div className="flex-1">
            <BaseSelect
              value={options.second}
              onChange={(value) =>
                setOptions((oldOptions) => ({ ...oldOptions, second: value }))
              }
              icon="fa6-solid:mask"
              size="md"
              rounded="md"
              label="Rounded: md"
            >
              <option value="">Select a hero</option>
              <option value="Superman">Superman</option>
              <option value="Batman">Batman</option>
              <option value="Iron man">Iron man</option>
              <option value="Magneto">Magneto</option>
              <option value="Cyclops">Cyclops</option>
            </BaseSelect>
          </div>

          <div className="flex-1">
            <BaseSelect
              value={options.third}
              onChange={(value) =>
                setOptions((oldOptions) => ({ ...oldOptions, third: value }))
              }
              icon="fa6-solid:mask"
              size="lg"
              rounded="md"
              label="Rounded: md"
            >
              <option value="">Select a hero</option>
              <option value="Superman">Superman</option>
              <option value="Batman">Batman</option>
              <option value="Iron man">Iron man</option>
              <option value="Magneto">Magneto</option>
              <option value="Cyclops">Cyclops</option>
            </BaseSelect>
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Error" description="Select component errors">
        <div className="flex flex-wrap items-end gap-3 max-w-3xl">
          <div className="flex-1">
            <BaseSelect
              value={options.first}
              onChange={(value) =>
                setOptions((oldOptions) => ({ ...oldOptions, first: value }))
              }
              size="sm"
              rounded="md"
              label="Rounded: md"
              error="This field is required"
            >
              <option value="">Select a hero</option>
              <option value="Superman">Superman</option>
              <option value="Batman">Batman</option>
              <option value="Iron man">Iron man</option>
              <option value="Magneto">Magneto</option>
              <option value="Cyclops">Cyclops</option>
            </BaseSelect>
          </div>

          <div className="flex-1">
            <BaseSelect
              value={options.second}
              onChange={(value) =>
                setOptions((oldOptions) => ({ ...oldOptions, second: value }))
              }
              size="md"
              rounded="md"
              label="Rounded: md"
              error="This field is required"
            >
              <option value="">Select a hero</option>
              <option value="Superman">Superman</option>
              <option value="Batman">Batman</option>
              <option value="Iron man">Iron man</option>
              <option value="Magneto">Magneto</option>
              <option value="Cyclops">Cyclops</option>
            </BaseSelect>
          </div>

          <div className="flex-1">
            <BaseSelect
              value={options.third}
              onChange={(value) =>
                setOptions((oldOptions) => ({ ...oldOptions, third: value }))
              }
              size="lg"
              rounded="md"
              label="Rounded: md"
              error="This field is required"
            >
              <option value="">Select a hero</option>
              <option value="Superman">Superman</option>
              <option value="Batman">Batman</option>
              <option value="Iron man">Iron man</option>
              <option value="Magneto">Magneto</option>
              <option value="Cyclops">Cyclops</option>
            </BaseSelect>
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Error: icon" description="Select component errors">
        <div className="flex flex-wrap items-end gap-3 max-w-3xl">
          <div className="flex-1">
            <BaseSelect
              value={options.first}
              onChange={(value) =>
                setOptions((oldOptions) => ({ ...oldOptions, first: value }))
              }
              icon="fa6-solid:mask"
              size="sm"
              rounded="md"
              label="Rounded: md"
              error="This field is required"
            >
              <option value="">Select a hero</option>
              <option value="Superman">Superman</option>
              <option value="Batman">Batman</option>
              <option value="Iron man">Iron man</option>
              <option value="Magneto">Magneto</option>
              <option value="Cyclops">Cyclops</option>
            </BaseSelect>
          </div>

          <div className="flex-1">
            <BaseSelect
              value={options.second}
              onChange={(value) =>
                setOptions((oldOptions) => ({ ...oldOptions, second: value }))
              }
              icon="fa6-solid:mask"
              size="md"
              rounded="md"
              label="Rounded: md"
              error="This field is required"
            >
              <option value="">Select a hero</option>
              <option value="Superman">Superman</option>
              <option value="Batman">Batman</option>
              <option value="Iron man">Iron man</option>
              <option value="Magneto">Magneto</option>
              <option value="Cyclops">Cyclops</option>
            </BaseSelect>
          </div>

          <div className="flex-1">
            <BaseSelect
              value={options.third}
              onChange={(value) =>
                setOptions((oldOptions) => ({ ...oldOptions, third: value }))
              }
              icon="fa6-solid:mask"
              size="lg"
              rounded="md"
              label="Rounded: md"
              error="This field is required"
            >
              <option value="">Select a hero</option>
              <option value="Superman">Superman</option>
              <option value="Batman">Batman</option>
              <option value="Iron man">Iron man</option>
              <option value="Magneto">Magneto</option>
              <option value="Cyclops">Cyclops</option>
            </BaseSelect>
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Label: float"
        description="Autocomplete component label float"
      >
        <div className="grid gap-6 md:max-w-lg md:grid-cols-2">
          <BaseSelect
            value={options.first}
            onChange={(value) =>
              setOptions((oldOptions) => ({ ...oldOptions, first: value }))
            }
            size="sm"
            rounded="md"
            label="Rounded: md"
            labelFloat
          >
            <option value="">Select a hero</option>
            <option value="Superman">Superman</option>
            <option value="Batman">Batman</option>
            <option value="Iron man">Iron man</option>
            <option value="Magneto">Magneto</option>
            <option value="Cyclops">Cyclops</option>
          </BaseSelect>
          <BaseSelect
            value={options.first}
            onChange={(value) =>
              setOptions((oldOptions) => ({ ...oldOptions, first: value }))
            }
            icon="fa6-solid:mask"
            size="sm"
            rounded="md"
            label="Rounded: md"
            labelFloat
          >
            <option value="">Select a hero</option>
            <option value="Superman">Superman</option>
            <option value="Batman">Batman</option>
            <option value="Iron man">Iron man</option>
            <option value="Magneto">Magneto</option>
            <option value="Cyclops">Cyclops</option>
          </BaseSelect>
          <BaseSelect
            value={options.second}
            onChange={(value) =>
              setOptions((oldOptions) => ({ ...oldOptions, second: value }))
            }
            size="md"
            rounded="md"
            label="Rounded: md"
            labelFloat
          >
            <option value="">Select a hero</option>
            <option value="Superman">Superman</option>
            <option value="Batman">Batman</option>
            <option value="Iron man">Iron man</option>
            <option value="Magneto">Magneto</option>
            <option value="Cyclops">Cyclops</option>
          </BaseSelect>
          <BaseSelect
            value={options.second}
            onChange={(value) =>
              setOptions((oldOptions) => ({ ...oldOptions, second: value }))
            }
            icon="fa6-solid:mask"
            size="md"
            rounded="md"
            label="Rounded: md"
            labelFloat
          >
            <option value="">Select a hero</option>
            <option value="Superman">Superman</option>
            <option value="Batman">Batman</option>
            <option value="Iron man">Iron man</option>
            <option value="Magneto">Magneto</option>
            <option value="Cyclops">Cyclops</option>
          </BaseSelect>
          <BaseSelect
            value={options.third}
            onChange={(value) =>
              setOptions((oldOptions) => ({ ...oldOptions, third: value }))
            }
            size="lg"
            rounded="md"
            label="Rounded: md"
            labelFloat
          >
            <option value="">Select a hero</option>
            <option value="Superman">Superman</option>
            <option value="Batman">Batman</option>
            <option value="Iron man">Iron man</option>
            <option value="Magneto">Magneto</option>
            <option value="Cyclops">Cyclops</option>
          </BaseSelect>
          <BaseSelect
            value={options.third}
            onChange={(value) =>
              setOptions((oldOptions) => ({ ...oldOptions, third: value }))
            }
            icon="fa6-solid:mask"
            size="lg"
            rounded="md"
            label="Rounded: md"
            labelFloat
          >
            <option value="">Select a hero</option>
            <option value="Superman">Superman</option>
            <option value="Batman">Batman</option>
            <option value="Iron man">Iron man</option>
            <option value="Magneto">Magneto</option>
            <option value="Cyclops">Cyclops</option>
          </BaseSelect>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Loading"
        description="Autocomplete component loading state"
      >
        <div className="grid gap-6 md:max-w-lg md:grid-cols-2">
          <BaseSelect
            value={options.first}
            onChange={(value) =>
              setOptions((oldOptions) => ({ ...oldOptions, first: value }))
            }
            size="sm"
            rounded="md"
            label="Rounded: md"
            loading
          >
            <option value="">Select a hero</option>
            <option value="Superman">Superman</option>
            <option value="Batman">Batman</option>
            <option value="Iron man">Iron man</option>
            <option value="Magneto">Magneto</option>
            <option value="Cyclops">Cyclops</option>
          </BaseSelect>
          <BaseSelect
            value={options.first}
            onChange={(value) =>
              setOptions((oldOptions) => ({ ...oldOptions, first: value }))
            }
            icon="fa6-solid:mask"
            size="sm"
            rounded="md"
            label="Rounded: md"
            loading
          >
            <option value="">Select a hero</option>
            <option value="Superman">Superman</option>
            <option value="Batman">Batman</option>
            <option value="Iron man">Iron man</option>
            <option value="Magneto">Magneto</option>
            <option value="Cyclops">Cyclops</option>
          </BaseSelect>
          <BaseSelect
            value={options.second}
            onChange={(value) =>
              setOptions((oldOptions) => ({ ...oldOptions, second: value }))
            }
            size="md"
            rounded="md"
            label="Rounded: md"
            loading
          >
            <option value="">Select a hero</option>
            <option value="Superman">Superman</option>
            <option value="Batman">Batman</option>
            <option value="Iron man">Iron man</option>
            <option value="Magneto">Magneto</option>
            <option value="Cyclops">Cyclops</option>
          </BaseSelect>
          <BaseSelect
            value={options.second}
            onChange={(value) =>
              setOptions((oldOptions) => ({ ...oldOptions, second: value }))
            }
            icon="fa6-solid:mask"
            size="md"
            rounded="md"
            label="Rounded: md"
            loading
          >
            <option value="">Select a hero</option>
            <option value="Superman">Superman</option>
            <option value="Batman">Batman</option>
            <option value="Iron man">Iron man</option>
            <option value="Magneto">Magneto</option>
            <option value="Cyclops">Cyclops</option>
          </BaseSelect>
          <BaseSelect
            value={options.third}
            onChange={(value) =>
              setOptions((oldOptions) => ({ ...oldOptions, third: value }))
            }
            size="lg"
            rounded="md"
            label="Rounded: md"
            loading
          >
            <option value="">Select a hero</option>
            <option value="Superman">Superman</option>
            <option value="Batman">Batman</option>
            <option value="Iron man">Iron man</option>
            <option value="Magneto">Magneto</option>
            <option value="Cyclops">Cyclops</option>
          </BaseSelect>
          <BaseSelect
            value={options.third}
            onChange={(value) =>
              setOptions((oldOptions) => ({ ...oldOptions, third: value }))
            }
            icon="fa6-solid:mask"
            size="lg"
            rounded="md"
            label="Rounded: md"
            loading
          >
            <option value="">Select a hero</option>
            <option value="Superman">Superman</option>
            <option value="Batman">Batman</option>
            <option value="Iron man">Iron man</option>
            <option value="Magneto">Magneto</option>
            <option value="Cyclops">Cyclops</option>
          </BaseSelect>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Disabled"
        description="Select component disabled state"
      >
        <div className="flex flex-wrap items-end gap-3 max-w-3xl">
          <div className="flex-1">
            <BaseSelect
              value={options.first}
              onChange={(value) =>
                setOptions((oldOptions) => ({ ...oldOptions, first: value }))
              }
              size="sm"
              rounded="md"
              label="Rounded: md"
              disabled
            >
              <option value="">Select a hero</option>
              <option value="Superman">Superman</option>
              <option value="Batman">Batman</option>
              <option value="Iron man">Iron man</option>
              <option value="Magneto">Magneto</option>
              <option value="Cyclops">Cyclops</option>
            </BaseSelect>
          </div>

          <div className="flex-1">
            <BaseSelect
              value={options.second}
              onChange={(value) =>
                setOptions((oldOptions) => ({ ...oldOptions, second: value }))
              }
              size="md"
              rounded="md"
              label="Rounded: md"
              disabled
            >
              <option value="">Select a hero</option>
              <option value="Superman">Superman</option>
              <option value="Batman">Batman</option>
              <option value="Iron man">Iron man</option>
              <option value="Magneto">Magneto</option>
              <option value="Cyclops">Cyclops</option>
            </BaseSelect>
          </div>

          <div className="flex-1">
            <BaseSelect
              value={options.third}
              onChange={(value) =>
                setOptions((oldOptions) => ({ ...oldOptions, third: value }))
              }
              size="lg"
              rounded="md"
              label="Rounded: md"
              disabled
            >
              <option value="">Select a hero</option>
              <option value="Superman">Superman</option>
              <option value="Batman">Batman</option>
              <option value="Iron man">Iron man</option>
              <option value="Magneto">Magneto</option>
              <option value="Cyclops">Cyclops</option>
            </BaseSelect>
          </div>
        </div>
      </NuiPreview>
    </Fragment>
  );
};

export default Select;
