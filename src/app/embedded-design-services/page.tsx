import Image from "next/image";
import { CheckCircle2, Shield, Battery, Server, Cpu, Radio, Fingerprint, Activity, Check, Code, Zap, Wifi } from "lucide-react";
import ServiceCaseStudiesSection from "@/components/ServiceCaseStudiesSection";
import { OtherCapabilitiesScrollSection } from "@/components/other-capabilities-scroll-section";
import { embeddedDesignOtherCapabilities as otherCapabilities } from "@/data/other-capabilities";
import { embeddedCaseStudies } from "@/data/service-case-studies";


export default function EmbeddedDesignServicesPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-grid-slate-100/[0.04] bg-[size:20px_20px]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium text-sm mb-6 border border-blue-100 shadow-sm">
              <Zap className="w-4 h-4" />
              <span>Expert Embedded Solutions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight">
              Embedded Firmware <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Development Service
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10">
              Our Firmware Life Cycle aligns with HW proto development and travels till production implementation and system maintenance.
            </p>
          </div>

          <div className="relative mx-auto mt-12 max-w-5xl rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-200">
            <Image
              src="/em-firm-services/image2.png"
              alt="Embedded firmware development service"
              width={1200}
              height={800}
              className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Proactive Insights */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden shadow-xl ring-1 ring-slate-200">
              <Image
                src="/em-firm-services/image3.png"
                alt="Embedded firmware development additional visual"
                width={1200}
                height={800}
                className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="order-1 lg:order-2 lg:pl-10">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6 leading-tight">
                Proactive Insights & Experience
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We understand the issues and challenges you will face in the field, and our proactive insights and experience can help you save both time and money.
              </p>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 transform transition-transform group-hover:scale-110 group-hover:rotate-12">
                  <Activity className="w-24 h-24 text-blue-900" />
                </div>
                <p className="text-blue-900 font-medium leading-relaxed relative z-10 text-lg">
                  We think on Day 1 about OTA, Battery optimization, Certification, Commissioning, On-field trouble shooting, Communication cost, MTBF, Security update and many other factors on day 1 and not while your device hit the field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform & Domain Expertise */}
      <section className="py-20 lg:py-32 bg-slate-50 border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Platform Expertise</h2>
            <p className="mt-4 text-lg text-slate-600">Comprehensive coverage across modern embedded hardware architectures powering next-generation devices.</p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-200 mb-24 max-w-5xl mx-auto bg-white p-2">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/em-firm-services/image5.png"
                alt="Platform expertise"
                width={1200}
                height={800}
                className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-16 text-center">Domain Expertise</h2>

            <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 mb-24 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-600 mb-8 shadow-sm">
                  <Wifi className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Router & Network Operating Systems</h3>
                <ul className="space-y-5">
                  {[
                    "OpenWrt-based router firmware development",
                    "OpenWiFi integration, firewall and VPN stacks",
                    "VLAN, QoS, and advanced routing protocols",
                    "Wi-Fi mesh networking and access point firmware",
                    "Network monitoring, diagnostics, and OTA updates"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 text-slate-700 text-lg">
                      <CheckCircle2 className="w-6 h-6 text-indigo-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-xl ring-1 ring-slate-200">
                <Image
                  src="/em-firm-services/image7.png"
                  alt="Router and network operating systems"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden shadow-xl ring-1 ring-slate-200">
                <Image
                  src="/em-firm-services/image7.png"
                  alt="Server-grade full stack firmware"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 mb-8 shadow-sm">
                  <Server className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Server-Grade Full stack Firmware</h3>
                <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                  End-to-end firmware development for server platforms - from board bring-up and power sequencing to secure remote management.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "BMC firmware (OpenBMC, IPMI, Redfish)",
                    "BIOS / UEFI development (EDK-II)",
                    "Linux bring-up for server platforms",
                    "CPLD / FPGA firmware for board control",
                    "Power sequencing and management",
                    "Sensor monitoring and telemetry",
                    "Secure boot, TPM, and integrity"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chipsets & Silicon Expertise */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Chipsets & Silicon Expertise</h2>
            <p className="mt-4 text-lg text-slate-600">
              Extensive experience across leading microcontroller silicon platforms powering modern embedded and IoT devices.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-200 mb-20">
            <Image
              src="/em-firm-services/image6.png"
              alt="Chipsets and silicon expertise"
              width={1920}
              height={900}
              className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-white rounded-3xl p-10 ring-1 ring-slate-200 shadow-sm hover:shadow-xl hover:ring-blue-500/50 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Cpu className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Microcontrollers</h3>
              <p className="text-xs font-bold text-blue-600 mb-6 uppercase tracking-widest">Multi-Vendor MCU Expertise</p>
              <ul className="space-y-4">
                {["STM32 (STM32F0 / F4 / H7 / WB)", "ESP32 family (ESP32, S3, C3)", "NXP (LPC, i.MX RT series)", "Renesas (RA, RX families)", "TI (MSP430, Sitara, SimpleLink)", "Nordic (nRF52 / nRF53 BLE)"].map((item, i) => (
                  <li key={i} className="flex gap-4 text-slate-600">
                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="group bg-white rounded-3xl p-10 ring-1 ring-slate-200 shadow-sm hover:shadow-xl hover:ring-indigo-500/50 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Silicon Bring-up & Integration</h3>
              <ul className="space-y-4">
                {["Board bring-up and silicon validation", "Peripheral driver development (SPI, I2C, UART, ADC)", "Clock tree configuration and power mgmt", "Bootloader design and flash memory mgmt"].map((item, i) => (
                  <li key={i} className="flex gap-4 text-slate-600">
                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="group bg-white rounded-3xl p-10 ring-1 ring-slate-200 shadow-sm hover:shadow-xl hover:ring-violet-500/50 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-violet-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Radio className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Connectivity Platforms</h3>
              <ul className="space-y-4">
                {["Wi-Fi and BLE SoCs", "LoRa / Sub-GHz radio platforms", "Sensor interface and mixed-signal integration", "Edge IoT device firmware architectures"].map((item, i) => (
                  <li key={i} className="flex gap-4 text-slate-600">
                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="group bg-white rounded-3xl p-10 ring-1 ring-slate-200 shadow-sm hover:shadow-xl hover:ring-emerald-500/50 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Battery className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Low-Power Design</h3>
              <ul className="space-y-4">
                {["Ultra-low power firmware for battery devices", "Sleep modes, wake sources and energy profiling", "Battery-powered sensor node design"].map((item, i) => (
                  <li key={i} className="flex gap-4 text-slate-600">
                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Standards & Reusable Firmware Libraries */}
      <section className="py-20 lg:py-32 bg-slate-950 text-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[128px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
              Standards & Reusable Libraries
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              To accelerate product development and ensure long-term maintainability, we build modular firmware frameworks and reusable libraries. Focus on security, reliability, and scalability for large IoT deployments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {[
              {
                icon: Shield, color: "text-blue-400", bg: "bg-blue-500/10",
                title: "Secure OTA",
                description: "Over-the-Air firmware updates for remote upgrades.",
                items: ["Signed/encrypted images", "Dual-bank rollback", "Delta updates", "Device auth"]
              },
              {
                icon: Battery, color: "text-emerald-400", bg: "bg-emerald-500/10",
                title: "Battery Mgmt",
                description: "Efficient power usage for remote IoT devices.",
                items: ["Advanced sleep", "Adaptive duty cycling", "Health monitoring", "Dynamic scaling"]
              },
              {
                icon: Radio, color: "text-violet-400", bg: "bg-violet-500/10",
                title: "Cellular Comm",
                description: "Secure communication stacks for cellular devices.",
                items: ["LTE-M/NB-IoT/GSM", "TLS / DTLS messaging", "MQTT / CoAP", "Auto-recovery"]
              },
              {
                icon: Fingerprint, color: "text-amber-400", bg: "bg-amber-500/10",
                title: "Commissioning",
                description: "Secure onboarding infrastructure for IoT ecosystems.",
                items: ["Identity provisioning", "QR/Mobile assisted", "Cloud registration", "Secure key exchange"]
              }
            ].map((card, idx) => (
              <div key={idx} className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.05] transition-colors relative overflow-hidden group">
                <div className={`w-14 h-14 rounded-2xl ${card.bg} flex items-center justify-center mb-6`}>
                  <card.icon className={`w-7 h-7 ${card.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-sm text-slate-400 mb-6">{card.description}</p>
                <ul className="space-y-3">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-slate-300 text-sm">
                      <CheckCircle2 className={`w-4 h-4 ${card.color} shrink-0 mt-0.5`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 mb-24">
            <Image
              src="/em-firm-services/image8.png"
              alt="Standards and reusable firmware libraries"
              width={1920}
              height={900}
              className="w-full h-auto object-cover transform transition-transform duration-1000 hover:scale-105 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Quality Standards */}
          <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-950 rounded-3xl p-10 lg:p-16 text-center shadow-2xl relative overflow-hidden border border-blue-500/30">
            <div className="absolute top-0 right-0 p-8 opacity-10 blur-xl">
              <Activity className="w-64 h-64 text-blue-400" />
            </div>

            <Activity className="w-16 h-16 text-blue-300 mx-auto mb-8 relative z-10" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 relative z-10">Our Coding Standards & Quality</h2>
            <p className="text-blue-100 max-w-3xl mx-auto text-lg mb-16 relative z-10">
              To ensure reliability in mission-critical embedded systems, our development process follows strict coding standards and validation procedures.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left relative z-10">
              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:bg-black/30 transition-colors">
                <div className="text-blue-400 mb-3 font-bold text-lg">01. MISRA-C / C++</div>
                <p className="text-sm text-blue-100 mb-4">Guidelines for safety-critical systems.</p>
                <ul className="text-sm text-blue-200 space-y-2">
                  <li className="flex gap-2"><span>•</span> Eliminates undefined behavior</li>
                  <li className="flex gap-2"><span>•</span> Improves maintainability</li>
                  <li className="flex gap-2"><span>•</span> Enforces determinism</li>
                </ul>
              </div>
              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:bg-black/30 transition-colors">
                <div className="text-blue-400 mb-3 font-bold text-lg">02. Static Analysis</div>
                <p className="text-sm text-blue-100 mb-4">Automated tools to detect issues early.</p>
                <ul className="text-sm text-blue-200 space-y-2">
                  <li className="flex gap-2"><span>•</span> Secure memory handling</li>
                  <li className="flex gap-2"><span>•</span> Vulnerability scanning</li>
                  <li className="flex gap-2"><span>•</span> Peer code reviews</li>
                </ul>
              </div>
              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:bg-black/30 transition-colors">
                <div className="text-blue-400 mb-3 font-bold text-lg">03. HIL Testing</div>
                <p className="text-sm text-blue-100 mb-4">Hardware limits in automated endpoints.</p>
                <ul className="text-sm text-blue-200 space-y-2">
                  <li className="flex gap-2"><span>•</span> Real-time interaction</li>
                  <li className="flex gap-2"><span>•</span> Timing validation</li>
                  <li className="flex gap-2"><span>•</span> Continuous integration</li>
                </ul>
              </div>
              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:bg-black/30 transition-colors">
                <div className="text-blue-400 mb-3 font-bold text-lg">04. Endurance Testing</div>
                <p className="text-sm text-blue-100 mb-4">Long-duration reliability testing.</p>
                <ul className="text-sm text-blue-200 space-y-2">
                  <li className="flex gap-2"><span>•</span> 24-72h endurance tests</li>
                  <li className="flex gap-2"><span>•</span> OTA validation</li>
                  <li className="flex gap-2"><span>•</span> Memory leak monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OtherCapabilitiesScrollSection capabilities={otherCapabilities} />
      <ServiceCaseStudiesSection
        eyebrow="Embedded Programs"
        studies={embeddedCaseStudies}
      />
    </main>
  );
}
