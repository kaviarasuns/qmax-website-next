import { pcbDesingTerms } from "@/components/pcbDesignTerms";
import React from "react";

const GlossaryList = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">
        {pcbDesingTerms.map((item, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-bold text-red-500 mb-2">
              {item.term}
            </h3>
            <p className="text-justify leading-relaxed text-muted-foreground">
              {item.definition}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlossaryList;
