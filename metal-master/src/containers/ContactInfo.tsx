import {
  FaArrowRight,
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const PHONE_NUMBER = "+48 513 485 664";
const PHONE_HREF = "tel:+48513485664";
const EMAIL_ADDRESS = "krzysiekraczka08@gmail.com";
const EMAIL_HREF = `mailto:${EMAIL_ADDRESS}`;

const contactItems = [
  {
    icon: FaPhone,
    title: "Telefon",
    content: PHONE_NUMBER,
    href: PHONE_HREF,
    ariaLabel: `Zadzwoń pod numer ${PHONE_NUMBER}`,
  },
  {
    icon: FaEnvelope,
    title: "Email",
    content: EMAIL_ADDRESS,
    href: EMAIL_HREF,
    ariaLabel: `Wyślij email na adres ${EMAIL_ADDRESS}`,
  },
  {
    icon: FaMapMarkerAlt,
    title: "Adres",
    content: "ul. Pogodna 8\n34-311 Tresna",
  },
  {
    icon: FaClock,
    title: "Godziny Otwarcia",
    content: "Poniedziałek - Piątek: 8:00 - 16:00\nSobota: 9:00 - 14:00",
  },
];

export default function ContactInfo() {
  return (
    <section className="space-y-8" aria-labelledby="contact-info-heading">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-10 h-10 rounded-full bg-weldingRed/10 flex items-center justify-center"
            aria-hidden="true"
          >
            <FaEnvelope className="text-weldingRed" />
          </div>

          <h2
            id="contact-info-heading"
            className="text-3xl font-oswald relative text-gray-900"
          >
            Informacje Kontaktowe
          </h2>
        </div>

        <div
          className="w-32 h-1 bg-gradient-to-r from-weldingRed to-ctaOrange mb-6"
          aria-hidden="true"
        />

        <p className="font-roboto mb-8 text-gray-600">
          Skontaktuj się z nami, aby omówić Twój projekt. Jesteśmy dostępni od
          poniedziałku do piątku w godzinach 8:00-16:00.
        </p>
      </div>

      <address className="space-y-6 animate-fade-in-only not-italic">
        {contactItems.map((item, index) => (
          <div
            key={item.title}
            className="flex items-start space-x-4 group animate-fade-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transform transition-all duration-300 group-hover:scale-110 bg-weldingRed/20 group-hover:bg-weldingRed/30"
              aria-hidden="true"
            >
              <item.icon className="text-weldingRed text-xl" />
            </div>

            <div className="flex-1">
              <h3 className="font-oswald text-xl mb-1 transition-colors duration-300 group-hover:text-weldingRed text-gray-900">
                {item.title}
              </h3>

              {item.href ? (
                <a
                  href={item.href}
                  aria-label={item.ariaLabel}
                  className="whitespace-pre-line font-roboto text-gray-600 transition-colors duration-300 hover:text-weldingRed focus:outline-none focus:text-weldingRed"
                >
                  {item.content}
                </a>
              ) : (
                <p className="whitespace-pre-line font-roboto text-gray-600">
                  {item.content}
                </p>
              )}
            </div>
          </div>
        ))}
      </address>

      <div className="mt-12 p-6 rounded-lg border animate-fade-up delay-500 transition-all duration-300 bg-white border-gray-200 hover:border-weldingRed/30 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-8 h-8 rounded-full bg-weldingRed/10 flex items-center justify-center"
            aria-hidden="true"
          >
            <FaPhone className="text-weldingRed text-sm" />
          </div>

          <h3 className="text-xl font-oswald text-gray-900">
            Umów się na konsultację
          </h3>
        </div>

        <p className="font-roboto mb-4 text-gray-600">
          Chętnie pomożemy w realizacji Twojego projektu. Zadzwoń lub napisz do
          nas, aby umówić się na bezpłatną konsultację.
        </p>

        <a
          href={PHONE_HREF}
          aria-label={`Zadzwoń teraz pod numer ${PHONE_NUMBER}`}
          className="inline-flex items-center px-6 py-3 bg-weldingRed text-white font-oswald
                   rounded-lg transition-all duration-300 hover:bg-ctaOrange hover:scale-[1.03] active:scale-[0.98]
                   group relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center">
            <FaPhone className="mr-2" aria-hidden="true" />
            <span>Zadzwoń teraz</span>
            <FaArrowRight
              className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
              aria-hidden="true"
            />
          </span>

          <div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-ctaOrange to-weldingRed opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  );
}