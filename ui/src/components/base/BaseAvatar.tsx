import { forwardRef } from "react";

import NextImage, { type ImageProps } from "next/image"; // @todo: remove this import
import { useNuiDefaultProperty } from "~/Provider";
import { cn } from "~/utils";

type BaseAvatarProps = Omit<ImageProps, "src" | "width" | "height" | "alt"> & {
  /**
   * The URL of the image to display.
   */
  src?: ImageProps["src"];

  /**
   * The URL of a dark version of the image to display when the component is in dark mode.
   */
  srcDark?: ImageProps["src"];

  /**
   * The URL of a badge to display on top of the image.
   */
  badgeSrc?: ImageProps["src"];

  /**
   * The text to display below the image.
   */
  text?: string;

  /**
   * Applies an svg mask from the available presets. (needs rounded to be set to `none`).
   */
  mask?: "hex" | "hexed" | "deca" | "blob" | "diamond";

  /**
   * Whether to display a dot on top of the image, or the color of the dot.
   */
  dot?:
    | boolean
    | "primary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "pink"
    | "yellow";

  /**
   * Whether to display a ring around the image .
   */
  ring?:
    | boolean
    | "primary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "pink"
    | "yellow";

  /**
   * The alternative text for the image.
   */
  alt?: string;

  /**
   * Defines the color of the avatar
   *
   * @default 'default'
   */
  color?:
    | "white"
    | "muted"
    | "primary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "pink"
    | "yellow"
    | "indigo"
    | "violet";

  /**
   * The radius of the image.
   *
   * @default 'full'
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";

  /**
   * The size of the image.
   *
   * @default 'sm'
   */
  size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";

  /**
   * Optional CSS classes to apply to the component inner elements.
   */
  classes?: {
    /**
     * CSS classes to apply to the wrapper element.
     */
    wrapper?: string | string[];

    /**
     * CSS classes to apply to the inner element.
     */
    inner?: string | string[];

    /**
     * CSS classes to apply to the img element.
     */
    img?: string | string[];

    /**
     * CSS classes to apply to the badge element.
     */
    badge?: string | string[];

    /**
     * CSS classes to apply to the dot element.
     */
    dot?: string | string[];
  };
};

const colors = {
  white: "bg-white dark:bg-muted-800 text-muted-600 dark:text-muted-200",
  muted: "bg-muted-100 dark:bg-muted-800 text-muted-600 dark:text-muted-200",
  primary: "bg-primary-500/20 text-primary-500",
  info: "bg-info-500/20 text-info-500",
  success: "bg-success-500/20 text-success-500",
  warning: "bg-warning-500/20 text-warning-500",
  danger: "bg-danger-500/20 text-danger-500",
  yellow: "bg-yellow-500/20 text-yellow-400",
  pink: "bg-pink-500/20 text-pink-400",
  indigo: "bg-indigo-500/20 text-indigo-500",
  violet: "bg-violet-500/20 text-violet-500",
};

const dots = {
  success: "nui-dot-success",
  primary: "nui-dot-primary",
  info: "nui-dot-info",
  warning: "nui-dot-warning",
  danger: "nui-dot-danger",
  pink: "nui-dot-pink",
  yellow: "nui-dot-yellow",
};

const rings = {
  success: "nui-ring-success",
  primary: "nui-ring-primary",
  info: "nui-ring-info",
  warning: "nui-ring-warning",
  danger: "nui-ring-danger",
  pink: "nui-ring-pink",
  yellow: "nui-ring-yellow",
};

const sizes = {
  xxs: "nui-avatar-xxs",
  xs: "nui-avatar-xs",
  sm: "nui-avatar-sm",
  md: "nui-avatar-md",
  lg: "nui-avatar-lg",
  xl: "nui-avatar-xl",
  "2xl": "nui-avatar-2xl",
  "3xl": "nui-avatar-3xl",
  "4xl": "nui-avatar-4xl",
};

const radiuses = {
  none: "nui-avatar-rounded-none",
  sm: "nui-avatar-rounded-sm",
  md: "nui-avatar-rounded-md",
  lg: "nui-avatar-rounded-lg",
  full: "nui-avatar-rounded-full",
};

const masks = {
  hex: "nui-mask-hex",
  hexed: "nui-mask-hexed",
  deca: "nui-mask-deca",
  blob: "nui-mask-blob",
  diamond: "nui-mask-diamond",
};

/**
 *  derived from sizes to apply to next/image height and width
 */
const imageSizes: Record<keyof typeof sizes, number> = {
  xxs: 6,
  xs: 8,
  sm: 10,
  md: 12,
  lg: 16,
  xl: 20,
  "2xl": 24,
  "3xl": 28,
  "4xl": 32,
};

/**
 *  derived from sizes to apply to next/image (badge) height and width
 */
const badgeSizes: Record<keyof typeof sizes, number> = {
  xxs: 3,
  xs: 4,
  sm: 5,
  md: 5,
  lg: 6,
  xl: 8,
  "2xl": 10,
  "3xl": 10,
  "4xl": 12,
};

export const BaseAvatar = forwardRef<HTMLDivElement, BaseAvatarProps>(
  function BaseAvatar(
    {
      src,
      srcDark,
      text = "?",
      badgeSrc,
      mask,
      // className: classes,
      dot = false,
      ring = false,
      alt = "",
      ...props
    },
    ref,
  ) {
    const color = useNuiDefaultProperty(props, "BaseAvatar", "color");
    const rounded = useNuiDefaultProperty(props, "BaseAvatar", "rounded");
    const size = useNuiDefaultProperty(props, "BaseAvatar", "size");

    const attrs = {
      ...props,
      color: undefined,
      rounded: undefined,
      size: undefined,
    };

    const imageSize = {
      width: imageSizes[size ?? "sm"],
      height: imageSizes[size ?? "sm"],
    };

    const badgeSize = {
      width: badgeSizes[size ?? "sm"],
      height: badgeSizes[size ?? "sm"],
    };

    /**
     * Temporary fix to ElementType invalid
     * adapted from https://github.com/prismicio/prismic-next/pull/79/files
     *
     *  TODO: remove when https://github.com/vercel/next.js/issues/52216 is resolved
     *
     */
    let Image = NextImage;

    if ("default" in Image) {
      Image = (Image as unknown as { default: typeof Image }).default;
    }

    return (
      <div
        className={cn(
          "nui-avatar",
          size && sizes[size],
          rounded && radiuses[rounded],
          !src && color && colors[color],
          mask &&
            (props.rounded === "none" || rounded === "none") && [
              "nui-avatar-mask",
              masks[mask],
            ],
          ring &&
            (ring === true
              ? ["nui-avatar-ring", rings.primary]
              : ["nui-avatar-ring", rings[ring]]),
          props.classes?.wrapper,
        )}
        ref={ref}
      >
        <div className={cn("nui-avatar-inner", props.classes?.inner)}>
          {src && (
            <Image
              src={src}
              {...attrs}
              {...imageSize}
              className={cn(
                "nui-avatar-img",
                rounded && radiuses[rounded],
                srcDark && "dark:hidden",
                props.classes?.img,
              )}
              alt={alt}
            />
          )}

          {src && srcDark && (
            <Image
              src={srcDark}
              {...attrs}
              {...imageSize}
              className={cn(
                "nui-avatar-img hidden dark:block",
                rounded && radiuses[rounded],
                props.classes?.img,
              )}
              alt={alt}
            />
          )}

          {!src && <span className="nui-avatar-text">{text}</span>}
        </div>

        {badgeSrc && (
          <div className={cn("nui-avatar-badge", props.classes?.badge)}>
            <Image
              className="nui-badge-img"
              src={badgeSrc}
              {...badgeSize}
              alt=""
            />
          </div>
        )}

        {dot && (
          <span
            className={cn(
              "nui-avatar-dot",
              dot === true ? dots.primary : dots[dot],
              props.classes?.dot,
            )}
          />
        )}
      </div>
    );
  },
);
