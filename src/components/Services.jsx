import { motion } from "framer-motion";
import { Code2, Share2 } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Software Development",
      description:
        "Building fast, scalable, and modern web applications using React, Flask, and other cutting-edge technologies.",
      icon: <Code2 className="w-12 h-12 text-mauve" />,
      bgColor: "bg-periwinkle"
    },
    {
      title: "Social Media Management",
      description:
        "Creating and managing impactful social media campaigns that boost engagement and grow your brand presence.",
      icon: <Share2 className="w-12 h-12 text-mauve-2" />,
      bgColor: "bg-mimi-pink"
    }
  ];

  return (
    <section id="services" className="py-16 px-6 md:px-16 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 text-periwinkle"
      >
        My Services
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className={`${service.bgColor} rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition`}
          >
            {service.icon}
            <h3 className="mt-4 text-2xl font-bold text-gray-800">{service.title}</h3>
            <p className="mt-3 text-gray-700">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
