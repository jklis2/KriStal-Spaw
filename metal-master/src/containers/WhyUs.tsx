import { FaCheckCircle } from "react-icons/fa";

const benefits = [
  { text: "20 lat doświadczenia" },
  { text: "Gwarancja jakości" },
  { text: "Projekty na wymiar" },
];

export default function WhyUs() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-weldingRed mb-8">
          Dlaczego My?
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-4">
              <FaCheckCircle className="text-weldingRed text-3xl" />
              <p className="text-lg font-medium text-gray-800">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
