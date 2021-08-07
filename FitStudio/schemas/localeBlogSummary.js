export default {
  name: 'localeBlogSummary',
  type: 'object',
  fields: [
    {
      name: 'en',
      title: 'English',
      type: 'text',
      validation: (Rule) => Rule.min(300).max(400),
    },
    {
      name: 'ar',
      title: 'Arabic',
      type: 'text',
      validation: (Rule) => Rule.min(300).max(400),
    },
  ],
};
