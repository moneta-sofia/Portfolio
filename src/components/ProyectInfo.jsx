import { useEffect } from "react";
import { useTranslation } from "../hooks/useTranslation";
import { CloseIcon } from "../data/icons";

export default function ProyectInfo({ proyect, setOpenInfo, openInfo }) {
    const t = useTranslation();
    const isSpanish = t.locale === "es";

    const name = isSpanish ? proyect.nameSpanish : proyect.nameEnglish;
    const type = isSpanish ? proyect.typeSpanish : proyect.typeEnglish;
    const descLong = isSpanish ? proyect.descriptionLongSpanish : proyect.descriptionLongEnglish;
    const whatIDid = isSpanish ? proyect.whatIDidSpanish : proyect.whatIDidEnglish;
    const features = isSpanish ? proyect.featuresSpanish : proyect.featuresEnglish;

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape") setOpenInfo(false);
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [setOpenInfo]);

    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 z-50 bg-black/70 transition-opacity duration-300 ease-out ${openInfo ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setOpenInfo(false)}
            />

            {/* Drawer */}
<div
  className={`fixed top-0 right-0 bottom-0 z-50
    w-full max-w-[500px] flex flex-col overflow-y-auto
    bg-secondary rounded-l-3xl border-l border-gray-200 shadow-2xl
    transition-transform duration-300 ease-out
    drawer-panel
    ${openInfo ? "translate-x-0 open" : "translate-x-full"}
  `}
>
                {/* Sticky header con botón cerrar */}
                <div className="sticky top-0 z-10 flex items-center justify-between px-7 pt-6 pb-3 bg-secondary">
                    <div className="flex items-center gap-3">
                        <h2
                            className="text-2xl font-bold leading-tight"
                            style={{ color: proyect.textColor }}
                        >
                            {name}
                        </h2>
                        {type && (
                            <span className="rounded-full bg-red-100 px-2 py-0.5 text-[11px] font-bold text-red-700 shrink-0">
                                {type}
                            </span>
                        )}
                    </div>
                    <button
                        onClick={() => setOpenInfo(false)}
                        className="text-xl p-2  text-gray-700 transition shrink-0"
                        aria-label="Cerrar"
                    >
                        <CloseIcon />
                    </button>
                </div>

                {/* Contenido animado */}
                <div
                    className={`px-7 pb-10 flex flex-col gap-6 transition-all duration-500 ease-out ${openInfo ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                >
                    {/* Descripción */}
                    <p className="text-sm text-gray-600 leading-relaxed drawer-item " style={{ animationDelay: "0.05s" }}>{descLong}</p>

                    {/* Links */}
                    <div className="flex gap-2 flex-wrap drawer-item " style={{ animationDelay: "0.15s" }}>
                        {proyect.links?.map((link, i) => {
                            const IconComponent = link.icon;
                            return (
                                <a
                                    key={i}
                                    href={link.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex-1 min-w-[100px] flex items-center justify-center gap-2
                    bg-primary text-secondary text-xs font-bold rounded-xl py-3 px-4
                    hover:opacity-90 transition-opacity"
                                >
                                    <IconComponent />
                                    {isSpanish ? link.siteSpanish : link.siteEnglish}
                                </a>
                            );
                        })}
                    </div>

                    {/* Qué hice */}
                    {whatIDid?.length > 0 && (
                        <div className="drawer-item " style={{ animationDelay: "0.2s" }}>
                            <p className="text-sm font-bold text-gray-900 mb-3">{t.projects.whatIDid}</p>
                            <ul className="space-y-2">
                                {whatIDid.map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex gap-2 text-xs text-gray-600 leading-relaxed"
                                        style={{
                                            transitionDelay: openInfo ? `${100 + i * 60}ms` : "0ms",
                                        }}
                                    >
                                        <span className="text-primary mt-0.5 shrink-0 font-bold">⁎</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Stack */}
                    {proyect.icons?.length > 0 && (
                        <div className="drawer-item " style={{ animationDelay: "0.2s" }}>
                            <p className="text-sm font-bold text-gray-900 mb-3">Stack</p>
                            <div className="flex flex-wrap gap-3 text-2xl">
                                {proyect.icons.map((Icon, i) => (
                                    <div
                                        key={i}
                                        className="transition-all duration-300 ease-out"
                                        style={{
                                            transitionDelay: openInfo ? `${i * 50}ms` : "0ms",
                                            opacity: openInfo ? 1 : 0,
                                            transform: openInfo ? "translateY(0)" : "translateY(8px)",
                                        }}
                                    >
                                        <Icon />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Funciones destacadas */}
                    {features?.length > 0 && (
                        <div className="drawer-item" style={{ animationDelay: "0.25s" }}>
                            <p className="text-sm font-bold text-gray-900 mb-3">
                                {isSpanish ? "Funciones destacadas" : "Key features"}
                            </p>
                            <ul className="space-y-2">
                                {features.map((item, i) => (
                                    <li key={i} className="flex gap-2 text-xs text-gray-600 leading-relaxed">
                                        <span className="text-primary mt-0.5 shrink-0 font-bold">⁎</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Divisor */}
                    {proyect.data?.length > 0 && (
                        <hr className="border-gray-200" />
                    )}

                    {/* Galería / GIFs */}
                    {proyect.data?.length > 0 && (
                        <div className="drawer-item " style={{ animationDelay: "0.3s" }}s>
                            <p className="text-sm font-bold text-gray-900 mb-4">
                                {isSpanish ? "Galería / GIFs" : "Gallery / GIFs"}
                            </p>
                            <div className="flex flex-col gap-6">
                                {proyect.data.map((item, i) => (
                                    <div
                                        key={i}
                                        className="transition-all duration-500 ease-out"
                                        style={{
                                            transitionDelay: openInfo ? `${200 + i * 80}ms` : "0ms",
                                            opacity: openInfo ? 1 : 0,
                                            transform: openInfo ? "translateY(0)" : "translateY(12px)",
                                        }}
                                    >
                                        <p className="text-xs font-semibold text-gray-700 mb-1">
                                            {isSpanish ? item.titleSpanish : item.titleEnglish}
                                        </p>
                                        <p className="text-xs text-gray-500 mb-2">
                                            {isSpanish ? item.descriptionSpanish : item.descriptionEnglish}
                                        </p>
                                        <img
                                            src={item.gif}
                                            alt={isSpanish ? item.titleSpanish : item.titleEnglish}
                                            loading="lazy"
                                            decoding="async"
                                            className="w-full rounded-xl border border-gray-100"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}