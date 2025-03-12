export const blogPost = {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "author",
      title: "Author",
      type: "object",
      fields: [
        { name: "author_name", title: "Author Name", type: "string" },
        {
          name: "author_description",
          title: "Author Description",
          type: "string",
        },
        { name: "author_image_url", title: "Author Image URL", type: "url" },
      ],
    },
    {
      name: "read_time",
      title: "Read Time",
      type: "string",
    },
    {
      name: "date",
      title: "Date",
      type: "datetime",
    },
    {
      name: "imageUrl",
      title: "Main Image URL",
      type: "url",
    },
    {
      name: "altText",
      title: "Alt Text",
      type: "string",
    },
    {
      name: "meta_description",
      title: "Meta Description",
      type: "text",
    },
    {
      name: "banner_introduction",
      title: "Banner Introduction",
      type: "text",
    },
    {
      name: "secondary_introduction",
      title: "Secondary Introduction",
      type: "text",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "bullet_points", title: "Bullet Points?", type: "boolean" },
            { name: "subheader", title: "Subheader", type: "string" },
            { name: "paragraph", title: "Paragraph", type: "text" },
            {
              name: "intro",
              title: "Intro (for bullet points)",
              type: "text",
            },
            {
              name: "bullet_points_text",
              title: "Bullet Points Text",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "highlight", title: "Highlight", type: "string" },
                    { name: "sentence", title: "Sentence", type: "text" },
                  ],
                },
              ],
              initialValue: [], // Ensures it's always an array
            },
            {
              name: "bullet_points_outro",
              title: "Bullet Points Outro",
              type: "text",
            },
          ],
        },
      ],
    },
    {
      name: "conclusion",
      title: "Conclusion",
      type: "text",
    },
    {
      name: "call_to_action",
      title: "Call to Action",
      type: "object",
      fields: [
        { name: "header", title: "Header", type: "string" },
        { name: "text", title: "Text", type: "text" },
        { name: "image_url", title: "Image URL", type: "url" },
        { name: "image_alt", title: "Image Alt Text", type: "string" },
      ],
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
