"use client";

import Image from "next/image";
import Team from "@/containers/Team";
import History from "@/containers/History";
import Certificates from "@/containers/Certificates";

export default function About() {
  return (
    <main className="bg-industrialGray min-h-screen">
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://picsum.photos/1920/1080"
          alt="Metal Master - O nas"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-industrialGray"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold font-oswald text-white mb-6 relative inline-block">
              O Nas
              <div className="absolute -bottom-4 left-0 w-full h-1 bg-weldingRed transform -skew-x-12"></div>
            </h1>
            <p className="text-xl text-gray-300 font-roboto max-w-2xl mx-auto px-6">
              Poznaj naszą historię, zespół i wartości. Jesteśmy ekspertami w obróbce metalu,
              łącząc tradycyjne rzemiosło z nowoczesnymi technologiami.
            </p>
          </div>
        </div>
      </section>
      <div className="relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-repeat" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l7.9-7.9h-.828zm5.656 0L19.515 8.485 17.343 10.657l7.9-7.9h2.757zm5.656 0l-9.9 9.9-2.172 2.172 7.9-7.9h4.172zm5.656 0l-9.9 9.9-2.172 2.172 7.9-7.9h4.172z' fill='%23fff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E')" }}></div>
        </div>
        <Team />
        <History />
        <Certificates />
      </div>
    </main>
  );
}
