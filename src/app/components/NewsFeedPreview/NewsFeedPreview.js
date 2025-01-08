"use client";
import React from "react";
import styles from "./NewsFeedPreview.module.css";
import { Form } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { MdOutlineChevronRight } from "react-icons/md";
import CalloutSection from "../CalloutSection/CalloutSection";
import Image from "next/image";

const NewsFeedPreview = () => {
  return (
    <div className="py-2 px-3">
      <Form>
        <div className="position-relative">
          <Form.Control
            type="text"
            className={`${styles.searchInput}`}
            placeholder="Search here..."
          />
          <CiSearch className={`${styles.searchIcon} fs-5`} />
        </div>
      </Form>
      <div className="d-flex justify-content-between align-items-center mt-4">
        <h5 className="fw-bold mb-0">Recommended</h5>
        <span className="fw-semibold">
          View all
          <MdOutlineChevronRight className="ms-2" />
        </span>
      </div>
      <div
        className={`${styles.heroContainer} w-100 mt-4 position-relative d-flex`}
      >
        <div className={styles.optionalDarkOverlay}></div>
        <Image
          className={`${styles.heroImage}`}
          src="https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733863599/pexels-mateusz-dach-99805-450035_dp9nh3.jpg"
          alt="placeholder"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority={true}
        />
        <div className={`${styles.textOverlay}`}>
          <div className="fw-bold d-flex gap-2 align-items-center">
            <h6 className="mb-0 xtraBold">TechX Startup</h6>{" "}
            <span className="">•</span>{" "}
            <small className="fw-light mt-1">4 hours ago</small>
          </div>
          <p className="mt-3 mb-0">
            Exploring the Dynamic Nature of Web Development and the Future of
            User Interfaces
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsFeedPreview;
