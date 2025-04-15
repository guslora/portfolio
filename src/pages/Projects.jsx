import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const featuredProjects = [
  {
    title: "Modern Intune Rollout Blueprint",
    category: "Cloud",
    description: "Designed a secure lifecycle with Atos DaaS, Autopilot, and Jamf integration across platforms."
  },
  {
    title: "3D Crash Mapping Suite",
    category: "Hardware",
    description: "Led CAD-based crash scene software development using GPS + LIDAR for law enforcement."
  },
  {
    title: "Predictive Maintenance for AgTech",
    category: "Product",
    description: "AI-based monitoring system deployed at Bayer Crop Science, saving $3M in downtime."
  }
];

export default function Projects() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Featured Projects</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {featuredProjects.map((proj, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <p className="text-xs text-gray-400 mb-1">{proj.category}</p>
              <h3 className="font-semibold text-lg text-green-700 mb-1">{proj.title}</h3>
              <p className="text-sm text-gray-700">{proj.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
