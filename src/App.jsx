import Hero from "./components/Hero";
import Navar from "./components/Navar";
import Somos from "./components/Somos";
import Servicios from "./components/Servicios";
import Ubicacion from "./components/Ubicacion";

function App() {

  return (
    <>
      <div id='navar'>
      <Navar />
      </div>
      <Hero />
      <div id='servicios'>
      <Servicios />
      </div>
      <div id='somos'>
      <Somos />
      </div>
      <Ubicacion />
    </>
  )
}

export default App
