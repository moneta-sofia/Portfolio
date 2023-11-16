
import About from './components/About'
import Proyects from './components/Proyects'
import Start from './components/Start'

function App() {
  return (
    <div className='flex flex-col justify-center items-center overflow-x-hidden'>
      <Start/>
      <About/>
      <Proyects/>
    </div>
  )
}

export default App
