import { Github } from "lucide-react";

export default function GithubSection() {
  return (
    <section id="github" className="bg-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="font-grotesk text-3xl font-bold text-white mb-4">
          Everything is open source
        </h2>

        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors"
        >
          <Github size={18} />
          GitHub Repository
        </a>
      </div>
    </section>
  );
}