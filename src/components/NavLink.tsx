import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  activeClassName?: string;
  isActive?: boolean;
}

const NavLink = forwardRef<HTMLButtonElement, NavLinkProps>(
  ({ className, activeClassName, isActive, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(className, isActive && activeClassName)}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
