// "use client";
import React from "react";
import { fetchBlogPosts } from "../../../sanity/lib/fetchBlogPosts";
import BlogIndexPage from "./components/BlogIndexPage";

export const dynamic = "force-dynamic";

const Blog = async () => {
  try {
    // Fetch data from Sanity (or any other source)
    const blogPosts = await fetchBlogPosts(); // Make sure your fetchBlogPosts function is handling the query properly
    return <BlogIndexPage blogPosts={blogPosts} />; // Pass the fetched posts as props to the Client Component
  } catch (error) {
    console.error("Error fetching posts:", error);
    return <p>Failed to load blog posts.</p>; // Fallback in case of error
  }
};

export default Blog;
