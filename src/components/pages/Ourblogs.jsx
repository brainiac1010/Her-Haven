import React, { useState } from "react";

const blogs = [
  {
    title: "Timeless Elegance",
    description: "Mastering the Art of Capsule Wardrobes",
    date: "12th August 2022",
    image: "https://images.unsplash.com/photo-1544717305-996b815c338c?auto=format&fit=crop&w=600&q=80",
    details:
      "Explore how to create a timeless capsule wardrobe that simplifies your style and enhances elegance every day.",
  },
  {
    title: "Summer Breeze",
    description: "Unveiling the Hottest Beachwear Trends",
    date: "18th January 2023",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    details:
      "Stay cool and stylish this summer with the trendiest beachwear – from vibrant bikinis to breezy cover-ups.",
  },
  {
    title: "Power Dressing",
    description: "Navigating the World of Women's Tailoring",
    date: "5th January 2025",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    details:
      "Discover how modern tailoring empowers women in the workplace with sharp lines, bold colors, and confidence.",
  },
  {
    title: "New York Times",
    description: "The World's Best Fashion Fair 2025",
    date: "25th May 2025",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80",
    details:
      "Step inside the glamour of the 2025 Fashion Fair in New York – a global hub of innovation and luxury trends.",
  },
];

const OurBlogs = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDetails = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 px-4 md:px-16">
      <h2 className="text-4xl font-bold text-center mb-12">Our Blogs</h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-2xl overflow-hidden shadow hover:shadow-lg transition duration-300 flex flex-col"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-xl font-semibold">{blog.title}</h3>
              <p className="text-sm text-gray-600">{blog.description}</p>
              <p className="text-xs text-gray-400 mt-2 mb-4">{blog.date}</p>
              <button
                className="mt-auto bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
                onClick={() => toggleDetails(index)}
              >
                {expandedIndex === index ? "Hide Details" : "See More"}
              </button>
              {expandedIndex === index && (
                <p className="mt-4 text-sm text-gray-700">{blog.details}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurBlogs;
