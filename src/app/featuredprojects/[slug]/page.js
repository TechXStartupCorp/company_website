"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { featuredProjects } from "@/app/data/FeaturedProjects";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import styles from "./page.module.css";
import Image from "next/image";

export default function ProjectDetails({ params }) {
  const { slug } = useParams();

  const project = featuredProjects.find(
    (proj) => proj.title.toLowerCase().replace(/ /g, "-") === slug
  );

  if (!project) {
    return <div>Project not found</div>;
  }
  //   const { slug } = params;

  //   const project = featuredProjects.find(
  //     (proj) => proj.title.toLowerCase().replace(/ /g, "-") === slug
  //   );

  //   if (!project) {
  //     return <div>Project not found</div>;
  //   }

  // working on this
  //   const router = useRouter();
  //   const [project, setProject] = useState(null);

  //   useEffect(() => {
  //     if (router.isReady && router.query.slug) {
  //       const slug = router.query.slug;

  //       const proj = featuredProjects.find(
  //         (proj) => proj.title.toLowerCase().replace(/ /g, "-") === slug
  //       );

  //       setProject(proj);
  //     }
  //   }, [router.isReady, router.query.slug]);

  //   if (!router.isReady || !project) {
  //     return <div>Project not found</div>;
  //   }

  return (
    <div className="section">
      <Container className="pb-4">
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/#featured-projects">
            Featured projects
          </Breadcrumb.Item>
          <Breadcrumb.Item active>{project && project.title}</Breadcrumb.Item>
        </Breadcrumb>
        <Row className="align-items-center mt-5">
          <h2 className="xtraBold">Project: {project && project.title}</h2>
          <p className="mt-3">{project && project.sections.intro}</p>
        </Row>

        <h5 className="mt-3 py-2 xtraBold">Project details</h5>
        <hr className="mt-4"></hr>
        <Row className="py-2">
          <Col>
            <div className="d-flex flex-column">
              <span className="text-secondary">Year</span>
              <span className="fw-bold mt-1">{project && project.year}</span>
            </div>
          </Col>
          <Col>
            {" "}
            <div className="d-flex flex-column">
              <span className="text-secondary">Industry</span>
              <span className="fw-bold mt-1">{project.industry}</span>
            </div>
          </Col>
        </Row>
        <hr></hr>
        <Row className="py-2">
          <Col>
            <div className="d-flex flex-column">
              <span className="text-secondary">Project team</span>
              <span className="fw-bold mt-1">Onsite or remote</span>
            </div>
          </Col>
        </Row>

        <h5 className="mt-5 xtraBold">Target Audience</h5>
        <Row className="mt-4 pb-2">
          {project.targetAudience &&
            Object.entries(project.targetAudience).map(
              ([audience, percentage], index) => (
                <Col key={index}>
                  <div
                    className={`${styles.detailsCard} d-flex flex-column align-items-center justify-content-center p-3 rounded`}
                  >
                    <span className="xtraBold fs-2">{percentage}%</span>
                    <span className="text-secondary mt-1">{audience}</span>
                  </div>
                </Col>
              )
            )}
        </Row>
        <Row className="mt-4">
          <h5 className="xtraBold">The Problem Being Addressed</h5>
          <p className="mt-2">{project && project.sections.problem}</p>
        </Row>
        <Row className="mt-4">
          <h5 className="xtraBold">The Approach to Solving It</h5>
          <p className="mt-2">{project && project.sections.solution}</p>
        </Row>
        <Row className="mt-4">
          <h5 className="xtraBold">What are the benefits of My Ride</h5>
          <p className="mt-2">
            Some noteworthy benefits of {project && project.title} include:
          </p>

          {project &&
            project.sections.benefits &&
            project.sections.benefits.map((benefit, index) => (
              <div key={index} className="d-flex align-items-center gap-3 mt-3">
                <span className="bulletPoint"></span>
                <p className="mb-0">{benefit}</p>
              </div>
            ))}
        </Row>
        <Row className="mt-5">
          {project &&
            project.images.map((image, index) => (
              <Col key={index} xs={12} sm={6} lg={4} xl={3} className="rounded">
                <div className={`customCard`}>
                  <div className="imgContainer">
                    <Image
                      src={image}
                      alt={project && project.title}
                      layout="fill"
                    />
                  </div>
                </div>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
}

{
  /* <Row className="g-4 mt-2">
{services.map((service, index) => (
  <Col key={index} xs={12} sm={6} lg={4} xl={3} className="rounded">
    <div className={`customCard`}>
      <div className="imgContainer">
        <Image
          src={service.image}
          alt={service.title}
          layout="fill"
        />
      </div>
      <div>
        <h5 className="xtraBold mt-3">{service.title}</h5>
        <p className="text-secondary">{service.text}</p>
      </div>
    </div>
  </Col>
))}
</Row> */
}
