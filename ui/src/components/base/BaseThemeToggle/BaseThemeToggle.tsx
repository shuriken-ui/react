import { forwardRef, useEffect, useRef } from "react";
import { useColorMode } from "~/hooks/useColorMode";
import { IconMoon, IconSun } from "~/components/icons";
import { useNuiDefaultProperty } from "~/Provider";

import "./BaseThemeToggle.css";
import { cn } from "~/utils";

type BaseThemeToggleProps = {
  /**
   * Sets the toggle element to inverted colors mode.
   */
  inverted?: boolean;

  /**
   * Disables transitions when toggling between light and dark mode.
   */
  disableTransitions?: boolean;
};

export const BaseThemeToggle = forwardRef<
  HTMLLabelElement,
  BaseThemeToggleProps
>(function BaseThemeToggle({ inverted = false, ...props }, ref) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const { colorMode, setColorMode } = useColorMode();

  const disableTransitions = useNuiDefaultProperty(
    props,
    "BaseThemeSwitch",
    "disableTransitions",
  );

  function handleChange(isChecked: boolean) {
    // disable transitions
    if (disableTransitions) {
      document.documentElement.classList.add("nui-no-transition");
    }

    setColorMode(isChecked ? "dark" : "light");

    // re-enable transitions
    if (disableTransitions) {
      timeoutRef.current = setTimeout(() => {
        document.documentElement.classList.remove("nui-no-transition");
      }, 0);
    }
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  });

  return (
    <label
      className={cn(
        "nui-theme-toggle",
        inverted && "nui-theme-toggle-inverted",
      )}
      ref={ref}
    >
      <input
        type="checkbox"
        className="nui-theme-toggle-input"
        onChange={(e) => handleChange(e.target.checked)}
        checked={colorMode.value === "dark"}
      />
      <span className="nui-theme-toggle-inner">
        <IconSun className="nui-sun" />
        <IconMoon className="nui-moon" />
      </span>
    </label>
  );
});
