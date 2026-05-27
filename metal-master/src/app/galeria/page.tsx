import SmallHeroSection from "@/components/ui/SmallHeroSection";
import GalleryContent from "@/components/ui/GalleryContent";
import { galleryItems, categories } from "@/consts/galleryItems";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeria realizacji – Bramy, balustrady, ogrodzenia",
  description:
    "Zobacz nasze realizacje: bramy przesuwne i dwuskrzydłowe, balustrady szklane, balkonowe i schodowe, ogrodzenia systemowe oraz indywidualne projekty stalowe. Galeria zdjęć KriStal-Spaw.",
  alternates: {
    canonical: "/galeria",
  },
  openGraph: {
    title: "Galeria realizacji | KriStal-Spaw",
    description:
      "Bramy, balustrady, ogrodzenia i konstrukcje stalowe – zobacz zdjęcia naszych realizacji z województwa śląskiego i małopolskiego.",
    url: "https://kristal-spaw.pl/galeria",
    images: [
      {
        url: "/galleryPreview/taras.webp",
        width: 1200,
        height: 630,
        alt: "Galeria realizacji KriStal-Spaw – bramy, balustrady, ogrodzenia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galeria realizacji | KriStal-Spaw",
    description:
      "Bramy, balustrady, ogrodzenia i konstrukcje stalowe – zobacz zdjęcia naszych realizacji.",
    images: ["/galleryPreview/taras.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "@id": "https://kristal-spaw.pl/galeria#gallery",
  name: "Galeria realizacji – KriStal-Spaw",
  description:
    "Zdjęcia realizacji firmy KriStal-Spaw: bramy przesuwne i dwuskrzydłowe, balustrady szklane, balkonowe, schodowe, ogrodzenia systemowe oraz indywidualne projekty stalowe.",
  url: "https://kristal-spaw.pl/galeria",
  isPartOf: {
    "@id": "https://kristal-spaw.pl/#website",
  },
  about: {
    "@id": "https://kristal-spaw.pl/#localbusiness",
  },
};

export default function Gallery() {
  return (
    <>
      <Script
        id="json-ld-galeria"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="afterInteractive"
      />
      <SmallHeroSection
        title="Galeria Realizacji"
        description="Każdy produkt to połączenie rzemieślniczej precyzji z nowoczesnym designem."
      />
      <GalleryContent galleryItems={galleryItems} categories={categories} />
    </>
  );
}
