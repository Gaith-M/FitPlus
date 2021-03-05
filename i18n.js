module.exports = {
  locales: ['en', 'ar'],
  defaultLocale: 'en',
  localeDetection: false,
  pages: {
    '*': ['common'],
    '/': ['home'],
    '/about': ['about'],
    '/cart': ['cart'],
  },
};
