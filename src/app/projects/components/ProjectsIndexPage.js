import React from "react";
import { Row, Col } from "react-bootstrap";
import VerticalCard from "@/app/components/VerticalCard/VerticalCard";
import { MdArrowOutward } from "react-icons/md";

const ProjectsIndexPage = ({ projects }) => {
  console.log(projects, "projects");
  return (
    <div className="pb-5">
      {" "}
      <h4 className="xtraBold pt-5 header pb-3">Projects</h4>
      <Row>
        {projects.map((project, index) => (
          <Col className="d-flex flex-column" key={index} xs={12} md={6} lg={4}>
            <VerticalCard
              imageSrc={project.images[0]}
              alt={project.title}
              title={project.title}
              text={project.text}
              link={`/projects/${project.title
                .toLowerCase()
                .replace(/ /g, "-")}`}
              secondItem={project.industry}
              icon={<MdArrowOutward />}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProjectsIndexPage;
