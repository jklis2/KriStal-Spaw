import { FaDoorOpen, FaBorderAll, FaTree } from "react-icons/fa";

const services = [
  {
    title: "Bramy",
    description: "Solidne bramy kute, garażowe i automatyczne.",
    icon: <FaDoorOpen size={40} className="text-weldingRed" />,
  },
  {
    title: "Ogrodzenia",
    description: "Trwałe ogrodzenia panelowe, kute i betonowe.",
    icon: <FaBorderAll size={40} className="text-weldingRed" />,
  },
  {
    title: "Dekoracje",
    description: "Metalowe balustrady, meble ogrodowe i ozdoby.",
    icon: <FaTree size={40} className="text-weldingRed" />,
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-weldingRed mb-8">
          Czym się zajmujemy?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 hover:border-weldingRed border-2 border-transparent"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
