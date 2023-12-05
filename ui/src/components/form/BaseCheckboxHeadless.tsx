import { forwardRef } from "react";
import { useNinjaId } from "../../hooks/useNinjaId";

type BaseCheckboxHeadlessProps = {
  /**
   * The label to display for the checkbox.
   */
  label?: string;

  /**
   * Defines the value of the checkbox when it's checked.
   */
  value?: string;

  /**
   * The value to set when the checkbox is checked.
   */
  trueValue?: string;

  /**
   * The value to set when the checkbox is unchecked.
   */
  falseValue?: string;

  /**
   * The  value of the checkbox.
   */
  onChange?: (value: string) => void;

  /**
   * The form input identifier.
   */
  id?: string;
};

export const BaseCheckboxHeadless = forwardRef<
  HTMLInputElement,
  BaseCheckboxHeadlessProps
>(function BaseCheckboxHeadless({ trueValue, falseValue, ...props }, ref) {
  const id = useNinjaId(() => props.id);

  return (
    <div className="group/nui-checkbox-headless relative">
      {props.label && (
        <label
          htmlFor={id}
          className="text-muted-400 mb-1 inline-block cursor-pointer select-none font-sans text-sm"
        >
          {props.label}
        </label>
      )}
      <div className="relative">
        <input
          id={id}
          ref={ref}
          value={props.value}
          className="peer absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0"
          type="checkbox"
          onChange={(event) => {
            props.onChange?.(event.target.value);
          }}
        />
      </div>
    </div>
  );
});