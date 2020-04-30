import React from 'react';
import { imageUrlFor } from '../lib/image-url';

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
      description:
        'This will appear in the URL (ex: www.dotlocal.ca/posts/[slug])',
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
      description:
        'NOTE: the first image will be used as the preview image on the Home page',
      of: [
        {
          type: 'mainImage',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'locations',
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
      name: 'approxBill',
      title: 'Approximate Bill',
      type: 'string',
    },
    // {
    //   name: 'publishedAt',
    //   title: 'Published at',
    //   type: 'datetime',
    // },
    {
      name: 'goodFor',
      title: 'Good For',
      type: 'string',
      description: 'Enter a comma-separated list',
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
      images: 'images',
    },
    prepare(selection) {
      const { title, author, images } = selection;
      const imageObj = {
        asset: { _ref: images[0].asset._ref || images[0].asset._id },
      };
      return {
        title,
        subtitle: author && `by ${author}`,
        media: (
          <img
            src={imageUrlFor(imageObj)}
            alt={`${title}`}
            style={{ objectFit: `cover` }}
          />
        ),
      };
    },
  },
};
