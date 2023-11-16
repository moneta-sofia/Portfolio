
import About from './components/About'
import Contact from './components/Contact'
import Proyects from './components/Proyects'
import Start from './components/Start'

function App() {
  return (
    <div className='flex flex-col justify-center items-center overflow-x-hidden'>
      <Start/>
      <About/>
      <Proyects/>
      <Contact/>
      <div className='relative flex self-start justify-start items-start'>
        <p className='p-5 font-park opacity-70'>©2023 Sofia Moneta. Todos los derechos reservados.</p>
      </div>
    </div>
  )
}

export default App
