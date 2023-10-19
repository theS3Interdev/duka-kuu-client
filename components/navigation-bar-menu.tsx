"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Category } from "@/lib/utils/types";
import { cn } from "@/lib/utils/utils";

type NavigationBarMenuProps = {
  data: Category[];
};
export const NavigationBarMenu = ({ data }: NavigationBarMenuProps) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className="flex items-center space-x-3">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active ? "text-black dark:text-white" : "text-neutral-500",
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};
