"use client";

import React, { Fragment, useState } from "react";
import NuiPreview from "@/components/NuiPreview";

import { BaseInputFile } from "@shuriken-ui/react";

const InputFile = () => {
  const [first, setFirst] = useState<FileList | null>(null);
  const [second, setSecond] = useState<FileList | null>(null);
  const [third, setThird] = useState<FileList | null>(null);
  const [fourth, setFourth] = useState<FileList | null>(null);
  const [fifth, setFifth] = useState<FileList | null>(null);
  return (
    <Fragment>
      <NuiPreview title="Radius" description="File inputs radiuses">
        <div className="grid gap-6 md:max-w-4xl md:grid-cols-3">
          <BaseInputFile
            value={first}
            onChange={setFirst}
            rounded="none"
            label="Rounded: none"
          />
          <BaseInputFile
            value={second}
            onChange={setSecond}
            rounded="sm"
            label="Rounded: sm"
          />
          <BaseInputFile
            value={third}
            onChange={setThird}
            rounded="md"
            label="Rounded: md"
          />
          <BaseInputFile
            value={fourth}
            onChange={setFourth}
            rounded="lg"
            label="Rounded: lg"
          />
          <BaseInputFile
            value={fifth}
            onChange={setFifth}
            rounded="full"
            label="Rounded: full"
          />
        </div>
      </NuiPreview>
    </Fragment>
  );
};

export default InputFile;
