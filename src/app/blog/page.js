"use client";
import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import Pagination from "../components/Pagination/Pagination";
import Tag from "../components/Tag/Tag";
import styles from "./page.module.css";
import Link from "next/link";
import { blogPosts } from "../data/DummyBlogPosts";
import GreyBtnWide from "../components/GreyBtnWide/GreyBtnWide";

const page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [selectedTags, setSelectedTags] = useState([]); // State for selected tags
  console.log(selectedTags, "selected tags");

  // Function to add or remove a tag
  const toggleTagSelection = (tag) => {
    setSelectedTags((prevSelectedTags) => {
      if (prevSelectedTags.includes(tag)) {
        return prevSelectedTags.filter((t) => t !== tag); // Remove tag if already selected
      } else {
        return [...prevSelectedTags, tag]; // Add tag if not already selected
      }
    });
  };

  // Filter blog posts based on selected tags
  const filteredPosts = blogPosts.filter((post) =>
    selectedTags.some((tag) => post.tags.includes(tag))
  );

  console.log(filteredPosts, "filtered posts");

  //
  return (
    <div className="section">
      <Container>
        <h3 className="xtraBold">Blog</h3>
        <h5 className="xtraBold mt-5">All posts</h5>

        <div className="d-flex w-100 flex-wrap gap-3 mt-4">
          {[
            "Startup Launch",
            "Entrepreneurship",
            "Business Growth",
            "Startup Visa",
            "Founders",
            "Innovation",
            "Venture Capital",
            "Visa Application",
            "Investors",
            "Global Expansion",
          ].map((tag, index) => (
            <Tag
              key={index}
              text={tag}
              isSelected={selectedTags.includes(tag)}
              onClick={() => toggleTagSelection(tag)}
            />
          ))}
        </div>

        <Row>
          <h5 className="xtraBold mt-5">December 2024</h5>
        </Row>
        {(filteredPosts.length > 0 ? filteredPosts : blogPosts).map(
          (post, index) => (
            <Row className="mt-4" key={index}>
              <Col lg={10}>
                <Row className="d-flex align-items-center">
                  <Col xl={1} lg={2}>
                    <div className="blogImgContainer">
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
                      <h6 className="blogHeader xtraBold fs-6 mb-1 mt-1">
                        {post.title}
                      </h6>
                      <small className="blogDate textBlue">{post.date}</small>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col>
                <div>
                  <GreyBtnWide
                    text="Read more"
                    link={`/blog/${post.title
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                  />
                </div>
              </Col>
            </Row>
          )
        )}
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
