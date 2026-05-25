import alegria from "@/assets/collar-alegria.jpg";
import boho from "@/assets/collar-boho.jpg";
import ingrid from "@/assets/collar-ingrid.jpg";
import liz from "@/assets/collar-liz.jpg";
import lizChampan from "@/assets/collar-liz-champan.jpg";
import lizRosa from "@/assets/collar-liz-rosa.jpg";
import lizLavanda from "@/assets/collar-liz-lavanda.jpg";
import lizAguamarina from "@/assets/collar-liz-aguamarina.jpg";
import lizNegro from "@/assets/collar-liz-negro.jpg";
import penelope from "@/assets/collar-penelope.jpg";
import bara from "@/assets/collar-bara.jpg";
import pendientesPerla from "@/assets/pendientes-perla.jpg";
import pendientesNoche from "@/assets/pendientes-noche.jpg";
import pendientesOle from "@/assets/pendientes-turquesa.jpg";
import pendientesMandala from "@/assets/pendientes-mandala.jpg";
import pendientesCarmen from "@/assets/pendientes-carmen.jpg";
import pendientesFeria from "@/assets/modelo-feria.jpg";

export type ColorOption = { name: string; hex: string };
export type ThreadOption = { name: string; hex: string };
export type ModelOption = { name: string; detail: string };

export type Product = {
  slug: string;
  name: string;
  category: "Collares" | "Pendientes";
  price: number;
  image: string;
  description: string;
  tag?: string;
  colors: ColorOption[];
  threads: ThreadOption[];
  models: ModelOption[];
  imageByColor?: Record<string, string>;
};

const collarModels: ModelOption[] = [
  { name: "Choker", detail: "38 cm — ajustado al cuello" },
  { name: "Clásico", detail: "45 cm — sobre la clavícula" },
  { name: "Largo", detail: "60 cm — caída elegante" },
];

const pendientesModels: ModelOption[] = [
  { name: "Mini", detail: "2 cm — discreto y diario" },
  { name: "Midi", detail: "4 cm — equilibrio perfecto" },
  { name: "Statement", detail: "6 cm — para brillar" },
];

// Paleta amplia de perlas y cristales
const pearlPalette: ColorOption[] = [
  { name: "Nácar puro", hex: "#f0e7d8" },
  { name: "Marfil nupcial", hex: "#f5ecd9" },
  { name: "Blanco roto", hex: "#f5f0e8" },
  { name: "Champán", hex: "#d8c19a" },
  { name: "Oro rosa", hex: "#e0b8a8" },
  { name: "Rosa cuarzo", hex: "#e8c4c8" },
  { name: "Rosa empolvado", hex: "#e6c2c2" },
  { name: "Malva", hex: "#c7a6c9" },
  { name: "Lavanda", hex: "#c9b8d9" },
  { name: "Azul cielo", hex: "#b8d4e8" },
  { name: "Aguamarina", hex: "#a8cdd1" },
  { name: "Verde mar", hex: "#9dc5b5" },
  { name: "Verde salvia", hex: "#b3c4a6" },
  { name: "Esmeralda", hex: "#2d8a5c" },
  { name: "Azul zafiro", hex: "#3b5998" },
  { name: "Terracota", hex: "#c4654a" },
  { name: "Pastel melocotón", hex: "#f4d3c4" },
  { name: "Oro viejo", hex: "#b8945a" },
  { name: "Rojo rubí", hex: "#9b1c2e" },
  { name: "Negro azabache", hex: "#1a1a1a" },
];

// Hilos disponibles
const threadPalette: ThreadOption[] = [
  { name: "Dorado", hex: "#c9a24b" },
  { name: "Dorado rosado", hex: "#d9a98a" },
  { name: "Plateado", hex: "#c5c8cc" },
];

export const products: Product[] = [
  {
    slug: "collar-alegria",
    name: "Collar Alegría",
    category: "Collares",
    price: 78,
    image: alegria,
    description: "Racimos de perlas malva y celeste tejidos sobre hilo dorado. Como uvas de luz al cuello.",
    tag: "Edición limitada",
    colors: pearlPalette,
    threads: threadPalette,
    models: collarModels,
  },
  {
    slug: "collar-ingrid",
    name: "Collar Ingrid",
    category: "Collares",
    price: 92,
    image: ingrid,
    description: "Gargantilla nupcial de perlas naturales y cristal rosado sobre ganchillo dorado.",
    tag: "Favorito",
    colors: pearlPalette,
    threads: threadPalette,
    models: collarModels,
  },
  {
    slug: "collar-penelope",
    name: "Collar Penélope",
    category: "Collares",
    price: 105,
    image: penelope,
    description: "Tres vueltas en degradado de agua, perlas y aguamarinas. Un collar que se mueve contigo.",
    colors: pearlPalette,
    threads: threadPalette,
    models: collarModels,
  },
  {
    slug: "collar-boho",
    name: "Collar Boho",
    category: "Collares",
    price: 68,
    image: boho,
    description: "Larguísimo, ligero, salpicado de flores de cristal pastel. Para vestidos blancos y atardeceres.",
    colors: pearlPalette,
    threads: threadPalette,
    models: collarModels,
  },
  {
    slug: "collar-liz",
    name: "Collar Liz",
    category: "Collares",
    price: 64,
    image: liz,
    description: "Minimal y luminoso. Cristales nacarados engarzados en una cinta de oro fino.",
    colors: pearlPalette,
    threads: threadPalette,
    models: collarModels,
    imageByColor: {
      "Champán": lizChampan,
      "Rosa cuarzo": lizRosa,
      "Lavanda": lizLavanda,
      "Aguamarina": lizAguamarina,
      "Negro azabache": lizNegro,
    },
  },
  {
    slug: "pendientes-perla",
    name: "Pendientes Perla",
    category: "Pendientes",
    price: 48,
    image: pendientesPerla,
    description: "Aros tejidos a mano con perlas blancas y un destello verde esmeralda.",
    colors: pearlPalette,
    threads: threadPalette,
    models: pendientesModels,
  },
  {
    slug: "pendientes-noche",
    name: "Pendientes Noche",
    category: "Pendientes",
    price: 54,
    image: pendientesNoche,
    description: "Flor de cristal negro facetado sobre ganchillo dorado. Para las noches que importan.",
    tag: "Nuevo",
    colors: pearlPalette,
    threads: threadPalette,
    models: pendientesModels,
  },
  {
    slug: "collar-bara",
    name: "Collar Bara",
    category: "Collares",
    price: 118,
    image: bara,
    description: "Tejido andaluz de coral, jade y nácar sobre hilo dorado. Una pieza con alma de feria.",
    tag: "Nuevo",
    colors: pearlPalette,
    threads: threadPalette,
    models: collarModels,
  },
  {
    slug: "pendientes-ole",
    name: "Pendientes Olé",
    category: "Pendientes",
    price: 72,
    image: pendientesOle,
    description: "Aros de ganchillo dorado rematados con racimos de turquesa. Para vestir de verano.",
    tag: "Nuevo",
    colors: pearlPalette,
    threads: threadPalette,
    models: pendientesModels,
  },
  {
    slug: "pendientes-mandala",
    name: "Pendientes Mandala",
    category: "Pendientes",
    price: 68,
    image: pendientesMandala,
    description: "Rosetones de ganchillo plateado, perlas blancas y turquesa. Geometría tejida a mano.",
    colors: pearlPalette,
    threads: threadPalette,
    models: pendientesModels,
  },
  {
    slug: "pendientes-carmen",
    name: "Pendientes Carmen",
    category: "Pendientes",
    price: 78,
    image: pendientesCarmen,
    description: "Encaje dorado y cristal rojo rubí. Inspiración flamenca con detalles de Feria.",
    tag: "Favorito",
    colors: pearlPalette,
    threads: threadPalette,
    models: pendientesModels,
  },
  {
    slug: "pendientes-feria",
    name: "Pendientes Feria",
    category: "Pendientes",
    price: 86,
    image: pendientesFeria,
    description: "Pendientes colgantes de ganchillo dorado y cristal champán. Para lucir con traje de gitana.",
    colors: pearlPalette,
    threads: threadPalette,
    models: pendientesModels,
  },
];
