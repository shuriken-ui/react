import { forwardRef, useState } from "react";
import { Icon } from "@iconify/react";
import { useConfig } from "../../Provider";
import { useNinjaId } from "../../hooks/useNinjaId";
import { cn } from "../../utils";
import { BasePlaceload } from "../base/BasePlaceload";

type BaseInputFileProps = {
  /**
   * The model value of the file input.
   */
  onChange?: (files: FileList | null) => void;

  /**
   * The form input identifier.
   */
  id?: string;

  /**
   * The shape of the file input.
   */
  shape?: "straight" | "rounded" | "smooth" | "curved" | "full";

  /**
   * The label to display for the file input.
   */
  label?: string;

  /**
   * The placeholder to display for the file input.
   */
  placeholder?: string;

  /**
   * The icon to display for the file input.
   */
  icon?: string;

  /**
   * Whether the color of the file input should change when it is focused.
   */
  colorFocus?: boolean;

  /**
   * Whether the file input is in a loading state.
   */
  loading?: boolean;

  /**
   * The size of the input.
   */
  size?: "sm" | "md" | "lg";

  /**
   * The contrast of the input.
   */
  contrast?: "white" | "white-contrast";

  /**
   * An error message or boolean value indicating whether the file input is in an error state.
   */
  error?: string | boolean;

  /**
   * Method to return the text value of the file input.
   */
  textValue?: (fileList?: FileList | null) => string;

  /**
   * Optional CSS classes to apply to the wrapper, label, input, text, error, and icon elements.
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

    /**
     * CSS classes to apply to the text element.
     */
    text?: string | string[];

    /**
     * CSS classes to apply to the error element.
     */
    error?: string | string[];

    /**
     * CSS classes to apply to the icon element.
     */
    icon?: string | string[];
  };
};

const shapeStyle = {
  straight: "",
  rounded: "nui-input-rounded",
  smooth: "nui-input-smooth",
  curved: "nui-input-curved",
  full: "nui-input-full",
};

const sizeStyle = {
  sm: "nui-input-sm",
  md: "nui-input-md",
  lg: "nui-input-lg",
};

const contrastStyle = {
  white: "nui-input-white",
  "white-contrast": "nui-input-white-contrast",
};

export const BaseInputFile = forwardRef<HTMLInputElement, BaseInputFileProps>(
  function BaseInputFile(
    {
      size = "md",
      contrast = "white",
      placeholder = "Choose file",
      error = false,
      textValue = (fileList?: FileList | null) => {
        if (!fileList?.item?.length) {
          return "No file chosen";
        }

        return fileList?.item.length === 1
          ? fileList.item(0)?.name ?? "Invalid file selected"
          : `${fileList?.item?.length ?? 0} files selected`;
      },
      ...props
    },
    ref,
  ) {
    const [files, setFiles] = useState<FileList | null>(null);

    const config = useConfig();

    const shape = props.shape ?? config.defaultShapes?.input;

    const id = useNinjaId(() => props.id);

    const text = textValue(files);

    return (
      <div
        className={cn(
          "nui-input-file-regular",
          contrastStyle[contrast],
          sizeStyle[size],
          shape && shapeStyle[shape],
          error && !props.loading && "nui-input-file-error",
          props.loading && "nui-input-file-loading",
          props.icon && "nui-has-icon",
          props.classes?.wrapper,
        )}
      >
        {props.label && (
          <label
            htmlFor={id}
            className={cn("nui-input-file-label", props.classes?.label)}
          >
            {props.label}
          </label>
        )}
        <div className="nui-input-file-outer">
          <label
            htmlFor={id}
            className={cn(
              "nui-input-file-inner",
              props.colorFocus && "nui-color-focus",
              props.classes?.input,
            )}
          >
            <div className={cn("nui-input-file-addon", props.classes?.text)}>
              <span className="text-xs">{placeholder}</span>

              {props.icon && (
                <Icon icon={props.icon} className={cn(props.classes?.icon)} />
              )}
            </div>

            <div className="nui-input-file-text">{text}</div>

            <input
              id={id}
              ref={ref}
              type="file"
              className="hidden"
              onChange={(e) => {
                setFiles(e.target.files);
                props.onChange?.(e.target.files);
              }}
            />
          </label>

          {props.loading && (
            <div className="nui-input-file-placeload">
              <BasePlaceload className="nui-placeload" />
            </div>
          )}

          {error && typeof error === "string" && (
            <span
              className={cn("nui-input-file-error-text", props.classes?.error)}
            >
              {error}
            </span>
          )}
        </div>
      </div>
    );
  },
);
