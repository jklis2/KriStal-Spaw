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
    title: "Bramy",
    description: "Solidne bramy kute, garażowe i automatyczne.",
    Icon: FaDoorOpen,
  },
  {
    title: "Ogrodzenia",
    description: "Trwałe ogrodzenia panelowe, kute i betonowe.",
    Icon: FaBorderAll,
  },
  {
    title: "Dekoracje",
    description: "Metalowe balustrady, meble ogrodowe i ozdoby.",
    Icon: FaTree,
  },
];
