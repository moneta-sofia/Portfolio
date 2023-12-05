import React, { useContext, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import TextAnimation from "./TextAnimation";
import {motion} from "framer-motion";
import { LanguageContext } from "../contexts/LanguageContext";

export default function Contact() {
    const {isSpanish} = useContext(LanguageContext)
    const form = useRef();

    const sendForm = (e) => {
        e.preventDefault();

        if (isSpanish) {            
            toast.promise(
                emailjs.sendForm(
                    "service_evftutj",
                    "template_gi3ns3s",
                    form.current,
                    "1i2zGYSVJo9MrYcxO"
                ),
                {
                    loading: "Cargando...",
                    success: () => {
                        return "El correo se ha enviado correctamente!";
                    },
                    error: "Lo siento! No se ha podido enviar el mail :/",
                }
            );
        } else {
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
                        return "The email has been sent successfully!";
                    },
                    error: "I'm sorry! The email couldn't be sent :/",
                }
            );

        }
    };

    return (
        <div className="text-center mb-32 flex flex-col justify-center items-center" name='contacto'>
            <Toaster richColors expand={false}  position="bottom-center" />
            <h1 className="font-bold text-primary 3xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl text-4xl my-10 px-3" >
                {isSpanish?
                <TextAnimation text='TRABAJEMOS JUNTOS!  '/>
                :
                <TextAnimation text="LET'S WORK TOGETHER!"/>}
            </h1>
            <motion.p className="md:text-xl text-lg md:px-10 px-5"
                initial={{opacity:0}}
                whileInView={{opacity:1, transition:{ duration:1.5, delay:0.5}}}
                viewport={{once:true}}
            >
                {isSpanish? 'Puedes contactarme por mi correo' : 'You can reach out to me via my email at '}
                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=sofia.moneta.dev@gmail.com"
                    target="_blank"
                    className="text-primary font-bold underline"
                >
                    sofia.moneta.dev@gmail.com
                </a>
                {isSpanish? ', o bien por este formulario 🥰' : ' or through this form 🥰.'}
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
                    <label for="name"  className="labelName text-xl font-bold px-2 text-primary">
                        {isSpanish? 'Nombre' : 'Name'}
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="user_name"
                        required
                        className="pl-5 inputName h-14 w-full text-lg text-gray-800 rounded-xl bg-inherit border-2 focus:border-4 border-solid border-primary"
                    />
                </div>

                <div className="flex flex-col w-full relative my-3">
                    <label for="email" className="labelName text-xl font-bold px-2 text-primary">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="user_email"
                        required
                        className="pl-5 inputName h-14 w-full text-lg text-gray-800 rounded-xl bg-inherit border-2 focus:border-4 border-solid border-primary"
                    />
                </div>

                <div className="flex flex-col w-full relative my-3">
                    <label for="message" className="labelName text-xl font-bold px-2 text-primary">
                        {isSpanish? 'Mensaje' : 'Message'}
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className="px-5 lg:h-36 h-60 inputName w-full text-lg text-gray-800 rounded-xl bg-inherit border-2 focus:border-4 border-solid border-primary py-3"
                    />
                </div>

                <button className="bg-primary w-3/4 py-3 rounded-xl font-bold text-secondary my-3">
                    {isSpanish? 'Enviar' : 'Send'}
                </button>
            </motion.form>
        </div>
    );
}
