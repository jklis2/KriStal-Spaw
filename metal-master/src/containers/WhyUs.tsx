"use client";

import React from "react";
import { whyUsItems } from "@/consts/whyUsItems";
import { useTheme } from "@/components/providers/ThemeProvider";
import { FaArrowRight } from "react-icons/fa";
import SectionHeader from "@/components/ui/SectionHeader";
import CTAButton from "@/components/ui/CTAButton";
import FeatureCard from "@/components/ui/FeatureCard";
import TestimonialCard from "@/components/ui/TestimonialCard";

export default function WhyUs() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={`py-24 relative overflow-hidden ${
        isDark ? "bg-industrialGray" : "bg-industrialLight"
      }`}
    >
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-weldingRed/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-ctaOrange/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: isDark
              ? "url('data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E')"
              : "url('data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E')",
          }}
        ></div>
      </div>
      <div className="container mx-auto px-6 relative">
        <SectionHeader
          title="Dlaczego Warto Nam Zaufać?"
          subtitle="NASZE ATUTY"
          isDark={isDark}
        >
          Od lat dostarczamy najwyższej jakości usługi spawalnicze i ślusarskie.
          Poznaj powody, dla których klienci wybierają właśnie nas.
        </SectionHeader>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {whyUsItems.map((benefit, index) => (
            <FeatureCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              Icon={benefit.Icon}
              index={index}
              isDark={isDark}
            />
          ))}
        </div>
        <TestimonialCard
          name="Jan Kowalski"
          company="Firma budowlana"
          location="Warszawa"
          testimonial="Współpraca z firmą KRISTAL-SPAW to czysta przyjemność. Profesjonalne podejście, terminowość i najwyższa jakość wykonania. Konstrukcje, które dla nas wykonali, są nie tylko funkcjonalne, ale również estetyczne. Polecam każdemu, kto szuka solidnego partnera w branży metalowej."
          rating={5}
          imageSrc="/testimonial-image.jpg"
          isDark={isDark}
        />
        <div className="text-center mt-16">
          <CTAButton href="/o-nas" icon={<FaArrowRight />}>
            Poznaj nas lepiej
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
