import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface OfferCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
}

export default function OfferCard({
  title,
  description,
  image,
  features,
}: OfferCardProps) {
  return (
    <div
      className="group relative bg-gray-900/50 rounded-lg overflow-hidden backdrop-blur-sm
                 transform hover:-translate-y-2 transition-all duration-300"
    >
      <div className="aspect-video relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
      </div>

      <div className="p-8 relative">
        <h3 className="text-3xl font-bold font-oswald text-white mb-4">
          {title}
        </h3>
        <p className="text-gray-300 font-roboto mb-6 leading-relaxed">
          {description}
        </p>

        <ul className="space-y-3 mb-8">
          {features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-center text-gray-300 font-roboto"
            >
              <FaArrowRight className="text-weldingRed mr-3 text-sm" />
              {feature}
            </li>
          ))}
        </ul>
        <Link href="/kontakt" legacyBehavior>
          <a
            className="w-full py-4 px-8 bg-weldingRed/10 hover:bg-weldingRed/20 
               text-white font-oswald text-lg rounded-lg
               transition-all duration-300 flex items-center justify-center group"
          >
            Dowiedz się więcej
            <FaArrowRight className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
          </a>
        </Link>
      </div>
      <div className="absolute top-0 left-0 w-full h-1 bg-weldingRed transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
    </div>
  );
}
