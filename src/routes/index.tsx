import { createFileRoute, Link } from "@tanstack/react-router";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
import hero from "@/assets/hero-gigato.jpg";
import artesana from "@/assets/artesana.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Gigato — Joyería artesanal de Zahara de la Sierra" },
      { name: "description", content: "Collares y pendientes tejidos a mano con ganchillo y perlas. Chic, dulce y boho desde Cádiz." },
    ],
  }),
});

function Index() {
  const collares = products.filter((p) => p.category === "Collares").slice(0, 3);
  const pendientes = products.filter((p) => p.category === "Pendientes");

  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-24 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 lg:pr-8">
            <p className="text-xs uppercase tracking-widest-xl text-primary mb-8">
              · Zahara de la Sierra · Cádiz ·
            </p>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.95]">
              Hilo, perla
              <br />
              <span className="font-display text-primary">y un poquito</span>
              <br />
              de Andalucía.
            </h1>
            <p className="mt-8 max-w-md text-base text-muted-foreground leading-relaxed">
              Gigato nace en un pueblo blanco entre olivos. Cada collar y cada
              pendiente se teje a mano, hebra a hebra, perla a perla — para que
              lo lleves como quien lleva una historia íntima.
            </p>
            <div className="mt-10 flex items-center gap-8">
              <Link
                to="/coleccion"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-xs uppercase tracking-widest-xl hover:bg-primary/90 transition-colors"
              >
                Ver la colección
              </Link>
              <Link
                to="/historia"
                className="text-xs uppercase tracking-widest-xl border-b border-foreground/40 pb-1 hover:border-primary hover:text-primary transition-colors"
              >
                Nuestra historia
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={hero} alt="Collar de ganchillo y perlas Gigato" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-background border border-border px-6 py-4 max-w-[200px] hidden md:block">
              <p className="font-display text-2xl text-primary">cosido a mano</p>
              <p className="text-[10px] uppercase tracking-widest-xl text-muted-foreground mt-1">
                pieza única
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <section className="border-y border-border/60 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 overflow-hidden">
          <div className="flex items-center justify-around gap-8 text-[11px] uppercase tracking-widest-xl text-muted-foreground flex-wrap">
            <span>Ganchillo a mano</span>
            <span className="text-primary">✦</span>
            <span>Perlas naturales</span>
            <span className="text-primary">✦</span>
            <span>Hilo dorado</span>
            <span className="text-primary">✦</span>
            <span>Hecho en Cádiz</span>
            <span className="text-primary">✦</span>
            <span>Edición limitada</span>
          </div>
        </div>
      </section>

      {/* COLLARES */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-28">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest-xl text-primary mb-4">01 — Collares</p>
            <h2 className="font-serif text-5xl md:text-6xl max-w-xl leading-tight">
              Para el cuello que quiere <span className="font-display">contar algo</span>.
            </h2>
          </div>
          <Link
            to="/coleccion"
            className="text-xs uppercase tracking-widest-xl border-b border-foreground/40 pb-1 hover:border-primary hover:text-primary transition-colors"
          >
            Ver todos →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
          {collares.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </section>

      {/* MATERIALES */}
      <section className="bg-background border-t border-border/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-widest-xl text-primary mb-4">Materiales</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Sólo lo que <span className="font-display">la piel agradece</span>.
            </h2>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
              Cada pieza Gigato se teje con hilos 100% naturales y perlas de altísima
              calidad — hipoalergénicas, suaves al tacto y pensadas para durar
              temporada tras temporada.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
            <div className="text-center md:text-left">
              <p className="font-display text-5xl text-primary mb-4">i.</p>
              <h3 className="font-serif text-2xl mb-3">Hilos naturales</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Fibras nobles seleccionadas una a una. Tacto suave, color vivo
                y respeto por la piel más delicada.
              </p>
            </div>
            <div className="text-center md:text-left">
              <p className="font-display text-5xl text-primary mb-4">ii.</p>
              <h3 className="font-serif text-2xl mb-3">Perlas de alta calidad</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Perlas con brillo y forma cuidados, montadas para acompañarte
                cada día sin perder un ápice de su luz.
              </p>
            </div>
            <div className="text-center md:text-left">
              <p className="font-display text-5xl text-primary mb-4">iii.</p>
              <h3 className="font-serif text-2xl mb-3">Hipoalergénicas y duraderas</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Materiales aptos para pieles sensibles y piezas construidas
                con mimo para que te duren muchos veranos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HISTORIA — split */}
      <section className="bg-secondary/30 border-y border-border/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28 grid lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/5] overflow-hidden">
            <img src={artesana} alt="Manos tejiendo a ganchillo" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest-xl text-primary mb-6">La diseñadora</p>
            <h2 className="font-serif text-5xl md:text-6xl leading-tight">
              Desde un balcón blanco <span className="font-display">en la sierra</span>.
            </h2>
            <p className="mt-8 text-base text-muted-foreground leading-relaxed">
              Soy andaluza, de Zahara de la Sierra — uno de esos pueblos
              colgados de la roca donde el tiempo baja despacio. Aprendí a
              tejer con mi abuela y, años después, descubrí que entre ganchillo
              y perlas se podían contar las mismas historias que cuentan
              nuestras casas encaladas: luminosas, libres y un poco soñadoras.
            </p>
            <p className="mt-6 font-display text-3xl text-primary">— Gigato</p>
            <Link
              to="/historia"
              className="mt-10 inline-block text-xs uppercase tracking-widest-xl border-b border-primary pb-1 text-primary"
            >
              Leer la historia completa
            </Link>
          </div>
        </div>
      </section>

      {/* PENDIENTES */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-28">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest-xl text-primary mb-4">02 — Pendientes</p>
            <h2 className="font-serif text-5xl md:text-6xl max-w-xl leading-tight">
              Pequeños <span className="font-display">soles</span> al oído.
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 max-w-4xl">
          {pendientes.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="max-w-4xl mx-auto px-6 py-28 text-center">
        <p className="font-display text-4xl text-primary">súmate al taller</p>
        <h2 className="font-serif text-4xl md:text-5xl mt-4">
          Recibe las nuevas piezas antes que nadie.
        </h2>
        <p className="mt-6 text-sm text-muted-foreground max-w-md mx-auto">
          Pequeñas colecciones, lanzamientos limitados y alguna que otra
          postal desde Zahara.
        </p>
        <form className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="tu correo"
            className="flex-1 bg-background border border-border px-5 py-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary"
          />
          <button className="bg-primary text-primary-foreground px-8 py-4 text-xs uppercase tracking-widest-xl hover:bg-primary/90 transition-colors">
            Suscribirme
          </button>
        </form>
      </section>
    </>
  );
}
