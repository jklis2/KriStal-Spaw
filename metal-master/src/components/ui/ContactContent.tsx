"use client";

import { useState, useEffect, useRef } from "react";
import { FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import ContactForm from "@/containers/ContactForm";
import ContactInfo from "@/containers/ContactInfo";

export default function ContactContent() {
  const [shouldLoadMap, setShouldLoadMap] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoadMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    if (mapContainerRef.current) {
      observer.observe(mapContainerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-weldingRed/10 blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-ctaOrange/10 blur-3xl"></div>
        
        <div className="text-center mb-12 max-w-3xl mx-auto px-6 animate-fade-up">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-weldingRed/10 mb-4">
            <FaEnvelope className="text-weldingRed" />
            <span className="text-sm font-medium uppercase text-weldingRed">SKONTAKTUJ SIĘ Z NAMI</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-oswald mb-4 text-gray-900">
            Jesteśmy do Twojej dyspozycji
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div 
              className="p-8 rounded-lg border animate-fade-left delay-200 transition-all duration-300 bg-white border-gray-200 hover:border-weldingRed/30 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-weldingRed/10 flex items-center justify-center">
                  <FaEnvelope className="text-weldingRed" />
                </div>
                <h2 className="text-3xl font-oswald relative text-gray-900">
                  Napisz do nas
                </h2>
              </div>
              <div className="w-32 h-1 bg-gradient-to-r from-weldingRed to-ctaOrange mb-8"></div>
              <ContactForm />
            </div>
            <div className="animate-fade-right delay-300">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
      <section className="pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 animate-fade-up delay-400">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-weldingRed/10 flex items-center justify-center">
              <FaMapMarkedAlt className="text-weldingRed" />
            </div>
            <h2 className="text-3xl font-oswald text-gray-900">
              Gdzie nas znaleźć
            </h2>
          </div>
          
          <div 
            ref={mapContainerRef}
            className="rounded-lg overflow-hidden border transition-all duration-300 bg-white border-gray-200 hover:border-weldingRed/30 shadow-sm"
          >
            <div className="aspect-[21/9] relative">
              {shouldLoadMap ? (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5156.889898578675!2d19.212404945663295!3d49.740071191372664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47169d60ef992f79%3A0xe045b92dd3eda56b!2sKriStal-Spaw%20Krzysztof%20R%C4%85czka!5e0!3m2!1spl!2spl!4v1779439707769!5m2!1spl!2spl"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <FaMapMarkedAlt className="text-weldingRed text-4xl animate-pulse" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
