import { useState, useEffect } from "react";

const previewMap = new WeakMap<File, string | undefined>();

export function useNinjaFilePreview(file: File | null | undefined) {
  const [preview, setPreview] = useState<string>("");

  useEffect(() => {
    if (!file) {
      setPreview("");

      return;
    }

    if (previewMap.has(file)) {
      setPreview(previewMap.get(file)!);

      return;
    }

    const reader = new FileReader();

    const listener = () => {
      const result = reader.result?.toString() ?? "";

      previewMap.set(file, result);
      setPreview(result);
    };

    reader.addEventListener("load", listener);
    reader.readAsDataURL(file);

    // eslint-disable-next-line consistent-return
    return () => {
      reader.removeEventListener("load", listener);
    };
  }, [file]);

  return preview;
}
