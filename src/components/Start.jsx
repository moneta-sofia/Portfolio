import { WaveHandIcon, DownloadIcon, GithubIcon, LinkedinIcon } from "../data/icons";
import { motion } from "framer-motion";
import TextAnimation from "./TextAnimation";
import { useTranslation } from "../hooks/useTranslation";

export default function Start() {
  const t = useTranslation();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div
      className="bg-cuadricula font-park  md:h-screen w-screen flex justify-center items-center"
      name="inicio"
    >
      <div className="flex flex-col md:items-start items-center relative md:w-5/6 w-full md:h-3/4 h-full">
        <motion.div
          className="flex flex-col md:items-start items-center md:mt-8 mt-24 md:ml-12 ml-0 md: w-fit"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div className="text-black 3xl:my-4 lg:my-2 my-1 ">
            <motion.p
              className="flex items-center md:justify-start justify-center 3xl:text-4xl xl:text-2xl lg:text-xl text-sm 3xl:my-4 lg:my-3 my-1 "
              variants={item}
            >
              {t.start.greeting}{" "}
              <WaveHandIcon className="ml-3 text-1xl" />{" "}
            </motion.p>
            <motion.p
              className="subrayado font-bold 3xl:text-8xl xl:text-6xl lg:text-5xl text-4xl md:text-center text-center"
              variants={item}
            >
              <TextAnimation text={t.start.name} />
            </motion.p>
            <motion.p
              className="3xl:text-5xl xl:text-4xl lg:text-3xl text-xl 3xl:my-6 lg:my-5 my-4 font-extrabold md:text-start text-center"
              variants={item}
            >
              <TextAnimation text={t.start.role} />
            </motion.p>
          </motion.div>
          <div className="flex w-2/4 justify-between 3xl:my-6 my-2">
            <motion.a
              variants={item}
              href="https://github.com/moneta-sofia"
              target="_blank"
              aria-label={t.start.githubAria}
            >
              <GithubIcon className="3xl:h-16 lg:h-10 h-5 3xl:w-16 lg:w-10 w-5 " />
            </motion.a>
            <motion.a
              variants={item}
              href="https://www.linkedin.com/in/sofiamoneta/"
              target="_blank"
              aria-label={t.start.linkedinAria}
            >
              <LinkedinIcon className="3xl:h-16 lg:h-10 h-5 3xl:w-16 lg:w-10 w-5 " />
            </motion.a>
            <motion.a
              variants={item}
              href="/CV-Sofia_Moneta.pdf"
              download={""}
              aria-label={t.start.cvAria}
            >
              <DownloadIcon className="3xl:h-16 lg:h-10 h-5 3xl:w-16 lg:w-10 w-5 " />
            </motion.a>
          </div>
        </motion.div>
        <img
          width="400"
          height="700"
          fetchpriority="high"
          decoding="async"
          src="/imgs/imgHome.webp"
          className="md:p-0 mt-16 sm:p-16 p-5 md:absolute relative 2xl:right-10 right-0 2xl:bottom-10 bottom-5 hero-img"
          alt={t.start.imageAlt}
        />
      </div>
    </div>
  );
}
