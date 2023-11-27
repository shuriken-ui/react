export function cn(
  ...classNames: (string | string[] | undefined | null | false)[]
) {
  return classNames.flat().filter(Boolean).join(" ");
}
