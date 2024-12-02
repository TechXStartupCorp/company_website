"use client";
import React from "react";
import CustomBtn from "../CustomBtn/CustomBtn";
import Image from "next/image";
import styles from "./CalloutSection.module.css";
import { Form } from "react-bootstrap";
import { IoMdSearch } from "react-icons/io";
import GetSomethingForm from "./components/GetSomethingForm/GetSomethingForm";

const CalloutSection = ({
  imageURL,
  alt,
  title,
  text,
  primaryBtnLink,
  primaryBtnText,
  lightBtnLink,
  lightBtnText,
  secondBtn,
  getSomethingForm,
}) => {
  return (
    <div
      className={`${styles.heroContainer} w-100 mt-4 position-relative d-flex`}
    >
      <div className={styles.optionalDarkOverlay}></div>
      <Image
        className={`${styles.heroImage}`}
        src={imageURL}
        alt={alt}
        layout="fill"
        objectFit="cover"
        quality={100}
        priority={true}
      />
      <div className={`${styles.textOverlay}`}>
        <h1 className="fw-bold">{title}</h1>
        <p className="mt-3">{text}</p>
        {getSomethingForm ? (
          <GetSomethingForm />
        ) : (
          <div className="d-flex gap-3 mt-5">
            <CustomBtn
              link={primaryBtnLink}
              text={primaryBtnText}
              variant="primary"
            />
            {secondBtn && (
              <CustomBtn
                link={lightBtnLink}
                text={lightBtnText}
                variant="light"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CalloutSection;

{
  /* <div
  className={`${styles.searchBar} ${
    isDesktopOrLaptop ? "w-75" : "w-100"
  } position-relative`}
>
  <FaSearch
    className={`${styles.searchIcon} text-light position-absolute fs-6`}
  />
  <input
    value={searchInput}
    onChange={handleChange}
    className="ps-5 pt-2 pb-2 pe-2"
    placeholder="Search for movies"
  ></input>
</div>; */
}
