import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from './Stats.module.css'

const Stats = () => {
  const stats = [
    {
      title: "Success rate",
      percentage: "78%",
      average: "+2%",
    },
    {
      title: "Conversion rate",
      percentage: "35%",
      average: "+1%",
    },
    {
      title: "Retention rate",
      percentage: "85%",
      average: "+3%",
    },
  ];
  return (
    <Row>
      {stats.map((stat, index) => (
        <Col key={index} lg={4} className="mb-4">
          <div className={`${styles.statCard} rounded p-4`}>
            <h6 className="fw-semibold">{stat.title}</h6>
            <h3 className="xtraBold mt-3">{stat.percentage}</h3>
            <span className="text-success fw-bold mt-1">{stat.average}</span>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default Stats;
