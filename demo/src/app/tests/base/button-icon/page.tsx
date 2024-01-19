import { Metadata } from "next";
import React from "react";
import ButtonIcon from "./ButtonIcon";

export const metadata: Metadata = {
  title: "Button Icon",
  description: "Button Icon variations",
};

function ButtonIconPage() {
  return <ButtonIcon />;
}

export default ButtonIconPage;
