import { useState } from "react";
import type { Product } from "@/lib/products";

type Tab = "color" | "hilo" | "modelo";

export function ProductCard({ product }: { product: Product }) {
  const [tab, setTab] = useState<Tab>("color");
  const [color, setColor] = useState(product.colors[0]);
  const [thread, setThread] = useState(product.threads[0]);
  const [model, setModel] = useState(product.models[0]);

  return (
    <article className="group">
      <div className="relative overflow-hidden bg-secondary aspect-[3/4] flex items-center justify-center">
        <img
          src={product.imageByColor?.[color.name] ?? product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {product.tag && (
          <span className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest-xl text-primary">
            {product.tag}
          </span>
        )}
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] uppercase tracking-widest-xl text-muted-foreground">
            {product.category}
          </p>
          <h3 className="font-serif text-2xl mt-1">{product.name}</h3>
        </div>
        <p className="font-serif text-xl text-primary whitespace-nowrap">{product.price} €</p>
      </div>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{product.description}</p>

      {/* Personalización */}
      <div className="mt-5 border-t border-border/60 pt-4">
        <p className="text-[10px] uppercase tracking-widest-xl text-muted-foreground mb-3">
          Personaliza tu pieza
        </p>
        <div className="flex gap-5 mb-4 flex-wrap">
          {(["color", "hilo", "modelo"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`text-[11px] uppercase tracking-widest-xl pb-1 border-b transition-colors ${
                tab === t
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {t === "color" ? "Perla" : t}
            </button>
          ))}
        </div>

        {tab === "color" && (
          <div>
            <div className="flex flex-wrap gap-2.5">
              {product.colors.map((c) => {
                const active = c.name === color.name;
                return (
                  <button
                    key={c.name}
                    onClick={() => setColor(c)}
                    aria-label={c.name}
                    title={c.name}
                    className={`h-7 w-7 rounded-full border transition-all ${
                      active
                        ? "ring-2 ring-primary ring-offset-2 ring-offset-background border-primary"
                        : "border-border hover:scale-110"
                    }`}
                    style={{ backgroundColor: c.hex }}
                  />
                );
              })}
            </div>
            <p className="mt-2 text-xs text-muted-foreground italic">{color.name}</p>
          </div>
        )}

        {tab === "hilo" && (
          <div>
            <div className="flex flex-wrap gap-3">
              {product.threads.map((t) => {
                const active = t.name === thread.name;
                return (
                  <button
                    key={t.name}
                    onClick={() => setThread(t)}
                    className={`flex items-center gap-2 px-3 py-2 border transition-colors ${
                      active
                        ? "border-primary bg-primary/5"
                        : "border-border/60 hover:border-primary/40"
                    }`}
                  >
                    <span
                      className="h-4 w-4 rounded-full border border-border"
                      style={{
                        background: `linear-gradient(135deg, ${t.hex}, color-mix(in oklab, ${t.hex} 70%, white))`,
                      }}
                    />
                    <span className="text-[11px] uppercase tracking-widest-xl">{t.name}</span>
                  </button>
                );
              })}
            </div>
            <p className="mt-2 text-xs text-muted-foreground italic">Hilo {thread.name.toLowerCase()}</p>
          </div>
        )}

        {tab === "modelo" && (
          <div className="space-y-2">
            {product.models.map((m) => {
              const active = m.name === model.name;
              return (
                <button
                  key={m.name}
                  onClick={() => setModel(m)}
                  className={`w-full text-left px-3 py-2 border transition-colors ${
                    active
                      ? "border-primary bg-primary/5"
                      : "border-border/60 hover:border-primary/40"
                  }`}
                >
                  <p className="font-serif text-sm">{m.name}</p>
                  <p className="text-[11px] text-muted-foreground">{m.detail}</p>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </article>
  );
}
