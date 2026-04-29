import { lazy, Suspense, useEffect } from "react";

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
// const Loader = lazy(() => import("./components/Loader"));
const Navbar = lazy(() => import("./components/Navbar"));
const Proyects = lazy(() => import("./components/Proyects"));
import Start from "./components/Start";
import { useTranslation } from "./hooks/useTranslation";

function App() {
  const t = useTranslation();

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
    <Suspense fallback={<div />}>
      <div className="flex flex-col justify-center items-center overflow-x-hidden">
        <Navbar />
        <Start />
        <About />
        <Proyects />
        <Contact />
        <div className="relative flex justify-start items-center">
          <p className="p-5 font-park text-center opacity-70 sm2:text">
            ©{new Date().getFullYear()} Sofia Moneta.<br />
            {t.app.footer}
          </p>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
