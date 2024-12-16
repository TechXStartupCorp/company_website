"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { featuredProjects } from "@/app/data/FeaturedProjects";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import styles from "./page.module.css";

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
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/#featured-projects">
            Featured projects
          </Breadcrumb.Item>
          <Breadcrumb.Item active>{project && project.title}</Breadcrumb.Item>
        </Breadcrumb>
        <h2 className="xtraBold mt-5">Project: {project && project.title}</h2>
        <p className="mt-4">{project && project.sections.intro}</p>
        <h5 className="mt-5 py-2 xtraBold">Project details</h5>
        <hr className="mt-4"></hr>
        <Row className="py-2">
          <Col>
            <div className="d-flex flex-column">
              <span className="text-secondary">Year</span>
              <span className="fw-bold">{project && project.year}</span>
            </div>
          </Col>
          <Col>
            {" "}
            <div className="d-flex flex-column">
              <span className="text-secondary">Industry</span>
              <span className="fw-bold">{project.industry}</span>
            </div>
          </Col>
        </Row>
        <hr></hr>
        <Row className="py-2">
          <Col>
            <div className="d-flex flex-column">
              <span className="text-secondary">Project team</span>
              <span className="fw-bold">Onsite or remote</span>
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
          <h5 className="xtraBold">The Benefits of My Ride</h5>
          <p className="mt-2">{project && project.sections.benefits}</p>
        </Row>
      </Container>
    </div>
  );
}
