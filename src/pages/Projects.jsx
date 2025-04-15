import React, { useState } from "react";

const projectData = [
  {
    title: "Cloud Strategy Framework",
    category: "Cloud",
    image: "/thumbnails/cloud-strategy.jpg",
    description: "Enterprise-wide Azure landing zone and cost optimization strategy."
  },
  {
    title: "Workplace Automation Blueprint",
    category: "Product",
    image: "/thumbnails/workplace-automation.jpg",
    description: "Streamlined onboarding/offboarding using Jamf + Intune automation."
  },
  {
    title: "Speed Laser & 3D Mapping System",
    category: "Hardware",
    image: "/thumbnails/speed-laser.jpg",
    description: "Developed laser-based speed and crash-mapping system for LTI."
  },
  {
    title: "Decentralized Collaboration Engine",
    category: "Blockchain",
    image: "/thumbnails/blockchain-collab.jpg",
    description: "Built secure R&D data exchange using Ethereum smart contracts."
  }
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projectData
      : projectData.filter((p) => p.category === filter);

  const categories = ["All", "Cloud", "Product", "Hardware", "Blockchain"];

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 text-brand-blue">
      <h1 className="text-3xl font-bold mb-6 text-center">Featured Projects</h1>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full text-sm font-medium border ${
              filter === cat
                ? "bg-brand-blue text-white"
                : "bg-white text-brand-blue border-brand-blue"
            }`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {filteredProjects.map((project, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-1">{project.title}</h2>
              <p className="text-sm text-gray-600 mb-2">{project.category}</p>
              <p className="text-gray-700 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
