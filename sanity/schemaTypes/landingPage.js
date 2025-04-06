export const landingPage = {
  name: "landingPage",
  title: "Landing Page",
  type: "document",
  fields: [
    {
      name: "heroSection",
      title: "Hero Section",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "text",
          title: "Description",
          type: "text",
        },
        {
          name: "imageUrl",
          title: "Hero Image URL",
          type: "url",
        },
        {
          name: "altText",
          title: "Hero Image Alt Text",
          type: "string",
        },
        {
          name: "primaryBtnText",
          title: "Primary Button Text",
          type: "string",
        },
        {
          name: "primaryBtnLink",
          title: "Primary Button Link",
          type: "url",
        },
        {
          name: "isThereSecondBtn",
          title: "Is there second btn",
          type: "boolean",
        },
        {
          name: "lightBtnText",
          title: "Secondary Button Text",
          type: "string",
        },
        {
          name: "lightBtnLink",
          title: "Secondary Button Link",
          type: "url",
        },
      ],
    },
    {
      name: "missionStatement",
      title: "Mission Statement",
      type: "object",
      fields: [
        {
          name: "statement",
          title: "Mission Statement",
          type: "text",
        },
        {
          name: "paragraph",
          title: "Mission Paragraph",
          type: "text",
        },
      ],
    },

    {
      name: "getTheGuideSection",
      title: "Get The Guide Section",
      type: "object",
      fields: [
        {
          name: "imageUrl",
          title: "Image Url",
          type: "url",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "alt",
          title: "Alt Text",
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
          name: "text",
          title: "Description",
          type: "text",
          validation: (Rule) => Rule.required(),
        },

        {
          name: "doSomethingForm",
          title: "Enable Form Action",
          type: "boolean",
        },
        {
          name: "doSomethingFormBtnText",
          title: "Form Button Text",
          type: "string",
        },
      ],
    },
    {
      name: "servicesSection",
      title: "Services Section",
      type: "object",
      fields: [
        {
          name: "header",
          title: "Section Header",
          type: "string",
        },
        {
          name: "services",
          title: "Services",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Service Title",
                  type: "string",
                },
                {
                  name: "icon",
                  title: "Icon",
                  type: "string",
                  description:
                    "Enter the FontAwesome icon name (e.g., 'FaGraduationCap')",
                },
                {
                  name: "text",
                  title: "Service Description",
                  type: "text",
                },
              ],
            },
          ],
        },
      ],
    }, 
    {
      name: "sellingPointsIntro",
      title: "Selling Points Introduction",
      type: "object",
      fields: [
        {
          name: "header",
          title: "Header",
          type: "string",
        },
        {
          name: "text",
          title: "Description",
          type: "text",
        },
      ],
    },
    {
      name: "sellingPoints",
      title: "Selling Points",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "icon",
              title: "Icon",
              type: "string",
              description: "Enter FontAwesome icon name",
            },
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "text",
              title: "Description",
              type: "text",
            },
          ],
        },
      ],
    },
    {
      name: "partnersSection",
      title: "Partners Section",
      type: "object",
      fields: [
        {
          name: "header",
          title: "Section Header",
          type: "string",
        },
        {
          name: "partners",
          title: "Partners",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "alt",
                  title: "Image Alt Text",
                  type: "string",
                },
                {
                  name: "image",
                  title: "Image URL",
                  type: "url", // <-- Changed from type: "image" to "url"
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "ctaSection",
      title: "Call to Action Section",
      type: "object",
      fields: [
        {
          name: "header",
          title: "Header",
          type: "string",
        },
        {
          name: "text",
          title: "Description",
          type: "text",
        },
        {
          name: "btnText",
          title: "Button Text",
          type: "string",
        },
        {
          name: "link",
          title: "Button Link",
          type: "url",
        },
      ],
    },
  ],
};
