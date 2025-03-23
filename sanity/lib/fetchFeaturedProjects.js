import { client } from "./client";

export const fetchFeaturedProjects = async () => {
    const query = `*[_type == "featuredProject"]{
        _id,
        year,
        title,
        slug,
        industry,
        text,
        sections {
          intro,
          problems[] {
            header,
            solutions
          },
          benefits,
          conclusion
        },
        targetAudience[] {
          label,
          percentage
        },
        link,
        images
      }`;
  
    const featuredProjects = await client.fetch(query); // Execute the query
  
    return featuredProjects; // Return the fetched featured projects
  };