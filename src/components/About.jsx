  import { useEffect, useMemo, useState } from "react";
  import { AnimatePresence, easeOut, motion } from "framer-motion";
  import TextAnimation from "./TextAnimation";
  import { useTranslation } from "../hooks/useTranslation";
  import VideoLite from "./VideoLite";

  export default function About() {
    const [infoText, setInfoText] = useState(false);
      const [currentSlide, setCurrentSlide] = useState(0);
    const t = useTranslation();


    const slides = t.about.slides;


  useEffect(() => {
    if (!infoText) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [infoText, slides.length]);

  useEffect(() => {
    setCurrentSlide(0);
  }, [t.locale]);

    return (
      <div className="w-screen bg-cuadricula2 font-inter">
        <img
          width="1920"
          height="260"
          alt={t.about.waveAlt}
          src="/imgs/wave.webp"
          className="w-full md:pt-10 pt-24"
        ></img>
        <div
          className="w-full md:pt-0 pt-24 pb-24 bg-primary relative -top-1 flex flex-col items-center"
          name="sobreMi"
        >
          <motion.h1 className="font-bold text-secondary 3xl:text-8xl xl:text-6xl lg:text-5xl text-4xl">
            <TextAnimation text={t.about.title} />
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
              {t.about.buttons.text}
            </div>
            <div
              className={`py-3 md:px-12 px-8 rounded-tr-xl rounded-br-xl ${
                infoText ? "shadow-xxl" : "shadow-innerxl"
              }`}
              onClick={() => setInfoText(false)}
            >
              {t.about.buttons.video}
            </div>
          </motion.div>
        </div>
      </div>
    );
  }
