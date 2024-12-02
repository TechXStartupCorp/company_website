"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import styles from "./page.module.css";
import CustomBtn from "./components/CustomBtn/CustomBtn";
import { Row, Col, Container } from "react-bootstrap";
import Link from "next/link";
import CalloutSection from "./components/CalloutSection/CalloutSection";
import Stats from "./components/Stats/Stats";
import { FaRegCompass } from "react-icons/fa6";
import { FaNetworkWired, FaHandshake } from "react-icons/fa";
import { SiAircanada } from "react-icons/si";

export default function Home() {
  const services = [
    {
      title: "Pre-LOS training",
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
      text: "Prepare your startup for the Canada Startup Visa and secure a spot in top incubators with our Pre-Letter of Support training.",
    },
    {
      title: "Ideation & Validation",
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
      text: "Refining and validating business ideas through market feedback and incubator resources.",
    },
    {
      title: "Business Plan Development",
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
      text: "Crafting a compelling business plan tailored for the Startup Visa and incubator applications.",
    },
    {
      title: "Pitch Decks",
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
      text: "Designing persuasive pitch decks to attract incubators and investors.",
    },
    {
      title: "Financial Models",
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
      text: "Building financial models to meet the requirements of investors and incubators.",
    },
    {
      title: "Incorporation & Legal",
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
      text: "Assisting with business setup and shareholder agreements for the Startup Visa program.",
    },
    {
      title: "Marketing Strategy",
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
      text: "Developing strategic marketing plans for growth and investor attraction.",
    },
    {
      title: "Social Media & Customer Discovery",
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
      text: "Creating a strong social presence and engaging with target customers.",
    },
    {
      title: "Compliance & IP Protection",
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
      text: "Creating a strong social presence and engaging with target customers.",
    },
    {
      title: "Prototyping & UI/UX Design",
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
      text: "Developing prototypes and designs to showcase your innovation to incubators and investors.",
    },
  ];

  const featuredProjects = [
    {
      year: "2021",
      title: "Project X",
      text: "This tech project aims to revolutionize the way businesses manage their operations by providing innovative solutions that streamline workflows, enhance productivity, and improve user experience. ",
      link: "urlhere.com",
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
    },
    {
      year: "2021",
      title: "Project Y",
      text: "This tech project seeks to transform how businesses operate by offering innovative solutions that optimize workflows, boost efficiency, and elevate the overall user experience.",
      link: "urlhere.com",
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
    },
    {
      year: "2020",
      title: "Project X",
      text: "This tech project aims to revolutionize the way businesses manage their operations by providing innovative solutions that streamline workflows, enhance productivity, and improve user experience. ",
      link: "urlhere.com",
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
    },
    {
      year: "2020",
      title: "Project Y",
      text: "This tech project seeks to transform how businesses operate by offering innovative solutions that optimize workflows, boost efficiency, and elevate the overall user experience.",
      link: "urlhere.com",
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
    },
  ];

  const partners = [
    {
      name: "Partner X",
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
    },
    {
      name: "Partner Y",
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
    },
    {
      name: "Partner X",
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
    },
    {
      name: "Partner Y",
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
    },
  ];

  const sellingPoints = [
    {
      icon: <FaRegCompass />,
      title: "End-to-End Guidance",
      text: "We take you from concept to execution, offering tailored support to help secure your Startup Visa approval.",
    },
    {
      icon: <FaNetworkWired />,
      title: "Extensive Network",
      text: "Access our network of investors and incubators to bring your vision to life and fast-track your growth in Canada.",
    },
    {
      icon: <FaHandshake />,
      title: "Partnership Opportunities",
      text: "Partner with Canadian businesses and stakeholders to expand your operations and integrate into the Canadian market.",
    },
    {
      icon: <SiAircanada />,
      title: "Exclusive Canadian Benefits",
      text: "Benefit from Canada's supportive business environment, tax incentives, and access to a thriving global market.",
    },
  ];

  const groupedProjects = featuredProjects.reduce((acc, project) => {
    if (!acc[project.year]) {
      acc[project.year] = [];
    }
    acc[project.year].push(project);
    return acc;
  }, {});

  const sortedYears = Object.keys(groupedProjects).sort((a, b) => b - a);

  return (
    <div>
      <CalloutSection
        imageURL="https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg"
        alt="Beautiful landscape"
        title="Build the future"
        text="Build the future and accelerate your startup’s growth with dedicated support, mentorship, and valuable resources from Canada’s Startup Visa Program, designed to help you succeed and thrive in a dynamic business ecosystem."
        primaryBtnText="Book consult"
        lightBtnText="Learn more"
        secondBtn={true}
      />

      <Container className={`${styles.landingPageContent} section`}>
        <h2 className={`xtraBold`}>
          Our mission is to empower creators and innovators to push boundaries
          through our partnership with Canada's Startup Visa Program
        </h2>
        <p className="mt-4">
          Tech X Startup works closely with angel investors, business
          incubators, and venture capital funds to help you turn your tech idea
          into a reality. We provide the funding, resources, and mentorship
          needed to prove the potential of your business, all while supporting
          you through the Canada Startup Visa Program to secure permanent
          residence and build a future in Canada.
        </p>
      </Container>
      <Container>
        <h4 className="xtraBold header">Our services</h4>
        <Row className="g-4 mt-2">
          {services.map((service, index) => (
            <Col key={index} xs={12} sm={6} lg={4} xl={3} className="rounded">
              <div className={`d-flex flex-column h-100 ${styles.serviceCard}`}>
                <div className={styles.imgContainer}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    // objectFit="cover"
                  />
                </div>
                <div>
                  <h5 className="xtraBold mt-3">{service.title}</h5>
                  <p className="text-secondary">{service.text}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Container className="section">
        <h4 className="xtraBold mt-4 header">Featured projects</h4>
        <div>
          {sortedYears.map((year) => (
            <div key={year}>
              <h5 className="xtraBold mt-5">{year}</h5>
              {groupedProjects[year].map((project, index) => (
                <Row className="mt-5" key={index}>
                  <Col>
                    <h5 className="xtraBold">{project.title}</h5>
                    <p className="mt-3 text-secondary">{project.text}</p>
                    <div className={styles.caseStudyLinkContainer}>
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-dark fw-bold text-decoration-none py-2 px-3 rounded ${styles.caseStudyLink}`}
                      >
                        Learn more
                      </Link>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div
                      className={`${styles.featuredProjImgContainer} position-relative h-auto w-100`}
                    >
                      <Image
                        className="roundedImage"
                        src={project.image}
                        alt={project.title}
                        layout="fill"
                      />
                    </div>
                  </Col>
                </Row>
              ))}
            </div>
          ))}
        </div>
      </Container>
      <div className="section">
        <CalloutSection
          imageURL="https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg"
          alt="Beautiful landscape"
          title="Transform Your Startup’s Future"
          text="Elevate your business with Canada's Startup Visa Program. Unlock new opportunities, gain invaluable support, and accelerate your growth as you scale your startup to new heights."
          primaryBtnText="Get started"
          secondBtn={false}
          getSomethingForm={true}
        />
      </div>
      <Container>
        <Stats />
      </Container>
      <Container className="section">
        <h2 className={`xtraBold header`}>Why Tech X Startup?</h2>
        <p className="mt-4 w-75 pb-2">
          Tech X Startup guides you from idea to success, securing essential
          support for Canada’s Startup Visa Program and unlocking opportunities
          for your business to thrive.
        </p>
        <Row className="mt-3 gx-4 gy-3">
          {sellingPoints.map((point, index) => (
            <Col
              lg={6}
              key={index}
              className="d-flex flex-column align-items-center"
            >
              <div
                className={`${styles.sellingPointCard} d-flex flex-column p-4`}
              >
                <div className="fs-4">{point.icon}</div>
                <h5 className="xtraBold mt-3">{point.title}</h5>
                <p className="text-secondary mt-1">{point.text}</p>
              </div>
            </Col>
          ))}
        </Row>
        <div className="mt-4">
          <CustomBtn variant="primary" text="Learn more" />
        </div>
      </Container>
      <Container className="section">
        <h4 className="xtraBold mt-4 header">Our trusted partners</h4>
        <Row className="mt-4">
          {partners.map((partner, index) => (
            <Col key={index} lg={3} md={6} sm={12} className="mb-4">
              <div className="partner-card text-center">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="img-fluid rounded"
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
