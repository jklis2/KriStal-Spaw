import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-oswald text-white mb-6 relative inline-block">
          Informacje Kontaktowe
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-weldingRed transform -skew-x-12"></div>
        </h2>
        <p className="text-gray-300 font-roboto mb-8">
          Skontaktuj się z nami, aby omówić Twój projekt. Jesteśmy dostępni od poniedziałku do piątku
          w godzinach 8:00-16:00.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-weldingRed/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <FaPhone className="text-weldingRed text-xl" />
          </div>
          <div>
            <h3 className="text-white font-oswald text-xl mb-1">Telefon</h3>
            <p className="text-gray-300 font-roboto">+48 123 456 789</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-weldingRed/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <FaEnvelope className="text-weldingRed text-xl" />
          </div>
          <div>
            <h3 className="text-white font-oswald text-xl mb-1">Email</h3>
            <p className="text-gray-300 font-roboto">kontakt@metalmaster.pl</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-weldingRed/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <FaMapMarkerAlt className="text-weldingRed text-xl" />
          </div>
          <div>
            <h3 className="text-white font-oswald text-xl mb-1">Adres</h3>
            <p className="text-gray-300 font-roboto">
              ul. Metalowa 123<br />
              00-001 Warszawa
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-weldingRed/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <FaClock className="text-weldingRed text-xl" />
          </div>
          <div>
            <h3 className="text-white font-oswald text-xl mb-1">Godziny Otwarcia</h3>
            <div className="text-gray-300 font-roboto">
              <p>Poniedziałek - Piątek: 8:00 - 16:00</p>
              <p>Sobota - Niedziela: Zamknięte</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 p-6 bg-gray-900/50 rounded-lg backdrop-blur-sm border border-gray-800">
        <h3 className="text-xl font-oswald text-white mb-4">Umów się na konsultację</h3>
        <p className="text-gray-300 font-roboto mb-4">
          Chętnie pomożemy w realizacji Twojego projektu. Zadzwoń lub napisz do nas,
          aby umówić się na bezpłatną konsultację.
        </p>
        <a
          href="tel:+48123456789"
          className="inline-flex items-center px-6 py-3 bg-weldingRed text-white font-oswald
                   rounded-lg transition-all duration-300 hover:bg-weldingRed/90
                   transform hover:-translate-y-1"
        >
          <FaPhone className="mr-2" />
          Zadzwoń teraz
        </a>
      </div>
    </div>
  );
}