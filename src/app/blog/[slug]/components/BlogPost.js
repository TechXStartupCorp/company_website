"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Container, Breadcrumb, Row, Col } from "react-bootstrap";
import CalloutSection from "@/app/components/CalloutSection/CalloutSection";
import GreyBtnWide from "@/app/components/GreyBtnWide/GreyBtnWide";
import Image from "next/legacy/image";
import { BsPaperclip } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";
import Tag from "@/app/components/Tag/Tag";
import WideCardWithGreyBorder from "@/app/components/WideCardWithGreyBorder/WideCardWithGreyBorder";
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
import styles from "./BlogPost.module.css";

const BlogPost = ({ blogPost }) => {
  const [currentUrl, setCurrentUrl] = useState("");
  const [isClient, setIsClient] = useState(false);

  const shareUrl = currentUrl ? currentUrl : "https://techxstartup.com/404";

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const blogTitleToShare = "Check out this article by TechX Startup!";

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { title, content, imageUrl, date, categories } = blogPost;

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

  const socialMediaButtons = [
    {
      platform: "Facebook",
      ShareButton: FacebookShareButton,
      Icon: FacebookIcon,
    },
    { platform: "Twitter", ShareButton: TwitterShareButton, Icon: XIcon },
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
    <div className="section pb-5">
      <Container>
        <Breadcrumb className={styles.breadCrumb}>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/blog">Blog</Breadcrumb.Item>
          <Breadcrumb.Item active>{blogPost?.title}</Breadcrumb.Item>
        </Breadcrumb>
        <h2 className="xtraBold mt-5">{blogPost?.title}</h2>
        <small className="textBlue mt-3">
          by {blogPost?.author?.author_name} - {blogPost?.read_time} read
        </small>
        <Row
          className={`${styles.authorInfoRow} d-flex align-items-center mt-4`}
        >
          <Col xs={3} sm={2} md={2} lg={1}>
            <div
              className={`${styles.blogImgContainer} h-100 d-flex justify-content-center align-items-center`}
            >
              <Image
                src={blogPost?.author?.author_image_url || "/default-image.jpg"}
                alt="image of author"
                layout="fill"
                className="w-100 h-100"
              />
            </div>
          </Col>
          <Col>
            <div className="d-flex flex-column">
              <h5 className={`${styles.authorInfoText} xtraBold mb-0`}>
                {blogPost?.author?.author_name}
              </h5>
              <small className="textBlue mt-1">
                {blogPost?.author?.author_description} - TechX Startup
              </small>
            </div>
          </Col>
        </Row>
        <div className="mt-4">
          <CalloutSection
            imageURL={blogPost?.imageUrl}
            alt={blogPost?.altText}
            title="Introduction"
            text={blogPost?.banner_introduction}
          />
        </div>
        <Container>
          <div className="mt-4">
            <p>{blogPost?.secondary_introduction}</p>
          </div>
        </Container>
        <Container className="mt-4">
          <WideCardWithGreyBorder>
            <div className="d-flex flex-column">
              <span className="xtraBold">Enjoying this article?</span>
              <small className="textBlue mt-1">
                Share it with your friends and colleagues.
              </small>
            </div>
            <div className="d-flex flex-column mt-2 gap-2 align-items-end">
              <div
                className={`${styles.socialLogosContainer} d-flex gap-3 mb-2`}
              >
                {socialMediaButtons.map(({ platform, ShareButton, Icon }) => (
                  <ShareButton
                    key={platform}
                    rounded="true"
                    url={shareUrl}
                    quote={blogTitleToShare}
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
          </WideCardWithGreyBorder>
        </Container>
        <Container>
          {blogPost?.content?.map((section, index) => (
            <div className="mt-5" key={index}>
              {section.subheader && (
                <h4 className="xtraBold">{section.subheader}</h4>
              )}
              {section?.bullet_points_text?.length > 0 ? (
                <div>
                  {section.intro && <p className="mt-3">{section.intro}</p>}

                  <ul className="mt-3">
                    {section.bullet_points_text.map((point, idx) => (
                      <li className="mb-1" key={idx}>
                        {point.highlight?.trim() && (
                          <strong>{point.highlight} </strong>
                        )}
                        {point.sentence?.trim() && point.sentence}
                      </li>
                    ))}
                  </ul>

                  {section.bullet_points_outro && (
                    <p>{section.bullet_points_outro}</p>
                  )}
                </div>
              ) : (
                section.paragraph && <p className="mt-3">{section.paragraph}</p>
              )}
            </div>
          ))}
        </Container>
        <Container>
          <h4 className="xtraBold mt-5">Conclusion</h4>
          <p className="mt-3">{blogPost?.conclusion}</p>
        </Container>

        <Container>
          <h6 className="mt-5 xtraBold">Categories</h6>
          <div className="d-flex flex-wrap gap-3 mt-4">
            {blogPost?.categories?.map((category, index) => (
              <Tag key={index} text={category} />
            ))}
          </div>
        </Container>
        <Container>
          <div
            className={`${styles.publishedDate} mt-4 d-flex flex-column align-items-start`}
          >
            <span className="mt-2 mb-2 textBlue">
              Published on&nbsp;
              {new Date(blogPost?.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>

            <GreyBtnWide
              onClick={handleCopyClick}
              icon={<MdArrowOutward />}
              text="Share"
            />
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default BlogPost;
