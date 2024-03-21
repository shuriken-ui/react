import { forwardRef, useEffect, useRef } from "react";
import { IconMoon, IconSun } from "~/components/icons";
import { useColorMode } from "~/hooks/useColorMode";
import { useNuiDefaultProperty } from "~/Provider";
import "./BaseThemeSwitch.css";

type BaseThemeSwitchProps = {
  /**
   * Disables transitions when toggling between light and dark mode.
   *
   * @default false
   */
  disableTransitions?: boolean;
};
export const BaseThemeSwitch = forwardRef<
  HTMLLabelElement,
  BaseThemeSwitchProps
>(function BaseThemeSwitch({ ...props }, ref) {
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
    <label className="nui-theme-switch" ref={ref}>
      <input
        className="nui-theme-switch-input"
        type="checkbox"
        onChange={(e) => handleChange(e.target.checked)}
        checked={colorMode.value === "dark"}
      />
      <span className="nui-theme-switch-inner">
        <IconSun className="nui-sun" />
        <IconMoon className="nui-moon" />
      </span>
    </label>
  );
});
