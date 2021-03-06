export default {
  name: 'localizedTitles',
  type: 'object',
  fields: [
    {
      name: 'en',
      title: 'English',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'ar',
      title: 'Arabic',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
};
