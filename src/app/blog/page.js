"use client";
import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import Pagination from "../components/Pagination/Pagination";
import GreyBtnWithBlackHover from "../components/GreyBtnWithBlackHover/GreyBtnWithBlackHover";
import Tag from "../components/Tag/Tag";
import styles from "./page.module.css";
import Link from "next/link";

const page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Change this to match your data

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // You can add logic here to fetch new data for the selected page
  };
  const blogPosts = [
    {
      title: "Blog title one and this can be quite long",
      date: "December 25, 2024",
      imageUrl:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733863586/pexels-zachtheshoota-1888883_wg1qde.jpg",
      altText: "placeholder",
    },
    {
      title: "Another blog title here",
      date: "December 26, 2024",
      imageUrl:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733863586/pexels-zachtheshoota-1888883_wg1qde.jpg",
      altText: "placeholder",
    },
    {
      title: "Yet another blog title, let's keep it going",
      date: "December 27, 2024",
      imageUrl:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733863586/pexels-zachtheshoota-1888883_wg1qde.jpg",
      altText: "placeholder",
    },
    {
      title: "This is blog post number four",
      date: "December 28, 2024",
      imageUrl:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733863586/pexels-zachtheshoota-1888883_wg1qde.jpg",
      altText: "placeholder",
    },
    {
      title: "Another long blog title for testing",
      date: "December 29, 2024",
      imageUrl:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733863586/pexels-zachtheshoota-1888883_wg1qde.jpg",
      altText: "placeholder",
    },
    {
      title: "Quick blog update here",
      date: "December 30, 2024",
      imageUrl:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733863586/pexels-zachtheshoota-1888883_wg1qde.jpg",
      altText: "placeholder",
    },
    {
      title: "Final blog post for the year",
      date: "December 31, 2024",
      imageUrl:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733863586/pexels-zachtheshoota-1888883_wg1qde.jpg",
      altText: "placeholder",
    },
    {
      title: "New Year, New Blog Posts",
      date: "January 1, 2025",
      imageUrl:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733863586/pexels-zachtheshoota-1888883_wg1qde.jpg",
      altText: "placeholder",
    },
    {
      title: "Understanding the Basics of React",
      date: "January 2, 2025",
      imageUrl:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733863586/pexels-zachtheshoota-1888883_wg1qde.jpg",
      altText: "placeholder",
    },
    {
      title: "Best Practices for Web Development in 2025",
      date: "January 3, 2025",
      imageUrl:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733863586/pexels-zachtheshoota-1888883_wg1qde.jpg",
      altText: "placeholder",
    },
  ];
  return (
    <div className="section">
      <Container>
        <h3 className="xtraBold">Blog</h3>
        <h5 className="xtraBold mt-5">All posts</h5>
        <div className="d-flex w-100 flex-wrap gap-3 mt-4">
          {[
            "Startup Visa",
            "Immigration",
            "Entrepreneurship",
            "Business Expansion",
            "Founders",
            "Startups",
            "Residency",
            "Visa Application",
            "Investors",
            "Immigration",
          ].map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
        </div>

        <Row>
          <h5 className="xtraBold mt-5">December 2024</h5>
        </Row>
        {blogPosts.map((post, index) => (
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
                      className={`${styles.blogHeader} xtraBold fs-6 mb-1 mt-1`}
                    >
                      {post.title}
                    </h6>
                    <small className={`${styles.blogDate} textBlue`}>
                      {post.date}
                    </small>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col>
              <div>
                <GreyBtnWithBlackHover
                  text="Read more"
                  link={`/blog/${post.title
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                />
              </div>
            </Col>
          </Row>
        ))}
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

export default page;
