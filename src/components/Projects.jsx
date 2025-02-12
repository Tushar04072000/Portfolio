import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Bullion Mentor',
    description: 'A specialized platform designed to optimize comparative results for metal products. The application compares prices of gold, silver, platinum, and other metals to streamline consumer decision-making process.',
    image: '/image_2025_02_12T09_16_48_518Z.png', 
    tags: ['Price Comparison', 'Precious Metals', 'Market Analysis'],
    link: 'https://www.bullionmentor.com/'
  },
  {
    title: 'BOLD Precious Metals',
    description: 'A trusted dealer platform for high-quality precious metals, offering bullion from the most reputable mints and dealers worldwide. Specialized in gold and silver products with comprehensive market insights.',
    image: '/image_2025_02_12T07_58_32_467Z.png',
    tags: ['E-commerce', 'Precious Metals', 'Bullion Trading'],
    link: 'https://www.boldpreciousmetals.com/'
  }
];

const Projects = () => {
  return (
    <section className="pt-28 pb-16 bg-black text-white" id="projects">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Live Project Experiance
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                <div className="flex justify-center pt-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-[200px] h-[150px] object-contain hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-[#ff6b00]">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-[#ff6b00] text-black px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
