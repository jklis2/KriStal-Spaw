export interface CertificateItem {
  name: string;
  description: string;
  img: string;
  year: string;
}

export const certificatesItems: CertificateItem[] = [
  {
    name: "ISO 9001",
    description: "Certyfikat potwierdzający najwyższe standardy zarządzania jakością w procesach spawalniczych.",
    img: "/images/photoPlaceholder.webp",
    year: "2023",
  },
  {
    name: "Certyfikat Spawalniczy",
    description: "Międzynarodowy certyfikat potwierdzający kwalifikacje w zakresie spawania metodą MIG/MAG.",
    img: "/images/photoPlaceholder.webp",
    year: "2022",
  },
  {
    name: "Atest Jakości",
    description: "Certyfikat potwierdzający zgodność z normami bezpieczeństwa i jakości w przemyśle metalowym.",
    img: "/images/photoPlaceholder.webp",
    year: "2024",
  },
];
