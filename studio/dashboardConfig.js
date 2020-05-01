export default {
  widgets: [
    {
      name: 'project-info',
    },
    {
      name: 'project-users',
    },
    {
      name: 'netlify',
      options: {
        title: 'Staging / Production Links',
        sites: [
          {
            title: 'Staging',
            apiId: '1dbc7587-97be-4a27-96cc-07db1e1db9b5',
            buildHookId: '5eac6a77b346100c6ca33840',
            name: 'staging-dotlocal',
          },
          {
            title: 'Production',
            apiId: '58fbe8ac-9c68-40f4-b9bc-5fee808dbde9',
            buildHookId: '5eac6af01086071b2a362b34',
            name: 'dotlocal',
          },
        ],
      },
    },
  ],
};
