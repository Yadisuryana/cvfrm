"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-200 to-white text-gray-900 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/latihan5" className="hover:text-blue-600 transition">
            TradeHaven
          </Link>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/latihan5" className="hover:text-blue-600 transition">
              Home
            </Link>
          </li>
          {["About", "Skills", "Portfolio", "Layanan", "Kontak"].map((item) => (
            <li key={item}>
              <Link href={`/latihan5/${item.toLowerCase()}`} className="hover:text-blue-600 transition">
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Toggle Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden focus:outline-none">
          {menuOpen ? <X size={28} className="text-gray-900" /> : <Menu size={28} className="text-gray-900" />}
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-gradient-to-r from-blue-100 to-white p-4 shadow-lg transition-all duration-300">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link href="/latihan5" className="block p-2 hover:bg-blue-300 rounded-lg transition">
                Home
              </Link>
            </li>
            {["About", "Skills", "Portfolio", "Layanan", "Kontak"].map((item) => (
              <li key={item}>
                <Link href={`/latihan5/${item.toLowerCase()}`} className="block p-2 hover:bg-blue-300 rounded-lg transition">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
