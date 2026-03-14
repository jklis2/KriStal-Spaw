export interface OfferItem {
  title: string;
  description: string;
  image: string;
  features: string[];
}

export const offers: OfferItem[] = [
  {
    title: "Bramy kute",
    description: "Ręcznie wykonane bramy z najwyższej jakości stali, łączące tradycyjne rzemiosło z nowoczesnymi technikami obróbki metalu.",
    image: "/images/photoPlaceholder.webp",
    features: [
      "Indywidualny projekt",
      "Zabezpieczenie antykorozyjne",
      "Automatyka bramowa",
      "10 lat gwarancji",
    ],
  },
  {
    title: "Ogrodzenia",
    description: "Kompleksowe rozwiązania ogrodzeniowe, od klasycznych po nowoczesne wzory, wykonane z dbałością o każdy detal.",
    image: "/images/photoPlaceholder.webp",
    features: [
      "Dowolna wysokość",
      "Malowanie proszkowe",
      "Montaż w cenie",
      "Szybka realizacja",
    ],
  },
  {
    title: "Balustrady",
    description: "Eleganckie i trwałe balustrady schodowe i balkonowe, zapewniające bezpieczeństwo i podkreślające charakter wnętrza.",
    image: "/images/photoPlaceholder.webp",
    features: [
      "Stal nierdzewna",
      "Wzory na zamówienie",
      "Certyfikaty bezpieczeństwa",
      "Profesjonalny montaż",
    ],
  },
  {
    title: "Meble metalowe",
    description: "Unikalne meble łączące metal i drewno, tworzone na zamówienie według indywidualnych projektów.",
    image: "/images/photoPlaceholder.webp",
    features: [
      "Stal i drewno",
      "Projekty custom",
      "Wykończenie premium",
      "Transport gratis",
    ],
  },
];
