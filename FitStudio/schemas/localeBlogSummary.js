export default {
  name: 'localeBlogSummary',
  type: 'object',
  fields: [
    {
      name: 'en',
      title: 'English',
      type: 'string',
      validation: (Rule) => Rule.min(300).max(400),
    },
    {
      name: 'ar',
      title: 'Arabic',
      type: 'string',
      validation: (Rule) => Rule.min(300).max(400),
    },
  ],
};
