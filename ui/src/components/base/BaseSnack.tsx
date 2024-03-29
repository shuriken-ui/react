import { forwardRef } from "react";
import { Icon } from "@iconify/react";
import NextImage from "next/image"; // @todo: remove this imporrt
import { BaseButtonClose } from "./BaseButtonClose";
import { cn } from "~/utils";
import { useNuiDefaultProperty } from "~/Provider";

type BaseSnackProps = {
  /**
   * The text to display in the snackbar.
   */
  label?: string;

  /**
   * An optional icon to display in the snackbar.
   */
  icon?: string;

  /**
   * An optional image to display in the snackbar.
   */
  image?: string;

  /**
   * The color of snack.
   *
   * @default 'default'
   */
  color?: "default" | "default-contrast" | "muted" | "muted-contrast";

  /**
   * The size of the snack.
   *
   * @default 'md'
   */
  size?: "xs" | "sm" | "md";

  /**
   * Optional CSS classes to apply to the component inner elements.
   */
  classes?: {
    /**
     * CSS classes to apply to the wrapper element.
     */
    wrapper?: string | string[];

    /**
     * CSS classes to apply to the icon element.
     */
    icon?: string | string[];

    /**
     * CSS classes to apply to the img element.
     */
    img?: string | string[];

    /**
     * CSS classes to apply to the text element.
     */
    text?: string | string[];

    /**
     * CSS classes to apply to the button element.
     */
    button?: string | string[];
  };

  /**
   * Click handler
   */
  onClick?: () => void;
};

const sizes = {
  xs: "nui-snack-xs",
  sm: "nui-snack-sm",
  md: "nui-snack-md",
};

const colors = {
  default: "nui-snack-default",
  "default-contrast": "nui-snack-default-contrast",
  muted: "nui-snack-muted",
  "muted-contrast": "nui-snack-muted-contrast",
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
    const color = useNuiDefaultProperty(props, "BaseSnack", "color");
    const size = useNuiDefaultProperty(props, "BaseSnack", "size");

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
          props.classes?.wrapper,
        )}
        ref={ref}
      >
        {icon && !image && (
          <div className={cn("nui-snack-icon", props.classes?.icon)}>
            <Icon icon={icon} name={icon} className="nui-snack-icon-inner" />
          </div>
        )}
        {image && !icon && (
          <div className={cn("nui-snack-image", props.classes?.img)}>
            <Image
              src={image}
              height={imageSize[size ?? "md"]}
              width={imageSize[size ?? "md"]}
              className="nui-snack-image-inner"
              alt=""
            />
          </div>
        )}
        <span className={cn("nui-snack-text", props.classes?.text)}>
          {label}
        </span>
        <BaseButtonClose
          className={cn("nui-snack-button", props.classes?.button)}
          rounded="full"
          onClick={onClick}
          size={size}
        />
      </div>
    );
  },
);
