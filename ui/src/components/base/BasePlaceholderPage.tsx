import { PropsWithChildren, ReactNode, forwardRef } from "react";
import { BaseHeading } from "./BaseHeading";
import { cn } from "../../utils";
import { useConfig } from "../../Provider";

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
   */
  imageSize?: "xs" | "sm" | "md" | "lg" | "xl";
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
      className={cn("nui-placeholder-page", imageSize && sizes[imageSize])}
      ref={ref}
    >
      <div className="nui-placeholder-page-inner">
        {props.image && (
          <div className="nui-placeholder-page-img">{props.image}</div>
        )}
        <div className="nui-placeholder-page-content">
          <BaseHeading
            as="h4"
            weight="medium"
            size="xl"
            className="nui-placeholder-page-title"
          >
            {props.title}
          </BaseHeading>
          {props.subtitle && (
            <p className="nui-placeholder-page-subtitle">{props.subtitle}</p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
});
