import React from "react";
import { client } from "../../../../sanity/lib/client";
import BlogPost from "./components/BlogPost";

const page = async ({ params }) => {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    author {
      author_name,
      author_description,
      author_image_url
    },
    read_time,
    date,
    imageUrl,
    altText,
    meta_description,
    banner_introduction,
    secondary_introduction,
    content[]{
      bullet_points,
      subheader,
      paragraph,
      intro,
      bullet_points_text[]{
        highlight,
        sentence
      },
      bullet_points_outro
    },
    conclusion,
    call_to_action {
      header,
      text,
      image_url,
      image_alt
    },
    categories
  }`;

  const blogPost = await client.fetch(query, { slug });

  if (!blogPost) {
    return notFound();
  }

  return <BlogPost blogPost={blogPost} />;
};

export default page;
