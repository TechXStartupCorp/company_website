import React from "react";
import styles from "./Timeline.module.css";
import { Row, Col } from "react-bootstrap";

const Timeline = () => {
  const steps = [
    {
      timeline: 1,
      title: "Preliminary Assessment",
      text: "Conduct discovery calls, assess incubator-fit, perform due diligence, and decide on the startup type.",
    },
    {
      timeline: 4,
      title: "Startup Development Phase",
      text: "Establish the startup, develop the prototype, and prepare key documents.",
    },
    {
      timeline: 8,
      title: "Application and Interview Preparation Phase",
      text: "Finalize the prototype, prep for the interview, and submit the application.",
    },
    {
      timeline: 12,
      title: "Letter of Support",
      text: "Once payment is received, the incubator will issue a Letter of Support to the applicant.",
    },
  ];

  return (
    <Row className={`${styles.timelineRow} w-100`}>
  {steps.map((step, index) => (
    <Row key={index} className=""> {/* Added `mb-4` for spacing between rows */}
      {index % 2 === 0 ? ( // Even rows (left-aligned)
        <>
          <Col className={`${styles.leftCol} d-flex justify-content-end`}>
          <div className={`d-flex flex-column ${index !== 0 ? 'mt-5' : ''}`}>
              <div
                className={`${styles.timeLineCardLeft} d-flex gap-3 align-items-center`}
              >
                <div className="d-flex bg-light p-3 rounded">
                  <div>
                    <h5>{step.title}</h5>
                    <p>{step.text}</p>
                  </div>
                  <div className="d-flex flex-column align-items-center ms-3">
                    <small>Week</small>
                    <h2>{step.timeline}</h2>
                  </div>
                </div>
                <div className={`${styles.blueDot}`}></div>
              </div>
            </div>
          </Col>
          <Col className={`${styles.rightCol}`}></Col>
        </>
      ) : ( // Odd rows (right-aligned)
        <>
          <Col className={`${styles.leftCol}`}></Col>
          <Col className={`${styles.rightCol}`}>
            <div className={`d-flex flex-column ${index !== 0 ? 'mt-5' : ''}`}>
              <div
                className={`${styles.timeLineCardRight} d-flex gap-3 align-items-center`}
              >
                <div className={`${styles.blueDot}`}></div>
                <div className="d-flex bg-light p-3 rounded">
                  <div>
                    <h5>{step.title}</h5>
                    <p>{step.text}</p>
                  </div>
                  <div className="d-flex flex-column align-items-center ms-3">
                    <small>Week</small>
                    <h2>{step.timeline}</h2>
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
   
    // <Row className={`${styles.timelineRow} w-100`}>
    //   <Row className="">
    //     <Col className={`${styles.leftCol} d-flex justify-content-end`}>
    //       <div className="d-flex flex-column">
    //         <div
    //           className={`${styles.timeLineCardLeft} d-flex gap-3 align-items-center`}
    //         >
    //           <div className="d-flex bg-light">
    //             <div className="">
    //               <h5>Title goes here</h5>
    //               <p>Some stuf here</p>
    //             </div>
    //             <div className="d-flex flex-column">
    //               <small>week</small>
    //               <h2>Num</h2>
    //             </div>
    //           </div>
    //           <div className={`${styles.blueDot}`}></div>
    //         </div>
    //       </div>
    //     </Col>
    //     <Col className={`${styles.rightCol}`}></Col>
    //   </Row>
    //   <Row className="">
    //     <Col className={`${styles.leftCol}`}></Col>
    //     <Col className={`${styles.rightCol}`}>
    //       {" "}
    //       <div className="d-flex flex-column mt-5">
    //         <div
    //           className={`${styles.timeLineCardRight} d-flex gap-3 align-items-center`}
    //         >
    //           <div className={`${styles.blueDot}`}></div>
    //           <div className="d-flex bg-light">
    //             <div className="">
    //               <h5>Title goes here</h5>
    //               <p>Some stuf here</p>
    //             </div>
    //             <div className="d-flex flex-column">
    //               <small>week</small>
    //               <h2>Num</h2>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </Col>
    //   </Row>
    // </Row>
  );
};

export default Timeline;

// <div className={styles.timelineWrapper}>
// {/* Grey line acting as the main timeline */}
// <div className={styles.timelineLine}></div>

// <div className={`d-flex align-items-center`}>
//   {/* Blue Dot */}
//   <div className="bg-warning h-auto">
//   <div className={styles.timelineDot}></div>
//   </div>

//   <div className={`d-flex bg-light ${styles.timelineCard}`}>
//     <h5>Preliminary Assessment</h5>
//     <p>
//       Conduct discovery calls, assess incubator-fit, perform due
//       diligence, and decide on the startup type.
//     </p>
//   </div>
// </div>

// </div>
