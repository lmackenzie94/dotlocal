import React from 'react';

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: { type: 'category' },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'mainImage',
          options: {
            hotspot: false,
          },
        },
      ],
    },
    {
      name: 'location',
      title: 'Location(s)',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
      options: {
        list: [
          {
            title: '$',
            value: '1',
          },
          {
            title: '$$',
            value: '2',
          },
          {
            title: '$$$',
            value: '3',
          },
          {
            title: '$$$$',
            value: '4',
          },
        ],
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      // media: 'images[0].asset._ref',
    },
    prepare(selection) {
      const { title, author } = selection;

      return {
        title,
        subtitle: author && `by ${author}`,
      };
    },
  },
};
