
import { useEffect, useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Proyects from './components/Proyects'
import Start from './components/Start'


function App() {
  const [cargando, setCargando] = useState(true);
  
  useEffect(() => {
    window.addEventListener('load', () => {
      setCargando(false);
    });
  }, []);

  /* -------------- Para evitar que oneko cargue junto al loader -------------- */
  useEffect(() => {
    if (window.innerWidth >= 1280  && cargando === false) {
      const scriptElement = document.createElement('script');
      scriptElement.src = './oneko.js';
      document.body.appendChild(scriptElement);

      return () => {
        document.body.removeChild(scriptElement);
      };
    }
  },[cargando])

  return (
  <>
    {cargando? 
    <Loader></Loader> 
    :
    <div className='flex flex-col justify-center items-center overflow-x-hidden'>
      <Navbar/>
      <Start/>
      <About/>
      <Proyects/>
      <Contact/>
      <div className='relative flex justify-start items-center'>
        <p className='p-5 font-park text-center opacity-70 sm2:text'>©2023 Sofia Moneta.<br></br>Todos los derechos reservados.</p>
      </div>
    </div>
    }
  </>

  )
}

export default App
