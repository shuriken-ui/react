"use client";

import { Fragment, useState } from "react";
import NuiPreview from "@/components/NuiPreview";
import { BaseAutocomplete } from "@shuriken-ui/react";

interface Hobby {
  id: number;
  name: string;
  text: string;
  icon: string;
}

interface Person {
  id: number;
  name: string;
  text: string;
  media: string;
}
const Autocomplete = () => {
  const [persons, setPersons] = useState<Person[]>([
    {
      id: 1,
      name: "Clarissa Perez",
      text: "Sales Manager",
      media: "https://tairo.cssninja.io/img/avatars/19.svg",
    },
    {
      id: 2,
      name: "Aaron Splatter",
      text: "Project Manager",
      media: "https://tairo.cssninja.io/img/avatars/16.svg",
    },
    {
      id: 3,
      name: "Mike Miller",
      text: "UI/UX Designer",
      media: "https://tairo.cssninja.io/img/avatars/3.svg",
    },
    {
      id: 4,
      name: "Benedict Kessler",
      text: "Mobile Developer",
      media: "https://tairo.cssninja.io/img/avatars/22.svg",
    },
    {
      id: 5,
      name: "Maya Rosselini",
      text: "Product Manager",
      media: "https://tairo.cssninja.io/img/avatars/2.svg",
    },
  ]);
  const [person, setPerson] = useState<Person>();

  const [hobby, setHobby] = useState<Hobby>();

  const [hobbies, setHobbies] = useState<Hobby[]>([
    {
      id: 1,
      name: "Movies",
      text: "Cinema & shows",
      icon: "ph:sword-duotone",
    },
    {
      id: 2,
      name: "Travel",
      text: "Tourism & travel",
      icon: "ph:airplane-duotone",
    },
    {
      id: 3,
      name: "Drinks",
      text: "Wines & fine drinks",
      icon: "ph:brandy-duotone",
    },
    {
      id: 4,
      name: "Arts",
      text: "Paintings & scultpure",
      icon: "ph:paint-brush-duotone",
    },
    {
      id: 5,
      name: "Karaoke",
      text: "singing with friends",
      icon: "ph:microphone-stage-duotone",
    },
  ]);

  function filterItems(query?: string, items?: any[]) {
    if (!query || !items) {
      return items ?? [];
    }

    // search by name or text
    return items.filter((item) => {
      const nameMatches = item?.name
        ?.toLowerCase()
        .includes(query.toLowerCase());
      const textMatches = item?.text
        ?.toLowerCase()
        .includes(query.toLowerCase());
      return nameMatches || textMatches;
    });
  }

  const [fields, setFields] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
    fifth: "",
    sixth: "",
    seventh: "",
    eighth: "",
    ninth: "",
    tenth: "",
    eleventh: "",
    twelfth: "",
  });

  const [value, setValue] = useState<string[]>(["Next", "React.js"]);

  const [frameworks, setFrameworks] = useState([
    "Javascript",
    "Next",
    "Vue.js",
    "React.js",
    "Angular",
    "Alpine.js",
  ]);

  const [people, setPeople] = useState([
    "Clarissa Perez",
    "Aaron Splatter",
    "Mike Miller",
    "Benedict Kessler",
    "Maya Rosselini",
  ]);

  return (
    <Fragment>
      <NuiPreview title="Radius" description="Autocomplete component radiuses">
        <div className="grid gap-6 md:max-w-3xl md:grid-cols-3">
          <BaseAutocomplete
            value={fields.first}
            onChange={(val) =>
              setFields((oldFields) => ({ ...oldFields, first: val }))
            }
            items={frameworks}
            rounded="none"
            label="Rounded: none"
            placeholder="Ex: javascript"
          />

          <BaseAutocomplete
            value={fields.second}
            onChange={(val) =>
              setFields((oldFields) => ({ ...oldFields, second: val }))
            }
            items={frameworks}
            rounded="sm"
            label="Rounded: sm"
            placeholder="Ex: javascript"
          />

          <BaseAutocomplete
            value={fields.third}
            onChange={(val) =>
              setFields((oldFields) => ({ ...oldFields, third: val }))
            }
            items={frameworks}
            rounded="md"
            label="Rounded: md"
            placeholder="Ex: javascript"
          />

          <BaseAutocomplete
            value={fields.fourth}
            onChange={(val) =>
              setFields((oldFields) => ({ ...oldFields, fourth: val }))
            }
            items={frameworks}
            rounded="lg"
            label="Rounded: lg"
            placeholder="Ex: javascript"
          />

          <BaseAutocomplete
            value={fields.fifth}
            onChange={(val) =>
              setFields((oldFields) => ({ ...oldFields, fifth: val }))
            }
            items={frameworks}
            rounded="full"
            label="Rounded: full"
            placeholder="Ex: javascript"
          />
        </div>
      </NuiPreview>
      <NuiPreview title="Size" description="Autocomplete component sizes">
        <div className="flex flex-wrap items-end gap-3 max-w-3xl">
          <div className="flex-1">
            <BaseAutocomplete
              value={fields.first}
              onChange={(val) =>
                setFields((oldFields) => ({ ...oldFields, first: val }))
              }
              items={frameworks}
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Ex: javascript"
            />
          </div>

          <div className="flex-1">
            <BaseAutocomplete
              v-model="fields.second"
              value={fields.second}
              onChange={(val) =>
                setFields((oldFields) => ({ ...oldFields, second: val }))
              }
              items={frameworks}
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Ex: javascript"
            />
          </div>

          <div className="flex-1">
            <BaseAutocomplete
              v-model="fields.third"
              value={fields.third}
              onChange={(val) =>
                setFields((oldFields) => ({ ...oldFields, third: val }))
              }
              items={frameworks}
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Ex: javascript"
            />
          </div>
        </div>
      </NuiPreview>
      <NuiPreview
        title="Contrast: default-contrast"
        description="Autocomplete component default contrast"
      >
        <div className="flex flex-wrap items-end gap-3 max-w-3xl">
          <div className="flex-1">
            <BaseAutocomplete
              value={fields.first}
              onChange={(val) =>
                setFields((oldFields) => ({ ...oldFields, first: val }))
              }
              items={frameworks}
              contrast="default-contrast"
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Ex: javascript"
            />
          </div>

          <div className="flex-1">
            <BaseAutocomplete
              value={fields.second}
              onChange={(val) =>
                setFields((oldFields) => ({ ...oldFields, second: val }))
              }
              items={frameworks}
              contrast="default-contrast"
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Ex: javascript"
            />
          </div>

          <div className="flex-1">
            <BaseAutocomplete
              value={fields.third}
              onChange={(val) =>
                setFields((oldFields) => ({ ...oldFields, third: val }))
              }
              items={frameworks}
              contrast="default-contrast"
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Ex: javascript"
            />
          </div>
        </div>
      </NuiPreview>
      <NuiPreview
        title="Contrast: muted"
        description="Autocomplete component muted"
      >
        <div className="flex flex-wrap items-end gap-3 max-w-3xl">
          <div className="flex-1">
            <BaseAutocomplete
              value={fields.first}
              onChange={(val) =>
                setFields((oldFields) => ({ ...oldFields, first: val }))
              }
              items={frameworks}
              contrast="muted"
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Ex: javascript"
            />
          </div>

          <div className="flex-1">
            <BaseAutocomplete
              value={fields.second}
              onChange={(val) =>
                setFields((oldFields) => ({ ...oldFields, second: val }))
              }
              items={frameworks}
              contrast="muted"
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Ex: javascript"
            />
          </div>

          <div className="flex-1">
            <BaseAutocomplete
              value={fields.third}
              onChange={(val) =>
                setFields((oldFields) => ({ ...oldFields, third: val }))
              }
              items={frameworks}
              contrast="muted"
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Ex: javascript"
            />
          </div>
        </div>
      </NuiPreview>
      <NuiPreview
        title="Contrast: muted-contrast"
        description="Autocomplete component muted contrast"
      >
        <div className="flex flex-wrap items-end gap-3 max-w-3xl">
          <div className="flex-1">
            <BaseAutocomplete
              value={fields.first}
              onChange={(val) =>
                setFields((oldFields) => ({ ...oldFields, first: val }))
              }
              items={frameworks}
              contrast="muted-contrast"
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Ex: javascript"
            />
          </div>

          <div className="flex-1">
            <BaseAutocomplete
              value={fields.second}
              onChange={(val) =>
                setFields((oldFields) => ({ ...oldFields, second: val }))
              }
              items={frameworks}
              contrast="muted-contrast"
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Ex: javascript"
            />
          </div>

          <div className="flex-1">
            <BaseAutocomplete
              value={fields.third}
              onChange={(val) =>
                setFields((oldFields) => ({ ...oldFields, third: val }))
              }
              items={frameworks}
              contrast="muted-contrast"
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Ex: javascript"
            />
          </div>
        </div>
      </NuiPreview>
      <NuiPreview title="Error" description="Autocomplete component error">
        <div className="flex flex-wrap items-end gap-3 max-w-3xl">
          <div className="flex-1">
            <BaseAutocomplete
              value={fields.first}
              onChange={(val) =>
                setFields((oldFields) => ({ ...oldFields, first: val }))
              }
              items={frameworks}
              contrast="default-contrast"
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Ex: javascript"
              error="Please select a framework"
            />
          </div>

          <div className="flex-1">
            <BaseAutocomplete
              value={fields.second}
              onChange={(val) =>
                setFields((oldFields) => ({ ...oldFields, second: val }))
              }
              items={frameworks}
              contrast="default-contrast"
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Ex: javascript"
              error="Please select a framework"
            />
          </div>

          <div className="flex-1">
            <BaseAutocomplete
              value={fields.third}
              onChange={(val) =>
                setFields((oldFields) => ({ ...oldFields, third: val }))
              }
              items={frameworks}
              contrast="default-contrast"
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Ex: javascript"
              error="Please select a framework"
            />
          </div>
        </div>
      </NuiPreview>
      <NuiPreview
        title="Disabled"
        description="Autocomplete component disabled"
      >
        <div className="flex flex-wrap items-end gap-3 max-w-3xl">
          <div className="flex-1">
            <BaseAutocomplete
              value={fields.first}
              onChange={(val) =>
                setFields((oldFields) => ({ ...oldFields, first: val }))
              }
              items={frameworks}
              contrast="default-contrast"
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Ex: javascript"
              disabled
            />
          </div>

          <div className="flex-1">
            <BaseAutocomplete
              value={fields.second}
              onChange={(val) =>
                setFields((oldFields) => ({ ...oldFields, second: val }))
              }
              items={frameworks}
              contrast="default-contrast"
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Ex: javascript"
              disabled
            />
          </div>

          <div className="flex-1">
            <BaseAutocomplete
              value={fields.third}
              onChange={(val) =>
                setFields((oldFields) => ({ ...oldFields, third: val }))
              }
              items={frameworks}
              contrast="default-contrast"
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Ex: javascript"
              disabled
            />
          </div>
        </div>
      </NuiPreview>
      <NuiPreview title="Icon" description="Autocomplete component icon">
        <div className="flex flex-wrap items-end gap-5 max-w-3xl">
          <div className="flex-1">
            <BaseAutocomplete
              value={fields.sixth}
              onChange={(val) =>
                setFields((oldFields) => ({ ...oldFields, sixth: val }))
              }
              items={frameworks}
              icon="lucide:search"
              size="sm"
              rounded="md"
              placeholder="e.g. Next"
              label="Framework"
            />
          </div>
          <div className="flex-1">
            <BaseAutocomplete
              value={fields.sixth}
              onChange={(val) =>
                setFields((oldFields) => ({ ...oldFields, sixth: val }))
              }
              items={frameworks}
              icon="lucide:search"
              rounded="md"
              placeholder="e.g. Next"
              label="Framework"
            />
          </div>
          <div className="flex-1">
            <BaseAutocomplete
              value={fields.sixth}
              onChange={(val) =>
                setFields((oldFields) => ({ ...oldFields, sixth: val }))
              }
              items={frameworks}
              icon="lucide:search"
              size="lg"
              rounded="md"
              placeholder="e.g. Next"
              label="Framework"
            />
          </div>
        </div>
      </NuiPreview>
      <NuiPreview
        title="Clearable"
        description="Autocomplete component clear button"
      >
        <div className="flex flex-wrap items-end gap-5 max-w-3xl">
          <div className="flex-1">
            <BaseAutocomplete
              value={fields.seventh}
              onChange={(val) =>
                setFields((oldFields) => ({ ...oldFields, seventh: val }))
              }
              items={frameworks}
              icon="lucide:search"
              size="sm"
              rounded="md"
              placeholder="e.g. Next"
              label="Framework"
              clearable
            />
          </div>
          <div className="flex-1">
            <BaseAutocomplete
              value={fields.seventh}
              onChange={(val) =>
                setFields((oldFields) => ({ ...oldFields, seventh: val }))
              }
              items={frameworks}
              icon="lucide:search"
              size="md"
              rounded="md"
              placeholder="e.g. Next"
              label="Framework"
              clearable
            />
          </div>
          <div className="flex-1">
            <BaseAutocomplete
              value={fields.seventh}
              onChange={(val) =>
                setFields((oldFields) => ({ ...oldFields, seventh: val }))
              }
              items={frameworks}
              icon="lucide:search"
              size="lg"
              rounded="md"
              placeholder="e.g. Next"
              label="Framework"
              clearable
            />
          </div>
        </div>
      </NuiPreview>
      <NuiPreview
        title="Multiple"
        description="Autocomplete component multiple selection"
      >
        <div className="max-w-sm">
          <BaseAutocomplete
            value={value}
            onChange={(val) => {
              setValue((oldValues) => [...oldValues, val]);
            }}
            items={frameworks}
            rounded="md"
            icon="lucide:list-filter"
            placeholder="Search..."
            label="Assignee"
            multiple
          />
        </div>
      </NuiPreview>
      <NuiPreview
        title="Label: float"
        description="Autocomplete component label float"
      >
        <div className="grid gap-6 md:max-w-lg md:grid-cols-2">
          <BaseAutocomplete
            value={fields.tenth}
            onChange={(val) =>
              setFields((oldFields) => ({ ...oldFields, tenth: val }))
            }
            items={frameworks}
            size="sm"
            rounded="md"
            placeholder="e.g. Next"
            label="Framework"
            label-float
          />
          <BaseAutocomplete
            value={fields.eleventh}
            onChange={(val) =>
              setFields((oldFields) => ({ ...oldFields, eleventh: val }))
            }
            items={frameworks}
            size="sm"
            icon="lucide:search"
            rounded="md"
            placeholder="e.g. Next"
            label="Framework"
            label-float
          />
          <BaseAutocomplete
            value={fields.tenth}
            onChange={(val) =>
              setFields((oldFields) => ({ ...oldFields, tenth: val }))
            }
            items={frameworks}
            rounded="md"
            placeholder="e.g. Next"
            label="Framework"
            label-float
          />

          <BaseAutocomplete
            value={fields.eleventh}
            onChange={(val) =>
              setFields((oldFields) => ({ ...oldFields, eleventh: val }))
            }
            items={frameworks}
            icon="lucide:search"
            rounded="md"
            placeholder="e.g. Next"
            label="Framework"
            label-float
          />
          <BaseAutocomplete
            value={fields.tenth}
            onChange={(val) =>
              setFields((oldFields) => ({ ...oldFields, tenth: val }))
            }
            items={frameworks}
            size="lg"
            rounded="md"
            placeholder="e.g. Next"
            label="Framework"
            label-float
          />

          <BaseAutocomplete
            value={fields.eleventh}
            onChange={(val) =>
              setFields((oldFields) => ({ ...oldFields, eleventh: val }))
            }
            items={frameworks}
            icon="lucide:search"
            size="lg"
            rounded="md"
            placeholder="e.g. Next"
            label="Framework"
            label-float
          />
        </div>
      </NuiPreview>
      <NuiPreview
        title="Loading"
        description="Autocomplete component loading state"
      >
        <div className="grid gap-6 md:max-w-lg md:grid-cols-2">
          <BaseAutocomplete
            value={fields.tenth}
            onChange={(val) =>
              setFields((oldFields) => ({ ...oldFields, tenth: val }))
            }
            items={frameworks}
            size="sm"
            rounded="md"
            placeholder="e.g. Next"
            label="Framework"
            loading
          />
          <BaseAutocomplete
            value={fields.eleventh}
            onChange={(val) =>
              setFields((oldFields) => ({ ...oldFields, eleventh: val }))
            }
            items={frameworks}
            size="sm"
            icon="lucide:search"
            rounded="md"
            placeholder="e.g. Next"
            label="Framework"
            loading
          />
          <BaseAutocomplete
            value={fields.tenth}
            onChange={(val) =>
              setFields((oldFields) => ({ ...oldFields, tenth: val }))
            }
            items={frameworks}
            rounded="md"
            placeholder="e.g. Next"
            label="Framework"
            loading
          />

          <BaseAutocomplete
            value={fields.eleventh}
            onChange={(val) =>
              setFields((oldFields) => ({ ...oldFields, eleventh: val }))
            }
            items={frameworks}
            icon="lucide:search"
            rounded="md"
            placeholder="e.g. Next"
            label="Framework"
            loading
          />
          <BaseAutocomplete
            value={fields.tenth}
            onChange={(val) =>
              setFields((oldFields) => ({ ...oldFields, tenth: val }))
            }
            items={frameworks}
            size="lg"
            rounded="md"
            placeholder="e.g. Next"
            label="Framework"
            loading
          />

          <BaseAutocomplete
            value={fields.eleventh}
            onChange={(val) =>
              setFields((oldFields) => ({ ...oldFields, eleventh: val }))
            }
            items={frameworks}
            icon="lucide:search"
            size="lg"
            rounded="md"
            placeholder="e.g. Next"
            label="Framework"
            loading
          />
        </div>
      </NuiPreview>
      <NuiPreview
        title="Result: icons"
        description="Autocomplete component icon results"
      >
        <div className="max-w-sm">
          <BaseAutocomplete
            value={hobby}
            onChange={(val) => setHobby(val)}
            items={hobbies}
            displayValue={(item: Hobby) => item.name}
            filterItems={filterItems}
            icon="ph:buildings"
            rounded="md"
            placeholder="Select a hobby"
            label="Company"
            clearable
            properties={{
              value: "id",
              label: "name",
              sublabel: "text",
              icon: "icon",
            }}
          />
        </div>
      </NuiPreview>
      <NuiPreview
        title="Result: images"
        description="Autocomplete component icon results"
      >
        <div className="max-w-sm">
          <BaseAutocomplete
            value={person}
            items={persons}
            displayValue={(item: Person) => item.name}
            filterItems={filterItems}
            icon="ph:users-three"
            rounded="md"
            placeholder="Search..."
            label="Assignee"
            clearable
            properties={{
              value: "id",
              label: "name",
              sublabel: "text",
              media: "media",
            }}
          />
        </div>
      </NuiPreview>
    </Fragment>
  );
};

export default Autocomplete;
