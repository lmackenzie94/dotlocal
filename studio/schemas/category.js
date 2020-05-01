import { GiMeal } from 'react-icons/gi';
import { FaTshirt } from 'react-icons/fa';
import React from 'react';

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
  ],
  preview: {
    select: {
      name: 'name',
    },
    prepare({ name }) {
      return {
        title: name,
        media: name === 'Food' ? <GiMeal /> : <FaTshirt />,
      };
    },
  },
};
