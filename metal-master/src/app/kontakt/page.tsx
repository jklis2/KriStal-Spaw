"use client";

import SmallHeroSection from "@/components/ui/SmallHeroSection";
import ContactForm from "@/containers/ContactForm";
import ContactInfo from "@/containers/ContactInfo";

export default function Contact() {
  return (
    <main className="bg-industrialGray min-h-screen">
      <SmallHeroSection
        title="Kontakt"
        description="Skontaktuj się z nami, aby omówić Twój projekt. Odpowiemy na wszystkie pytania i pomożemy w realizacji Twoich planów."
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
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
              <h2 className="text-3xl font-oswald text-white mb-6 relative inline-block">
                Napisz do nas
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-weldingRed transform -skew-x-12"></div>
              </h2>
              <ContactForm />
            </div>
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
      <section className="pb-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800">
            <div className="aspect-[21/9] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12643.756924484244!2d21.0122281!3d52.2296756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669d3f99a5%3A0x52b81c9f2707694d!2sWarszawa!5e0!3m2!1spl!2spl!4v1615997602232!5m2!1spl!2spl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
