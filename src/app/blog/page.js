"use client";
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import Pagination from "../components/Pagination/Pagination";
import Tag from "../components/Tag/Tag";
import { blogPosts } from "../data/DummyBlogPosts";
import GreyBtnWide from "../components/GreyBtnWide/GreyBtnWide";
import { IoReload } from "react-icons/io5";
import styles from "./page.module.css";
import { fetchBlogPosts } from "../../../sanity/lib/fetchBlogPosts";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sanityTestPosts, setSanityTestPosts] = useState("");

  const [selectedCategories, setSelectedCategories] = useState([]);
  const POSTS_PER_PAGE = 7; // Define how many posts per page

  useEffect(() => {
    const getPosts = async () => {
      console.log(
        process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        process.env.NEXT_PUBLIC_SANITY_DATASET
      );
      try {
        const data = await fetchBlogPosts();
        setSanityTestPosts(data);
        console.log(sanityTestPosts, "sanity posts");
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };
    getPosts();
  }, []);

  console.log(sanityTestPosts, "sanity posts");

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategories]);

  // Function to add or remove a category
  const toggleCategorySelection = (category) => {
    setSelectedCategories((prevSelectedCategories) => {
      if (prevSelectedCategories.includes(category)) {
        return prevSelectedCategories.filter((t) => t !== category); // Remove tag if already selected
      } else {
        return [...prevSelectedCategories, category]; // Add tag if not already selected
      }
    });
  };

  if (!sanityTestPosts || sanityTestPosts.length === 0) {
    return <p>Loading...</p>;
  }

  const filteredPosts = sanityTestPosts.filter((post) =>
    selectedCategories.some((category) => post.categories.includes(category))
  );

  // Filter blog posts based on selected tags
  // const filteredPosts = blogPosts.filter((post) =>
  //   selectedCategories.some((category) => post.categories.includes(category))
  // );

  const displayedPosts =
    filteredPosts.length > 0 ? filteredPosts : sanityTestPosts;

  // const displayedPosts = filteredPosts.length > 0 ? filteredPosts : blogPosts;

  const totalPages = Math.ceil(displayedPosts.length / POSTS_PER_PAGE);

  // Get posts for the current page
  const paginatedPosts = displayedPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  //
  return (
    <div className="section pb-5">
      <Container>
        <h3 className="xtraBold">Blog</h3>
        <h5 className="xtraBold mt-5">All posts</h5>

        <div className="d-flex w-100 flex-wrap gap-3 mt-4">
          {[
            "Startup Basics",
            "Funding & Investors",
            "Growth Strategies",
            "Innovation",
            "Leadership",
            "Global Growth",
            "Marketing",
            "Product Innovation",
            "Success Stories",
            "Legal & Compliance",
            "Sustainability",
            "Tech Trends",
          ].map((category, index) => (
            <Tag
              key={index}
              text={category}
              isSelected={selectedCategories.includes(category)}
              onClick={() => toggleCategorySelection(category)}
              setSelectedCategories={setSelectedCategories}
              selectedCategories={selectedCategories}
            />
          ))}
          <Tag
            setSelectedCategories={setSelectedCategories}
            selectedCategories={selectedCategories}
            text="Reset"
            icon={<IoReload />}
            onClick={() => setSelectedCategories([])}
          />
        </div>
        <Row>
          {paginatedPosts.map((post, index) => {
            const postDate = new Date(post.date);
            const formattedMonth = postDate.toLocaleString("default", {
              month: "long",
              year: "numeric",
            });

            // Check if this is the first occurrence of a new month
            const isNewMonth =
              index === 0 ||
              new Date(paginatedPosts[index - 1].date).toLocaleString(
                "default",
                { month: "long", year: "numeric" }
              ) !== formattedMonth;

            return (
              <React.Fragment key={index}>
                {isNewMonth && (
                  <h5 className="xtraBold mt-5">{formattedMonth}</h5>
                )}
                <Row className="mt-4">
                  <Col lg={10}>
                    <Row className="d-flex align-items-center">
                      <Col xl={1} lg={2}>
                        <div className={styles.blogImgContainer}>
                          <Image
                            src={post.imageUrl}
                            alt={post.altText}
                            layout="fill"
                            className="w-100 h-100 rounded"
                          />
                        </div>
                      </Col>
                      <Col>
                        <div className="d-flex flex-column">
                          <h6
                            className={`${styles.blogHeader} xtraBold mb-1 mt-1`}
                          >
                            {post.title}
                          </h6>
                          <small className="blogDate textBlue">
                            {new Date(post.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </small>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <div className={styles.readMoreBtnContainer}>
                      <GreyBtnWide
                        text="Read more"
                        link={`/blog/${post.title.replace(/\s+/g, "-").toLowerCase()}`}
                        aria-label={`Read more about ${post.title}`}
                      />
                    </div>
                  </Col>
                </Row>
              </React.Fragment>
            );
          })}
        </Row>

        {/* <Row>
          <h5 className="xtraBold mt-5">December 2024</h5>
        </Row>
        {paginatedPosts.map((post, index) => (
          <Row className="mt-4" key={index}>
            <Col lg={10}>
              <Row className="d-flex align-items-center">
                <Col xl={1} lg={2}>
                  <div className="">
                    <Image
                      src={post.imageUrl}
                      alt={post.altText}
                      layout="fill"
                      className="w-100 h-100 rounded"
                    />
                  </div>
                </Col>
                <Col>
                  <div className={`d-flex flex-column`}>
                    <h6
                      className={`${styles.blogHeader} xtraBold mb-1 mt-1`}
                    >
                      {post.title}
                    </h6>
                    <small className="blogDate textBlue">{post.date}</small>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col>
              <div className={styles.readMoreBtnContainer}>
                <GreyBtnWide
                  text="Read more"
                  link={`/blog/${post.title
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                  aria-label={`Read more about ${post.title}`}
                />
              </div>
            </Col>
          </Row>
        ))} */}
        <Row>
          <div className="mt-5">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
