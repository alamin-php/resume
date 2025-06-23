import { Navigation } from "@/components/resume/Navigation";
import { ScrollToTop } from "@/components/resume/ScrollToTop";
import { Github, ExternalLink } from "lucide-react";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const Portfolio = () => {
  const portfolioProjects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with modern UI, payment integration, and admin dashboard. Built with Next.js and Node.js for optimal performance.",
      image: "/protfolios/ecommarce-app.png",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      github: "",
      demo: "https://ecom.advancesoftbd.com/",
      featured: true,
    },
    {
      title: "AI-Enhanced Note Editor",
      description:
        "An intelligent note-taking application that leverages AI to provide features like smart text suggestions, auto-summarization, sentiment analysis, and content organization for improved productivity.",
      image: "/protfolios/ai-notes-app.png",
      technologies: ["React", "Laravel", "MySQL", "Socket.io", "OAuth"],
      github: "",
      demo: "https://taskmanager-demo.com",
      featured: true,
    },
    {
      title: "Home Health Care Platform",
      description:
        "A comprehensive platform designed to streamline home healthcare services by enabling patient management, caregiver scheduling, real-time communication, and secure file sharing.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Laravel", "PostgreSQL", "SSLCommarze"],
      github: "https://github.com/johndoe/home-healthcare-platform",
      demo: "https://www.nochinta.xyz/",
      featured: false,
    },
    {
      title: "CRUD Generator",
      description:
        "A developer tool that automates the creation of Create, Read, Update, and Delete (CRUD) operations for database-driven applications, supporting multiple frameworks and customizable templates.",
      image:
        "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&h=400&fit=crop",
      technologies: ["React", "OpenAI API", "Laravel", "PHP"],
      github: "https://github.com/alamin-php/laravel_crud_generator",
      demo: "https://ai-chat-demo.com",
      featured: false,
    },
    {
      title: "Pharmaceutical Management App",
      description:
        "An all-in-one pharmaceutical app to manage inventory, prescriptions, and patient medication history with features for barcode scanning, stock alerts, and order tracking.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Laravel", "PostgreSQL", "PHP"],
      github: "",
      demo: "https://www.onepharmaltd.com",
      featured: false,
    },
    {
      title: "Software Company Website",
      description:
        "A sleek and responsive corporate website for a software company showcasing services, portfolio, client testimonials, and a contact portal for inquiries and support.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Laravel", "PostgreSQL", "SSLCommarze"],
      github: "",
      demo: "https://www.oneictltd.com",
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-resume-text font-inter">
      <Navigation />

      <div className="container mx-auto px-4 pt-24">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <h1 className="text-4xl font-bold text-white mb-4">Portfolio</h1>
          <p className="text-gray-300 text-lg mb-12">
            A showcase of my recent projects and technical achievements
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Featured Projects */}
          <motion.section
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <h2 className="text-2xl font-semibold text-white mb-8">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {portfolioProjects
                .filter((project) => project.featured)
                .map((project, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    custom={index + 2}
                    className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden hover:border-white transition-all duration-300 group"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-800 border border-gray-600 rounded text-xs text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-white hover:underline transition-colors"
                          >
                            <Github size={16} />
                            Code
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-electric-blue hover:underline transition-colors"
                          >
                            <ExternalLink size={16} />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.section>

          {/* Other Projects */}
          <motion.section
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <h2 className="text-2xl font-semibold text-white mb-8">
              Other Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portfolioProjects
                .filter((project) => !project.featured)
                .map((project, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    custom={index + 3}
                    className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-electric-blue transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs text-gray-500">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex gap-3 text-sm">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:underline"
                        >
                          GitHub
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-electric-blue hover:underline"
                        >
                          Demo
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.section>
        </div>
      </div>

      <ScrollToTop />
    </div>
  );
};

export default Portfolio;
