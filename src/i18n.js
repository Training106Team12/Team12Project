import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import { fallbackLng } from "./i18n.config";
// import Backend from "i18next-http-backend";
import en from "./locales/en.json"
import ar from "./locales/ar.json"
import tr from "./locales/tr.json"
// import { fallbackLng } from "./i18n.config";

i18n.use(initReactI18next).init({
    resources:{
        en: {translation: en},
        ar: {translation: ar},
        tr: {translation: tr},
    },
    lng: "en",
    fallbackLng: ["ar","tr"],
    interpolation:{escapeValue: false,},

})
export default i18n;
