"use client";

export default function AboutPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full">
        {/* Header dengan Foto dan Nama */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-black">Yadi Suryana</h1>
            <h2 className="text-lg text-gray-600">Front End Developer</h2>
          </div>
          <img
            src="/profile.jpg"
            alt="Yadi Suryana"
            className="w-24 h-24 object-cover rounded-lg border-4 border-gray-300"
          />
        </div>

        {/* DATA PRIBADI */}
        <div className="mb-6 p-4 bg-gradient-to-r from-blue-200 to-white rounded-lg">
          <h3 className="font-bold text-lg text-black">DATA PRIBADI</h3>
          <ul className="text-gray-800 text-sm mt-2">
            <li>📍 Nama: Yadi Suryana</li>
            <li>📅 Tempat, tanggal lahir: Sumedang, 29 Agustus 2004</li>
            <li>🧑‍💼 Jenis Kelamin: Laki-Laki</li>
            <li>🏡 Alamat: Ds. Cibulakan, Kec. Cimanggung, Kab. Sumedang</li>
            <li>🕌 Agama: Islam</li>
            <li>🌏 Kewarganegaraan: Indonesia</li>
            <li>💍 Status: Belum Menikah</li>
          </ul>
        </div>

        {/* PENDIDIKAN */}
        <div className="mb-6 p-4 bg-gradient-to-r from-blue-200 to-white rounded-lg">
          <h3 className="font-bold text-lg text-black">PENDIDIKAN</h3>
          <ul className="text-gray-800 text-sm mt-2">
            <li>SDN Cikandang (2012 – 2017)</li>
            <li>SMP 314 Parakanmuncang (2017 – 2020)</li>
            <li>MA Wasilatul Huda (2020 – 2023)</li>
            <li>Universitas Ma’soem (2023 – Sekarang)</li>
          </ul>
        </div>

        {/* KEAHLIAN */}
        <div className="mb-6 p-4 bg-gradient-to-r from-blue-200 to-white rounded-lg">
          <h3 className="font-bold text-lg text-black">KEAHLIAN</h3>
          <ul className="text-gray-800 text-sm mt-2">
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>React & Next.js</li>
            <li>Node.js</li>
            <li>MySQL</li>
            <li>Java</li>
            <li>Git & GitHub</li>
          </ul>
        </div>

        {/* ORGANISASI */}
        <div className="mb-6 p-4 bg-gradient-to-r from-blue-200 to-white rounded-lg">
          <h3 className="font-bold text-lg text-black">ORGANISASI</h3>
          <ul className="text-gray-800 text-sm mt-2">
            <li>Sekretaris OSIS MA Wasilatul Huda</li>
            <li>Anggota Pramuka MA Wasilatul Huda</li>
            <li>Pengurus Karsawasa (Karya Santri Wasilatul Huda)</li>
            <li>Anggota UKM Badminton Universitas Ma’soem</li>
          </ul>
        </div>

        {/* HOBI */}
        <div className="mb-6 p-4 bg-gradient-to-r from-blue-200 to-white rounded-lg">
          <h3 className="font-bold text-lg text-black">HOBI</h3>
          <ul className="text-gray-800 text-sm mt-2">
            <li>📖 Membaca Buku</li>
            <li>🏸 Badminton</li>
            <li>🎮 Game</li>
            <li>🎵 Mendengarkan Musik</li>
          </ul>
        </div>

        {/* LAYANAN */}
        <div className="mb-6 p-4 bg-gradient-to-r from-blue-200 to-white rounded-lg">
          <h3 className="font-bold text-lg text-black">LAYANAN</h3>
          <ul className="text-gray-800 text-sm mt-2">
            <li>UI/UX Design</li>
            <li>Web Development</li>
          </ul>
        </div>

        {/* HUBUNGI SAYA */}
        <div className="p-6 text-center bg-gradient-to-r from-blue-200 to-white rounded-lg">
          <h3 className="font-bold text-lg text-black">HUBUNGI SAYA</h3>
          <p className="text-gray-800 mt-2">📧 ydisryna@gmail.com</p>
          <p className="text-gray-800">📞 +62 896 3002 4907</p>
        </div>
      </div>
    </div>
  );
}
