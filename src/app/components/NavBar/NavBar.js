"use client";
import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import styles from "./NavBar.module.css";
import Link from "next/link";
import CustomBtn from "../CustomBtn/CustomBtn";
import { IoDocumentTextSharp } from "react-icons/io5";

const NavBar = () => {
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
        <Nav.Item>
    <Nav.Link as={Link} href="/">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link as={Link} href="/about">About</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link as={Link} href="/startupvisa">Startup Visa</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link as={Link} href="/contact">Contact</Nav.Link>
  </Nav.Item>
  

          <NavDropdown title="More" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Item>
            <CustomBtn text="Book consult" />
          </Nav.Item>
          <Nav.Item className="">
          <Button variant="light" className={`fw-bold ${styles.applyNowBtn} px-3 py-2`}><span className="d-flex align-items-center gap-2"><IoDocumentTextSharp />Apply</span></Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
