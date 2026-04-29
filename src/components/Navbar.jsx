
import { Link } from "react-scroll";
import { useTranslation } from "../hooks/useTranslation";
import { DownloadIcon, GithubIcon, LinkedinIcon } from "../data/icons";

export default function Navbar() {
  const t = useTranslation();
  const locale = t.locale;

  const toggleLanguage = () => {
    const targetPath = locale === "en" ? "/es" : "/";
    window.location.href = `${targetPath}${window.location.search}${window.location.hash}`;
  };

  return (

    <div className="w-11/12 fixed py-4 p-6 m-3 top-0 z-10 flex justify-between items-center bg-white border-b-[1.5px] border-gray-300 rounded-lg shadow-md">
      <div >
        <Link to="inicio" className="mx-5 font-semibold cursor-pointer">{t.navbar.start}</Link>
        <Link to="sobreMi" className="mx-5 font-semibold cursor-pointer">{t.navbar.about}</Link>
        <Link to="proyectos" className="mx-5 font-semibold cursor-pointer">{t.navbar.projects}</Link>
        <Link to="contacto" className="mx-5 font-semibold cursor-pointer">{t.navbar.contact}</Link>
      </div>

      <div>
        <a href="https://github.com/moneta-sofia" target="_blank" className=" text-xl py-2 px-[0.7rem] bg-white rounded-xl ml-5 border-gray-300 border-[1.5px]"><GithubIcon/></a>
        <a href="https://www.linkedin.com/in/sofiamoneta" target="_blank" className=" text-xl py-2 px-[0.7rem] bg-white rounded-xl ml-5 border-gray-300 border-[1.5px]"><LinkedinIcon/></a>
        <a href="/CV-Sofia_Moneta.pdf" download={""}  className="  py-[0.8rem] px-[0.7rem] bg-primary text-white rounded-xl ml-5"><DownloadIcon className="text-xl "/> {t.navbar.cv} </a>
      </div>

    </div>

    // <div className="fixed top-0 right-0 lg:mr-16 mr-5 lg:mt-10 mt-5  z-50 flex justify-around">
    //   <div
    //     className={` cursor-pointer bg-white text-black font-bold text-2xl md:flex hidden items-center justify-around lg:mr-10 mr-6 lg:w-16 w-14 p-4 z-50 rounded-full transition-transform shadow-mdButCenter`}
    //     onClick={toggleLanguage}
    //   >
    //     {locale === "es" ? "En" : "Es"}
    //   </div>
    //   <div className="flex flex-col items-center justify-center">

    //   </div>
    // </div>
  );
}
