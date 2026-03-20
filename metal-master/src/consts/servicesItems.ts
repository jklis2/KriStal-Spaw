import { FaDoorOpen, FaBorderAll, FaTree } from "react-icons/fa";
import React from "react";

type IconType = React.ComponentType<{ className?: string; size?: number }>;

export interface ServiceItem {
  title: string;
  description: string;
  Icon: IconType;
}

export const servicesItems: ServiceItem[] = [
  {
    title: "Bramy i automatyka",
    description: "Solidne bramy przesuwne i skrzydłowe z automatyką, dopasowane do Twojej posesji.",
    Icon: FaDoorOpen,
  },
  {
    title: "Ogrodzenia",
    description: "Trwałe ogrodzenia frontowe i nowoczesne systemy ogrodzeniowe.",
    Icon: FaBorderAll,
  },
  {
    title: "Balustrady",
    description: "Szklane, francuskie oraz metalowe z poręczą drewnianą, dopasowane do wnętrz i przestrzeni zewnętrznych.",
    Icon: FaTree,
  },
];
