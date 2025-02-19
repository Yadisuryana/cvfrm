"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-purple-700 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:text-blue-300 transition">
            TradeHaven
          </Link>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="hover:text-blue-300 transition">
              Home
            </Link>
          </li>
          {["about", "skills", "portfolio", "layanan", "kontak"].map((item) => (
            <li key={item}>
              <Link href={`/${item}`} className="hover:text-blue-300 transition">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Toggle Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden focus:outline-none">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-lg shadow-lg">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link href="/" className="block p-2 hover:bg-blue-500 rounded-lg transition" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            {["about", "skills", "portfolio", "layanan", "kontak"].map((item) => (
              <li key={item}>
                <Link href={`/${item}`} className="block p-2 hover:bg-blue-500 rounded-lg transition" onClick={() => setMenuOpen(false)}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
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
