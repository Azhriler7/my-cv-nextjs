import React from "react";

// Data dummy untuk daftar keahlian
const skillsData = [
  {
    category: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Figma",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "MongoDB",
      "PostgreSQL",
      "RESTful APIs",
    ],
  },
  {
    category: "Tools & Lainnya",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Netlify",
      "Jira",
      "Trello",
      "Figma",
      "Agile/Scrum",
    ],
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100 text-foreground">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Keahlian
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skillCategory, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">
                {skillCategory.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillCategory.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-gray-200 text-gray-800 text-sm px-4 py-2 rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;