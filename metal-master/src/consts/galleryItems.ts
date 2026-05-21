export interface GalleryItem {
  id: number;
  category: string;
  image: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    category: "Balustrady",
    image: "/galleryPreview/balustrada_schodowa.webp",
  },
  {
    id: 2,
    category: "Balustrady",
    image: "/galleryPreview/balustrada_szklana.webp",
  },
  {
    id: 3,
    category: "Bramy",
    image: "/galleryPreview/brama_ogrodzenie.webp",
  },
  {
    id: 4,
    category: "Inne projekty",
    image: "/galleryPreview/taras.webp",
  },
  {
    id: 5,
    category: "Balustrady",
    image: "/offer/balustrada_balkonowa.webp",
  },
  {
    id: 6,
    category: "Balustrady",
    image: "/offer/balustrada_francuska.webp",
  },
  {
    id: 7,
    category: "Balustrady",
    image: "/offer/balustrada_szklana_2.webp",
  },
  {
    id: 8,
    category: "Balustrady",
    image: "/offer/balustrada_wewnetrzna.webp",
  },
  {
    id: 9,
    category: "Bramy",
    image: "/offer/brama_dwuskrzydlowa.webp",
  },
  {
    id: 10,
    category: "Bramy",
    image: "/offer/brama_przesuwna.webp",
  },
  {
    id: 11,
    category: "Ogrodzenia",
    image: "/offer/ogrodzenie_systemowe.webp",
  },
  {
    id: 12,
    category: "Inne projekty",
    image: "/offer/stol_inne_projekty.webp",
  },
];

export const categories = [
  "Wszystkie",
  "Bramy",
  "Balustrady",
  "Ogrodzenia",
  "Inne projekty",
];
