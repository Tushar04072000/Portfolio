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
                <p>Hello! I’m <strong>Tushar Tanaji Patil</strong>, a passionate <strong>Software Developer</strong>, dedicated to creating innovative and efficient solutions that bring ideas to life. With a solid background in software development, I specialize in building scalable applications, writing clean and maintainable code, and solving complex technical challenges. Whether it's developing robust back-end systems, crafting intuitive front-end interfaces, or optimizing performance, I approach each project with a commitment to excellence.</p>

    <p>I’m a detail-oriented, collaborative, and proactive developer who thrives on problem-solving and delivering results that exceed expectations. I believe in continuous learning to stay ahead in the ever-evolving tech landscape, and I’m always eager to take on new challenges that allow me to grow both technically and creatively.</p>

    <p>Throughout my career, I’ve had the opportunity to work with various technologies and contribute to projects that have had a meaningful impact. This experience has honed my ability to work under pressure, meet deadlines, and adapt quickly to fast-paced environments.</p>

    <p>When I’m not coding, I enjoy exploring new tech trends, solving puzzles, and honing my skills through side projects. If you're interested in collaborating or have a project in mind, feel free to reach out—I’d love to connect!</p>

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
