import Hero from "./components/Hero";
import Navar from "./components/Navar";
import Somos from "./components/Somos";
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
    </>
  )
}

export default App
