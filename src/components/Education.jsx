import React from 'react';

const Education = () => {
  const educationData = [
    {
      school: "Dr. J. J. Magdum College Of Engineering, Jaysingpur",
      degree: "B.Tech.- E&TC",
      year: "2022",
      percentage: "79.9"
    },
    {
      school: "Rajarshi Shahu Maharaj jr. College Of Science, Sangli",
      degree: "XII th Board",
      year: "2018",
      percentage: "64.62"
    },
    {
      school: "Shree Padmaraje Vidyalaya, Shirol",
      degree: "X th Board",
      year: "2016",
      percentage: "75.80"
    }
  ];

  return (
    <section id="education" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <div key={index} className="mb-8 bg-zinc-900 rounded-lg p-6 hover:bg-zinc-800 transition-colors">
              <h3 className="text-xl font-semibold text-blue-400">{edu.school}</h3>
              <div className="mt-2">
                <p className="text-gray-300">{edu.degree}</p>
                <div className="flex justify-between mt-2 text-sm text-gray-400">
                  <span>{edu.year}</span>
                  <span>{edu.percentage}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
