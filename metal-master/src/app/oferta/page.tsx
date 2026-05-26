import SmallHeroSection from "@/components/ui/SmallHeroSection";
import OfferContent from "@/components/ui/OfferContent";
import { offers } from "@/consts/offerItems";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oferta – Bramy, ogrodzenia, balustrady i konstrukcje stalowe",
  description:
    "Sprawdź ofertę KriStal-Spaw: bramy przesuwne i dwuskrzydłowe, ogrodzenia systemowe, balustrady balkonowe, wewnętrzne, szklane i francuskie. Realizacje na wymiar z montażem.",
  alternates: {
    canonical: "/oferta",
  },
  openGraph: {
    title: "Oferta – Bramy, ogrodzenia, balustrady | KriStal-Spaw",
    description:
      "Bramy przesuwne i dwuskrzydłowe, ogrodzenia systemowe, balustrady balkonowe, wewnętrzne, szklane i francuskie. Realizacje na wymiar z montażem w Tresnej i okolicach.",
    url: "https://kristal-spaw.pl/oferta",
    images: [
      {
        url: "/offer/brama_przesuwna.webp",
        width: 1200,
        height: 630,
        alt: "Oferta KriStal-Spaw – bramy, ogrodzenia, balustrady",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oferta – Bramy, ogrodzenia, balustrady | KriStal-Spaw",
    description:
      "Bramy przesuwne i dwuskrzydłowe, ogrodzenia, balustrady szklane i stalowe. Realizacje na wymiar z montażem.",
    images: ["/offer/brama_przesuwna.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  "@id": "https://kristal-spaw.pl/oferta#catalog",
  name: "Oferta usług spawalniczych i ślusarskich – KriStal-Spaw",
  description:
    "Kompleksowa oferta usług: bramy przesuwne i dwuskrzydłowe, ogrodzenia systemowe, balustrady balkonowe, wewnętrzne, szklane i francuskie oraz indywidualne projekty stalowe.",
  url: "https://kristal-spaw.pl/oferta",
  provider: {
    "@id": "https://kristal-spaw.pl/#localbusiness",
  },
  itemListElement: offers.map((offer, index) => ({
    "@type": "Offer",
    position: index + 1,
    name: offer.title,
    description: offer.description,
    url: "https://kristal-spaw.pl/kontakt",
    offeredBy: {
      "@id": "https://kristal-spaw.pl/#localbusiness",
    },
  })),
};

export default function Offer() {
  return (
    <>
      <Script
        id="json-ld-oferta"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="afterInteractive"
      />
      <SmallHeroSection
        title="Nasza Oferta"
        description="Wykonujemy bramy, ogrodzenia, balustrady oraz niestandardowe konstrukcje stalowe z montażem"
      />
      <OfferContent offers={offers} />
    </>
  );
}
