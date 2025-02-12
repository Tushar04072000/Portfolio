import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { useRef } from 'react';

const AnimatedSphere = () => {
  const sphereRef = useRef();

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += 0.002;
      sphereRef.current.rotation.y += 0.002;
    }
  });

  return (
    <Sphere args={[1, 100, 200]} scale={2.4} ref={sphereRef}>
      <meshStandardMaterial
        color="#ff6b00"
        wireframe
        opacity={0.1}
        transparent
      />
    </Sphere>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-black">
      <div className="absolute inset-0">
        <Canvas>
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 5, 2]} intensity={1} />
          <AnimatedSphere />
        </Canvas>
      </div>
      
      <div className="relative z-10 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[2.75rem] lg:text-6xl font-bold mb-4"
        >
          Hi, I'm <span className="text-[#ff6b00]">Tushar Patil</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl mb-8"
        >
          Software Developer | Creative Thinker | Problem Solver
        </motion.p>
        <motion.a
          href="/Tushar Tanaji Patil.pdf"
          download="Tushar Tanaji Patil.pdf"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-block px-8 py-3 bg-[#ff6b00] text-black rounded-full font-semibold hover:bg-[#ff9900] transition-colors cursor-pointer"
        >
          Download Resume
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
