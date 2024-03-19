import type { Metadata } from "next";
import "./globals.css";
import { ShurikenUIProvider } from "@shuriken-ui/react";
import ThemeSwitcher from "./ThemeSwitcher";
import Link from "next/link";
import NuiLogoText from "./NuiLogoText";
import LinkIcon from "./LinkIcon";
import { getLinks } from "@/data/sidebar";

export const metadata: Metadata = {
  title: {
    template: "%s - @shuriken-ui/react",
    default: "@shuriken-ui/react",
  },

  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebarLinks = getLinks();

  return (
    <ShurikenUIProvider>
      <html lang="en">
        <body className={`bg-white dark:bg-muted-950`}>
          <div className="flex min-h-screen">
            <div className="w-2/12">
              <nav className="fixed w-2/12 max-h-screen overflow-y-scroll nui-slimscroll">
                <Link href="/" className="inline-block px-6 py-4">
                  <NuiLogoText className="h-8 w-auto text-muted-600" />
                </Link>

                <ul className="flex flex-col gap-10 pt-6">
                  {sidebarLinks.map((linkGroup, index) => (
                    <li key={index}>
                      <h3 className="uppercase text-xs tracking-wider text-muted-400 font-semibold mx-4 px-3 pb-2">
                        {linkGroup.title}
                      </h3>

                      <ul className="px-3">
                        {linkGroup.links.map((link, index) => (
                          <li key={index}>
                            <Link
                              // active-class="text-primary-500"
                              className="py-2 px-4 hover:bg-muted-100 dark:hover:bg-muted-900 rounded-lg flex flex-col"
                              href={link.href}
                            >
                              <div className="flex gap-4 items-center">
                                <LinkIcon icon={link.icon} />
                                <span className="block">
                                  <span className="block text-sm font-sans text-muted-800 dark:text-muted-100">
                                    {link.title}
                                  </span>
                                  {link.description && (
                                    <span className="block text-xs text-muted-500">
                                      {link.description}
                                    </span>
                                  )}
                                </span>
                              </div>
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
        </body>
      </html>
    </ShurikenUIProvider>
  );
}
