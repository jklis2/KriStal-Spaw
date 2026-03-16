import dynamic from "next/dynamic";
import SmallHeroSection from "@/components/ui/SmallHeroSection";

const Team = dynamic(() => import("@/containers/Team"));
const History = dynamic(() => import("@/containers/History"));
const Certificates = dynamic(() => import("@/containers/Certificates"));

export default function About() {
  return (
    <main>
      <SmallHeroSection
        title="O nas"
        description="Poznaj naszą historię, zespół i wartości. Jesteśmy ekspertami w obróbce metalu, łącząc tradycyjne rzemiosło z nowoczesnymi technologiami."
      />
      <Team />
      <History />
      <Certificates />
    </main>
  );
}
