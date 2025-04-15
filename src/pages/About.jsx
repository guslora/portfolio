import React from "react";

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-brand-blue">
      <h1 className="text-3xl font-bold mb-6 text-center">About Me</h1>

      <section className="mb-10">
        <p className="text-gray-700 mb-4">
          I'm Gus Lora — a strategic Cloud Architect and Product Leader with 15+ years of experience scaling enterprise technology and modern workplace platforms. I've led digital transformation efforts across cloud, infrastructure, and software product lines with a focus on performance, security, and cross-functional delivery.
        </p>
        <p className="text-gray-700 mb-4">
          My professional journey spans organizations like Enterprise Mobility, Bayer Crop Science, Mitek Industries, and Laser Technology Inc. I've developed and deployed everything from 3D crash mapping software and speed laser hardware to multi-cloud architecture blueprints and workforce productivity tools.
        </p>
        <p className="text-gray-700">
          I believe in building systems that not only solve problems but elevate people. Whether leading IT strategy or mentoring product managers, I bring clarity, purpose, and measurable outcomes to everything I work on.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">What I Value</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Leadership:</strong> Inspiring others through clarity, empathy, and execution.</li>
          <li><strong>Delivery:</strong> Aligning technical strategy with business outcomes.</li>
          <li><strong>Innovation:</strong> Exploring how emerging tech can unlock enterprise value.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Downloadable Resources</h2>
        <ul className="list-disc list-inside text-brand-blue space-y-2">
          <li><a href="/resume.pdf" className="underline" download>Full Resume (PDF)</a></li>
          <li><a href="/onepager.pdf" className="underline" download>One-Pager Overview (PDF)</a></li>
          <li><a href="https://www.linkedin.com/in/guslora" className="underline" target="_blank" rel="noreferrer">Connect on LinkedIn</a></li>
        </ul>
      </section>
    </main>
  );
}
