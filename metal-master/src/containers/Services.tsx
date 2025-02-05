"use client";

import { servicesItems } from "@/consts/servicesItems";

export default function Services() {
  return (
    <section className="py-24 bg-industrialGray relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l7.9-7.9h-.828zm5.656 0L19.515 8.485 17.343 10.657l7.9-7.9h2.757zm5.656 0l-9.9 9.9-2.172 2.172 7.9-7.9h4.172zm5.656 0l-9.9 9.9-2.172 2.172 7.9-7.9h4.172z' fill='%23fff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E')",
          }}
        ></div>
      </div>
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold font-oswald text-white relative inline-block">
            Czym się zajmujemy?
            <div className="absolute -bottom-4 left-0 w-full h-1 bg-weldingRed transform -skew-x-12"></div>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {servicesItems.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 group hover:bg-weldingRed/10 
                       transform hover:-translate-y-2 transition-all duration-300 border-l-4 border-weldingRed"
            >
              <div className="bg-weldingRed/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 
                            group-hover:bg-weldingRed/20 transform group-hover:rotate-6 transition-all duration-300">
                <service.Icon 
                  className="text-weldingRed group-hover:text-ctaOrange transition-colors duration-300" 
                  size={32}
                />
              </div>
              <h3 className="text-2xl font-oswald font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 font-roboto leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
