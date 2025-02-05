import { FaIndustry, FaTools, FaUsers, FaTrophy } from "react-icons/fa";
import React from "react";

export interface MilestoneItem {
  year: string;
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
}

export const historyItems: MilestoneItem[] = [
  {
    year: "2005",
    title: "Początki",
    description: "Założenie firmy i otwarcie pierwszego warsztatu spawalniczego w Warszawie.",
    Icon: FaIndustry,
  },
  {
    year: "2010",
    title: "Rozwój",
    description: "Rozbudowa warsztatu i wprowadzenie nowoczesnych technologii spawania.",
    Icon: FaTools,
  },
  {
    year: "2015",
    title: "Zespół",
    description: "Powiększenie zespołu o wykwalifikowanych specjalistów.",
    Icon: FaUsers,
  },
  {
    year: "2025",
    title: "Lider Branży",
    description: "Uznany lider w branży metalowej z setkami zrealizowanych projektów.",
    Icon: FaTrophy,
  },
];
