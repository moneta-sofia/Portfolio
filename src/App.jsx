
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
      <div className='relative flex justify-start items-center'>
        <p className='p-5 font-park text-center opacity-70 sm2:text'>©2023 Sofia Moneta.<br></br>Todos los derechos reservados.</p>
      </div>
    </div>
  )
}

export default App
