"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import styles from "./NavBar.module.css";
import Link from "next/link";
import CustomBtn from "../CustomBtn/CustomBtn";
import { IoDocumentTextSharp } from "react-icons/io5";
import { calendlyLink } from "@/app/data/Links";
import { startupVisaFormLink } from "@/app/data/Links";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  useEffect(() => {
    const currentPath = window.location.pathname.substring(1); // Get the current path excluding the leading "/"
    setActiveLink(currentPath || "home"); // Set the default to "home" if no path is matched
  }, []);
  const pathDisplayNames = {
    "/": "Home",
    "/about": "About",
    "/startupvisa": "Startup Visa",
    "/blog": "Blog", 
    "/contact": "Contact",
  };
  return (
    <Navbar className={`${styles.navBar} px-5 py-3 fixed-top`} expand="lg">
      <Navbar.Brand className="d-flex align-items-center" href="#home">
        <div className={styles.logoContainer}>
          <span className={styles.logoSpan}></span>
          <span className={styles.logoSpan}></span>
          <span className={styles.logoSpan}></span>
          <span className={styles.logoSpan}></span>
        </div>
        <span className={`${styles.logoText} fw-bold`}>Tech X Startup</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={`${styles.navMenu} ms-auto gap-4`}>
          <div className={`${styles.navLinksContainer} d-flex me-3`}>
          {Object.keys(pathDisplayNames).map((path) => (
            <Nav.Item key={path}>
              <Nav.Link
                as={Link}
                href={path}
                className={
                  activeLink === (path === "/" ? "home" : path.substring(1))
                    ? styles.active
                    : ""
                }
                onClick={() =>
                  setActiveLink(path === "/" ? "home" : path.substring(1))
                }
              >
                {pathDisplayNames[path]}
              </Nav.Link>
            </Nav.Item>
          ))}
          </div>
          <Nav.Item>
            <CustomBtn link={calendlyLink} text="Book consult" />
          </Nav.Item>
          <Nav.Item className="">
            <a
              href={startupVisaFormLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <Button
                variant="light"
                className={`fw-bold ${styles.applyNowBtn} lightBtnBackgroundColor px-3 py-2`}
              >
                <span className="d-flex align-items-center gap-2">
                  <IoDocumentTextSharp />
                  Apply
                </span>
              </Button>
            </a>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
