import { forwardRef } from "react";

import NextImage, { type ImageProps } from "next/image";
import { useConfig } from "../../Provider";
import { cn } from "../../utils";

type BaseAvatarProps = Omit<ImageProps, "width" | "height" | "alt"> & {
  /**
   * The URL of the image to display.
   */
  // src?: string;

  /**
   * The URL of a dark version of the image to display when the component is in dark mode.
   */
  srcDark?: string;

  /**
   * The URL of a badge to display on top of the image.
   */
  badgeSrc?: string;

  /**
   * The text to display below the image.
   */
  text?: string;

  /**
   * The size of the image.
   *
   */
  size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";

  /**
   * The radius of the image.
   *
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";

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
  none: "nui-avatar-straight",
  sm: "nui-avatar-rounded",
  md: "nui-avatar-smooth",
  lg: "nui-avatar-curved",
  full: "nui-avatar-full",
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
      className: classes,
      dot = false,
      ring = false,
      alt = "",
      ...props
    },
    ref,
  ) {
    const config = useConfig();

    const rounded = props.rounded ?? config.BaseAvatar?.rounded;

    const size = props.size ?? config.BaseAvatar?.size;

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
          mask &&
            (props.rounded === "none" || rounded === "none") && [
              `nui-avatar-mask`,
              masks[mask],
            ],
          ring &&
            (ring === true
              ? ["nui-avatar-ring", rings.primary]
              : ["nui-avatar-ring", rings[ring]]),
          classes,
        )}
        ref={ref}
      >
        <div className="nui-avatar-inner">
          {src && (
            <Image
              src={src}
              {...props}
              {...imageSize}
              className={cn("nui-avatar-img", srcDark && "dark:hidden")}
              alt={alt}
            />
          )}

          {src && srcDark && (
            <Image
              src={srcDark}
              {...props}
              {...imageSize}
              className="nui-avatar-img hidden"
              alt={alt}
            />
          )}

          {!src && <span className="nui-avatar-text">{text}</span>}
        </div>

        {badgeSrc && (
          <div className="nui-avatar-badge">
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
            )}
          />
        )}
      </div>
    );
  },
);
