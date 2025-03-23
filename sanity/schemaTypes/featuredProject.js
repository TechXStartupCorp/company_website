export const featuredProject = {
  name: "featuredProject",
  title: "Featured Project",
  type: "document",
  fields: [
    {
      name: "sortOrder",
      title: "Sort Order",
      type: "number",
      description: "Lower numbers appear first",
      validation: (Rule) => Rule.min(1),
    },
    {
      name: "year",
      title: "Year",
      type: "string",
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
        source: "title",
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "industry",
      title: "Industry",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "text",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "problem",
      title: "Problem",
      type: "text", // Allows multi-line input
      validation: (Rule) => Rule.required(),
    },
    {
      name: "solution",
      title: "Solution",
      type: "text", // Allows multi-line input
      validation: (Rule) => Rule.required(),
    },
    {
      name: "sections",
      title: "Sections",
      type: "object",
      fields: [
        {
          name: "intro",
          title: "Introduction",
          type: "text",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "benefits",
          title: "Benefits",
          type: "array",
          of: [{ type: "string" }],
          validation: (Rule) => Rule.required(),
        },
        {
          name: "conclusion",
          title: "Conclusion",
          type: "text",
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "targetAudience",
      title: "Target Audience",
      type: "array",
      of: [
        {
          type: "object",
          name: "audience",
          title: "Audience",
          fields: [
            {
              name: "label",
              title: "Audience Label",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "percentage",
              title: "Percentage",
              type: "number",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    },

    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "url",
          validation: (Rule) => Rule.uri({ scheme: ["http", "https"] }),
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
};
