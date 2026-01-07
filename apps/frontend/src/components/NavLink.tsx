// import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
// import { forwardRef } from "react";
// import { cn } from "@/lib/utils";

// interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
//   className?: string;
//   activeClassName?: string;
//   pendingClassName?: string;
// }

// const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
//   ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
//     return (
//       <RouterNavLink
//         ref={ref}
//         to={to}
//         className={({ isActive, isPending }) =>
//           cn(
//             className,
//             isActive && activeClassName,
//             isPending && pendingClassName
//           )
//         }
//         {...props}
//       />
//     );
//   }
// );

// NavLink.displayName = "NavLink";

// export { NavLink };

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef, useMemo } from "react";
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

// Define props compatible with Next.js Link
interface NavLinkProps extends ComponentPropsWithoutRef<typeof Link> {
  activeClassName?: string;
  exact?: boolean;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  (
    { className, activeClassName, href, exact = false, children, ...props },
    ref
  ) => {
    const pathname = usePathname();

    // Determine if the link is active
    const isActive = useMemo(() => {
      const path = typeof href === "string" ? href : href.pathname;
      if (!path) return false;

      return exact ? pathname === path : pathname.startsWith(path);
    }, [pathname, href, exact]);

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(className, isActive && activeClassName)}
        {...props}
      >
        {children}
      </Link>
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };
