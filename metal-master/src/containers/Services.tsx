import SectionHeader from "@/components/ui/SectionHeader";
import ServiceCard from "@/components/ui/ServiceCard";
import CTAButton from "@/components/ui/CTAButton";
import BackgroundPattern from "@/components/ui/BackgroundPattern";
import { servicesItems } from "@/consts/servicesItems";
import { FaArrowRight } from "react-icons/fa";

export default function Services() {
  return (
    <section
      className="py-24 relative overflow-hidden bg-industrialGray content-auto"
    >
      <BackgroundPattern />
      <div className="absolute top-0 left-0 w-32 h-32 bg-weldingRed/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-ctaOrange/5 rounded-full filter blur-3xl"></div>
      <div className="container mx-auto px-6 relative">
        <SectionHeader
          title="Czym się zajmujemy?"
          subtitle="NASZE USŁUGI"
        >
          Oferujemy kompleksowe usługi spawalnicze i ślusarskie dla klientów
          indywidualnych i firm. Każdy projekt traktujemy z najwyższą
          starannością.
        </SectionHeader>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesItems.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              Icon={service.Icon}
              index={index}
            />
          ))}
        </div>
        <div className="text-center mt-16">
          <CTAButton href="/oferta" icon={<FaArrowRight />}>
            Zobacz pełną ofertę
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
