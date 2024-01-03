import React from "react";
import Shapes from "./Shapes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shapes",
  description: "Check out different shapes",
};

function ShapesPage() {
  return <Shapes />;
}

export default ShapesPage;
