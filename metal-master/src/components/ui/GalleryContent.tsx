"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image, { getImageProps } from "next/image";
import {
  FaCamera,
  FaChevronLeft,
  FaChevronRight,
  FaFilter,
  FaSearch,
} from "react-icons/fa";
import GalleryCard from "@/components/ui/GalleryCard";

import type { GalleryItem } from "@/consts/galleryItems";

interface GalleryContentProps {
  galleryItems: GalleryItem[];
  categories: string[];
}

// Te same parametry dla podglądu i preloadu: przeglądarka korzysta z tej samej wersji obrazu.
const lightboxImageOptions = {
  fill: true,
  sizes: "(min-width: 1184px) 1152px, calc(100vw - 32px)",
  quality: 85,
} as const;

export default function GalleryContent({
  galleryItems,
  categories,
}: GalleryContentProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Wszystkie");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [imageStatus, setImageStatus] = useState<{
    src: string;
    status: "loaded" | "error";
  } | null>(null);

  const filteredItems = useMemo(
    () =>
      galleryItems.filter(
        (item) =>
          selectedCategory === "Wszystkie" ||
          item.category === selectedCategory
      ),
    [galleryItems, selectedCategory]
  );

  // Lightbox obejmuje wszystkie realizacje, niezależnie od filtra kafelków.
  const lightboxImages = useMemo(
    () => galleryItems.flatMap((item) =>
      item.images.map((image) => ({ ...item, image }))
    ),
    [galleryItems]
  );

  const activeItem =
    activeImageIndex !== null ? lightboxImages[activeImageIndex] : null;

  useEffect(() => {
    // Sąsiedzi nie konkurują z aktualnym zdjęciem o pierwsze pobranie.
    if (activeImageIndex === null || !activeItem ||
        imageStatus?.src !== activeItem.image || imageStatus.status !== "loaded") return;

    const neighborSources = new Set([
      lightboxImages[(activeImageIndex + 1) % lightboxImages.length].image,
      lightboxImages[(activeImageIndex - 1 + lightboxImages.length) % lightboxImages.length].image,
    ]);
    neighborSources.delete(activeItem.image);

    const preloads = [...neighborSources].map((src) => {
      const { props } = getImageProps({ ...lightboxImageOptions, src, alt: "" });
      const image = new window.Image();
      image.decoding = "async";
      image.fetchPriority = "low";
      image.sizes = props.sizes ?? "";
      image.srcset = props.srcSet ?? "";
      image.src = props.src;
      return image;
    });

    return () => {
      preloads.forEach((image) => {
        image.removeAttribute("src");
        image.removeAttribute("srcset");
      });
    };
  }, [activeImageIndex, activeItem, imageStatus, lightboxImages]);

  const closePreview = useCallback(() => {
    setActiveImageIndex(null);
  }, []);

  const showPreviousImage = useCallback(() => {
    setActiveImageIndex((currentIndex) => {
      if (currentIndex === null || lightboxImages.length === 0) {
        return currentIndex;
      }

      return currentIndex === 0 ? lightboxImages.length - 1 : currentIndex - 1;
    });
  }, [lightboxImages.length]);

  const showNextImage = useCallback(() => {
    setActiveImageIndex((currentIndex) => {
      if (currentIndex === null || lightboxImages.length === 0) {
        return currentIndex;
      }

      return currentIndex === lightboxImages.length - 1 ? 0 : currentIndex + 1;
    });
  }, [lightboxImages.length]);

  useEffect(() => {
    if (activeImageIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePreview();
      }

      if (event.key === "ArrowLeft") {
        showPreviousImage();
      }

      if (event.key === "ArrowRight") {
        showNextImage();
      }
    };

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImageIndex, closePreview, showNextImage, showPreviousImage]);

  return (
    <section
      id="realizacje"
      className="py-24 relative overflow-hidden"
      aria-labelledby="gallery-heading"
    >
      <div
        className="absolute top-0 right-0 w-72 h-72 bg-weldingRed/10 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/3 opacity-70"
        aria-hidden="true"
      />

      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-ctaOrange/10 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/3 opacity-70"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <header className="text-center mb-12 animate-fade-down">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-weldingRed/10 mb-4">
            <FaCamera className="text-weldingRed" aria-hidden="true" />
            <span className="text-sm font-medium uppercase text-weldingRed">
              NASZE REALIZACJE
            </span>
          </div>

          <h2
            id="gallery-heading"
            className="text-3xl md:text-4xl font-oswald mb-4 text-gray-900"
          >
            Przeglądaj nasze najlepsze projekty
          </h2>

          <p className="max-w-2xl mx-auto mb-8 text-gray-600">
            Filtruj według kategorii, aby zobaczyć projekty, które Cię
            interesują
          </p>

          <div
            className="flex flex-wrap justify-center gap-3 relative z-10 mb-12 animate-fade-in-only delay-200"
            aria-label="Filtrowanie realizacji według kategorii"
          >
            <div
              className="flex flex-wrap justify-center gap-2 md:gap-4 w-full max-w-4xl mx-auto"
              role="group"
              aria-label="Kategorie realizacji"
            >
              {categories.map((category, index) => {
                const isSelected = category === selectedCategory;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(category);
                      setActiveImageIndex(null);
                    }}
                    aria-pressed={isSelected}
                    aria-label={`Pokaż realizacje z kategorii: ${category}`}
                    className={`px-6 py-3 rounded-lg font-oswald text-lg transition-all duration-300 flex items-center gap-2 animate-fade-up hover:scale-105 active:scale-[0.98]
                      ${
                        isSelected
                          ? "bg-weldingRed text-white shadow-md shadow-weldingRed/20"
                          : "bg-white text-gray-700 border border-gray-200 hover:bg-weldingRed/10 hover:text-weldingRed"
                      }`}
                    style={{ animationDelay: `${100 + index * 50}ms` }}
                  >
                    {isSelected && (
                      <FaFilter className="text-sm" aria-hidden="true" />
                    )}
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </header>

        <p className="sr-only" aria-live="polite">
          Liczba wyświetlonych realizacji: {filteredItems.length}
        </p>

        {filteredItems.length > 0 ? (
          <ul
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0 m-0"
            aria-label={`Lista realizacji dla kategorii: ${selectedCategory}`}
          >
            {filteredItems.map((item, index) => (
              <li key={item.id}>
                <GalleryCard
                  title={item.title}
                  category={item.category}
                  image={item.images[0]}
                  imageCount={item.images.length}
                  index={index}
                  onOpen={() => setActiveImageIndex(
                    lightboxImages.findIndex((image) => image.id === item.id)
                  )}
                />
              </li>
            ))}
          </ul>
        ) : (
          <div
            className="text-center py-16 animate-fade-in-only"
            role="status"
            aria-live="polite"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-weldingRed/10 flex items-center justify-center">
              <FaSearch
                className="text-weldingRed text-2xl"
                aria-hidden="true"
              />
            </div>

            <h3 className="text-2xl font-oswald mb-2 text-gray-900">
              Brak projektów w tej kategorii
            </h3>

            <p className="text-gray-600">
              Spróbuj wybrać inną kategorię lub sprawdź później
            </p>
          </div>
        )}
      </div>

      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          onClick={closePreview}
        >
          <button
            type="button"
            onClick={closePreview}
            className="absolute top-5 right-5 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-3xl text-white transition hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Zamknij podgląd zdjęcia"
          >
            ×
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPreviousImage();
            }}
            className="absolute left-4 md:left-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Poprzednie zdjęcie"
          >
            <FaChevronLeft aria-hidden="true" />
          </button>

          <div
            className="relative flex h-[90vh] w-full max-w-6xl flex-col"
            onClick={(event) => event.stopPropagation()}
          >
            <h3
              id="lightbox-title"
              className="mb-4 px-12 text-center font-oswald text-xl md:text-2xl text-white"
              aria-live="polite"
            >
              {activeItem.title}
            </h3>
            <div className="relative min-h-0 flex-1">
              {imageStatus?.src !== activeItem.image && (
                <div className="absolute inset-0 flex items-center justify-center" role="status">
                  <span className="h-8 w-8 rounded-full border-2 border-white/20 border-t-white/80 motion-safe:animate-spin" aria-hidden="true" />
                  <span className="sr-only">Ładowanie zdjęcia…</span>
                </div>
              )}
              {imageStatus?.src === activeItem.image && imageStatus.status === "error" && (
                <p className="absolute inset-0 flex items-center justify-center text-sm text-white/80" role="status">
                  Nie udało się załadować zdjęcia. Spróbuj przejść do kolejnego.
                </p>
              )}
              <Image
                key={activeItem.image}
                {...lightboxImageOptions}
                src={activeItem.image}
                alt={`${activeItem.title} - ${activeItem.category}`}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                onLoad={() => setImageStatus({ src: activeItem.image, status: "loaded" })}
                onError={() => setImageStatus({ src: activeItem.image, status: "error" })}
                className="object-contain"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNextImage();
            }}
            className="absolute right-4 md:right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Następne zdjęcie"
          >
            <FaChevronRight aria-hidden="true" />
          </button>
        </div>
      )}
    </section>
  );
}
