import React, {
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
  onChange?: (files: FileList | null) => void;

  /**
   * The form input identifier.
   */
  id?: string;

  /**
   * Allows to filter files when dropped.
   */
  filterFileDropped?: (file: File) => boolean;
};

export type BaseInputFileHeadlessRef = {
  input: HTMLInputElement | null;
  drop: (event: DragEvent) => void;
  open: () => void;
  remove: (file?: File) => void;
  id: string;
  files: FileList | null;
};

export const BaseInputFileHeadless = forwardRef<
  BaseInputFileHeadlessRef,
  BaseInputFileHeadlessProps
>(function BaseInputFileHeadless(
  { filterFileDropped = () => true, ...props },
  ref,
) {
  const [files, setFiles] = useState<FileList | null>(null);

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

  useImperativeHandle(
    ref,
    () => ({
      get input() {
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
      <input
        id={id}
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={(e) => {
          setFiles(e.target.files);
          props.onChange?.(e.target.files);
        }}
      />
    </div>
  );
});
