"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Container, Breadcrumb, Row, Col } from "react-bootstrap";
import styles from "./page.module.css";
import { blogPosts } from "@/app/data/DummyBlogPosts";
import CalloutSection from "@/app/components/CalloutSection/CalloutSection";
import Image from "next/image";
import { BsPaperclip } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";
import GreyBtnWide from "@/app/components/GreyBtnWide/GreyBtnWide";
import Tag from "@/app/components/Tag/Tag";
import SectionWithHeaderAndText from "@/app/components/SectionWithHeaderAndText/SectionWithHeaderAndText";
import WideCardWithGreyBorder from "@/app/components/WideCardWithGreyBorder/WideCardWithGreyBorder";
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

  const blogTitleToShare = "Check out this amazing article";

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

  useEffect(() => {
    setCurrentUrl(window.location.href);
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

  const { title, content, imageUrl, date, categories } = blogPost;

  const metaDescription = content
    .map((block) => block.paragraph)
    .filter((paragraph) => paragraph)
    .join(" ")
    .slice(0, 160);

  // Fallback for description if no content paragraphs exist
  const descriptionFallback =
    blogPost.meta_description || "Default blog description";

  return (
    <>
      <Head>
        <title>{title || "Default Title"}</title>
        <meta
          name="description"
          content={metaDescription || descriptionFallback}
        />
        <meta property="og:title" content={title || "Default Title"} />
        <meta
          property="og:description"
          content={metaDescription || descriptionFallback}
        />
        <meta
          property="og:image"
          content={imageUrl || "https://defaultimage.com/default.jpg"}
        />
        <meta
          property="og:image:alt"
          content={blogPost.altText || "Blog post image"}
        />
        <meta property="og:url" content="YOUR_BLOG_POST_URL" />
        <meta property="og:type" content="article" />
        <meta
          property="article:published_time"
          content={date || "Default Date"}
        />
        <meta
          property="article:section"
          content={categories[0] || "Default Category"}
        />
        {categories &&
          categories.map((category) => (
            <meta key={category} property="article:tag" content={category} />
          ))}
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
          <Row
            className={`${styles.authorInfoRow} d-flex align-items-center mt-4`}
          >
            <Col xs={3} sm={2} md={2} lg={1}>
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
                <h5 className={`${styles.authorInfoText} xtraBold mb-0`}>
                  {blogPost && blogPost.author.author_name}
                </h5>
                <small className="textBlue mt-1">
                  {blogPost && blogPost.author.author_description} - TechX
                  Startup
                </small>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="mt-4">
          <CalloutSection
            imageURL={blogPost && blogPost.imageUrl}
            alt={blogPost && blogPost.altText}
            title="Introduction"
            text={blogPost && blogPost.banner_introduction}
          />
        </div>
        <Container>
          <div className="mt-4">
            <p>{blogPost && blogPost.secondary_introduction}</p>
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
          {blogPost.content.map((section, index) => (
            <div className="mt-5" key={index}>
              <h4 className="xtraBold">{section.subheader}</h4>

              {section.bullet_points ? (
                <div>
                  {section.intro && <p className="mt-3">{section.intro}</p>}

                  <ul className="mt-3">
                    {section.bullet_points_text.map((point, idx) => (
                      <li className="mb-1" key={idx}>
                        <strong>{point.highlight} </strong>
                        {point.sentence}
                      </li>
                    ))}
                  </ul>

                  {section.bullet_points_outro && (
                    <p>{section.bullet_points_outro}</p>
                  )}
                </div>
              ) : (
                <p className="mt-3">{section.paragraph}</p>
              )}
            </div>
          ))}
        </Container>

        <Container>
          <h6 className="mt-5 xtraBold">Categories</h6>
          <div className="d-flex flex-wrap gap-3 mt-4">
            {blogPost &&
              blogPost.categories.map((category, index) => (
                <Tag key={index} text={category} />
              ))}
          </div>
        </Container>

        <Container>
          <div className="cardWithGreyBorder p-4 mt-5">
            <SectionWithHeaderAndText
              header={blogPost && blogPost.call_to_action.header}
              text={blogPost && blogPost.call_to_action.text}
            />
          </div>
        </Container>
        <Container>
          <div
            className={`${styles.publishedDate} mt-3 d-flex flex-column align-items-start`}
          >
            <span className="mt-2 mb-2 textBlue">
              Published on {blogPost && blogPost.date}
            </span>

            <GreyBtnWide
              onClick={handleCopyClick}
              icon={<MdArrowOutward />}
              text="Share"
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default page;
