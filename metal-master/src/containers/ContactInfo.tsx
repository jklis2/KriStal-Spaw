import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaArrowRight } from 'react-icons/fa';

const contactItems = [
  {
    icon: FaPhone,
    title: "Telefon",
    content: "+48 513 485 664"
  },
  {
    icon: FaEnvelope,
    title: "Email",
    content: "krzysiek02.16@o2.pl"
  },
  {
    icon: FaMapMarkerAlt,
    title: "Adres",
    content: "ul. Pogodna 8\n34-311 Tresna"
  },
  {
    icon: FaClock,
    title: "Godziny Otwarcia",
    content: "Poniedziałek - Piątek: 8:00 - 16:00\nSobota: 9:00 - 14:00"
  }
];

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-weldingRed/10 flex items-center justify-center">
            <FaEnvelope className="text-weldingRed" />
          </div>
          <h2 className="text-3xl font-oswald relative text-steelBlue-dark dark:text-white">
            Informacje Kontaktowe
          </h2>
        </div>
        <div className="w-32 h-1 bg-gradient-to-r from-weldingRed to-ctaOrange mb-6"></div>
        <p className="font-roboto mb-8 text-gray-600 dark:text-gray-300">
          Skontaktuj się z nami, aby omówić Twój projekt. Jesteśmy dostępni od poniedziałku do piątku
          w godzinach 8:00-16:00.
        </p>
      </div>

      <div className="space-y-6 animate-fade-in-only">
        {contactItems.map((item, index) => (
          <div 
            key={index} 
            className="flex items-start space-x-4 group animate-fade-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transform transition-all duration-300 group-hover:scale-110 bg-weldingRed/10 group-hover:bg-weldingRed/20 dark:bg-weldingRed/20 dark:group-hover:bg-weldingRed/30">
              <item.icon className="text-weldingRed text-xl" />
            </div>
            <div className="flex-1">
              <h3 className="font-oswald text-xl mb-1 transition-colors duration-300 group-hover:text-weldingRed text-steelBlue-dark dark:text-white">{item.title}</h3>
              <p className="whitespace-pre-line font-roboto text-gray-600 dark:text-gray-300">{item.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div 
        className="mt-12 p-6 rounded-lg border animate-fade-up delay-500 transition-all duration-300 bg-white/70 border-gray-200 shadow-md hover:shadow-lg hover:shadow-weldingRed/10 dark:bg-gray-900/50 dark:border-gray-800 dark:hover:border-weldingRed/20 dark:shadow-none"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-weldingRed/10 flex items-center justify-center">
            <FaPhone className="text-weldingRed text-sm" />
          </div>
          <h3 className="text-xl font-oswald text-steelBlue-dark dark:text-white">
            Umów się na konsultację
          </h3>
        </div>
        <p className="font-roboto mb-4 text-gray-600 dark:text-gray-300">
          Chętnie pomożemy w realizacji Twojego projektu. Zadzwoń lub napisz do nas,
          aby umówić się na bezpłatną konsultację.
        </p>
        <a
          href="tel:+48123456789"
          className="inline-flex items-center px-6 py-3 bg-weldingRed text-white font-oswald
                   rounded-lg transition-all duration-300 hover:bg-ctaOrange hover:scale-[1.03] active:scale-[0.98]
                   group relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center">
            <FaPhone className="mr-2" />
            <span>Zadzwoń teraz</span>
            <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
          </span>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-ctaOrange to-weldingRed opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </a>
      </div>
    </div>
  );
}