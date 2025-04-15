import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import matter from "gray-matter";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      const files = ["cloud-journey.md"];
      const loadedPosts = await Promise.all(
        files.map(async (file) => {
          const res = await fetch(`/posts/${file}`);
          const text = await res.text();
          const { data, content } = matter(text);
          return {
            ...data,
            excerpt: content.substring(0, 150) + "...",
            slug: file.replace(".md", "")
          };
        })
      );
      setPosts(loadedPosts);
    };
    loadPosts();
  }, []);

  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-brand-blue">
      <h1 className="text-3xl font-bold mb-6 text-center">Blog Highlights</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post, idx) => (
          <Link
            key={idx}
            to={`/blog/${post.slug}`}
            className="block bg-white rounded-lg shadow p-4 hover:bg-gray-50 transition cursor-pointer"
          >
            <h2 className="text-xl font-bold text-brand-blue mb-1">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-1">{post.date}</p>
            <p className="text-gray-700 text-sm">{post.excerpt}</p>
            <div className="text-xs text-brand-blue space-x-2 mt-2">
              {post.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="inline-block px-2 py-1 border border-brand-blue rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
