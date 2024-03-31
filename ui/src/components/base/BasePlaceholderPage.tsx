import { type PropsWithChildren, type ReactNode, forwardRef } from "react";
import { BaseHeading } from "./BaseHeading";
import { cn } from "~/utils";
import { useConfig } from "~/Provider";

type BasePlaceholderPageProps = PropsWithChildren<{
  image?: ReactNode;

  /**
   * The title of the placeholder.
   */
  title: string;

  /**
   * The subtitle of the placeholder.
   */
  subtitle?: string;

  /**
   * The size of the featured image.
   *
   * @default 'xs'
   */
  imageSize?: "xs" | "sm" | "md" | "lg" | "xl";

  /**
   * Optional CSS classes to apply to the wrapper, label, input, addon, error, and icon elements.
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
     * CSS classes to apply to the content element.
     */
    content?: string | string[];

    /**
     * CSS classes to apply to the title element.
     */
    title?: string | string[];

    /**
     * CSS classes to apply to the subtitle element.
     */
    subtitle?: string | string[];
  };
}>;

const sizes = {
  xs: "nui-placeholder-xs",
  sm: "nui-placeholder-sm",
  md: "nui-placeholder-md",
  lg: "nui-placeholder-lg",
  xl: "nui-placeholder-xl",
};

export const BasePlaceholderPage = forwardRef<
  HTMLDivElement,
  BasePlaceholderPageProps
>(function BasePlaceholderPage({ children, ...props }, ref) {
  const config = useConfig();

  const imageSize = props.imageSize ?? config.BasePlaceholderPage?.imageSize;

  return (
    <div
      className={cn(
        "nui-placeholder-page",
        imageSize && sizes[imageSize],
        props.classes?.wrapper,
      )}
      ref={ref}
    >
      <div className={cn("nui-placeholder-page-inner", props.classes?.inner)}>
        {props.image && (
          <div className={cn("nui-placeholder-page-img", props.classes?.img)}>
            {props.image}
          </div>
        )}
        <div
          className={cn("nui-placeholder-page-content", props.classes?.content)}
        >
          <BaseHeading
            as="h4"
            weight="medium"
            size="xl"
            className={cn("nui-placeholder-page-title", props.classes?.title)}
          >
            {props.title}
          </BaseHeading>
          {props.subtitle && (
            <p
              className={cn(
                "nui-placeholder-page-subtitle",
                props.classes?.subtitle,
              )}
            >
              {props.subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
});
