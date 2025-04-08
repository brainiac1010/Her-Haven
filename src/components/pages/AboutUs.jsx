import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-pink-50 min-h-screen py-12 px-4 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-700 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 mb-8">
          Welcome to <span className="font-semibold text-pink-600">HerHaven</span> — where every woman finds her space, her strength, and her style.
        </p>

        <div className="bg-white shadow-md rounded-2xl p-8 mb-8 text-left">
          <h2 className="text-2xl font-semibold text-pink-600 mb-3">🌷 Our Mission</h2>
          <p className="text-gray-700">
            To empower women to live boldly, love deeply, and express themselves freely — through fashion, self-care, and community.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-8 mb-8 text-left">
          <h2 className="text-2xl font-semibold text-pink-600 mb-3">🛍️ What We Offer</h2>
          <p className="text-gray-700 mb-4">
            At HerHaven, we believe that self-expression starts with what you wear and how you care for yourself. Our curated collections include:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>👗 Trendy & timeless <span className="font-medium text-pink-600">dresses</span></li>
            <li>💄 High-quality <span className="font-medium text-pink-600">cosmetics</span> for every look</li>
            <li>💍 Elegant <span className="font-medium text-pink-600">jewelry</span> to elevate your outfit</li>
            <li>👜 Chic <span className="font-medium text-pink-600">accessories</span> that complete your vibe</li>
            <li>🧴 Gentle & effective <span className="font-medium text-pink-600">skincare</span> products</li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-8 mb-8 text-left">
          <h2 className="text-2xl font-semibold text-pink-600 mb-3">🤝 Our Community</h2>
          <p className="text-gray-700">
            HerHaven is more than just a shop — it's a sisterhood. We’re building a safe, inclusive, and uplifting space where women connect, share, and shine together.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-8 text-left">
          <h2 className="text-2xl font-semibold text-pink-600 mb-3">💌 Join the Haven</h2>
          <p className="text-gray-700">
            We’re here for every woman — all shades, shapes, and stories. Be part of our growing community. Let’s grow together, glow together.
          </p>
        </div>

        <p className="mt-10 text-xl font-semibold text-pink-700">
          HerHaven — Your space. Your strength. Your story.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
