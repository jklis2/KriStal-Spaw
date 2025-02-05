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
    image: "https://picsum.photos/401",
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
    image: "https://picsum.photos/402",
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
    image: "https://picsum.photos/403",
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
    image: "https://picsum.photos/404",
    features: [
      "Stal i drewno",
      "Projekty custom",
      "Wykończenie premium",
      "Transport gratis",
    ],
  },
];
