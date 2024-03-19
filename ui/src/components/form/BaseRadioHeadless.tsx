import {
  type InputHTMLAttributes,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { useNinjaId } from "~/hooks/useNinjaId";

type BaseRadioHeadlessProps = {
  /**
   * The form input identifier.
   */
  //   id?: string;

  /**
   * The value of the radio input.
   */
  //   value?: T;

  /**
   * The value of the radio input.
   */
  onChange?: (value: string) => void;

  /**
   * The name of the radio input.
   */
  //   name?: string;

  /**
   * The label for the radio input.
   */
  label?: string;
};

export type BaseRadioHeadlessRef = {
  /**
   * The underlying HTMLInputElement element.
   */
  el: HTMLInputElement | null;

  /**
   * The internal id of the radio input.
   */
  id: string;
};

export const BaseRadioHeadless = forwardRef<
  BaseRadioHeadlessRef,
  BaseRadioHeadlessProps &
    Omit<InputHTMLAttributes<HTMLInputElement>, keyof BaseRadioHeadlessProps>
>(function BaseRadioHeadless(
  { id: Id, label, children, onChange = () => {}, ...props },
  ref,
) {
  const inputRef = useRef<HTMLInputElement>(null);

  const id = useNinjaId(() => Id);

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
    <div className="group/nui-radio-headless relative">
      {label && (
        <label
          htmlFor={id}
          className="text-muted-400 mb-1 inline-block cursor-pointer select-none font-sans text-sm"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <input
          ref={inputRef}
          type="radio"
          className="peer absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0"
          {...props}
          onChange={(e) => onChange(e.target.value)}
        />

        {children}
      </div>
    </div>
  );
});
