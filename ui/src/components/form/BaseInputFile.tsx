import {
  type HTMLAttributes,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Icon } from "@iconify/react";
import { useNuiDefaultProperty } from "~/Provider";
import { useNinjaId } from "~/hooks/useNinjaId";
import { cn } from "~/utils";
import { BasePlaceload } from "~/components/base/BasePlaceload";
import { BaseInputHelpText } from "~/components/form/BaseInputHelpText";

type BaseInputFileProps = HTMLAttributes<HTMLInputElement> & {
  /**
   * The value of the file input.
   */
  value?: FileList | null;

  /**
   * The value of the file input.
   */
  onChange?: (files: FileList | null) => void;

  /**
   * The form input identifier.
   */
  id?: string;

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
   * An error message or boolean value indicating whether the file input is in an error state.
   */
  error?: string | boolean;

  /**
   * Method to return the text value of the file input.
   */
  textValue?: (fileList?: FileList | null) => string;

  /**
   * The contrast of the input.
   *
   * @default 'default'
   */
  contrast?: "default" | "default-contrast";

  /**
   * The radius of the file input.
   *
   * @since 2.0.0
   * @default 'sm'
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";

  /**
   * The size of the input.
   *
   * @default 'md'
   */
  size?: "sm" | "md" | "lg";

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

const radiuses = {
  none: "",
  sm: "nui-input-rounded-sm",
  md: "nui-input-rounded-md",
  lg: "nui-input-rounded-lg",
  full: "nui-input-rounded-full",
};

const sizes = {
  sm: "nui-input-sm",
  md: "nui-input-md",
  lg: "nui-input-lg",
};

const contrasts = {
  default: "nui-input-default",
  "default-contrast": "nui-input-default-contrast",
};

export type BaseInputFileRef = {
  /**
   * The underlying HTMLInputElement element.
   */
  el: HTMLInputElement | null;

  /**
   * The internal id of the file input.
   */
  id: string;
};

export const BaseInputFile = forwardRef<BaseInputFileRef, BaseInputFileProps>(
  function BaseInputFile(
    {
      placeholder = "Choose file",
      error = false,
      id,
      loading = false,
      icon,
      classes,
      label,
      colorFocus,
      value,
      onChange,
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
    const inputRef = useRef<HTMLInputElement>(null);

    const [files, setFiles] = useState<FileList | null>(value || null);

    const contrast = useNuiDefaultProperty(props, "BaseInputFile", "contrast");
    const rounded = useNuiDefaultProperty(props, "BaseInputFile", "rounded");
    const size = useNuiDefaultProperty(props, "BaseInputFile", "size");

    const attrs = {
      ...props,
      contrast: undefined,
      rounded: undefined,
      size: undefined,
    };

    const _id = useNinjaId(() => id);

    const text = textValue(files);

    useImperativeHandle(
      ref,
      () => ({
        get el() {
          return inputRef.current;
        },
        id: _id,
      }),
      [id],
    );

    return (
      <div
        className={cn(
          "nui-input-file-regular",
          contrast && contrasts[contrast],
          size && sizes[size],
          rounded && radiuses[rounded],
          error && !loading && "nui-input-file-error",
          loading && "nui-input-file-loading",
          icon && "nui-has-icon",
          classes?.wrapper,
        )}
      >
        {label && (
          <label
            htmlFor={id}
            className={cn("nui-input-file-label", classes?.label)}
          >
            {label}
          </label>
        )}
        <div className="nui-input-file-outer">
          <label
            htmlFor={id}
            className={cn(
              "nui-input-file-inner",
              colorFocus && "nui-color-focus",
              classes?.input,
            )}
          >
            <div className={cn("nui-input-file-addon", classes?.text)}>
              <span className="text-xs">{placeholder}</span>

              {icon && <Icon icon={icon} className={cn(classes?.icon)} />}
            </div>

            <div className="nui-input-file-text">{text}</div>

            <input
              id={_id}
              ref={inputRef}
              type="file"
              className="hidden"
              onChange={(e) => {
                setFiles(e.target.files);
                onChange?.(e.target.files);
              }}
              {...attrs}
            />
          </label>

          {loading && (
            <div className="nui-input-file-placeload">
              <BasePlaceload className="nui-placeload" />
            </div>
          )}

          {error && typeof error === "string" && (
            <BaseInputHelpText color="danger" className={cn(classes?.error)}>
              {error}
            </BaseInputHelpText>
          )}
        </div>
      </div>
    );
  },
);
