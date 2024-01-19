import { Metadata } from "next";
import React from "react";
import Breadcrumb from "./Breadcrumb";

export const metadata: Metadata = {
  title: "BaseBreadcrumb",
  description: "Breadcrumb component",
};

export default function BreadcrumbPage() {
  return <Breadcrumb />;
}
