"use client";
import {
  BaseHeading,
  BaseSwitchBall,
  BaseSwitchThin,
  BaseThemeSwitch,
  BaseThemeToggle,
} from "@shuriken-ui/react";
import { useState } from "react";

const Switch = () => {
  const [ball, setBall] = useState(false);
  return (
    <div className="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32">
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          Switch
        </BaseHeading>
        <div className="flex items-center gap-8" dir="rtl">
          <BaseThemeSwitch />
          <BaseThemeToggle />
          <BaseSwitchBall checked={ball} onChange={(value) => setBall(value)} />
          <BaseSwitchThin checked={ball} onChange={(value) => setBall(value)} />
        </div>
      </div>
    </div>
  );
};

export default Switch;
