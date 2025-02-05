import Image from "next/image";

export default function History() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-weldingRed">Nasza Historia</h2>
        <p className="mt-4 text-gray-700">
          Metal Master to firma z ponad 20-letnim doświadczeniem w tworzeniu
          bram, ogrodzeń i dekoracji metalowych. Nasze produkty cechuje precyzja
          wykonania i dbałość o detale.
        </p>
        <div className="mt-6 flex justify-center">
          <Image
            src="https://picsum.photos/800/500"
            alt="Warsztat Metal Master"
            width={800}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
