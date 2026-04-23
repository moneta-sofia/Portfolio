import { useContext, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export default function VideoLite() {
    const [play, setPlay] = useState(false);
    const { isSpanish } = useContext(LanguageContext);

    return (
        <div className="relative w-full max-w-3xl mx-auto aspect-video">
            {play ? (
                <iframe
                    className="w-full h-full rounded-xl"
                    src={
                        isSpanish
                            ? "https://www.youtube.com/embed/bsFGtxbfyU4?kM-ZZh1aKtuoLBaA&autoplay=1&mute=1"
                            : "https://www.youtube.com/embed/p8QeFdJPPkA?Ncj2V4CeeDltlKVp&autoplay=1&mute=1"
                    }
                    title="Video presentación"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            ) : (
                <button
                    onClick={() => setPlay(true)}
                    className="relative w-full h-full"
                    aria-label="Reproducir video"
                >
                    <img
                        src={
                            isSpanish
                                ? "https://i.ytimg.com/vi/bsFGtxbfyU4/hqdefault.jpg"
                                : "https://i.ytimg.com/vi/p8QeFdJPPkA/hqdefault.jpg"
                        }
                        alt="Vista previa del video"
                        className="w-full h-full object-cover rounded-xl"
                        loading="lazy"
                        width="480"
                        height="360"
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-white text-5xl">
                        ▶
                    </span>
                </button>
            )}
        </div>
    );
}
