
export const Experience = () => {
  const experiences = [
    {
      title: "Senior Web Developer (Full Stack)",
      company: "One ICT Ltd.",
      duration: "2022 - Present",
      responsibilities: [
        "Lead development of React-based web applications serving 100k+ users",
        "Architected microservices using Node.js and Docker, reducing deployment time by 60%",
        "Mentored 3 junior developers and established code review best practices",
        "Implemented CI/CD pipelines using GitHub Actions and AWS"
      ],
      techStack: "React, Laravel, TypeScript, AWS, Docker"
    },
    {
      title: "Web Developer (Full Stack)",
      company: "NASSA Group",
      duration: "2019 - 2023",
      responsibilities: [
        "Built responsive web applications using React and Laravel",
        "Developed RESTful APIs and integrated third-party services",
        "Optimized database queries, improving application performance by 40%",
        "Collaborated with UX/UI designers to implement pixel-perfect designs"
      ],
      techStack: "React, Laravel, MySQL, Vue.js"
    },
    {
      title: "Support Engineer",
      company: "S.F Group",
      duration: "2017 - 2019",
      responsibilities: [
        "Developed and maintained multiple client websites using modern frameworks",
        "Implemented automated testing suites, reducing bugs by 30%",
        "Participated in agile development processes and sprint planning"
      ],
      techStack: "JavaScript, PHP, MySQL, Git"
    }
  ];

  return (
    <section>
      <h3 className="text-2xl font-semibold text-white mb-6">Experience</h3>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-gray-700 pl-6 hover:border-l-white transition-colors">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <div>
                <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                <p className="text-lg text-gray-300">{exp.company}</p>
              </div>
              <span className="text-gray-400 text-sm md:text-base">{exp.duration}</span>
            </div>
            
            <ul className="list-disc list-inside space-y-1 text-gray-300 mb-3">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
            
            <p className="text-sm text-gray-400">
              <span className="font-medium">Tech Stack:</span> {exp.techStack}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
