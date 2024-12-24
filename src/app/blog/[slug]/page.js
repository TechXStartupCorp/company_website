"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Container, Breadcrumb, Row, Col } from "react-bootstrap";
import styles from "./page.module.css";
import { blogPosts } from "@/app/data/DummyBlogPosts";
import CalloutSection from "@/app/components/CalloutSection/CalloutSection";
import Image from "next/image";
import { FaXTwitter, FaSquareThreads } from "react-icons/fa6";
import { FaFacebook, FaLinkedin, FaReddit, FaRegCopy } from "react-icons/fa";
import { BsPaperclip } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  XIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const page = () => {
  const { slug } = useParams();
  const blogPost = blogPosts.find(
    (blog) => blog.title.toLowerCase().replace(/ /g, "-") === slug
  );

  if (!blogPost) {
    return <div>Blog not found</div>;
  }

  const [currentUrl, setCurrentUrl] = useState("");
  const [isClient, setIsClient] = useState(false);

  const shareUrl = `https://company-website-pwnt.vercel.app/${
    currentUrl && currentUrl
  }`;
  const title = "Check out this amazing article";

  useEffect(() => {
    setIsClient(true); // This will run once the component mounts on the client side
  }, []);

  const handleCopyClick = () => {
    if (isClient) {
      if (navigator.clipboard) {
        if (window.location.protocol === "https:") {
          navigator.clipboard
            .writeText(currentUrl)
            .then(() => {
              alert("Link copied to clipboard!");
            })
            .catch((err) => {
              console.error("Error copying text: ", err);
            });
        } else {
          alert("Clipboard API requires a secure context (https).");
        }
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = currentUrl;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        alert("Link copied to clipboard!");
      }
    }
  };

  // Set the current URL when the component mounts
  useEffect(() => {
    setCurrentUrl(window.location.href); // Gets the current URL
  }, []);

  const socialMediaButtons = [
    {
      platform: "Facebook",
      ShareButton: FacebookShareButton,
      Icon: FacebookIcon,
    },
    {
      platform: "Twitter",
      ShareButton: TwitterShareButton,
      Icon: XIcon,
    },
    {
      platform: "Whatsapp",
      ShareButton: WhatsappShareButton,
      Icon: WhatsappIcon,
    },
    {
      platform: "Linkedin",
      ShareButton: LinkedinShareButton,
      Icon: LinkedinIcon,
    },
    {
      platform: "Reddit",
      ShareButton: RedditShareButton,
      Icon: RedditIcon,
    },
  ];

  return (
    <div className="section pb-5">
      <Container>
        <Breadcrumb className={styles.breadCrumb}>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/blog">Blog</Breadcrumb.Item>
          <Breadcrumb.Item active>{blogPost && blogPost.title}</Breadcrumb.Item>
        </Breadcrumb>
        <h2 className="xtraBold mt-5">{blogPost && blogPost.title}</h2>
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
      </Container>
      <div className="mt-4">
        <CalloutSection
          imageURL="https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733863599/pexels-mateusz-dach-99805-450035_dp9nh3.jpg"
          alt="Abstract landscape"
          title="Introduction"
          text="In today’s fast-paced digital landscape, design is more than just aesthetics—it's the bridge between creativity and functionality. Whether you're building a brand, launching a website, or crafting a seamless user experience, great design has the power to captivate, engage, and inspire. In this blog, we’ll explore how thoughtful design can elevate your ideas, turning visions into reality while leaving a lasting impact on your audience. Whether you're a seasoned professional or just starting your creative journey, there's something here to spark your inspiration and empower your next project. Let’s dive in!"
        />
      </div>
      <Container>
        <div className="mt-4">
          <p>{blogPost && blogPost.introduction}</p>
        </div>
      </Container>
      <Container className="">
        <div
          className={`${styles.shareLinkContainer} cardWithGreyBorder d-flex justify-content-between align-items-center py-3 px-4`}
        >
          <div className="d-flex flex-column">
            <span className="xtraBold">Enjoying this article?</span>
            <small className="textBlue mt-2">
              Share it with your friends and colleagues.
            </small>
          </div>
          <div className="d-flex flex-column mt-2 gap-2 align-items-end">
            <div
              className={`${styles.socialLogosContainer} d-flex gap-3 fs-5 pb-1`}
            >
              {socialMediaButtons.map(({ platform, ShareButton, Icon }) => (
                <ShareButton key={platform} url={shareUrl} quote={title}>
                  <Icon size={21} className={`${styles.shareIcon}`} />
                </ShareButton>
              ))}
            </div>
            <div className="d-flex gap-2">
              <div
                onClick={handleCopyClick}
                role="button"
                className="lightGreyContainerBG textBlue rounded d-flex align-items-center py-1 px-3 gap-2"
              >
                <BsPaperclip className={styles.paperClipIcon} />
                <small className={styles.shareLink}>Copy link</small>
              </div>
              <div
                onClick={handleCopyClick}
                className={`${styles.customBtn}`}
              >
                <FaRegCopy />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        {blogPost.content.map((section, index) => (
          <div className="mt-5" key={index}>
            <h4 className="xtraBold">{section.subheader}</h4>
            <p>{section.paragraph}</p>
          </div>
        ))}
      </Container>
      <Container>
        <div className="section d-flex flex-column align-items-start w-25">
          <h6 className="mt-2 xtraBold">Published on Jun 3rd, 2024</h6>

          <div
            onClick={handleCopyClick}
            role="button"
            className={`${styles.shareLinkBottom} w-100 mt-2 py-2 rounded lightGreyContainerBG fw-bold d-flex align-items-center justify-content-center gap-3`}
          >
            <MdArrowOutward />
            <small>Share</small>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
