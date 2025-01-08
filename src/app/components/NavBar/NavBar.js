"use client";
import React from "react";
import { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Container,
  Offcanvas,
  Form,
} from "react-bootstrap";
import styles from "./NavBar.module.css";
import Link from "next/link";
import CustomBtn from "../CustomBtn/CustomBtn";
import { IoDocumentTextSharp } from "react-icons/io5";
import { calendlyLink } from "@/app/data/Links";
import { startupVisaFormLink } from "@/app/data/Links";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

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

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath.includes("/blog")) {
      setActiveLink("blog");
    } else {
      setActiveLink(currentPath.substring(1) || "home");
    }
  }, []);
  const pathDisplayNames = {
    "/": "Home",
    "/about": "About",
    "/startupvisa": "Startup Visa",
    "/blog": "Blog",
    "/contact": "Contact",
  };
  return (
    ////// basic navbar works

    <Navbar
      expand="lg"
      // fixed="top"
      className={`${styles.navBar} ${isScrolled ? styles.scrolled : ""}`}
    >
      <Container fluid>
        <Navbar.Brand className="d-flex align-items-center" href="/home">
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
          <Offcanvas.Header closeButton>
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
          <Offcanvas.Body>
            <Nav
              ///// this has to be flex column when screen is small
              className={`${styles.navMenu} d-flex justify-content-between flex-grow-1`}
            >
              {/* /// this has to be flex column when screen is small  */}
              <div className={`${styles.menuUL} d-flex`}>
                {Object.keys(pathDisplayNames).map((path) => (
                  <Nav.Link
                    key={path}
                    as={Link}
                    href={path}
                    className={
                      activeLink === (path === "/" ? "home" : path.substring(1))
                        ? `${styles.active} px-3 ${styles.navMenuLinks}`
                        : `${styles.navMenuLinks} px-3`
                    }
                    onClick={() =>
                      setActiveLink(path === "/" ? "home" : path.substring(1))
                    }
                  >
                    {pathDisplayNames[path]}
                  </Nav.Link>
                ))}
              </div>

              <div className={styles.customBtnContainer}>
                <CustomBtn link={calendlyLink} text="Book consult" />
              </div>

              {/* <a
                    href={startupVisaFormLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.applyNowLink} text-decoration-none`}
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
                  </a> */}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>

    // <Navbar expand="lg" className="bg-body-tertiary">
    //   <Container>
    //     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#link">Link</Nav.Link>
    //         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">
    //             Separated link
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    //// our old nav bar, not working for mobile
    // <Navbar className={`${styles.navBar} px-5 py-3 fixed-top`} expand="lg">
    //   <Navbar.Brand className="d-flex align-items-center" href="#home">
    //     <div className={styles.logoContainer}>
    //       <span className={styles.logoSpan}></span>
    //       <span className={styles.logoSpan}></span>
    //       <span className={styles.logoSpan}></span>
    //       <span className={styles.logoSpan}></span>
    //     </div>
    //     <span className={`${styles.logoText} fw-bold`}>Tech X Startup</span>
    //   </Navbar.Brand>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className={`${styles.navMenu} ms-auto gap-4`}>
    //       <div className={`${styles.navLinksContainer} d-flex me-3`}>
    //         {Object.keys(pathDisplayNames).map((path) => (
    //           <Nav.Item>
    //             <Nav.Link
    //               key={path}
    //               as={Link}
    //               href={path}
    //               className={
    //                 activeLink === (path === "/" ? "home" : path.substring(1))
    //                   ? styles.active
    //                   : ""
    //               }
    //               onClick={() =>
    //                 setActiveLink(path === "/" ? "home" : path.substring(1))
    //               }
    //             >
    //               {pathDisplayNames[path]}
    //             </Nav.Link>
    //           </Nav.Item>
    //         ))}
    //       </div>
    //     </Nav>
    //     <div className="d-flex gap-2 ms-3">
    //       <CustomBtn link={calendlyLink} text="Book consult" />

    //       <a
    //         href={startupVisaFormLink}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className="text-decoration-none"
    //       >
    //         <Button
    //           variant="light"
    //           className={`fw-bold ${styles.applyNowBtn} lightBtnBackgroundColor px-3 py-2`}
    //         >
    //           <span className="d-flex align-items-center gap-2">
    //             <IoDocumentTextSharp />
    //             Apply
    //           </span>
    //         </Button>
    //       </a>
    //     </div>
    //   </Navbar.Collapse>
    // </Navbar>
  );
};

export default NavBar;

{
  /* <Navbar expand="lg" className="bg-body-tertiary">
<Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
          Another action
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">
          Separated link
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar> */
}
