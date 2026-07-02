// Static content for the Supplier Portal page. Kept in one place so the
// categories/markets that drive the interactive selection stay in sync with
// the summaries and the registration form dropdown.

export type SupplierCategory = {
  name: string;
  description: string;
};

export type SupplierMarket = {
  name: string;
  flag: string;
};

export type SupplierStat = {
  value: string;
  label: string;
};

export type SupplierStep = {
  number: string;
  title: string;
  description: string;
};

export const SUPPLIER_STATS: SupplierStat[] = [
  { value: "8", label: "Open Categories" },
  { value: "7", label: "Target Markets" },
  { value: "Global", label: "Supply Network" },
  { value: "Open", label: "Vendor Registration" },
];

export const SUPPLIER_CATEGORIES: SupplierCategory[] = [
  {
    name: "PCB",
    description: "Bare boards, flex PCBs, rigid-flex, multi-layer designs",
  },
  {
    name: "Electronics Components",
    description: "Passive, active, connectors, ICs, sensors, modules",
  },
  {
    name: "Enclosures",
    description: "Standard and custom housing and enclosure solutions",
  },
  {
    name: "Custom Metal Enclosure",
    description: "Sheet metal, CNC-machined metal housings and brackets",
  },
  {
    name: "Custom Molded Plastic Enclosure",
    description: "Injection-molded and thermoformed plastic housings",
  },
  {
    name: "Mechanical Aluminum Enclosure",
    description: "Extruded and machined aluminum enclosures and profiles",
  },
  {
    name: "PCB Assembly Services",
    description: "SMT, through-hole, mixed technology assembly and soldering",
  },
  {
    name: "Testing Services",
    description: "Functional test, ICT, environmental and compliance testing",
  },
];

export const SUPPLIER_MARKETS: SupplierMarket[] = [
  { name: "USA", flag: "🇺🇸" },
  { name: "China", flag: "🇨🇳" },
  { name: "Taiwan", flag: "🇹🇼" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "Korea", flag: "🇰🇷" },
  { name: "Japan", flag: "🇯🇵" },
  { name: "France", flag: "🇫🇷" },
  { name: "India", flag: "🇮🇳" },
];

// Countries offered in the "Primary Market" form dropdown. Mirrors the
// reference portal: the target markets plus an "Other" catch-all.
export const SUPPLIER_COUNTRIES: string[] = [
  "USA",
  "China",
  "Taiwan",
  "Germany",
  "Korea",
  "Japan",
  "France",
  "Other",
];

export const SUPPLIER_STEPS: SupplierStep[] = [
  {
    number: "01",
    title: "Browse & Select",
    description:
      "Review open sourcing categories and identify where your company's capabilities and geographic footprint are a match.",
  },
  {
    number: "02",
    title: "Register Your Profile",
    description:
      "Submit your company details, certifications, and the categories you supply. This creates your profile in our vendor database.",
  },
  {
    number: "03",
    title: "Get Evaluated",
    description:
      "Our procurement team reviews profiles and contacts you for qualifying categories. Approved suppliers are added to our active supply network.",
  },
];
