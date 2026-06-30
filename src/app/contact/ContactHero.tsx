"use client";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { collectSubmissionMeta, submitContactForm } from "@/lib/formSubmission";

const FORM_SOURCE = "contact-page";

const CONSENT_TEXT =
  "By submitting, you agree to be contacted about your inquiry. Your data is secure with us; we never leak, share, or sell your details to third parties.";

type CountryKey = "United States" | "India";
type JobKey = "Careers  ( Jobs / Internships )" | "Suppliers / Vendors";

const CONTACT_EMAIL_BUTTON_CLASS =
  "block w-full cursor-pointer bg-transparent border-none p-0 text-left text-[15px] text-white transition-colors duration-150 hover:text-red-500";

const CONTACT_CARD_HEADER_CLASS =
  "w-full font-bold text-left px-4 py-3 text-[15px] bg-brand-red text-white flex items-center gap-2";

const CONTACT_CARD_BODY_CLASS =
  "px-4 pt-4 text-[15px] leading-8 text-white bg-zinc-800 flex-1";

const CONTACT_CARD_NAME_CLASS = "mb-1.5 font-bold text-white";

const CONTACT_CARD_LINK_CLASS =
  "block text-white transition-colors duration-150 hover:text-red-500";

const CONTACT_CARD_CONTACTS_CLASS = "mt-3.5";

const CONTACT_CARD_ROW_CLASS = "inline-flex items-center gap-2";

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
    w-full px-0 py-3.5 bg-transparent border-0 border-b-2
    transition-all duration-300 ease-out
    text-gray-900 text-base
    focus:outline-none focus:ring-0
    placeholder-transparent
    ${isFocused ? "border-brand-red" : "border-gray-200 hover:border-gray-400"}
  `;

  const labelClasses = `
    absolute left-0 transition-all duration-300 ease-out pointer-events-none
    ${isActive ? "top-0 text-xs font-medium" : "top-3.5 text-base"}
    ${isFocused ? "text-red-500" : "text-gray-500"}
  `;

  if (isTextarea) {
    return (
      <div className="relative mt-5">
        <textarea
          name={name}
          required={required}
          className={`${baseClasses} resize-none min-h-[88px]`}
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
    <div className="relative mt-5">
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
      "539 W Commerce St #7953",
      "Dallas, TX 75208-1953",
      "United States",
    ],
    phone: "+1 412 265 2314",
    email: "info@qmaxsys.com",
  },
  India: {
    name: "Qmax Systems India Pvt Ltd",
    address: [
      "310/2A, Rukmani Nagar, 4th Street,",
      "Poonamallee, Chennai 600056,",
      "Tamil Nadu, India",
    ],
    phone: "+91 98402 30903",
    email: "info@qmaxsys.com",
  },
};

const jobs: Record<JobKey, AddressData> = {
  "Careers  ( Jobs / Internships )": {
    name: "Qmax Systems India Pvt Ltd",
    address: [
      "310/2A, Rukmani Nagar, 4th Street,",
      "Poonamallee, Chennai 600056,",
      "Tamil Nadu, India",
    ],
    phone: "+91 73054 50580",
    email: "careers@qmaxsys.com",
  },
  "Suppliers / Vendors": {
    name: "Qmax Systems India Pvt Ltd",
    address: [
      "310/2A, Rukmani Nagar, 4th Street,",
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
  const [errorMessage, setErrorMessage] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const honeypotRef = useRef<HTMLInputElement | null>(null);
  const renderedAtRef = useRef<number>(Date.now());

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      emailError: "",
      phone: "",
      message: "",
    });
    setFocusedField(null);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Honeypot: real users never see/fill this field - silently drop bots.
    if (honeypotRef.current?.value) {
      resetForm();
      setShowThankYou(true);
      return;
    }

    setLoading(true);
    setErrorMessage("");
    setShowThankYou(false);

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      ...collectSubmissionMeta({
        formSource: FORM_SOURCE,
        consentText: CONSENT_TEXT,
        renderedAt: renderedAtRef.current,
      }),
    };

    try {
      await submitContactForm(payload);
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : "Submission failed.",
      );
      setLoading(false);
      return;
    }

    resetForm();
    setShowThankYou(true);
    setLoading(false);
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
    <section className="pt-24 relative h-full flex items-center justify-center overflow-hidden">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start lg:items-stretch">
          {/* Left Column - Contact Form */}
          <div>
            <p className="text-red-500 font-medium tracking-widest text-xs uppercase mb-2">
              Get in Touch
            </p>
            <h1 className="mb-4 lg:mb-6 text-2xl md:text-3xl lg:text-4xl leading-[1.1] ">
              Let&apos;s Engineer{" "}
              <span className="text-red-500">Your Next Product</span>
            </h1>

            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-xl border border-gray-100">
              <h2 className="text-lg md:text-xl font-bold mb-1">
                Send us a message
              </h2>
              <p className="text-sm mb-4 text-foreground">
                Fill out the form below and we&apos;ll get back to you within 24
                hours.
              </p>

              {showThankYou ? (
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Message Sent!</h3>
                      <p className="text-muted-foreground">
                        Thank you for reaching out.
                      </p>
                    </div>
                  </div>
                  <p className="leading-relaxed text-muted-foreground">
                    We&apos;ve received your message and will get back to you
                    shortly. In the meantime, feel free to explore our case
                    studies.
                  </p>
                  <button
                    onClick={() => {
                      setShowThankYou(false);
                      resetForm();
                    }}
                    className="mt-6 text-red-500 font-medium hover:underline inline-flex items-center gap-2 group"
                  >
                    Send another message
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-2">
                  {/* Honeypot - hidden from real users, bots tend to fill it */}
                  <input
                    ref={honeypotRef}
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="hidden"
                  />
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

                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={loading}
                      className={`
                        w-full md:w-max flex items-center justify-center gap-3
                        px-8 py-3.5 bg-foreground text-background
                        rounded-full font-medium text-base
                        transition-all duration-300 ease-out
                        hover:bg-foreground/90 hover:shadow-xl hover:shadow-foreground/10
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
                    {errorMessage && (
                      <p
                        className="mt-3 text-sm leading-relaxed text-red-600"
                        role="alert"
                      >
                        {errorMessage}
                      </p>
                    )}
                    <p className="mt-4 text-xs leading-relaxed text-gray-500">
                      {CONSENT_TEXT}
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column - Contact Us Section */}
          <div className="lg:flex lg:flex-col lg:h-full">
            <h2 className="text-3xl font-base mb-3 tracking-wide">
              Contact <span className="text-red-500">Us</span>
            </h2>

            {/* Contact Cards Grid - flex-1 + auto-rows-fr stretches the
                cards vertically on lg+ so the bottom of the bottom row
                ("Careers" / "Suppliers") aligns with the form card bottom. */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:flex-1 lg:auto-rows-fr">
              {/* Address Cards */}
              {(Object.keys(addresses) as CountryKey[]).map((country) => (
                <div
                  key={country}
                  className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group flex flex-col"
                >
                  <div className={CONTACT_CARD_HEADER_CLASS}>
                    <MapPin className="w-4 h-4" />
                    {country}
                  </div>
                  <div className={CONTACT_CARD_BODY_CLASS}>
                    <div className={CONTACT_CARD_NAME_CLASS}>
                      {addresses[country].name}
                    </div>
                    {addresses[country].address.map((line, index) => (
                      <span key={index} className="block">
                        {line}
                      </span>
                    ))}
                    <div className={CONTACT_CARD_CONTACTS_CLASS}>
                      <a
                        href={`tel:${addresses[country].phone.replace(/\s/g, "")}`}
                        className={CONTACT_CARD_LINK_CLASS}
                      >
                        <span className={CONTACT_CARD_ROW_CLASS}>
                          <Phone className="w-3.5 h-3.5 text-red-500" />
                          {addresses[country].phone}
                        </span>
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
                        className={CONTACT_EMAIL_BUTTON_CLASS}
                      >
                        <span className={CONTACT_CARD_ROW_CLASS}>
                          <Mail className="w-3.5 h-3.5 shrink-0 text-red-500" />
                          <span className="min-w-0 break-all">
                            {addresses[country].email}
                          </span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Jobs Cards */}
              {(Object.keys(jobs) as JobKey[]).map((key) => (
                <div
                  key={key}
                  className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group flex flex-col"
                >
                  <div className={CONTACT_CARD_HEADER_CLASS}>
                    <ArrowRight className="w-4 h-4" />
                    {key}
                  </div>
                  <div className={CONTACT_CARD_BODY_CLASS}>
                    <div className={CONTACT_CARD_NAME_CLASS}>
                      {jobs[key].name}
                    </div>
                    {jobs[key].address.map((line, index) => (
                      <span key={index} className="block">
                        {line}
                      </span>
                    ))}
                    <div className={CONTACT_CARD_CONTACTS_CLASS}>
                      <a
                        href={`tel:${jobs[key].phone.replace(/\s/g, "")}`}
                        className={CONTACT_CARD_LINK_CLASS}
                      >
                        <span className={CONTACT_CARD_ROW_CLASS}>
                          <Phone className="w-3.5 h-3.5 text-red-500" />
                          {jobs[key].phone}
                        </span>
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
                        className={CONTACT_EMAIL_BUTTON_CLASS}
                      >
                        <span className={CONTACT_CARD_ROW_CLASS}>
                          <Mail className="w-3.5 h-3.5 shrink-0 text-red-500" />
                          <span className="min-w-0 break-all">
                            {jobs[key].email}
                          </span>
                        </span>
                      </button>
                    </div>
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
