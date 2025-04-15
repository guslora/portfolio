import React from "react";
import { Download, Linkedin } from "lucide-react";

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10 text-gray-800">
      <section className="flex flex-col md:flex-row gap-8 items-start">
        <img
          src="/profile.jpg"
          alt="Gus Lora"
          className="w-32 h-32 rounded-full object-cover shadow-md"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">Gus Lora</h1>
          <p className="text-gray-700 text-lg mb-4">
            I’m Gus Lora — a seasoned Cloud & Product Architect with over 15 years of experience transforming enterprise IT through innovation, strategy, and scalable design.
          </p>
          <p className="text-gray-700 mb-2">
            My work spans SaaS, hybrid cloud, AI, automation, workplace platforms, and hardware-software integration. I bridge deep tech with sharp product instincts to deliver real impact.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="/resume.pdf" className="bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2" download>
              <Download size={16} /> Resume
            </a>
            <a href="/onepager.pdf" className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2" download>
              <Download size={16} /> One-Pager
            </a>
            <a href="https://linkedin.com/in/guslora" target="_blank" rel="noreferrer" className="text-blue-700 underline flex items-center gap-1">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
