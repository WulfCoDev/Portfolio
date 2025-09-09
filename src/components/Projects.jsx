const projects = [
  {
    title: "Movie Catalog Management System (C++)",
    description:
      "Console-based system with file I/O, hash maps, and interactive menus.",
    link: "https://github.com/yourgithub/movie-catalog",
  },
  {
    title: "Real Estate Website (React + Vite)",
    description: "A modern frontend app with React, Tailwind, and routing.",
    link: "https://github.com/yourgithub/real-estate-site",
  },
  {
    title: "Proxmox Virtual Lab",
    description:
      "Simulated corporate environment with virtualization and networking.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-gray-100 shadow rounded-2xl p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-700 mb-4">{p.description}</p>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
