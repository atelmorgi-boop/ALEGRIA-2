import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";

const nav = [
  { to: "/", label: "Inicio" },
  { to: "/coleccion", label: "Colección" },
  { to: "/historia", label: "Historia" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link to="/" className="font-serif text-3xl tracking-wider text-foreground">
          Gigato<span className="text-primary">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-xs uppercase tracking-widest-xl text-foreground/80 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button aria-label="Cesta" className="hidden md:flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors">
            <ShoppingBag className="w-4 h-4" />
            <span className="text-xs uppercase tracking-widest-xl">0</span>
          </button>
          <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95">
          <div className="px-6 py-6 flex flex-col gap-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-widest-xl text-foreground/80"
                activeProps={{ className: "text-primary" }}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
