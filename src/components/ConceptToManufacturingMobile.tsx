// ConceptToManufacturingMobile.jsx
const ConceptToManufacturingMobile = () => {
  return (
    <div className="xl:hidden">
      {" "}
      {/* Only show on smaller screens */}
      <section className="py-8 bg-gray-100">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="container mx-auto animate-fadeIn">
            <div className="mb-12 text-center">
              <div className="mb-8">
                <h1 className="text-3xl font-bold md:text-4xl">
                  Concept
                  <span className="text-primary"> To</span> Manufacturing
                </h1>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-full">
                <img
                  src="https://d1yetprhniwywz.cloudfront.net/images/Concept-to-Manufacturing.png"
                  alt="Concept to Manufacturing Process"
                  className="w-full rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConceptToManufacturingMobile;
