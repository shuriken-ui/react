import { useId } from "react";

type IdGetter<T> = () => T | T;

export function useNinjaId(idOrGetter: IdGetter<string | undefined>) {
  const uniqueId = useId();

  const resolvedId =
    typeof idOrGetter === "function" ? idOrGetter() : idOrGetter;

  return resolvedId ?? `ninja-input-${uniqueId}`;
}
