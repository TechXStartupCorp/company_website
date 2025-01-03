import React from "react";
import styles from "./Footer.module.css";
import { Container } from "react-bootstrap";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import DoSomethingForm from "../CalloutSection/components/GetSomethingForm/DoSomethingForm";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className={`${styles.footerContainer} pb-5 section`}>
        <Container className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="xtraBold mt-3">Let&apos;s stay in touch!</h1>
          <p className="mt-3 text-center">
            Subscribe to our weekly newsletter and receive the latest news and
            changes directly in your inbox.
          </p>
          <div className="mt-4">
            <DoSomethingForm text="Subscribe" />
          </div>
        </Container>
      </div>
      <Container className="textBlue d-flex flex-column align-items-center justify-content-center pb-4">
        <div className="d-flex justify-content-center text-dark gap-3 fs-4 mt-4">
          <FaLinkedin />
          <FaFacebook />
          <FaXTwitter  />
          <RiInstagramFill className="" />
        </div>
        <div className="text-center mt-4">
          <FaRegCopyright className="mt-0 mb-1" /> <small>2024 Tech X Startup Inc. All rights reserved. Privacy and terms</small>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
