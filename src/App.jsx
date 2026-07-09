import { useEffect } from 'react';
import Hero from "./components/Hero";
import Navar from "./components/Navar";
import Somos from "./components/Somos";
import Servicios from "./components/Servicios";
import Ubicacion from "./components/Ubicacion";
import Contacto from "./components/Contacto";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      offset:100,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
    }, []);

  return (
    <>
      <div id='navar'>
      <Navar />
      </div>
      <div id='hero'>
      <Hero />
      </div>
      <div id='servicios'>
      <Servicios />
      </div>
      <div id='somos'>
      <Somos />
      </div>
      <div id='ubicacion'>
      <Ubicacion />
      </div>
      <Contacto />
    </>
  )
}

export default App
