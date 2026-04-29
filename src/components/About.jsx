import { useEffect, useState } from "react";
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
      />
      <div
        className="w-full md:pt-0 pt-24 pb-24 bg-primary relative -top-1 flex flex-col items-center"
        name="sobreMi"
      >
        <h1 className="font-bold text-secondary 3xl:text-8xl xl:text-6xl lg:text-5xl text-4xl animate-fade-in-up">
          <TextAnimation text={t.about.title} />
        </h1>
        {infoText ? (
          <div className="relative flex flex-col items-center justify-center md:w-10/12 w-11/12 md:px-10 px-3 md:text-3xl text-sm my-10 text-center bg-secondary rounded-3xl overflow-hidden min-h-[220px] animate-fade-in-up">
            <p key={currentSlide} className="py-20 px-6 animate-fade-up">
              {slides[currentSlide]}
            </p>

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
        ) : (
          <div className="md:my-16 my-9 bg-secondary md:p-8 p-3 rounded-xl hover:shadow-2xl shadow-sm hover:scale-105 transition-all ease-in-out md:w-2/3 w-10/12 animate-fade-in-up">
            <VideoLite />
          </div>
        )}
        <div className="bg-secondary flex justify-center items-center rounded-xl my-10 font-bold text-xl animate-fade-in-up">
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
        </div>
      </div>
    </div>
  );
}
