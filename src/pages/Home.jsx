import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
          Building Modern Web Experiences
        </h1>

        <p className="mt-4 text-lg sm:text-xl text-gray-600">
          I design and develop clean, scalable, and user-focused web applications.
        </p>

        <div className="mt-8">
          <Link
            to="/projects"
            className="inline-block rounded-lg bg-indigo-600 px-6 py-3 text-white font-medium hover:bg-indigo-700 transition"
          >
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
