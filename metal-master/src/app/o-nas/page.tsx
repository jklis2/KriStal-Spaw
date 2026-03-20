//import dynamic from "next/dynamic";
import SmallHeroSection from "@/components/ui/SmallHeroSection";

// const History = dynamic(() => import("@/containers/History"));

export default function About() {
  return (
    <main>
      <SmallHeroSection
        title="O nas"
        description="Jesteśmy firmą z praktycznym doświadczeniem w pracy z metalem. Stawiamy na dokładność, solidność i indywidualne podejście do każdego projektu."
      />
    </main>
  );
}
