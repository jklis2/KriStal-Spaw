import Image from "next/image";

interface OfferCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  imageUrl: string;
}

export default function OfferCard({
  title,
  description,
  price,
  duration,
  imageUrl,
}: OfferCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-all">
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={250}
        className="w-full h-48 object-cover rounded-md"
      />
      <h3 className="text-xl font-bold mt-4">{title}</h3>
      <p className="text-gray-600 my-2">{description}</p>
      <p className="font-semibold">
        Cena: <span className="text-weldingRed">{price}</span>
      </p>
      <p className="text-sm text-gray-500">Czas realizacji: {duration}</p>
      <button className="mt-4 bg-ctaOrange text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-all">
        Umów konsultację
      </button>
    </div>
  );
}
