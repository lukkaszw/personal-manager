import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import CustomBackend from './CustomBackend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(CustomBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    defaultLanguage: 'en',
    otherLanguages: ['pl'],
    fallbackLng: 'en',
    debug: true,
    saveMissing: true,

    backend: {
      // cors-anywhere is a trick. Don't use it in production
      loadPath: process.env.NODE_ENV === 'production' ? '/api/lang' : 'http://localhost:8000/api/lang',
      addPath: process.env.NODE_ENV === 'production' ? '/api/lang/add' : 'http://localhost:8000/api/lang/add',
      crossDomain: true,
      parse: data => {
        const parsedData = JSON.parse(data);
        const terms = parsedData.result.terms.reduce((acc, item) => {
          acc[item.term] = item.translation.content || item.term;

          return acc;
        }, {});

        return terms;
      },
      parsePayload: (namespace, key) => {
        if (key === '_t') return;

        const data = [{
          term: key,
        }];
        const payload = {
          data: JSON.stringify(data),
        };

        return payload;
      },
      parseLoadPayload: ({ lng }) => {
        const payload = {
          language: lng,
        };

        return payload;
      },
    },

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });


export default i18n;