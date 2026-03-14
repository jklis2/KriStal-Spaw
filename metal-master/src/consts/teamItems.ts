export interface TeamMember {
  name: string;
  role: string;
  img: string;
  description: string;
  experience?: number; // Liczba lat doświadczenia
  quote?: string; // Cytat od członka zespołu
  contact: {
    phone: string;
    email: string;
    linkedin: string;
  };
  expertise: string[];
}

export const teamItems: TeamMember = {
  name: "Jan Kowalski",
  role: "Główny Spawacz / Właściciel",
  img: "/images/photoPlaceholder.webp",
  experience: 20, // 20 lat doświadczenia
  quote: "Jako spawacz z wieloletnim doświadczeniem, wierzę że jakość i precyzja są kluczem do trwałych konstrukcji. Każdy projekt traktuję z najwyższą starannością.",
  description:
    "Z ponad 20-letnim doświadczeniem w branży spawalniczej, Jan jest ekspertem w obróbce metalu i tworzeniu niestandardowych konstrukcji. Jego precyzja i dbałość o detale są widoczne w każdym projekcie. Posiada certyfikaty spawalnicze najwyższej klasy oraz nieustannie rozwija swoje umiejętności, aby dostarczać klientom rozwiązania najwyższej jakości.",
  contact: {
    phone: "+48 123 456 789",
    email: "jan.kowalski@metalmaster.pl",
    linkedin: "linkedin.com/in/jankowalski",
  },
  expertise: ["Spawanie MIG/MAG", "Konstrukcje stalowe", "Projekty customowe", "Obróbka CNC"],
};
