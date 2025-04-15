import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Blog from "./Blog";
import Resume from "./Resume";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-brand-gray text-brand-blue font-sans">
        <header className="bg-brand-blue text-white py-4 px-6 shadow">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">GUS LORA</h1>
            <nav className="space-x-4 text-sm">
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/about" className="hover:underline">About</Link>
              <Link to="/projects" className="hover:underline">Projects</Link>
              <Link to="/resume" className="hover:underline">Resume</Link>
              <Link to="/blog" className="hover:underline">Blog</Link>
            </nav>
          </div>
        </header>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>

        <footer className="bg-brand-blue text-white py-4 text-center text-sm">
          &copy; {new Date().getFullYear()} Gus Lora. All rights reserved.
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
