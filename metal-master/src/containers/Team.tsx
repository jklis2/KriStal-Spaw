"use client";

import Image from "next/image";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { teamItems } from "@/consts/teamItems";
import { useTheme } from "@/components/providers/ThemeProvider";

export default function Team() {
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
            Nasz Zespół
            <div className="absolute -bottom-4 left-0 w-full h-1 bg-weldingRed transform -skew-x-12"></div>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-weldingRed/20 rounded-lg transform -rotate-2 group-hover:rotate-0 transition-transform duration-300"></div>
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src={teamItems.img}
                alt={teamItems.name}
                width={400}
                height={500}
                className="w-full h-[500px] object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className={`text-3xl font-oswald font-bold mb-2 ${isDark ? "text-white" : "text-steelBlue-dark"}`}>{teamItems.name}</h3>
              <p className="text-xl font-oswald text-weldingRed">{teamItems.role}</p>
            </div>
            <p className={`font-roboto leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {teamItems.description}
            </p>
            <div className={`border-t pt-6 ${isDark ? "border-gray-700" : "border-gray-300"}`}>
              <h4 className={`text-xl font-oswald mb-4 ${isDark ? "text-white" : "text-steelBlue-dark"}`}>Specjalizacje</h4>
              <div className="grid grid-cols-2 gap-3">
                {teamItems.expertise.map((skill, index) => (
                  <div
                    key={index}
                    className={`px-4 py-2 rounded-lg font-roboto transition-all duration-300 ${
                      isDark 
                        ? "bg-gray-900/50 text-gray-300 hover:bg-weldingRed/10 hover:text-white" 
                        : "bg-white/70 text-gray-600 hover:bg-weldingRed/5 hover:text-steelBlue-dark"
                    }`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div className={`border-t pt-6 ${isDark ? "border-gray-700" : "border-gray-300"}`}>
              <h4 className={`text-xl font-oswald mb-4 ${isDark ? "text-white" : "text-steelBlue-dark"}`}>Kontakt</h4>
              <div className="space-y-3">
                <a
                  href={`tel:${teamItems.contact.phone}`}
                  className={`flex items-center gap-3 transition-colors duration-300 ${
                    isDark 
                      ? "text-gray-300 hover:text-ctaOrange" 
                      : "text-gray-600 hover:text-ctaOrange"
                  }`}
                >
                  <FaPhone className="text-weldingRed" />
                  <span className="font-roboto">{teamItems.contact.phone}</span>
                </a>
                <a
                  href={`mailto:${teamItems.contact.email}`}
                  className={`flex items-center gap-3 transition-colors duration-300 ${
                    isDark 
                      ? "text-gray-300 hover:text-ctaOrange" 
                      : "text-gray-600 hover:text-ctaOrange"
                  }`}
                >
                  <FaEnvelope className="text-weldingRed" />
                  <span className="font-roboto">{teamItems.contact.email}</span>
                </a>
                <a
                  href={`https://${teamItems.contact.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 transition-colors duration-300 ${
                    isDark 
                      ? "text-gray-300 hover:text-ctaOrange" 
                      : "text-gray-600 hover:text-ctaOrange"
                  }`}
                >
                  <FaLinkedin className="text-weldingRed" />
                  <span className="font-roboto">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
