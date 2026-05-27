import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

interface OfficeData {
  country: string;
  name: string;
  address: string[];
  phone: string;
  email: string;
  mapSrc: string;
}

const offices: OfficeData[] = [
  {
    country: "United States",
    name: "Qmax Systems LLC",
    address: [
      "539 W Commerce St # 7953",
      "Dallas, TX 75208 - 1953",
      "United States",
    ],
    phone: "+1 412 265 2314",
    email: "info@qmaxsys.com",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3438.0686396845626!2d-97.7954428240553!3d30.490807874701883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b2d4e291550c1%3A0xee9f813c2cf8bced!2s14105%20Willow%20Tank%20Dr%2C%20Austin%2C%20TX%2078717%2C%20USA!5e0!3m2!1sen!2sin!4v1767094405947!5m2!1sen!2sin",
  },
  {
    country: "India",
    name: "Qmax Systems India Pvt Ltd",
    address: [
      "310/2A, Rukmani Nagar, 4th Street",
      "Poonamallee, Chennai 600056",
      "Tamil Nadu, India",
    ],
    phone: "+91 98402 30903",
    email: "info@qmaxsys.com",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.6955679018807!2d80.08919102921392!3d13.0495264994253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52668f4cf2efc1%3A0x005ba71a15070958!2sQmax+Systems+India+Pvt+Ltd!5e0!3m2!1sen!2sin!4v1466154371130",
  },
];

const getLocationUrl = ({
  name,
  address,
}: Pick<OfficeData, "name" | "address">) => {
  const query = encodeURIComponent(`${name}, ${address.join(", ")}`);
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
};

const OfficeLocations = () => {
  return (
    <section className="relative h-full bg-gray-50 flex flex-col items-center justify-center overflow-y-auto py-8 lg:py-12">
      <div className="mb-24"></div>
      {/* Section header */}
      <div className="container mx-auto px-6 mb-12 lg:mb-16">
        <div className="text-center max-w-2xl mx-auto mb-7">
          <h2>
            Our <span className="text-red-500">Locations</span>
          </h2>
        </div>
      </div>

      {/* Office Cards */}
      <div className="container mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {offices.map((office) => (
            <div
              key={office.country}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Map */}
              <div className="relative h-48 overflow-hidden">
                <iframe
                  src={office.mapSrc}
                  className="w-full h-full border-0"
                  loading="lazy"
                  title={`${office.country} Office Location`}
                />
                {/* Country badge */}
                <div className="absolute top-4 right-4 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span className="font-semibold text-gray-900">
                      {office.country}
                    </span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold mb-3">
                  {office.name}
                </h3>

                <div className="space-y-2.5 text-gray-600 text-sm">
                  {/* Address */}
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <div>
                      {office.address.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </div>

                  {/* Phone */}
                  <a
                    href={`tel:${office.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 hover:text-red-500 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-gray-400" />
                    <span>{office.phone}</span>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${office.email}`}
                    className="flex items-center gap-3 hover:text-red-500 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-gray-400" />
                    <span>{office.email}</span>
                  </a>
                </div>

                {/* CTA */}
                <a
                  href={getLocationUrl(office)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-red-500 font-medium text-sm hover:gap-3 transition-all"
                >
                  Get Directions
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-24"></div>
    </section>
  );
};

export default OfficeLocations;
