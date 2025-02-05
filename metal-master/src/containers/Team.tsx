import Image from "next/image";

const teamMembers = [
  { name: "Jan Kowalski", role: "Główny spawacz", img: "https://picsum.photos/200" },
  { name: "Anna Nowak", role: "Projektant", img: "https://picsum.photos/201" },
  { name: "Piotr Wiśniewski", role: "Kierownik produkcji", img: "https://picsum.photos/202" },
];

export default function Team() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-weldingRed">Nasz Zespół</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-4 shadow-lg rounded-lg">
              <Image
                src={member.img}
                alt={member.name}
                width={200}
                height={200}
                className="rounded-full mx-auto"
              />
              <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
