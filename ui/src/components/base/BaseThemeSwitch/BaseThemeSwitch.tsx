import { forwardRef, useEffect, useRef } from "react";
import { IconMoon, IconSun } from "../../icons";
import { useColorMode } from "../../../hooks/useColorMode";
import "./BaseThemeSwitch.css";

type BaseThemeSwitchProps = {
  /**
   * Disables transitions when toggling between light and dark mode.
   */
  disableTransitions?: boolean;
};
export const BaseThemeSwitch = forwardRef<
  HTMLLabelElement,
  BaseThemeSwitchProps
>(function BaseThemeSwitch({ disableTransitions = false }, ref) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const { colorMode, setColorMode } = useColorMode();

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
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
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
