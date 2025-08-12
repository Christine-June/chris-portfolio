import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Services from '../components/Services';
import ContactForm from '../components/ContactForm';

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
      <Services />
      <ContactForm />

    </>
  );
}
