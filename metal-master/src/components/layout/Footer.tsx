import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-industrialGray text-white border-t-2 border-weldingRed">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-4">
            <h3 className="font-oswald text-xl font-bold text-weldingRed mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-ctaOrange">
              Kontakt
            </h3>
            <div className="font-roboto space-y-3">
              <p className="flex items-center justify-center md:justify-start gap-3 hover:text-ctaOrange transition-colors duration-300">
                <span className="bg-gray-700/30 p-2 rounded-lg">📍</span>
                ul. Przemysłowa 10, Warszawa
              </p>
              <p className="flex items-center justify-center md:justify-start gap-3 hover:text-ctaOrange transition-colors duration-300">
                <span className="bg-gray-700/30 p-2 rounded-lg">📞</span>
                +48 123 456 789
              </p>
              <p className="flex items-center justify-center md:justify-start gap-3 hover:text-ctaOrange transition-colors duration-300">
                <span className="bg-gray-700/30 p-2 rounded-lg">✉️</span>
                kontakt@metalmaster.pl
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-oswald text-xl font-bold text-weldingRed mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-ctaOrange">
              Szybkie linki
            </h3>
            <nav className="flex flex-col gap-3">
              <Link 
                href="/" 
                className="font-roboto inline-flex items-center hover:translate-x-2 hover:text-ctaOrange transition-all duration-300"
              >
                <span className="mr-2">→</span>
                Home
              </Link>
              {["O nas", "Oferta", "Galeria", "Blog", "FAQ", "Kontakt"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="font-roboto inline-flex items-center hover:translate-x-2 hover:text-ctaOrange transition-all duration-300"
                >
                  <span className="mr-2">→</span>
                  {item}
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-oswald text-xl font-bold text-weldingRed mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-ctaOrange">
              Social Media
            </h3>
            <div className="flex justify-center md:justify-start gap-6 mt-2">
              <Link 
                href="https://facebook.com" 
                target="_blank" 
                className="bg-gray-700/30 p-3 rounded-lg hover:bg-weldingRed hover:scale-110 transition-all duration-300"
              >
                <FaFacebook className="text-2xl" />
              </Link>
              <Link 
                href="https://instagram.com" 
                target="_blank"
                className="bg-gray-700/30 p-3 rounded-lg hover:bg-weldingRed hover:scale-110 transition-all duration-300"
              >
                <FaInstagram className="text-2xl" />
              </Link>
              <Link 
                href="https://linkedin.com" 
                target="_blank"
                className="bg-gray-700/30 p-3 rounded-lg hover:bg-weldingRed hover:scale-110 transition-all duration-300"
              >
                <FaLinkedin className="text-2xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-700 mt-12">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center font-roboto text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Metal Master. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
