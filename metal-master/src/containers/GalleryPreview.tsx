import Image from "next/image";

export default function GalleryPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-weldingRed mb-8">
          Nasze Realizacje
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative w-full h-80 md:h-full">
            <Image
              src="https://picsum.photos/600/400?random=1"
              alt="Ogrodzenie przemysłowe"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="grid grid-rows-3 gap-4">
            <div className="relative w-full h-40">
              <Image
                src="https://picsum.photos/400/300?random=2"
                alt="Brama"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="relative w-full h-40">
              <Image
                src="https://picsum.photos/400/300?random=3"
                alt="Dekoracja metalowa"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="relative w-full h-40">
              <Image
                src="https://picsum.photos/400/300?random=4"
                alt="Spawacz przy pracy"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <a
            href="/gallery"
            className="bg-ctaOrange text-white px-6 py-3 text-lg font-semibold rounded-lg transition-transform transform hover:scale-105"
          >
            Zobacz więcej projektów
          </a>
        </div>
      </div>
    </section>
  );
}
