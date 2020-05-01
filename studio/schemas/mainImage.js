import React from 'react';

export default {
  name: 'mainImage',
  type: 'image',
  title: 'Image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      options: {
        isHighlighted: true,
      },
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessiblity.',
      validation: (Rule) =>
        Rule.error('You have to fill out the alternative text.').required(),
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      img: 'asset.url',
      caption: 'caption',
      alt: 'alt',
    },
    prepare(selection) {
      const { caption, alt, img } = selection;
      return {
        title: caption ? caption : `No caption provided`,
        subtitle: alt,
        media: <img src={img} alt={alt} />,
      };
    },
  },
};
