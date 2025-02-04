import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-industrialGray text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-lg font-semibold">Kontakt</h3>
          <p>📍 Adres: ul. Przemysłowa 10, Warszawa</p>
          <p>📞 Telefon: +48 123 456 789</p>
          <p>✉️ Email: kontakt@metalmaster.pl</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Szybkie linki</h3>
          <nav className="flex flex-col gap-2">
            <Link href="/" className="hover:text-ctaOrange transition-colors">
              Home
            </Link>
            {["O nas", "Oferta", "Galeria", "FAQ", "Kontakt"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="hover:text-ctaOrange transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Social Media</h3>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <Link href="https://facebook.com" target="_blank">
              <FaFacebook className="text-2xl hover:text-ctaOrange transition-colors" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <FaInstagram className="text-2xl hover:text-ctaOrange transition-colors" />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <FaLinkedin className="text-2xl hover:text-ctaOrange transition-colors" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center text-sm border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Metal Master. Wszelkie prawa
        zastrzeżone.
      </div>
    </footer>
  );
}
