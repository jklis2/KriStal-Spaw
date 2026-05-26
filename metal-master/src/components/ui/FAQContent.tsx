import { FaQuestionCircle } from "react-icons/fa";
import FAQAccordion from "@/components/ui/FAQAccordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQContentProps {
  faqItems: FAQItem[];
}

export default function FAQContent({ faqItems }: FAQContentProps) {
  return (
    <section
      id="faq"
      className="py-24 relative overflow-hidden"
      aria-labelledby="faq-heading"
    >
      <div
        className="absolute top-0 right-0 w-72 h-72 bg-weldingRed/10 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/3 opacity-70"
        aria-hidden="true"
      />

      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-ctaOrange/10 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/3 opacity-70"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <header className="text-center mb-12 animate-fade-down">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-weldingRed/10 mb-4">
            <FaQuestionCircle className="text-weldingRed" aria-hidden="true" />
            <span className="text-sm font-medium uppercase text-weldingRed">
              CZĘSTO ZADAWANE PYTANIA
            </span>
          </div>

          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl font-oswald mb-4 text-gray-900"
          >
            Masz pytania? My mamy odpowiedzi!
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600">
            Poniżej znajdziesz odpowiedzi na najczęściej zadawane pytania
            dotyczące naszych usług i produktów. Jeśli nie znajdziesz odpowiedzi
            na swoje pytanie, skontaktuj się z nami bezpośrednio.
          </p>
        </header>

        <div
          className="animate-fade-in-only delay-200"
          aria-label="Lista najczęściej zadawanych pytań"
        >
          <FAQAccordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}