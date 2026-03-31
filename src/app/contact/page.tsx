"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle, ArrowRight } from "lucide-react";

type CountryKey = "United States" | "India";
type JobKey = "Careers  ( Jobs / Intern )" | "Suppliers / Vendors";

interface AddressData {
  name: string;
  address: string[];
  phone: string;
  email: string;
}

interface InputFieldProps {
  name: string;
  type?: string;
  label: string;
  required?: boolean;
  pattern?: string;
  isTextarea?: boolean;
  value: string;
  isFocused: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
}

const InputField = ({
  name,
  type = "text",
  label,
  required = true,
  pattern,
  isTextarea = false,
  value,
  isFocused,
  onChange,
  onFocus,
  onBlur,
}: InputFieldProps) => {
  const hasValue = value.length > 0;
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
      <div className="relative mt-6">
        <textarea
          name={name}
          required={required}
          className={`${baseClasses} resize-none min-h-[100px]`}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
        />
        <label htmlFor={name} className={labelClasses}>
          {label}
        </label>
      </div>
    );
  }

  return (
    <div className="relative mt-6">
      <input
        type={type}
        name={name}
        required={required}
        pattern={pattern}
        className={baseClasses}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
      />
      <label htmlFor={name} className={labelClasses}>
        {label}
      </label>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    emailError: "",
    phone: "",
    message: "",
  });
  const [showThankYou, setShowThankYou] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Logic gate inputs
  const [input1, setInput1] = useState(false);
  const [input2, setInput2] = useState(false);
  
  // Gate activation logic: active when exactly one input is active (failsafe to prevent BOTH active)
  const isGateActive = (input1 || input2) && !(input1 && input2);

  // API call to contact email endpoint
  const submitContactForm = async (data: typeof formData) => {
    console.log(data);
    const response = await fetch("http://localhost:8080/api/email/contact", {
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

  const addresses: Record<CountryKey, AddressData> = {
    "United States": {
      name: "Qmax Systems LLC",
      address: [
        "14105, Willow Tank Drive",
        "Austin, TX 78717",
        "United States",
      ],
      phone: "+1 412 265 2314",
      email: "info@qmaxsys.com",
    },
    India: {
      name: "Qmax Systems India Pvt Ltd",
      address: [
        "310/2A, Rukmani Nagar, 4th street,",
        "Poonamallee, Chennai 600056,",
        "Tamil Nadu, India",
      ],
      phone: "+91 98402 30903",
      email: "info@qmaxsys.com",
    },
  };

  const jobs: Record<JobKey, AddressData> = {
    "Careers  ( Jobs / Intern )": {
      name: "Qmax Systems India Pvt Ltd",
      address: [
        "310/2A, Rukmani Nagar, 4th street,",
        "Poonamallee, Chennai 600056,",
        "Tamil Nadu, India",
      ],
      phone: "+91 73054 50580",
      email: "careers@qmaxsys.com",
    },
    "Suppliers / Vendors": {
      name: "Qmax Systems India Pvt Ltd",
      address: [
        "310/2A, Rukmani Nagar, 4th street,",
        "Poonamallee, Chennai 600056,",
        "Tamil Nadu, India",
      ],
      phone: "+91 73054 50580",
      email: "purchase@qmaxsys.com",
    },
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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            
            {/* Left Column - Contact Form */}
            <div>
              <p className="text-brand-red font-medium tracking-widest text-sm uppercase mb-4">
                Get in Touch
              </p>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-4">
                Let&apos;s Build{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600">
                  Something Great
                </span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Discuss your project with us today. We&apos;re here to transform your ideas into exceptional solutions.
              </p>
              
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
                    <InputField
                      name="name"
                      label="Your Name"
                      value={formData.name}
                      isFocused={focusedField === "name"}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                    />
                    <InputField
                      name="email"
                      type="email"
                      label="Email Address"
                      value={formData.email}
                      isFocused={focusedField === "email"}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                    />
                    <InputField
                      name="phone"
                      type="tel"
                      label="Phone Number"
                      pattern="^([0|\+[0-9]{1,5})?([1-9][0-9]{9})$"
                      value={formData.phone}
                      isFocused={focusedField === "phone"}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                    />
                    <InputField
                      name="message"
                      label="Your Message"
                      isTextarea
                      value={formData.message}
                      isFocused={focusedField === "message"}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                    />

                    <div className="pt-8 pb-4">
                      <div className="group relative flex items-center w-max">
                        {/* Input Pins as Toggle Switches */}
                        <div className="flex flex-col justify-center gap-4 mr-0 z-0">
                          {/* Input 1 */}
                          <button
                            type="button"
                            onClick={() => setInput1(!input1)}
                            className="flex items-center group/pin focus:outline-none"
                            title="Toggle Input 1"
                          >
                            <div className={`w-[2.5rem] h-[1.5rem] rounded-md border-2 flex items-center px-0.5 transition-colors duration-300 relative overflow-hidden ${input1 ? 'border-brand-red bg-red-50/50' : 'border-gray-800 bg-white'}`}>
                               <div className={`w-3.5 h-4 rounded-sm shadow-sm transition-all duration-300 ${input1 ? 'bg-brand-red translate-x-[1.1rem]' : 'bg-gray-800 translate-x-0'}`}></div>
                            </div>
                            <div className={`w-4 h-[3px] transition-colors duration-300 shadow-sm relative ${input1 ? 'bg-brand-red' : 'bg-gray-800 group-hover/pin:bg-gray-600'}`}>
                              {input1 && <div className="absolute top-1/2 -translate-y-1/2 left-1 w-2 h-2 rounded-full bg-brand-red opacity-100 animate-ping"></div>}
                            </div>
                          </button>

                          {/* Input 2 */}
                          <button
                            type="button"
                            onClick={() => setInput2(!input2)}
                            className="flex items-center group/pin focus:outline-none"
                            title="Toggle Input 2"
                          >
                            <div className={`w-[2.5rem] h-[1.5rem] rounded-md border-2 flex items-center px-0.5 transition-colors duration-300 relative overflow-hidden ${input2 ? 'border-brand-red bg-red-50/50' : 'border-gray-800 bg-white'}`}>
                               <div className={`w-3.5 h-4 rounded-sm shadow-sm transition-all duration-300 ${input2 ? 'bg-brand-red translate-x-[1.1rem]' : 'bg-gray-800 translate-x-0'}`}></div>
                            </div>
                            <div className={`w-4 h-[3px] transition-colors duration-300 shadow-sm relative ${input2 ? 'bg-brand-red' : 'bg-gray-800 group-hover/pin:bg-gray-600'}`}>
                              {input2 && <div className="absolute top-1/2 -translate-y-1/2 left-1 w-2 h-2 rounded-full bg-brand-red opacity-100 animate-ping" style={{ animationDelay: "150ms" }}></div>}
                            </div>
                          </button>
                        </div>

                        {/* Gate Body (The Button) */}
                        <button
                          type="submit"
                          disabled={loading || !isGateActive}
                          className={`
                            relative z-10 flex items-center justify-center gap-3
                            px-8 py-5 ml-[-2px]
                            border-[3px] 
                            bg-white
                            rounded-l-md rounded-r-[3.5rem]
                            font-bold text-lg tracking-wider
                            transition-all duration-300 ease-out
                            ${loading 
                              ? "border-gray-300 bg-gray-50 text-gray-400 cursor-not-allowed" 
                              : !isGateActive
                                ? "border-gray-800 text-gray-400 opacity-80 cursor-not-allowed"
                                : "border-brand-red text-brand-red shadow-[0_0_20px_rgba(255,17,17,0.15)] scale-[1.02] active:scale-[0.98]"
                            }
                          `}
                        >
                          {/* Inner circuit pattern decoration */}
                          <div className="absolute inset-0 rounded-l-[4px] rounded-r-[3.3rem] overflow-hidden pointer-events-none">
                            <div className={`absolute inset-0 bg-[linear-gradient(90deg,transparent_2px,#f3f4f6_2px,#f3f4f6_3px,transparent_3px)] bg-[size:10px_100%] transition-opacity duration-500 ${isGateActive ? 'opacity-50' : 'opacity-0'}`}></div>
                            {/* Logic Gate Symbol (NAND) */}
                            <span className={`absolute right-4 top-1/2 -translate-y-1/2 text-4xl font-serif font-black transition-opacity duration-300 select-none ${isGateActive ? 'text-brand-red/10 opacity-100' : 'text-gray-200 opacity-50'}`}>NAND</span>
                          </div>

                          {loading ? (
                            <>
                              <svg
                                className="animate-spin h-5 w-5 mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              Processing...
                            </>
                          ) : (
                            <>
                              <span className={`relative z-10 uppercase transition-colors duration-300 ${isGateActive ? 'text-brand-red' : 'text-gray-500'}`}>
                                Send Message
                              </span>
                              <Send className={`relative z-10 w-5 h-5 transition-all duration-300 ${isGateActive ? 'text-brand-red translate-x-1' : 'text-gray-400'}`} />
                            </>
                          )}
                        </button>

                        {/* Inversion Bubble (NAND characteristic) */}
                        <div className={`w-4 h-4 rounded-full border-[3px] transition-colors duration-300 ml-[-4px] z-10 ${loading ? 'border-gray-300 bg-gray-50' : isGateActive ? 'border-brand-red bg-white shadow-[0_0_10px_rgba(255,17,17,0.2)]' : 'border-gray-800 bg-white'}`}></div>

                        {/* Output Pin */}
                        <div className={`w-8 h-[3px] transition-colors duration-300 ml-[-4px] z-0 flex items-center justify-end shadow-sm ${loading ? 'bg-gray-300' : isGateActive ? 'bg-brand-red' : 'bg-gray-800'}`}>
                        </div>
                        
                        {/* Output Node */}
                        <div className={`w-3 h-3 rounded-full border-[3px] transition-colors duration-300 ml-[-2px] z-10 ${loading ? 'border-gray-300 bg-gray-50' : isGateActive ? 'border-brand-red bg-brand-red shadow-[0_0_10px_rgba(255,17,17,0.5)]' : 'border-gray-800 bg-white'}`}></div>
                      </div>
                      
                      {/* Subtext description */}
                      <p className={`text-xs mt-4 ml-1 font-mono flex items-center gap-2 transition-colors duration-300 ${isGateActive ? 'text-gray-900' : 'text-gray-500'}`}>
                        <span className={`w-2 h-2 rounded-full border inline-block transition-colors ${isGateActive ? 'bg-green-500 border-green-600' : 'bg-transparent border-gray-400'}`}></span>
                        {isGateActive ? 'Connection ready' : (input1 && input2) ? 'Output low (NAND logic)' : 'Flip switch to activate connection'}
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column - Contact Us Section */}
            <div className="lg:sticky lg:top-32">
       
              <h2 className="text-xl font-semibold mb-6 text-gray-900">CONTACT US</h2>
              
              {/* Contact Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {/* Address Cards */}
                {(Object.keys(addresses) as CountryKey[]).map((country) => (
                  <div 
                    key={country} 
                    className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                  >
                    <div className="w-full font-bold text-left px-4 py-3 text-sm bg-brand-red text-white flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {country}
                    </div>
                    <div className="p-4 text-sm bg-zinc-800 h-full">
                      <p className="font-semibold text-white mb-2">{addresses[country].name}</p>
                      <div className="text-gray-400 space-y-0.5 mb-3">
                        {addresses[country].address.map((line, index) => (
                          <p key={index}>{line}</p>
                        ))}
                      </div>
                      <a 
                        href={`tel:${addresses[country].phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-2"
                      >
                        <Phone className="w-3.5 h-3.5 text-brand-red" />
                        {addresses[country].phone}
                      </a>
                      <button
                        onClick={() => {
                          const timestamp = Date.now();
                          const email = addresses[country].email;
                          const subject = encodeURIComponent(
                            "Inquiry from Qmax Systems Website"
                          );
                          const body = encodeURIComponent(
                            "Hello,\n\nI would like to get in touch with Qmax Systems.\n\nBest regards,"
                          );
                          const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}&_t=${timestamp}`;
                          window.location.href = mailtoUrl;
                          setTimeout(() => {
                            window.open(mailtoUrl, "_blank");
                          }, 100);
                        }}
                        className="flex items-center gap-2 text-brand-red hover:text-[#FF1111] cursor-pointer bg-transparent border-none p-0 text-left transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        {addresses[country].email}
                      </button>
                    </div>
                  </div>
                ))}

                {/* Jobs Cards */}
                {(Object.keys(jobs) as JobKey[]).map((key) => (
                  <div 
                    key={key} 
                    className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                  >
                    <div className="w-full font-bold text-left px-4 py-3 text-sm bg-brand-red text-white flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      {key}
                    </div>
                    <div className="p-4 text-sm bg-zinc-800 h-full">
                      <p className="font-semibold text-white mb-2">{jobs[key].name}</p>
                      <div className="text-gray-400 space-y-0.5 mb-3">
                        {jobs[key].address.map((line, index) => (
                          <p key={index}>{line}</p>
                        ))}
                      </div>
                      <a 
                        href={`tel:${jobs[key].phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-2"
                      >
                        <Phone className="w-3.5 h-3.5 text-brand-red" />
                        {jobs[key].phone}
                      </a>
                      <button
                        onClick={() => {
                          const timestamp = Date.now();
                          const email = jobs[key].email;
                          const subject = encodeURIComponent(
                            `Inquiry for ${key} - Qmax Systems`
                          );
                          const body = encodeURIComponent(
                            "Hello,\n\nI would like to get in touch regarding " +
                              key +
                              ".\n\nBest regards,"
                          );
                          const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}&_t=${timestamp}`;
                          window.location.href = mailtoUrl;
                          setTimeout(() => {
                            window.open(mailtoUrl, "_blank");
                          }, 100);
                        }}
                        className="flex items-center gap-2 text-brand-red hover:text-[#FF1111] cursor-pointer bg-transparent border-none p-0 text-left transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        {jobs[key].email}
                      </button>
                    </div>
                  </div>
                ))}
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