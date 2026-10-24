
import { useCallback, useState } from "react";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import ExperienceSkills from "./components/ExperienceSkills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  

  const finishLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && (
  <LoadingScreen onComplete={finishLoading} />
)}
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <ExperienceSkills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
