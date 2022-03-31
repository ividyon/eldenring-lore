import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../data/locale/en.json';

i18next.use(initReactI18next).init({
    interpolation: {
        // React already does escaping
        escapeValue: false,
    },
    lng: 'en',
    resources: {
        en: {
            translation: en
        }
    }
})

export default i18next

export const t = i18next.t