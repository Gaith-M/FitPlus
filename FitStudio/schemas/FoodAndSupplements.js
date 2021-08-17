export default {
  name: 'foodAndSupplements',
  title: 'Supplements',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'localizedTitles',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name.en',
      },
    },
    {
      name: 'vendor',
      title: 'Vendor',
      type: 'reference',
      to: [{ type: 'vendor' }],
    },
    {
      name: 'imageArray',
      title: 'Product Images',
      type: 'array',
      description: 'Photos Must Have 1:1 Aspect Ration',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
            },
            {
              name: 'alt',
              title: 'Alt',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1).max(5),
    },

    {
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'supplements', value: 'supplements' },
          { title: 'food', value: 'food' },
          { title: 'weight loss', value: 'weight loss' },
          { title: 'weight gain', value: 'weight gain' },
        ],
        layout: 'grid',
      },
    },
    {
      name: 'info',
      title: 'Product Information',
      type: 'object',
      fields: [
        {
          name: 'weightDetails',
          title: 'Package Weight',
          type: 'object',
          fields: [
            {
              name: 'weight',
              title: 'Weight',
              type: 'number',
            },
            {
              name: 'en',
              title: 'Unit In English',
              type: 'string',
              options: {
                list: ['k.g', 'pound', 'ounce', 'gram'],
              },
            },

            {
              name: 'ar',
              title: 'Unit In Arabic',
              type: 'string',
              options: {
                list: ['كغ', 'باوند', 'اوقية', 'غرام'],
              },
            },
          ],
        },

        {
          name: 'servingDetails',
          title: 'Servings Details',
          type: 'object',
          fields: [
            {
              name: 'en',
              title: 'Serving Name In English',
              type: 'string',
              options: {
                list: ['pieces', 'pills', 'bags', 'scopes'],
              },
            },
            {
              name: 'ar',
              title: 'Serving Name In Arabic',
              type: 'string',
              options: {
                list: ['قطعة', 'حبة', 'كيس', 'ملعقة'],
              },
            },
            {
              name: 'numberOfServings',
              title: 'Total Number Of Servings',
              type: 'number',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'flavors',
      title: 'Avaliable Flavors',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'array',
          of: [{ type: 'string' }],
          validation: (Rule) => Rule.unique(),
        },
        {
          name: 'ar',
          title: 'Arabic',
          type: 'array',
          of: [{ type: 'string' }],
          validation: (Rule) => Rule.unique(),
        },
      ],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'localeContent',
    },
    {
      name: 'metaDescription',
      title: 'Description for search engines',
      type: 'object',
      fields: [
        {
          name: 'ar',
          title: 'Arabic',
          type: 'string',
        },
        {
          name: 'en',
          title: 'English',
          type: 'string',
        },
      ],
    },
    {
      name: 'price',
      title: 'Price',
      type: 'priceSchema',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'name.en',
    },
  },
};
