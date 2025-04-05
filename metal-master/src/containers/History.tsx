"use client";

import Image from "next/image";
import { historyItems } from "@/consts/historyItems";
import { useTheme } from "@/components/providers/ThemeProvider";

export default function History() {
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
            Nasza Historia
            <div className="absolute -bottom-4 left-0 w-full h-1 bg-weldingRed transform -skew-x-12"></div>
          </h2>
          <p className={`mt-8 text-xl font-roboto max-w-3xl mx-auto leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Metal Master to firma z ponad 20-letnim doświadczeniem w tworzeniu bram, ogrodzeń i dekoracji
            metalowych. Nasze produkty cechuje precyzja wykonania i dbałość o detale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute -inset-4 bg-weldingRed/20 rounded-lg transform -rotate-2 group-hover:rotate-0 transition-transform duration-300"></div>
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="https://picsum.photos/800/500"
                  alt="Warsztat Metal Master"
                  width={800}
                  height={500}
                  className="w-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {historyItems.map((milestone, index) => (
              <div 
                key={index} 
                className={`relative pl-12 group p-6 rounded-lg transition-all duration-300 ${
                  isDark 
                    ? "hover:bg-gray-900/30" 
                    : "hover:bg-white/70"
                }`}
              >
                <div
                  className="absolute left-0 top-6 w-8 h-8 bg-weldingRed/10 rounded-lg flex items-center justify-center
                  group-hover:bg-weldingRed/20 transform group-hover:rotate-12 transition-all duration-300"
                >
                  <milestone.Icon className="text-weldingRed group-hover:text-ctaOrange transition-colors duration-300" />
                </div>

                <div className="relative">
                  <span className="text-ctaOrange font-oswald text-2xl block mb-2">{milestone.year}</span>
                  <h3 className={`font-oswald text-xl mb-2 ${isDark ? "text-white" : "text-steelBlue-dark"}`}>{milestone.title}</h3>
                  <p className={`font-roboto leading-relaxed transition-colors duration-300 ${
                    isDark 
                      ? "text-gray-400 group-hover:text-gray-300" 
                      : "text-gray-600 group-hover:text-gray-800"
                  }`}>
                    {milestone.description}
                  </p>
                </div>
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-weldingRed/30 group-hover:bg-weldingRed/50 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
