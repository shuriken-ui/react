"use client";
import { Icon } from "@iconify/react";
import React, { FC } from "react";

const LinkIcon: FC<{ icon?: string }> = ({ icon = "bxs:error" }) => {
  return <Icon className="text-sm text-muted-400 w-6 h-6" icon={icon} />;
};

export default LinkIcon;
