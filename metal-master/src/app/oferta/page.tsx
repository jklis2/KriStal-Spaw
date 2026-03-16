import dynamic from "next/dynamic";
import SmallHeroSection from "@/components/ui/SmallHeroSection";
import { offers } from "@/consts/offerItems";

const OfferContent = dynamic(() => import("@/components/ui/OfferContent"));

export default function Offer() {
  return (
    <main>
      <SmallHeroSection
        title="Nasza Oferta"
        description="Poznaj nasze rzemieślnicze produkty metalowe, tworzone z pasją i dbałością o najdrobniejsze detale"
      />
      <OfferContent offers={offers} />
    </main>
  );
}
