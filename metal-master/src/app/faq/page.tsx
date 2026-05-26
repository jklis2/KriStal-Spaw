import dynamic from "next/dynamic";
import type { Metadata } from "next";
import SmallHeroSection from "@/components/ui/SmallHeroSection";
import { faqItems } from "@/consts/faqItems";

const FAQContent = dynamic(() => import("@/components/ui/FAQContent"));

export const metadata: Metadata = {
  title: "FAQ - Najczęściej zadawane pytania",
  description:
    "Sprawdź odpowiedzi na najczęściej zadawane pytania dotyczące usług KriStal-Spaw: bram, balustrad, ogrodzeń, konstrukcji stalowych, wyceny, montażu i realizacji zamówień.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ | KriStal-Spaw",
    description:
      "Najczęściej zadawane pytania dotyczące bram, balustrad, ogrodzeń, konstrukcji stalowych, wyceny i montażu.",
    url: "https://kristal-spaw.pl/faq",
    type: "website",
    images: [
      {
        url: "/galleryPreview/taras.webp",
        width: 1200,
        height: 630,
        alt: "FAQ KriStal-Spaw - najczęściej zadawane pytania",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | KriStal-Spaw",
    description:
      "Najczęściej zadawane pytania dotyczące usług KriStal-Spaw: bram, balustrad, ogrodzeń i konstrukcji stalowych.",
    images: ["/galleryPreview/taras.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://kristal-spaw.pl/faq#faq",
  name: "FAQ - najczęściej zadawane pytania",
  description:
    "Odpowiedzi na najczęściej zadawane pytania dotyczące usług KriStal-Spaw.",
  url: "https://kristal-spaw.pl/faq",
  isPartOf: {
    "@id": "https://kristal-spaw.pl/#website",
  },
  about: {
    "@id": "https://kristal-spaw.pl/#localbusiness",
  },
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FAQ() {
  return (
    <main>
      <script
        id="json-ld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SmallHeroSection
        title="FAQ"
        description="Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące naszych usług i produktów"
      />

      <FAQContent faqItems={faqItems} />
    </main>
  );
}