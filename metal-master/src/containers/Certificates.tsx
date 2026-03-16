"use client";

import { certificatesItems } from "@/consts/certificatesItems";
import { useTheme } from "@/components/providers/ThemeProvider";
import SectionHeader from "@/components/ui/SectionHeader";
import CertificateCard from "@/components/ui/CertificateCard";
import BackgroundPattern from "@/components/ui/BackgroundPattern";

export default function Certificates() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={`py-24 relative overflow-hidden ${
        isDark ? "bg-industrialGray" : "bg-industrialLight"
      }`}
    >
      <BackgroundPattern isDark={isDark} />
      <div className="max-w-6xl mx-auto px-6 relative">
        <SectionHeader
          title="Nasze Certyfikaty"
          subtitle="CERTYFIKATY I UPRAWNIENIA"
          isDark={isDark}
        />
        <div className="grid md:grid-cols-3 gap-8">
          {certificatesItems.map((cert, index) => (
            <CertificateCard
              key={index}
              name={cert.name}
              year={cert.year}
              description={cert.description}
              img={cert.img}
              isDark={isDark}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
