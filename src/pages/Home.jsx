import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>
      <About />
      <Projects />

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen bg-mauve flex items-center justify-center"
      >
        <h2 className="text-4xl font-bold text-white">About Section</h2>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen bg-periwinkle flex items-center justify-center"
      >
        <h2 className="text-4xl font-bold text-white">Projects Section</h2>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="min-h-screen bg-mauve-2 flex items-center justify-center"
      >
        <h2 className="text-4xl font-bold text-white">Services Section</h2>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen bg-periwinkle-2 flex items-center justify-center"
      >
        <h2 className="text-4xl font-bold text-white">Contact Section</h2>
      </section>
    </>
  );
}
