import type { FullProductDevelopmentCaseStudy } from "@/store/full-product-development-case-studies";

export const uvDisinfectionSystemCaseStudy: FullProductDevelopmentCaseStudy = {
  id: "uv-disinfection-system",
  slug: "uv-disinfection-system",
  title: "AI-Vision UV-C Disinfection System for Hospital ICU Environments",
  subtitle:
    "Full Product Development — HW • FW • AI/SW • Industrial & Mechanical Design • PCB • DVT/PVT • Small-Volume Production",
  metaTags: [
    "Domain: Healthcare",
    "Industry: Hospital UV Disinfection",
    "Market: North America",
  ],
  ribbonStats: [
    {
      value: "20 Units",
      label: "Field Trial Deployment",
    },
    {
      value: "60%+ Engineering",
      label: "AI / Computer Vision",
    },
    {
      value: "UL 61010-1",
      label: "Approved for Testing",
    },
    {
      value: "3× 222 nm UV-C",
      label: "Occupied-Space Safe",
    },
  ],
  navSections: [
    { id: "overview", num: "01", label: "Project Overview" },
    { id: "brief", num: "02", label: "Product Brief" },
    { id: "scope", num: "03", label: "Scope of Work" },
    { id: "challenges", num: "04", label: "Engineering Challenges" },
    { id: "components", num: "05", label: "Hardware Components" },
    { id: "interfaces", num: "06", label: "Interfaces & Protocols" },
    { id: "firmware", num: "07", label: "Firmware & Software" },
    { id: "specs", num: "08", label: "Technical Specifications" },
    { id: "summary", num: "09", label: "Summary" },
  ],
  images: [
    "/case-studies/mechanicalCaseStudies/1/MYNATEK_RENDER__1.0.png",
    "/case-studies/mechanicalCaseStudies/1/MYNATEK_RENDER__3.2.png",
    "/case-studies/mechanicalCaseStudies/1/MYNATEK_RENDER_4.17.png",
    "/case-studies/mechanicalCaseStudies/1/MYNATEK_RENDER_9_TOP_ISO_1.png",
    "/case-studies/mechanicalCaseStudies/1/MYNATEK_RENDER_9_BOTTOM_ISO_1.png",
    "/case-studies/mechanicalCaseStudies/1/MYNATEK_RENDER_9_LEFT.png",
    "/case-studies/mechanicalCaseStudies/1/MYNATEK_RENDER_9_RIGHT.png",
  ],
  cardImageIndex: 0,
  overview: [
    "A healthcare technology company set out to build an occupied-space UV disinfection system for hospitals — one that could safely run in ICUs, patient rooms, and bathrooms without exposing staff or patients to unsafe UV-C doses. They engaged Qmax Systems to take the concept from a blank sheet through to a field-ready product. Qmax owned the complete development lifecycle: system architecture, AI/computer-vision development, thermal and mechanical engineering, hardware and PCB design, embedded firmware, and prototype-to-small-volume manufacturing.",
    "Given the safety-critical nature of the application, AI/computer-vision work — model development, edge optimization, and detection-accuracy validation — was the dominant engineering effort, accounting for more than 60% of total program hours. The program delivered 20 functional units that were validated in the customer's lab and deployed for field trials across multiple U.S. hospitals, and the system received UL approval (per UL 61010-1) to conduct in-hospital testing.",
  ],
  brief: [
    "The device is a wall-mounted, AI-powered UV sanitizing lamp whose core value lies in its computer-vision safety system: a purpose-trained detection model running on an NVIDIA Jetson Nano continuously interprets a dual-camera, IR-illuminated feed to find people in the room, estimate their distance from the lamp, and calculate cumulative UV exposure dose in real time.",
    "Three 222 nm UV-C arc lamps provide the disinfection source, but it is the AI layer that makes occupied-space operation possible — if a person moves too close to the lamp or approaches the programmed exposure limit, the vision system triggers an automatic shutoff. This closed-loop, AI-driven safety architecture is what enables continuous disinfection cycles in occupied clinical spaces without manual intervention.",
  ],
  scopeIntro:
    "Qmax Systems executed the complete development lifecycle for this safety-critical, AI-first healthcare product:",
  scopeItems: [
    "AI/computer-vision architecture, model development, training, and edge deployment — the single largest engineering workstream on this program",
    "Dataset collection, curation, and model training for hospital-specific person-detection scenarios",
    "Edge-AI inference optimization and performance tuning on NVIDIA Jetson Nano",
    "Depth/distance-estimation and UV exposure dose-calculation algorithm development",
    "Thermal engineering and airflow design for the onboard AI compute module",
    "Mechanical enclosure design, industrial design, and DFM for a compact, clinical wall-mounted form factor",
    "Hardware design and schematic entry for lamp-drive, power, and sensor electronics",
    "PCB design and layout for the main controller board and UV lamp power-supply boards",
    "Embedded firmware development for lamp control, safety interlocks, and dose tracking",
    "Prototype fabrication, functional test, calibration, and small-volume manufacturing support",
  ],
  challenges: [
    {
      challenge:
        "Reliable real-time person detection across diverse hospital environments on edge hardware",
      resolution:
        "Trained and fine-tuned a lightweight CNN on a hospital-representative dataset covering patients in beds, moving staff, bedding, and equipment clutter — optimized for real-time inference on the Jetson Nano",
    },
    {
      challenge:
        "Distance estimation across 0.5 m–5 m range without a dedicated depth sensor",
      resolution:
        "Developed a dual-camera depth/distance-estimation algorithm using the two IR-illuminated camera feeds, enabling lamp-to-person ranging for exposure dose calculation without adding a dedicated depth sensor",
    },
    {
      challenge:
        "Fitting model inference within the Jetson Nano's limited edge-compute budget",
      resolution:
        "Model optimization and quantization tuned for real-time inference within the Jetson Nano's compute and power budget while meeting the required detection and update cycle",
    },
    {
      challenge:
        "Balancing false positives (nuisance shutoffs) against false negatives (unsafe exposure)",
      resolution:
        "Detection-accuracy tuning across hospital scenarios to eliminate nuisance shutoffs that cut disinfection uptime without introducing false negatives that risk unsafe UV exposure to occupants",
    },
    {
      challenge:
        "Sustaining detection accuracy in low-light and IR-only operating conditions",
      resolution:
        "Low-light, IR-synchronized inference pipeline with dedicated IR illuminator control for continuous day/night operation in clinical lighting conditions",
    },
    {
      challenge:
        "Curating a hospital-representative training dataset with limited real-world data",
      resolution:
        "Structured dataset collection and curation covering patients in beds, moving staff, and equipment-dense rooms — with augmentation and fine-tuning strategies to compensate for limited initial field data",
    },
    {
      challenge:
        "Dissipating Jetson Nano heat inside a sealed, IP40-intent enclosure",
      resolution:
        "Thermal engineering with aluminum heatsinks, engineered inlet/exhaust airflow paths, and an exhaust fan sized to keep the AI processor within limits without compromising ingress protection intent",
    },
    {
      challenge:
        "Quiet thermal management acceptable for patient-occupied rooms",
      resolution:
        "Inlet/heatsink/exhaust airflow design balancing AI processor thermal headroom against acoustic limits suitable for ICU and patient room deployment",
    },
    {
      challenge:
        "Packaging AI compute, cameras, three UV-C lamps, and power electronics in a compact enclosure",
      resolution:
        "Mechanical and industrial design fitting Jetson Nano, dual cameras, three 222 nm lamp assemblies, high-voltage drivers, and SMPS within a 345 × 150 × 181 mm, ~3 kg wall-mounted enclosure while holding IEC 62262 IK03 impact-rating design intent",
    },
    {
      challenge:
        "Prototype enclosures durable enough for hospital field trials with electrical safety pre-compliance",
      resolution:
        "Vacuum-cast ABS outer enclosures with camera-concealing covers and powder-coated mild-steel internal chassis — validated against IEC 61010-1:2010/AMD1:2016 electrical safety pre-compliance requirements for repeated hospital field trials",
    },
  ],
  hardwareComponents: [
    {
      title: "NVIDIA Jetson Nano Edge-AI Module",
      description:
        "Onboard compute running the purpose-trained person-detection CNN, dual-camera depth estimation, and cumulative UV exposure dose calculation in real time",
    },
    {
      title: "Three 222 nm UV-C Arc Lamps",
      description:
        "12 W each — disinfection source enabling occupied-space UV sanitization when the AI safety system confirms safe operating conditions",
    },
    {
      title: "Custom High-Voltage Lamp-Driver Boards",
      description:
        "24 VDC input to ~4000 VAC output — dedicated driver boards for each UV-C arc lamp with status and fault feedback to the controller",
    },
    {
      title: "24 VDC SMPS Primary Power Supply",
      description:
        "Main switched-mode power supply with fused AC mains input connector for universal mains entry",
    },
    {
      title: "Onboard DC-DC Regulator (5 VDC)",
      description:
        "Regulated 5 VDC rail powering the Jetson Nano and auxiliary control electronics from the 24 VDC distribution bus",
    },
    {
      title: "Dual Cameras with IR Illumination",
      description:
        "Two camera modules with IR illuminator for day/night presence detection and dual-camera distance estimation",
    },
    {
      title: "Thermal Management Assembly",
      description:
        "Aluminum heatsinks and exhaust fan with engineered airflow paths for Jetson Nano thermal dissipation inside the sealed enclosure",
    },
    {
      title: "Vacuum-Cast ABS Enclosure & Steel Chassis",
      description:
        "Powder-coated mild-steel internal chassis and mounting frame with vacuum-cast ABS outer shell and camera-concealing covers for clinical wall-mount deployment",
    },
  ],
  interfaces: [
    {
      title: "Camera-to-AI Video Interface",
      description:
        "Real-time dual-camera image capture feeding the Jetson Nano inference pipeline for person detection and distance estimation",
    },
    {
      title: "IR Illuminator Control",
      description:
        "Low-light imaging support synchronized with the AI inference pipeline for continuous day/night operation",
    },
    {
      title: "AI GPIO to Lamp-Driver Control",
      description:
        "Jetson Nano GPIO/control interface to lamp-driver boards for automatic on/off switching driven directly by AI detection output",
    },
    {
      title: "Lamp Status & Fault Feedback",
      description:
        "Status and fault lines from each high-voltage driver board back to the main controller for safety interlocks and diagnostics",
    },
    {
      title: "24 VDC Power Distribution Bus",
      description:
        "Primary DC bus distributing power to lamp drivers, DC-DC regulator, and control electronics",
    },
    {
      title: "Regulated 5 VDC Rail",
      description:
        "Powers the AI compute module and auxiliary electronics from the onboard DC-DC regulator",
    },
    {
      title: "Universal AC Mains Input",
      description:
        "Fused AC connector interface to the 24 VDC SMPS for mains-powered wall-mounted operation",
    },
    {
      title: "High-Voltage Lamp Interface",
      description:
        "~4000 VAC output from lamp-driver boards to the three UV-C arc lamp assemblies",
    },
    {
      title: "Sensor Data Interfaces",
      description:
        "Supporting distance estimation inputs and cumulative UV exposure dose calculation from dual-camera ranging",
    },
    {
      title: "Data Logging / Network Provision",
      description:
        "Wired/network data interface provision for detection event logging, exposure dose records, lamp runtime, and future cloud/OTA firmware extension",
    },
  ],
  firmwareItems: [
    {
      title: "Hospital Dataset Collection & Curation",
      description:
        "Structured dataset gathering for hospital-specific person detection — patients in beds, moving staff, equipment clutter, and varied lighting conditions.",
    },
    {
      title: "Lightweight CNN Training & Fine-Tuning",
      description:
        "Purpose-trained person-detection model developed and fine-tuned for real-time edge inference on the Jetson Nano across diverse clinical scenarios.",
    },
    {
      title: "Edge Model Optimization & Quantization",
      description:
        "Model compression and quantization to fit inference within the Jetson Nano's compute and power budget while maintaining required detection accuracy and update cadence.",
    },
    {
      title: "Dual-Camera Depth / Distance Estimation",
      description:
        "Algorithm development for lamp-to-person ranging across the 0.5 m–5 m required range using dual-camera geometry without a dedicated depth sensor.",
    },
    {
      title: "Cumulative UV Exposure Dose Engine",
      description:
        "Real-time dose-calculation engine using distance-based lookup tables to track cumulative UV exposure per detected person and trigger shutoff at programmed limits.",
    },
    {
      title: "Detection-Accuracy Tuning",
      description:
        "Sensitivity calibration to eliminate false positives causing nuisance shutoffs while preventing false negatives that risk unsafe UV exposure in occupied spaces.",
    },
    {
      title: "Low-Light IR-Synchronized Inference Pipeline",
      description:
        "Continuous day/night operation pipeline coordinating IR illuminator timing with camera capture and AI inference for reliable detection in dim clinical environments.",
    },
    {
      title: "Automatic Lamp Shutoff & Fail-Safe Control",
      description:
        "Embedded firmware driving lamp on/off control and safety interlocks directly from AI detection output — immediate shutoff on proximity or dose-limit breach.",
    },
    {
      title: "On-Device Self-Test & Calibration",
      description:
        "Diagnostic routines for camera subsystems, AI inference health checks, and calibration workflows supporting field deployment and maintenance.",
    },
    {
      title: "Data-Logging Architecture",
      description:
        "On-device logging of detection events, exposure dose, and lamp runtime with firmware architecture provisioned for future cloud connectivity and OTA extension.",
    },
  ],
  specs: [
    {
      key: "Form Factor",
      value:
        "Wall-mounted clinical UV disinfection unit — 345 × 150 × 181 mm, ~3 kg",
    },
    {
      key: "UV Source",
      value: "3× 222 nm UV-C arc lamps, 12 W each — occupied-space safe wavelength",
    },
    {
      key: "AI Compute",
      value:
        "NVIDIA Jetson Nano — real-time person detection, distance estimation, and dose calculation",
    },
    {
      key: "Vision System",
      value:
        "Dual cameras with IR illumination; lightweight CNN; 0.5 m–5 m distance estimation range",
    },
    {
      key: "Lamp Drivers",
      value: "Custom high-voltage boards — 24 VDC in to ~4000 VAC out per lamp",
    },
    {
      key: "Power",
      value:
        "Universal AC mains via fused connector → 24 VDC SMPS → 5 VDC DC-DC for compute and control",
    },
    {
      key: "Enclosure",
      value:
        "Vacuum-cast ABS outer shell with camera-concealing covers; powder-coated mild-steel internal chassis; IP40-intent; IEC 62262 IK03 design intent",
    },
    {
      key: "Thermal",
      value:
        "Aluminum heatsinks, inlet/exhaust airflow, and exhaust fan for Jetson Nano thermal management in sealed enclosure",
    },
    {
      key: "Safety Architecture",
      value:
        "Closed-loop AI-driven automatic shutoff on proximity or cumulative dose limit; lamp status and fault interlocks",
    },
    {
      key: "Certifications",
      value:
        "UL 61010-1 approved for in-hospital testing; IEC 61010-1:2010/AMD1:2016 electrical safety pre-compliance",
    },
    {
      key: "Production",
      value:
        "20 functional prototypes validated in customer lab and deployed for field trials across multiple U.S. hospitals",
    },
    {
      key: "Qmax Scope",
      value:
        "AI/vision (60%+ of engineering), thermal/mechanical design, hardware, PCB, embedded firmware, DVT/PVT, and small-volume manufacturing",
    },
  ],
  summary: [
    "Qmax carried this AI-enabled UV disinfection system from a blank-sheet concept to a fully validated product. With AI/computer-vision development accounting for more than 60% of total engineering effort, the program's hardest problems were in detection accuracy, edge-inference performance, thermal management of the onboard AI compute, and mechanical packaging — not the electrical hardware itself.",
    "Qmax delivered 20 functional prototypes that were evaluated in the customer's lab and deployed for field trials across multiple U.S. hospitals. The system received UL approval (per UL 61010-1) to conduct in-hospital testing and successfully met applicable IEC 61010-1:2010/AMD1:2016 electrical safety pre-compliance requirements.",
    "The program demonstrates Qmax Systems' ability to execute complex, AI-first, safety-critical hardware products end-to-end — spanning computer vision, thermal and mechanical engineering, PCB design, and small-volume manufacturing.",
  ],
  listingSummary:
    "Full product development — AI-vision UV-C disinfection system for hospital ICU environments with Jetson Nano edge AI, occupied-space safety shutoff, and UL 61010-1 approval.",
  metadata: {
    title: "AI-Vision UV-C Disinfection System for Hospital ICUs | Case Study",
    description:
      "Full product development case study — AI-powered 222 nm UV-C disinfection system with Jetson Nano computer vision, dual-camera safety shutoff, and hospital field trials.",
  },
};
