"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 md:p-6 animate-fade-up">
      <div className="max-w-4xl mx-auto bg-background-light border border-metalSilver-dark/30 shadow-2xl rounded-2xl p-6 md:p-8">
        <h3 className="text-lg font-bold font-oswald mb-2">
          Ta strona używa plików cookies
        </h3>

        <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
          Używamy plików cookies oraz podobnych technologii, aby zapewnić prawidłowe
          działanie strony, analizować ruch i dostosowywać treści do Twoich
          preferencji. Klikając &bdquo;Akceptuję&rdquo;, wyrażasz zgodę na
          wykorzystanie wszystkich plików cookies. Możesz odmówić zgody, klikając
          &bdquo;Odrzucam&rdquo; &ndash; w takim przypadku będą używane wyłącznie
          niezbędne pliki cookies. Więcej informacji znajdziesz w naszej{" "}
          <Link
            href="/polityka-prywatnosci"
            className="underline text-weldingRed hover:text-ctaOrange transition-colors"
          >
            Polityce Prywatności
          </Link>{" "}
          oraz{" "}
          <Link
            href="/regulamin"
            className="underline text-weldingRed hover:text-ctaOrange transition-colors"
          >
            Regulaminie
          </Link>
          .
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleAccept}
            className="inline-flex items-center justify-center bg-weldingRed text-white px-6 py-3 rounded-lg font-medium hover:bg-ctaOrange transition-all duration-300 shadow-lg shadow-weldingRed/20 hover:shadow-ctaOrange/30 text-sm"
          >
            Akceptuję
          </button>

          <button
            onClick={handleReject}
            className="inline-flex items-center justify-center border border-steelBlue bg-transparent text-foreground px-6 py-3 rounded-lg font-medium hover:bg-metalSilver transition-all duration-300 text-sm"
          >
            Odrzucam
          </button>
        </div>
      </div>
    </div>
  );
}
