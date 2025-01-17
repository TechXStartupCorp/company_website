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

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div>
      <div className={`${styles.footerContainer} px-2 pt-4 pb-5`}>
        <Container className="d-flex flex-column justify-content-center align-items-center">
          <h2 className="xtraBold mt-3">Let's stay in touch</h2>
          <p className="mt-3 text-center">
            Subscribe to our newsletter for the latest startup tips, funding
            news, and Canada Startup Visa updates.
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
          <FaXTwitter />
          <RiInstagramFill className="" />
        </div>
        <div className="text-center mt-4">
          <FaRegCopyright className="mt-0 mb-1" />{" "}
          <small>
            {currentYear} TechX Startup Inc. All rights reserved. Privacy Policy
            & Terms of Service
          </small>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
