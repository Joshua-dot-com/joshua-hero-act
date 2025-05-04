import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaPhp, FaReact, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiBootstrap } from 'react-icons/si';

// Import images from assets
import skCmsImage from '../assets/sk-cms.png';
import smartyHubImage from '../assets/smartyhub.png';
import todoReactImage from '../assets/todo-react.png';
import pokemonAppImage from '../assets/pokemon-app.png';
import portfolioImage from '../assets/portfolio.png';

const projects = [
  {
    title: "SK Community CMS",
    description: "Content Management System for Tetuan Zamboanga City SK Community",
    tags: ["PHP", "JavaScript", "CSS", "Bootstrap"],
    image: skCmsImage,
    github: "https://github.com/Joshua-dot-com/Sk-community-CMS-of-Tetuan-Zamboanga-City.git",
    demo: "#",
    icon: <FaPhp className="text-purple-500 text-2xl" />,
    accentColor: "bg-purple-500"
  },
  {
    title: "SmartyHub",
    description: "Digital learning platform for elementary students (Capstone Research)",
    tags: ["PHP", "JavaScript", "CSS", "MySQL"],
    image: smartyHubImage,
    github: "https://github.com/Joshua-dot-com/smartyhub.git",
    demo: "https://smartyhub.site/",
    icon: <FaJs className="text-yellow-400 text-2xl" />,
    accentColor: "bg-amber-500"
  },
  {
    title: "React To-Do List",
    description: "Interactive task management application with React",
    tags: ["React", "JavaScript", "CSS"],
    image: todoReactImage,
    github: "https://github.com/yourusername/react-todo",
    demo: "#",
    icon: <FaReact className="text-blue-400 text-2xl" />,
    accentColor: "bg-blue-500"
  },
  {
    title: "Pokemon API App",
    description: "Pokemon database using PokeAPI with React",
    tags: ["React", "API Integration", "CSS"],
    image: pokemonAppImage,
    github: "https://github.com/yourusername/pokemon-api-app",
    demo: "#",
    icon: <FaReact className="text-blue-400 text-2xl" />,
    accentColor: "bg-red-500"
  },
  {
    title: "Portfolio Website",
    description: "Personal developer portfolio built with React",
    tags: ["React", "TailwindCSS", "Framer Motion"],
    image: portfolioImage,
    github: "https://github.com/yourusername/portfolio",
    demo: "#",
    icon: <FaReact className="text-blue-400 text-2xl" />,
    accentColor: "bg-indigo-500"
  }
];

function ProjectsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100" id="projects">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing my journey through full-stack development with diverse technologies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl shadow-xl bg-white border border-gray-200 hover:border-indigo-200 transition-all duration-300"
            >
              {/* Tech Ribbon */}
              <div className={`absolute top-4 right-4 ${project.accentColor} text-white px-3 py-1 rounded-full text-xs font-bold z-10 shadow-md`}>
                {project.tags[0]}
              </div>

              {/* Project Image */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs text-white bg-black/30 px-2 py-1 rounded-full backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  {project.icon}
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm"
                  >
                    <FiGithub /> Source Code
                  </a>
                  {project.demo !== "#" && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`absolute -top-10 -left-10 w-32 h-32 ${project.accentColor} rounded-full filter blur-3xl opacity-20`}></div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-500 rounded-full filter blur-3xl opacity-20"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/Joshua-dot-com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <FiGithub className="mr-2 text-xl" />
            Explore More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default ProjectsSection;