import { useState } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "../hooks/useTranslation";
import {
  AboutIcon,
  CloseIcon,
  ContactIcon,
  DownloadIcon,
  GithubIcon,
  HomeIcon,
  LinkedinIcon,
  MailIcon,
  ProyectsIcon,
} from "../data/icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const t = useTranslation();
  const locale = t.locale;

  const toggleLanguage = () => {
    const targetPath = locale === "en" ? "/es" : "/";
    window.location.href = `${targetPath}${window.location.search}${window.location.hash}`;
  };

  const navLinks = [
    { to: "inicio", label: t.navbar.start, icon: HomeIcon },
    { to: "sobreMi", label: t.navbar.about, icon: AboutIcon },
    { to: "proyectos", label: t.navbar.projects, icon: ProyectsIcon },
    { to: "contacto", label: t.navbar.contact, icon: ContactIcon },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 md:bg-white/95 bg-inherit  md:backdrop-blur-sm md:border-b md:border-gray-200 md:shadow-sm">
      <div className="mx-auto flex w-full items-center  justify-between  py-3 md:px-6">

         {/* LANGUAGE SWITCH (MINIMAL) */}
          <div className="flex items-center text-sm font-medium">
            <button
              onClick={toggleLanguage}
              className={`${locale === "es" ? "text-black" : "text-gray-400"} hover:text-black`}
            >
              ES
            </button>

            <span className="mx-2 text-gray-300">|</span>

            <button
              onClick={toggleLanguage}
              className={`${locale !== "es" ? "text-black" : "text-gray-400"} hover:text-black`}
            >
              EN
            </button>
          </div>



        <div className="hidden md:flex gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              className="cursor-pointer text-sm font-medium text-gray-800 transition hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex gap-4">
          {/* ICONS */}
          <a
            href="https://github.com/moneta-sofia"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
          >
            <GithubIcon />
          </a>

          <a
            href="https://www.linkedin.com/in/sofiamoneta"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
          >
            <LinkedinIcon />
          </a>
                    {/* DOWNLOAD CV */}
          <a
            href="/CV-Sofia_Moneta.pdf"
            download
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary/90"
          >
            <DownloadIcon />
            {t.navbar.cv}
          </a>
        </div>
      </div>

      {/* -------------------------------------------------------------------------- */
      /*                                   Mobile                                   */
      /* -------------------------------------------------------------------------- */}
      <div className="flex items-end justify-end">
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex mr-3 h-12 w-12 ml-4 items-center justify-center rounded-xl border border-gray-300 bg-white text-gray-700 transition hover:bg-gray-50 md:hidden"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <>
        <div
          className={`fixed inset-0 z-10 md:hidden bg-black/70 transition-opacity duration-300 ease-out ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`md:hidden fixed top-0 left-0 z-20 flex flex-col h-screen w-5/6 rounded-r-3xl border-t border-gray-200 bg-white px-4 pb-4 pt-6 transition-transform duration-300 ease-out ${open ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex px-3  py-5 justify-between items-center">
            <img src="/vite.svg" className="w-10 h-10" />
            <div className="flex justify-center items-center gap-2">
              <button
                type="button"
                className={`min-w-[40px] rounded-xl border px-3 py-2 text-sm font-semibold transition ${locale === "es" ? "border-transparent bg-primary text-white" : "border-gray-300 bg-white text-black"}`}
                onClick={toggleLanguage}
              >
                ES
              </button>
              <button
                type="button"
                className={`min-w-[40px] rounded-xl border px-3 py-2 text-sm font-semibold transition ${locale !== "es" ? "border-transparent bg-primary text-white" : "border-gray-300 bg-white text-black"}`}
                onClick={toggleLanguage}
              >
                EN
              </button>
            </div>

            <button onClick={() => setOpen((value) => !value)}>
              <CloseIcon className=" text-2xl" />
            </button>
          </div>
          <div className="flex flex-col self-center h-full pt-16 w-11/12 justify-around items-center">
            <div className="flex flex-col w-full gap-3">
              {navLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="block text-2xl rounded-xl px-3 py-2 font-semibold text-gray-800 transition hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  <item.icon className="mr-5 text-3xl" />
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-4 w-full flex flex-wrap items-center">
              <a
                href="/CV-Sofia_Moneta.pdf"
                download={true}
                className="inline-flex w-full text-xl justify-center items-center gap-2 rounded-xl bg-primary px-4 py-4 font-semibold text-white transition hover:bg-primary/90"
              >
                {t.navbar.cv}
                {/* <DownloadIcon className="text-lg" /> */}
              </a>
              <div className=" w-full flex justify-around py-8 text-4xl">
                <a
                  href="https://github.com/moneta-sofia"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-16 w-16 items-center justify-center rounded-xl border border-gray-300 bg-white text-gray-700 transition hover:bg-gray-50"
                >
                  <GithubIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/sofiamoneta"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-16 w-16 items-center justify-center rounded-xl border border-gray-300 bg-white text-gray-700 transition hover:bg-gray-50"
                >
                  <LinkedinIcon />
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=sofia.moneta.dev@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-16 w-16 items-center justify-center rounded-xl border border-gray-300 bg-white text-gray-700 transition hover:bg-gray-50"
                >
                  <MailIcon />
                </a>
              </div>
            </div>

            <div className="text-center">
              ©{new Date().getFullYear()} Sofia Moneta.
              <br />
              {t.app.footer}
            </div>
          </div>
        </div>
      </>
    </nav>
  );
}
