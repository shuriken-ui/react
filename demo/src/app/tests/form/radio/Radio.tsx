"use client";
import { BaseHeading, BaseRadio } from "@shuriken-ui/react";
import { useState } from "react";

const Radio = () => {
  const [check, setCheck] = useState("primary");
  return (
    <div className="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32">
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          Radio: {check}
        </BaseHeading>
      </div>
      <div className="grid grid-cols-5 gap-4">
        <BaseRadio
          checked={check === "info"}
          onChange={() => setCheck("info")}
          name="radio_1"
          value="info"
          disabled
        />
        <BaseRadio
          checked={check === "muted"}
          onChange={() => setCheck("muted")}
          name="radio_1"
          value="muted"
        />
        <BaseRadio
          checked={check === "primary"}
          onChange={() => setCheck("primary")}
          name="radio_1"
          value="primary"
        />
        <BaseRadio
          checked={check === "success"}
          onChange={() => setCheck("success")}
          name="radio_1"
          value="success"
        />
        <BaseRadio
          checked={check === "warning"}
          onChange={() => setCheck("warning")}
          name="radio_1"
          value="warning"
        />
      </div>
    </div>
  );
};

export default Radio;
