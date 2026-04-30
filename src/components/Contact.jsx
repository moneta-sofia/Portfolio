import React, { useRef, lazy, Suspense, useEffect } from "react";
import emailjs from "@emailjs/browser";
import TextAnimation from "./TextAnimation";
import { useTranslation } from "../hooks/useTranslation";

const Toaster = lazy(() => import("sonner").then((mod) => ({ default: mod.Toaster })));

export default function Contact() {
  const t = useTranslation();
  const form = useRef();
  const captchaInput = useRef();
  const siteKey = import.meta.env.VITE_SITE_KEY_CAPTCHA;

  useEffect(() => {
    emailjs.init("1i2zGYSVJo9MrYcxO");

    if (!siteKey || typeof window === "undefined") {
      return;
    }

    if (window.grecaptcha) {
      return;
    }

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [siteKey]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { toast } = await import("sonner");

    if (!siteKey) {
      toast.error(t.contact.captchaError);
      return;
    }

    if (!window.grecaptcha) {
      toast.error(t.contact.captchaError);
      return;
    }

    window.grecaptcha.ready(async () => {
      try {
        const token = await window.grecaptcha.execute(siteKey, {
          action: "contact_form",
        });
        await onReCAPTCHAChange(token);
      } catch (error) {
        toast.error(t.contact.captchaError);
      }
    });
  };

  const onReCAPTCHAChange = async (captchaValue) => {
    if (!captchaValue) {
      const { toast } = await import("sonner");
      toast.error(t.contact.captchaError);
      return;
    }

    if (captchaInput.current) {
      captchaInput.current.value = captchaValue;
    }

    const { toast } = await import("sonner");

    toast.promise(
      emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        form.current,
        import.meta.env.VITE_EMAILJS_PASSWORD,
      ),
      {
        loading: t.contact.loading,
        success: () => t.contact.success,
        error: t.contact.error,
      },
    );
  };

  return (
    <div
      className="text-center mb-32 flex flex-col justify-center items-center"
      id="contacto"
      name="contacto"
    >
      <Suspense fallback={null}>
        <Toaster richColors expand={false} position="bottom-center" />
      </Suspense>
      <h1 className="font-bold text-primary 3xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl text-4xl my-10 px-3">
        <TextAnimation text={t.contact.title} />
      </h1>
      <p className="md:text-xl text-lg md:px-10 px-5 animate-fade-up">
        {t.contact.introStart}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=sofia.moneta.dev@gmail.com"
          target="_blank"
          className="text-primary font-bold underline"
        >
          {t.contact.email}
        </a>
        {t.contact.introEnd}
      </p>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="my-10 flex flex-col justify-center items-center bg-white sm:px-10 px-8 py-10 rounded-xl md:w-3/4 w-11/12 shadow-md animate-fade-up"
      >
        <div className="flex flex-col w-full relative my-3">
          <label className="labelName text-xl font-bold px-2 text-primary">
            {t.contact.fields.name}
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
          <label className="labelName text-xl font-bold px-2 text-primary">
            {t.contact.fields.email}
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
          <label className="labelName text-xl font-bold px-2 text-primary">
            {t.contact.fields.message}
          </label>
          <textarea
            id="message"
            name="message"
            className="px-5 lg:h-36 h-60 inputName w-full text-lg text-gray-800 rounded-xl bg-inherit border-2 focus:border-4 border-solid border-primary py-3"
          />
        </div>

        <input type="hidden" name="captcha" ref={captchaInput} />

        <button className="bg-primary w-3/4 py-3 rounded-xl font-bold text-secondary my-3">
          {t.contact.fields.send}
        </button>
      </form>
    </div>
  );
}
