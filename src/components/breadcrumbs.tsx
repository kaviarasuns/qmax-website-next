import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-1.5 text-sm">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && (
            <ChevronRight
              className="h-3.5 w-3.5 mx-1.5 text-zinc-300"
              aria-hidden="true"
            />
          )}
          {item.href ? (
            <Link
              href={item.href}
              className="text-zinc-500 transition-colors duration-200 motion-reduce:transition-none hover:text-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/60 focus-visible:rounded-sm focus-visible:ring-offset-1"
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-zinc-800">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
