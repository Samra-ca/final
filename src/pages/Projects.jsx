const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A modern personal portfolio built with React and Tailwind CSS.",
      tech: ["React", "Tailwind", "Vite"],
      link: "#",
    },
    {
      id: 2,
      title: "Task Manager App",
      description: "A task management application with authentication and CRUD features.",
      tech: ["React", "Node", "MongoDB"],
      link: "#",
    },
    {
      id: 3,
      title: "E-commerce UI",
      description: "Frontend UI for an e-commerce platform with responsive design.",
      tech: ["React", "CSS", "API"],
      link: "#",
    },
  ];
  
  export default function Projects() {
    return (
      <section className="px-6 py-12">
        <h1 className="text-3xl font-bold text-center mb-10">
          Projects
        </h1>
  
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border rounded-xl p-6 bg-white transition transform hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-xl font-semibold mb-2">
                {project.title}
              </h2>
  
              <p className="text-gray-600 mb-4">
                {project.description}
              </p>
  
              <p className="text-sm mb-4">
                <span className="font-medium">Tech:</span>{" "}
                {project.tech.join(", ")}
              </p>
  
              <a
                href={project.link}
                className="text-indigo-600 font-medium"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  