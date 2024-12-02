"use client";
import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import styles from "./NavBar.module.css";
import Link from "next/link";
import CustomBtn from "../CustomBtn/CustomBtn";
import { FaUser } from "react-icons/fa6";

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
          {" "}
          {/* This will push the nav items to the right */}
          <Nav.Item>
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#contact">Startup Visa</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#contact">Contact</Nav.Link>
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
            <div
              className={`${styles.loginBTN} d-flex justify-content-center align-items-center`}
            >
              {" "}
              <FaUser />
            </div>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
