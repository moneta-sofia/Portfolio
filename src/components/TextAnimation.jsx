import { useEffect, useRef, useState } from "react";

const TextAnimation = ({ text }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className={`text-anim ${isVisible ? "is-visible" : ""}`}>
      {text.split("").map((letter, index) => (
        <span
          key={index}
          className="text-anim__letter"
          style={{ animationDelay: `${index * 0.05 + 0.25}s` }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </span>
  );
};

export default TextAnimation;