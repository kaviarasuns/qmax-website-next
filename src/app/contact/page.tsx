"use client";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";

import React from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showThankYou, setShowThankYou] = useState(false);
  const [loading, setLoading] = useState(false);

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
    // Simulate API call
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

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gray-200 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">
            <span className="text-[#fe7100]">Contact </span>
            <span className="text-black">Us</span>
          </h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Form</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full p-3 border rounded"
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full p-3 border rounded"
                  onChange={handleChange}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  required
                  pattern="^([0|\+[0-9]{1,5})?([1-9][0-9]{9})$"
                  className="w-full p-3 border rounded"
                  onChange={handleChange}
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  className="w-full p-3 border rounded h-32"
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  className="bg-[#fe7100] text-white px-6 py-3 rounded hover:bg-[#e66600] transition-colors"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
                {showThankYou && (
                  <div className="mt-4 p-4 bg-green-100 text-green-800 rounded border border-green-300 text-center font-semibold">
                    Thank you for your Message.
                  </div>
                )}
              </form>
            </div>

            {/* Get in Touch */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
              <p className="text-lg mb-6">
                Discuss Your Project with us Today. Request a Quote Online or
                Call us at +1-412-265-2314.
              </p>
              <div className="bg-gray-100 w-full aspect-video">
                <Image
                  src="https://d1yetprhniwywz.cloudfront.net/img/grid/contact.jpg"
                  alt="contact qmax"
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* US Office */}
            <div className="grid grid-cols-2 gap-4">
              <div className="w-full h-[230px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.493792035772!2d-121.91690639500557!3d37.378153027539724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcbefbd6e20ef%3A0x5f22f941d5c7e7ee!2s2085+Zanker+Rd%2C+San+Jose%2C+CA+95131%2C+USA!5e0!3m2!1sen!2sin!4v1459229302669"
                  className="w-full h-full border-0"
                  loading="lazy"
                ></iframe>
              </div>
              <div className="pl-6">
                <h4 className="text-xl font-bold mb-4">US Office</h4>
                <p className="space-y-1">
                  <span className="block">Qmax Systems LLC</span>
                  <span className="block">14105 Willow Tank Drive</span>
                  <span className="block">Austin, TX 78717</span>
                  <span className="block">USA</span>
                  <span className="block">Tel: +1-412-265-2314</span>
                  <a
                    href="mailto:info@qmaxsys.com"
                    className="text-blue-600 hover:underline"
                  >
                    info@qmaxsys.com
                  </a>
                </p>
              </div>
            </div>

            {/* India Office */}
            <div className="grid grid-cols-2 gap-4">
              <div className="w-full h-[230px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.6955679018807!2d80.08919102921392!3d13.0495264994253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52668f4cf2efc1%3A0x005ba71a15070958!2sQmax+Systems+India+Pvt+Ltd!5e0!3m2!1sen!2sin!4v1466154371130"
                  className="w-full h-full border-0"
                  loading="lazy"
                ></iframe>
              </div>
              <div className="pl-6">
                <h4 className="text-xl font-bold mb-4">India Office</h4>
                <p className="space-y-1">
                  <span className="block">Qmax Systems India Pvt Ltd</span>
                  <span className="block">
                    310/2A, Rukmani Nagar, 4th Street,
                  </span>
                  <span className="block">Poonamallee, Chennai 600056</span>
                  <span className="block">Tamil Nadu, India</span>
                  <span className="block">Mobile: +91 98402 30903</span>
                  <a
                    href="mailto:info@qmaxsys.com"
                    className="text-blue-600 hover:underline"
                  >
                    info@qmaxsys.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
