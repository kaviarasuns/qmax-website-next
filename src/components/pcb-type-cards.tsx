import type React from "react";
import {
  Layers,
  CircuitBoard,
  Cpu,
  Hammer,
  PaintBucket,
  Wrench,
  BookOpen,
  FileText,
} from "lucide-react";
import Link from "next/link";

interface CategoryCardProps {
  title: string;
  icon: React.ReactNode;
  links: { label: string; href: string }[];
}

const CategoryCard = ({ title, icon, links }: CategoryCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden h-full">
      <div className="bg-gray-800 text-white p-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          {icon}
          {title}
        </h3>
      </div>
      <div className="p-4">
        <ul className="space-y-2">
          {links.map((link, index) => (
            <li key={index} className="flex items-start">
              <span className="text-gray-800 mr-2">■</span>
              <Link
                href={link.href}
                className="text-gray-800 hover:text-blue-800 hover:underline"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function PCBTypeCards() {
  const categories = [
    {
      title: "PCB Types",
      icon: <Layers className="w-5 h-5" />,
      links: [
        { label: "Single-sided PCB", href: "#Single-sided-PCB" },
        { label: "Double-sided PCB", href: "#Double-sided-PCB" },
        { label: "Multi-layer PCB", href: "#Multi-layer-PCB" },
        { label: "HDI PCB", href: "#HDI-PCB" },
        { label: "Metal Back PCB", href: "#Metal-Back-PCB" },
        { label: "Single-sided Flex PCB", href: "#Single-sided-Flex-PCB" },
        { label: "Double sided Flex PCB", href: "#Double-sided-Flex-PCB" },
        { label: "Rigid Flex", href: "#Rigid-Flex" },
        { label: "Flex Multilayer", href: "#Flex-Multilayer" },
        { label: "Semi-Flex", href: "#Semi-Flex" },
      ],
    },
    {
      title: "PCB Technology",
      icon: <CircuitBoard className="w-5 h-5" />,
      links: [
        { label: "Surface Mounting Technology", href: "#Mounting-Technology" },
        { label: "Through Hole Technology", href: "#Through-Hole-Technology" },
      ],
    },
    {
      title: "Design",
      icon: <Cpu className="w-5 h-5" />,
      links: [
        { label: "1 to 18 layers", href: "#" },
        { label: "3 Mil Lines & Spaces", href: "#" },
        { label: "IPC Class 2 / Class 3", href: "#" },
        { label: "Impedance Control +/-10%", href: "#" },
        { label: 'Down to .006" Holes', href: "#" },
        { label: "Blind & Buried Vias", href: "#Blind-Buried-Vias" },
        { label: "Silver Thru Hole", href: "#" },
        { label: "Via in Pad", href: "#Via-in-Pad" },
        { label: "Laser Direct Imaging", href: "#" },
        { label: "Micro Via's", href: "#Micro-Vias" },
      ],
    },
    {
      title: "Materials",
      icon: <Hammer className="w-5 h-5" />,
      links: [
        { label: "FR4 - All Types", href: "#" },
        { label: "CEM-1 & CEM-3", href: "#CEM-1-CEM-3" },
        { label: "Heavy Copper", href: "#" },
        { label: "RF and High Speed Materials", href: "#" },
        { label: "Mixed Materials / FR-4 Teflon", href: "#" },
        { label: "Polyimide", href: "#" },
      ],
    },
    {
      title: "Surface Finishes",
      icon: <PaintBucket className="w-5 h-5" />,
      links: [
        { label: "ENIG", href: "#ENIG" },
        { label: "HASL", href: "#HASL" },
        { label: "Leadfree HASL", href: "#Leadfree-HASL" },
        { label: "Immersion Silver", href: "#Immersion-Silver" },
        { label: "Immersion Tin", href: "#Immersion-Tin" },
        { label: "ENEPIG", href: "#ENEPIG" },
        { label: "Hard Body Gold", href: "#Hard-Body-Gold" },
        { label: "Soft Bondable Gold", href: "#Soft-Bondable-Gold" },
        { label: "OSP", href: "#OSP" },
      ],
    },
    {
      title: "Plating",
      icon: <Wrench className="w-5 h-5" />,
      links: [
        { label: "Conductive Via Fill", href: "#" },
        { label: "Edge Plating", href: "#Edge-Plating" },
        { label: "Castellations", href: "#Castellations" },
        { label: "Plated Slots", href: "#" },
        { label: "Gold Tabs", href: "#" },
        { label: "Plasma Etch Back", href: "#" },
        { label: "Peelable Solder Mask", href: "#" },
      ],
    },
    {
      title: "Standards",
      icon: <BookOpen className="w-5 h-5" />,
      links: [
        { label: "Safety Standards", href: "#" },
        { label: "PCB Standards & Organizations", href: "#" },
        { label: "WEEE & RoHS Compliance", href: "#" },
      ],
    },
    {
      title: "PCB Terminology",
      icon: <FileText className="w-5 h-5" />,
      links: [
        { label: "Annular ring", href: "#" },
        { label: "DRC", href: "#" },
        { label: "Drill Hit", href: "#" },
        { label: "Finger", href: "#" },
        { label: "Mouse bites", href: "#" },
        { label: "Pad", href: "#" },
        { label: "Panel", href: "#" },
        { label: "Paste stencil", href: "#" },
        { label: "Pick and place", href: "#" },
        { label: "Plane", href: "#" },
        { label: "Plated through hole", href: "#" },
        { label: "Pogo pin", href: "#" },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
        PCB Resources
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            icon={category.icon}
            links={category.links}
          />
        ))}
      </div>
    </div>
  );
}
