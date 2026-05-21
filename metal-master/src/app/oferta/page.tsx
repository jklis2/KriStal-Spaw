import dynamic from "next/dynamic";
import SmallHeroSection from "@/components/ui/SmallHeroSection";
import { offers } from "@/consts/offerItems";

const OfferContent = dynamic(() => import("@/components/ui/OfferContent"));

export default function Offer() {
  return (
    <main>
      <SmallHeroSection
        title="Nasza Oferta"
        description="Wykonujemy bramy, ogrodzenia, balustrady oraz niestandardowe konstrukcje stalowe z montażem"
      />
      <OfferContent offers={offers} />
    </main>
  );
}
