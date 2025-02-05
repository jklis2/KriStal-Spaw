export default function ContactInfo() {
    return (
      <div className="bg-industrialGray text-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Dane kontaktowe</h2>
        <p className="mb-2">📍 Adres: ul. Przemysłowa 12, 00-001 Warszawa</p>
        <p className="mb-2">📞 Telefon: +48 123 456 789</p>
        <p className="mb-4">✉️ Email: kontakt@metal-master.pl</p>
  
        <div className="w-full h-64 rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12643.756924484244!2d21.0122281!3d52.2296756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669d3f99a5%3A0x52b81c9f2707694d!2sWarszawa!5e0!3m2!1spl!2spl!4v1615997602232!5m2!1spl!2spl"
            allowFullScreen
            loading="lazy"
            title="Lokalizacja Metal Master"
          ></iframe>
        </div>
      </div>
    );
  }
  