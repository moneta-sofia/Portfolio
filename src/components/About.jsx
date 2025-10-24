import { useContext, useState } from "react";
import { easeOut, motion } from "framer-motion";
import TextAnimation from "./TextAnimation";
import { LanguageContext } from "../contexts/LanguageContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function About() {
  const [infoText, setInfoText] = useState(false);
  const { isSpanish } = useContext(LanguageContext);

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    arrows: false,
    cssEase: "cubic-bezier(0.6, -0.3, 0.2, 1.3)",
    adaptiveHeight: true
    // resizeBy:
    // fix bug to swipe on mobile
  };

  return (
    <div className="w-screen bg-cuadricula2 font-inter">
      <img
        alt={
          isSpanish
            ? "Una ola color bordo para la estetica de la página"
            : "A Burgundy wave for web's aesthetics"
        }
        src="https://wsrv.nl/?url=https://drive.google.com/uc?id=1hYgYqlgtYylE1-y7_CE_efNghaO5ZYTb"
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
        {infoText ? (
          <Slider
            className="flex items-center md:w-10/12 w-11/12 md:px-10 px-3 md:text-3xl text-sm my-10 text-center bg-secondary rounded-3xl "
            {...settings}
          >
            {isSpanish ? (
              <p className="py-20">
                Soy una <b className="text-bold">desarrolladora apasionada</b>{" "}
                💪 con inclinación por el Back-End{" "}
                <b className="text-bold">sin dejar de lado el Front-End</b>
              </p>
            ) : (
              <p className="py-20">
                I am a <b className="text-bold">passionate developer</b> 💪 with
                a strong preference for Back-End{" "}
                <b className="text-bold">
                  while still appreciating the Front-End
                </b>
              </p>
            )}
            {isSpanish ? (
              <p className="py-20">
                He completado mi especialización en Back-End{" "}
                <b className="text-bold">
                  y busco activamente una oportunidad laboral
                </b>{" "}
                combinándola con proyectos freelance 📚
              </p>
            ) : (
              <p className="py-20">
                I have completed my Back-End specialization{" "}
                <b className="text-bold">
                  and now am seeking job opportunities
                </b>{" "}
                while working on freelance projects📚
              </p>
            )}
            {isSpanish ? (
              <p className="py-20">
                Mi enfoque versátil me permite no solo entender la lógica del
                Back-End 🤓, sino también la creatividad del Front-End 🖌️
              </p>
            ) : (
              <p className="py-20">
                My versatile approach allows me not only to grasp the logic of
                the Back-End 🤓 but also the creativity of the Front-End 🖌️
              </p>
            )}
            {isSpanish ? (
              <p className="py-20">
                En mi viaje, he descubierto que el desarrollo va más allá de
                líneas de código; se trata de{" "}
                <b className="text-bold">
                  resolver problemas y mejorar experiencias 🙌
                </b>
                .
              </p>
            ) : (
              <p className="py-20">
                In my journey, I've discovered that development goes beyond
                lines of code; it's about
                <b className="text-bold">
                  {" "}
                  solving problems and enhancing experiences 🙌
                </b>
                .
              </p>
            )}
            {isSpanish ? (
              <p className="py-20">
                Estoy emocionada por lo que el futuro me depara y me encuentro{" "}
                <b className="text-bold">comprometida a crecer</b>{" "}
                constantemente en este apasionante campo 🌱
              </p>
            ) : (
              <p className="py-20">
                I'm excited about what the future holds for me, and{" "}
                <b className="text-bold">
                  I'm committed to continuously growing
                </b>{" "}
                in this exciting field 🌱
              </p>
            )}
          </Slider>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { easeOut, duration: 1.5 } }}
            viewport={{ once: true }}
            className="md:my-16 my-9 bg-secondary md:p-8 p-3 rounded-xl hover:shadow-2xl shadow-sm hover:scale-105 transition-all ease-in-out md:w-2/3 w-10/12 "
          >
            {isSpanish ? (
              <>
                <iframe
                  className="w-full aspect-video rounded-xl"
                  src="https://www.youtube.com/embed/bsFGtxbfyU4?si=kM-ZZh1aKtuoLBaA"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <p className="pt-3">*Desactualizado</p>
              </>
            ) : (
              <>
                <iframe
                  className="w-full aspect-video rounded-xl"
                  src="https://www.youtube.com/embed/p8QeFdJPPkA?si=Ncj2V4CeeDltlKVp"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <p className="pt-3">*Outdated</p>
              </>
            )}
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
