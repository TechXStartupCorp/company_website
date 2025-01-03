"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Container, Breadcrumb, Row, Col } from "react-bootstrap";
import styles from "./page.module.css";
import { blogPosts } from "@/app/data/DummyBlogPosts";
import CalloutSection from "@/app/components/CalloutSection/CalloutSection";
import Image from "next/image";
import { FaRegCopy } from "react-icons/fa";
import { BsPaperclip } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";
import { calendlyLink } from "@/app/data/Links";
import GreyBtnWide from "@/app/components/GreyBtnWide/GreyBtnWide";
import CTAWithImage from "@/app/components/CTAWithImage/CTAWithImage";
import Head from "next/head";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  XIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const page = () => {
  const { slug } = useParams();

  const decodedSlug = decodeURIComponent(slug).replace(/:/g, "");

  // Now you can process the decodedSlug
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/:/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  };

  const blogPost = blogPosts.find(
    (blog) => generateSlug(blog.title) === decodedSlug
  );

  if (!blogPost) {
    return <div>Blog not found</div>;
  }

  const [currentUrl, setCurrentUrl] = useState("");
  const [isClient, setIsClient] = useState(false);

  const shareUrl = currentUrl
    ? `https://company-website-pwnt.vercel.app${currentUrl}`
    : "https://company-website-pwnt.vercel.app/default-path";

  const title = "Check out this amazing article";

  useEffect(() => {
    setIsClient(true);
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
  ];

  return (
    <>
      <Head>
        <title>{blogPost ? blogPost.title : "Default Title"}</title>
        <meta
          name="description"
          content={
            blogPost && blogPost.meta_description
              ? blogPost.meta_description
              : "Default meta description"
          }
        />
      </Head>
      <div className="section pb-5">
        <Container>
          <Breadcrumb className={styles.breadCrumb}>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/blog">Blog</Breadcrumb.Item>
            <Breadcrumb.Item active>
              {blogPost && blogPost.title}
            </Breadcrumb.Item>
          </Breadcrumb>
          <h2 className="xtraBold mt-5">{blogPost && blogPost.title}</h2>

          <small className="textBlue mt-3">
            by {blogPost && blogPost.author.author_name} -{" "}
            {blogPost && blogPost.read_time} read
          </small>
          <Row className="d-flex align-items-center mt-5">
            <Col className="" lg={1}>
              <div
                className={`${styles.blogImgContainer} h-100 d-flex justify-content-center align-items-center`}
              >
                <Image
                  src={blogPost && blogPost.author.author_image_url}
                  alt="image of author"
                  layout="fill"
                  className="w-100 h-100"
                />
              </div>
            </Col>
            <Col>
              <div className="d-flex flex-column">
                <h5 className="xtraBold mb-0">{blogPost && blogPost.author.author_name}</h5>
                <small className="textBlue mt-1">
                  {blogPost && blogPost.author.author_description} - TechX Startup
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
            text={blogPost && blogPost.banner_introduction}
          />
        </div>
        <Container>
          <div className="mt-4">
            <p>{blogPost && blogPost.secondary_introduction}</p>
          </div>
        </Container>
        <Container className="">
          <div
            className={`${styles.shareLinkContainer} cardWithGreyBorder d-flex justify-content-between align-items-center py-3 px-4`}
          >
            <div className="d-flex flex-column">
              <span className="xtraBold">Enjoying this article?</span>
              <small className="textBlue mt-1">
                Share it with your friends and colleagues.
              </small>
            </div>
            <div className="d-flex flex-column mt-2 gap-2 align-items-end">
              <div
                className={`${styles.socialLogosContainer} d-flex gap-3 fs-5 pb-1`}
              >
                {socialMediaButtons.map(({ platform, ShareButton, Icon }) => (
                  <ShareButton
                    key={platform}
                    rounded="true"
                    url={shareUrl}
                    quote={title}
                  >
                    <Icon round={true} size={26} />
                  </ShareButton>
                ))}
                <div
                  onClick={handleCopyClick}
                  as="button"
                  className={`mt-1 ${styles.customBtn}`}
                >
                  <BsPaperclip />
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Container>
          {blogPost.content.map((section, index) => (
            <div className="mt-5" key={index}>
              <h4 className="xtraBold">{section.subheader}</h4>

              {/* Check if section has bullet points */}
              {section.bullet_points ? (
                <div>
                  {/* Intro text for bullet points */}
                  {section.intro && <p className="mt-3">{section.intro}</p>}

                  {/* Render each bullet point */}
                  <ul className="bullet-points-list">
                    {section.bullet_points_text.map((point, idx) => (
                      <li className="mb-1" key={idx}>
                        <strong>{point.highlight} </strong>
                        {point.sentence}
                      </li>
                    ))}
                  </ul>

                  {/* Outro text for bullet points */}
                  {section.bullet_points_outro && (
                    <p>{section.bullet_points_outro}</p>
                  )}
                </div>
              ) : (
                // Regular format with a paragraph (no bullet points)
                <p className="mt-3">{section.paragraph}</p>
              )}
            </div>
          ))}
        </Container>
        <Container>
          <div className="section d-flex flex-column align-items-start w-25">
            <h6 className="mt-2 xtraBold">Published on Jun 3rd, 2024</h6>
            <GreyBtnWide
              onClick={handleCopyClick}
              icon={<MdArrowOutward />}
              text="Share"
            />
          </div>
        </Container>
        <CTAWithImage
          header={blogPost && blogPost.call_to_action.header}
          text={blogPost && blogPost.call_to_action.text}
          img="https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733949231/pexels-fauxels-3184660_m89p3h.jpg"
          alt={blogPost && blogPost.call_to_action.image_alt}
          btnText="Book via Calendy"
          imageAlign="left"
          link={calendlyLink}
        />
      </div>
    </>
  );
};

export default page;
