import React from "react";
import styles from "./Footer.module.css";
import { Container } from "react-bootstrap";
import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import DoSomethingForm from "../CalloutSection/components/GetSomethingForm/DoSomethingForm";

const Footer = () => {
  return (
    <div>
      <div className={`${styles.footerContainer} pb-5 section`}>
        <Container className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="xtraBold mt-3">Let's stay in touch!</h1>
          <p className="mt-3 text-center">
            Subscribe to our weekly newsletter and receive the latest news and
            changes directly in your inbox.
          </p>
          <div className="mt-4">
            <DoSomethingForm text="Subscribe" />
          </div>
        </Container>
      </div>
      <Container className="text-secondary pb-4">
        <ul className="mt-4 list-unstyled d-flex justify-content-between w-100">
          {[
            { title: "About", link: "#" },
            { title: "Startup Visa", link: "#" },
            { title: "Contact", link: "#" },
            { title: "Blog", link: "#" },
          ].map((item, index) => (
            <li className={styles.footerLinks} key={index}>
              <Link
                className="text-decoration-none text-secondary"
                href={item.link}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="d-flex justify-content-center text-dark gap-3 fs-4 mt-4">
          <CiLinkedin />
          <CiFacebook />
          <FaXTwitter />
          <FaInstagram />
        </div>{" "}
        <div className="text-center mt-4">
          &copy;2024 Tech X Startup Inc. All rights reserved. Privacy and terms
        </div>
      </Container>
    </div>
  );
};

export default Footer;
