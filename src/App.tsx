import { Navbar } from './components/layout/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Services } from './sections/Services';
import { Achievements } from './sections/Achievements';
import { Contact } from './sections/Contact';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="bg-light dark:bg-dark min-h-screen text-slate-900 dark:text-slate-50 font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App;
