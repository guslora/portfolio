import React from "react";

export default function Resume() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Resume</h1>
      <p className="text-gray-600 mb-4">Download or preview my professional documents below:</p>
      <ul className="list-disc list-inside text-gray-700">
        <li><a className="text-blue-600 underline" href="/resume.pdf" download>Download Full Resume (PDF)</a></li>
        <li><a className="text-blue-600 underline" href="/onepager.pdf" download>Download One-Pager (PDF)</a></li>
      </ul>
    </main>
  );
}
