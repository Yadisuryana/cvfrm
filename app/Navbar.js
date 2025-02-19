"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Tutup menu otomatis saat layar lebih besar dari mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-gradient-to-r from-blue-200 to-white text-gray-900 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:text-blue-600 transition">
            TradeHaven
          </Link>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-600 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/skills" className="hover:text-blue-600 transition">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="hover:text-blue-600 transition">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/layanan" className="hover:text-blue-600 transition">
              Layanan
            </Link>
          </li>
          <li>
            <Link href="/kontak" className="hover:text-blue-600 transition">
              Kontak
            </Link>
          </li>
        </ul>

        {/* Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} className="text-gray-900" /> : <Menu size={28} className="text-gray-900" />}
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={`absolute top-16 left-0 w-full bg-gradient-to-r from-blue-100 to-white p-4 shadow-lg transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col space-y-4">
          <li>
            <Link
              href="/"
              className="block p-2 hover:bg-blue-300 rounded-lg transition"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block p-2 hover:bg-blue-300 rounded-lg transition"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/skills"
              className="block p-2 hover:bg-blue-300 rounded-lg transition"
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio"
              className="block p-2 hover:bg-blue-300 rounded-lg transition"
              onClick={() => setMenuOpen(false)}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="/layanan"
              className="block p-2 hover:bg-blue-300 rounded-lg transition"
              onClick={() => setMenuOpen(false)}
            >
              Layanan
            </Link>
          </li>
          <li>
            <Link
              href="/kontak"
              className="block p-2 hover:bg-blue-300 rounded-lg transition"
              onClick={() => setMenuOpen(false)}
            >
              Kontak
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
