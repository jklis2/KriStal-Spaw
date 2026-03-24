import { whyUsItems } from "@/consts/whyUsItems";
import { FaArrowRight } from "react-icons/fa";
import SectionHeader from "@/components/ui/SectionHeader";
import CTAButton from "@/components/ui/CTAButton";
import FeatureCard from "@/components/ui/FeatureCard";


export default function WhyUs() {
  return (
    <section
      className="py-24 relative overflow-hidden bg-white content-auto"
    >
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-weldingRed/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-ctaOrange/5 to-transparent rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative">
        <SectionHeader
          title="Dlaczego Warto Nam Zaufać?"
          subtitle="NASZE ATUTY"
        >
          Tworzymy trwałe i dopracowane konstrukcje stalowe. Sprawdź, dlaczego klienci wybierają właśnie nas.
        </SectionHeader>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {whyUsItems.map((benefit, index) => (
            <FeatureCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              Icon={benefit.Icon}
              index={index}
            />
          ))}
        </div>
        <div className="text-center mt-16">
          <CTAButton href="/o-nas" icon={<FaArrowRight />}>
            Poznaj nas lepiej
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
