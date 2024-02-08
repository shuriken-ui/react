"use client";
import { Fragment } from "react";

import NuiPreview from "@/components/NuiPreview";

import { BaseTabSlider } from "@shuriken-ui/react";
const TabSlider = () => {
  return (
    <Fragment>
      <NuiPreview
        title="Rounded: none: x2"
        description="Tab slider component 2 slots"
      >
        <div className="w-full max-w-sm">
          <BaseTabSlider
            rounded="none"
            defaultValue="team"
            tabs={[
              { label: "Team", value: "team" },
              { label: "Projects", value: "projects" },
            ]}
          >
            {(activeValue) => (
              <Fragment>
                {activeValue === "team" && (
                  <p className="font-sans text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                    beatissimum? Ne discipulum abducam, times.
                  </p>
                )}
                {activeValue === "projects" && (
                  <p className="font-sans text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                    beatissimum? Ne discipulum abducam, times. Quae
                    diligentissime contra Aristonem dicuntur a Chryippo. Duo
                    Reges: constructio interrete.
                  </p>
                )}
              </Fragment>
            )}
          </BaseTabSlider>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Rounded: sm: x2"
        description="Tab slider component 2 slots"
      >
        <div className="w-full max-w-sm">
          <BaseTabSlider
            rounded="sm"
            defaultValue="projects"
            tabs={[
              { label: "Team", value: "team" },
              { label: "Projects", value: "projects" },
            ]}
          >
            {(activeValue) => (
              <Fragment>
                {activeValue === "team" && (
                  <p className="font-sans text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                    beatissimum? Ne discipulum abducam, times.
                  </p>
                )}
                {activeValue === "projects" && (
                  <p className="font-sans text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                    beatissimum? Ne discipulum abducam, times. Quae
                    diligentissime contra Aristonem dicuntur a Chryippo. Duo
                    Reges: constructio interrete.
                  </p>
                )}
              </Fragment>
            )}
          </BaseTabSlider>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Rounded: md: x2"
        description="Tab slider component 2 slots"
      >
        <div className="w-full max-w-sm">
          <BaseTabSlider
            rounded="md"
            defaultValue="team"
            tabs={[
              { label: "Team", value: "team" },
              { label: "Projects", value: "projects" },
            ]}
          >
            {(activeValue) => (
              <Fragment>
                {activeValue === "team" && (
                  <p className="font-sans text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                    beatissimum? Ne discipulum abducam, times.
                  </p>
                )}
                {activeValue === "projects" && (
                  <p className="font-sans text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                    beatissimum? Ne discipulum abducam, times. Quae
                    diligentissime contra Aristonem dicuntur a Chryippo. Duo
                    Reges: constructio interrete.
                  </p>
                )}
              </Fragment>
            )}
          </BaseTabSlider>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Rounded: lg: x2"
        description="Tab slider component 2 slots"
      >
        <div className="w-full max-w-sm">
          <BaseTabSlider
            rounded="lg"
            defaultValue="projects"
            tabs={[
              { label: "Team", value: "team" },
              { label: "Projects", value: "projects" },
            ]}
          >
            {(activeValue) => (
              <Fragment>
                {activeValue === "team" && (
                  <p className="font-sans text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                    beatissimum? Ne discipulum abducam, times.
                  </p>
                )}
                {activeValue === "projects" && (
                  <p className="font-sans text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                    beatissimum? Ne discipulum abducam, times. Quae
                    diligentissime contra Aristonem dicuntur a Chryippo. Duo
                    Reges: constructio interrete.
                  </p>
                )}
              </Fragment>
            )}
          </BaseTabSlider>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Rounded: full: x2"
        description="Tab slider component 2 slots"
      >
        <div className="w-full max-w-sm">
          <BaseTabSlider
            rounded="full"
            defaultValue="team"
            tabs={[
              { label: "Team", value: "team" },
              { label: "Projects", value: "projects" },
            ]}
          >
            {(activeValue) => (
              <Fragment>
                {activeValue === "team" && (
                  <p className="font-sans text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                    beatissimum? Ne discipulum abducam, times.
                  </p>
                )}
                {activeValue === "projects" && (
                  <p className="font-sans text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                    beatissimum? Ne discipulum abducam, times. Quae
                    diligentissime contra Aristonem dicuntur a Chryippo. Duo
                    Reges: constructio interrete.
                  </p>
                )}
              </Fragment>
            )}
          </BaseTabSlider>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Size: sm: x2"
        description="Tab slider component 2 slots"
      >
        <div className="w-full max-w-sm">
          <BaseTabSlider
            rounded="full"
            size="sm"
            defaultValue="projects"
            tabs={[
              { label: "Team", value: "team" },
              { label: "Projects", value: "projects" },
            ]}
          >
            {(activeValue) => (
              <Fragment>
                {activeValue === "team" && (
                  <p className="font-sans text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                    beatissimum? Ne discipulum abducam, times.
                  </p>
                )}
                {activeValue === "projects" && (
                  <p className="font-sans text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                    beatissimum? Ne discipulum abducam, times. Quae
                    diligentissime contra Aristonem dicuntur a Chryippo. Duo
                    Reges: constructio interrete.
                  </p>
                )}
              </Fragment>
            )}
          </BaseTabSlider>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Rounded: none: x3"
        description="Tab slider component 3 slots"
      >
        <div className="w-full max-w-sm">
          <BaseTabSlider
            rounded="none"
            defaultValue="team"
            tabs={[
              { label: "Team", value: "team" },
              { label: "Projects", value: "projects" },
              { label: "Tasks", value: "tasks" },
            ]}
            v-slot="{ activeValue }"
          >
            {(activeValue) => (
              <Fragment>
                {activeValue === "team" && (
                  <p className="font-sans text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                    beatissimum? Ne discipulum abducam, times.
                  </p>
                )}
                {activeValue === "projects" && (
                  <p className="font-sans text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                    beatissimum? Ne discipulum abducam, times. Quae
                    diligentissime contra Aristonem dicuntur a Chryippo. Duo
                    Reges: constructio interrete.
                  </p>
                )}
                {activeValue === "tasks" && (
                  <p className="font-sans text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                    beatissimum? Ne discipulum abducam, times. Quae
                    diligentissime contra.
                  </p>
                )}
              </Fragment>
            )}
          </BaseTabSlider>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Rounded: sm: x3"
        description="Tab slider component 3 slots"
      >
        <div className="w-full max-w-sm">
          <BaseTabSlider
            rounded="sm"
            defaultValue="projects"
            tabs={[
              { label: "Team", value: "team" },
              { label: "Projects", value: "projects" },
              { label: "Tasks", value: "tasks" },
            ]}
          >
            {(activeValue) => (
              <Fragment>
                {activeValue === "team" && (
                  <p className="font-sans text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                    beatissimum? Ne discipulum abducam, times.
                  </p>
                )}
                {activeValue === "projects" && (
                  <p className="font-sans text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                    beatissimum? Ne discipulum abducam, times. Quae
                    diligentissime contra Aristonem dicuntur a Chryippo. Duo
                    Reges: constructio interrete.
                  </p>
                )}
                {activeValue === "tasks" && (
                  <p className="font-sans text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                    beatissimum? Ne discipulum abducam, times. Quae
                    diligentissime contra.
                  </p>
                )}
              </Fragment>
            )}
          </BaseTabSlider>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Rounded: md: x3"
        description="Tab slider component 3 slots"
      >
        <div className="w-full max-w-sm">
          <BaseTabSlider
            rounded="md"
            defaultValue="tasks"
            tabs={[
              { label: "Team", value: "team" },
              { label: "Projects", value: "projects" },
              { label: "Tasks", value: "tasks" },
            ]}
          >
            {(activeValue) => (
              <Fragment>
                {activeValue === "team" && (
                  <p className="font-sans text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                    beatissimum? Ne discipulum abducam, times.
                  </p>
                )}
                {activeValue === "projects" && (
                  <p className="font-sans text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                    beatissimum? Ne discipulum abducam, times. Quae
                    diligentissime contra Aristonem dicuntur a Chryippo. Duo
                    Reges: constructio interrete.
                  </p>
                )}
                {activeValue === "tasks" && (
                  <p className="font-sans text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                    beatissimum? Ne discipulum abducam, times. Quae
                    diligentissime contra.
                  </p>
                )}
              </Fragment>
            )}
          </BaseTabSlider>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Rounded: lg: x3"
        description="Tab slider component 3 slots"
      >
        <div className="w-full max-w-sm">
          <BaseTabSlider
            rounded="lg"
            defaultValue="team"
            tabs={[
              { label: "Team", value: "team" },
              { label: "Projects", value: "projects" },
              { label: "Tasks", value: "tasks" },
            ]}
          >
            {(activeValue) => (
              <Fragment>
                {activeValue === "team" && (
                  <p className="font-sans text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                    beatissimum? Ne discipulum abducam, times.
                  </p>
                )}
                {activeValue === "projects" && (
                  <p className="font-sans text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                    beatissimum? Ne discipulum abducam, times. Quae
                    diligentissime contra Aristonem dicuntur a Chryippo. Duo
                    Reges: constructio interrete.
                  </p>
                )}
                {activeValue === "tasks" && (
                  <p className="font-sans text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                    beatissimum? Ne discipulum abducam, times. Quae
                    diligentissime contra.
                  </p>
                )}
              </Fragment>
            )}
          </BaseTabSlider>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Rounded: full: x3"
        description="Tab slider component 3 slots"
      >
        <div className="w-full max-w-sm">
          <BaseTabSlider
            rounded="full"
            defaultValue="projects"
            tabs={[
              { label: "Team", value: "team" },
              { label: "Projects", value: "projects" },
              { label: "Tasks", value: "tasks" },
            ]}
          >
            {(activeValue) => (
              <Fragment>
                {activeValue === "team" && (
                  <p className="font-sans text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                    beatissimum? Ne discipulum abducam, times.
                  </p>
                )}
                {activeValue === "projects" && (
                  <p className="font-sans text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                    beatissimum? Ne discipulum abducam, times. Quae
                    diligentissime contra Aristonem dicuntur a Chryippo. Duo
                    Reges: constructio interrete.
                  </p>
                )}
                {activeValue === "tasks" && (
                  <p className="font-sans text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                    beatissimum? Ne discipulum abducam, times. Quae
                    diligentissime contra.
                  </p>
                )}
              </Fragment>
            )}
          </BaseTabSlider>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Size: sm: x3"
        description="Tab slider component 3 slots"
      >
        <div className="w-full max-w-sm">
          <BaseTabSlider
            rounded="full"
            size="sm"
            defaultValue="tasks"
            tabs={[
              { label: "Team", value: "team" },
              { label: "Projects", value: "projects" },
              { label: "Tasks", value: "tasks" },
            ]}
          >
            {(activeValue) => (
              <Fragment>
                {activeValue === "team" && (
                  <p className="font-sans text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                    beatissimum? Ne discipulum abducam, times.
                  </p>
                )}
                {activeValue === "projects" && (
                  <p className="font-sans text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                    beatissimum? Ne discipulum abducam, times. Quae
                    diligentissime contra Aristonem dicuntur a Chryippo. Duo
                    Reges: constructio interrete.
                  </p>
                )}
                {activeValue === "tasks" && (
                  <p className="font-sans text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                    beatissimum? Ne discipulum abducam, times. Quae
                    diligentissime contra.
                  </p>
                )}
              </Fragment>
            )}
          </BaseTabSlider>
        </div>
      </NuiPreview>
    </Fragment>
  );
};

export default TabSlider;
