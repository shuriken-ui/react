import {
  BaseAvatar,
  BaseHeading,
  BaseLink,
  BaseParagraph,
  BaseText,
} from "@shuriken-ui/react";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center   p-24">
      <BaseParagraph>Base Paragraph Here</BaseParagraph>
      <BaseHeading as="h1">Semaa</BaseHeading>
      <BaseAvatar
        // as={Image}
        width={300}
        height={300}
        size="4xl"
        dot
        src="https://picsum.photos/300/300"
        srcDark="https://picsum.photos/300/300"
      />

      <BaseLink as={Link} href={""}>
        Hi link
      </BaseLink>
    </main>
  );
}
