export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Brama Kuta Klasyczna",
    category: "Bramy",
    image: "/images/photoPlaceholder.webp",
    description: "Ręcznie kuta brama w stylu klasycznym z elementami dekoracyjnymi",
  },
  {
    id: 2,
    title: "Ogrodzenie Nowoczesne",
    category: "Ogrodzenia",
    image: "/images/photoPlaceholder.webp",
    description: "Minimalistyczne ogrodzenie z prostymi liniami i geometrycznymi wzorami",
  },
  {
    id: 3,
    title: "Balustrada Spiralna",
    category: "Balustrady",
    image: "/images/photoPlaceholder.webp",
    description: "Kręcone schody z kutą balustradą w stylu art nouveau",
  },
  {
    id: 4,
    title: "Stół Industrialny",
    category: "Meble",
    image: "/images/photoPlaceholder.webp",
    description: "Stół z metalową podstawą i drewnianym blatem w stylu loft",
  },
  {
    id: 5,
    title: "Brama Wjazdowa Modern",
    category: "Bramy",
    image: "/images/photoPlaceholder.webp",
    description: "Automatyczna brama przesuwna z elementami ze stali nierdzewnej",
  },
  {
    id: 6,
    title: "Ogrodzenie Rezydencji",
    category: "Ogrodzenia",
    image: "/images/photoPlaceholder.webp",
    description: "Ekskluzywne ogrodzenie posesji z kutymi elementami ozdobnymi",
  },
  {
    id: 7,
    title: "Balustrada Tarasowa",
    category: "Balustrady",
    image: "/images/photoPlaceholder.webp",
    description: "Szklana balustrada ze stalowymi elementami konstrukcyjnymi",
  },
  {
    id: 8,
    title: "Regał Metalowy",
    category: "Meble",
    image: "/images/photoPlaceholder.webp",
    description: "Industrialny regał z metalu i drewna z regulowanymi półkami",
  },
];

export const categories = [
  "Wszystkie",
  "Bramy",
  "Ogrodzenia",
  "Balustrady",
  "Meble",
];
