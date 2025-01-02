import React from "react";
import styles from "./Timeline.module.css";
import { Row, Col, Badge } from "react-bootstrap";
import { IoDocumentText } from "react-icons/io5";
import { PiGearSixFill } from "react-icons/pi";
import { IoBriefcase } from "react-icons/io5";
import { MdPerson3 } from "react-icons/md";
import { IoDocumentAttachSharp } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa";
import Image from "next/image";
import "../../../../app/globals.css";

const Timeline = () => {
  const steps = [
    {
      timeline: "01",
      title: "Preliminary Assessment",
      tags: ["Discovery", "Evaluation", "Incubator Fit"],
      icon: <IoDocumentText />,
      color: "#0d6efd",
      text: "Conduct discovery calls, assess incubator-fit, perform due diligence, and decide on the startup type.",
    },
    {
      timeline: "04",
      title: "Startup Development Phase",
      tags: ["Building", "Prototyping", "Planning"],
      icon: <PiGearSixFill />,
      color: "#7e9a92",
      text: "Establish the startup, develop the prototype, and prepare key documents.",
    },
    {
      timeline: "08",
      title: "Application and Interview Preparation Phase",
      tags: ["Startup Readiness", "Finalization", "Submission"],
      icon: <IoBriefcase />,
      color: "#a5b9d2",
      text: "Finalize the prototype, prep for the interview, and submit the application.",
    },
    {
      timeline: "10",
      title: "Interview with designated incubator",
      tags: ["Interview", "Incubator Process", "Due Diligence"],
      icon: <MdPerson3 />,
      color: "#6a7f9b",
      text: "The incubator will interview the applicant(s), conduct due diligence, and send a contract for signature and payment.",
    },
    {
      timeline: "12",
      title: "Receive Letter of Support",
      tags: ["Approval", "Letter Of Support", "Funding"],
      icon: <IoDocumentAttachSharp />,
      color: "#354b6a",
      text: "Once payment is received, the incubator will issue a Letter of Support to the applicant.",
    },
    {
      timeline: "15",
      title: "Immigration Application Submission",
      tags: ["Immigration", "Work Permit", "Permanent Residence"],
      icon: <FaGlobe />,
      color: "#212529", 
      text: "Prepare and submit the work permit or permanent residence application once the Letter of Support is received.",
    },
  ];

  return (
    (<Row className={`${styles.timelineRow} w-100`}>
      {steps.map((step, index) => (
        <Row key={index} className="">
          {" "}
          {/* Added `mb-4` for spacing between rows */}
          {index % 2 === 0 ? ( // Even rows (left-aligned)
            (<>
              <Col className={`${styles.leftCol} d-flex justify-content-end`}>
                <div
                  className={`d-flex flex-column ${index !== 0 ? "mt-5" : ""}`}
                >
                  <div
                    className={`${styles.timeLineCardLeft} d-flex gap-4 align-items-center`}
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
            </>)
          ) : (
            // Odd rows (right-aligned)
            (<>
              <Col className={`${styles.leftCol}`}></Col>
              <Col className={`${styles.rightCol}`}>
                <div
                  className={`d-flex flex-column ${index !== 0 ? "mt-5" : ""}`}
                >
                  <div
                    className={`${styles.timeLineCardRight} d-flex gap-4 align-items-center`}
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
                        <div className="d-flex gap-3 mt-2 flex-wrap">
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
            </>)
          )}
        </Row>
      ))}
    </Row>)
  );
};

export default Timeline;
