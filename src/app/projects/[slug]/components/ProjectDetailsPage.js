"use client";
import React from "react";
import styles from "./ProjectDetailsPage.module.css";
import { Row, Col, Breadcrumb, Container } from "react-bootstrap";
import SectionWithHeaderAndText from "@/app/components/SectionWithHeaderAndText/SectionWithHeaderAndText";

const ProjectDetailsPage = ({ project }) => {
  console.log(project, "project");
  // Early return in case project is not found or incomplete
  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    // <div>
    //   <h1>{project?.title || "No title available"}</h1>
    //   <h1>Hiii</h1>
    // </div>
    <div className="section">
      <Container className="pb-4">
        <Breadcrumb className={styles.breadCrumb}>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/projects">Projects</Breadcrumb.Item>
          <Breadcrumb.Item className={styles.breadCrumbItemActive} active>
            {project?.title}
          </Breadcrumb.Item>
        </Breadcrumb>
        <Row className="align-items-center mt-5">
          <h2 className="xtraBold">{project?.title}</h2>
          <p className="mt-3">{project && project.sections.intro}</p>
        </Row>

        <h5 className="mt-3 py-2 xtraBold">Project details</h5>
        <hr className="mt-4"></hr>
        <Row className="py-2">
          <Col>
            <div className="d-flex flex-column">
              <span className="">Year</span>
              <span className="xtraBold mt-1">{project?.year}</span>
            </div>
          </Col>
          <Col>
            <div className="d-flex flex-column">
              <span className="">Industry</span>
              <span className="xtraBold mt-1">{project?.industry}</span>
            </div>
          </Col>
        </Row>
        <hr></hr>
        <Row className="py-2">
          <Col>
            <div className="d-flex flex-column">
              <span className="">Project team</span>
              <span className="xtraBold mt-1">Onsite or remote</span>
            </div>
          </Col>
        </Row>

        <h5 className="mt-5 xtraBold">Target Audience</h5>
        <Row className="mt-4 pb-2 g-3">
          {project?.targetAudience &&
            project.targetAudience.map((audience, index) => (
              <Col sm={12} md={6} className="d-flex" key={index}>
                <div
                  className={`${styles.detailsCard} flex-grow-1 d-flex flex-column align-items-center justify-content-between p-3 rounded`}
                >
                  <span className="xtraBold fs-2">{audience?.percentage}%</span>
                  <span className="textBlue mt-1">{audience?.label}</span>
                </div>
              </Col>
            ))}
        </Row>

        <Row className="mt-4">
          <h5 className="xtraBold">The Problem Being Addressed</h5>
          <p className="mt-2">{project.problem}</p>
        </Row>
        <Row className="mt-4">
          <h5 className="xtraBold">The Approach to Solving It</h5>
          <p className="mt-2">{project.solution}</p>
        </Row>

        <Row className="mt-4">
          <h5 className="xtraBold">
            What are the benefits of {project?.title}
          </h5>
          <p className="mt-2">
            Some noteworthy benefits of {project?.title} include:
          </p>
          {project?.sections?.benefits?.map((benefit, index) => (
            <div key={index} className="d-flex align-items-start gap-3 mt-3">
              <span className="bulletPoint mt-1"></span>
              <p className="flex-grow-1">{benefit}</p>
            </div>
          ))}
        </Row>

        {/* Uncomment and ensure proper handling of images */}
        {/* <Row className="mt-5">
          {project?.images?.map((image, index) => (
            <Col key={index} xs={12} sm={6} lg={4} xl={3} className="rounded">
              <div className={`customCard`}>
                <div className="imgContainer">
                  <Image
                    src={image}
                    alt={project?.title}
                    layout="fill"
                  />
                </div>
              </div>
            </Col>
          ))}
        </Row> */}
         <Row className="mt-5">
          <h5 className="xtraBold">Conclusion</h5>
          <p className="mt-2">{project?.sections?.conclusion}</p>
        </Row>

        <div className="mt-5 pb-4">
          <SectionWithHeaderAndText
            header="Need help with your startup idea?"
            text="Contact us today to get started and discuss your vision. Our team of experts is here to provide personalized guidance and help you bring your ideas to life. Whether you need advice, support, or solutions, we’re here to assist you every step of the way. Call us now to take the first step towards turning your vision into reality."
          />
        </div>
      </Container>
    </div>
  );
};

export default ProjectDetailsPage;
