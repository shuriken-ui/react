import { Metadata } from "next";
import React from "react";
import Checkboxes from "./Checkboxes";

export const metadata: Metadata = {
  title: "Checkbox",
  description: "Basic custom checkbox and radio",
};
function CheckboxPage() {
  return <Checkboxes />;
}

export default CheckboxPage;
