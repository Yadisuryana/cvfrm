"use client";

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <main className="p-10 flex flex-col items-center text-center">
        <img
          src="/profile.jpg"
          alt="Yadi Suryana"
          className="w-40 h-40 object-cover rounded-full border-4 border-blue-500 shadow-lg mb-4"
        />

        <h1 className="text-4xl font-bold text-black">Yadi Suryana</h1>
        <h2 className="text-xl text-gray-700">Front End Developer</h2>

        {/* Container untuk paragraf dengan background gradasi biru ke putih */}
        <div className="mt-6 p-6 bg-gradient-to-r from-blue-200 to-white rounded-lg shadow-lg max-w-xl">
          <p className="text-black">
            Saya seorang pengembang front-end dengan pengalaman dalam HTML, CSS, JavaScript, dan framework seperti React dan Next.js.
            Saya senang membangun antarmuka yang interaktif dan responsif.
          </p>
        </div>
      </main>
    </div>
  );
}
