module.exports = {
  locales: ['en', 'ar'],
  defaultLocale: 'en',
  localeDetection: false,
  pages: {
    '*': ['common'],
    '/': ['home', 'common', 'blogs', 'shop'],
    '/about': ['about'],
    '/cart': ['cart'],
    '/contact': ['contact'],
    '/blogs': ['blogs'],
    '/blogs/[slug]': ['blogs'],
    '/shop': ['shop'],
    '/products/[slug]': ['shop'],
    '/login': ['user'],
    '/sign-up': ['user'],
    '/user-details': ['user'],
  },
};
