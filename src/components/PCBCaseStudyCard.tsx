import React from "react";
import { motion } from "framer-motion";

const PCBCaseStudyCard = ({ title, image, link, category }: any) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={`group relative ${category}`}
    >
      <a
        href={link}
        className="block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <div className="relative aspect-w-16 aspect-h-9">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <h3 className="text-white font-semibold text-lg tracking-wide">
            {title}
          </h3>
        </div>
      </a>
    </motion.div>
  );
};

export default PCBCaseStudyCard;
