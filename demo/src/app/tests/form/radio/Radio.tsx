"use client";
import { BaseRadioHeadless, BaseCard, BaseRadio } from "@shuriken-ui/react";
import { Fragment, useState } from "react";
import NuiPreview from "@/components/NuiPreview";
import Iconify from "@/components/Iconify";
import Link from "next/link";

const Radio = () => {
  const [value, setValue] = useState("primary");
  const [customValue, setCustomValue] = useState("pink");
  return (
    <Fragment>
      <NuiPreview title="Color" description="Radio component colors">
        <div className="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4">
          <BaseRadio
            onChange={setValue}
            checked={value === "default"}
            name="checkbox_base"
            label="default"
            value="default"
          />
          <BaseRadio
            onChange={setValue}
            checked={value === "primary"}
            name="checkbox_base"
            label="primary"
            value="primary"
            color="primary"
          />
          <BaseRadio
            onChange={setValue}
            checked={value === "muted"}
            name="checkbox_base"
            value="muted"
            label="muted"
            color="muted"
          />
          <BaseRadio
            onChange={setValue}
            checked={value === "info"}
            name="checkbox_base"
            value="info"
            label="info"
            color="info"
          />
          <BaseRadio
            onChange={setValue}
            checked={value === "success"}
            name="checkbox_base"
            value="success"
            label="success"
            color="success"
          />
          <BaseRadio
            onChange={setValue}
            name="checkbox_base"
            checked={value === "warning"}
            value="warning"
            label="warning"
            color="warning"
          />
          <BaseRadio
            onChange={setValue}
            checked={value === "danger"}
            name="checkbox_base"
            value="danger"
            label="danger"
            color="danger"
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Custom" description="Radio component custom colors">
        <div className="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4">
          <BaseRadio
            onChange={setCustomValue}
            checked={customValue === "indigo"}
            name="checkbox_colors"
            label="indigo"
            value="indigo"
            classes={{
              wrapper: "!text-indigo-500",
            }}
          />
          <BaseRadio
            onChange={setCustomValue}
            checked={customValue === "lime"}
            name="checkbox_colors"
            label="lime"
            value="lime"
            classes={{ wrapper: "!text-lime-500" }}
          />
          <BaseRadio
            onChange={setCustomValue}
            checked={customValue === "pink"}
            name="checkbox_colors"
            label="pink"
            value="pink"
            classes={{ wrapper: "!text-pink-500" }}
          />
          <BaseRadio
            onChange={setCustomValue}
            checked={customValue === "sky"}
            name="checkbox_colors"
            label="sky"
            value="sky"
            classes={{ wrapper: "!text-sky-500" }}
          />
          <BaseRadio
            onChange={setCustomValue}
            checked={customValue === "yellow"}
            name="checkbox_colors"
            label="yellow"
            value="yellow"
            classes={{ wrapper: "!text-yellow-500" }}
          />
          <BaseRadio
            onChange={setCustomValue}
            checked={customValue === "purple"}
            name="checkbox_colors"
            label="purple"
            value="purple"
            classes={{ wrapper: "!text-purple-500" }}
          />
          <BaseRadio
            onChange={setCustomValue}
            checked={customValue === "green"}
            name="checkbox_colors"
            label="green"
            value="green"
            classes={{ wrapper: "!text-green-500" }}
          />
          <BaseRadio
            onChange={setCustomValue}
            checked={customValue === "fuchsia"}
            name="checkbox_colors"
            label="fuchsia"
            value="fuchsia"
            classes={{ wrapper: "!text-fuchsia-500" }}
          />
          <BaseRadio
            onChange={setCustomValue}
            checked={customValue === "rose"}
            name="checkbox_colors"
            label="rose"
            value="rose"
            classes={{
              wrapper: "!text-rose-500",
            }}
          />
          <BaseRadio
            onChange={setCustomValue}
            checked={customValue === "blue"}
            name="checkbox_colors"
            label="blue"
            value="blue"
            classes={{
              wrapper: "!text-blue-500",
            }}
          />
          <BaseRadio
            onChange={setCustomValue}
            checked={customValue === "orange"}
            name="checkbox_colors"
            label="orange"
            value="orange"
            classes={{
              wrapper: "!text-orange-500",
            }}
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Headless" description="Radio component headless">
        <div className="flex w-full max-w-4xl items-end gap-6">
          <form className="mx-auto w-full">
            <fieldset className="w-full space-y-6">
              <div className="border-muted-200 dark:border-muted-700 flex items-center justify-between border-b py-4">
                <legend className="text-muted-800 dark:text-muted-100 font-sans text-xl font-medium">
                  Change Plan
                </legend>
                <Link
                  href="#"
                  className="text-primary-500 font-sans text-sm font-medium underline-offset-4 hover:underline"
                >
                  Cancel your plan
                </Link>
              </div>
              <div className="grid gap-6 sm:grid-cols-4">
                <BaseRadioHeadless
                  onChange={setValue}
                  name="radio_custom"
                  value="value_1"
                >
                  <BaseCard
                    rounded="lg"
                    className="peer-checked:!border-success-500 peer-checked:!bg-success-500/10 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100"
                  >
                    <div className="flex flex-col">
                      <h4 className="text-muted-500 dark:text-muted-200 mb-3 font-sans text-sm font-medium uppercase leading-tight">
                        Starter
                      </h4>
                      <h3 className="text-muted-800 dark:text-muted-100 font-sans font-bold">
                        <span className="text-4xl">1</span>
                        <span className="text-2xl uppercase">GB</span>
                      </h3>
                      <div className="font-sans">
                        <span className="text-muted-800 dark:text-muted-100 text-xl font-bold">
                          $5
                        </span>
                        <span className="text-muted-500 dark:text-muted-400 text-sm font-medium">
                          /month
                        </span>
                      </div>
                    </div>
                    <div className="child absolute end-2 top-3 opacity-0">
                      <Iconify
                        icon="ph:check-circle-duotone"
                        className="text-success-500 h-7 w-7"
                      />
                    </div>
                  </BaseCard>
                </BaseRadioHeadless>
                <BaseRadioHeadless
                  onChange={setValue}
                  name="radio_custom"
                  value="value_2"
                >
                  <BaseCard
                    rounded="lg"
                    className="peer-checked:!border-success-500 peer-checked:!bg-success-500/10 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100"
                  >
                    <div className="flex flex-col">
                      <h4 className="text-muted-500 dark:text-muted-200 mb-3 font-sans text-sm font-medium uppercase leading-tight">
                        Freelancer
                      </h4>
                      <h3 className="text-muted-800 dark:text-muted-100 font-sans font-bold">
                        <span className="text-4xl">5</span>
                        <span className="text-2xl uppercase">GB</span>
                      </h3>
                      <div className="font-sans">
                        <span className="text-muted-800 dark:text-muted-100 text-xl font-bold">
                          $10
                        </span>
                        <span className="text-muted-500 dark:text-muted-400 text-sm font-medium">
                          /month
                        </span>
                      </div>
                    </div>
                    <div className="child absolute end-2 top-3 opacity-0">
                      <Iconify
                        icon="ph:check-circle-duotone"
                        className="text-success-500 h-7 w-7"
                      />
                    </div>
                  </BaseCard>
                </BaseRadioHeadless>
                <BaseRadioHeadless
                  onChange={setValue}
                  name="radio_custom"
                  value="value_3"
                >
                  <BaseCard
                    rounded="lg"
                    className="peer-checked:!border-success-500 peer-checked:!bg-success-500/10 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100"
                  >
                    <div className="flex flex-col">
                      <h4 className="text-muted-500 dark:text-muted-200 mb-3 font-sans text-sm font-medium uppercase leading-tight">
                        Business
                      </h4>
                      <h3 className="text-muted-800 dark:text-muted-100 font-sans font-bold">
                        <span className="text-4xl">10</span>
                        <span className="text-2xl uppercase">GB</span>
                      </h3>
                      <div className="font-sans">
                        <span className="text-muted-800 dark:text-muted-100 text-xl font-bold">
                          $15
                        </span>
                        <span className="text-muted-500 dark:text-muted-400 text-sm font-medium">
                          /month
                        </span>
                      </div>
                    </div>
                    <div className="child absolute end-2 top-3 opacity-0">
                      <Iconify
                        icon="ph:check-circle-duotone"
                        className="text-success-500 h-7 w-7"
                      />
                    </div>
                  </BaseCard>
                </BaseRadioHeadless>
                <BaseRadioHeadless
                  onChange={setValue}
                  name="radio_custom"
                  value="value_4"
                >
                  <BaseCard
                    rounded="lg"
                    className="peer-checked:!border-success-500 peer-checked:!bg-success-500/10 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100"
                  >
                    <div className="flex flex-col">
                      <h4 className="text-muted-500 dark:text-muted-200 mb-3 font-sans text-sm font-medium uppercase leading-tight">
                        Enterprise
                      </h4>
                      <h3 className="text-muted-800 dark:text-muted-100 font-sans font-bold">
                        <span className="text-4xl">20</span>
                        <span className="text-2xl uppercase">GB</span>
                      </h3>
                      <div className="font-sans">
                        <span className="text-muted-800 dark:text-muted-100 text-xl font-bold">
                          $20
                        </span>
                        <span className="text-muted-500 dark:text-muted-400 text-sm font-medium">
                          /month
                        </span>
                      </div>
                    </div>
                    <div className="child absolute end-2 top-3 opacity-0">
                      <Iconify
                        icon="ph:check-circle-duotone"
                        className="text-success-500 h-7 w-7"
                      />
                    </div>
                  </BaseCard>
                </BaseRadioHeadless>
              </div>
            </fieldset>
          </form>
        </div>
      </NuiPreview>
    </Fragment>
  );
};

export default Radio;
