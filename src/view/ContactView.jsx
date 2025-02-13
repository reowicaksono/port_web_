import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactView = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    // You can add the logic to handle form submission here (e.g., sending the form data to a backend).
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-20 bg-[#121212] text-white"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-100">
          Let's make something awesome together!
        </h2>
      </div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="name" className="text-lg text-gray-300">
                Your Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-2 px-4 py-2 rounded-lg bg-[#282828] text-white placeholder-gray-400 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>

            {/* Company Name Field */}
            <div className="flex-1">
              <label htmlFor="company" className="text-lg text-gray-300">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-2 rounded-lg bg-[#282828] text-white placeholder-gray-400 focus:outline-none"
                placeholder="Enter company name"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="text-lg text-gray-300">
              Email Address*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-2 px-4 py-2 rounded-lg bg-[#282828] text-white placeholder-gray-400 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Phone Number Field */}
          <div>
            <label htmlFor="phone" className="text-lg text-gray-300">
              Phone Number*
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full mt-2 px-4 py-2 rounded-lg bg-[#282828] text-white placeholder-gray-400 focus:outline-none"
              placeholder="Enter phone number"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="text-lg text-gray-300">
              A Few Words*
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full mt-2 px-4 py-2 rounded-lg bg-[#282828] text-white placeholder-gray-400 focus:outline-none"
              placeholder="Enter your message"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </motion.section>
  );
};

export default ContactView;
