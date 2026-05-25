import { Link } from "@tanstack/react-router";
import { Instagram, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-serif text-3xl">Gigato<span className="text-primary">.</span></h3>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
            Complementos artesanales tejidos a mano en Zahara de la Sierra,
            entre olivos y luz de Cádiz.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest-xl text-foreground/70 mb-4">Navega</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/coleccion" className="hover:text-primary">Colección</Link></li>
            <li><Link to="/historia" className="hover:text-primary">Historia</Link></li>
            <li><Link to="/contacto" className="hover:text-primary">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest-xl text-foreground/70 mb-4">Susúrranos</h4>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" className="flex items-center gap-2 text-sm hover:text-primary">
              <Instagram className="w-4 h-4" /> @gigato
            </a>
          </div>
          <a href="mailto:hola@gigato.es" className="mt-3 flex items-center gap-2 text-sm hover:text-primary">
            <Mail className="w-4 h-4" /> hola@gigato.es
          </a>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground tracking-wider">
        © {new Date().getFullYear()} Gigato — Hecho con hilo, perlas y cariño en Andalucía.
      </div>
    </footer>
  );
}
