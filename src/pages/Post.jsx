import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

export default function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState({ title: "", content: "", date: "" });

  useEffect(() => {
    const fetchPost = async () => {
      console.log('Fetching post for slug:', slug);
      try {
        const res = await fetch(`/posts/${slug}.md`);
        const text = await res.text();
        console.log('Fetched markdown content:', text.substring(0, 100));
        const { data, content } = matter(text);
        setPost({ title: data.title, date: data.date, content });
      } catch (err) {
        console.error('Failed to load post:', err);
      }
    };
    fetchPost();
  }, [slug]);

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 text-brand-blue">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{post.date}</p>
      <article className="prose max-w-none prose-blue">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </main>
  );
}
