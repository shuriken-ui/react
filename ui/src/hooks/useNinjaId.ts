import { useMemo } from "react";

let lastId = 0;

type StateOrGetter<T> = () => T | T;

export function useNinjaId(id: StateOrGetter<string | undefined>) {
  return useMemo<string>(() => {
    // eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle
    let _id: string | undefined;

    if (typeof id === "function") {
      _id = id();
    } else if (id && typeof id !== "undefined") {
      _id = id;
    } else {
      _id = id;
    }

    // eslint-disable-next-line no-plusplus
    return _id ?? `ninja-input-${++lastId}`;
  }, [id]);
}
