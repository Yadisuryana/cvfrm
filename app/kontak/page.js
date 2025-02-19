"use client";

import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Kontak() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full text-center">
        {/* Header */}
        <h1 className="text-4xl font-bold text-black">Kontak</h1>
        <p className="text-gray-600 mt-2">Hubungi saya untuk diskusi lebih lanjut:</p>

        {/* Kontak Container */}
        <div className="mt-6 flex flex-col gap-4">
          {/* Email */}
          <div className="bg-gradient-to-r from-blue-300 to-white p-4 rounded-lg shadow-md flex items-center justify-center gap-3">
            <FaEnvelope size={24} className="text-blue-600" />
            <a href="mailto:ydisryna@gmail.com" className="text-black font-medium hover:text-blue-700 transition duration-300">
              ydisryna@gmail.com
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-gradient-to-r from-green-300 to-white p-4 rounded-lg shadow-md flex items-center justify-center gap-3">
            <FaWhatsapp size={24} className="text-green-600" />
            <a href="https://wa.me/6289630024907" className="text-black font-medium hover:text-green-700 transition duration-300">
              +62 896 3002 4907
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-6">
          <p className="text-gray-700">Siap berdiskusi? Kirim pesan sekarang! 📩</p>
        </div>
      </div>
    </div>
  );
}
