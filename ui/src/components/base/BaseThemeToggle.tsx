import { forwardRef, useEffect, useRef } from "react";
import { useColorMode } from "../../hooks/useColorMode";
import { IconMoon, IconSun } from "../icons";

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
>(function BaseThemeToggle(
  { disableTransitions = false, inverted = false },
  ref,
) {
  const timeoutRef = useRef<number>();

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
    <label
      className={`nui-theme-toggle ${
        inverted ? "nui-theme-toggle-inverted" : ""
      }`}
      ref={ref}
    >
      <input
        type="checkbox"
        className="nui-theme-toggle-input"
        onChange={(e) => handleChange(e.target.checked)}
        checked={colorMode === "dark"}
      />
      <span className="nui-theme-toggle-inner">
        <IconSun className="nui-sun" />
        <IconMoon className="nui-moon" />
      </span>
    </label>
  );
});

// TODO: add this classes globally
// <style>
// .nui-no-transition * {
//   transition-property: none !important;
//   transition-duration: 0 !important;
// }
// </style>
