import NextI18Next from 'next-i18next';
import path from 'path';

export default new NextI18Next({
  otherLanguages: ['pt', 'en'],
  defaultLanguage: 'pt',
  localePath: path.resolve('./public/static/locales'),
  lng: 'pt',
});
