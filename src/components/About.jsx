import { motion } from "framer-motion";
import me1 from "../../public/images/me1.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-mauve flex items-center justify-center px-6 md:px-16 py-12"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={me1}
            alt="Chris"
            className="w-72 h-72 object-cover rounded-full border-4 border-mauve-2 shadow-lg"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-white/90 leading-relaxed mb-6">
            I’m Chris — a passionate <span className="text-periwinkle font-semibold">Software Developer</span> 
            and <span className="text-periwinkle-2 font-semibold">Social Media Manager</span> who thrives 
            on blending technology and creativity. I design and build web solutions 
            that not only function beautifully but also connect with people. 
            From managing social campaigns to crafting pixel-perfect UIs, 
            I bring your ideas to life.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-periwinkle-2 text-black px-5 py-2 rounded-full shadow-md hover:bg-periwinkle transition"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="bg-mimi-pink text-black px-5 py-2 rounded-full shadow-md hover:bg-mauve transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
