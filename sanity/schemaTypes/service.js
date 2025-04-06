export const service = {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Service Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "icon",
      title: "Icon",
      type: "string",
      description: "Enter the FontAwesome icon name (e.g., 'FaGraduationCap')",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "text",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
  ],
};
