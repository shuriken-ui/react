import { ReactNode, forwardRef } from "react";
import { BaseHeading } from "./BaseHeading";
import { cn } from "../../utils";

interface BasePlaceholderPageProps {
  children: ReactNode;
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
}

const sizeStyle = {
  xs: "nui-placeholder-xs",
  sm: "nui-placeholder-sm",
  md: "nui-placeholder-md",
  lg: "nui-placeholder-lg",
  xl: "nui-placeholder-xl",
};

export const BasePlaceholderPage = forwardRef<
  HTMLDivElement,
  BasePlaceholderPageProps
>(function BasePlaceholderPage(
  { subtitle, title, imageSize = "xs", image, children },
  ref,
) {
  return (
    <div className={cn("nui-placeholder-page", sizeStyle[imageSize])} ref={ref}>
      <div className="nui-placeholder-page-inner">
        {image && <div className="nui-placeholder-page-img">{image}</div>}
        <div className="nui-placeholder-page-content">
          <BaseHeading
            as="h4"
            weight="medium"
            size="xl"
            className="nui-placeholder-page-title"
          >
            {title}
          </BaseHeading>
          {subtitle && (
            <p className="nui-placeholder-page-subtitle">{subtitle}</p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
});
