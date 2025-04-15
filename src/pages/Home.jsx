import React from "react";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 text-center text-brand-blue bg-brand-gray min-h-screen">
      <h1 className="text-5xl font-bold mb-4 text-brand-blue">Gus Lora</h1>
      <p className="text-xl text-brand-blue mb-6">
        Cloud Architect • Product Leader • Strategic Technologist
      </p>
      <p className="text-brand-blue mb-6">
        Welcome to my digital portfolio — a collection of strategy, architecture, and innovation work from over 15 years across cloud, workplace, and enterprise product development.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <a href="/about" className="bg-brand-blue text-white px-5 py-2 rounded hover:bg-brand-light transition">About Me</a>
        <a href="/projects" className="bg-brand-green text-white px-5 py-2 rounded hover:bg-green-600 transition">Projects</a>
        <a href="/resume" className="bg-brand-blue text-white px-5 py-2 rounded hover:bg-brand-light transition">Resume</a>
        <a href="/blog" className="bg-brand-light text-white px-5 py-2 rounded hover:bg-blue-500 transition">Blog</a>
      </div>
    </main>
  );
}
