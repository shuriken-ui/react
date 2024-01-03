import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ShurikenUIProvider } from "@shuriken-ui/react";
import ThemeSwitcher from "./ThemeSwitcher";
import Link from "next/link";
import LogoLink from "./LogoLink";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s - @shuriken-ui/react",
    default: "@shuriken-ui/react",
  },

  description: "",
};

type PageLink = { title: string; description?: string; href: string };
type LinkGroup = { title: string; links: PageLink[] };

const routes: LinkGroup[] = [
  {
    title: "Base",
    links: [
      {
        title: "Colors",
        href: "/tests/base/colors",
        description: "Basic colors",
      },
      {
        title: "Typography",
        href: "/tests/base/typography",
        description: "Tailwind typography plugin",
      },
    ],
  },
  {
    title: "Content",
    links: [
      {
        title: "Button Action",
        href: "/tests/content/button-action",
        description: "Button variations",
      },
      {
        title: "Button Close",
        href: "/tests/content/button-close",
        description: "Button Close variations",
      },
      {
        title: "Button Icon",
        href: "/tests/content/button-icon",
        description: "Button Icon variations",
      },
      {
        title: "Buttons",
        href: "/tests/content/buttons",
        description: "Button variations",
      },
      {
        title: "Card",
        href: "/tests/content/card",
        description: "SVG icons",
      },
      {
        title: "Dropdown",
        href: "/tests/content/dropdown",
        description: "Dropdown examples",
      },
      {
        title: "Icon Box",
        href: "/tests/content/icon-box",
        description: "Box wrappers for icons",
      },
      {
        title: "Mark",
        href: "/tests/content/mark",
        description: "Highlight text with a background color.",
      },
    ],
  },
  {
    title: "Form",
    links: [
      {
        title: "Checkbox",
        href: "/tests/form/checkbox",
        description: "Basic custom checkbox and radio",
      },
      {
        title: "Input",
        href: "/tests/form/input",
        description:
          "Check how different input sizes look like compared to each other.",
      },
      {
        title: "Progress",
        href: "/tests/form/progress",
        description: "Progress component",
      },
      {
        title: "Radio",
        href: "/tests/form/radio",
        description: "SVG icons",
      },
      {
        title: "Switch",
        href: "/tests/form/switch",
        description: "SVG icons",
      },
    ],
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ShurikenUIProvider>
      <html lang="en">
        <body className={inter.className}>
          <div>
            <div className="flex min-h-screen">
              <div className="w-2/12">
                <nav className="fixed w-2/12 max-h-screen overflow-y-scroll nui-slimscroll">
                  <LogoLink />

                  <ul className="flex flex-col gap-6">
                    {routes.map((routeGroup, index) => (
                      <li key={index}>
                        <h3 className="capitalize text-sm text-muted-400 font-medium border-b border-muted-300 mx-4 pb-2 mb-4">
                          {routeGroup.title}
                        </h3>

                        <ul>
                          {routeGroup.links.map((link, index) => (
                            <li key={index}>
                              <Link
                                active-class="text-primary-500"
                                className="py-2 px-4 hover:bg-muted-50 dark:hover:bg-muted-900 flex flex-col"
                                href={link.href}
                              >
                                <span className="flex gap-1 items-center">
                                  {/* <Icon
                        class="text-muted-600"
                        v-if="
                          typeof (route as RouteRecordNormalized).meta?.icon ===
                            'string' &&
                          (route as RouteRecordNormalized).meta?.icon
                        "
                        :name="
                          (route as RouteRecordNormalized).meta?.icon as string
                        "
                      /> */}
                                  <span className="inline-bloc">
                                    {link.title}
                                  </span>
                                </span>
                                {link.description && (
                                  <span className="italic text-xs text-muted-500">
                                    {link.description}
                                  </span>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="w-10/12 border-l border-muted-200 dark:border-muted-800">
                {children}
              </div>
            </div>
            <div className="fixed top-0 end-0 pr-6 pt-6 z-50">
              <ThemeSwitcher />
            </div>
          </div>
        </body>
      </html>
    </ShurikenUIProvider>
  );
}
