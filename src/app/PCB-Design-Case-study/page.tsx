"use client";

import React from "react";
import { motion } from "framer-motion";
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {pcbCaseStudies.map((study) => (
            <PCBCaseStudyCard key={study.id} {...study} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PCBCaseStudyGrid;
