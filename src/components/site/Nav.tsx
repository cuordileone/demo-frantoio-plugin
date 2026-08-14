"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-stone/95 backdrop-blur supports-[backdrop-filter]:bg-stone/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-heading text-lg font-semibold tracking-tight text-ink" onClick={() => setOpen(false)}>
          Colle Sereno
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navigazione principale">
          {siteConfig.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-sm font-medium tracking-wide text-ink/75 transition-colors hover:text-olive",
                  active && "text-olive",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Chiudi il menu" : "Apri il menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Navigazione mobile" className="border-t border-border/70 bg-stone md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-6 py-2">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="block py-3 text-sm font-medium text-ink/85 hover:text-olive"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
