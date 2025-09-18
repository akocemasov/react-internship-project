import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../locales/en.json";
import ru from "../locales/ru.json";
import ro from "../locales/ro.json";

const translations = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
  ro: {
    translation: ro,
  },
};

const locales = Object.keys(translations);

i18n.use(initReactI18next).init({
  lng: locales[0],
  fallbackLng: locales,
  debug: false,
  resources: translations,
});


export default i18n;
