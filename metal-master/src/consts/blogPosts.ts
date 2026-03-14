export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  date: string;
  author: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Podstawy Spawania MIG/MAG",
    description: "Poznaj podstawowe techniki spawania metodą MIG/MAG i rozpocznij swoją przygodę ze spawaniem.",
    content: `Spawanie MIG/MAG to jedna z najpopularniejszych metod spawania. W tym artykule omówimy podstawowe zasady, techniki i wskazówki dotyczące bezpiecznego spawania.

## Co to jest spawanie MIG/MAG?

MIG/MAG (Metal Inert Gas/Metal Active Gas) to metoda spawania łukowego, gdzie łuk elektryczny jarzy się pomiędzy drutem elektrodowym a materiałem spawanym, w osłonie gazu obojętnego (MIG) lub aktywnego (MAG).

## Podstawowy sprzęt

1. Spawarka MIG/MAG
2. Uchwyt spawalniczy
3. Drut spawalniczy
4. Butla z gazem osłonowym
5. Reduktor z przepływomierzem

## Techniki spawania

1. Prowadzenie uchwytu pod odpowiednim kątem (15-20 stopni)
2. Utrzymywanie stałej prędkości spawania
3. Zachowanie odpowiedniej długości wolnego wylotu elektrody

## Bezpieczeństwo

- Zawsze używaj maski spawalniczej
- Pracuj w rękawicach spawalniczych
- Zapewnij dobrą wentylację
- Używaj odzieży ochronnej`,
    image: "/images/photoPlaceholder.webp",
    date: "2025-02-05",
    author: "Jakub Kowalski",
    slug: "podstawy-spawania-mig-mag"
  },
  {
    id: "2",
    title: "Bezpieczeństwo w Spawalnictwie",
    description: "Dowiedz się, jak zadbać o bezpieczeństwo podczas prac spawalniczych.",
    content: `Bezpieczeństwo to podstawa w spawalnictwie. W tym artykule poznasz niezbędne środki ochrony osobistej i procedury bezpieczeństwa.

## Podstawowe środki ochrony

1. Maska spawalnicza z odpowiednim filtrem
2. Rękawice spawalnicze
3. Fartuch spawalniczy
4. Buty ochronne
5. Odzież trudnopalna

## Wentylacja i ochrona dróg oddechowych

- Zapewnienie odpowiedniej wentylacji stanowiska
- Stosowanie masek przeciwpyłowych
- Regularne przerwy w pracy

## Zabezpieczenie stanowiska pracy

1. Usunięcie materiałów łatwopalnych
2. Przygotowanie gaśnicy
3. Zabezpieczenie obszaru pracy
4. Odpowiednie oświetlenie`,
    image: "/images/photoPlaceholder.webp",
    date: "2025-02-04",
    author: "Marek Nowak",
    slug: "bezpieczenstwo-w-spawalnictwie"
  },
  {
    id: "3",
    title: "Spawanie TIG - Przewodnik",
    description: "Kompleksowy przewodnik po spawaniu metodą TIG dla początkujących i średniozaawansowanych.",
    content: `Spawanie TIG wymaga precyzji i praktyki. W tym przewodniku przedstawimy krok po kroku proces spawania TIG.

## Co to jest spawanie TIG?

TIG (Tungsten Inert Gas) to metoda spawania łukowego elektrodą nietopliwą w osłonie gazu obojętnego. Jest to jedna z najprecyzyjniejszych metod spawania.

## Sprzęt potrzebny do spawania TIG

1. Spawarka TIG
2. Uchwyt TIG z elektrodą wolframową
3. Materiał dodatkowy
4. Butla z argonem
5. Reduktor z przepływomierzem

## Technika spawania

1. Przygotowanie materiału
2. Ustawienie parametrów spawania
3. Zajarzenie łuku
4. Prowadzenie uchwytu
5. Dodawanie materiału dodatkowego

## Typowe zastosowania

- Spawanie stali nierdzewnej
- Spawanie aluminium
- Precyzyjne prace spawalnicze`,
    image: "/images/photoPlaceholder.webp",
    date: "2025-02-03",
    author: "Adam Wiśniewski",
    slug: "spawanie-tig-przewodnik"
  },
  {
    id: "4",
    title: "Wybór Odpowiedniego Sprzętu Spawalniczego",
    description: "Jak wybrać odpowiedni sprzęt spawalniczy do swoich potrzeb?",
    content: `Wybór właściwego sprzętu spawalniczego jest kluczowy dla jakości spawania. W tym artykule poznasz najważniejsze kryteria wyboru.

## Rodzaje spawarek

1. Spawarki MIG/MAG
2. Spawarki TIG
3. Spawarki MMA
4. Spawarki wieloprocesowe

## Na co zwrócić uwagę?

- Moc spawarki
- Cykl pracy
- Możliwości regulacji
- Mobilność urządzenia
- Dodatkowe funkcje

## Akcesoria

1. Uchwyty spawalnicze
2. Reduktory
3. Przewody masowe
4. Materiały eksploatacyjne

## Konserwacja sprzętu

- Regularne czyszczenie
- Wymiana części eksploatacyjnych
- Przeglądy techniczne`,
    image: "/images/photoPlaceholder.webp",
    date: "2025-02-02",
    author: "Piotr Kowalczyk",
    slug: "wybor-odpowiedniego-sprzetu-spawalniczego"
  }
];