import React from "react";
import ProjectDetailsPage from "./components/ProjectDetailsPage";
import { client } from "../../../../sanity/lib/client";

const page = async ({ params }) => {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const query = `*[_type == "featuredProject" && slug.current == $slug][0]{
    _id,
    year,
    title,
    "slug": slug.current,
    industry,
    text,
    problem, // Add this
    solution, // Add this
    sections {
      intro,
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
  

  const project = await client.fetch(query, { slug });
  console.log(project, "project");

  return <ProjectDetailsPage project={project} />;
};

export default page;
