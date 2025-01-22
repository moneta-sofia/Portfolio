import { useContext, useState } from "react";
import { easeOut, motion } from "framer-motion";
import TextAnimation from "./TextAnimation";
import { LanguageContext } from "../contexts/LanguageContext";

export default function About() {
  const [infoText, setInfoText] = useState(true);
  const { isSpanish } = useContext(LanguageContext);

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
          <motion.div
            className="about-slider lg:w-4/6 w-5/6 h-72 my-16 md:text-3xl sm2:text-2xl sm2:text-xl sm3:text-lg text-gray-800 text-center bg-secondary lg:p-16 md:p-12 p-10 rounded-3xl hover:shadow-2xl shadow-sm hover:scale-105 transition-all ease-in-out overflow-hidden "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { easeOut, duration: 1.5 } }}
            viewport={{ once: true }}
          >
            <div className="description">
              {isSpanish ? (
                <p className="description-item mb-16 mt-10">
                  Soy una <b className="text-bold">desarrolladora apasionada</b>{" "}
                  💪 con un gusto equilibrado por el{" "}
                  <b className="text-bold">backend y el frontend</b>.
                </p>
              ) : (
                <p className="description-item mb-16 mt-10">
                  I am a <b className="text-bold">passionate developer</b> 💪
                  with a balanced taste for both{" "}
                  <b className="text-bold">backend and frontend</b>.
                </p>
              )}
              {isSpanish ? (
                <p className="description-item my-16">
                  Actualmente, estoy inmersa en mi{" "}
                  <b className="text-bold">
                    formación en la especialización de backend
                  </b>{" "}
                  en Digital House 📚.
                </p>
              ) : (
                <p className="description-item my-16">
                  Currently, I am inmersed in my{" "}
                  <b className="text-bold">
                    trining in the Back-End specialization
                  </b>{" "}
                  Digital House 📚.
                </p>
              )}
              {isSpanish ? (
                <p className="description-item my-16">
                  Mi enfoque versátil me permite no solo entender la lógica del
                  backend 🤓, sino también la creatividad del frontend 🖌️.
                </p>
              ) : (
                <p className="description-item my-16">
                  My versatile approach allows me not only to grasp the logic of
                  the backend 🤓 but also the creativity of the frontend 🖌️.
                </p>
              )}
              {isSpanish ? (
                <p className="description-item my-16 ">
                  En mi viaje, he descubierto que el desarrollo va más allá de
                  líneas de código; se trata de{" "}
                  <b className="text-bold">
                    resolver problemas y mejorar experiencias 🙌
                  </b>
                  .
                </p>
              ) : (
                <p className="description-item my-16 ">
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
                <p className="description-item my-16">
                  Estoy emocionada por lo que el futuro me depara y me encuentro{" "}
                  <b className="text-bold">comprometida a crecer</b>{" "}
                  constantemente en este apasionante campo 🌱.
                </p>
              ) : (
                <p className="description-item my-16">
                  I'm excited about what the future holds for me, and{" "}
                  <b className="text-bold">
                    I'm committed to continuously growing
                  </b>{" "}
                  in this exciting field 🌱.
                </p>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { easeOut, duration: 1.5 } }}
            viewport={{ once: true }}
            className="md:my-16 my-9 bg-secondary md:p-8 p-3 rounded-xl hover:shadow-2xl shadow-sm hover:scale-105 transition-all ease-in-out md:w-2/3 w-10/12 "
          >
            {isSpanish ? (
              <iframe
                className="w-full aspect-video rounded-xl"
                src="https://www.youtube.com/embed/QKuRQq6rXBw?si=_3PaF-SIybFlff4D"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            ) : (
              <iframe
                className="w-full aspect-video rounded-xl"
                src="https://www.youtube.com/embed/dC3VYLMZD7A?si=9UyOHbM5ZMEdkRVu"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
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
