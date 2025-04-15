import React from "react";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 text-center text-gray-800">
      <h1 className="text-5xl font-bold mb-4">Gus Lora</h1>
      <p className="text-xl text-gray-600 mb-6">
        Cloud Architect • Product Leader • Strategic Technologist
      </p>
      <p className="text-gray-700 mb-6">
        Welcome to my digital portfolio — a collection of strategy, architecture, and innovation work from over 15 years across cloud, workplace, and enterprise product development. Dive into case studies, technical diagrams, and curated blog posts that reflect my journey and thinking.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <a href="/about" className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">About Me</a>
        <a href="/projects" className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition">Projects</a>
        <a href="/resume" className="bg-gray-700 text-white px-5 py-2 rounded hover:bg-gray-800 transition">Resume</a>
        <a href="/blog" className="bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700 transition">Blog</a>
      </div>
    </main>
  );
}
