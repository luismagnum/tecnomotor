import Hero from "./components/Hero";
import Navar from "./components/Navar";
import Somos from "./components/Somos";
import Servicios from "./components/Servicios";
import AltaGama from "./components/AltaGama";
import Ubicacion from "./components/Ubicacion";
import Contacto from "./components/Contacto";

function App() {

  return (
    <>
      <div id='navar'>
      <Navar />
      </div>
      <Hero />
      <div id='somos'>
      <Somos />
      </div>
      <div id='servicios'>
      <Servicios />
      </div>
      <AltaGama />
      <Ubicacion />
      <Contacto />
    </>
  )
}

export default App
