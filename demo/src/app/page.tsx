import {
  BaseAvatar,
  BaseHeading,
  BaseLink,
  BaseParagraph,
  BasePlacehold,
  BaseText,
  BaseTextarea,
  BaseThemeSwitch,
  BaseThemeToggle,
} from "@shuriken-ui/react";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="  min-h-screen   grid grid-cols-4  p-24">
      <div>
        <BaseThemeToggle disableTransitions inverted />
        <BaseThemeSwitch disableTransitions />
      </div>

      <div>
        <BaseParagraph>Base Paragraph Here</BaseParagraph>
        <BaseHeading as="h5">Semaa</BaseHeading>
        <BaseText>BaseText</BaseText>
        <BaseLink as={Link} href={""}>
          BaseLink
        </BaseLink>
      </div>

      <div>
        <BaseAvatar
          // as={Image}
          width={300}
          height={300}
          size="4xl"
          dot
          src="https://picsum.photos/300/300"
          srcDark="https://picsum.photos/300/300"
        />
      </div>
      <div className="flex flex-col gap-10">
        <BaseTextarea
          autogrow
          label="BaseTextarea 1"
          stateModifiers={{ lazy: true }}
          placeholder="Write something..."
        />
        <BaseTextarea
          autogrow
          label="BaseTextarea 2"
          labelFloat
          stateModifiers={{ trim: true }}
          placeholder="Write something..."
        />
      </div>
    </main>
  );
}
