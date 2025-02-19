"use client";

export default function Portfolio() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full">
        {/* Header */}
        <h1 className="text-3xl font-bold text-black text-center">Portfolio</h1>
        <p className="text-gray-600 text-center mt-2">
          Berikut adalah beberapa proyek yang telah saya kerjakan:
        </p>

        {/* Grid Proyek */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Proyek 1 */}
          <div className="p-4 bg-gradient-to-r from-blue-300 to-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-black">🚀 Website Toko Online</h3>
            <p className="text-gray-700 mt-1">Menggunakan Next.js & Tailwind CSS</p>
          </div>

          {/* Proyek 2 */}
          <div className="p-4 bg-gradient-to-r from-purple-300 to-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-black">📱 Aplikasi Mobile</h3>
            <p className="text-gray-700 mt-1">Dibuat dengan React Native & Firebase</p>
          </div>

          {/* Proyek 3 */}
          <div className="p-4 bg-gradient-to-r from-green-300 to-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-black">📊 Dashboard Admin</h3>
            <p className="text-gray-700 mt-1">Menggunakan React.js & Chart.js</p>
          </div>

          {/* Proyek 4 */}
          <div className="p-4 bg-gradient-to-r from-yellow-300 to-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-black">🎨 Website Portofolio</h3>
            <p className="text-gray-700 mt-1">Dibuat dengan Next.js & Tailwind CSS</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <p className="text-gray-700">Tertarik bekerja sama?</p>
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
