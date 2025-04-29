import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function Project() {
  const [isVisible, setIsVisible] = useState(false);
  const projects = useSelector((state) => state.data.projects); // assuming slice name is `data`

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen w-full px-4 py-10 transition-opacity duration-1000 bg-gradient-to-b from-black to-blue-900 text-white ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h2 className="text-3xl md:text-5xl font-extrabold text-center text-blue-400 mb-10">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-blue-500/50 transition-transform transform hover:-translate-y-2 border border-blue-800">
            <div className="w-full h-52 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain bg-black"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-blue-300">{project.title}</h3>
              <p className="text-gray-300 mt-2 text-sm">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="bg-blue-700 text-white text-xs px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex justify-between text-sm text-blue-400">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="hover:underline">Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-16 text-center text-gray-300 text-sm">
        Want to see more?{" "}
        <a
          href="https://github.com/sourav-khilari"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline hover:text-blue-300"
        >
          Visit my GitHub
        </a>
      </div>
    </div>
  );
}
