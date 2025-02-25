import { client } from "./client";

export async function fetchBlogPosts() {
    const query = `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      "imageUrl": imageUrl, 
      altText,
      meta_description,
      banner_introduction,
      secondary_introduction,
      content[] {
        bullet_points,
        subheader,
        paragraph,
        intro,
        bullet_points_text[] {
          highlight,
          sentence
        },
        bullet_points_outro
      },
      conclusion,
      call_to_action {
        header,
        text,
        "image_url": image_url,
        image_alt
      },
      categories[],
      read_time,
      date,
      author {
        author_name,
        author_description,
        "author_image_url": author_image_url
      }
    }`;
  
    const posts = await client.fetch(query);
    return posts;
  }
  