"use client";

import React, { useState } from "react";

import {
  BaseAutocomplete,
} from "@shuriken-ui/react";

import NuiPreview from "@/components/NuiPreview";

interface Person {
  id: number
  name: string
  text: string
  media: string
}
interface Hobby {
  id: number
  name: string
  text: string
  icon: string
}

const persons: Person[] = [
  {
    id: 1,
    name: 'Clarissa Perez',
    text: 'Sales Manager',
    media: 'https://tairo.cssninja.io/img/avatars/19.svg',
  },
  {
    id: 2,
    name: 'Aaron Splatter',
    text: 'Project Manager',
    media: 'https://tairo.cssninja.io/img/avatars/16.svg',
  },
  {
    id: 3,
    name: 'Mike Miller',
    text: 'UI/UX Designer',
    media: 'https://tairo.cssninja.io/img/avatars/3.svg',
  },
  {
    id: 4,
    name: 'Benedict Kessler',
    text: 'Mobile Developer',
    media: 'https://tairo.cssninja.io/img/avatars/22.svg',
  },
  {
    id: 5,
    name: 'Maya Rosselini',
    text: 'Product Manager',
    media: 'https://tairo.cssninja.io/img/avatars/2.svg',
  },
]

const hobbies: Hobby[] = [
  {
    id: 1,
    name: 'Movies',
    text: 'Cinema & shows',
    icon: 'ph:sword-duotone',
  },
  {
    id: 2,
    name: 'Travel',
    text: 'Tourism & travel',
    icon: 'ph:airplane-duotone',
  },
  {
    id: 3,
    name: 'Drinks',
    text: 'Wines & fine drinks',
    icon: 'ph:brandy-duotone',
  },
  {
    id: 4,
    name: 'Arts',
    text: 'Paintings & scultpure',
    icon: 'ph:paint-brush-duotone',
  },
  {
    id: 5,
    name: 'Karaoke',
    text: 'singing with friends',
    icon: 'ph:microphone-stage-duotone',
  },
]

const frameworks: string[] = [
  'Javascript',
  'Nuxt',
  'Vue.js',
  'React.js',
  'Angular',
  'Alpine.js',
]

function filterItems(query?: string, items?: any[]) {
  if (!query || !items) {
    return items ?? []
  }

  // search by name or text
  return items.filter((item) => {
    const nameMatches = item?.name?.toLowerCase().includes(query.toLowerCase())
    const textMatches = item?.text?.toLowerCase().includes(query.toLowerCase())
    return nameMatches || textMatches
  })
}

const Autcompletes = () => {
  const [first, setFirst] = useState('')
  const [second, setSecond] = useState('')
  const [third, setThird] = useState('')
  const [fourth, setFourth] = useState('')
  const [fifth, setFifth] = useState('')
  const [sixth, setSixth] = useState('')
  const [seventh, setSeventh] = useState<string>()
  const [eighth, setEighth] = useState('')
  const [ninth, setNinth] = useState('Nuxt')
  const [tenth, setTenth] = useState('')
  const [eleventh, setEleventh] = useState('')
  const [twelfth, setTwelfth] = useState('')
  const [thirteenth, setThirteenth] = useState('')

  const [personValue, setPersonValue] = useState<Person>()
  const [personSelection, setPersonSelection] = useState<Person[]>([persons[1]])
  const [personSelectionProp, setPersonSelectionProp] = useState<Person['id'][]>([2])

  const [hobbyValue, setHobbyValue] = useState<Hobby>()
  const [multipleValue, setMultipleValue] = useState<string[]>(['Nuxt', 'Vue.js'])
  
  return (
    <>
      <NuiPreview title="Radius" description="Autocomplete component radiuses">
        <div className="grid gap-6 md:max-w-3xl md:grid-cols-3">
          <BaseAutocomplete
            value={first}
            items={frameworks}
            rounded="none"
            label="Rounded: none"
            placeholder="Ex: javascript"
            onChange={(value) => setFirst(value)}
          />
          <BaseAutocomplete
            value={second}
            items={frameworks}
            rounded="sm"
            label="Rounded: sm"
            placeholder="Ex: javascript"
            onChange={(value) => setSecond(value)}
          />
          <BaseAutocomplete
            value={third}
            items={frameworks}
            rounded="md"
            label="Rounded: md"
            placeholder="Ex: javascript"
            onChange={(value) => setThird(value)}
          />
          <BaseAutocomplete
            value={fourth}
            items={frameworks}
            rounded="lg"
            label="Rounded: lg"
            placeholder="Ex: javascript"
            onChange={(value) => setFourth(value)}
          />
          <BaseAutocomplete
            value={fifth}
            items={frameworks}
            rounded="full"
            label="Rounded: full"
            placeholder="Ex: javascript"
            onChange={(value) => setFifth(value)}
          />
        </div>
      </NuiPreview>
      

      <NuiPreview title="Size" description="Autocomplete component sizes">
        <div className="flex flex-wrap items-end gap-3 max-w-3xl">
          <div className="flex-1">
            <BaseAutocomplete
              value={first}
              items={frameworks}
              size="sm"
              label="Size: sm"
              placeholder="Ex: javascript"
              onChange={(value) => setFirst(value)}
            />
          </div>

          <div className="flex-1">
            <BaseAutocomplete
              value={second}
              items={frameworks}
              size="md"
              label="Size: md"
              placeholder="Ex: javascript"
              onChange={(value) => setSecond(value)}
            />
          </div>

          <div className="flex-1">
            <BaseAutocomplete
              value={third}
              items={frameworks}
              size="lg"
              label="Size: lg"
              placeholder="Ex: javascript"
              onChange={(value) => setThird(value)}
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
              value={first}
              items={frameworks}
              contrast="default-contrast"
              size="sm"
              label="Size: sm"
              placeholder="Ex: javascript"
              onChange={(value) => setFirst(value)}
            />
          </div>

          <div className="flex-1">
            <BaseAutocomplete
              value={second}
              items={frameworks}
              contrast="default-contrast"
              size="md"
              label="Size: md"
              placeholder="Ex: javascript"
              onChange={(value) => setSecond(value)}
            />
          </div>

          <div className="flex-1">
            <BaseAutocomplete
              value={third}
              items={frameworks}
              contrast="default-contrast"
              size="lg"
              label="Size: lg"
              placeholder="Ex: javascript"
              onChange={(value) => setThird(value)}
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
              value={first}
              items={frameworks}
              contrast="muted"
              size="sm"
              label="Size: sm"
              placeholder="Ex: javascript"
              onChange={(value) => setFirst(value)}
            />
          </div>

          <div className="flex-1">
            <BaseAutocomplete
              value={second}
              items={frameworks}
              contrast="muted"
              size="md"
              label="Size: md"
              placeholder="Ex: javascript"
              onChange={(value) => setSecond(value)}
            />
          </div>

          <div className="flex-1">
            <BaseAutocomplete
              value={third}
              items={frameworks}
              contrast="muted"
              size="lg"
              label="Size: lg"
              placeholder="Ex: javascript"
              onChange={(value) => setThird(value)}
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
              value={first}
              items={frameworks}
              contrast="muted-contrast"
              size="sm"
              label="Size: sm"
              placeholder="Ex: javascript"
              onChange={(value) => setFirst(value)}
            />
          </div>

          <div className="flex-1">
            <BaseAutocomplete
              value={second}
              items={frameworks}
              contrast="muted-contrast"
              size="md"
              label="Size: md"
              placeholder="Ex: javascript"
              onChange={(value) => setSecond(value)}
            />
          </div>

          <div className="flex-1">
            <BaseAutocomplete
              value={third}
              items={frameworks}
              contrast="muted-contrast"
              size="lg"
              label="Size: lg"
              placeholder="Ex: javascript"
              onChange={(value) => setThird(value)}
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Error" description="Autocomplete component error">
        <div className="flex flex-wrap items-end gap-3 max-w-3xl">
          <div className="flex-1">
            <BaseAutocomplete
              value={first}
              items={frameworks}
              size="sm"
              label="Size: sm"
              placeholder="Ex: javascript"
              error="Please select a framework"
              onChange={(value) => setFirst(value)}
            />
          </div>

          <div className="flex-1">
            <BaseAutocomplete
              value={second}
              items={frameworks}
              size="md"
              label="Size: md"
              placeholder="Ex: javascript"
              error="Please select a framework"
              onChange={(value) => setSecond(value)}
            />
          </div>

          <div className="flex-1">
            <BaseAutocomplete
              value={third}
              items={frameworks}
              size="lg"
              label="Size: lg"
              placeholder="Ex: javascript"
              error="Please select a framework"
              onChange={(value) => setThird(value)}
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
              value={first}
              items={frameworks}
              size="sm"
              label="Size: sm"
              placeholder="Ex: javascript"
              disabled
              onChange={(value) => setFirst(value)}
            />
          </div>

          <div className="flex-1">
            <BaseAutocomplete
              value={second}
              items={frameworks}
              size="md"
              label="Size: md"
              placeholder="Ex: javascript"
              disabled
              onChange={(value) => setSecond(value)}
            />
          </div>

          <div className="flex-1">
            <BaseAutocomplete
              value={third}
              items={frameworks}
              size="lg"
              label="Size: lg"
              placeholder="Ex: javascript"
              disabled
              onChange={(value) => setThird(value)}
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Icon" description="Autocomplete component icon">
        <div className="flex flex-wrap items-end gap-5 max-w-3xl">
          <div className="flex-1">
            <BaseAutocomplete
              value={sixth}
              items={frameworks}
              icon="lucide:search"
              size="sm"
              placeholder="e.g. Nuxt"
              label="Framework"
              colorFocus
              onChange={(value) => setSixth(value)}
            />
          </div>
          <div className="flex-1">
            <BaseAutocomplete
              value={sixth}
              items={frameworks}
              icon="lucide:search"
              placeholder="e.g. Nuxt"
              label="Framework"
              colorFocus
              onChange={(value) => setSixth(value)}
            />
          </div>
          <div className="flex-1">
            <BaseAutocomplete
              value={sixth}
              items={frameworks}
              icon="lucide:search"
              size="lg"
              placeholder="e.g. Nuxt"
              label="Framework"
              colorFocus
              onChange={(value) => setSixth(value)}
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
              value={seventh}
              items={frameworks}
              icon="lucide:search"
              size="sm"
              placeholder="e.g. Nuxt"
              label="Framework"
              clearable
              onChange={(value) => setSeventh(value)}
            />
          </div>
          <div className="flex-1">
            <BaseAutocomplete
              value={eighth}
              items={frameworks}
              icon="lucide:search"
              size="md"
              placeholder="e.g. Nuxt"
              label="Framework"
              clearable
              clearValue=""
              onChange={(value) => setEighth(value)}
            />
          </div>
          <div className="flex-1">
            <BaseAutocomplete
              value={ninth}
              items={frameworks}
              icon="lucide:search"
              size="lg"
              placeholder="e.g. Nuxt"
              label="Framework"
              clearable
              clearValue="Nuxt"
              onChange={(value) => setNinth(value)}
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Multiple: Scalar"
        description="Autocomplete component multiple selection"
      >
        <div className="max-w-sm">
          <BaseAutocomplete
            value={multipleValue}
            items={frameworks}
            rounded="md"
            icon="lucide:list-filter"
            placeholder="Search..."
            label="Assignee"
            multiple
            onChange={(value) => setMultipleValue(value)}
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Multiple: Objects"
        description="Autocomplete component multiple object selection"
      >
        <div className="max-w-sm">
          <BaseAutocomplete
            value={personSelection}
            items={persons}
            displayValue={(item: Person) => item?.name}
            filterItems={filterItems}
            rounded="md"
            icon="lucide:list-filter"
            placeholder="Search..."
            label="Assignee"
            multiple
            onChange={(value) => setPersonSelection(value)}
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Multiple: Objects /w prop modifier"
        description="Autocomplete component multiple object selection"
      >
        <div className="max-w-sm">
          <BaseAutocomplete
            value={personSelectionProp}
            stateModifiers={{ prop: true }}
            items={persons}
            filterItems={filterItems}
            rounded="md"
            icon="lucide:list-filter"
            placeholder="Search..."
            label="Assignee"
            multiple
            properties={{
              value: 'id',
              label: 'name',
              sublabel: 'text',
              media: 'media',
            }}
            onChange={(value) => setPersonSelectionProp(value)}
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Label: float"
        description="Autocomplete component label float"
      >
        <div className="grid gap-6 md:max-w-lg md:grid-cols-2">
          <BaseAutocomplete
            value={tenth}
            items={frameworks}
            size="sm"
            rounded="md"
            placeholder="e.g. Nuxt"
            label="Framework"
            labelFloat
            onChange={(value) => setTenth(value)}
          />
          <BaseAutocomplete
            value={eleventh}
            items={frameworks}
            size="sm"
            icon="lucide:search"
            rounded="md"
            placeholder="e.g. Nuxt"
            label="Framework"
            labelFloat
            onChange={(value) => setEleventh(value)}
          />
          <BaseAutocomplete
            value={tenth}
            items={frameworks}
            rounded="md"
            placeholder="e.g. Nuxt"
            label="Framework"
            labelFloat
            onChange={(value) => setTenth(value)}
          />

          <BaseAutocomplete
            value={eleventh}
            items={frameworks}
            icon="lucide:search"
            rounded="md"
            placeholder="e.g. Nuxt"
            label="Framework"
            labelFloat
            onChange={(value) => setEleventh(value)}
          />
          <BaseAutocomplete
            value={tenth}
            items={frameworks}
            size="lg"
            rounded="md"
            placeholder="e.g. Nuxt"
            label="Framework"
            labelFloat
            onChange={(value) => setTenth(value)}
          />

          <BaseAutocomplete
            value={eleventh}
            items={frameworks}
            icon="lucide:search"
            size="lg"
            rounded="md"
            placeholder="e.g. Nuxt"
            label="Framework"
            labelFloat
            onChange={(value) => setEleventh(value)}
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Loading"
        description="Autocomplete component loading state"
      >
        <div className="grid gap-6 md:max-w-lg md:grid-cols-2">
          <BaseAutocomplete
            value={tenth}
            items={frameworks}
            size="sm"
            rounded="md"
            placeholder="e.g. Nuxt"
            label="Framework"
            loading
            onChange={(value) => setTenth(value)}
          />
          <BaseAutocomplete
            value={eleventh}
            items={frameworks}
            size="sm"
            icon="lucide:search"
            rounded="md"
            placeholder="e.g. Nuxt"
            label="Framework"
            loading
            onChange={(value) => setEleventh(value)}
          />
          <BaseAutocomplete
            value={tenth}
            items={frameworks}
            rounded="md"
            placeholder="e.g. Nuxt"
            label="Framework"
            loading
            onChange={(value) => setTenth(value)}
          />

          <BaseAutocomplete
            value={eleventh}
            items={frameworks}
            icon="lucide:search"
            rounded="md"
            placeholder="e.g. Nuxt"
            label="Framework"
            loading
            onChange={(value) => setEleventh(value)}
          />
          <BaseAutocomplete
            value={tenth}
            items={frameworks}
            size="lg"
            rounded="md"
            placeholder="e.g. Nuxt"
            label="Framework"
            loading
            onChange={(value) => setTenth(value)}
          />

          <BaseAutocomplete
            value={eleventh}
            items={frameworks}
            icon="lucide:search"
            size="lg"
            rounded="md"
            placeholder="e.g. Nuxt"
            label="Framework"
            loading
            onChange={(value) => setEleventh(value)}
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Result: icons"
        description="Autocomplete component icon results"
      >
        <div className="max-w-sm">
          <BaseAutocomplete
            value={hobbyValue}
            items={hobbies}
            displayValue={(item: Hobby) => item?.name}
            filterItems={filterItems}
            icon="ph:buildings"
            rounded="md"
            placeholder="Select a hobby"
            label="Company"
            clearable
            clearValue={null}
            properties={{
              value: 'id',
              label: 'name',
              sublabel: 'text',
              icon: 'icon',
            }}
            onChange={(value) => setHobbyValue(value)}
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Result: images"
        description="Autocomplete component icon results"
      >
        <div className="max-w-sm">
          <BaseAutocomplete
            value={personValue}
            items={persons}
            displayValue={(item: Person) => item?.name}
            filterItems={filterItems}
            icon="ph:users-three"
            rounded="md"
            placeholder="Search..."
            label="Assignee"
            clearable
            properties={{
              value: 'id',
              label: 'name',
              sublabel: 'text',
              media: 'media',
            }}
            onChange={(value) => setPersonValue(value)}
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Allow create" description="Allow to create new items">
        <div className="grid gap-6 md:max-w-3xl md:grid-cols-3">
          <BaseAutocomplete
            value={thirteenth}
            items={frameworks}
            label="With prompt (default)"
            allowCreate
            onChange={(value) => setThirteenth(value)}
          />
          <BaseAutocomplete
            value={thirteenth}
            items={frameworks}
            label="Hidden prompt"
            allowCreate
            hideCreatePrompt
            onChange={(value) => setThirteenth(value)}
          />
        </div>
      </NuiPreview>
    </>
  )
}
export default Autcompletes;