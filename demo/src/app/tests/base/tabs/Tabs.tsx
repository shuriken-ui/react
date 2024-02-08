"use client";

import { Fragment, useState } from "react";
import NuiPreview from "@/components/NuiPreview";
import { BaseTabs } from "@shuriken-ui/react";
const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState("team");
  return (
    <Fragment>
      <NuiPreview title="Align: start" description="Tabs component start align">
        <div className="w-full max-w-sm">
          <BaseTabs
            defaultValue={selectedTab}
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
          </BaseTabs>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Align: center"
        description="Tabs component center align"
      >
        <div className="w-full max-w-sm">
          <BaseTabs
            defaultValue="projects"
            justify="center"
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
          </BaseTabs>
        </div>
      </NuiPreview>

      <NuiPreview title="Align: end" description="Tabs component end align">
        <div className="w-full max-w-sm">
          <BaseTabs
            defaultValue="team"
            justify="end"
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
          </BaseTabs>
        </div>
      </NuiPreview>

      <NuiPreview title="Icon" description="Tabs component icons">
        <div className="w-full max-w-sm">
          <BaseTabs
            defaultValue="tasks"
            tabs={[
              {
                label: "Team",
                value: "team",
                icon: "ph:users-three-duotone",
              },
              {
                label: "Projects",
                value: "projects",
                icon: "ph:briefcase-duotone",
              },
              {
                label: "Tasks",
                value: "tasks",
                icon: "ph:check-circle-duotone",
              },
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
          </BaseTabs>
        </div>
      </NuiPreview>

      <NuiPreview title="Boxed" description="Tabs component boxed">
        <div className="w-full max-w-sm">
          <BaseTabs
            type="box"
            defaultValue="projects"
            tabs={[
              {
                label: "Team",
                value: "team",
              },
              {
                label: "Projects",
                value: "projects",
              },
              {
                label: "Tasks",
                value: "tasks",
              },
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
          </BaseTabs>
        </div>
      </NuiPreview>

      <NuiPreview title="Boxed: icon" description="Tabs component boxed icons">
        <div className="w-full max-w-sm">
          <BaseTabs
            type="box"
            defaultValue="team"
            tabs={[
              {
                label: "Team",
                value: "team",
                icon: "ph:users-three-duotone",
              },
              {
                label: "Projects",
                value: "projects",
                icon: "ph:briefcase-duotone",
              },
              {
                label: "Tasks",
                value: "tasks",
                icon: "ph:check-circle-duotone",
              },
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
          </BaseTabs>
        </div>
      </NuiPreview>
    </Fragment>
  );
};

export default Tabs;
