import { BsGearFill } from 'react-icons/bs';

export default {
  name: 'settings',
  title: 'Settings',
  type: 'document',
  __experimental_actions: ['update', 'publish' /* 'create', 'delete' */],
  icon: BsGearFill,
  fields: [
    { name: 'siteTitle', title: 'Site Title', type: 'string' },
    { name: 'description', title: 'Description', type: 'string' },
    { name: 'heroImage', title: 'Hero Image ', type: 'image' },
  ],
};
