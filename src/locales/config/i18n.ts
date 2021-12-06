import translationENGB from 'locales/enGB/translation.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    enGB: {
        translation: translationENGB,
    },
};

i18n.use(initReactI18next).init({
    resources,
    interpolation: {
        escapeValue: false,
    },
    lng: 'enGB',
    keySeparator: false,
    fallbackLng: 'enGB',
});

export default i18n;
