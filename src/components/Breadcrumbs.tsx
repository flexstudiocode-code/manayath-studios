import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { site } from "@/data/site";

export default function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  const crumbs = [{ name: "Home", path: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-1.5">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight size={12} aria-hidden className="text-gold/60" />}
              {last ? (
                <span aria-current="page" className="font-medium text-foreground">
                  {c.name}
                </span>
              ) : (
                <Link href={c.path} className="transition-colors hover:text-gold">
                  {c.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
      <span className="sr-only">{site.name}</span>
    </nav>
  );
}
