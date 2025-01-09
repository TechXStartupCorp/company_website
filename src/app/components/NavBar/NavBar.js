"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import styles from "./NavBar.module.css";
import Link from "next/link";
import CustomBtn from "../CustomBtn/CustomBtn";
import { calendlyLink } from "@/app/data/Links";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Update active link based on the current route
  useEffect(() => {
    if (pathname.startsWith("/news")) {
      setActiveLink("news");
    } else if (pathname.startsWith("/blog")) {
      setActiveLink("blog");
    } else if (pathname === "/") {
      setActiveLink("home");
    } else {
      setActiveLink(pathname.substring(1)); // For other paths
    }
  }, [pathname]);

  const pathDisplayNames = {
    "/": "Home",
    "/about": "About",
    "/startupvisa": "Startup Visa",
    "/news": "News",
    "/blog": "Blog",
    "/contact": "Contact",
  };
  return (
    ////// basic navbar works

    <Navbar
      expand="xl"
      className={`${styles.navBar} ${isScrolled ? styles.scrolled : ""}`}
    >
      <Container fluid>
        <Navbar.Brand
          className={`${styles.navBarBrand} d-flex align-items-center`}
          href="/home"
        >
          <div className={styles.logoContainer}>
            <span className={styles.logoSpan}></span>
            <span className={styles.logoSpan}></span>
            <span className={styles.logoSpan}></span>
            <span className={styles.logoSpan}></span>
          </div>
          <span className={`${styles.logoText} fw-bold fs-6`}>
            Tech X Startup
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header className={styles.offCanvasHeader} closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <div className="d-flex align-items-center">
                <div className={styles.logoContainer}>
                  <span className={styles.logoSpan}></span>
                  <span className={styles.logoSpan}></span>
                  <span className={styles.logoSpan}></span>
                  <span className={styles.logoSpan}></span>
                </div>
                <span className={`${styles.logoText} fw-bold fs-6`}>
                  Tech X Startup
                </span>
              </div>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className={styles.offCanvasBody}>
            <Nav className={`${styles.navMenu}`}>
              {Object.keys(pathDisplayNames).map((path) => (
                <Nav.Link
                  key={path}
                  as={Link}
                  href={path}
                  className={
                    activeLink === (path === "/" ? "home" : path.substring(1))
                      ? `${styles.active} px-3 ${styles.navMenuLinks}`
                      : `${styles.navMenuLinks} px-3 `
                  }
                  onClick={() =>
                    setActiveLink(path === "/" ? "home" : path.substring(1))
                  }
                >
                  {pathDisplayNames[path]}
                </Nav.Link>
              ))}
            </Nav>
            <div className={styles.customBtnContainer}>
              <CustomBtn link={calendlyLink} text="Book consult" />
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;

{
}
