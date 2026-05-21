import { FaArrowRight, FaTools } from "react-icons/fa";
import OfferCard from "@/components/ui/OfferCard";
import SectionHeader from "@/components/ui/SectionHeader";
import CTAButton from "@/components/ui/CTAButton";

interface OfferItem {
  title: string;
  description: string;
  image: string;
}

interface OfferContentProps {
  offers: OfferItem[];
}

export default function OfferContent({ offers }: OfferContentProps) {
  return (
    <>
      <section className="py-24 relative">
        <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-weldingRed/10 blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-ctaOrange/10 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="animate-fade-up">
            <SectionHeader
              title="Zakres naszych usług"
              subtitle="NASZA OFERTA"
            >
              Konstrukcje stalowe, które łączą nowoczesny design z solidnym wykonaniem. Każdy projekt realizujemy z dbałością o detale, odpowiednią obróbkę materiału oraz estetyczne wykończenie. Oferujemy kompleksowe wykonanie bram, ogrodzeń, balustrad i elementów metalowych dopasowanych do charakteru posesji oraz oczekiwań klienta.
            </SectionHeader>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {offers.map((offer, index) => (
              <div
                key={index}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <OfferCard {...offer} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-weldingRed/5 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-ctaOrange/5 rounded-full filter blur-3xl"></div>
        <div
          className="max-w-4xl mx-auto px-6 text-center relative animate-fade-in-only"
        >
          <div className="inline-flex items-center justify-center p-3 bg-weldingRed/10 rounded-full mb-6">
            <FaTools className="text-weldingRed text-xl" />
          </div>
          <SectionHeader
            title="Zrealizujemy Twój Projekt"
          >
            Skontaktuj się z nami, aby omówić szczegóły Twojego zamówienia.
            Oferujemy bezpłatną wycenę i konsultację.
          </SectionHeader>
          <div className="mt-8 hover:scale-105 active:scale-[0.98] transition-transform duration-300 inline-block">
            <CTAButton href="/kontakt" icon={<FaArrowRight />}>
              Skontaktuj się z nami
            </CTAButton>
          </div>
          <div className="absolute top-10 left-10 grid grid-cols-3 gap-2 opacity-20">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-weldingRed"></div>
            ))}
          </div>
          <div className="absolute bottom-10 right-10 grid grid-cols-3 gap-2 opacity-20">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-ctaOrange"></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
