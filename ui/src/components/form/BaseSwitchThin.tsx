import { forwardRef, useImperativeHandle, useRef } from "react";
import { cn } from "../../utils";
import { useNinjaId } from "../../hooks/useNinjaId";
import { useConfig } from "../../Provider";

type BaseSwitchThinProps = {
  /**
   * The form input identifier.
   */
  id?: string;

  /**
   * The value of the switch.
   */
  onChange?: (value: boolean) => void;

  /**
   *  The checked state of the switch.
   */
  checked?: boolean;

  /**
   * Accessible label of the switch.
   */
  label?: string;

  /**
   * The sublabel of the switch.
   */
  sublabel?: string;

  /**
   * Main color of the switch.
   */
  color?: "primary" | "info" | "success" | "warning" | "danger";
};

const colors = {
  primary: "nui-switch-thin-primary",
  info: "nui-switch-thin-info",
  success: "nui-switch-thin-success",
  warning: "nui-switch-thin-warning",
  danger: "nui-switch-thin-danger",
};

export type BaseSwitchThinRef = {
  /**
   * The underlying HTMLInputElement element.
   */
  el: HTMLInputElement | null;

  /**
   * The internal id of the input.
   */
  id: string;
};

export const BaseSwitchThin = forwardRef<
  BaseSwitchThinRef,
  BaseSwitchThinProps
>(function BaseSwitchThin({ checked, onChange = () => {}, ...props }, ref) {
  const inputRef = useRef<HTMLInputElement>(null);

  const config = useConfig();

  const id = useNinjaId(() => props.id);

  const color = props.color ?? config.BaseSwitchThin?.color;

  useImperativeHandle(
    ref,
    () => ({
      get el() {
        return inputRef.current;
      },
      id,
    }),
    [id],
  );

  return (
    <label
      htmlFor={id}
      className={cn("nui-switch-thin", color && colors[color])}
    >
      <span className="nui-switch-thin-outer">
        <input
          id={id}
          ref={inputRef}
          type="checkbox"
          className="nui-switch-thin-input peer"
          checked={checked}
          onChange={(e) => {
            onChange(e.target.checked);
          }}
        />
        <span className="nui-switch-thin-handle" />
        <span className="nui-switch-thin-track" />
      </span>
      {!props.sublabel ? (
        <span className="nui-switch-thin-single-label">{props.label}</span>
      ) : (
        <span className="nui-switch-thin-dual-label">
          <span className="nui-switch-thin-label">{props.label}</span>
          <span className="nui-switch-thin-sublabel">{props.sublabel}</span>
        </span>
      )}
    </label>
  );
});
