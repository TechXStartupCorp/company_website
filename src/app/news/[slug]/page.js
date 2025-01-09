"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { dummyNewsFeedPosts } from "@/app/data/DummyNewsFeedPosts";
import { Breadcrumb, Container, Badge } from "react-bootstrap";
import CustomBtn from "@/app/components/CustomBtn/CustomBtn";
import styles from "./page.module.css";
import Image from "next/image";
import { handleCopyClick } from "../../../../utils/handleCopyClick";
import { BsPaperclip } from "react-icons/bs";
import SectionWithHeaderAndText from "@/app/components/SectionWithHeaderAndText/SectionWithHeaderAndText";
import CTAWithImage from "@/app/components/CTAWithImage/CTAWithImage";
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

const page = () => {
  const { slug } = useParams();
  const [currentUrl, setCurrentUrl] = useState("");

  const techStartupTags = [
    "Innovation",
    "Funding",
    "Entrepreneurship",
    "Tech Trends",
  ];

  const shareUrl = currentUrl
    ? `https://company-website-pwnt.vercel.app${currentUrl}`
    : "https://company-website-pwnt.vercel.app/default-path";

  const title = "Check out this amazing article";

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

  const newsArticle = dummyNewsFeedPosts.find(
    (newsArticle) => generateSlug(newsArticle.title) === decodedSlug
  );

  if (!newsArticle) {
    return <div>News article not found</div>;
  }

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  return (
    <div className="section">
      <Container className="pb-5">
        <Breadcrumb className={styles.breadCrumb}>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/news">Blog</Breadcrumb.Item>
          <Breadcrumb.Item active>
            {newsArticle && newsArticle.title}
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
          <h2 className="xtraBold mt-3">{newsArticle.title}</h2>

          <small className="text-secondary mt-2">
            {newsArticle.date_time_posted}
          </small>

          <p className="mt-4">{newsArticle.text}</p>
          <h6 className="mt-5 xtraBold">Tags</h6>
          <div className="d-flex flex-wrap gap-3 mt-4">
            {techStartupTags.map((category, index) => (
              <Tag key={index} text={category} />
            ))}
          </div>

          {/* <div className="">
            <h5 className="xtraBold mt-4">Curious About This Topic?</h5>
            <p className="mt-2 text-secondary">
              Don&apos;t stop here—connect with us today! Let&apos;s chat about
              this article and explore how we can turn ideas into action.
            </p>
            <div className="mt-4">
              <CustomBtn link="/contact" text="Get in touch" />
            </div>
          </div> */}

          <div className="d-flex flex-column mt-4">
            <span className="fw-bold">Share this with your network!</span>
            <div className={`${styles.socialLogosContainer} d-flex gap-3 mt-2`}>
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
                onClick={() => {
                  handleCopyClick(currentUrl);
                }}
                as="button"
                className={`mt-1 ${styles.customBtn}`}
              >
                <BsPaperclip />
              </div>
            </div>
          </div>
        </div>

        {/* <ContentCard
          imageUrl={newsArticle.image.image_url}
          altTag={newsArticle.image.alt_tag}
          category={newsArticle.category}
          title={newsArticle.title}
          content={newsArticle.text}
          time={newsArticle.date_time_posted}
        /> */}
      </Container>
    </div>
  );
};

export default page;
