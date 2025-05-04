import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../assets/about.jpg';

function AboutSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        {/* Animated background elements */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Floating tech bubbles */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-indigo-100 rounded-full filter blur-3xl opacity-30"></div>
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
            {/* Image Section - 3D Card Effect */}
            <motion.div
              initial={{ opacity: 0, x: -50, rotateY: 15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2 perspective-1000"
            >
              <div className="relative group transform-style-preserve-3d">
                <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                  <motion.img 
                    src={aboutImage}
                    alt="Joshua D. Saavedra"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
                <div className="absolute inset-0 border-2 border-indigo-200/30 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-z-10"></div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg shadow-xl font-medium transform rotate-3 group-hover:rotate-0 transition-all duration-300 backdrop-blur-sm">
                  <span className="inline-block animate-pulse">🚀</span> Code Artisan
                </div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full border-2 border-white/20 flex items-center justify-center text-white font-bold text-xs transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                  DEV
                </div>
              </div>
            </motion.div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 space-y-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-gray-900"
              >
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Me</span>
              </motion.h2>

              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  I'm <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Joshua D. Saavedra</span>, a passionate developer with expertise in building modern, responsive web applications. My journey began with a fascination for creating digital experiences that are both beautiful and functional.
                </p>
                
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  I specialize in <span className="font-medium text-white px-2 py-1 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 shadow-md">React</span>, <span className="font-medium text-white px-2 py-1 rounded-md bg-gradient-to-r from-amber-500 to-amber-600 shadow-md">JavaScript</span>, and <span className="font-medium text-white px-2 py-1 rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 shadow-md">CSS</span>, with additional experience in <span className="font-medium text-white px-2 py-1 rounded-md bg-gradient-to-r from-violet-600 to-violet-800 shadow-md">PHP</span> and <span className="font-medium text-white px-2 py-1 rounded-md bg-gradient-to-r from-red-500 to-orange-500 shadow-md">Java</span> for full-stack solutions.
                </p>
              </motion.div>

              {/* Skills Section - Interactive Grid */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="pt-6"
              >
                <div className="flex items-center mb-6">
                  <div className="w-10 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mr-4"></div>
                  <h3 className="text-2xl font-semibold text-gray-800">Technical Mastery</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { name: 'React', level: 90, color: 'from-indigo-500 to-purple-600', icon: '⚛️' },
                    { name: 'JavaScript', level: 85, color: 'from-amber-500 to-amber-600', icon: '📜' },
                    { name: 'CSS/Tailwind', level: 95, color: 'from-blue-500 to-cyan-500', icon: '🎨' },
                    { name: 'PHP', level: 80, color: 'from-violet-600 to-violet-800', icon: '🐘' },
                    { name: 'Java', level: 75, color: 'from-red-500 to-orange-500', icon: '☕' },
                    { name: 'UI/UX', level: 80, color: 'from-pink-500 to-rose-500', icon: '✨' },
                  ].map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -5 }}
                      className="bg-white p-4 rounded-xl shadow-md border border-gray-100"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="font-medium text-gray-800">{skill.name}</span>
                        <span className="ml-auto text-sm font-semibold text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div 
                          className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-500`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;