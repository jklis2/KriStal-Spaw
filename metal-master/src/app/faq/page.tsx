"use client";

import SmallHeroSection from "@/components/ui/SmallHeroSection";
import FAQAccordion from "@/components/ui/FAQAccordion";

const faqItems = [
  {
    question: "Jakie są terminy realizacji zamówień?",
    answer:
      "Standardowy czas realizacji zamówień wynosi od 2 do 4 tygodni, w zależności od złożoności projektu. Każde zamówienie traktujemy indywidualnie i dokładny termin ustalamy po konsultacji z klientem.",
  },
  {
    question: "Czy oferujecie darmową wycenę?",
    answer:
      "Tak, oferujemy bezpłatną wycenę wszystkich projektów. Wystarczy skontaktować się z nami telefonicznie lub mailowo, a nasz specjalista przygotuje szczegółową kalkulację.",
  },
  {
    question: "Jakie materiały wykorzystujecie w produkcji?",
    answer:
      "Używamy wyłącznie wysokiej jakości stali i innych metali od sprawdzonych dostawców. Wszystkie nasze produkty są zabezpieczone antykorozyjnie i mogą być wykończone w różnych kolorach i teksturach.",
  },
  {
    question: "Czy zajmujecie się montażem?",
    answer:
      "Tak, oferujemy profesjonalny montaż wszystkich naszych produktów. Nasz zespół doświadczonych instalatorów zadba o prawidłowe i bezpieczne zamontowanie każdego elementu.",
  },
  {
    question: "Jaki jest zasięg Waszych usług?",
    answer:
      "Działamy na terenie całego województwa, a w przypadku większych projektów jesteśmy gotowi realizować zamówienia na terenie całego kraju.",
  },
  {
    question: "Czy udzielacie gwarancji na swoje produkty?",
    answer:
      "Tak, wszystkie nasze produkty objęte są gwarancją. Standardowy okres gwarancji wynosi 2 lata, z możliwością przedłużenia w zależności od produktu i warunków użytkowania.",
  },
];

export default function FAQ() {
  return (
    <main className="bg-industrialGray min-h-screen">
      <SmallHeroSection
        title="FAQ"
        description="Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące naszych usług i produktów"
      />
      <section className="py-24 relative">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0 bg-repeat"
            style={{
              backgroundImage:
                "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l7.9-7.9h-.828zm5.656 0L19.515 8.485 17.343 10.657l7.9-7.9h2.757zm5.656 0l-9.9 9.9-2.172 2.172 7.9-7.9h4.172zm5.656 0l-9.9 9.9-2.172 2.172 7.9-7.9h4.172z' fill='%23fff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E')",
            }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <FAQAccordion items={faqItems} />
        </div>
      </section>
    </main>
  );
}
