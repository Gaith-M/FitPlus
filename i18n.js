module.exports = {
  locales: ['en', 'ar'],
  defaultLocale: 'en',
  localeDetection: false,
  pages: {
    '*': ['common'],
    '/': ['home', 'common'],
    '/about': ['about'],
    '/cart': ['cart'],
    '/contact': ['contact'],
    '/blogs': ['blogs'],
    '/blogs/[slug]': ['blogs'],
    '/shop': ['shop'],
  },
};
