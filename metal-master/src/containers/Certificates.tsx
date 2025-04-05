"use client";

import Image from "next/image";
import { FaCertificate } from "react-icons/fa";
import { certificatesItems } from "@/consts/certificatesItems";
import { useTheme } from "@/components/providers/ThemeProvider";

export default function Certificates() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  return (
    <section className={`py-24 relative overflow-hidden ${isDark ? "bg-industrialGray" : "bg-industrialLight"}`}>
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: isDark
              ? "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l7.9-7.9h-.828zm5.656 0L19.515 8.485 17.343 10.657l7.9-7.9h2.757zm5.656 0l-9.9 9.9-2.172 2.172 7.9-7.9h4.172zm5.656 0l-9.9 9.9-2.172 2.172 7.9-7.9h4.172z' fill='%23fff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E')"
              : "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l7.9-7.9h-.828zm5.656 0L19.515 8.485 17.343 10.657l7.9-7.9h2.757zm5.656 0l-9.9 9.9-2.172 2.172 7.9-7.9h4.172zm5.656 0l-9.9 9.9-2.172 2.172 7.9-7.9h4.172z' fill='%23000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E')",
          }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-bold font-oswald relative inline-block ${isDark ? "text-white" : "text-steelBlue-dark"}`}>
            Nasze Certyfikaty
            <div className="absolute -bottom-4 left-0 w-full h-1 bg-weldingRed transform -skew-x-12"></div>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {certificatesItems.map((cert, index) => (
            <div
              key={index}
              className={`group relative backdrop-blur-sm rounded-lg overflow-hidden
                       transform hover:-translate-y-2 transition-all duration-300 ${
                         isDark ? "bg-gray-900/50" : "bg-white/70 shadow-md"
                       }`}
            >
              <div className="aspect-square relative">
                <Image
                  src={cert.img}
                  alt={cert.name}
                  layout="fill"
                  objectFit="cover"
                  className="transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="relative">
                  <FaCertificate className="text-weldingRed text-4xl mb-3 transform group-hover:rotate-12 transition-transform duration-300" />
                  <div className="flex justify-between items-center mb-3">
                    <h3 className={`text-2xl font-oswald font-bold ${isDark ? "text-white" : "text-steelBlue-dark"}`}>
                      {cert.name}
                    </h3>
                    <span className="text-ctaOrange font-oswald">
                      {cert.year}
                    </span>
                  </div>
                  <p className={`font-roboto text-sm leading-relaxed transition-colors duration-300 ${
                    isDark 
                      ? "text-gray-300 group-hover:text-white" 
                      : "text-gray-600 group-hover:text-gray-800"
                  }`}>
                    {cert.description}
                  </p>
                </div>
              </div>

              <div className="absolute top-0 left-0 w-full h-1 bg-weldingRed transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
