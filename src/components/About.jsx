import TextAnimation from "./TextAnimation";
import { useTranslation } from "../hooks/useTranslation";
import VideoLite from "./VideoLite";
import { useInView } from "react-intersection-observer";

export default function About() {
  const t = useTranslation();

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [videoRef, videoInView] = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <section className="w-screen flex flex-col items-center justify-center bg-primary font-inter relative ">
        {/* -------------------------------- scribble -------------------------------- */}
        <svg className="w-full" ref={ref} viewBox="1 0 190 70">
          <path
            className={`wave-path ${inView ? "animate-wave" : ""}`}
            fill="transparent"
            strokeWidth="3"
            stroke="#FBEEE4"
            d="m 0 30 q 39.75 -37.5 75 0 t 64.5 -2.25 c 4.5 -8.25 -13.5 -10.5 -9.75 -1.5 c 3 6.75 12.75 15.75 16.5 15 c 25.5 2.25 20.25 -27 47.25 -11.25"
          />
        </svg>

        <div
          ref={videoRef}
          className="w-11/12 relative -top-1 flex flex-col items-center justify-center gap-6 md:gap-8"
          name="sobreMi"
        >
          <h2 className={`text-3xl md:text-4xl lg:text-5xl text-secondary font-bold flex self-start ${videoInView ? 'animate-fade-in' : ''}`} style={{ animationDelay: '0.5s' }}>
            {t.about.subtitle}
          </h2>
          <div className="flex flex-col md:flex-row w-full h-full items-center justify-between text-secondary gap-6 md:gap-4">
            <div className={`text-start w-full md:w-1/2 text-stone-300 font-extralight [&_strong]:font-bold md:text-base ${videoInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: videoInView ? '0.7s' : '0s' }}>
              {t.about.description.map((paragraph, index) => (
                <p key={index} className={videoInView ? 'mb-4 opacity-0 animate-fade-in-up' : 'mt-4 opacity-0'} style={{ animationDelay: videoInView ? `${1.2 + index * 0.1}s` : '0s' }}>
                  {paragraph}
                </p>
              ))}
              <ul className="w-full grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 list-disc list-inside mt-8 md:mt-10 text-xs text-stone-300">
                {t.about.technologies.map((tech, index) => (
                  <li key={index} className={videoInView ? 'opacity-0 animate-fade-in-up' : 'opacity-0'} style={{ animationDelay: videoInView ? `${1.4 + index * 0.05}s` : '0s' }}>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className={`w-full md:w-[43%] h-fit bg-[#852a2a] border-[0.2px] border-stone-500 hover:border-stone-300 hover:shadow-lg hover:shadow-red-900/50 transition-all duration-300 rounded-xl p-3 ${videoInView ? 'opacity-0 animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: videoInView ? '1.3s' : '0s' }}>
              <VideoLite />
              <p className="py-3 px-1 font-bold text-lg md:text-xl flex justify-start items-center">{t.video.watchit}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------- Wave ---------------------------------- */}
      <img
        width="1920"
        height="260"
        loading="lazy"
        alt={t.projects.waveAlt}
        src="/imgs/wave.svg"
        className="w-full rotate-180 relative "
      />
    </>
  );
}
