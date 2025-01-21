export const schemaTypes = [
  // Define your schemas here
  {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
      {
        name: 'title',
        type: 'string',
      },
      {
        name: 'content',
        type: 'text',
      },
    ],
  },
];