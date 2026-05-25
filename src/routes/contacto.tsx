import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/contacto")({
  component: Contacto,
  head: () => ({
    meta: [
      { title: "Contacto — Gigato" },
      { name: "description", content: "Escríbenos para encargos personalizados, colaboraciones o cualquier consulta sobre Gigato." },
    ],
  }),
});

function Contacto() {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20 grid lg:grid-cols-2 gap-16">
      <div>
        <p className="text-xs uppercase tracking-widest-xl text-primary mb-6">Contacto</p>
        <h1 className="font-serif text-5xl md:text-6xl leading-tight">
          Hablemos <span className="font-display">despacio</span>.
        </h1>
        <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
          ¿Quieres una pieza única, un encargo especial o simplemente saludar?
          Escríbenos — respondemos siempre con calma andaluza.
        </p>
        <div className="mt-12 space-y-5 text-sm">
          <div className="flex items-center gap-4">
            <Mail className="w-4 h-4 text-primary" />
            <a href="mailto:hola@gigato.es" className="hover:text-primary">hola@gigato.es</a>
          </div>
          <div className="flex items-center gap-4">
            <Instagram className="w-4 h-4 text-primary" />
            <a href="https://instagram.com" className="hover:text-primary">@gigato</a>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Zahara de la Sierra, Cádiz</span>
          </div>
        </div>
      </div>
      <form className="bg-card border border-border p-8 lg:p-10 space-y-5">
        <div>
          <label className="text-[10px] uppercase tracking-widest-xl text-muted-foreground">Nombre</label>
          <input className="mt-2 w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary" />
        </div>
        <div>
          <label className="text-[10px] uppercase tracking-widest-xl text-muted-foreground">Correo</label>
          <input type="email" className="mt-2 w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary" />
        </div>
        <div>
          <label className="text-[10px] uppercase tracking-widest-xl text-muted-foreground">Mensaje</label>
          <textarea rows={5} className="mt-2 w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary resize-none" />
        </div>
        <button type="button" className="w-full bg-primary text-primary-foreground py-4 text-xs uppercase tracking-widest-xl hover:bg-primary/90 transition-colors">
          Enviar mensaje
        </button>
      </form>
    </div>
  );
}
