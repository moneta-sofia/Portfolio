import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";

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
        <div className="text-center mb-32 flex flex-col justify-center items-center">
            <Toaster richColors expand={false}  position="bottom-center" />
            <h1 className="font-bold text-primary 3xl:text-8xl xl:text-7xl lg:text-6xl text-5xl my-10">
                TRABAJEMOS JUNTOS!
            </h1>
            <p className="text-xl px-10">
                Puedes contactarme por mi correo{" "}
                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=sofia.moneta.dev@gmail.com"
                    target="_blank"
                    className="text-primary font-bold underline"
                >
                    sofia.moneta.dev@gmail.com
                </a>
                , o bien por este formulario 🥰
            </p>
            <form
                ref={form}
                onSubmit={sendForm}
                className="my-10 flex flex-col justify-center items-center bg-white py-10 rounded-xl w-3/4"
            >
                <div className="flex flex-col w-full px-10 relative my-3">
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

                <div className="flex flex-col w-full px-10 relative my-3">
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

                <div className="flex flex-col w-full px-10 relative my-3">
                    <label className="labelName text-xl font-bold px-2 text-primary">
                        Mensaje
                    </label>
                    <textarea
                        name="message"
                        className="px-5 min-h-24 max-h-48 inputName w-full text-lg text-gray-800 rounded-xl bg-inherit border-2 focus:border-4 border-solid border-primary py-3"
                    />
                </div>

                <button className="bg-primary w-3/4 py-3 rounded-xl font-bold text-secondary my-3">
                    Enviar
                </button>
            </form>
        </div>
    );
}
