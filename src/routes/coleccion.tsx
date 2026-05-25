import { createFileRoute } from "@tanstack/react-router";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
import { useState } from "react";

export const Route = createFileRoute("/coleccion")({
  component: Coleccion,
  head: () => ({
    meta: [
      { title: "Colección — Gigato" },
      { name: "description", content: "Descubre todos los collares y pendientes artesanales de Gigato." },
    ],
  }),
});

const filtros = ["Todo", "Collares", "Pendientes"] as const;

function Coleccion() {
  const [f, setF] = useState<typeof filtros[number]>("Todo");
  const list = f === "Todo" ? products : products.filter((p) => p.category === f);
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
      <div className="text-center mb-16">
        <p className="text-xs uppercase tracking-widest-xl text-primary mb-6">La colección</p>
        <h1 className="font-serif text-6xl md:text-7xl leading-tight">
          Piezas <span className="font-display">hechas a mano</span>
        </h1>
        <p className="mt-6 max-w-xl mx-auto text-muted-foreground">
          Cada pieza es única. Tiempos, manos y perlas — sin prisas, sin réplica.
        </p>
      </div>
      <div className="flex justify-center gap-8 mb-16 border-b border-border/60 pb-6">
        {filtros.map((x) => (
          <button
            key={x}
            onClick={() => setF(x)}
            className={`text-xs uppercase tracking-widest-xl pb-1 border-b transition-colors ${
              f === x ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {x}
          </button>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
        {list.map((p) => <ProductCard key={p.slug} product={p} />)}
      </div>
    </div>
  );
}
