import { glossaryTerms } from "@/components/glossaryTerms";
import React from "react";

const GlossaryList = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {glossaryTerms.map((item, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-bold text-orange-500 mb-2">
              {item.term}
            </h3>
            <p className="text-gray-700 text-justify leading-relaxed">
              {item.definition}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlossaryList;
