import { forwardRef } from "react";
import { useNinjaId } from "../../hooks/useNinjaId";
import { cn } from "../../utils";
import { IconCheck } from "../icons/IconCheck";
import { useConfig } from "../../Provider";

type BaseSwitchBallProps = {
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
   * Accessible label for the switch.
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
  primary: "nui-switch-ball-primary",
  info: "nui-switch-ball-info",
  success: "nui-switch-ball-success",
  warning: "nui-switch-ball-warning",
  danger: "nui-switch-ball-danger",
};

export const BaseSwitchBall = forwardRef<HTMLInputElement, BaseSwitchBallProps>(
  function BaseSitchBall(
    { label, sublabel, checked, onChange = () => {}, ...props },
    ref,
  ) {
    const id = useNinjaId(() => props.id);

    const config = useConfig();

    const color = props.color ?? config.BaseSwitchBall?.color;

    return (
      <label
        htmlFor={id}
        className={cn("nui-switch-ball", color && colors[color])}
      >
        <span className="nui-switch-ball-outer">
          <input
            id={id}
            ref={ref}
            type="checkbox"
            className="nui-switch-ball-input peer"
            checked={checked}
            onChange={(e) => {
              onChange(e.target.checked);
            }}
          />
          <span className="nui-switch-ball-handle" />
          <span className="nui-switch-ball-track" />
          <IconCheck className="nui-switch-ball-icon" />
        </span>
        {!sublabel ? (
          <span className="nui-switch-ball-single-label">{label}</span>
        ) : (
          <span className="nui-switch-ball-dual-label">
            <span className="nui-switch-ball-label">{label}</span>
            <span className="nui-switch-ball-sublabel">{sublabel}</span>
          </span>
        )}
      </label>
    );
  },
);
