import React from "react";
import PCBCaseStudyCard from "@/components/PCBCaseStudyCard";

const PCBCaseStudyGrid = () => {
  const pcbCaseStudies = [
    {
      id: 1,
      title: "Industrial Controller",
      image:
        "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Industrial-Control-2.png",
      link: "case-studies/Industrial-Controller.html",
      category: "development",
    },
    {
      id: 2,
      title: "Aerospace PCB",
      image:
        "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Aerospace-PCB.png",
      link: "case-studies/Aerospace-PCB.html",
      category: "development",
    },
    {
      id: 3,
      title: "Automotive OBD",
      image:
        "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Automotive-OBD.png",
      link: "case-studies/Automotive-OBD.html",
      category: "development",
    },
    {
      id: 4,
      title: "Security Controller",
      image:
        "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Security-Controller.png",
      link: "case-studies/Security-Controller.html",
      category: "development",
    },
    {
      id: 5,
      title: "Automotive HID PCB",
      image:
        "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Automotive-HID-PCB.png",
      link: "case-studies/Automotive-HID-PCB.html",
      category: "development",
    },
    {
      id: 6,
      title: "Networking Device",
      image:
        "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Networking-Device-2.png",
      link: "case-studies/Networking-Device.html",
      category: "development",
    },
    {
      id: 7,
      title: "Networking Switch",
      image:
        "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Networking-Device.png",
      link: "case-studies/Networking-Switch.html",
      category: "development",
    },
    {
      id: 8,
      title: "Blade NIC Server",
      image:
        "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Blade-NIC-Server.png",
      link: "case-studies/Blade-NIC-Server.html",
      category: "development",
    },
    {
      id: 9,
      title: "ATE - PCB",
      image:
        "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/ATE-a.png",
      link: "case-studies/ATE-PCB.html",
      category: "development",
    },
    {
      id: 10,
      title: "IOT Gateway",
      image:
        "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/IOT-Gateway.png",
      link: "case-studies/IOT-Gateway.html",
      category: "development",
    },
    {
      id: 11,
      title: "Automotive Control",
      image:
        "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Automotive-Control.png",
      link: "case-studies/Automotive-Control.html",
      category: "development",
    },
    {
      id: 12,
      title: "Automotive Keypad Interface",
      image:
        "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Automotive-Keypad-Interface.png",
      link: "case-studies/Automotive-Keypad-Interface.html",
      category: "development",
    },
    {
      id: 13,
      title: "Medical Electronics",
      image:
        "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Medical.png",
      link: "case-studies/Medical-Electronics.html",
      category: "development",
    },
    {
      id: 14,
      title: "Video Processor",
      image:
        "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Video-Processor.png",
      link: "case-studies/Video-Processor.html",
      category: "development",
    },
    {
      id: 15,
      title: "Set Top Box",
      image:
        "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/STB-a.png",
      link: "case-studies/Set-Top-Box.html",
      category: "development",
    },
    {
      id: 16,
      title: "Wi-Fi AP",
      image:
        "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Wi-Fi-AP.png",
      link: "case-studies/Wi-Fi-AP.html",
      category: "development",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 bg-[#f8f8f6]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_12%,rgba(243,49,23,0.08),transparent_42%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,0.82))]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 border-b border-zinc-300/70 pb-6">
          <div>
            <span className="inline-block text-[10px] font-black tracking-[0.38em] text-red-500 uppercase mb-3">
              PCB Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-zinc-950">
              Case Studies.
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
          {pcbCaseStudies.map((study) => (
            <PCBCaseStudyCard key={study.id} {...study} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PCBCaseStudyGrid;
