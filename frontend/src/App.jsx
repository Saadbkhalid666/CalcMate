import { Hero } from "./sections/Hero/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Calc } from "./sections/Calculators/Calc";
import { About } from "./sections/About/About";
import { Contact } from "./sections/Contact/Contact";
import { Footer } from "./sections/footer/footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation runs only once when element enters viewport
    });
  }, []);

  return (
    <>
      <Hero />
      <Calc />
      <About />
      <Contact  />
      <Footer  />
    </>
  );
}

export default App;
