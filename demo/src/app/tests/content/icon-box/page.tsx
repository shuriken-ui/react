import React from "react";
import { Metadata } from "next";
import IconBox from "./IconBox";

export const metadata: Metadata = {
  title: "Icon Box",
  description: "Box wrappers for icons",
};
function IconBoxPage() {
  return <IconBox />;
}

export default IconBoxPage;
