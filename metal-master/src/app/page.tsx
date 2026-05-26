import Hero from "@/containers/Hero";
import Services from "@/containers/Services";
import GalleryPreview from "@/containers/GalleryPreview";
import WhyUs from "@/containers/WhyUs";
import Script from "next/script";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://kristal-spaw.pl/#website",
      url: "https://kristal-spaw.pl",
      name: "KriStal-Spaw",
      description:
        "Profesjonalne usługi spawalnicze i ślusarskie w Tresnej. Bramy, ogrodzenia, balustrady i konstrukcje stalowe na wymiar.",
      inLanguage: "pl-PL",
    },
    {
      "@type": "WebPage",
      "@id": "https://kristal-spaw.pl/#webpage",
      url: "https://kristal-spaw.pl",
      name: "KriStal-Spaw | Profesjonalne usługi spawalnicze i ślusarskie - Tresna",
      description:
        "KriStal-Spaw – profesjonalne usługi spawalnicze i ślusarskie w Tresnej. Bramy, ogrodzenia, balustrady i konstrukcje stalowe na wymiar. Ocynkowanie ogniowe, lakierowanie proszkowe, gwarancja jakości.",
      isPartOf: { "@id": "https://kristal-spaw.pl/#website" },
      inLanguage: "pl-PL",
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://kristal-spaw.pl/#localbusiness",
      name: "KriStal-Spaw",
      description:
        "Profesjonalne usługi spawalnicze i ślusarskie. Bramy, ogrodzenia, balustrady i konstrukcje stalowe na wymiar.",
      url: "https://kristal-spaw.pl",
      telephone: "+48 513 485 664",
      email: "krzysiekraczka08@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "ul. Pogodna 8",
        addressLocality: "Tresna",
        postalCode: "34-311",
        addressCountry: "PL",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "16:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "14:00",
        },
      ],
      image: "https://kristal-spaw.pl/logo.svg",
      priceRange: "$$",
      areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          addressCountry: "PL",
        },
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <Script
        id="json-ld-homepage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="afterInteractive"
      />
      <Hero />
      <Services />
      <GalleryPreview />
      <WhyUs />
    </>
  );
}
