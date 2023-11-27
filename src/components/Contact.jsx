import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import TextAnimation from "./TextAnimation";
import {motion} from "framer-motion";

export default function Contact() {
    const form = useRef();

    const sendForm = (e) => {
        e.preventDefault();

        toast.promise(
            emailjs.sendForm(
                "service_evftutj",
                "template_gi3ns3s",
                form.current,
                "1i2zGYSVJo9MrYcxO"
            ),
            {
                loading: "Loading...",
                success: () => {
                    return "El correo se ha enviado correctamente!";
                },
                error: "Lo siento! No se ha podido enviar el mail :/",
            }
        );
    };

    return (
        <div className="text-center mb-32 flex flex-col justify-center items-center" name='contacto'>
            <Toaster richColors expand={false}  position="bottom-center" />
            <h1 className="font-bold text-primary 3xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl text-4xl my-10 px-3" >
                <TextAnimation text='TRABAJEMOS JUNTOS!'/>
            </h1>
            <motion.p className="md:text-xl text-lg md:px-10 px-5"
                initial={{opacity:0}}
                whileInView={{opacity:1, transition:{ duration:1.5, delay:0.5}}}
                viewport={{once:true}}
            >
                Puedes contactarme por mi correo{" "}
                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=sofia.moneta.dev@gmail.com"
                    target="_blank"
                    className="text-primary font-bold underline"
                >
                    sofia.moneta.dev@gmail.com
                </a>
                , o bien por este formulario 🥰
            </motion.p>
            <motion.form
                ref={form}
                onSubmit={sendForm}
                className="my-10 flex flex-col justify-center items-center bg-white sm:px-10 px-8 py-10 rounded-xl md:w-3/4 w-11/12 shadow-md"
                initial={{opacity:0, y:10}}
                whileInView={{opacity:1, y:0,transition:{ duration:1, delay:0.5}}}
                viewport={{once:true}}
            >
                <div className="flex flex-col w-full relative my-3">
                    <label className="labelName text-xl font-bold px-2 text-primary">
                        Nombre
                    </label>
                    <input
                        type="text"
                        name="user_name"
                        required
                        className="pl-5 inputName h-14 w-full text-lg text-gray-800 rounded-xl bg-inherit border-2 focus:border-4 border-solid border-primary"
                    />
                </div>

                <div className="flex flex-col w-full relative my-3">
                    <label className="labelName text-xl font-bold px-2 text-primary">
                        Email
                    </label>
                    <input
                        type="email"
                        name="user_email"
                        required
                        className="pl-5 inputName h-14 w-full text-lg text-gray-800 rounded-xl bg-inherit border-2 focus:border-4 border-solid border-primary"
                    />
                </div>

                <div className="flex flex-col w-full relative my-3">
                    <label className="labelName text-xl font-bold px-2 text-primary">
                        Mensaje
                    </label>
                    <textarea
                        name="message"
                        className="px-5 lg:h-36 h-60 inputName w-full text-lg text-gray-800 rounded-xl bg-inherit border-2 focus:border-4 border-solid border-primary py-3"
                    />
                </div>

                <button className="bg-primary w-3/4 py-3 rounded-xl font-bold text-secondary my-3">
                    Enviar
                </button>
            </motion.form>
        </div>
    );
}
