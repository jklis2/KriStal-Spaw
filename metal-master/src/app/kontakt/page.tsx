import dynamic from "next/dynamic";
import type { Metadata } from "next";
import SmallHeroSection from "@/components/ui/SmallHeroSection";

const ContactContent = dynamic(() => import("@/components/ui/ContactContent"));

export const metadata: Metadata = {
  title: "Kontakt - Wycena bram, balustrad i ogrodzeń",
  description:
    "Skontaktuj się z KriStal-Spaw, aby omówić projekt bramy, balustrady, ogrodzenia lub konstrukcji stalowej. Przygotujemy wycenę i odpowiemy na pytania dotyczące realizacji.",
  alternates: {
    canonical: "/kontakt",
  },
  openGraph: {
    title: "Kontakt | KriStal-Spaw",
    description:
      "Skontaktuj się z nami w sprawie wyceny bram, balustrad, ogrodzeń i konstrukcji stalowych.",
    url: "https://kristal-spaw.pl/kontakt",
    type: "website",
    images: [
      {
        url: "/galleryPreview/taras.webp",
        width: 1200,
        height: 630,
        alt: "Kontakt KriStal-Spaw - wycena bram, balustrad i ogrodzeń",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt | KriStal-Spaw",
    description:
      "Skontaktuj się z KriStal-Spaw w sprawie wyceny bram, balustrad, ogrodzeń i konstrukcji stalowych.",
    images: ["/galleryPreview/taras.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://kristal-spaw.pl/kontakt#contact",
  name: "Kontakt - KriStal-Spaw",
  description:
    "Strona kontaktowa firmy KriStal-Spaw. Możliwość kontaktu w sprawie wyceny bram, balustrad, ogrodzeń i konstrukcji stalowych.",
  url: "https://kristal-spaw.pl/kontakt",
  isPartOf: {
    "@id": "https://kristal-spaw.pl/#website",
  },
  about: {
    "@id": "https://kristal-spaw.pl/#localbusiness",
  },
};

export default function Contact() {
  return (
    <main>
      <script
        id="json-ld-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SmallHeroSection
        title="Kontakt"
        description="Skontaktuj się z nami, aby omówić Twój projekt. Odpowiemy na wszystkie pytania i pomożemy w realizacji Twoich planów."
      />

      <ContactContent />
    </main>
  );
}