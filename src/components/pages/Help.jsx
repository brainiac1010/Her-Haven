import React from "react";
import { Mail, Phone } from "lucide-react"; // Make sure lucide-react is installed

const Help = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-16 text-gray-800">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Need Help?</h2>
        <p className="text-md text-gray-600 mb-10">
          We're here to assist you with any questions, concerns, or feedback. Please don't hesitate to reach out.
        </p>

        <div className="space-y-6 text-left text-md">
          <div className="flex items-center gap-4">
            <Mail className="text-gray-700" />
            <span className="text-gray-700">
              Email us at:{" "}
              <a href="mailto:armanmahim11@gmail.com" className="text-blue-600 underline">
                armanmahim11@gmail.com
              </a>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="text-gray-700" />
            <span className="text-gray-700">
              Call us at:{" "}
              <a href="tel:+8801685757700" className="text-blue-600 underline">
                +880 1685 757700
              </a>
            </span>
          </div>
        </div>

        <p className="mt-12 text-sm text-gray-500">
          We typically respond within 24 hours. Thank you for reaching out!
        </p>
      </div>
    </section>
  );
};

export default Help;
