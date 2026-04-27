import { useContext, useEffect, useState } from "react";
import { lazy, Suspense } from 'react'

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
import Loader from "./components/Loader";
const Navbar = lazy(() => import("./components/Navbar"));
const Proyects = lazy(() => import("./components/Proyects"));
const Start = lazy(() => import("./components/Start"));
import { LanguageContext } from "./contexts/LanguageContext";

function App() {
  const [cargando, setCargando] = useState(true);
  const { isSpanish } = useContext(LanguageContext);

  /* ------------------------ Para que cargue el loader ----------------------- */
useEffect(() => {
  const id = requestAnimationFrame(() => {
    setCargando(false);
  });
  return () => cancelAnimationFrame(id);
}, []);

  /* -------------- Para evitar que oneko cargue junto al loader -------------- */
  useEffect(() => {
    if (window.innerWidth >= 1280 && cargando === false) {
      const scriptElement = document.createElement("script");
      scriptElement.src = "./oneko.js";
      document.body.appendChild(scriptElement);

      return () => {
        document.body.removeChild(scriptElement);
      };
    }
  }, [cargando]);

  return (
    <Suspense fallback={<Loader />}>
      {cargando ? (
        <Loader></Loader>
      ) : (
        <div className="flex flex-col justify-center items-center overflow-x-hidden">
          <Navbar />
          <Start />
          <About />
          <Proyects />
          <Contact />
          <div className="relative flex justify-start items-center">
            {isSpanish ? (
              <p className="p-5 font-park text-center opacity-70 sm2:text">
                ©{new Date().getFullYear()} Sofia Moneta.<br></br>Todos los derechos reservados.
              </p>
            ) : (
              <p className="p-5 font-park text-center opacity-70 sm2:text">
                ©{new Date().getFullYear()} Sofia Moneta.<br></br>All rights reserved.
              </p>
            )}
          </div>
        </div>
      )}
    </Suspense>
  );
}

export default App;
