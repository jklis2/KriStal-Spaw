import dynamic from "next/dynamic";
import Hero from "@/containers/Hero";

const Services = dynamic(() => import("@/containers/Services"), {
  loading: () => <section className="py-24 min-h-[600px]" />,
});
const GalleryPreview = dynamic(() => import("@/containers/GalleryPreview"), {
  loading: () => <section className="py-24 min-h-[700px]" />,
});
const WhyUs = dynamic(() => import("@/containers/WhyUs"), {
  loading: () => <section className="py-24 min-h-[600px]" />,
});

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
