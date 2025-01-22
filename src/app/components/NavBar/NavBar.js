"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import styles from "./NavBar.module.css";
import Link from "next/link";
import CustomBtn from "../CustomBtn/CustomBtn";
import { calendlyLink } from "@/app/data/Links";
import { usePathname } from "next/navigation";
import Image from "next/legacy/image";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false); // State to manage Offcanvas visibility
  const pathname = usePathname();

  // Handler to toggle Offcanvas visibility
  const handleToggleOffcanvas = () => setShowOffcanvas(!showOffcanvas);

  // Handler to close Offcanvas
  const handleCloseOffcanvas = () => setShowOffcanvas(false);

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
          href="/"
        >
          <div className={`${styles.logoContainer} w-100`}>
            <Image
              src="/assets/logo_cropped.png"
              layout="intrinsic"
              width={230}
              height={53}
              alt="company logo"
            />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle 
        onClick={handleToggleOffcanvas}
        aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          show={showOffcanvas}
          onHide={handleCloseOffcanvas}
        >
          <Offcanvas.Header className={`${styles.offCanvasHeader}`} closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <div className={`${styles.logoContainer} w-100`}>
                <Image
                  src="/assets/logo_cropped.png"
                  layout="intrinsic"
                  width={230}
                  height={53}
                  alt="company logo"
                />
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
                  onClick={() => {
                    setActiveLink(path === "/" ? "home" : path.substring(1));
                    handleCloseOffcanvas(); // Close Offcanvas on link click
                  }}
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


