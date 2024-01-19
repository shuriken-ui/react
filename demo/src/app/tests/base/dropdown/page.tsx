import {
  BaseDropdown,
  BaseDropdownItem,
  BaseHeading,
} from "@shuriken-ui/react";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Dropdown",
  description: "Dropdown examples",
};

function DropdownPage() {
  return (
    <div className="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32">
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          Dropdown Flavor
        </BaseHeading>
        <div className="flex gap-2">
          <BaseDropdown flavor="button" label="Dropdown" orientation="start">
            <BaseDropdownItem to="#" title="Profile" text="View your profile" />
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
            />
            <BaseDropdownItem to="#" title="Team" text="Manage your team" />
            <BaseDropdownItem to="#" title="Settings" text="Your settings" />
          </BaseDropdown>
          <BaseDropdown flavor="context" label="Dropdown" orientation="start">
            <BaseDropdownItem to="#" title="Profile" text="View your profile" />
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
            />
            <BaseDropdownItem to="#" title="Team" text="Manage your team" />
            <BaseDropdownItem to="#" title="Settings" text="Your settings" />
          </BaseDropdown>
          <BaseDropdown flavor="text" label="Dropdown" orientation="start">
            <BaseDropdownItem to="#" title="Profile" text="View your profile" />
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
            />
            <BaseDropdownItem to="#" title="Team" text="Manage your team" />
            <BaseDropdownItem to="#" title="Settings" text="Your settings" />
          </BaseDropdown>
        </div>
      </div>
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          Dropdown Button color
        </BaseHeading>
        <div className="grid grid-cols-9 gap-2">
          <BaseDropdown
            flavor="button"
            buttonColor="default"
            label="Dropdown"
            orientation="start"
          >
            <BaseDropdownItem to="#" title="Profile" text="View your profile" />
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
            />
            <BaseDropdownItem to="#" title="Team" text="Manage your team" />
            <BaseDropdownItem to="#" title="Settings" text="Your settings" />
          </BaseDropdown>
          <BaseDropdown
            flavor="button"
            buttonColor="primary"
            label="Dropdown"
            orientation="start"
          >
            <BaseDropdownItem to="#" title="Profile" text="View your profile" />
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
            />
            <BaseDropdownItem to="#" title="Team" text="Manage your team" />
            <BaseDropdownItem to="#" title="Settings" text="Your settings" />
          </BaseDropdown>
          <BaseDropdown
            flavor="button"
            buttonColor="info"
            label="Dropdown"
            orientation="start"
          >
            <BaseDropdownItem to="#" title="Profile" text="View your profile" />
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
            />
            <BaseDropdownItem to="#" title="Team" text="Manage your team" />
            <BaseDropdownItem to="#" title="Settings" text="Your settings" />
          </BaseDropdown>
          <BaseDropdown
            flavor="button"
            buttonColor="success"
            label="Dropdown"
            orientation="start"
          >
            <BaseDropdownItem to="#" title="Profile" text="View your profile" />
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
            />
            <BaseDropdownItem to="#" title="Team" text="Manage your team" />
            <BaseDropdownItem to="#" title="Settings" text="Your settings" />
          </BaseDropdown>
          <BaseDropdown
            flavor="button"
            buttonColor="warning"
            label="Dropdown"
            orientation="start"
          >
            <BaseDropdownItem to="#" title="Profile" text="View your profile" />
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
            />
            <BaseDropdownItem to="#" title="Team" text="Manage your team" />
            <BaseDropdownItem to="#" title="Settings" text="Your settings" />
          </BaseDropdown>
          <BaseDropdown
            flavor="button"
            buttonColor="danger"
            label="Dropdown"
            orientation="start"
          >
            <BaseDropdownItem to="#" title="Profile" text="View your profile" />
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
            />
            <BaseDropdownItem to="#" title="Team" text="Manage your team" />
            <BaseDropdownItem to="#" title="Settings" text="Your settings" />
          </BaseDropdown>
          <BaseDropdown
            flavor="button"
            buttonColor="light"
            label="Dropdown"
            orientation="start"
          >
            <BaseDropdownItem to="#" title="Profile" text="View your profile" />
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
            />
            <BaseDropdownItem to="#" title="Team" text="Manage your team" />
            <BaseDropdownItem to="#" title="Settings" text="Your settings" />
          </BaseDropdown>
          <BaseDropdown
            flavor="button"
            buttonColor="muted"
            label="Dropdown"
            orientation="start"
          >
            <BaseDropdownItem to="#" title="Profile" text="View your profile" />
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
            />
            <BaseDropdownItem to="#" title="Team" text="Manage your team" />
            <BaseDropdownItem to="#" title="Settings" text="Your settings" />
          </BaseDropdown>
          <BaseDropdown
            flavor="button"
            buttonColor="none"
            label="Dropdown"
            orientation="start"
          >
            <BaseDropdownItem to="#" title="Profile" text="View your profile" />
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
            />
            <BaseDropdownItem to="#" title="Team" text="Manage your team" />
            <BaseDropdownItem to="#" title="Settings" text="Your settings" />
          </BaseDropdown>
        </div>
      </div>
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          Dropdown Color
        </BaseHeading>
        <div className="grid grid-cols-10 gap-2">
          <BaseDropdown
            flavor="button"
            color="white"
            label="Dropdown"
            orientation="start"
          >
            <BaseDropdownItem to="#" title="Profile" text="View your profile" />
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
            />
            <BaseDropdownItem to="#" title="Team" text="Manage your team" />
            <BaseDropdownItem to="#" title="Settings" text="Your settings" />
          </BaseDropdown>
          <BaseDropdown
            flavor="button"
            color="white-contrast"
            label="Dropdown"
            orientation="start"
          >
            <BaseDropdownItem to="#" title="Profile" text="View your profile" />
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
            />
            <BaseDropdownItem to="#" title="Team" text="Manage your team" />
            <BaseDropdownItem to="#" title="Settings" text="Your settings" />
          </BaseDropdown>
          <BaseDropdown
            flavor="button"
            color="muted"
            label="Dropdown"
            orientation="start"
          >
            <BaseDropdownItem to="#" title="Profile" text="View your profile" />
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
            />
            <BaseDropdownItem to="#" title="Team" text="Manage your team" />
            <BaseDropdownItem to="#" title="Settings" text="Your settings" />
          </BaseDropdown>
          <BaseDropdown
            flavor="button"
            color="muted-contrast"
            label="Dropdown"
            orientation="start"
          >
            <BaseDropdownItem to="#" title="Profile" text="View your profile" />
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
            />
            <BaseDropdownItem to="#" title="Team" text="Manage your team" />
            <BaseDropdownItem to="#" title="Settings" text="Your settings" />
          </BaseDropdown>
          <BaseDropdown
            flavor="button"
            color="primary"
            label="Dropdown"
            orientation="start"
          >
            <BaseDropdownItem to="#" title="Profile" text="View your profile" />
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
            />
            <BaseDropdownItem to="#" title="Team" text="Manage your team" />
            <BaseDropdownItem to="#" title="Settings" text="Your settings" />
          </BaseDropdown>
          <BaseDropdown
            flavor="button"
            color="info"
            label="Dropdown"
            orientation="start"
          >
            <BaseDropdownItem to="#" title="Profile" text="View your profile" />
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
            />
            <BaseDropdownItem to="#" title="Team" text="Manage your team" />
            <BaseDropdownItem to="#" title="Settings" text="Your settings" />
          </BaseDropdown>
          <BaseDropdown
            flavor="button"
            color="success"
            label="Dropdown"
            orientation="start"
          >
            <BaseDropdownItem to="#" title="Profile" text="View your profile" />
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
            />
            <BaseDropdownItem to="#" title="Team" text="Manage your team" />
            <BaseDropdownItem to="#" title="Settings" text="Your settings" />
          </BaseDropdown>
          <BaseDropdown
            flavor="button"
            color="warning"
            label="Dropdown"
            orientation="start"
          >
            <BaseDropdownItem to="#" title="Profile" text="View your profile" />
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
            />
            <BaseDropdownItem to="#" title="Team" text="Manage your team" />
            <BaseDropdownItem to="#" title="Settings" text="Your settings" />
          </BaseDropdown>
          <BaseDropdown
            flavor="button"
            color="danger"
            label="Dropdown"
            orientation="start"
          >
            <BaseDropdownItem to="#" title="Profile" text="View your profile" />
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
            />
            <BaseDropdownItem to="#" title="Team" text="Manage your team" />
            <BaseDropdownItem to="#" title="Settings" text="Your settings" />
          </BaseDropdown>
          <BaseDropdown
            flavor="button"
            color="none"
            label="Dropdown"
            orientation="start"
          >
            <BaseDropdownItem to="#" title="Profile" text="View your profile" />
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
            />
            <BaseDropdownItem to="#" title="Team" text="Manage your team" />
            <BaseDropdownItem to="#" title="Settings" text="Your settings" />
          </BaseDropdown>
        </div>
      </div>
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          Dropdown Shape
        </BaseHeading>
        <div className="flex gap-2">
          <BaseDropdown shape="straight" label="Dropdown" orientation="start">
            <BaseDropdownItem to="#" title="Profile" text="View your profile" />
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
            />
            <BaseDropdownItem to="#" title="Team" text="Manage your team" />
            <BaseDropdownItem to="#" title="Settings" text="Your settings" />
          </BaseDropdown>
          <BaseDropdown shape="rounded" label="Dropdown" orientation="start">
            <BaseDropdownItem to="#" title="Profile" text="View your profile" />
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
            />
            <BaseDropdownItem to="#" title="Team" text="Manage your team" />
            <BaseDropdownItem to="#" title="Settings" text="Your settings" />
          </BaseDropdown>
          <BaseDropdown shape="smooth" label="Dropdown" orientation="start">
            <BaseDropdownItem to="#" title="Profile" text="View your profile" />
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
            />
            <BaseDropdownItem to="#" title="Team" text="Manage your team" />
            <BaseDropdownItem to="#" title="Settings" text="Your settings" />
          </BaseDropdown>
          <BaseDropdown shape="curved" label="Dropdown" orientation="start">
            <BaseDropdownItem to="#" title="Profile" text="View your profile" />
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
            />
            <BaseDropdownItem to="#" title="Team" text="Manage your team" />
            <BaseDropdownItem to="#" title="Settings" text="Your settings" />
          </BaseDropdown>
        </div>
      </div>

      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          Dropdown And Autocomplete
        </BaseHeading>
        <div className="flex flex-col gap-2 max-w-[200px]">
          {/* <BaseListbox :items="['foo', 'bar', 'baz']" />
      <BaseListbox :items="['foo', 'bar', 'baz']" />
      <BaseAutocomplete
        :items="['Javascript', 'Vue.js', 'React.js', 'Angular']"
        placeholder="Let's test autocomplete"
        error="This is an error message"
        clearable
      /> 
      */}
        </div>
      </div>
    </div>
  );
}

export default DropdownPage;
