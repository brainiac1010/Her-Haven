import React from "react";
import { Mail, Instagram, Linkedin } from "lucide-react";

const ContactUs = () => {
  return (
    <section className="bg-gradient-to-br from-pink-100 via-pink-50 to-white min-h-screen py-16 px-4 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-pink-700 mb-4 tracking-tight drop-shadow-md">
          Contact Us
        </h1>
        <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
          We'd love to hear from you! Whether you have a question, feedback, or just want to say hi — reach out anytime. Our team is always happy to connect.
        </p>

        <div className="bg-white shadow-2xl rounded-3xl p-10 space-y-8 text-left transition-all duration-300 hover:shadow-pink-200">
          {/* Email */}
          <div className="flex items-center gap-5 group">
            <div className="bg-pink-100 p-3 rounded-full">
              <Mail className="text-pink-600 w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold text-gray-800">Email</p>
              <a
                href="mailto:armanmahim00@gmail.com"
                className="text-pink-600 hover:underline hover:text-pink-700 transition"
              >
                armanmahim00@gmail.com
              </a>
            </div>
          </div>

          {/* Instagram */}
          <div className="flex items-center gap-5 group">
            <div className="bg-pink-100 p-3 rounded-full">
              <Instagram className="text-pink-600 w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold text-gray-800">Instagram</p>
              <a
                href="https://instagram.com/arman_mahim00"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:underline hover:text-pink-700 transition"
              >
                @arman_mahim00
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-5 group">
            <div className="bg-pink-100 p-3 rounded-full">
              <Linkedin className="text-pink-600 w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold text-gray-800">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/arman-hossain-aaaa74269/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:underline hover:text-pink-700 transition"
              >
                Arman Hossain
              </a>
            </div>
          </div>
        </div>

        <p className="mt-12 text-gray-500 text-sm italic">
          We’re here to help you find your style, your voice, and your haven. 💖
        </p>
      </div>
    </section>
  );
};

export default ContactUs;
