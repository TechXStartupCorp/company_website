// "use client";
import React from "react";
import { fetchBlogPosts } from "../../../sanity/lib/fetchBlogPosts";
import BlogIndexPage from "./components/BlogIndexPage";
import { GiConsoleController } from "react-icons/gi";

const Blog = async () => {
  try {
 
    const blogPosts = await fetchBlogPosts(); // Make sure your fetchBlogPosts function is handling the query properly
    console.log(blogPosts, 'blog posts from server')
    return <BlogIndexPage blogPosts={blogPosts} />; // Pass the fetched posts as props to the Client Component
  } catch (error) {
    console.error("Error fetching posts:", error);
    return <p>Failed to load blog posts.</p>; // Fallback in case of error
  }
};

export default Blog;
