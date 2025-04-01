import React from 'react';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon, ServerIcon, CircleStackIcon } from '@heroicons/react/24/outline';

function App() {
  return (
    <div className="min-h-screen bg-background text-primary">
      <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b border-light-pink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-accent"
            >
              Portfolio
            </motion.div>
            <div className="flex space-x-8">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-accent shadow-lg"
              >
                <img
                  src="https://i.imgur.com/dghv8br.png"
                  alt="Charlotte Marie D. Cabaluna"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center md:text-left"
              >
                <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                  I'm Charlotte Marie D. Cabaluna
                </h1>
                <p className="text-xl text-dark-pink max-w-2xl">
                  Crafting beautiful and functional web experiences with modern technologies
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center text-accent">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <SkillCard
                icon={<CodeBracketIcon className="w-8 h-8" />}
                title="Frontend Development"
                skills={["HTML", "CSS", "JavaScript"]}
              />
              <SkillCard
                icon={<ServerIcon className="w-8 h-8" />}
                title="Backend Development"
                skills={["Node.js", "Express", "MongoDB"]}
              />
              <SkillCard
                icon={<CircleStackIcon className="w-8 h-8" />}
                title="MERN Stack"
                skills={["MongoDB", "Express", "React", "Node.js"]}
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-background-alt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center text-accent">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8">
              <ProjectCard
                title="PARO Application"
                description="A full-stack e-commerce platform with real-time inventory management and payment integration"
                tech={["React", "Node.js", "MongoDB", "Stripe", "Redux"]}
                link="#"
                image="https://imgur.com/b2drOq4.png"
              />
              <ProjectCard
                title="Acanavi"
                description="A collaborative task management application with real-time updates and team features"
                tech={["Next.js", "TypeScript", "Firebase", "Tailwind CSS"]}
                link="#"
                image="https://i.imgur.com/dJ4yrxd.png"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center text-accent">Get in Touch</h2>
            <div className="max-w-xl mx-auto">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-pink">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-light-pink shadow-sm focus:border-accent focus:ring-accent bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-pink">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-light-pink shadow-sm focus:border-accent focus:ring-accent bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-pink">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-light-pink shadow-sm focus:border-accent focus:ring-accent bg-white"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent text-white py-2 px-4 rounded-md hover:bg-dark-pink transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-dark-pink text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-light-pink">charlgoddess07@gmail.com</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Contact Number</h3>
              <p className="text-light-pink">+63 458078299</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-light-pink">Iloilo City, Philippines</p>
            </div>
          </div>
          <div className="text-center border-t border-light-pink pt-8">
            <p>© 2024 Charlotte Marie D. Cabaluna. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-dark-pink hover:text-accent transition-colors"
  >
    {children}
  </a>
);

const SkillCard = ({ icon, title, skills }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white rounded-lg shadow-lg p-6 border border-light-pink"
  >
    <div className="text-accent mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-4 text-dark-pink">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1 bg-background text-dark-pink text-sm rounded-full"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const ProjectCard = ({ title, description, tech, link, image }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden border border-light-pink"
  >
    <div className="relative h-48 bg-background">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6 text-center">
      <h3 className="text-xl font-bold mb-2 text-accent">{title}</h3>
      <p className="text-dark-pink mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4 justify-center">
        {tech.map((t) => (
          <span
            key={t}
            className="px-2 py-1 bg-background text-dark-pink text-sm rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
      <a
        href={link}
        className="inline-flex items-center text-accent hover:text-dark-pink justify-center w-full"
      >
        View Project
        <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1" />
      </a>
    </div>
  </motion.div>
);

export default App; 