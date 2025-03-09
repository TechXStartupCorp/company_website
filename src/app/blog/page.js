// "use client";
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
// import { useState, useEffect } from "react";
import Pagination from "../components/Pagination/Pagination";
import Tag from "../components/Tag/Tag";
import { blogPosts } from "../data/DummyBlogPosts";
import GreyBtnWide from "../components/GreyBtnWide/GreyBtnWide";
import { IoReload } from "react-icons/io5";
import styles from "./page.module.css";
import { fetchBlogPosts } from "../../../sanity/lib/fetchBlogPosts";
import BlogIndexPage from "./components/BlogIndexPage";

const Blog = async () => {
  try {
    // Fetch data from Sanity (or any other source)
    const sanityTestPosts = await fetchBlogPosts(); // Make sure your fetchBlogPosts function is handling the query properly
    return <BlogIndexPage sanityTestPosts={sanityTestPosts} />; // Pass the fetched posts as props to the Client Component
  } catch (error) {
    console.error("Error fetching posts:", error);
    return <p>Failed to load blog posts.</p>; // Fallback in case of error
  }
};

// const posts = await fetchBlogPosts(); // No need for useState here
// console.log(posts, "posts");

// const [currentPage, setCurrentPage] = useState(1);
// const [sanityTestPosts, setSanityTestPosts] = useState();

// const [selectedCategories, setSelectedCategories] = useState([]);
// const POSTS_PER_PAGE = 7;

// const slugify = (title) => {
//   return title
//     .toLowerCase()
//     .trim()
//     .replace(/[^a-z0-9\s-]/g, "")
//     .replace(/\s+/g, "-");
// };

// useEffect(() => {
//   const getPosts = async () => {
//     console.log(
//       process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//       process.env.NEXT_PUBLIC_SANITY_DATASET
//     );
//     try {
//       const data = await fetchBlogPosts();
//       setSanityTestPosts(data);
//     } catch (error) {
//       console.error("Error fetching blog posts:", error);
//     }
//   };
//   getPosts();
// }, [sanityTestPosts]);

// const handlePageChange = (pageNumber) => {
//   setCurrentPage(pageNumber);
// };

// useEffect(() => {
//   setCurrentPage(1);
// }, [selectedCategories]);

// const toggleCategorySelection = (category) => {
//   setSelectedCategories((prevSelectedCategories) => {
//     if (prevSelectedCategories.includes(category)) {
//       return prevSelectedCategories.filter((t) => t !== category); // Remove tag if already selected
//     } else {
//       return [...prevSelectedCategories, category]; // Add tag if not already selected
//     }
//   });
// };

// if (!sanityTestPosts || sanityTestPosts.length === 0) {
//   return <p>Loading...</p>;
// }

// const filteredPosts = sanityTestPosts.filter((post) =>
//   selectedCategories.some((category) => post.categories.includes(category))
// );

// const displayedPosts =
//   filteredPosts.length > 0 ? filteredPosts : sanityTestPosts;

// const totalPages = Math.ceil(displayedPosts.length / POSTS_PER_PAGE);

// const paginatedPosts = displayedPosts.slice(
//   (currentPage - 1) * POSTS_PER_PAGE,
//   currentPage * POSTS_PER_PAGE
// );

// const sortedPosts = [...paginatedPosts].sort(
//   (a, b) => new Date(b.date) - new Date(a.date)
// );

// const groupedPosts = {};
// sortedPosts.forEach((post) => {
//   const postDate = new Date(post.date);
//   const formattedMonth = postDate.toLocaleString("default", {
//     month: "long",
//     year: "numeric",
//   });

//   if (!groupedPosts[formattedMonth]) {
//     groupedPosts[formattedMonth] = [];
//   }
//   groupedPosts[formattedMonth].push(post);
// });

// return (
// <div className="section pb-5">
//   <Container>
//     <h3 className="xtraBold">Blog</h3>
//     <h5 className="xtraBold mt-5">All posts</h5>

//     <div className="d-flex w-100 flex-wrap gap-3 mt-4">
//       {[
//         "Startup Basics",
//         "Funding & Investors",
//         "Growth Strategies",
//         "Innovation",
//         "Leadership",
//         "Global Growth",
//         "Marketing",
//         "Product Innovation",
//         "Success Stories",
//         "Legal & Compliance",
//         "Sustainability",
//         "Tech Trends",
//       ].map((category, index) => (
//         <Tag
//           key={index}
//           text={category}
//           isSelected={selectedCategories.includes(category)}
//           onClick={() => toggleCategorySelection(category)}
//           setSelectedCategories={setSelectedCategories}
//           selectedCategories={selectedCategories}
//         />
//       ))}
//       <Tag
//         setSelectedCategories={setSelectedCategories}
//         selectedCategories={selectedCategories}
//         text="Reset"
//         icon={<IoReload />}
//         onClick={() => setSelectedCategories([])}
//       />
//     </div>

//     <Row>
//       {Object.keys(groupedPosts).map((month, monthIndex) => (
//         <React.Fragment key={monthIndex}>
//           <h5 className="xtraBold mt-5">{month}</h5>
//           {groupedPosts[month].map((post, index) => (
//             <Row className="mt-4" key={index}>
//               <Col lg={10}>
//                 <Row className="d-flex align-items-center">
//                   <Col xl={1} lg={2}>
//                     <div className={styles.blogImgContainer}>
//                       <Image
//                         src={post.imageUrl}
//                         alt={post.altText}
//                         layout="fill"
//                         className="w-100 h-100 rounded"
//                       />
//                     </div>
//                   </Col>
//                   <Col>
//                     <div className="d-flex flex-column">
//                       <h6
//                         className={`${styles.blogHeader} xtraBold mb-1 mt-1`}
//                       >
//                         {post.title}
//                       </h6>
//                       <small className="blogDate textBlue">
//                         {new Date(post.date).toLocaleDateString("en-US", {
//                           year: "numeric",
//                           month: "long",
//                           day: "numeric",
//                         })}
//                       </small>
//                     </div>
//                   </Col>
//                 </Row>
//               </Col>
//               <Col>
//                 <div className={styles.readMoreBtnContainer}>
//                   <GreyBtnWide
//                     text="Read more"
//                     link={`/blog/${slugify(post.title)}`}
//                     aria-label={`Read more about ${post.title}`}
//                   />
//                 </div>
//               </Col>
//             </Row>
//           ))}
//         </React.Fragment>
//       ))}
//     </Row>

//     <Row>
//       <div className="mt-5">
//         <Pagination
//           currentPage={currentPage}
//           totalPages={totalPages}
//           onPageChange={handlePageChange}
//         />
//       </div>
//     </Row>
//   </Container>
// </div>
// );
// };

export default Blog;
