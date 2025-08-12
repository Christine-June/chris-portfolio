import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-mimi-pink min-h-screen pt-20 flex flex-col items-center justify-center px-6 md:px-16 text-center">
      {/* Your photo */}
      <motion.img
        src="/images/me1.jpg"
        alt="Chris"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-40 h-40 object-cover rounded-full shadow-lg mb-6 border-4 border-white"
      />

      {/* Your original big greeting text */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-extrabold text-mauve mb-4 leading-tight"
      >
        Hey, I’m Christine —<br /> A Software Developer & Social Media Manager
      </motion.h1>

      {/* Your original subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-xl text-gray-700 max-w-xl mb-8"
      >
        Creating impactful projects and managing brands across social platforms with creativity and tech.
      </motion.p>

      {/* Social icons with pastel hover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="flex justify-center gap-8 mb-10"
      >
        <a
          href="https://github.com/Christine-June"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-white shadow-md hover:bg-mauve hover:text-white transition-colors duration-300"
          aria-label="GitHub"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/christine-mworia-2b351227a/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-white shadow-md hover:bg-periwinkle hover:text-white transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-6 h-6" />
        </a>
      </motion.div>

      {/* Call to action button */}
      <motion.a
        whileHover={{ scale: 1.05 }}
        href="#projects"
        className="inline-block px-8 py-4 bg-mauve text-white font-semibold rounded-lg shadow-md"
      >
        Check Out My Projects
      </motion.a>
    </section>
  );
}
