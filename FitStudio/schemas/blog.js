export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Document Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'localeTitle',
      title: 'Localized Titles',
      type: 'localizedTitles',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Diet', value: 'diet' },
          { title: 'Exercise', value: 'exercises' },
          { title: 'Review', value: 'reviews' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'author',
      title: 'By',
      type: 'reference',
      to: [{ type: 'author' }],
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'image',
      title: 'image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Image Title',
          type: 'string',
          options: { isHighlighted: true },
        },
      ],
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Blog Content',
      type: 'localeContent',
    },
    {
      name: 'preview',
      title: 'Display Summary',
      type: 'localeBlogSummary',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'dateOfPublish',
      title: 'Set Publishing Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    },
  ],
};
