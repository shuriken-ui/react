import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useConfig } from "../../Provider";
import { useNinjaId } from "../../hooks/useNinjaId";
import { cn } from "../../utils";
import { BasePlaceload } from "../base/BasePlaceload";

type TextareaProps = {
  /**
   * A function that is called when the value of the textarea changes.
   *
   * @param value - The new value of the textarea.
   */
  onChange?: (value: string) => void;

  /**
   * Used internaly to allow .trim
   * and .lazy state modifiers.
   */
  stateModifiers?: {
    trim?: boolean;
    lazy?: boolean;
  };

  /**
   * The form input identifier.
   */
  id?: string;

  /**
   * The name of the textarea.
   */
  name?: string;

  /**
   * The shape of the textarea.
   */
  shape?: "straight" | "rounded" | "smooth" | "curved" | "full";

  /**
   * The label for the textarea.
   */
  label?: string;

  /**
   * If the label should be floating.
   */
  labelFloat?: boolean;

  /**
   * Whether to apply the focus color to the textarea.
   */
  colorFocus?: boolean;

  /**
   * The placeholder text for the textarea.
   */
  placeholder?: string;

  /**
   * Whether the textarea is in a loading state.
   */
  loading?: boolean;

  /**
   * Whether the textarea is disabled.
   */
  disabled?: boolean;

  /**
   * The size of the textarea.
   */
  size?: "sm" | "md" | "lg";

  /**
   * The contrast of the textarea.
   */
  contrast?: "default" | "default-contrast" | "muted" | "muted-contrast";

  /**
   * Whether the textarea is read-only.
   */
  readonly?: boolean;

  /**
   * The error message for the textarea, or whether it is in an error state.
   */
  error?: string | boolean;

  /**
   * Whether to display an addon element in the textarea.
   */
  addon?: boolean;

  /**
   * The number of rows to display in the textarea.
   */
  rows?: number;

  /**
   * Whether to allow the user to resize the textarea.
   */
  resize?: boolean;

  /**
   * Whether to automatically grow the textarea as text is entered.
   */
  autogrow?: boolean;

  /**
   * A set of classes to apply to the various elements of the textarea.
   */
  classes?: {
    /**
     * A class or list of classes to be applied to the textarea wrapper element.
     */
    wrapper?: string | string[];
    /**
     * A class or list of classes to be applied to the label element.
     */
    label?: string | string[];
    /**
     * A class or list of classes to be applied to the textarea element.
     */
    textarea?: string | string[];
    /**
     * A class or list of classes to be applied to the addon element.
     */
    addon?: string | string[];
    /**
     * A class or list of classes to be applied to the error element.
     */
    error?: string | string[];
  };
};

const shapeStyle = {
  straight: "",
  rounded: "nui-textarea-rounded",
  smooth: "nui-textarea-smooth",
  curved: "nui-textarea-curved",
  full: "nui-textarea-full",
};

const sizeStyle = {
  sm: "nui-textarea-sm",
  md: "nui-textarea-md",
  lg: "nui-textarea-lg",
};

const contrastStyle = {
  default: "nui-textarea-default",
  "default-contrast": "nui-textarea-default-contrast",
  muted: "nui-textarea-muted",
  "muted-contrast": "nui-textarea-muted-contrast",
};

export const BaseTextarea = forwardRef<HTMLDivElement, TextareaProps>(
  function BaseTextarea(
    {
      onChange = (val) => {},
      stateModifiers,
      placeholder = "",
      size = "md",
      contrast = "default",
      rows = 4,
      error = false,
      ...props
    },
    ref,
  ) {
    const [textareaValue, setTextareaValue] = useState("");

    const config = useConfig();

    const id = useNinjaId(() => props.id);

    const shape = props.shape ?? config.defaultShapes?.input;

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const fitSize = useCallback(() => {
      if (!textareaRef.current) {
        return;
      }

      if (props.autogrow) {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    }, [props.autogrow]);

    function handleUpdate(value: string) {
      const content = stateModifiers?.trim ? value.trim() : value;

      setTextareaValue(content);
      onChange(content);
    }

    useEffect(() => {
      fitSize();
    }, [fitSize, textareaValue]);

    return (
      <div
        className={cn(
          "nui-textarea-wrapper",
          contrastStyle[contrast],
          sizeStyle[size],
          shape && shapeStyle[shape],
          error && !props.loading && "nui-textarea-error",
          props.loading && "nui-textarea-loading",
          props.labelFloat && "nui-textarea-label-float",
          !props.resize && "nui-textarea-not-resize",
          props.addon && "nui-has-addon",
          props.classes?.wrapper,
        )}
        ref={ref}
      >
        {props.label && !props.labelFloat && (
          <label
            htmlFor={id}
            className={cn("nui-textarea-label", props.classes?.label)}
          >
            {props.label}
          </label>
        )}
        <div className="nui-textarea-outer">
          {stateModifiers?.lazy ? (
            <textarea
              id={id}
              ref={textareaRef}
              className={cn(
                "nui-textarea",
                props.colorFocus && "nui-textarea-focus",
                props.classes?.textarea,
              )}
              name={props.name}
              placeholder={placeholder}
              readOnly={props.readonly}
              disabled={props.disabled}
              rows={rows}
              value={textareaValue}
              onChange={(e) => {
                handleUpdate(e.target.value);
              }}
            />
          ) : (
            <textarea
              id={id}
              ref={textareaRef}
              className={cn(
                "nui-textarea",
                props.colorFocus && "nui-textarea-focus",
                props.classes?.textarea,
              )}
              name={props.name}
              placeholder={placeholder}
              readOnly={props.readonly}
              disabled={props.disabled}
              rows={rows}
              value={textareaValue}
              onInput={(e) => {
                handleUpdate(e.currentTarget.value);
              }}
            />
          )}

          {props.label && props.labelFloat && (
            <label
              className={cn("nui-label-float", props.classes?.label)}
              htmlFor={id}
            >
              {props.label}
            </label>
          )}

          {props.loading && (
            <div className="nui-textarea-placeload">
              <BasePlaceload className="nui-placeload" />
              <BasePlaceload className="nui-placeload" />
              <BasePlaceload className="nui-placeload" />
            </div>
          )}

          {props.addon && (
            <div className={cn("nui-textarea-addon", props.classes?.addon)}>
              {props.addon}
            </div>
          )}

          {error && typeof error === "string" && (
            <span
              className={cn("nui-textarea-error-text", props.classes?.error)}
            >
              {error}
            </span>
          )}
        </div>
      </div>
    );
  },
);
