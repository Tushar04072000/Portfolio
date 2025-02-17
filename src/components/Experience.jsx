import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "Realsiren Technology pvt ltd.",
      position: "Software Developer",
      type: "Full Time",
      duration: "20 Nov 2023 - Present",
      description: "I am a passionate software developer working in Realsiren Technology Pvt Ltd. The skill sets I have are React, Next JS, Angular, HTML, CSS, Typescript, Javascript. I am an individual looking for better opportunities in upcoming years.",
      skills: ["React", "Next.js", "Angular", "HTML", "CSS", "TypeScript", "JavaScript"]
    },
    {
      company: "Hefshine Software Pvt Ltd, Pune",
      position: "Software Developer",
      type: "Internship",
      duration: "15 Feb 2023 - 19 Nov 2023",
      description: "I am worked as Internship Software Developer in Hefshine Training on core Java. With a Strong foundation in the Java programming language, data structures, and algorithms.",
      skills: ["Java", "Data Structures", "Algorithms"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-zinc-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-black rounded-lg p-6 hover:bg-zinc-800 transition-all duration-300">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-blue-400">{exp.company}</h3>
                  <p className="text-lg text-gray-300">{exp.position} • {exp.type}</p>
                </div>
                <span className="text-gray-400 text-sm">{exp.duration}</span>
              </div>
              <p className="mt-4 text-gray-300">{exp.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-zinc-800 text-blue-400 rounded-full text-sm"
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

export default Experience;
