import { forwardRef, useImperativeHandle, useRef } from "react";
import { cn } from "~/utils";
import { useNinjaId } from "~/hooks/useNinjaId";
import { useNuiDefaultProperty } from "~/Provider";

type BaseSwitchThinProps = {
  /**
   *  The checked state of the switch.
   */
  checked?: boolean;

  /**
   * The value of the switch.
   */
  onChange?: (value: boolean) => void;

  /**
   * The form input identifier.
   */
  id?: string;

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
  };
};

const colors = {
  primary: "nui-switch-thin-primary",
  info: "nui-switch-thin-info",
  success: "nui-switch-thin-success",
  warning: "nui-switch-thin-warning",
  danger: "nui-switch-thin-danger",
  dark: "nui-switch-thin-dark",
  black: "nui-switch-thin-black",
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

  const id = useNinjaId(() => props.id);

  const color = useNuiDefaultProperty(props, "BaseSwitchThin", "color");

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
        "nui-switch-thin",
        color && colors[color],
        props.classes?.wrapper,
      )}
    >
      <span className={cn("nui-switch-thin-outer", props.classes?.outer)}>
        <input
          id={id}
          ref={inputRef}
          type="checkbox"
          className={cn("nui-switch-thin-input peer", props.classes?.input)}
          checked={checked}
          onChange={(e) => {
            onChange(e.target.checked);
          }}
        />
        <span className={cn("nui-switch-thin-handle", props.classes?.handle)} />
        <span className={cn("nui-switch-thin-track", props.classes?.track)} />
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
