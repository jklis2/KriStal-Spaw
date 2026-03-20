import { FaHistory, FaAward, FaRuler } from "react-icons/fa";
import React from "react";

type IconType = React.ComponentType<{ className?: string; size?: number }>;

export interface BenefitItem {
  title: string;
  description: string;
  Icon: IconType;
}

export const whyUsItems: BenefitItem[] = [
  { 
    title: "Gwarancja jakości",
    description: "Nasze realizacje potwierdzają jakość wykonania oraz zadowolenie klientów.",
    Icon: FaAward,
  },
  { 
    title: "Projekty na wymiar",
    description: "Indywidualne podejście do każdego zlecenia",
    Icon: FaRuler,
  },
    { 
    title: "Indywidualne podejście",
    description: "Słuchamy, doradzamy i dopasowujemy rozwiązania do Twoich potrzeb.",
    Icon: FaHistory,
  },
];
