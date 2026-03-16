import Hero from "@/containers/Hero";
import Services from "@/containers/Services";
import GalleryPreview from "@/containers/GalleryPreview";
import WhyUs from "@/containers/WhyUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <GalleryPreview />
      <WhyUs />
    </div>
  );
}
