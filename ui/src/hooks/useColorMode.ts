import { useEffect, useState } from "react";
import { useMediaQuery } from "./useMediaQuery";

const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";

const THEME_KEY = "nui-theme";

type ColorMode = "dark" | "light";

const setTheme = (value: string) =>
  window.localStorage.setItem(THEME_KEY, value);

export function useColorMode() {
  const [colorMode, setColorMode] = useState<ColorMode>("dark");

  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY);

  function toggle() {
    setColorMode((prevColorMode) => {
      const currentColorMode = prevColorMode === "dark" ? "light" : "dark";

      setTheme(currentColorMode);

      return currentColorMode;
    });
  }

  useEffect(() => {
    if (THEME_KEY in localStorage) {
      const localTheme = window.localStorage.getItem(THEME_KEY) as ColorMode;

      setColorMode(localTheme === "dark" ? "dark" : "light");
    } else {
      const systemTheme = isDarkOS ? "dark" : "light";

      setTheme(systemTheme);
      setColorMode(systemTheme);
    }
  }, [isDarkOS]);

  return {
    colorMode,
    setColorMode: (color: ColorMode) => {
      setTheme(color);
      setColorMode(color);
    },
    toggle,
  };
}
