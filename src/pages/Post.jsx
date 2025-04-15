import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

export default function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState({ title: "", date: "", content: "" });

  useEffect(() => {
    const load = async () => {
      const res = await fetch(`/posts/${slug}.md`);
      const raw = await res.text();
      const { data, content } = matter(raw);
      setPost({ ...data, content });
    };
    load();
  }, [slug]);

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{post.date}</p>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </main>
  );
}
