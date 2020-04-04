export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: { type: 'category' }
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' }
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'mainImage',
      options: {
        hotspot: true
      }
    },
    {
      name: 'otherImages',
      title: 'Other Images',
      type: 'array',
      of: [
        {
          type: 'mainImage',
          options: {
            hotspot: true
          }
        }
      ]
    },
    {
      name: 'location',
      title: 'Location(s)',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
      options: {
        list: [
          {
            title: '$',
            value: '1'
          },
          {
            title: '$$',
            value: '2'
          },
          {
            title: '$$$',
            value: '3'
          },
          {
            title: '$$$$',
            value: '4'
          }
        ]
      }
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    }
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage'
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`
      });
    }
  }
};
