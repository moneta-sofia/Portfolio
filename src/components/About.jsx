  import { useContext, useEffect, useMemo, useState } from "react";
  import { AnimatePresence, easeOut, motion } from "framer-motion";
  import TextAnimation from "./TextAnimation";
  import { LanguageContext } from "../contexts/LanguageContext";
  import VideoLite from "./VideoLite";

  export default function About() {
    const [infoText, setInfoText] = useState(false);
      const [currentSlide, setCurrentSlide] = useState(0);
    const { isSpanish } = useContext(LanguageContext);


    const slides = useMemo(
    () =>
      isSpanish
        ? [
            <>
              Soy una <b className="text-bold">desarrolladora apasionada</b> 💪
              con inclinación por el Back-End{" "}
              <b className="text-bold">sin dejar de lado el Front-End</b>
            </>,
            <>
              He completado mi especialización en Back-End{" "}
              <b className="text-bold">
                y busco activamente una oportunidad laboral
              </b>{" "}
              combinándola con proyectos freelance 📚
            </>,
            <>
              Mi enfoque versátil me permite no solo entender la lógica del
              Back-End 🤓, sino también la creatividad del Front-End 🖌️
            </>,
            <>
              En mi viaje, he descubierto que el desarrollo va más allá de
              líneas de código; se trata de{" "}
              <b className="text-bold">
                resolver problemas y mejorar experiencias 🙌
              </b>
              .
            </>,
            <>
              Estoy emocionada por lo que el futuro me depara y me encuentro{" "}
              <b className="text-bold">comprometida a crecer</b> constantemente
              en este apasionante campo 🌱
            </>,
          ]
        : [
            <>
              I am a <b className="text-bold">passionate developer</b> 💪 with a
              strong preference for Back-End{" "}
              <b className="text-bold">
                while still appreciating the Front-End
              </b>
            </>,
            <>
              I have completed my Back-End specialization{" "}
              <b className="text-bold">
                and now am seeking job opportunities
              </b>{" "}
              while working on freelance projects 📚
            </>,
            <>
              My versatile approach allows me not only to grasp the logic of the
              Back-End 🤓 but also the creativity of the Front-End 🖌️
            </>,
            <>
              In my journey, I've discovered that development goes beyond lines
              of code; it's about{" "}
              <b className="text-bold">
                solving problems and enhancing experiences 🙌
              </b>
              .
            </>,
            <>
              I'm excited about what the future holds for me, and{" "}
              <b className="text-bold">
                I'm committed to continuously growing
              </b>{" "}
              in this exciting field 🌱
            </>,
          ],
    [isSpanish]
  );


  useEffect(() => {
    if (!infoText) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [infoText, slides.length]);

  useEffect(() => {
    setCurrentSlide(0);
  }, [isSpanish]);

    return (
      <div className="w-screen bg-cuadricula2 font-inter">
        <img
          width="1920"
          height="260"
          alt={
            isSpanish
              ? "Una ola color bordo para la estetica de la página"
              : "A Burgundy wave for web's aesthetics"
          }
          src="/imgs/wave.webp"
          className="w-full md:pt-10 pt-24"
        ></img>
        <div
          className="w-full md:pt-0 pt-24 pb-24 bg-primary relative -top-1 flex flex-col items-center"
          name="sobreMi"
        >
          <motion.h1 className="font-bold text-secondary 3xl:text-8xl xl:text-6xl lg:text-5xl text-4xl">
            {isSpanish ? (
              <TextAnimation text="SOBRE MI" />
            ) : (
              <TextAnimation text="ABOUT ME" />
            )}
          </motion.h1>
          {infoText ? 
          <div className="relative flex flex-col items-center justify-center md:w-10/12 w-11/12 md:px-10 px-3 md:text-3xl text-sm my-10 text-center bg-secondary rounded-3xl overflow-hidden min-h-[220px]">
<AnimatePresence mode="wait">
    <motion.p
      key={currentSlide}
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -80, opacity: 0 }}
      transition={{
        duration: 1,
        ease: [0.6, -0.3, 0.2, 1.3],
      }}
      className="py-20 px-6"
    >
      {slides[currentSlide]}
    </motion.p>
  </AnimatePresence>

  <div className="absolute bottom-6 flex gap-2">
    {slides.map((_, index) => (
      <button
        key={index}
        type="button"
        onClick={() => setCurrentSlide(index)}
        aria-label={`Ir al slide ${index + 1}`}
        className={`h-2.5 w-2.5 rounded-full transition-all ${
          currentSlide === index
            ? "bg-primary scale-125"
            : "bg-primary/40"
        }`}
      />
    ))}
  </div>
          </div>
          : (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { easeOut, duration: 1.5 } }}
              viewport={{ once: true }}
              className="md:my-16 my-9 bg-secondary md:p-8 p-3 rounded-xl hover:shadow-2xl shadow-sm hover:scale-105 transition-all ease-in-out md:w-2/3 w-10/12 "
            >
              <VideoLite/>
            </motion.div>
          )}
          <motion.div
            className="bg-secondary flex justify-center items-center rounded-xl my-10 font-bold text-xl"
            initial={{ opacity: 0, scale: 0.75 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { delay: 0.2, ease: "easeIn" },
            }}
            viewport={{ once: true }}
          >
            <div
              className={`py-3 md:px-12 px-8 rounded-tl-xl rounded-bl-xl ${
                infoText ? "shadow-innerxl" : "shadow-xxl"
              }`}
              onClick={() => setInfoText(true)}
            >
              {isSpanish ? "TEXTO" : "TEXT"}
            </div>
            <div
              className={`py-3 md:px-12 px-8 rounded-tr-xl rounded-br-xl ${
                infoText ? "shadow-xxl" : "shadow-innerxl"
              }`}
              onClick={() => setInfoText(false)}
            >
              VIDEO
            </div>
          </motion.div>
        </div>
      </div>
    );
  }
