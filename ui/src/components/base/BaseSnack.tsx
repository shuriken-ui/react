import { forwardRef } from "react";
import { Icon } from "@iconify/react";
import NextImage from "next/image";
import { BaseButtonClose } from "./BaseButtonClose";
import { cn } from "../../utils";
import { useConfig } from "../../Provider";

interface BaseSnackProps {
  /**
   * The text to display in the snackbar.
   */
  label?: string;

  /**
   * An optional icon to display in the snackbar.
   */
  icon?: string;

  /**
   * Click handler
   */

  onClick?: () => void;
  /**
   * An optional image to display in the snackbar.
   */
  image?: string;

  /**
   * The size of the snack.
   */
  size?: "xs" | "sm" | "md";

  /**
   * The color of snack, might be 'default' or 'muted'.
   */
  color?: "default" | "muted";
}

const sizes = {
  xs: "nui-snack-xs",
  sm: "nui-snack-sm",
  md: "nui-snack-md",
};

const colors = {
  default: "nui-snack-default",
  muted: "nui-snack-muted",
};

const imageSize: Record<keyof typeof sizes, number> = {
  xs: 24,
  sm: 32,
  md: 40,
};

export const BaseSnack = forwardRef<HTMLDivElement, BaseSnackProps>(
  function BaseSnack(
    { icon, image, label = "", onClick = () => {}, ...props },
    ref,
  ) {
    const config = useConfig();

    const size = props.size ?? config.BaseSnack?.size;

    const color = props.color ?? config.BaseSnack?.color;

    const closeSize = size || "md";

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
          "nui-snack",
          size && sizes[size],
          color && colors[color],
          (icon || image) && "nui-has-media",
        )}
        ref={ref}
      >
        {icon && !image && (
          <div className="nui-snack-icon">
            <Icon icon={icon} name={icon} className="nui-snack-icon-inner" />
          </div>
        )}
        {image && !icon && (
          <div className="nui-snack-image">
            <Image
              src={image}
              height={imageSize[size ?? "md"]}
              width={imageSize[size ?? "md"]}
              className="nui-snack-image-inner"
              alt=""
            />
          </div>
        )}
        <span className="nui-snack-text">{label}</span>
        <BaseButtonClose
          className="nui-snack-button"
          rounded="full"
          onClick={onClick}
          size={closeSize}
        />
      </div>
    );
  },
);
