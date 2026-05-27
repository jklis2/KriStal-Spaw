import dynamic from "next/dynamic";
import type { Metadata } from "next";
import SmallHeroSection from "@/components/ui/SmallHeroSection";
// import { blogPosts } from "@/consts/blogPosts";

const BlogContent = dynamic(() => import("@/components/ui/BlogContent"));

export const metadata: Metadata = {
  title: "Blog - Poradniki o bramach, balustradach i spawalnictwie",
  description:
    "Przeczytaj artykuły i poradniki KriStal-Spaw dotyczące spawalnictwa, bram, balustrad, ogrodzeń, konstrukcji stalowych, montażu oraz wyboru najlepszych rozwiązań.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | KriStal-Spaw",
    description:
      "Profesjonalne artykuły i poradniki o spawalnictwie, bramach, balustradach, ogrodzeniach i konstrukcjach stalowych.",
    url: "https://kristal-spaw.pl/blog",
    type: "website",
    images: [
      {
        url: "/galleryPreview/taras.webp",
        width: 1200,
        height: 630,
        alt: "Blog KriStal-Spaw - poradniki o spawalnictwie, bramach i balustradach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | KriStal-Spaw",
    description:
      "Poradniki i artykuły KriStal-Spaw o spawalnictwie, bramach, balustradach, ogrodzeniach i konstrukcjach stalowych.",
    images: ["/galleryPreview/taras.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://kristal-spaw.pl/blog#blog",
  name: "Blog - KriStal-Spaw",
  description:
    "Artykuły i poradniki dotyczące spawalnictwa, bram, balustrad, ogrodzeń oraz konstrukcji stalowych.",
  url: "https://kristal-spaw.pl/blog",
  isPartOf: {
    "@id": "https://kristal-spaw.pl/#website",
  },
  about: {
    "@id": "https://kristal-spaw.pl/#localbusiness",
  },
};

export default function Blog() {
  return (
    <main>
      <script
        id="json-ld-blog"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SmallHeroSection
        title="Blog"
        description="Odkryj świat spawalnictwa poprzez nasze profesjonalne artykuły i poradniki."
      />

      {/* <BlogContent blogPosts={blogPosts} /> jak beda artykuly to to zamiast tego nizej*/}
      <BlogContent />
    </main>
  );
}