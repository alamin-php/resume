export const Projects = () => {
  const projects = [
    {
      name: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with admin dashboard, payment integration, and real-time inventory management.",
      technologies: "Next.js, Node.js, MongoDB, Stripe API",
      github: "github.com/johndoe/ecommerce-platform",
      demo: "www.ecom.advancesoftbd.com/",
    },
    {
      name: "Home Health Care Platform",
      description:
        "A comprehensive platform designed to streamline home healthcare services by enabling patient management, caregiver scheduling, real-time communication, and secure file sharing.",
      technologies: "React, Laravel, MySQL, Socket.io",
      github: "https://github.com/johndoe/home-healthcare-platform",
      demo: "www.nochinta.xyz/",
    },
    {
      name: "CRUD Generator",
      description:
        "A developer tool that automates the creation of Create, Read, Update, and Delete (CRUD) operations for database-driven applications, supporting multiple frameworks and customizable templates.",
      technologies: "Vue.js, Laravel, MySQL",
      github: "github.com/alamin-php/laravel_crud_generator",
      demo: "#",
    },
    {
      name: "AI-Enhanced Note Editor",
      description:
        "An intelligent note-taking application that leverages AI to provide features like smart text suggestions, auto-summarization, sentiment analysis, and content organization for improved productivity.",
      technologies: "React, Node.js, Python (TensorFlow), MongoDB",
      github: "github.com/alamin-php/ai-enhanced-note-editor-v1",
      demo: "notes.advancesoftbd.com/",
    },
    {
      name: "Pharmaceutical Management App",
      description:
        "An all-in-one pharmaceutical app to manage inventory, prescriptions, and patient medication history with features for barcode scanning, stock alerts, and order tracking.",
      technologies: "React Native, Node.js, MongoDB, Express",
      github: "",
      demo: "www.onepharmaltd.com",
    },
    {
      name: "Software Company Website",
      description:
        "A sleek and responsive corporate website for a software company showcasing services, portfolio, client testimonials, and a contact portal for inquiries and support.",
      technologies: "Next.js, Tailwind CSS, Node.js, MongoDB",
      github: "",
      demo: "www.oneictltd.com",
    },
    {
      name: "Agricare Web App",
      description:
        "A smart agriculture management platform that helps farmers monitor crops, manage resources, track weather data, and optimize farm productivity through data-driven insights.",
      technologies: "Vue.js, Laravel, PostgreSQL, REST API",
      github: "",
      demo: "www.nationalagricare.com",
    },
    {
      name: "Business Website",
      description:
        "A professional, responsive business website designed to showcase company information, services, client testimonials, and facilitate customer inquiries through a contact form.",
      technologies: "React, Node.js, Express, MongoDB",
      github: "",
      demo: "www.bamabd.org/",
    },
    {
      name: "Charity Web Platform",
      description:
        "A user-friendly platform that connects donors with charitable organizations, enabling seamless donations, campaign management, volunteer sign-ups, and impact tracking.",
      technologies: "React, Django, PostgreSQL, Stripe API",
      github: "",
      demo: "www.hemicasangels.org",
    },
  ];

  return (
    <section>
      <h3 className="text-2xl font-semibold text-white mb-6">Projects</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-white transition-colors"
          >
            <h4 className="text-lg font-semibold text-white mb-2">
              {project.name}
            </h4>
            <p className="text-gray-300 text-sm mb-3">{project.description}</p>
            <p className="text-xs text-gray-400 mb-4">
              <span className="font-medium">Tech:</span> {project.technologies}
            </p>

            <div className="flex gap-3 text-sm">
              <a
                href={`https://${project.github}`}
                className="text-white hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={`https://${project.demo}`}
                className="text-electric-blue hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
