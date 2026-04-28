import { useContext, useEffect } from "react";
import { lazy, Suspense } from "react";
import { LazyMotion, domAnimation } from "framer-motion";

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
// const Loader = lazy(() => import("./components/Loader"));
const Navbar = lazy(() => import("./components/Navbar"));
const Proyects = lazy(() => import("./components/Proyects"));
import Start from "./components/Start";
import { LanguageContext } from "./contexts/LanguageContext";

function App() {
  const { isSpanish } = useContext(LanguageContext);

  /* ------------------------ Para que cargue el loader ----------------------- */
  useEffect(() => {
    const id = requestAnimationFrame(() => {});
    return () => cancelAnimationFrame(id);
  }, []);

  /* -------------- Para evitar que oneko cargue junto al loader -------------- */
  useEffect(() => {
    if (window.innerWidth >= 1280) {
      const scriptElement = document.createElement("script");
      scriptElement.src = "./oneko.js";
      document.body.appendChild(scriptElement);

      return () => {
        document.body.removeChild(scriptElement);
      };
    }
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <Suspense fallback={<div />}>
        <div className="flex flex-col justify-center items-center overflow-x-hidden">
          <Navbar />
          <Start />
          <About />
          <Proyects />
          <Contact />
          <div className="relative flex justify-start items-center">
            {isSpanish ? (
              <p className="p-5 font-park text-center opacity-70 sm2:text">
                ©{new Date().getFullYear()} Sofia Moneta.<br></br>Todos los
                derechos reservados.
              </p>
            ) : (
              <p className="p-5 font-park text-center opacity-70 sm2:text">
                ©{new Date().getFullYear()} Sofia Moneta.<br></br>All rights
                reserved.
              </p>
            )}
          </div>
        </div>
      </Suspense>
    </LazyMotion>
  );
}

export default App;
