import React from 'react'

const projects = [
  {
    title: "Gayatri Hardware & Plywood Website",
    description:
      "A responsive business website developed using React JS and Tailwind CSS. The project focuses on clean UI, smooth navigation, and reusable components.",
    technologies: ["React JS", "Tailwind CSS", "React Router"],
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen bg-gray-950 py-24 px-10 text-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl font-extrabold mb-16
          bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
          bg-clip-text text-transparent">
          Projects
        </h1>

        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl font-semibold text-indigo-400 mb-6">
              Featured Project
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              This project represents my practical experience in frontend
              development, where I focused on creating a clean, responsive,
              and user-friendly interface using modern web technologies.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-800
                border border-gray-800 rounded-2xl p-8
                hover:-translate-y-2 hover:shadow-xl
                transition-all duration-500"
              >
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full
                      bg-gray-900 border border-gray-700 text-indigo-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;