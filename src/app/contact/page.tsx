"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle, ArrowRight } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showThankYou, setShowThankYou] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Real API call to JSONPlaceholder
  const submitContactForm = async (data: typeof formData) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setShowThankYou(false);
    await submitContactForm(formData);
    setLoading(false);
    setShowThankYou(true);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const offices = [
    {
      country: "United States",
      name: "Qmax Systems LLC",
      address: ["14105 Willow Tank Drive", "Austin, TX 78717", "USA"],
      phone: "+1-412-265-2314",
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

  const InputField = ({
    name,
    type = "text",
    label,
    required = true,
    pattern,
    isTextarea = false,
  }: {
    name: string;
    type?: string;
    label: string;
    required?: boolean;
    pattern?: string;
    isTextarea?: boolean;
  }) => {
    const isFocused = focusedField === name;
    const hasValue = formData[name as keyof typeof formData].length > 0;
    const isActive = isFocused || hasValue;

    const baseClasses = `
      w-full px-0 py-4 bg-transparent border-0 border-b-2 
      transition-all duration-300 ease-out
      text-gray-900 text-lg
      focus:outline-none focus:ring-0
      placeholder-transparent
      ${isFocused ? "border-brand-red" : "border-gray-200 hover:border-gray-400"}
    `;

    const labelClasses = `
      absolute left-0 transition-all duration-300 ease-out pointer-events-none
      ${isActive ? "top-0 text-xs font-medium" : "top-4 text-lg"}
      ${isFocused ? "text-brand-red" : "text-gray-500"}
    `;

    if (isTextarea) {
      return (
        <div className="relative mt-8">
          <textarea
            name={name}
            required={required}
            className={`${baseClasses} resize-none min-h-[120px]`}
            onChange={handleChange}
            onFocus={() => setFocusedField(name)}
            onBlur={() => setFocusedField(null)}
            value={formData[name as keyof typeof formData]}
          />
          <label htmlFor={name} className={labelClasses}>
            {label}
          </label>
        </div>
      );
    }

    return (
      <div className="relative mt-8">
        <input
          type={type}
          name={name}
          required={required}
          pattern={pattern}
          className={baseClasses}
          onChange={handleChange}
          onFocus={() => setFocusedField(name)}
          onBlur={() => setFocusedField(null)}
          value={formData[name as keyof typeof formData]}
        />
        <label htmlFor={name} className={labelClasses}>
          {label}
        </label>
      </div>
    );
  };

  return (
    <main className="bg-white">
      {/* Hero + Contact Form Section - Combined for immediate access */}
      <section className="relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
        
        {/* Subtle pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />

        {/* Decorative element */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full hidden lg:block pointer-events-none">
          <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-gradient-to-br from-brand-red/5 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-6 pt-20 pb-8 md:pt-24 md:pb-8 lg:pt-28 lg:pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* Left Column - Hero Content + Quick Contact */}
            <div className="lg:sticky lg:top-32">
              {/* Eyebrow text */}
              <p className="text-brand-red font-medium tracking-widest text-sm uppercase mb-4">
                Get in Touch
              </p>
              
              {/* Main heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6">
                Let&apos;s Build<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600">
                  Something Great
                </span>
              </h1>
              
              {/* Subheading */}
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
                Discuss your project with us today. We&apos;re here to transform your ideas into exceptional solutions.
              </p>

              {/* Quick Contact Card */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 lg:p-8 text-white shadow-xl relative overflow-hidden">
                <h3 className="text-lg font-semibold mb-5">Quick Contact</h3>
                
                <div className="space-y-4">
                  <a 
                    href="tel:+14122652314" 
                    className="flex items-center gap-4 group hover:opacity-80 transition-opacity"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-red transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Call us</p>
                      <p className="font-medium">+1-412-265-2314</p>
                    </div>
                  </a>

                  <a 
                    href="mailto:info@qmaxsys.com"
                    className="flex items-center gap-4 group hover:opacity-80 transition-opacity"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-red transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Email us</p>
                      <p className="font-medium">info@qmaxsys.com</p>
                    </div>
                  </a>
                </div>

                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-red/20 to-transparent rounded-2xl blur-2xl" />
              </div>

              {/* Why Work With Us - Stats Card */}
              <div className="mt-6 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Why Work With Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-red/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-lg font-bold text-gray-900">25+</span>
                      <p className="text-xs text-gray-500">Years</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-red/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-lg font-bold text-gray-900">500+</span>
                      <p className="text-xs text-gray-500">Projects</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-red/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-lg font-bold text-gray-900">24hr</span>
                      <p className="text-xs text-gray-500">Response</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-red/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-lg font-bold text-gray-900">2</span>
                      <p className="text-xs text-gray-500">Offices</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Send us a message
                </h2>
                <p className="text-gray-500 mb-6">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>

                {showThankYou ? (
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          Message Sent!
                        </h3>
                        <p className="text-gray-600">
                          Thank you for reaching out.
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      We&apos;ve received your message and will get back to you shortly. 
                      In the meantime, feel free to explore our case studies.
                    </p>
                    <button
                      onClick={() => setShowThankYou(false)}
                      className="mt-6 text-brand-red font-medium hover:underline inline-flex items-center gap-2 group"
                    >
                      Send another message
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-2">
                    <InputField name="name" label="Your Name" />
                    <InputField name="email" type="email" label="Email Address" />
                    <InputField
                      name="phone"
                      type="tel"
                      label="Phone Number"
                      pattern="^([0|\+[0-9]{1,5})?([1-9][0-9]{9})$"
                    />
                    <InputField name="message" label="Your Message" isTextarea />

                    <div className="pt-8">
                      <button
                        type="submit"
                        disabled={loading}
                        className={`
                          group relative inline-flex items-center justify-center gap-3
                          px-8 py-4 rounded-full font-semibold text-lg
                          transition-all duration-300 ease-out
                          ${loading 
                            ? "bg-gray-200 text-gray-500 cursor-not-allowed" 
                            : "bg-gray-900 text-white hover:bg-brand-red hover:shadow-lg hover:shadow-brand-red/25 hover:-translate-y-0.5"
                          }
                        `}
                      >
                        {loading ? (
                          <>
                            <svg
                              className="animate-spin h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="relative py-8 lg:py-8 bg-gray-50">
        {/* Section header */}
        <div className="container mx-auto px-6 mb-16">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-brand-red font-medium tracking-widest text-sm uppercase mb-4">
              Our Locations
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Global Presence
            </h2>
            <p className="text-xl text-gray-600">
              With offices across continents, we&apos;re always close to you.
            </p>
          </div>
        </div>

        {/* Office Cards */}
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {offices.map((office) => (
              <div
                key={office.country}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Map */}
                <div className="relative h-64 overflow-hidden">
                  <iframe
                    src={office.mapSrc}
                    className="w-full h-full border-0"
                    loading="lazy"
                    title={`${office.country} Office Location`}
                  />
                  {/* Country badge */}
                  <div className="absolute top-4 right-4 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-brand-red" />
                      <span className="font-semibold text-gray-900">{office.country}</span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {office.name}
                  </h3>

                  <div className="space-y-4 text-gray-600">
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
                      className="flex items-center gap-3 hover:text-brand-red transition-colors"
                    >
                      <Phone className="w-5 h-5 text-gray-400" />
                      <span>{office.phone}</span>
                    </a>

                    {/* Email */}
                    <a
                      href={`mailto:${office.email}`}
                      className="flex items-center gap-3 hover:text-brand-red transition-colors"
                    >
                      <Mail className="w-5 h-5 text-gray-400" />
                      <span>{office.email}</span>
                    </a>
                  </div>

                  {/* CTA */}
                  <a
                    href={`mailto:${office.email}?subject=Inquiry from Qmax Website`}
                    className="inline-flex items-center gap-2 mt-6 text-brand-red font-medium hover:gap-3 transition-all"
                  >
                    Get Directions
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;



    // {/* Bottom CTA Section */}
    //   <section className="relative py-20 lg:py-32 overflow-hidden">
    //     {/* Background gradient */}
    //     <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800" />
        
    //     {/* Decorative elements */}
    //     <div className="absolute top-0 left-0 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl" />
    //     <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl" />

    //     <div className="relative container mx-auto px-6 text-center">
    //       <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
    //         Ready to Start Your Project?
    //       </h2>
    //       <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
    //         Request a quote online or call us directly. Our team is ready to bring your vision to life.
    //       </p>
    //       <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
    //         <a
    //           href="tel:+14122652314"
    //           className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
    //         >
    //           <Phone className="w-5 h-5" />
    //           +1-412-265-2314
    //         </a>
    //         <a
    //           href="mailto:info@qmaxsys.com"
    //           className="inline-flex items-center gap-3 px-8 py-4 bg-brand-red text-white rounded-full font-semibold text-lg hover:bg-red-600 transition-colors shadow-lg shadow-brand-red/25"
    //         >
    //           <Mail className="w-5 h-5" />
    //           Request a Quote
    //         </a>
    //       </div>
    //     </div>
    //   </section>