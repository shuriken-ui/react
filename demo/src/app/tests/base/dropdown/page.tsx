import {
  BaseDropdown,
  BaseDropdownItem,
  BaseAvatar,
  BaseDropdownDivider,
} from "@shuriken-ui/react";
import { Metadata } from "next";
import React from "react";
import NuiPreviewContainer from "@/components/NuiPreviewContainer";
import NuiPreview from "@/components/NuiPreview";

import { getMeta } from "@/data/sidebar";
import Iconify from "@/components/Iconify";

const meta = getMeta("base", "dropdown");

export const metadata: Metadata = {
  ...meta,
};

function DropdownPage() {
  return (
    <NuiPreviewContainer title={meta.title}>
      <NuiPreview title="Size" description="Dropdown menu sizes">
        <div className="flex justify-start gap-8 w-full">
          <BaseDropdown
            variant="button"
            label="Dropdown"
            orientation="start"
            size="md"
          >
            <BaseDropdownItem
              href="#"
              title="Profile"
              text="View your profile"
              color="default"
              rounded="sm"
            />
            <BaseDropdownItem
              href="#"
              title="Projects"
              text="View your projects"
              color="default"
              rounded="sm"
            />
            <BaseDropdownItem
              href="#"
              title="Team"
              text="Manage your team"
              color="default"
              rounded="sm"
            />
            <BaseDropdownItem
              href="#"
              title="Settings"
              text="Set your preferences"
              color="default"
              rounded="sm"
            />
          </BaseDropdown>
          <BaseDropdown
            variant="button"
            label="Dropdown"
            orientation="start"
            size="lg"
          >
            <BaseDropdownItem
              href="#"
              title="Profile"
              text="View your profile"
              color="default"
              rounded="sm"
            />
            <BaseDropdownItem
              href="#"
              title="Projects"
              text="View your projects"
              color="default"
              rounded="sm"
            />
            <BaseDropdownItem
              href="#"
              title="Team"
              text="Manage your team"
              color="default"
              rounded="sm"
            />
            <BaseDropdownItem
              href="#"
              title="Settings"
              text="Set your preferences"
              color="default"
              rounded="sm"
            />
          </BaseDropdown>
        </div>
      </NuiPreview>

      <NuiPreview title="Menu color" description="Dropdown menu colors">
        <div className="flex justify-start gap-8 w-full">
          <BaseDropdown
            variant="button"
            label="Dropdown"
            orientation="start"
            color="white"
          >
            <BaseDropdownItem
              href="#"
              title="Profile"
              text="View your profile"
              color="default"
              rounded="sm"
            />
            <BaseDropdownItem
              href="#"
              title="Projects"
              text="View your projects"
              color="default"
              rounded="sm"
            />
            <BaseDropdownItem
              href="#"
              title="Team"
              text="Manage your team"
              color="default"
              rounded="sm"
            />
            <BaseDropdownItem
              href="#"
              title="Settings"
              text="Set your preferences"
              color="default"
              rounded="sm"
            />
          </BaseDropdown>
          <BaseDropdown
            variant="button"
            label="Dropdown"
            orientation="start"
            color="white-contrast"
          >
            <BaseDropdownItem
              href="#"
              title="Profile"
              text="View your profile"
              color="default"
              rounded="sm"
            />
            <BaseDropdownItem
              href="#"
              title="Projects"
              text="View your projects"
              color="default"
              rounded="sm"
            />
            <BaseDropdownItem
              href="#"
              title="Team"
              text="Manage your team"
              color="default"
              rounded="sm"
            />
            <BaseDropdownItem
              href="#"
              title="Settings"
              text="Set your preferences"
              color="default"
              rounded="sm"
            />
          </BaseDropdown>
        </div>
      </NuiPreview>

      <NuiPreview title="Button color" description="Dropdown button colors">
        <div className="flex justify-start gap-8 w-full">
          <BaseDropdown
            variant="button"
            label="Dropdown"
            orientation="start"
            buttonColor="default"
          >
            <BaseDropdownItem
              href="#"
              title="Profile"
              text="View your profile"
              color="default"
              rounded="sm"
            />
            <BaseDropdownItem
              href="#"
              title="Projects"
              text="View your projects"
              color="default"
              rounded="sm"
            />
            <BaseDropdownItem
              href="#"
              title="Team"
              text="Manage your team"
              color="default"
              rounded="sm"
            />
            <BaseDropdownItem
              href="#"
              title="Settings"
              text="Set your preferences"
              color="default"
              rounded="sm"
            />
          </BaseDropdown>

          <BaseDropdown
            variant="button"
            label="Dropdown"
            orientation="start"
            buttonColor="muted"
          >
            <BaseDropdownItem
              href="#"
              title="Profile"
              text="View your profile"
              color="default"
              rounded="sm"
            />
            <BaseDropdownItem
              href="#"
              title="Projects"
              text="View your projects"
              color="default"
              rounded="sm"
            />
            <BaseDropdownItem
              href="#"
              title="Team"
              text="Manage your team"
              color="default"
              rounded="sm"
            />
            <BaseDropdownItem
              href="#"
              title="Settings"
              text="Set your preferences"
              color="default"
              rounded="sm"
            />
          </BaseDropdown>

          <BaseDropdown
            variant="button"
            label="Dropdown"
            orientation="start"
            buttonColor="primary"
          >
            <BaseDropdownItem
              href="#"
              title="Profile"
              text="View your profile"
              color="default"
              rounded="sm"
            />
            <BaseDropdownItem
              href="#"
              title="Projects"
              text="View your projects"
              color="default"
              rounded="sm"
            />
            <BaseDropdownItem
              href="#"
              title="Team"
              text="Manage your team"
              color="default"
              rounded="sm"
            />
            <BaseDropdownItem
              href="#"
              title="Settings"
              text="Set your preferences"
              color="default"
              rounded="sm"
            />
          </BaseDropdown>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Button: start"
        description="Dropdown button start position"
      >
        <div className="flex justify-start w-full">
          <BaseDropdown variant="button" label="Dropdown" orientation="start">
            <BaseDropdownItem
              href="#"
              title="Profile"
              text="View your profile"
              color="default"
              rounded="sm"
            />
            <BaseDropdownItem
              href="#"
              title="Projects"
              text="View your projects"
              color="default"
              rounded="sm"
            />
            <BaseDropdownItem
              href="#"
              title="Team"
              text="Manage your team"
              color="default"
              rounded="sm"
            />
            <BaseDropdownItem
              href="#"
              title="Settings"
              text="Set your preferences"
              color="default"
              rounded="sm"
            />
          </BaseDropdown>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Button: end"
        description="Dropdown button end position"
      >
        <div className="flex justify-end w-full">
          <BaseDropdown variant="button" label="Dropdown" orientation="end">
            <BaseDropdownItem
              href="#"
              title="Profile"
              text="View your profile"
              color="default"
              rounded="sm"
            />
            <BaseDropdownItem
              href="#"
              title="Projects"
              text="View your projects"
              color="default"
              rounded="sm"
            />
            <BaseDropdownItem
              href="#"
              title="Team"
              text="Manage your team"
              color="default"
              rounded="sm"
            />
            <BaseDropdownItem
              href="#"
              title="Settings"
              text="Set your preferences"
              color="default"
              rounded="sm"
            />
          </BaseDropdown>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Context: start"
        description="Dropdown context start position"
      >
        <div className="flex justify-start w-full">
          <BaseDropdown variant="context" label="Dropdown" orientation="start">
            <BaseDropdownItem
              href="#"
              title="Profile"
              text="View your profile"
              color="default"
              rounded="sm"
            />
            <BaseDropdownItem
              href="#"
              title="Projects"
              text="View your projects"
              color="default"
              rounded="sm"
            />
            <BaseDropdownItem
              href="#"
              title="Team"
              text="Manage your team"
              color="default"
              rounded="sm"
            />
            <BaseDropdownItem
              href="#"
              title="Settings"
              text="Set your preferences"
              color="default"
              rounded="sm"
            />
          </BaseDropdown>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Context: end"
        description="Dropdown context end position"
      >
        <div className="flex justify-end w-full">
          <BaseDropdown variant="context" label="Dropdown" orientation="end">
            <BaseDropdownItem
              href="#"
              title="Profile"
              text="View your profile"
              color="default"
              rounded="sm"
            />
            <BaseDropdownItem
              href="#"
              title="Projects"
              text="View your projects"
              color="default"
              rounded="sm"
            />
            <BaseDropdownItem
              href="#"
              title="Team"
              text="Manage your team"
              color="default"
              rounded="sm"
            />
            <BaseDropdownItem
              href="#"
              title="Settings"
              text="Set your preferences"
              color="default"
              rounded="sm"
            />
          </BaseDropdown>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Text: start"
        description="Dropdown text start position"
      >
        <div className="flex justify-start w-full">
          <BaseDropdown variant="text" label="Dropdown" orientation="start">
            <BaseDropdownItem
              href="#"
              title="Profile"
              text="View your profile"
              color="default"
              rounded="sm"
            />
            <BaseDropdownItem
              href="#"
              title="Projects"
              text="View your projects"
              color="default"
              rounded="sm"
            />
            <BaseDropdownItem href="#" title="Team" text="Manage your team" />
            <BaseDropdownItem
              href="#"
              title="Settings"
              text="Set your preferences"
              color="default"
              rounded="sm"
            />
          </BaseDropdown>
        </div>
      </NuiPreview>

      <NuiPreview title="Text: end" description="Dropdown text end position">
        <div className="flex justify-end w-full">
          <BaseDropdown variant="text" label="Dropdown" orientation="end">
            <BaseDropdownItem
              href="#"
              title="Profile"
              text="View your profile"
              color="default"
              rounded="sm"
            />
            <BaseDropdownItem
              href="#"
              title="Projects"
              text="View your projects"
              color="default"
              rounded="sm"
            />
            <BaseDropdownItem
              href="#"
              title="Team"
              text="Manage your team"
              color="default"
              rounded="sm"
            />
            <BaseDropdownItem
              href="#"
              title="Settings"
              text="Set your preferences"
              color="default"
              rounded="sm"
            />
          </BaseDropdown>
        </div>
      </NuiPreview>

      <NuiPreview title="Slot: icon" description="Dropdown icon slot">
        <div className="flex justify-start w-full">
          <BaseDropdown variant="button" label="Dropdown" orientation="start">
            <BaseDropdownItem
              href="#"
              title="Profile"
              text="View your profile"
              color="default"
              rounded="sm"
              start={
                <Iconify
                  icon="ph:user-duotone"
                  className="me-2 block h-5 w-5"
                />
              }
            ></BaseDropdownItem>
            <BaseDropdownItem
              href="#"
              title="Projects"
              text="View your projects"
              color="default"
              rounded="sm"
              start={
                <Iconify
                  icon="ph:briefcase-duotone"
                  className="me-2 block h-5 w-5"
                />
              }
            ></BaseDropdownItem>
            <BaseDropdownItem
              href="#"
              title="Team"
              text="Manage your team"
              color="default"
              rounded="sm"
              start={
                <Iconify
                  icon="ph:users-four-duotone"
                  className="me-2 block h-5 w-5"
                />
              }
            ></BaseDropdownItem>
            <BaseDropdownDivider />
            <BaseDropdownItem
              href="#"
              title="Settings"
              text="Set your preferences"
              color="default"
              rounded="sm"
              start={
                <Iconify
                  icon="ph:gear-six-duotone"
                  className="me-2 block h-5 w-5"
                />
              }
            ></BaseDropdownItem>
          </BaseDropdown>
        </div>
      </NuiPreview>

      <NuiPreview title="Slot: avatar" description="Dropdown avatar slot">
        <div className="flex justify-start w-full">
          <BaseDropdown variant="button" label="Dropdown" orientation="start">
            <BaseDropdownItem
              href="#"
              title="Lana Jensen"
              text="Software Engineer"
              color="default"
              rounded="sm"
              start={
                <BaseAvatar
                  src="https://tairo.cssninja.io/img/avatars/4.svg"
                  size="xs"
                />
              }
            ></BaseDropdownItem>

            <BaseDropdownItem
              href="#"
              title="Shawn Miller"
              text="Product Manager"
              color="default"
              rounded="sm"
              start={
                <BaseAvatar
                  src="https://tairo.cssninja.io/img/avatars/3.svg"
                  size="xs"
                />
              }
            ></BaseDropdownItem>

            <BaseDropdownItem
              href="#"
              title="John Marynski"
              text="Sales Manager"
              color="default"
              rounded="sm"
              start={
                <BaseAvatar
                  src="https://tairo.cssninja.io/img/avatars/18.svg"
                  size="xs"
                />
              }
            ></BaseDropdownItem>

            <BaseDropdownDivider />

            <BaseDropdownItem
              href="#"
              title="Garry Porter"
              text="CEO - Founder"
              color="default"
              rounded="sm"
              start={
                <BaseAvatar
                  src="https://tairo.cssninja.io/img/avatars/6.svg"
                  size="xs"
                />
              }
            ></BaseDropdownItem>
          </BaseDropdown>
        </div>
      </NuiPreview>

      <NuiPreview title="Menu header" description="Dropdown menu header">
        <div className="flex justify-start w-full">
          <BaseDropdown
            variant="button"
            label="Dropdown"
            orientation="start"
            header-label="My Team"
          >
            <BaseDropdownItem
              href="#"
              title="Lana Jensen"
              text="Software Engineer"
              color="default"
              rounded="sm"
              start={
                <BaseAvatar
                  src="https://tairo.cssninja.io/img/avatars/4.svg"
                  size="xs"
                />
              }
            ></BaseDropdownItem>

            <BaseDropdownItem
              href="#"
              title="Shawn Miller"
              text="Product Manager"
              color="default"
              rounded="sm"
              start={
                <BaseAvatar
                  src="https://tairo.cssninja.io/img/avatars/3.svg"
                  size="xs"
                />
              }
            ></BaseDropdownItem>

            <BaseDropdownItem
              href="#"
              title="John Marynski"
              text="Sales Manager"
              color="default"
              rounded="sm"
              start={
                <BaseAvatar
                  src="https://tairo.cssninja.io/img/avatars/18.svg"
                  size="xs"
                />
              }
            ></BaseDropdownItem>

            <BaseDropdownDivider />

            <BaseDropdownItem
              href="#"
              title="Garry Porter"
              text="CEO - Founder"
              color="default"
              rounded="sm"
              start={
                <BaseAvatar
                  src="https://tairo.cssninja.io/img/avatars/6.svg"
                  size="xs"
                />
              }
            ></BaseDropdownItem>
          </BaseDropdown>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  );
}

export default DropdownPage;
