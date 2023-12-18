"use client";

import React, { useState } from "react";

import {
  BaseCheckbox,
  BaseCheckboxAnimated,
  BaseHeading,
  BaseRadioHeadless,
} from "@shuriken-ui/react";

const Checkboxes = () => {
  const [check, setCheck] = useState("off");
  const [radio, setRadio] = useState("");

  return (
    <div className="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32">
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          Checkbox shape
        </BaseHeading>
        <div className="grid grid-cols-5 gap-4">
          <BaseCheckbox
            onChange={setCheck}
            value={check}
            trueValue="on"
            falseValue="off"
            shape="straight"
            disabled
          />
          <BaseCheckbox
            onChange={setCheck}
            value={check}
            trueValue="on"
            falseValue="off"
            shape="rounded"
            indeterminate
          />
          <BaseCheckbox
            onChange={setCheck}
            value={"check"}
            trueValue="on"
            falseValue="off"
            shape="smooth"
          />
          <BaseCheckbox
            onChange={setCheck}
            value={check}
            trueValue="on"
            falseValue="off"
            shape="curved"
          />
          <BaseCheckbox
            onChange={setCheck}
            value={check}
            trueValue="on"
            falseValue="off"
            shape="full"
          />
        </div>
      </div>
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          Checkbox colors
        </BaseHeading>
        <div className="grid grid-cols-8 gap-4">
          <BaseCheckbox color="default" disabled />
          <BaseCheckbox color="light" indeterminate />
          <BaseCheckbox color="muted" />
          <BaseCheckbox color="primary" />
          <BaseCheckbox color="info" />
          <BaseCheckbox color="success" />
          <BaseCheckbox color="warning" />
          <BaseCheckbox color="danger" />
        </div>
      </div>
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          Checkbox animated
        </BaseHeading>
        <div className="grid grid-cols-8 gap-4">
          <BaseCheckboxAnimated
            onChange={setCheck}
            value={check}
            trueValue="on"
            falseValue="off"
            color="light"
          />
          <BaseCheckboxAnimated
            onChange={setCheck}
            value={check}
            trueValue="on"
            falseValue="off"
            color="muted"
          />
          <BaseCheckboxAnimated
            onChange={setCheck}
            value={check}
            trueValue="on"
            falseValue="off"
            color="primary"
          />
          <BaseCheckboxAnimated
            onChange={setCheck}
            value={check}
            trueValue="on"
            falseValue="off"
            color="info"
          />
          <BaseCheckboxAnimated
            onChange={setCheck}
            value={check}
            trueValue="on"
            falseValue="off"
            color="success"
          />
          <BaseCheckboxAnimated
            onChange={setCheck}
            value={check}
            trueValue="on"
            falseValue="off"
            color="warning"
          />
          <BaseCheckboxAnimated
            onChange={setCheck}
            value={check}
            trueValue="on"
            falseValue="off"
            color="danger"
          />
        </div>
      </div>
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          BaseCheckboxHeadless
        </BaseHeading>
        <div className="max-w-3xl flex items-center gap-4">
          <BaseRadioHeadless
            onChange={setRadio}
            name="radio_test"
            value="value_1"
            checked={radio === "value_1"}
          >
            <div className="flex items-center justify-between gap-2 p-8 bg-white border border-muted-200 text-muted-200 peer-checked:text-primary-500">
              <div className="font-sans text-muted-500">Some radio box</div>
              <div className="h-3 w-3 rounded-full bg-current"></div>
            </div>
          </BaseRadioHeadless>
          <BaseRadioHeadless
            onChange={setRadio}
            name="radio_test"
            value="value_2"
            checked={radio === "value_2"}
          >
            <div className="flex items-center justify-between gap-2 p-8 bg-white border border-muted-200 text-muted-200 peer-checked:text-primary-500">
              <div className="font-sans text-muted-500">Some radio box</div>
              <div className="h-3 w-3 rounded-full bg-current"></div>
            </div>
          </BaseRadioHeadless>
          <BaseRadioHeadless
            onChange={setRadio}
            name="radio_test"
            value="value_3"
            checked={radio === "value_3"}
          >
            <div className="flex items-center justify-between gap-2 p-8 bg-white border border-muted-200 text-muted-200 peer-checked:text-primary-500">
              <div className="font-sans text-muted-500">Some radio box</div>
              <div className="h-3 w-3 rounded-full bg-current"></div>
            </div>
          </BaseRadioHeadless>
        </div>
      </div>
    </div>
  );
};

export default Checkboxes;
