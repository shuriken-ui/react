import React, {
  ChangeEvent,
  ReactNode,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { useNinjaId } from "../../hooks/useNinjaId";
import useNinjaFilePreview from "../../hooks/useNinjaFilePreview";

type BaseInputFileHeadlessProps = {
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
   * Allows multiple files to be selected.
   */
  multiple?: boolean;

  /**
   * The accepted file types.
   */
  accept?: string;

  /**
   * Allows to filter files when dropped.
   */
  filterFileDropped?: (file: File) => boolean;

  children?: (context: BaseInputFileHeadlessProvider) => ReactNode;
};

type BaseInputFileHeadlessProvider = {
  el: HTMLInputElement | null;
  drop: (event: DragEvent) => void;
  open: () => void;
  remove: (file?: File) => void;
  id: string;
  files: FileList | null;
  preview: typeof useNinjaFilePreview;
};

export type BaseInputFileHeadlessRef = BaseInputFileHeadlessProvider;

export const BaseInputFileHeadless = forwardRef<
  BaseInputFileHeadlessRef,
  BaseInputFileHeadlessProps
>(function BaseInputFileHeadless(
  { filterFileDropped = () => true, ...props },
  ref,
) {
  const [files, setFiles] = useState<FileList | null>(props.value || null);

  const inputRef = useRef<HTMLInputElement>(null);

  const id = useNinjaId(() => props.id);

  const previewMap = useRef<WeakMap<File, string | undefined>>();

  function open() {
    inputRef.current?.click();
  }

  const drop = useCallback(
    (event: DragEvent) => {
      event.stopPropagation();
      event.preventDefault();

      const dt = event.dataTransfer;

      const filtered = new DataTransfer();

      if (dt && inputRef.current) {
        Array.from(dt.files).forEach((file) => {
          if (filterFileDropped(file)) {
            filtered.items.add(file);
          }
        });

        inputRef.current.files = filtered.files;
        setFiles(inputRef.current.files);
      }
    },
    [filterFileDropped],
  );

  const remove = useCallback(
    (file?: File) => {
      if (!file) return;
      if (!files) return;
      if (!inputRef.current) return;

      const filtered = new DataTransfer();

      if (previewMap.current?.has(file)) {
        previewMap.current?.delete(file);
      }

      Array.from(files).forEach((f) => {
        if (f !== file) {
          filtered.items.add(f);
        }
      });

      inputRef.current.files = filtered.files;
      setFiles(inputRef.current.files);
    },
    [files],
  );

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const newFiles = (event.target as HTMLInputElement).files;

    if (!newFiles) return;

    if (props.multiple && files) {
      // When multiple is true, append new files to existing ones
      const existingFiles = [...Array.from(files)];

      const updatedFiles = new DataTransfer();

      // Add all existing files
      existingFiles.forEach((file) => {
        updatedFiles.items.add(file);
      });

      // Add new files, optionally check for duplicates

      Array.from(newFiles).forEach((newFile) => {
        if (
          !existingFiles.some(
            (existingFile) => existingFile.name === newFile.name,
          )
        ) {
          updatedFiles.items.add(newFile);
        }
      });

      if (!inputRef.current) return;

      inputRef.current.files = updatedFiles.files;
      setFiles(updatedFiles.files);
      props.onChange?.(updatedFiles.files);
    } else {
      // When multiple is false, replace current files with new selection
      setFiles(newFiles);
      props.onChange?.(newFiles);
    }
  }

  useImperativeHandle(
    ref,
    () => ({
      get el() {
        return inputRef.current;
      },
      id,
      files,
      open,
      remove,
      preview: useNinjaFilePreview,
      drop,
    }),
    [drop, files, id, remove],
  );

  return (
    <div className="group/nui-file-headless relative">
      {props.children?.({
        el: inputRef.current,
        id,
        files,
        open,
        remove,
        drop,
        preview: useNinjaFilePreview,
      })}
      <input
        id={id}
        ref={inputRef}
        type="file"
        className="hidden"
        multiple={props.multiple}
        onChange={handleFileChange}
        accept={props.accept}
      />
    </div>
  );
});
