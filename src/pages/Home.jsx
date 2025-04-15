import React from "react";

export default function Home() {
  const featured = [
    {
      title: "Modern Intune Rollout Blueprint",
      description: "Designed a secure lifecycle with Atos DaaS, Autopilot, and Jamf integration across platforms."
    },
    {
      title: "3D Crash Mapping Suite",
      description: "Led CAD-based crash scene software development using GPS + LIDAR for law enforcement."
    },
    {
      title: "Predictive Maintenance for AgTech",
      description: "AI-based monitoring system deployed at Bayer Crop Science, saving $3M in downtime."
    }
  ];

  return (
    <main className="bg-brand-gray text-brand-blue min-h-screen px-6 py-12">
      <section className="max-w-6xl mx-auto text-center mb-16">
        <img
          src="/profile.jpg"
          alt="Gus Lora"
          className="mx-auto w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-brand-blue shadow-lg mb-4"
        />
        <h1 className="text-4xl font-bold mb-2">Gus Lora</h1>
        <p className="text-xl text-brand-blue mb-6">Cloud Architect • Product Strategist • Innovation Driver</p>
        <p className="max-w-2xl mx-auto text-md text-gray-700 mb-6">
          I bridge technology and business strategy to create modern, scalable IT and product solutions.
          From enterprise cloud transformation to AI-driven workplace systems, I focus on impact, innovation, and delivery.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/resume" className="bg-brand-green text-white px-6 py-2 rounded hover:bg-green-600">Download Resume</a>
          <a href="/projects" className="bg-brand-blue text-white px-6 py-2 rounded hover:bg-brand-light">View Projects</a>
          <a href="/about" className="bg-brand-light text-white px-6 py-2 rounded hover:bg-blue-500">About Me</a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((proj, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold text-brand-blue mb-2">{proj.title}</h3>
              <p className="text-sm text-gray-600">{proj.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
