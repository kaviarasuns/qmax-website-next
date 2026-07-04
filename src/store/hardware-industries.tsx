import { PCBIndustry } from "@/components/services-cmp/PCBIndustriesSection";

export const HARDWARE_INDUSTRIES: PCBIndustry[] = [
  {
    id: "automotive-electronics",
    label: "Automotive Electronics",
    title: "Automotive Electronics",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 17h14l-1.5-5.5a2 2 0 0 0-1.9-1.5H8.4a2 2 0 0 0-1.9 1.5L5 17z" />
        <circle cx="7.5" cy="17.5" r="2" />
        <circle cx="16.5" cy="17.5" r="2" />
      </svg>
    ),
    description:
      "Qmax Systems designs automotive firmware for ECUs, infotainment, ADAS, and EV powertrain systems built to AEC-Q100 and IATF 16949 standards. This firmware handles harsh thermal cycling, severe vibration, and aggressive EMI across cabin, chassis, and under-the-hood applications.",
    subDescription:
      "From multi-layer ECU boards to high-current EV battery management systems, Qmax Systems delivers firmware designs that meet zero-defect quality and full automotive traceability.",
    image:
      "https://d1yetprhniwywz.cloudfront.net/v2/pcb-design/PCBIndustriesSection/automotive.png",
    relatedCaseStudies: [
      {
        title: "Connected Car Demonstration Unit",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/connected_car_demonstration_unit/1.1.png",
        href: "/case-studies/connected-car-demonstration-unit",
      },
      {
        title: "BMS Controller",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/battery_pack/1.1.png",
        href: "/case-studies/bms-controller",
      },
      {
        title: "Ultra Low Power BLE Mouse",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/ultra_low_power_ble_mouse/1.2.png",
        href: "/case-studies/ultra-low-power-ble-mouse",
      },
    ],
  },
  {
    id: "medical-healthcare",
    label: "Medical & Healthcare",
    title: "Medical & Healthcare",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3.5 12.5h3l2-5 4 10 2-5h6" />
      </svg>
    ),
    description:
      "Qmax Systems develops firmware for Class II and Class III medical devices built to IEC 62304 software life-cycle requirements. This firmware delivers safety-critical embedded software with full traceability, risk management alignment to ISO 14971, and certification-ready documentation packages.",
    subDescription:
      "From vital-signs monitoring to infusion pump control, Qmax Systems engineers understand the regulatory landscape and design to it from the first sprint.",
    image:
      "https://d1yetprhniwywz.cloudfront.net/v2/pcb-design/PCBIndustriesSection/medical.png",
    relatedCaseStudies: [
      {
        title: "Medical Device Interface",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/pcb_a/1.1.png",
        href: "/case-studies/medical-device-interface",
      },
      {
        title: "Microscopic Camera Control",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/microscopic_camera/1.png",
        href: "/case-studies/microscopic-camera-control",
      },
      {
        title: "Ultra Low Noise ADC Board",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/ultra_low_noice_adc_board/1.png",
        href: "/case-studies/ultra-low-noise-adc-board",
      },
    ],
  },
  {
    id: "aerospace-systems",
    label: "Aerospace Systems",
    title: "Aerospace Systems",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 16v-2l-8-5V4a1.5 1.5 0 0 0-3 0v5l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1L15 22v-1.5L13 19v-5.5L21 16z" />
      </svg>
    ),
    description:
      "Qmax Systems develops DO-178C compliant firmware for avionics systems, applying structured development processes, rigorous verification and validation, and full requirements-through-test traceability. These designs are built to survive the harsh demands of aerospace environments.",
    subDescription:
      "From flight control software to communication avionics, Qmax Systems applies DO-178C development assurance levels appropriate to each system's criticality classification.",
    image:
      "https://d1yetprhniwywz.cloudfront.net/v2/pcb-design/PCBIndustriesSection/aerospace.png",
    relatedCaseStudies: [
      {
        title: "Stellar Main Board",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/stellar_main_board/1.png",
        href: "/case-studies/stellar-main-board",
      },
      {
        title: "Gigabit Ethernet Switch Module",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/high_speed_data_acquisation/1.4.png",
        href: "/case-studies/gigabit-ethernet-switch-module",
      },
      {
        title: "High Speed Camera Interface",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/HIPPACK/1.png",
        href: "/case-studies/high-speed-camera-interface",
      },
    ],
  },
  {
    id: "energy-ev-power",
    label: "Energy, EV & Power",
    title: "Energy, EV & Power",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
      </svg>
    ),
    description:
      "Qmax Systems develops firmware for battery management systems, EV chargers, power conversion, and grid-edge devices. This firmware handles real-time control loops, safety interlocks, and communication stacks that energy applications demand.",
    subDescription:
      "Qmax Systems designs to IEC 61508 functional safety requirements with full ASIL decomposition documentation where required by the application.",
    image:
      "https://d1yetprhniwywz.cloudfront.net/v2/pcb-design/PCBIndustriesSection/ev and power.png",
    relatedCaseStudies: [
      {
        title: "Industrial IOT gateway with POE",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/tekion_ott/4.png",
        href: "/case-studies/industrial-iot-gateway-with-poe",
      },
      {
        title: "POE Control unit",
        image: "/case-studies/POE/1.png",
        href: "/case-studies/poe-control-unit",
      },
      {
        title: "Thermal Analysis and Management",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/thermal_analysis_and_management/1.2.png",
        href: "/case-studies/thermal-management-system",
      },
    ],
  },
  {
    id: "communication-systems",
    label: "Communication Systems",
    title: "Communication Systems",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="2" />
        <path d="M16.24 7.76a6 6 0 0 1 0 8.49M7.76 16.24a6 6 0 0 1 0-8.49M20.49 3.51a12 12 0 0 1 0 16.97M3.51 20.49a12 12 0 0 1 0-16.97" />
      </svg>
    ),
    description:
      "Qmax Systems delivers firmware for wireless base stations, access points, gateways, and edge networking devices. From OpenWrt-based router platforms to custom LPWAN firmware, this firmware delivers the full connectivity stack.",
    subDescription:
      "Wi-Fi 6/6E, BLE, LTE-M, NB-IoT, LoRa - Qmax Systems covers the protocol stack end to end with carrier-grade reliability requirements across all deployment environments.",
    image:
      "https://d1yetprhniwywz.cloudfront.net/v2/pcb-design/PCBIndustriesSection/communication.png",
    relatedCaseStudies: [
      {
        title: "Wi-Fi 6E Router",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/wi-fi_66e_router-_marma/1.png",
        href: "/case-studies/wifi-6e-router",
      },
      {
        title: "Multi IO card for ATE",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/CHARA/1.png",
        href: "/case-studies/multi-io-card-for-ate",
      },
      {
        title: "Industrial POE switch",
        image: "/case-studies/POE/5.png",
        href: "/case-studies/industrial-poe-switch",
      },
    ],
  },
  {
    id: "industrial-automation",
    label: "Industrial Automation",
    title: "Industrial Automation",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 20h20M4 20V8l4-3v15M12 20V4l4 3v13M20 20v-9l-4-2" />
      </svg>
    ),
    description:
      "Qmax Systems engineers OPC-UA deterministic firmware for PLCs, industrial controllers, and IIoT edge gateways. This firmware delivers real-time control with deterministic latency, functional safety hooks, and secure remote management.",
    subDescription:
      "Qmax Systems designs meet IEC 61131 and IEC 62443 security standards, with modular firmware architectures that simplify reconfiguration across production lines.",
    image:
      "https://d1yetprhniwywz.cloudfront.net/v2/pcb-design/PCBIndustriesSection/industry.png",
    relatedCaseStudies: [
      {
        title: "Industrial Temperature Control System",
        image: "/case-studies/BLUECOLD/1.png",
        href: "/case-studies/industrial-temperature-control-system",
      },
      {
        title: "Smart Monitoring System",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/climate_control/1.png",
        href: "/case-studies/smart-monitoring-system",
      },
      {
        title: "Rugged Industrial IO Board",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/rugged_industrial_io_board/1.2.png",
        href: "/case-studies/rugged-industrial-io-board",
      },
    ],
  },
];
