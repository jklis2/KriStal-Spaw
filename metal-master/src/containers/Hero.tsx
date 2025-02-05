import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-industrialGray m-0 p-0">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://picsum.photos/1920/1080"
          alt="Placeholder image"
          layout="fill"
          objectFit="cover"
          priority
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div className="relative z-10 text-center text-white max-w-5xl w-full">
        <h1 className="text-5xl md:text-6xl font-bold font-oswald text-shadow-red">
          Mistrzostwo w Metalu
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Profesjonalne bramy, ogrodzenia i dekoracje od 2005 roku
        </p>
        <a
          href="/gallery"
          className="mt-6 inline-block bg-ctaOrange text-white px-6 py-3 text-lg font-semibold rounded-lg transition-transform transform hover:scale-105 animate-pulse"
        >
          Zobacz nasze realizacje
        </a>
      </div>
    </section>
  );
}
