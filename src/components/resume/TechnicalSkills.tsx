
export const TechnicalSkills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Laravel", "Express.js", "Python", "PHP"]
    },
    {
      title: "Database",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Firebase"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Vercel", "Jest", "Linux"]
    }
  ];

  return (
    <section>
      <h3 className="text-2xl font-semibold text-white mb-6">Technical Skills</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h4 className="text-lg font-medium text-gray-300 mb-3">{category.title}</h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-800 border border-gray-600 rounded-full text-sm hover:border-white hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
