export function cn(
  ...classNames: (string | string[] | undefined | null | false)[]
) {
  return classNames.flat(Infinity).filter(Boolean).join(" ");
}
