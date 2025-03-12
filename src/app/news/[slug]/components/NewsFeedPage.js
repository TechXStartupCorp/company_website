"use client";
import React from "react";
import Head from "next/head";
import styles from "./NewsFeedPage.module.css";
import { useState, useEffect } from "react";
import { Breadcrumb, Container } from "react-bootstrap";
import Image from "next/legacy/image";
import { handleCopyClick } from "../../../../../utils/handleCopyClick";
import { BsPaperclip } from "react-icons/bs";
import Tag from "@/app/components/Tag/Tag";
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

const NewsFeedPage = ({ newsFeedPost }) => {
  const techStartupTags = [
    "Innovation",
    "Funding",
    "Entrepreneurship",
    "Tech Trends",
  ];

  const [currentUrl, setCurrentUrl] = useState("");
  const shareUrl = currentUrl ? currentUrl : "https://techxstartup.com/404";

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const articleTitleForSharing = "Check out this article by TechX Startup!";

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

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/:/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  };

  const { title, content, image, date_time_posted, tags } = newsFeedPost;

  const metaDescription = content
    .map((block) => block.paragraph)
    .join(" ")
    .slice(0, 160);
  return (
    <div className="section">
      <Head>
        <link rel="canonical" href={currentUrl} />
        {/* Open Graph Meta Tags */}
        <title>{title}</title>
        <meta name="description" content="Checkout our cool page" key="desc" />
        <meta property="og:title" content="Social Title for Cool Page" />
        <meta
          property="og:description"
          content="And a social description for our cool page"
        />
        <meta property="og:image" content={image.image_url} />
      </Head>
      <Container className="pb-5">
        <Breadcrumb className={styles.breadCrumb}>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/news">News</Breadcrumb.Item>
          <Breadcrumb.Item active>
            {newsFeedPost && newsFeedPost.title}
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="">
          <div className="mt-5 d-flex align-items-center gap-3">
            <div className="d-flex align-items-center gap-2">
              <Image
                src="https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733864478/growtika-Cb2g_CXw_JI-unsplash_erxlor.jpg"
                alt="Rounded Image"
                width={32} // Set width
                height={32} // Set height
                className={styles.authorImage}
              />
              <span className="fw-bold">TechX Startup</span>
            </div>
            <span className="text-secondary">
              🔥 <small>Trending</small>
            </span>
          </div>
          <h2 className="xtraBold mt-3">{newsFeedPost.title}</h2>

          <small className="text-secondary mt-2">
            {newsFeedPost.date_time_posted}
          </small>

          <div className="news-article-content">
            {newsFeedPost.content.map((block, index) => (
              <div key={index} className="mt-4">
                {block.header && (
                  <h5 className="mb-3 mt-3 xtraBold">{block.header}</h5>
                )}
                <p>{block.paragraph}</p>
              </div>
            ))}
          </div>
          <h6 className="mt-5 xtraBold">Tags</h6>
          <div className="d-flex flex-wrap gap-3 mt-4">
            {techStartupTags.map((category, index) => (
              <Tag key={index} text={category} />
            ))}
          </div>

          <div className="d-flex flex-column mt-5">
            <span className="xtraBold">
              Know someone that would be interested?
            </span>
            <span className="text-secondary mt-1">
              Share this with your network!
            </span>
            <div className={`${styles.socialLogosContainer} d-flex gap-3 mt-4`}>
              {socialMediaButtons.map(({ platform, ShareButton, Icon }) => (
                <ShareButton
                  key={platform}
                  rounded="true"
                  url={shareUrl}
                  quote={articleTitleForSharing}
                >
                  <Icon round={true} size={30} />
                </ShareButton>
              ))}

              <div
                onClick={() => {
                  handleCopyClick(currentUrl);
                }}
                as="button"
                className={`${styles.customBtn}`}
              >
                <BsPaperclip />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewsFeedPage;
