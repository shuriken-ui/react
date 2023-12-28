import { forwardRef } from "react";
import { cn } from "../../utils";
import { useNinjaId } from "../../hooks/useNinjaId";

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

const colorStyle = {
  primary: "nui-switch-thin-primary",
  info: "nui-switch-thin-info",
  success: "nui-switch-thin-success",
  warning: "nui-switch-thin-warning",
  danger: "nui-switch-thin-danger",
};

export const BaseSwitchThin = forwardRef<HTMLInputElement, BaseSwitchThinProps>(
  function BaseSwitchThin(
    { color = "primary", checked, onChange = () => {}, ...props },
    ref,
  ) {
    const id = useNinjaId(() => props.id);

    return (
      <label htmlFor={id} className={cn("nui-switch-thin", colorStyle[color])}>
        <span className="nui-switch-thin-outer">
          <input
            id={id}
            ref={ref}
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
  },
);
