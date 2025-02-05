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
    img: "https://picsum.photos/300",
    year: "2023",
  },
  {
    name: "Certyfikat Spawalniczy",
    description: "Międzynarodowy certyfikat potwierdzający kwalifikacje w zakresie spawania metodą MIG/MAG.",
    img: "https://picsum.photos/301",
    year: "2022",
  },
  {
    name: "Atest Jakości",
    description: "Certyfikat potwierdzający zgodność z normami bezpieczeństwa i jakości w przemyśle metalowym.",
    img: "https://picsum.photos/302",
    year: "2024",
  },
];
