/* eslint-disable no-plusplus */
import { useMemo } from "react";

const escapeRE = /["'&<>]/;

/**
 * @see https://github.com/vuejs/core/blob/main/packages/shared/src/escapeHtml.ts
 */
function escapeHtml(string: unknown) {
  const str = `${string}`;

  const match = escapeRE.exec(str);

  if (!match) {
    return str;
  }

  let html = "";

  let escaped: string;

  let index: number;

  let lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34: // "
        escaped = "&quot;";
        break;
      case 38: // &
        escaped = "&amp;";
        break;
      case 39: // '
        escaped = "&#39;";
        break;
      case 60: // <
        escaped = "&lt;";
        break;
      case 62: // >
        escaped = "&gt;";
        break;
      default:
        // eslint-disable-next-line no-continue
        continue;
    }

    if (lastIndex !== index) {
      html += str.slice(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escaped;
  }

  return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
}

export function useNinjaMark(text: string, search: string, classes: string) {
  return useMemo(() => {
    if (!text) {
      return "";
    }

    if (!search) {
      return escapeHtml(text);
    }

    const regex = new RegExp(search, "gi");

    return text.replace(regex, (part) => {
      return `<mark class="${classes}">${escapeHtml(part)}</mark>`;
    });
  }, [text, search, classes]);
}
