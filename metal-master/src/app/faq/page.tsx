"use client"

import Image from "next/image";
import FAQAccordion from "@/components/ui/FAQAccordion";

export default function FAQ() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Najczęściej Zadawane Pytania</h1>
        <p className="text-lg text-gray-600 mt-2">
          Odpowiadamy na najczęściej zadawane pytania dotyczące naszych usług i procesów.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <FAQAccordion
            question="Jak długo trwa realizacja zamówienia?"
            answer="Czas realizacji zależy od rodzaju zamówienia. Standardowo wykonanie bramy zajmuje od 4 do 6 tygodni."
          />
          <FAQAccordion
            question="Czy oferujecie montaż?"
            answer="Tak, oferujemy kompleksową usługę, w tym transport i montaż."
          />
          <FAQAccordion
            question="Jakie materiały stosujecie?"
            answer="Wykorzystujemy wysokiej jakości stal, aluminium oraz elementy kutych ozdób."
          />
        </div>

        <div className="w-full md:w-1/2">
          <Image
            src="https://picsum.photos/500/300"
            alt="Przykładowy projekt"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
