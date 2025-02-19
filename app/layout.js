"use client";

import './globals.css'; // <-- Pastikan ini ada
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./Navbar"), { ssr: false });

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
