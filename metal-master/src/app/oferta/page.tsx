import OfferCard from "@/components/ui/OfferCard";

export default function Services() {
  const offers = [
    {
      title: "Bramy kute",
      description: "Eleganckie i trwałe bramy kute na zamówienie.",
      price: "od 5000 PLN",
      duration: "3-4 tygodnie",
      imageUrl: "https://picsum.photos/400/250?random=1",
    },
    {
      title: "Ogrodzenia panelowe",
      description: "Nowoczesne ogrodzenia panelowe dopasowane do Twojego domu.",
      price: "od 300 PLN/m²",
      duration: "2-3 tygodnie",
      imageUrl: "https://picsum.photos/400/250?random=2",
    },
    {
      title: "Balustrady metalowe",
      description: "Stylowe i solidne balustrady do schodów oraz balkonów.",
      price: "od 1500 PLN",
      duration: "2 tygodnie",
      imageUrl: "https://picsum.photos/400/250?random=3",
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center text-weldingRed mb-6">
        Oferta Metal Master
      </h1>
      <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10">
        Oferujemy wysokiej jakości wyroby metalowe, które łączą trwałość, estetykę i funkcjonalność. 
        Tworzymy bramy, ogrodzenia oraz dekoracje na zamówienie, dostosowane do indywidualnych potrzeb naszych klientów. 
        Sprawdź naszą ofertę i umów się na konsultację!
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {offers.map((offer, index) => (
          <OfferCard key={index} {...offer} />
        ))}
      </div>
    </div>
  );
}
