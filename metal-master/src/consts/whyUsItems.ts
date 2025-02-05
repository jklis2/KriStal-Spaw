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
    title: "20 lat doświadczenia",
    description: "Dwie dekady praktyki w obróbce metalu i realizacji projektów",
    Icon: FaHistory,
  },
  { 
    title: "Gwarancja jakości",
    description: "Najwyższe standardy wykonania i materiałów",
    Icon: FaAward,
  },
  { 
    title: "Projekty na wymiar",
    description: "Indywidualne podejście do każdego zlecenia",
    Icon: FaRuler,
  },
];
