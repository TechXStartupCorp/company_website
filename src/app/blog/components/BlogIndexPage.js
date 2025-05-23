"use client";
import React from "react";
import styles from "./BlogIndexPage.module.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import Pagination from "@/app/components/Pagination/Pagination";
import Tag from "@/app/components/Tag/Tag";
import GreyBtnWide from "@/app/components/GreyBtnWide/GreyBtnWide";
import { IoReload } from "react-icons/io5";

const BlogIndexPage = ({ blogPosts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const POSTS_PER_PAGE = 7;

  const slugify = (title) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
  };

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
        return prevSelectedCategories.filter((t) => t !== category);
      } else {
        return [...prevSelectedCategories, category];
      }
    });
  };

  if (!blogPosts || blogPosts.length === 0) {
    return <p>Loading...</p>;
  }

  const filteredPosts = blogPosts.filter((post) =>
    selectedCategories.some((category) => post.categories.includes(category))
  );

  const displayedPosts = filteredPosts.length > 0 ? filteredPosts : blogPosts;

  const totalPages = Math.ceil(displayedPosts.length / POSTS_PER_PAGE);

  const sortedPosts = [...displayedPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const paginatedPosts = sortedPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const groupedPosts = {};
  paginatedPosts.forEach((post) => {
    const postDate = new Date(post.date);
    const formattedMonth = postDate.toLocaleString("default", {
      month: "long",
      year: "numeric",
    });

    if (!groupedPosts[formattedMonth]) {
      groupedPosts[formattedMonth] = [];
    }
    groupedPosts[formattedMonth].push(post);
  });

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
          {Object.keys(groupedPosts).map((month, monthIndex) => (
            <React.Fragment key={monthIndex}>
              <h5 className="xtraBold mt-5">{month}</h5>
              {groupedPosts[month].map((post, index) => (
                <Row className="mt-4" key={index}>
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
                        link={`/blog/${post.slug.current}`}
                        aria-label={`Read more about ${post.title}`}
                      />
                    </div>
                  </Col>
                </Row>
              ))}
            </React.Fragment>
          ))}
        </Row>

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

export default BlogIndexPage;
