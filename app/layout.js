"use client";

import './globals.css';
import Navbar from "./Navbar"; // <-- Tidak perlu pakai `dynamic` karena ini tetap di client

export default function Layout({ children }) {
  return (
    <html lang="id">
      <body className="bg-gray-900 text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
