"use client";
import React, { useRef, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styles from "./page.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import CustomBtn from "../components/CustomBtn/CustomBtn";
import { send } from "emailjs-com";

export default function Home() {
  const form = useRef(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const contactInfo = [
    {
      icon: <FaPhoneAlt />,
      text: "+1 (647) 792-7999 ext 103",
    },
    {
      icon: <MdOutlineEmail />,
      text: "team@techxstartup.com",
      // ceo@techxstartup.com 
    },
    {
      icon: <FaWhatsapp />,
      text: "+1 (782) 641-6944",
    },
  ];

  // Fix for missing `e` parameter
  const sendEmail = async (e) => {
    e.preventDefault(); // Prevent default behavior for the form submission

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      console.error("Missing EmailJS configuration.");
      alert("Email configuration is missing. Please contact support.");
      return;
    }

    const templateParams = {
      to_name: "TechX Startup",
      from_first_name: firstName,
      from_last_name: lastName, // Corrected to use lastName
      from_email: email,
      from_company: company || null,
      message: message,
    };

    try {
      const result = await send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );
      console.log("Email sent successfully:", result.text);
      alert("Message sent!");
      setFirstName("");
      setLastName("");
      setCompany("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Message failed to send. Please try again.");
    }
  };

  return (
    <div className="section pb-5">
      <Container className="mt-3">
        <Row className="gx-5">
          <Col lg={6}>
            <div className="pe-3">
              <h4 className="xtraBold">Get in touch</h4>
              <p className="mt-3">Let us know how we can help you.</p>

              {/* Update the onSubmit to call sendEmail function */}
              <Form ref={form} className="mt-5" onSubmit={sendEmail}>
                <Row className="mb-4">
                  <Col md={6}>
                    <Form.Group controlId="firstName">
                      <Form.Label className="xtraBold mb-2">First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your first name"
                        className={styles.input}
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="lastName">
                      <Form.Label className="xtraBold mb-2">Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your last name"
                        className={styles.input}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <Form.Group controlId="email">
                      <Form.Label className="xtraBold mb-2">Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        className={styles.input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <Form.Group controlId="company">
                      <Form.Label className="xtraBold mb-3">Company</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your company"
                        className={styles.input}
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <Form.Group controlId="discussion">
                      <Form.Label className="xtraBold mb-2">What would you like to discuss?</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter details"
                        className={styles.textArea}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <CustomBtn
                  thickerPadding={true}
                  fullWidth={true}
                  variant="primary"
                  text="Submit"
                  type="submit"
                />
              </Form>
            </div>
          </Col>
          <Col>
            <div className="d-flex flex-column gap-4">
              <h5 className="xtraBold mt-5">Reach out directly</h5>
              {contactInfo.map((item, index) => (
                <div key={index} className="d-flex gap-3 align-items-center">
                  <div
                    className={`${styles.iconContainer} d-flex justify-content-center align-items-center px-3 py-2 rounded`}
                  >
                    {item.icon}
                  </div>
                  <div className="d-flex flex-column">
                    <span className="xtraBold fs-6">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 mb-0 d-flex align-items-center gap-1"><IoLocationOutline />2985 Drew Road, Suite 204, Mississauga ON, L4T 0A4</p>
            <div className="">
              <iframe
                width="100%"
                height="300px"
                className={styles.iframe}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.978211319052!2d-79.6587454712254!3d43.71100187395228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3de715fd5b51%3A0xf4055636d4158c0!2s2985%20Drew%20Rd%2C%20Mississauga%2C%20ON%20L4T%204E5!5e0!3m2!1sen!2sca!4v1733778011906!5m2!1sen!2sca"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
} 
