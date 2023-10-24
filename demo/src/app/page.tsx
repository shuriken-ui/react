import {
  IconCheck,
  IconCheckCircle,
  IconChevronDown,
  IconClose,
  IconIndeterminate,
  IconMinus,
  IconMoon,
  IconPlus,
  IconSun,
} from "@shuriken-ui/react/icons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-5 items-center">
        <IconCheck className="h-6 w-6" />
        <IconCheckCircle className="h-6 w-6" />
        <IconMinus className="h-6 w-6" />
        <IconIndeterminate className="h-6 w-6" />
        <IconPlus className="h-6 w-6" />
        <IconMoon className="h-6 w-6" />
        <IconChevronDown className="h-6 w-6" />
        <IconSun className="h-6 w-6" />
        <IconClose className="h-6 w-6" />
      </div>
    </main>
  );
}
