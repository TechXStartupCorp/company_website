"use client";
import React from "react";
import { useParams } from "next/navigation";
import { Container, Breadcrumb, Row, Col } from "react-bootstrap";
import styles from "./page.module.css";
import { blogPosts } from "@/app/data/DummyBlogPosts";
import CalloutSection from "@/app/components/CalloutSection/CalloutSection";
import Image from "next/image";

const page = () => {
  const { slug } = useParams();
  const blogPost = blogPosts.find(
    (blog) => blog.title.toLowerCase().replace(/ /g, "-") === slug
  );

  if (!blogPost) {
    return <div>Blog not found</div>;
  }
  return (
    <div className="section">
      <Container>
        <Breadcrumb className={styles.breadCrumb}>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/blog">Blog</Breadcrumb.Item>
          <Breadcrumb.Item active>{blogPost.title}</Breadcrumb.Item>
        </Breadcrumb>
        <h2 className="xtraBold mt-5">{blogPost.title}</h2>
        <small className="textBlue mt-3">by Tatyana Karlen - 12 min read</small>
        <Row className="d-flex align-items-center mt-5">
          <Col className="" lg={1}>
            <div
              className={`${styles.blogImgContainer} h-100 d-flex justify-content-center align-items-center`}
            >
              <Image
                src="https://res.cloudinary.com/dq8ii6nbc/image/upload/v1734023031/me_lchm8q.jpg"
                alt="temp alt"
                layout="fill"
                className="w-100 h-100"
              />
            </div>
          </Col>
          <Col>
            <div className="d-flex flex-column">
              <h5 className="xtraBold mb-0">Tatyana Karlen</h5>
              <small className="textBlue mt-1">
                Business development, IT - TechX Startup
              </small>
            </div>
          </Col>
        </Row>
        <div className="mt-4">
          <CalloutSection
            imageURL="https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733863599/pexels-mateusz-dach-99805-450035_dp9nh3.jpg"
            alt="Abstract landscape"
            title="Introduction"
            text="In today’s fast-paced digital landscape, design is more than just aesthetics—it's the bridge between creativity and functionality. Whether you're building a brand, launching a website, or crafting a seamless user experience, great design has the power to captivate, engage, and inspire. In this blog, we’ll explore how thoughtful design can elevate your ideas, turning visions into reality while leaving a lasting impact on your audience. Whether you're a seasoned professional or just starting your creative journey, there's something here to spark your inspiration and empower your next project. Let’s dive in!"
          />
        </div>
      </Container>
    </div>
  );
};

export default page;
