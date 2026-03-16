import dynamic from "next/dynamic";
import SmallHeroSection from "@/components/ui/SmallHeroSection";

const ContactContent = dynamic(() => import("@/components/ui/ContactContent"));

export default function Contact() {
  return (
    <main>
      <SmallHeroSection
        title="Kontakt"
        description="Skontaktuj się z nami, aby omówić Twój projekt. Odpowiemy na wszystkie pytania i pomożemy w realizacji Twoich planów."
      />
      <ContactContent />
    </main>
  );
}
