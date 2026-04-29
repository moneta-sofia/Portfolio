import { useMemo } from "react";
import { useInView } from "react-intersection-observer";

const TextAnimation = ({ text = "" }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const words = useMemo(() => {
    const wordArray = text.split(" ");
    let letterCount = 0;

    return wordArray.map((word, wordIndex) => ({
      word,
      letters: word.split("").map((letter) => {
        const delay = letterCount * 0.05 + 0.25;
        letterCount += 1;

        return {
          letter,
          delay,
        };
      }),
      isLast: wordIndex === wordArray.length - 1,
    }));
  }, [text]);

  return (
    <span ref={ref} className={`text-anim ${inView ? "is-visible" : ""}`}>
      {words.map(({ word, letters, isLast }, wordIndex) => (
        <span
          key={`${word}-${wordIndex}`}
          style={{
            whiteSpace: "nowrap",
            marginRight: isLast ? 0 : "0.35em",
            contain: "layout style paint",
          }}
        >
          {letters.map(({ letter, delay }, letterIndex) => (
            <span
              key={`${wordIndex}-${letterIndex}`}
              className="text-anim__letter"
              style={{ animationDelay: `${delay}s`, willChange: "opacity" }}
            >
              {letter}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
};

export default TextAnimation;