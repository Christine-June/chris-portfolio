import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function ContactForm() {
  return (
    <section id="contact" className="relative py-20 px-6 md:px-16 overflow-hidden">
      {/* Top wave divider */}
      <svg
        className="absolute top-0 left-0 w-full"
        viewBox="0 0 1440 150"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#c8b6ff"
          d="M0,64L48,58.7C96,53,192,43,288,53.3C384,64,480,96,576,112C672,128,768,128,864,112C960,96,1056,64,1152,64C1248,64,1344,96,1392,112L1440,128V0H0Z"
        />
      </svg>

      {/* Floating pastel blobs */}
      <motion.div
        className="absolute w-72 h-72 bg-mimi-pink rounded-full mix-blend-multiply filter blur-3xl opacity-40 top-10 left-20"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-periwinkle-2 rounded-full mix-blend-multiply filter blur-3xl opacity-40 bottom-10 right-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-8 text-mauve relative z-10"
      >
        Get In Touch
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8 text-center relative z-10"
      >
        <Mail className="w-12 h-12 mx-auto text-mauve mb-4" />
        <p className="text-lg text-gray-700 mb-6">
          Have a project in mind or just want to say hi?  
          Drop me an email and let’s chat.
        </p>
        <motion.a
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px rgba(199, 180, 255, 0.7)"
          }}
          href="mailto:gathonichris12@gmail.com"
          className="inline-block px-6 py-3 bg-mauve text-white font-semibold rounded-lg shadow-md transition"
        >
          Email Me
        </motion.a>
      </motion.div>
    </section>
  );
}
