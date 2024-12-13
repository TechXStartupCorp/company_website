import { featuredProjects } from "@/app/data/FeaturedProjects";

export default function ProjectDetails({ params }) {
  const { slug } = params;

  // Match the project based on the slug
  const project = featuredProjects.find(
    (proj) => proj.title.toLowerCase().replace(/ /g, "-") === slug
  );

  // Handle not found
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.year}</p>
      <img src={project.image} alt={project.title} />
      <p>{project.text}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        Visit Project
      </a>
    </div>
  );
}