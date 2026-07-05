import Hero from "./components/Hero";
import Navar from "./components/Navar";
import Somos from "./components/Somos";
import Servicios from "./components/Servicios";

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
    </>
  )
}

export default App
