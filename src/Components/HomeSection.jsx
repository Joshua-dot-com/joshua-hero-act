import React from 'react';
import { Particles } from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim'; // Changed from loadFull
import { motion } from 'framer-motion';
import { FaReact, FaJava, FaCss3Alt, FaPhp } from 'react-icons/fa';
import profileImage from '../assets/image.png';

function HomeSection({ setActiveSection }) {
  const particlesInit = async (engine) => {
    await loadSlim(engine); // Using loadSlim instead of loadFull
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-gray-900">
      {/* Particle Background - Fixed Implementation */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
          particles: {
            color: { value: "#818cf8" },
            links: {
              color: "#818cf8",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out"
            },
            number: {
              density: {
                enable: true,
                area: 800
              },
              value: 80
            },
            opacity: {
              value: 0.5,
              random: true
            },
            size: {
              value: { min: 1, max: 3 },
              random: true
            }
          },
          detectRetina: true
        }}
        className="absolute inset-0 z-0"
      />

      {/* Content */}
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Column */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-center lg:text-left"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600">
              Joshua D. Saavedra
            </span>
          </h1>

          <div className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
            Full Stack <span className="text-indigo-400">Developer</span>
          </div>

          <p className="text-lg text-gray-400 max-w-lg mx-auto lg:mx-0">
            I build <span className="text-indigo-300">scalable</span> and <span className="text-purple-300">efficient</span> web applications.
          </p>

          {/* Tech Icons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8">
            {[FaReact, FaJava, FaCss3Alt, FaPhp].map((Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="p-3 bg-gray-800 rounded-full shadow-lg hover:bg-indigo-600 transition-all"
              >
                <Icon className="text-2xl text-white" />
              </motion.div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection('contact')}
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-medium text-white shadow-lg hover:shadow-indigo-500/30 transition-all"
            >
              Contact Me
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/joshuacv.pdf"
              download
              className="px-8 py-3 bg-gray-800/50 border border-gray-600/30 rounded-lg font-medium text-white flex items-center gap-2 hover:bg-gray-700/50 transition-all"
            >
              Download CV
            </motion.a>
          </div>
        </motion.div>

        {/* Right Column - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 overflow-hidden rounded-2xl shadow-2xl border-8 border-white/10">
            <img
              src={profileImage}
              alt="Profile"
              className="h-full w-full object-cover hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="absolute -bottom-5 -right-5 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg font-medium">
            Available Now
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HomeSection;