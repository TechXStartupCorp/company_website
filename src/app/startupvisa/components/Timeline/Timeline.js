import React from "react";
import styles from "./Timeline.module.css";
import { Row, Col, Badge } from "react-bootstrap";
import { IoDocumentText } from "react-icons/io5";
import { PiGearSixFill } from "react-icons/pi";
import { IoBriefcase } from "react-icons/io5";
import { MdPerson3 } from "react-icons/md";
import { IoDocumentAttachSharp } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa";
import Image from "next/legacy/image";
import "../../../../app/globals.css";

const Timeline = () => {
  const steps = [
    {
      timeline: "01",
      title: "Preliminary Assessment for Startup Success",
      tags: ["Discovery", "Evaluation", "Incubator Fit"],
      icon: <IoDocumentText />,
      color: "#0d6efd",
      text: "Participate in discovery calls, evaluate incubator-fit, conduct due diligence, and define your startup type for strategic alignment.",
    },
    {
      timeline: "04",
      title: "Startup Development and Prototyping Phase",
      tags: ["Building", "Prototyping", "Planning"],
      icon: <PiGearSixFill />,
      color: "#7e9a92",
      text: "Launch your startup, build a working prototype, and draft essential planning documents for project success.",
    },
    {
      timeline: "08",
      title: "Application and Interview Readiness Phase",
      tags: ["Startup Readiness", "Finalization", "Submission"],
      icon: <IoBriefcase />,
      color: "#a5b9d2",
      text: "Finalize your prototype, get interview-ready, and ensure application submission for the next stage of startup development.",
    },
    {
      timeline: "10",
      title: "Incubator Interview and Due Diligence",
      tags: ["Interview", "Incubator Process", "Due Diligence"],
      icon: <MdPerson3 />,
      color: "#6a7f9b",
      text: "Engage in an incubator interview, undergo due diligence, and finalize the process with contract signature and payment.",
    },
    {
      timeline: "12",
      title: "Approval and Letter of Support Issuance",
      tags: ["Approval", "Letter Of Support", "Funding"],
      icon: <IoDocumentAttachSharp />,
      color: "#354b6a",
      text: "After payment, receive your Letter of Support from the incubator, securing a critical step in your startup journey.",
    },
    {
      timeline: "15",
      title: "Submit Immigration Application for Visa Success",
      tags: ["Immigration", "Work Permit", "Permanent Residence"],
      icon: <FaGlobe />,
      color: "#212529",
      text: "Complete your immigration application, including work permit or permanent residence, after obtaining your Letter of Support.",
    },
  ];

  return (
    <Row className={`${styles.timelineRow} w-100`}>
      {steps.map((step, index) => (
        <Row key={index} className="">
          {" "}
          {index % 2 === 0 ? (
            <>
              <Col className={`${styles.leftCol} d-flex justify-content-end`}>
                <div
                  className={`d-flex flex-column ${index !== 0 ? "mt-5" : ""}`}
                >
                  <div
                    className={`${styles.timeLineCardLeft} d-flex gap-3 align-items-center`}
                  >
                    <div
                      style={{ borderTop: `4px solid ${step.color}` }}
                      className={`d-flex bg-light p-4 rounded-bottom`}
                    >
                      <div className="pe-4">
                        <h5 className={`${styles.stepTitle} xtraBold mt-1`}>
                          {step.title}
                        </h5>
                        <p className="mt-3">{step.text}</p>
                        <div className="d-flex gap-3 mt-4">
                          {step.tags.map((tag, index) => (
                            <Badge
                              key={index}
                              className={`${styles.tag} text-dark`}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div
                        className={`${styles.week} d-flex flex-column align-items-center justify-content-center ps-4 pe-2 gap-2`}
                      >
                        <p className="mb-0 mb-0">Week</p>
                        <h2 className={`${styles.timelineNum} fw-bold`}>
                          {step.timeline}
                        </h2>
                      </div>
                    </div>
                    <div
                      style={{ backgroundColor: step.color }}
                      className={`${styles.blueDot} fs-3 text-light d-flex justify-content-center align-items-center`}
                    >
                      {step.icon}
                    </div>
                  </div>
                </div>
              </Col>
              <Col className={`${styles.rightCol}`}></Col>
            </>
          ) : (
            <>
              <Col className={`${styles.leftCol}`}></Col>
              <Col className={`${styles.rightCol}`}>
                <div
                  className={`d-flex flex-column ${index !== 0 ? "mt-5" : ""}`}
                >
                  <div
                    className={`${styles.timeLineCardRight} d-flex gap-3 align-items-center`}
                  >
                    <div
                      style={{ backgroundColor: step.color }}
                      className={`${styles.blueDot} fs-3 text-light d-flex justify-content-center align-items-center`}
                    >
                      {step.icon}
                    </div>
                    <div
                      style={{ borderTop: `4px solid ${step.color}` }}
                      className={`rounded-bottom d-flex bg-light p-4`}
                    >
                      <div className="pe-4">
                        <h5 className={`${styles.stepTitle} xtraBold mt-1`}>
                          {step.title}
                        </h5>
                        <p className="mt-3">{step.text}</p>
                        <div className="d-flex gap-3 mt-4 flex-wrap">
                          {step.tags.map((tag, index) => (
                            <Badge
                              key={index}
                              className={`${styles.tag} text-dark`}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div
                        className={`${styles.week} d-flex flex-column align-items-center justify-content-center ps-4 pe-2 gap-2`}
                      >
                        <p className="mb-0">Week</p>
                        <h2 className={`${styles.timelineNum} fw-bold`}>
                          {step.timeline}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </>
          )}
        </Row>
      ))}
    </Row>
  );
};

export default Timeline;
