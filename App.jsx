```jsx
import React from "react";

const features = [
  {
    title: "Elegant Design",
    description:
      "Our designs blend modern aesthetics with traditional charm to create stunning attire.",
  },
  {
    title: "Premium Quality",
    description:
      "We use high-quality fabrics and intricate embroidery for a luxurious feel.",
  },
  {
    title: "Perfect Fit",
    description:
      "Tailored to perfection ensuring comfort and style for every occasion.",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Saree Elegance</h1>
          <ul className="hidden md:flex space-x-8 text-gray-600 font-medium">
            <li className="hover:text-red-600 cursor-pointer transition">Home</li>
            <li className="hover:text-red-600 cursor-pointer transition">Collection</li>
            <li className="hover:text-red-600 cursor-pointer transition">About</li>
            <li className="hover:text-red-600 cursor-pointer transition">Contact</li>
          </ul>
          <button className="md:hidden text-gray-600 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex-grow max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            Celebrate Tradition <br /> with Modern Elegance
          </h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
            Explore our exclusive collection of handcrafted sarees that blend
            timeless beauty with contemporary style.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-md shadow-md transition">
            Shop Now
          </button>
        </div>
        <div className="flex-1 max-w-md rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80"
            alt="Elegant saree"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
      </header>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {features.map(({ title, description }) => (
            <div
              key={title}
              className="p-6 rounded-lg shadow-md bg-gray-50 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {title}
              </h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm">&copy; 2024 Saree Elegance. All rights reserved.</p>
          <div className="flex space-x-6">
            <a
              href="#"
              aria-label="Facebook"
              className="