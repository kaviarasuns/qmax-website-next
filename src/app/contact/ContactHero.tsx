"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

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
    w-full px-0 py-2.5 bg-transparent border-0 border-b-2
    transition-all duration-300 ease-out
    text-gray-900 text-base
    focus:outline-none focus:ring-0
    placeholder-transparent
    ${isFocused ? "border-brand-red" : "border-gray-200 hover:border-gray-400"}
  `;

  const labelClasses = `
    absolute left-0 transition-all duration-300 ease-out pointer-events-none
    ${isActive ? "top-0 text-xs font-medium" : "top-2.5 text-base"}
    ${isFocused ? "text-brand-red" : "text-gray-500"}
  `;

  if (isTextarea) {
    return (
      <div className="relative mt-4">
        <textarea
          name={name}
          required={required}
          className={`${baseClasses} resize-none min-h-[64px]`}
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
    <div className="relative mt-4">
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

const ContactHero = () => {
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
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="relative h-full flex items-start justify-center overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Decorative element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full hidden lg:block pointer-events-none">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-gradient-to-br from-brand-red/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 py-6 md:py-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          {/* Left Column - Contact Form */}
          <div>
            <p className="text-brand-red font-medium tracking-widest text-xs uppercase mb-2">
              Get in Touch
            </p>
            <h1 className="mb-4 lg:mb-6 text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-[1.1] tracking-tight">
              Let&apos;s Build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600">
                Something Great
              </span>
            </h1>

            <div className="bg-white rounded-3xl p-5 lg:p-6 shadow-xl border border-gray-100">
              <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                Send us a message
              </h2>
              <p className="text-gray-500 text-xs mb-3">
                Fill out the form below and we&apos;ll get back to you within
                24 hours.
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
                    We&apos;ve received your message and will get back to you
                    shortly. In the meantime, feel free to explore our case
                    studies.
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

                  <div className="pt-5">
                    <button
                      type="submit"
                      disabled={loading}
                      className={`
                        w-full md:w-max flex items-center justify-center gap-3
                        px-7 py-3 bg-[#0F111A] text-white
                        rounded-full font-medium text-base
                        transition-all duration-300 ease-out
                        hover:bg-[#1A1D29] hover:shadow-xl hover:shadow-[#0F111A]/10
                        active:scale-[0.98]
                        disabled:bg-gray-300 disabled:cursor-not-allowed disabled:shadow-none
                      `}
                    >
                      {loading ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5 mr-3 text-white"
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
                          <span>Send Message</span>
                          <Send className="w-5 h-5 stroke-[1.5]" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column - Contact Us Section */}
          <div>
            {/* Spacer to vertically align CONTACT US with the form card on lg+.
                Must mirror the eyebrow + h1 markup on the left exactly so
                heights match. */}
            <div className="hidden lg:block invisible" aria-hidden="true">
              <p className="text-brand-red font-medium tracking-widest text-xs uppercase mb-2">
                Get in Touch
              </p>
              <h1 className="mb-4 lg:mb-6 text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.1] tracking-tight">
                Let&apos;s Build Something Great
              </h1>
            </div>
            <h2 className="text-lg font-semibold mb-3 text-gray-900 tracking-wide">
              CONTACT US
            </h2>

            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    <p className="font-semibold text-white mb-2">
                      {addresses[country].name}
                    </p>
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
                          "Inquiry from Qmax Systems Website",
                        );
                        const body = encodeURIComponent(
                          "Hello,\n\nI would like to get in touch with Qmax Systems.\n\nBest regards,",
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
                    <p className="font-semibold text-white mb-2">
                      {jobs[key].name}
                    </p>
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
                          `Inquiry for ${key} - Qmax Systems`,
                        );
                        const body = encodeURIComponent(
                          "Hello,\n\nI would like to get in touch regarding " +
                            key +
                            ".\n\nBest regards,",
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
  );
};

export default ContactHero;
