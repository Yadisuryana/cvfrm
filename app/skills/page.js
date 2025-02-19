"use client";

import { Code, Terminal, Database } from "lucide-react";

export default function Skills() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold mb-6">Skills</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Skill 1 */}
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center">
          <Code size={40} className="mx-auto text-blue-400" />
          <h2 className="text-xl font-semibold mt-4">Front-End</h2>
          <p className="text-gray-300 mt-2">React, Next.js, Tailwind CSS</p>
        </div>

        {/* Skill 2 */}
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center">
          <Terminal size={40} className="mx-auto text-green-400" />
          <h2 className="text-xl font-semibold mt-4">Back-End</h2>
          <p className="text-gray-300 mt-2">Node.js, Express, API</p>
        </div>

        {/* Skill 3 */}
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center">
          <Database size={40} className="mx-auto text-yellow-400" />
          <h2 className="text-xl font-semibold mt-4">Database</h2>
          <p className="text-gray-300 mt-2">MySQL, MongoDB, Firebase</p>
        </div>
      </div>
    </div>
  );
}
