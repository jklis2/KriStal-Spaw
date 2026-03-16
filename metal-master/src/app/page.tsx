import dynamic from "next/dynamic";
import Hero from "@/containers/Hero";

const Services = dynamic(() => import("@/containers/Services"));
const GalleryPreview = dynamic(() => import("@/containers/GalleryPreview"));
const WhyUs = dynamic(() => import("@/containers/WhyUs"));

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
