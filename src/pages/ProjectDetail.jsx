import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

export default function ProjectDetail() {
  const { slug } = useParams();
  const [project, setProject] = useState({ title: "", content: "", date: "" });

  useEffect(() => {
    const fetchProject = async () => {
      const res = await fetch(`/projects/${slug}.md`);
      const text = await res.text();
      const { data, content } = matter(text);
      setProject({ title: data.title, date: data.date, content });
    };
    fetchProject();
  }, [slug]);

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{project.date}</p>
      <article className="prose max-w-none">
        <ReactMarkdown>{project.content}</ReactMarkdown>
      </article>
    </main>
  );
}
