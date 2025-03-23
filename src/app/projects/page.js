import React from "react";
import ProjectsIndexPage from "./components/ProjectsIndexPage";
import { fetchFeaturedProjects } from "../../../sanity/lib/fetchFeaturedProjects";

export default async function FeaturedProjects() {
  const projects = await fetchFeaturedProjects();

  return <ProjectsIndexPage projects={projects} />;
}
