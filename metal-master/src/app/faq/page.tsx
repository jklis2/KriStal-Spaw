import dynamic from "next/dynamic";
import SmallHeroSection from "@/components/ui/SmallHeroSection";
import { faqItems } from "@/consts/faqItems";

const FAQContent = dynamic(() => import("@/components/ui/FAQContent"));

export default function FAQ() {
  return (
    <main>
      <SmallHeroSection
        title="FAQ"
        description="Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące naszych usług i produktów"
      />
      <FAQContent faqItems={faqItems} />
    </main>
  );
}
