import { useState, useEffect } from "react";

const previewMap = new WeakMap();

function useFilePreview(file: File | null | undefined) {
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (!file) {
      setPreview("");

      return;
    }

    if (previewMap.has(file)) {
      setPreview(previewMap.get(file));

      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const result = reader.result ? reader.result.toString() : "";

      previewMap.set(file, result);
      setPreview(result);
    };

    reader.readAsDataURL(file);
  }, [file]);

  return preview;
}

export default useFilePreview;
