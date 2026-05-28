"use client";

import { MapPin, Phone, Mail } from "lucide-react";

export default function GlobalPresence() {
  const offices = [
    {
      location: "United States",
      company: "Qmax Systems LLC",
      address: "539 W Commerce St # 7953",
      city: "Dallas, TX 75208 - 1953",
      phone: "+1 412 265 2314",
      email: "info@qmaxsys.com",
    },
    {
      location: "India",
      company: "Qmax Systems India Pvt Ltd",
      address: "310/2A Rukmani Nagar 4th Street",
      city: "Poonamallee, Chennai 600056, Tamil Nadu",
      phone: "+91 98402 30903",
      email: "info@qmaxsys.com",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="mb-2 text-foreground">
            Global <span className="text-red-500">Presence</span>
          </h2>
          <p className="text-lg mt-6 max-w-2xl mx-auto text-foreground">
            With offices in Dallas, Texas and Chennai, India, we provide 24/7
            engineering support and rapid prototyping capabilities to clients
            worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offices.map((office, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="text-red-500 shrink-0" size={24} />
                <h3 className="text-foreground">{office.location}</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-lg font-semibold text-foreground">
                    {office.company}
                  </p>
                </div>

                <div>
                  <p className="text-base text-foreground">{office.address}</p>
                  <p className="text-base text-foreground">{office.city}</p>
                </div>

                <div className="border-t border-gray-200 pt-4 space-y-3">
                  <a
                    href={`tel:${office.phone}`}
                    className="flex items-center gap-3 text-red-500 hover:text-red-600 transition-colors"
                  >
                    <Phone size={18} />
                    <span className="font-semibold">{office.phone}</span>
                  </a>
                  <a
                    href={`mailto:${office.email}`}
                    className="flex items-center gap-3 text-red-500 hover:text-red-600 transition-colors"
                  >
                    <Mail size={18} />
                    <span className="font-semibold">{office.email}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
