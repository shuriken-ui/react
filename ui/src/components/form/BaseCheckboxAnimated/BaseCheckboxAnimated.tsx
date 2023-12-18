import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { useNinjaId } from "../../../hooks/useNinjaId";
import { IconCheckCircle } from "../../icons/IconCheckCircle";
import { cn } from "../../../utils";

import "./CheckboxAnimated.css";

type BaseCheckboxAnimatedProps = {
  /**
   * The value of the component.
   */
  value?: string;

  /**
   * The form input identifier.
   */
  id?: string;

  /**
   * The value of the component.
   */
  onChange?: (value: string) => void;

  /**
   * The value to set when the component is checked.
   */
  trueValue?: string;

  /**
   * The value to set when the component is unchecked.
   */
  falseValue?: string;

  /** The color of the checkbox. Can be 'default', 'primary', 'info', 'success', 'warning', or 'danger' */
  color?:
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "muted"
    | "light";

  /**
   * Optional CSS classes to apply to the wrapper, label, and input elements.
   */
  classes?: {
    /**
     * CSS classes to apply to the wrapper element.
     */
    wrapper?: string | string[];

    /**
     * CSS classes to apply to the label element.
     */
    label?: string | string[];

    /**
     * CSS classes to apply to the input element.
     */
    input?: string | string[];
  };
};

const colorStyle = {
  primary: "text-primary-500",
  info: "text-info-500",
  success: "text-success-500",
  warning: "text-warning-500",
  danger: "text-danger-500",
  light: "text-light-100",
  muted: "text-muted-400",
};

export type BaseCheckboxAnimatedRef = {
  container: HTMLDivElement | null;
  input: HTMLInputElement | null;
  innerElement: HTMLDivElement | null;
};

export const BaseCheckboxAnimated = forwardRef<
  BaseCheckboxAnimatedRef,
  BaseCheckboxAnimatedProps
>(function BaseCheckboxAnimated(
  {
    onChange = () => {},
    classes = {
      wrapper: [],
      label: [],
      input: [],
    },
    value = "",
    trueValue = "",
    falseValue = "",
    ...props
  },
  ref,
) {
  const [inputValue, setInputValue] = useState<string | undefined>(value);

  const id = useNinjaId(() => props.id);

  const containerRef = useRef<HTMLDivElement>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const innerElementRef = useRef<HTMLDivElement>(null);

  const isChecked =
    value !== undefined &&
    inputValue === trueValue &&
    inputValue !== falseValue;

  useImperativeHandle(
    ref,
    () => ({
      get container() {
        return containerRef.current;
      },
      get input() {
        return inputRef.current;
      },
      get innerElement() {
        return innerElementRef.current;
      },
    }),
    [],
  );

  function handleChange(val: string) {
    const checkValue = val === trueValue ? falseValue : trueValue;

    onChange(checkValue);

    setInputValue(checkValue);
  }

  useEffect(() => {
    let timeout: number;

    if (isChecked) {
      containerRef.current?.classList.add("is-checked");
      innerElementRef.current?.classList.add("is-opaque");
      timeout = setTimeout(() => {
        containerRef.current?.classList.remove("is-unchecked");
      }, 150);
    } else {
      containerRef.current?.classList.add("is-unchecked");
      containerRef.current?.classList.remove("is-checked");
      timeout = setTimeout(() => {
        innerElementRef.current?.classList.remove("is-opaque");
      }, 150);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [isChecked]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "nui-focus block focus-within:outline-current",
        classes?.wrapper,
      )}
    >
      <input
        id={id}
        ref={inputRef}
        type="checkbox"
        className={cn(
          "peer cursor-pointer disabled:cursor-not-allowed",
          classes?.input,
        )}
        checked={isChecked}
        value={inputValue}
        onChange={(e) => handleChange(e.target.value)}
      />

      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label
        htmlFor={id}
        className={cn(
          "peer-disabled:opacity-75",
          props.color && colorStyle[props.color],
          classes?.label,
        )}
      >
        <div ref={innerElementRef} />
        <IconCheckCircle />
      </label>
    </div>
  );
});
// TODO: add styles
// <style>
// :root {
//   --animated-checkbox-border: #cfcfcf;
// }

// .dark {
//   --animated-checkbox-border: #3c4c69;
// }
// </style>

// <style scoped>
// .block {
//   position: relative;
//   height: 32px;
//   width: 32px;
//   border-radius: 50%;
// }

// .block input {
//   position: absolute;
//   top: 0;
//   left: 0;
//   height: 100%;
//   width: 100%;
//   opacity: 0;
//   z-index: 1;
// }

// .block label {
//   position: relative;
//   height: 32px;
//   width: 32px;
// }

// .block label > div {
//   position: absolute;
//   top: 0;
//   left: 0;
//   height: 32px;
//   width: 32px;
//   border-radius: 50%;
//   border: 1px solid var(--animated-checkbox-border);
//   z-index: 0;
//   opacity: 1;
//   transition: all 0.2s;
// }

// .block label > div.is-opaque {
//   opacity: 0;
// }

// .block label:deep(svg circle) {
//   height: 32px;
//   width: 32px;
//   stroke-dasharray: 166;
//   stroke-dashoffset: 166;
//   stroke-width: 2;
//   stroke-miterlimit: 10;
//   stroke: currentColor;
//   fill: none;
// }

// .block label:deep(svg) {
//   width: 32px;
//   height: 32px;
//   border-radius: 50%;
//   display: block;
//   stroke-width: 2;
//   color: currentColor;
//   stroke: currentColor;
//   stroke-miterlimit: 10;
//   margin: 0 auto;
//   box-shadow: inset 0 0 0 currentColor;
// }

// .block label:deep(svg path) {
//   transform-origin: 50% 50%;
//   stroke-dasharray: 48;
//   stroke-dashoffset: 48;
//   stroke: currentColor;
// }

// .block.is-checked label:deep(svg circle) {
//   animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) both;
// }

// .block.is-checked label:deep(svg path) {
//   animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s both;
// }

// .block.is-unchecked label:deep(svg circle) {
//   animation: reverseCircle 0.6s cubic-bezier(0.65, 0, 0.45, 1) 0.2s both;
// }

// .block.is-unchecked label:deep(svg path) {
//   animation: reverseCheck 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.1s both;
// }

// @keyframes stroke {
//   100% {
//     stroke-dashoffset: 0;
//   }
// }

// @keyframes reverseCircle {
//   from {
//     stroke-dashoffset: 0;
//   }

//   to {
//     stroke-dashoffset: 166;
//   }
// }

// @keyframes reverseCheck {
//   from {
//     stroke-dashoffset: 0;
//   }

//   to {
//     stroke-dashoffset: 48;
//   }
// }
// </style>
