"use client";
import Image from "next/image";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styles from "./page.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const contactInfo = [
    {
      icon: <FaPhoneAlt />,
      text: "647-792-7999 ext 103",
    },
    {
      icon: <MdOutlineEmail />,
      text: "team@techxstartup.com",
    },
    {
      icon: <FaWhatsapp />,
      text: "647-792-7999 ext 103",
    },
  ];

  return (
    <div className="section pb-5">
      <Container className="mt-3">
        <Row className="gx-5">
          <Col>
            <div className="pe-3">
              <h4 className="xtraBold">Contact our team</h4>
              <p className="mt-3">
                Let's talk about your project and discuss whether Canada Startup
                Visa is the best solution.
              </p>
              <hr></hr>
              <Form className="mt-5">
                <Row className="mb-4">
                  <Col md={6}>
                    <Form.Group controlId="firstName">
                      <Form.Label className="xtraBold mb-3">
                        First Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your first name"
                        className={styles.input}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="lastName">
                      <Form.Label className="xtraBold mb-3">
                        Last Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your last name"
                        className={styles.input}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <Form.Group controlId="email">
                      <Form.Label className="xtraBold mb-3">Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        className={styles.input}
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
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <Form.Group controlId="discussion">
                      <Form.Label className="xtraBold mb-3">
                        What would you like to discuss?
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter details"
                        className={styles.textArea}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Button variant="primary fw-bold" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
          <Col>
            <div className="d-flex flex-column ps-3">
              <div
                className={`${styles.contactCard} d-flex gap-4 p-4 rounded shadow-sm`}
              >
                <Image
                  src="https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733776139/phone_s59ye4.jpg"
                  className="rounded"
                  alt="person dialing cell phone"
                  width="100"
                  height="100"
                />
                <div className="d-flex flex-column">
                  <h5 className="xtraBold">Chat with us</h5>
                  <p className="mt-1">
                    Ready to chat? Call, email or message us on What&apos;'s App.
                  </p>
                  <div className="d-flex flex-column gap-2 mt-2">
                    {contactInfo.map((item, index) => (
                      <div
                        key={index}
                        className="d-flex align-items-center gap-2 fw-bold text-decoration-underline"
                      >
                        <span className="me-2">{item.icon}</span>
                        <small>{item.text}</small>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <h5 className="xtraBold mt-5">Visit us</h5>
              <p className="mt-1">
                2985 Drew Rd, Suite 204, Mississauga ON, L4T 0A4
              </p>
              <div className="map-container">
                <iframe
                  width="600"
                  height="450"
                  className={styles.iframe}
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.978211319052!2d-79.6587454712254!3d43.71100187395228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3de715fd5b51%3A0xf4055636d4158c0!2s2985%20Drew%20Rd%2C%20Mississauga%2C%20ON%20L4T%204E5!5e0!3m2!1sen!2sca!4v1733778011906!5m2!1sen!2sca"
                ></iframe>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
