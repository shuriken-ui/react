import { Transition } from "@headlessui/react";
import { Icon } from "@iconify/react";
import { forwardRef, useCallback, useEffect, useRef, useState } from "react";

type BaseFullscreenDropfileProps = {
  /**
   * Label to display when file is being dropped.
   */
  label?: string;

  /**
   * Icon to display when file is being dropped.
   */
  icon?: string;

  /**
   * Allows to filter files when dropped.
   */
  filterFileDropped?: (file: File) => boolean;

  /**
   * Callback when files are dropped.
   */
  onFilesDropped?: (files: File[]) => void;
};

export const BaseFullscreenDropfile = forwardRef<
  HTMLDivElement,
  BaseFullscreenDropfileProps
>(function BaseFullscreenDropfile(
  {
    icon = "",
    label = "Drop your files",
    filterFileDropped = () => true,
    onFilesDropped = () => {},
  },
  ref,
) {
  const [isDropping, setIsDropping] = useState(false);

  const dragCount = useRef(0);

  function onDragenter() {
    dragCount.current += 1;
    if (dragCount.current === 1) {
      setIsDropping(true);
    }
  }

  function onDragleave() {
    dragCount.current -= 1;
    if (dragCount.current === 0) {
      setIsDropping(false);
    }
  }

  function onDragover(e: DragEvent) {
    // prevent file from being opened in new browser tab
    e.preventDefault();
  }

  const onDrop = useCallback(
    (event: DragEvent) => {
      event.preventDefault();

      setIsDropping(false);
      dragCount.current = 0;

      if (!event.dataTransfer) {
        return;
      }

      const dt = event.dataTransfer;

      const filtered = new DataTransfer();

      if (dt) {
        Array.from(dt.files).forEach((file) => {
          if (filterFileDropped(file)) {
            filtered.items.add(file);
          }
        });

        onFilesDropped(Array.from(filtered.files));
      }
    },
    [setIsDropping, filterFileDropped, onFilesDropped],
  );

  useEffect(() => {
    document.documentElement.addEventListener("dragenter", onDragenter, false);
    document.documentElement.addEventListener("dragleave", onDragleave, false);
    document.documentElement.addEventListener("dragover", onDragover, false);
    document.documentElement.addEventListener("drop", onDrop);

    return () => {
      document.documentElement.removeEventListener("dragenter", onDragenter);
      document.documentElement.removeEventListener("dragleave", onDragleave);
      document.documentElement.removeEventListener("dragover", onDragover);
      document.documentElement.removeEventListener("drop", onDrop);
    };
  }, [onDrop]);

  return (
    <div className="nui-fullscreen-dropfile" ref={ref}>
      {isDropping && <div className="nui-fullscreen-dropfile-outer" />}
      {isDropping && (
        <div className="nui-fullscreen-dropfile-inner">
          <Transition
            show={isDropping}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-0 opacity-0"
            enterTo="transform scale-1 opacity-100"
            leave="transition duration-75 ease-in"
            leaveFrom="transform scale-1 opacity-100"
            leaveTo="transform scale-0 opacity-0"
          >
            <div className="nui-fullscreen-dropfile-container">
              <div className="nui-fullscreen-dropfile-content">
                {!!icon && (
                  <Icon icon={icon} className="nui-fullscreen-dropfile-icon" />
                )}
                <div className="nui-fullscreen-dropfile-label">{label}</div>
              </div>
            </div>
          </Transition>
        </div>
      )}
    </div>
  );
});
