export default {
  name: 'product',
  title: 'Gear',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Localized Names',
      type: 'localizedTitles',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name.en',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'vendor',
      title: 'vendor',
      type: 'reference',
      to: [{ type: 'vendor' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'equipment', value: 'equipment' },
          { title: 'clothing', value: 'clothing' },
          { title: 'accessories', value: 'accessories' },
          { title: 'men', value: 'men' },
          { title: 'women', value: 'women' },
        ],
        layout: 'grid',
      },
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required().min(2).max(5),
    },
    {
      name: 'productDetails',
      title: 'Product Details',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'size',
              title: 'size',
              type: 'string',
              description: 'optional',
              options: {
                list: ['S', 'M', 'L', 'XL', 'XXL'],
              },
            },
            {
              name: 'dimension',
              title: 'Dimensions',
              type: 'string',
              description: 'optional',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.unique().required(),
    },

    {
      name: 'weight',
      title: 'Weight Info',
      type: 'object',
      fields: [
        {
          name: 'weight',
          title: 'Weight',
          type: 'number',
        },
        {
          name: 'en',
          title: 'English Unit Name',
          type: 'string',
        },
        {
          name: 'ar',
          title: 'Arabic Unit Name',
          type: 'string',
        },
      ],
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'material',
      title: 'Material',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'string',
        },
        {
          name: 'ar',
          title: 'Arabic',
          type: 'string',
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'colors',
      title: 'Avaliable Colors',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'array',
          of: [{ type: 'string' }],
          validation: (Rule) => Rule.unique().required(),
        },
        {
          name: 'ar',
          title: 'Arabic',
          type: 'array',
          of: [{ type: 'string' }],
          validation: (Rule) => Rule.unique().required(),
        },
      ],
      options: {
        collapsible: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'localeContent',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'priceSchema',
    },
  ],
  preview: {
    select: {
      title: 'name.en',
    },
  },
};
