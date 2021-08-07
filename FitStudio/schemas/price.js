export default {
  name: 'priceSchema',
  type: 'object',
  fields: [
    {
      name: 'usd',
      title: 'U.S.D',
      type: 'object',
      fields: [
        {
          name: 'originalPrice',
          title: 'Original Price',
          type: 'number',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'discountPrice',
          title: 'Discount Price',
          type: 'number',
          description: 'Leaving this field empty means there is no discount',
        },
      ],
    },
    {
      name: 'uad',
      title: 'U.A.D',
      type: 'object',
      fields: [
        {
          name: 'originalPrice',
          title: 'Original Price',
          type: 'number',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'discountPrice',
          title: 'Discount Price',
          type: 'number',
          description: 'Leaving this field empty means there is no discount',
        },
      ],
    },
  ],
};
