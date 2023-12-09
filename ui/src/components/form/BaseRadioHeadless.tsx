import React, { InputHTMLAttributes, forwardRef } from "react";
import { useNinjaId } from "../../hooks/useNinjaId";

type BaseRadioHeadlessProps = InputHTMLAttributes<HTMLInputElement> & {
  /**
   * The form input identifier.
   */
  //   id?: string;

  /**
   * The value of the radio input.
   */
  //   value?: T;

  /**
   * The model value of the radio input.
   */
  //   modelValue?: T;

  /**
   * The name of the radio input.
   */
  //   name?: string;

  /**
   * The label for the radio input.
   */
  label?: string;
};

export const BaseRadioHeadless = forwardRef<
  HTMLInputElement,
  BaseRadioHeadlessProps
>(function BaseRadioHeadless(
  { id: Id, label, className, type, ...props },
  ref,
) {
  const id = useNinjaId(() => Id);

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
          ref={ref}
          type="radio"
          className="peer absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0"
          {...props}
        />
      </div>
    </div>
  );
});
