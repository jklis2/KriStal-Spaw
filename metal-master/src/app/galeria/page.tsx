import dynamic from "next/dynamic";
import SmallHeroSection from "@/components/ui/SmallHeroSection";
import { galleryItems, categories } from "@/consts/galleryItems";

const GalleryContent = dynamic(() => import("@/components/ui/GalleryContent"));

export default function Gallery() {
  return (
    <main>
      <SmallHeroSection
        title="Galeria Realizacji"
        description="Każdy produkt to połączenie rzemieślniczej precyzji z nowoczesnym designem."
      />
      <GalleryContent galleryItems={galleryItems} categories={categories} />
    </main>
  );
}
