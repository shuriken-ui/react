import { forwardRef, useImperativeHandle, useRef } from "react";
import { useNinjaId } from "~/hooks/useNinjaId";
import { cn } from "~/utils";
import { IconCheck } from "../icons/IconCheck";
import { useNuiDefaultProperty } from "~/Provider";

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
   *
   * @default 'primary'
   */
  color?:
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "dark"
    | "black";

  /**
   * Optional CSS classes to apply to the component inner elements.
   */
  classes?: {
    /**
     * CSS classes to apply to the wrapper element.
     */
    wrapper?: string | string[];

    /**
     * CSS classes to apply to the outer element.
     */
    outer?: string | string[];

    /**
     * CSS classes to apply to the input element.
     */
    input?: string | string[];

    /**
     * CSS classes to apply to the handle element.
     */
    handle?: string | string[];

    /**
     * CSS classes to apply to the track element.
     */
    track?: string | string[];

    /**
     * CSS classes to apply to the icon element.
     */
    icon?: string | string[];
  };
};

const colors = {
  primary: "nui-switch-ball-primary",
  info: "nui-switch-ball-info",
  success: "nui-switch-ball-success",
  warning: "nui-switch-ball-warning",
  danger: "nui-switch-ball-danger",
  dark: "nui-switch-ball-dark",
  black: "nui-switch-ball-black",
};

export type BaseSwitchBallRef = {
  /**
   * The underlying HTMLInputElement element.
   */
  el: HTMLInputElement | null;

  /**
   * The internal id of the input.
   */
  id: string;
};

export const BaseSwitchBall = forwardRef<
  BaseSwitchBallRef,
  BaseSwitchBallProps
>(function BaseSitchBall(
  { label, sublabel, checked, onChange = () => {}, ...props },
  ref,
) {
  const inputRef = useRef<HTMLInputElement>(null);

  const id = useNinjaId(() => props.id);

  const color = useNuiDefaultProperty(props, "BaseSwitchBall", "color");

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
      className={cn(
        "nui-switch-ball",
        color && colors[color],
        props.classes?.wrapper,
      )}
    >
      <span className={cn("nui-switch-ball-outer", props.classes?.outer)}>
        <input
          id={id}
          ref={inputRef}
          type="checkbox"
          className={cn("nui-switch-ball-input peer", props.classes?.input)}
          checked={checked}
          onChange={(e) => {
            onChange(e.target.checked);
          }}
        />
        <span className={cn("nui-switch-ball-handle", props.classes?.handle)} />
        <span className={cn("nui-switch-ball-track", props.classes?.track)} />
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
});
