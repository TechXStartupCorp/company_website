import React from "react";
import styles from "./Footer.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";
import DoSomethingForm from "../CalloutSection/components/GetSomethingForm/DoSomethingForm";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container className={styles.innerFooterContainer}>
        <div className={styles.borderContainer}>
          <h4 className="xtraBold mb-0">Tech X Startup</h4>
        </div>

        <Row className={`${styles.footerRow} pb-5 mt-5`}>
          <Col xl={4}>
            <div className="d-flex flex-column">
              <h5 className="xtraBold">Contact info</h5>
              <ul className="mt-4 list-unstyled">
                {[
                  {
                    icon: <FaRegBuilding />,
                    value: "2975 Drew Rd, Suite 204, Mississauga ON, L4T 0A4",
                  },
                  { icon: <MdOutlinePhoneEnabled />, value: "(123) 456-7890" },
                  {
                    icon: <MdOutlineEmail />,
                    value: "contact@techxstartup.com",
                  },
                ].map((item, index) => (
                  <li className="mb-3" key={index}>
                    <span className="fw-bold me-2">{item.icon} </span>
                    <span className="">{item.value}</span>
                  </li>
                ))}
              </ul>
              {/* <p className="text-secondary mt-3">
                Tech X Startup is your #1 source for everything related to
                startup visa and all your tech immigration needs
              </p>
              <h4 className="mt-3">Tech X Startup Logo</h4> */}
            </div>
          </Col>
          <Col xl={3}>
            <div>
              <h5 className="xtraBold">Links</h5>
              <ul className="mt-4 list-unstyled">
                {[
                  { title: "About", link: "#" },
                  { title: "Startup Visa", link: "#" },
                  { title: "Contact", link: "#" },
                  { title: "Blog", link: "#" },
                ].map((item, index) => (
                  <li className="mb-3" key={index}>
                    <Link
                      className="text-decoration-none text-dark"
                      href={item.link}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col xl={5}>
            <div>
              <h5 className="xtraBold">Newsletter</h5>
              <p className="mt-4 mb-0">
                Sign up for the latest Tech X Startup newsletter where you will
                be kept informed about the latest news and program changes
              </p>
              <div className={styles.formContainer}></div>
              <DoSomethingForm text="Subscribe" />
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <p className="">
              Copyright &copy;2024. All rights reserved |
              <span className="text-dark fw-bold">
                {" "}
                Designed and developed by Tech X Startup
              </span>
            </p>
          </Col>
          <Col xl={3}>
            {" "}
            <div className="d-flex justify-content-end gap-5 fs-4">
              <CiLinkedin />
              <CiFacebook />
              <FaXTwitter />
              <FaInstagram />
            </div>{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
