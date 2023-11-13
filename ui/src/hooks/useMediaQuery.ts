/**
 * Adapted from https://usehooks-ts.com/react-hook/use-media-query
 */

import { useCallback, useEffect, useState } from "react";

const getMatches = (query: string): boolean => {
  if (typeof window !== "undefined") {
    return window.matchMedia(query).matches;
  }

  return false;
};

export function useMediaQuery(mediaQueryString: string): boolean {
  const [matches, setMatches] = useState<boolean>(getMatches(mediaQueryString));

  const handleChange = useCallback(() => {
    setMatches(getMatches(mediaQueryString));
  }, [mediaQueryString]);

  useEffect(() => {
    const matchMedia = window.matchMedia(mediaQueryString);

    handleChange();

    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener("change", handleChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener("change", handleChange);
      }
    };
  }, [mediaQueryString, handleChange]);

  return matches;
}
