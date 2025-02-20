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
                <p>Hello! I’m Tushar Tanaji Patil, a passionate Software Developer dedicated to building innovative and efficient solutions. I specialize in developing scalable applications, writing clean and maintainable code, and solving complex technical challenges across front-end and back-end systems.

                  With a detail-oriented and proactive approach, I thrive in problem-solving and delivering high-quality results. I continuously learn to stay ahead in the evolving tech landscape and adapt quickly to fast-paced environments.

                  Beyond coding, I enjoy exploring new tech trends, solving puzzles, and working on side projects. If you're interested in collaborating, let’s connect!
                </p>

    <h2>Contact Information</h2>
    <ul>
        <li><strong>Phone:</strong> 9011397974</li>
        <li><strong>Email:</strong> <a href="mailto:tusharpatil.tp02@gmail.com">tusharpatil.tp02@gmail.com</a></li>
    </ul>

    <p>Let’s make something great together!</p>
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
