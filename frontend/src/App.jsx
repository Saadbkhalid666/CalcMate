import { Hero } from "./sections/Hero/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
    </>
  );
}

export default App;
