import React from 'react';
import { useSelector } from 'react-redux';

export default function Projects_ter() {
  const projects = useSelector((state) => state.data.projects);

  return (
    <div className="text-green-400 font-mono p-6 w-full max-w-[90vw] mx-auto overflow-x-hidden">
      {projects.length === 0 ? (
        <div>
          Nothing to show right now, but exciting things are on the horizon.
          <span className="block mt-4 text-3xl sm:text-4xl font-extrabold text-yellow-400 transition-transform duration-500 ease-in-out hover:scale-125 animate-pulse">
            Stay tuned!
          </span>
        </div>
      ) : (
        <div className="space-y-10">
          {projects.map((project) => (
            <div key={project.id} className="border-l-4 border-green-400 pl-4">
              <h3 className="text-2xl text-blue-300 font-bold mb-2">{project.title}</h3>
              <div className="flex justify-center items-center bg-black p-2 rounded-lg overflow-hidden h-60 sm:h-72 md:h-80 lg:h-96 mb-3">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <p className="text-green-300 mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="text-sm px-2 py-1 bg-[#0f172a] text-green-200 rounded-full border border-green-600">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-6 text-sm mt-2">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">
                  GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-yellow-400 underline hover:text-yellow-300">
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-10 text-center">
        <a
          href="https://github.com/Sourav-Khilari"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-blue-400 underline hover:text-white text-lg mt-4 transition"
        >
          View more projects on GitHub
        </a>
      </div>
    </div>
  );
}
