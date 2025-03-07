import Image from "next/image";
import React from "react";

export interface CaseStudyCardProps {
  title: string;
  image: string;
  link: string;
  category?: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  image,
  link,
  category,
}) => {
  return (
    <div className={`group relative ${category}`}>
      <a href={link} className="block">
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <div className="relative">
            <Image
              src={image}
              alt={title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              height={500}
              width={500}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
            <h3 className="text-white font-semibold text-lg">{title}</h3>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CaseStudyCard;
