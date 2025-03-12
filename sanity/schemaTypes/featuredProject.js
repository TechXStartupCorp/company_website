export const featuredProject = {
    name: "featuredProject",
    title: "Featured Project",
    type: "document",
    fields: [
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
            name: "problem",
            title: "Problem",
            type: "text",
            validation: (Rule) => Rule.required(),
          },
          {
            name: "solution",
            title: "Solution",
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
        name: "link",
        title: "Project Link",
        type: "url",
        validation: (Rule) =>
          Rule.required().uri({
            scheme: ["http", "https"],
          }),
      },
      {
        name: "images",
        title: "Images",
        type: "array",
        of: [
          {
            type: "url",
            validation: (Rule) =>
              Rule.uri({ scheme: ["http", "https"] }),
          },
        ],
        validation: (Rule) => Rule.required(),
      },
    ],
  };
  