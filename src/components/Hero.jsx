import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-mimi-pink via-mauve to-periwinkle-2 min-h-screen flex flex-col items-center justify-center px-4 text-center">
      
      {/* Animated Heading */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-mauve-2 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="text-periwinkle">Chris</span> 👋
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-lg md:text-xl text-periwinkle-2 max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        A passionate <span className="font-semibold">Software Developer</span> & <span className="font-semibold">Social Media Manager</span> creating beautiful, functional digital experiences.
      </motion.p>

      {/* Image */}
      <motion.div
        className="mt-10 w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg border-4 border-mauve"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 100 }}
      >
        <img
          src="/images/me1.jpg"
          alt="Chris portrait"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Call to Action */}
      <motion.a
        href="#projects"
        className="mt-10 px-6 py-3 bg-periwinkle text-white font-semibold rounded-lg shadow-md hover:bg-periwinkle-2 transition duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        View My Work
      </motion.a>
    </section>
  );
}
