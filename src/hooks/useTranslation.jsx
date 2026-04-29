import { translations } from "../data/translations";

export function useTranslation() {
  const locale = window.location.pathname.toLowerCase().startsWith("/es") ? "es" : "en";
  return { locale, ...translations[locale] };
}
