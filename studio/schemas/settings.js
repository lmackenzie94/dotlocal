export default {
  name: 'settings',
  title: 'Settings',
  type: 'document',
  __experimental_actions: ['update', 'publish' /* 'create', 'delete' */],
  fields: [
    { name: 'siteTitle', title: 'Site Title', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
  ],
};
