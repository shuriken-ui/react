import { useEffect, useMemo } from "react";
import { useMediaQuery } from "./useMediaQuery";
import type { ColorMode } from "../types";
import { useThemeContext } from "../Provider";

const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";

const THEME_KEY = "nui-theme";

const setTheme = (value: ColorMode) =>
  window.localStorage.setItem(THEME_KEY, value);

export function useColorMode() {
  // const [colorMode, setColorMode] = useState<ColorMode>("dark");
  const { colorMode, setColorMode } = useThemeContext();

  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY);

  const systemTheme = useMemo(() => (isDarkOS ? "dark" : "light"), [isDarkOS]);

  function toggleClass(color: string) {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.remove("light");

    document.documentElement.classList.add(color);
  }

  function toggle() {
    setColorMode(({ value }) => {
      const currentColorMode = value === "dark" ? "light" : "dark";

      setTheme(currentColorMode);
      toggleClass(currentColorMode);

      return { value: currentColorMode, preference: currentColorMode };
    });
  }

  function setColors(color: ColorMode) {
    setTheme(color);

    const preferedColor = color === "system" ? systemTheme : color;

    setColorMode({ value: preferedColor, preference: color });

    toggleClass(preferedColor);
  }

  useEffect(() => {
    if (THEME_KEY in localStorage) {
      const localTheme = window.localStorage.getItem(THEME_KEY) as ColorMode;

      if (localTheme === "system") {
        toggleClass(systemTheme);
        setColorMode({ value: systemTheme, preference: "system" });

        return;
      }

      const theme = localTheme === "dark" ? "dark" : "light";

      toggleClass(theme);
      setColorMode({ value: theme, preference: theme });
    } else {
      setTheme("system");
      setColorMode({ value: systemTheme, preference: "system" });
    }
  }, [isDarkOS, setColorMode, systemTheme]);

  return {
    colorMode,
    setColorMode: setColors,
    toggle,
  };
}
