import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
    >
      <img
        src={project.image}
        alt={project.title}
        className="h-48 w-full object-cover"
      />
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-mauve mb-2">{project.title}</h3>
        <p className="text-gray-700 flex-1">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-mimi-pink px-3 py-1 rounded-full text-sm text-black"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-periwinkle-2 text-black px-4 py-2 rounded-full hover:bg-periwinkle transition"
        >
          View Project
        </a>
      </div>
    </motion.div>
  );
}
