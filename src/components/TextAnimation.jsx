import { useEffect, useRef, useState } from "react";

const TextAnimation = ({ text }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  let letterCount = 0;

  return (
    <span ref={ref} className={`text-anim ${isVisible ? "is-visible" : ""}`}>
      {text.split(" ").map((word, wordIndex, words) => (
        <span
          key={`${word}-${wordIndex}`}
          style={{
            whiteSpace: "nowrap",
            marginRight: wordIndex === words.length - 1 ? 0 : "0.35em",
          }}
        >
          {word.split("").map((letter, letterIndex) => {
            const delay = letterCount * 0.05 + 0.25;
            letterCount++;

            return (
              <span
                key={`${word}-${letterIndex}`}
                className="text-anim__letter"
                style={{ animationDelay: `${delay}s` }}
              >
                {letter}
              </span>
            );
          })}
        </span>
      ))}
    </span>
  );
};

export default TextAnimation;
