import React from "react";
import Container from "../global/Container";
import { Clock, Mail, MapPin, PhoneCall } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-[#0b0f1a] text-white py-20">
      <Container>

        {/* Top Heading */}
        <div className="mb-16 text-center">
          <h1 className="text-lg font-semibold text-orange-500">
            Contact
          </h1>
          <p className="text-3xl font-bold mt-4">
            Please use Contact Form <br /> Below
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">

          {/* Card */}
          <div className="bg-[#111827] border border-gray-700 rounded-2xl p-8 relative hover:border-orange-500 transition">
            <h1 className="text-lg font-semibold">Phone Number</h1>
            <p className="mt-2 text-gray-400">013********</p>
            <div className="bg-orange-500 rounded-full p-3 absolute -top-5 right-5">
              <PhoneCall className="text-white w-5 h-5" />
            </div>
          </div>

          <div className="bg-[#111827] border border-gray-700 rounded-2xl p-8 relative hover:border-orange-500 transition">
            <h1 className="text-lg font-semibold">Email Address</h1>
            <p className="mt-2 text-gray-400">rashida@gmail.com</p>
            <div className="bg-orange-500 rounded-full p-3 absolute -top-5 right-5">
              <Mail className="text-white w-5 h-5" />
            </div>
          </div>

          <div className="bg-[#111827] border border-gray-700 rounded-2xl p-8 relative hover:border-orange-500 transition">
            <h1 className="text-lg font-semibold">Office Address</h1>
            <p className="mt-2 text-gray-400 whitespace-nowrap">
              9170 OULED AYOUNI
            </p>
            <div className="bg-orange-500 rounded-full p-3 absolute -top-5 right-5">
              <MapPin className="text-white w-5 h-5" />
            </div>
          </div>

          <div className="bg-[#111827] border border-gray-700 rounded-2xl p-8 relative hover:border-orange-500 transition">
            <h1 className="text-lg font-semibold">Working Hours</h1>
            <p className="mt-2 text-gray-400 whitespace-nowrap">
              08 AM - 9 PM
            </p>
            <div className="bg-orange-500 rounded-full p-3 absolute -top-5 right-5">
              <Clock className="text-white w-5 h-5" />
            </div>
          </div>

        </div>

        {/* Form Title */}
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold">Get In Touch</h1>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto space-y-8">

          <input
            type="text"
            placeholder="What’s Your Name?"
            className="w-full bg-transparent border-b border-gray-600 py-3 outline-none focus:border-orange-500"
          />

          <input
            type="email"
            placeholder="What’s Your Email Address?"
            className="w-full bg-transparent border-b border-gray-600 py-3 outline-none focus:border-orange-500"
          />

          <input
            type="text"
            placeholder="What’s Your Phone No?"
            className="w-full bg-transparent border-b border-gray-600 py-3 outline-none focus:border-orange-500"
          />

          <div>
            <h1 className="text-lg text-gray-300 font-semibold mb-4">
              What type of Services are you looking for?
            </h1>

            <div className="grid sm:grid-cols-3 gap-4 text-gray-400">
              {[
                "Web Design",
                "Web Development",
                "SEO",
                "Branding",
                "Printing",
                "UI / UX",
                "Others",
              ].map((service, index) => (
                <label key={index} className="flex gap-2 items-center cursor-pointer">
                  <input type="checkbox" className="accent-orange-500" />
                  {service}
                </label>
              ))}
            </div>
          </div>

          <select className="w-full bg-transparent border-b border-gray-600 py-3 outline-none focus:border-orange-500 text-gray-400">
            <option>Select Budget</option>
            <option>$250</option>
            <option>$480</option>
            <option>$1000</option>
          </select>

          <textarea
            placeholder="Tell Me About your Project?"
            rows="4"
            className="w-full bg-transparent border-b border-gray-600 py-3 outline-none focus:border-orange-500"
          ></textarea>

          <button className="mt-6 bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full transition">
            Send Message →
          </button>

        </div>

      </Container>
    </div>
  );
};

export default Contact;
