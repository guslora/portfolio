import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Post from "./Post";
import ProjectDetail from "./ProjectDetail";

export default function App() {
  return (
    <BrowserRouter>
      <header className="p-4 bg-gray-800 text-white flex justify-between">
        <h1 className="text-lg font-semibold">Gus Lora Portfolio</h1>
        <nav className="space-x-4 text-sm">
          <Link to="/">Home</Link>
          <Link to="/blog/cloud-journey">Sample Blog</Link>
          <Link to="/projects/architecture-blueprint">Sample Project</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/blog/:slug" element={<Post />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/" element={<main className='p-6 text-center'>Welcome to Gus Lora's portfolio site!</main>} />
      </Routes>
    </BrowserRouter>
  );
}
