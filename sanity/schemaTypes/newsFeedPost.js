export const newsFeedPost = {
  name: "newsFeed",
  title: "News Feed",
  type: "document",
  fields: [
    {
      name: "news_feed_source",
      title: "News Feed Source",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "date_time_posted",
      title: "Date & Time Posted",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title", // ✅
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "header",
              title: "Header",
              type: "string",
            },
            {
              name: "paragraph",
              title: "Paragraph",
              type: "text",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: "image",
      title: "Image",
      type: "object",
      fields: [
        {
          name: "image_url",
          title: "Image URL",
          type: "url",
          validation: (Rule) =>
            Rule.required().uri({ scheme: ["http", "https"] }),
        },
        {
          name: "alt_tag",
          title: "Alt Tag",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
