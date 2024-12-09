"use client";
import Image from "next/image";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styles from './page.module.css'

export default function Home() {
  return (
    <div className="section">
      <Container>
        <Row>
          <Col>
            <div>
              <h4 className="xtraBold">Contact our team</h4>
              <p className="mt-3">
                Let's talk about your project and discuss whether Canada Startup
                Visa is the best solution.
              </p>
              <Form className="mt-5">
                <Row className="mb-4">
                  <Col md={6}>
                    <Form.Group controlId="firstName">
                      <Form.Label className="xtraBold mb-3">First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your first name"
                        className={styles.input}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="lastName">
                      <Form.Label className="xtraBold mb-3">Last Name</Form.Label>
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
                      <Form.Label className="xtraBold mb-3">What would you like to discuss?</Form.Label>
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
            <div>hiiii</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
