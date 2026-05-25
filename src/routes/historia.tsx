import { createFileRoute } from "@tanstack/react-router";
import artesana from "@/assets/artesana.jpg";

export const Route = createFileRoute("/historia")({
  component: Historia,
  head: () => ({
    meta: [
      { title: "Nuestra historia — Gigato" },
      { name: "description", content: "La historia de Gigato, joyería artesanal nacida en Zahara de la Sierra, Cádiz." },
    ],
  }),
});

function Historia() {
  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-12 py-20">
      <p className="text-xs uppercase tracking-widest-xl text-primary text-center mb-6">Nuestra historia</p>
      <h1 className="font-serif text-5xl md:text-7xl leading-tight text-center">
        Desde un pueblo blanco <br />
        <span className="font-display text-primary">para el mundo</span>.
      </h1>
      <div className="my-16 aspect-[16/10] overflow-hidden">
        <img src={artesana} alt="Manos artesanas" className="w-full h-full object-cover" />
      </div>
      <div className="max-w-2xl mx-auto space-y-6 text-base leading-relaxed text-foreground/85">
        <p className="font-serif text-2xl italic text-primary">
          "Tejer es una manera lenta de querer."
        </p>
        <p>
          Gigato nació en Zahara de la Sierra, ese rincón de la provincia de
          Cádiz donde las casas se asoman al embalse y los geranios se descuelgan
          por las paredes. Allí, entre olivos y luz blanca, empezó este pequeño
          taller que mezcla ganchillo tradicional con perlas y cristales.
        </p>
        <p>
          Cada collar lleva horas de trabajo. El hilo dorado se enreda con
          paciencia entre los dedos hasta convertirse en racimos, flores y
          gargantillas. No hay dos iguales: cada pieza guarda el pulso del día
          en que se hizo.
        </p>
        <p>
          Si llevas una joya de Gigato llevas también un trocito de Andalucía —
          su luz, su tiempo, y la manera dulce de hacer las cosas que se aprende
          en los pueblos pequeños.
        </p>
        <div className="pt-8 text-center">
          <p className="font-display text-4xl text-primary">con cariño,</p>
          <p className="font-serif text-2xl mt-2">Gigato</p>
        </div>
      </div>
    </div>
  );
}
