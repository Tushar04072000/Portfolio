import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="pt-28 pb-16 bg-black text-white" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4 text-left"
            >
              <p className="text-lg">
                I'm a passionate software developer with a keen eye for creating elegant solutions
                to complex problems. With expertise in modern web technologies and a strong foundation
                in software engineering principles, I strive to build applications that make a difference.
              </p>
              <p className="text-lg">
                When I'm not coding, you can find me exploring new technologies, contributing to
                open-source projects, or sharing my knowledge with the developer community.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {['JavaScript', 'React', 'Angular', 'TypeScript', 'Tailwind CSS', 'Next js'].map((skill) => (
                <div
                  key={skill}
                  className="p-4 bg-gray-800 rounded-lg text-center hover:bg-[#ff6b00] hover:text-black transition-colors"
                >
                  {skill}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
