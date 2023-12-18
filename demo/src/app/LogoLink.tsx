"use client";
import { useColorMode } from "@shuriken-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LogoLink = () => {
  const color = useColorMode();

  const logo =
    color.colorMode.value === "dark"
      ? "https://user-images.githubusercontent.com/3911343/232132279-8d8bf0ad-b1d7-4802-984e-a696763dc6cd.png"
      : "https://user-images.githubusercontent.com/3911343/232132309-62971744-dcdb-429c-aa93-6ba0c1caac42.png";

  return (
    <Link href="/" className="inline-block px-2 py-4">
      <Image
        src={logo}
        width={150}
        height={32}
        alt="Shuriken UI logo"
        className="h-8"
      />
    </Link>
  );
};

export default LogoLink;
