import Hero from "./components/Hero";
import Navar from "./components/Navar";
import Somos from "./components/Somos";
import Servicios from "./components/Servicios";
import Ubicacion from "./components/Ubicacion";
import Contacto from "./components/Contacto";

function App() {

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
