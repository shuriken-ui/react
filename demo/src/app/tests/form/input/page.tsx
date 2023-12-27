import { Metadata } from "next";
import React from "react";
import Inputs from "./Inputs";

export const metadata: Metadata = {
  title: "Input",
  description:
    "Check how different input sizes look like compared to each other.",
};
function InputPage() {
  return <Inputs />;
}

export default InputPage;
