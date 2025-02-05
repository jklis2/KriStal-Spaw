import Image from "next/image";

const certificates = [
  { name: "ISO 9001", img: "https://picsum.photos/150" },
  { name: "Certyfikat Spawalniczy", img: "https://picsum.photos/151" },
  { name: "Atest Jakości", img: "https://picsum.photos/152" },
];

export default function Certificates() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-weldingRed">
          Nasze Certyfikaty
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {certificates.map((cert, index) => (
            <div key={index} className="p-4 shadow-lg rounded-lg">
              <Image
                src={cert.img}
                alt={cert.name}
                width={150}
                height={150}
                className="mx-auto"
              />
              <h3 className="mt-4 text-xl font-semibold">{cert.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
