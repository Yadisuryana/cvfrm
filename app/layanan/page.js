"use client";

import { FaGlobe, FaPaintBrush, FaMobileAlt, FaSearch } from "react-icons/fa";

export default function Layanan() {
  const services = [
    { icon: <FaGlobe size={30} className="text-blue-600" />, title: "Pembuatan Website", desc: "Website modern & landing page responsif." },
    { icon: <FaPaintBrush size={30} className="text-purple-600" />, title: "Desain UI/UX", desc: "Tampilan profesional yang menarik & mudah digunakan." },
    { icon: <FaMobileAlt size={30} className="text-green-600" />, title: "Pengembangan Aplikasi", desc: "Aplikasi mobile berbasis Android/iOS." },
    { icon: <FaSearch size={30} className="text-yellow-600" />, title: "Optimasi SEO", desc: "Website cepat & mudah ditemukan di Google." }
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full text-center">
        {/* Header */}
        <h1 className="text-4xl font-bold text-black">Layanan</h1>
        <p className="text-gray-600 mt-2">
          Saya menawarkan layanan pengembangan web dan aplikasi yang profesional dan responsif.
        </p>

        {/* Grid Layanan */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-300 to-white p-6 rounded-lg shadow-lg flex flex-col items-center hover:shadow-xl transition duration-300"
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-black mt-2">{service.title}</h3>
              <p className="text-gray-700 mt-1">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <p className="text-gray-700">Tertarik menggunakan layanan saya?</p>
          <a
            href="mailto:ydisryna@gmail.com"
            className="mt-2 inline-block bg-blue-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-600 transition duration-300"
          >
            Hubungi Saya 📩
          </a>
        </div>
      </div>
    </div>
  );
}
