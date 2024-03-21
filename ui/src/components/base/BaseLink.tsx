import { type HTMLAttributes, forwardRef } from "react";
import Link, { type LinkProps } from "next/link";
import { cn } from "~/utils";

type BaseLinkProps = LinkProps &
  Omit<HTMLAttributes<HTMLAnchorElement>, keyof LinkProps>;

export const BaseLink = forwardRef<HTMLAnchorElement, BaseLinkProps>(
  function BaseLink({ className, children, ...props }, ref) {
    return (
      <Link className={cn("nui-link", className)} {...props} ref={ref}>
        {children}
      </Link>
    );
  },
);
