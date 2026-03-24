import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import SectionHeader from "@/components/ui/SectionHeader";
import CTAButton from "@/components/ui/CTAButton";
import { galleryItems, fallbackImages } from "@/consts/galleryPreviewItems";

export default function GalleryPreview() {
  return (
    <section
      className="py-24 relative bg-industrialGray-light content-auto"
    >
      <div className="absolute top-20 right-0 w-64 h-64 bg-weldingRed/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-48 h-48 bg-ctaOrange/5 rounded-full filter blur-3xl"></div>
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Nasze Realizacje"
          subtitle="GALERIA"
        >
          Prezentujemy wybrane projekty z naszego portfolio. Każda realizacja to
          połączenie precyzji, jakości i estetyki.
        </SectionHeader>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative w-full h-[600px] group overflow-hidden rounded-2xl shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition-all duration-500 z-10"></div>
            <Image
              src={
                galleryItems[0].src.startsWith("/")
                  ? fallbackImages[0]
                  : galleryItems[0].src
              }
              alt={galleryItems[0].alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={70}
              loading="lazy"
              className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-x-0 bottom-0 z-20 p-8 transform transition-transform duration-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-weldingRed/80 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {galleryItems[0].category}
                </span>
              </div>
              <h3 className="text-white text-2xl font-oswald font-bold mb-2">
                {galleryItems[0].alt}
              </h3>
              <p className="text-gray-200 mb-4 max-w-md">
                Wykonanie bramy wjazdowej na najwyższym poziomie. Przeprowadzimy Cię przez cały proces – od pomiaru i oględzin, przez szczegółowe ustalenia, aż po montaż.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/galeria"
                  className="inline-flex items-center gap-2 bg-weldingRed/90 hover:bg-weldingRed text-white px-4 py-2 rounded-lg transition-all duration-300"
                >
                  <span>Więcej zdjęć</span>
                  <FaArrowRight className="text-sm" />
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-3 gap-6">
            {galleryItems.slice(1).map((img, index) => (
              <div
                key={index}
                className="relative w-full h-[180px] group overflow-hidden rounded-xl shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/70 transition-all duration-300 z-10"></div>
                <Image
                  src={
                    img.src.startsWith("/")
                      ? fallbackImages[index + 1]
                      : img.src
                  }
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={65}
                  loading="lazy"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 z-20 p-4">
                  <span className="inline-block bg-weldingRed/80 text-white text-xs font-bold px-2 py-1 rounded-full mb-2">
                    {img.category}
                  </span>
                  <h3 className="text-white text-lg font-oswald font-bold group-hover:text-weldingRed transition-colors duration-300">
                    {img.alt}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center">
          <p className="text-lg mb-6 max-w-2xl text-center text-gray-700">
            Każdą bramę realizujemy na wymiar, dopasowując projekt do potrzeb klienta. Konstrukcja wykonywana jest ze stali poddawanej ocynkowaniu ogniowemu. Każda brama posiada otwory technologiczne, co daje pewność, że elementy zostały prawidłowo ocynkowane i zapewniają pełną ochronę antykorozyjną oraz wysoką jakość wykonania. Całość wykańczamy lakierowaniem proszkowym oraz uzupełniamy o automatykę i precyzyjny montaż.
          </p>
          <CTAButton href="/galeria" icon={<FaArrowRight />}>
            Zobacz więcej projektów
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
