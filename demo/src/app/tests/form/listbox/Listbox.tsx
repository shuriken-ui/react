"use client";
import React, { Fragment, useState } from "react";
import NuiPreview from "@/components/NuiPreview";

import { BaseListbox } from "@shuriken-ui/react";

const frameworks = ["Javascript", "Vue.js", "React.js", "Angular", "Alpine.js"];

const hobbies = [
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
];

const people = [
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
];
const Listbox = () => {
  const [radiusValue, setRadiusValue] = useState<string>();

  const [multipleValues, setMultipleValues] = useState([]);
  const [assigneeValue, setAssigneeValue] = useState({
    id: 2,
    name: "Aaron Splatter",
    text: "Project Manager",
    media: "https://tairo.cssninja.io/img/avatars/16.svg",
  });
  const [hobbiesValue, setHobbiesValue] = useState({
    id: 2,
    name: "Travel",
    text: "Tourism & travel",
    icon: "ph:airplane-duotone",
  });

  return (
    <Fragment>
      <NuiPreview title="Radius" description="Listbox component radiuses">
        <div className="grid gap-6 md:max-w-4xl md:grid-cols-3">
          <BaseListbox
            value={radiusValue}
            onChange={setRadiusValue}
            label="Rounded: none"
            items={frameworks}
            placeholder="Select a framework"
            rounded="none"
          />
          <BaseListbox
            value={radiusValue}
            onChange={setRadiusValue}
            label="Rounded: sm"
            items={frameworks}
            placeholder="Select a framework"
            rounded="sm"
          />
          <BaseListbox
            value={radiusValue}
            onChange={setRadiusValue}
            label="Rounded: md"
            items={frameworks}
            placeholder="Select a framework"
            rounded="md"
          />
          <BaseListbox
            value={radiusValue}
            onChange={setRadiusValue}
            label="Rounded: lg"
            items={frameworks}
            placeholder="Select a framework"
            rounded="lg"
          />
          <BaseListbox
            value={radiusValue}
            onChange={setRadiusValue}
            label="Rounded: full"
            items={frameworks}
            placeholder="Select a framework"
            rounded="full"
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Size" description="Listbox component sizes">
        <div className="flex flex-wrap items-end gap-3 max-w-3xl">
          <div className="flex-1">
            <BaseListbox
              value={radiusValue}
              onChange={setRadiusValue}
              label="Rounded: md"
              size="sm"
              items={frameworks}
              placeholder="Select a framework"
              rounded="md"
            />
          </div>

          <div className="flex-1">
            <BaseListbox
              value={radiusValue}
              onChange={setRadiusValue}
              label="Rounded: md"
              size="md"
              items={frameworks}
              placeholder="Select a framework"
              rounded="md"
            />
          </div>

          <div className="flex-1">
            <BaseListbox
              value={radiusValue}
              onChange={setRadiusValue}
              label="Rounded: md"
              size="lg"
              items={frameworks}
              placeholder="Select a framework"
              rounded="md"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Contrast: default-contrast"
        description="Listbox component default contrast"
      >
        <div className="flex flex-wrap items-end gap-3 max-w-3xl">
          <div className="flex-1">
            <BaseListbox
              value={radiusValue}
              onChange={setRadiusValue}
              contrast="default-contrast"
              label="Rounded: md"
              size="sm"
              items={frameworks}
              placeholder="Select a framework"
              rounded="md"
            />
          </div>

          <div className="flex-1">
            <BaseListbox
              value={radiusValue}
              onChange={setRadiusValue}
              contrast="default-contrast"
              label="Rounded: md"
              size="md"
              items={frameworks}
              placeholder="Select a framework"
              rounded="md"
            />
          </div>

          <div className="flex-1">
            <BaseListbox
              value={radiusValue}
              onChange={setRadiusValue}
              contrast="default-contrast"
              label="Rounded: md"
              size="lg"
              items={frameworks}
              placeholder="Select a framework"
              rounded="md"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Contrast: muted" description="Listbox component muted">
        <div className="flex flex-wrap items-end gap-3 max-w-3xl">
          <div className="flex-1">
            <BaseListbox
              value={radiusValue}
              onChange={setRadiusValue}
              contrast="muted"
              label="Rounded: md"
              size="sm"
              items={frameworks}
              placeholder="Select a framework"
              rounded="md"
            />
          </div>

          <div className="flex-1">
            <BaseListbox
              value={radiusValue}
              onChange={setRadiusValue}
              contrast="muted"
              label="Rounded: md"
              size="md"
              items={frameworks}
              placeholder="Select a framework"
              rounded="md"
            />
          </div>

          <div className="flex-1">
            <BaseListbox
              value={radiusValue}
              onChange={setRadiusValue}
              contrast="muted"
              label="Rounded: md"
              size="lg"
              items={frameworks}
              placeholder="Select a framework"
              rounded="md"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Contrast: muted-contrast"
        description="Listbox component muted contrast"
      >
        <div className="flex flex-wrap items-end gap-3 max-w-3xl">
          <div className="flex-1">
            <BaseListbox
              value={radiusValue}
              onChange={setRadiusValue}
              contrast="muted-contrast"
              label="Rounded: md"
              size="sm"
              items={frameworks}
              placeholder="Select a framework"
              rounded="md"
            />
          </div>

          <div className="flex-1">
            <BaseListbox
              value={radiusValue}
              onChange={setRadiusValue}
              contrast="muted-contrast"
              label="Rounded: md"
              size="md"
              items={frameworks}
              placeholder="Select a framework"
              rounded="md"
            />
          </div>

          <div className="flex-1">
            <BaseListbox
              value={radiusValue}
              onChange={setRadiusValue}
              contrast="muted-contrast"
              label="Rounded: md"
              size="lg"
              items={frameworks}
              placeholder="Select a framework"
              rounded="md"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Error" description="Listbox component errors">
        <div className="flex flex-wrap items-end gap-3 max-w-3xl">
          <div className="flex-1">
            <BaseListbox
              value={radiusValue}
              onChange={setRadiusValue}
              label="Rounded: md"
              size="sm"
              items={frameworks}
              placeholder="Select a framework"
              rounded="md"
              error="This field is required"
            />
          </div>

          <div className="flex-1">
            <BaseListbox
              value={radiusValue}
              onChange={setRadiusValue}
              label="Rounded: md"
              size="md"
              items={frameworks}
              placeholder="Select a framework"
              rounded="md"
              error="This field is required"
            />
          </div>

          <div className="flex-1">
            <BaseListbox
              value={radiusValue}
              onChange={setRadiusValue}
              label="Rounded: md"
              size="lg"
              items={frameworks}
              placeholder="Select a framework"
              rounded="md"
              error="This field is required"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Disabled" description="Listbox component disabled">
        <div className="flex flex-wrap items-end gap-3 max-w-3xl">
          <div className="flex-1">
            <BaseListbox
              value={radiusValue}
              onChange={setRadiusValue}
              label="Rounded: md"
              size="sm"
              items={frameworks}
              placeholder="Select a framework"
              rounded="md"
              disabled
            />
          </div>

          <div className="flex-1">
            <BaseListbox
              value={radiusValue}
              onChange={setRadiusValue}
              label="Rounded: md"
              size="md"
              items={frameworks}
              placeholder="Select a framework"
              rounded="md"
              disabled
            />
          </div>

          <div className="flex-1">
            <BaseListbox
              value={radiusValue}
              onChange={setRadiusValue}
              label="Rounded: md"
              size="lg"
              items={frameworks}
              placeholder="Select a framework"
              rounded="md"
              disabled
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Label: float"
        description="Listbox component label float"
      >
        <div className="grid gap-6 md:max-w-xl md:grid-cols-2">
          <BaseListbox
            value={radiusValue}
            onChange={setRadiusValue}
            label="Rounded: md"
            size="sm"
            items={frameworks}
            placeholder="Select a framework"
            rounded="md"
            labelFloat
          />
          <BaseListbox
            value={assigneeValue}
            onChange={setAssigneeValue}
            size="sm"
            rounded="md"
            label="Hobbies"
            items={people}
            properties={{
              value: "id",
              label: "name",
              sublabel: "text",
              media: "media",
            }}
            labelFloat
          />
          <BaseListbox
            value={radiusValue}
            onChange={setRadiusValue}
            label="Rounded: md"
            size="md"
            items={frameworks}
            placeholder="Select a framework"
            rounded="md"
            labelFloat
          />
          <BaseListbox
            value={assigneeValue}
            onChange={setAssigneeValue}
            size="md"
            rounded="md"
            label="Hobbies"
            items={people}
            properties={{
              value: "id",
              label: "name",
              sublabel: "text",
              media: "media",
            }}
            labelFloat
          />
          <BaseListbox
            value={radiusValue}
            onChange={setRadiusValue}
            label="Rounded: md"
            size="lg"
            items={frameworks}
            placeholder="Select a framework"
            rounded="md"
            labelFloat
          />
          <BaseListbox
            value={assigneeValue}
            onChange={setAssigneeValue}
            size="lg"
            rounded="md"
            label="Hobbies"
            items={people}
            properties={{
              value: "id",
              label: "name",
              sublabel: "text",
              media: "media",
            }}
            labelFloat
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Loading" description="Listbox component loading state">
        <div className="grid gap-6 md:max-w-2xl md:grid-cols-2">
          <BaseListbox
            value={radiusValue}
            onChange={setRadiusValue}
            label="Rounded: md"
            size="sm"
            items={frameworks}
            placeholder="Select a framework"
            rounded="md"
            loading
          />
          <BaseListbox
            value={assigneeValue}
            onChange={setAssigneeValue}
            size="sm"
            rounded="md"
            label="Hobbies"
            items={people}
            properties={{
              value: "id",
              label: "name",
              sublabel: "text",
              media: "media",
            }}
            loading
          />
          <BaseListbox
            value={radiusValue}
            onChange={setRadiusValue}
            label="Rounded: md"
            size="md"
            items={frameworks}
            placeholder="Select a framework"
            rounded="md"
            loading
          />
          <BaseListbox
            value={assigneeValue}
            onChange={setAssigneeValue}
            size="md"
            rounded="md"
            label="Hobbies"
            items={people}
            properties={{
              value: "id",
              label: "name",
              sublabel: "text",
              media: "media",
            }}
            loading
          />
          <BaseListbox
            value={radiusValue}
            onChange={setRadiusValue}
            label="Rounded: md"
            size="lg"
            items={frameworks}
            placeholder="Select a framework"
            rounded="md"
            loading
          />
          <BaseListbox
            value={assigneeValue}
            onChange={setAssigneeValue}
            size="lg"
            rounded="md"
            label="Hobbies"
            items={people}
            properties={{
              value: "id",
              label: "name",
              sublabel: "text",
              media: "media",
            }}
            loading
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Sublabel" description="Listbox component sublabels">
        <div className="flex flex-wrap items-end gap-3 max-w-3xl">
          <div className="flex-1">
            <BaseListbox
              value={hobbiesValue}
              onChange={setHobbiesValue}
              size="sm"
              rounded="md"
              label="Hobbies"
              items={hobbies}
              properties={{
                value: "id",
                label: "name",
                sublabel: "text",
              }}
            />
          </div>

          <div className="flex-1">
            <BaseListbox
              value={hobbiesValue}
              onChange={setHobbiesValue}
              size="md"
              rounded="md"
              label="Hobbies"
              items={hobbies}
              properties={{
                value: "id",
                label: "name",
                sublabel: "text",
              }}
            />
          </div>

          <div className="flex-1">
            <BaseListbox
              value={hobbiesValue}
              onChange={setHobbiesValue}
              size="lg"
              rounded="md"
              label="Hobbies"
              items={hobbies}
              properties={{
                value: "id",
                label: "name",
                sublabel: "text",
              }}
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Icon" description="Listbox component icons">
        <div className="flex flex-wrap items-end gap-3 max-w-3xl">
          <div className="flex-1">
            <BaseListbox
              value={hobbiesValue}
              onChange={setHobbiesValue}
              size="sm"
              rounded="md"
              label="Hobbies"
              items={hobbies}
              properties={{
                value: "id",
                label: "name",
                sublabel: "text",
                icon: "icon",
              }}
            />
          </div>

          <div className="flex-1">
            <BaseListbox
              value={hobbiesValue}
              onChange={setHobbiesValue}
              size="md"
              rounded="md"
              label="Hobbies"
              items={hobbies}
              properties={{
                value: "id",
                label: "name",
                sublabel: "text",
                icon: "icon",
              }}
            />
          </div>

          <div className="flex-1">
            <BaseListbox
              value={hobbiesValue}
              onChange={setHobbiesValue}
              size="lg"
              rounded="md"
              label="Hobbies"
              items={hobbies}
              properties={{
                value: "id",
                label: "name",
                sublabel: "text",
                icon: "icon",
              }}
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Image" description="Listbox component images">
        <div className="flex flex-wrap items-end gap-3 max-w-4xl">
          <div className="flex-1">
            <BaseListbox
              value={assigneeValue}
              onChange={setAssigneeValue}
              size="sm"
              rounded="md"
              label="Hobbies"
              items={people}
              properties={{
                value: "id",
                label: "name",
                sublabel: "text",
                media: "media",
              }}
            />
          </div>

          <div className="flex-1">
            <BaseListbox
              value={assigneeValue}
              onChange={setAssigneeValue}
              size="md"
              rounded="md"
              label="Hobbies"
              items={people}
              properties={{
                value: "id",
                label: "name",
                sublabel: "text",
                media: "media",
              }}
            />
          </div>

          <div className="flex-1">
            <BaseListbox
              value={assigneeValue}
              onChange={setAssigneeValue}
              size="lg"
              rounded="md"
              label="Hobbies"
              items={people}
              properties={{
                value: "id",
                label: "name",
                sublabel: "text",
                media: "media",
              }}
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Multiple"
        description="Listbox component multiple selection"
      >
        <div className="flex flex-wrap items-end gap-3 max-w-3xl">
          <div className="flex-1">
            <BaseListbox
              value={multipleValues}
              onChange={setMultipleValues}
              size="sm"
              rounded="md"
              label="Hobbies"
              items={people}
              properties={{
                value: "id",
                label: "name",
                sublabel: "text",
                media: "media",
              }}
              multiple
            />
          </div>

          <div className="flex-1">
            <BaseListbox
              value={multipleValues}
              onChange={setMultipleValues}
              size="md"
              rounded="md"
              label="Hobbies"
              items={people}
              properties={{
                value: "id",
                label: "name",
                sublabel: "text",
                media: "media",
              }}
              multiple
            />
          </div>

          <div className="flex-1">
            <BaseListbox
              value={multipleValues}
              onChange={setMultipleValues}
              size="lg"
              rounded="md"
              label="Hobbies"
              items={people}
              properties={{
                value: "id",
                label: "name",
                sublabel: "text",
                media: "media",
              }}
              multiple
            />
          </div>
        </div>
      </NuiPreview>
    </Fragment>
  );
};

export default Listbox;
