"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import styles from "./LandingPage.module.css";
import { Row, Col, Container } from "react-bootstrap";
import CalloutSection from "../components/CalloutSection/CalloutSection";
import VerticalCard from "../components/VerticalCard/VerticalCard";
import Stats from "../components/Stats/Stats";
import Link from "next/link";
import Head from "next/head";
import {
  FaRegCompass,
  FaGraduationCap,
  FaHeartCirclePlus,
} from "react-icons/fa6";
import {
  FaNetworkWired,
  FaHandshake,
  FaLightbulb,
  FaGavel,
  FaPencilRuler,
} from "react-icons/fa";
import { IoIosMegaphone } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import { HiPresentationChartBar } from "react-icons/hi2";
import { BsFileEarmarkSpreadsheetFill } from "react-icons/bs";
import { GiPadlock } from "react-icons/gi";
import { IoDocument } from "react-icons/io5";
import { SiAircanada } from "react-icons/si";
import CTAWithImage from "../components/CTAWithImage/CTAWithImage";

const LandingPage = ({ content }) => {
  const iconMap = {
    FaRegCompass: FaRegCompass,
    FaGraduationCap: FaGraduationCap,
    FaHeartCirclePlus: FaHeartCirclePlus,
    FaNetworkWired: FaNetworkWired,
    FaHandshake: FaHandshake,
    FaLightbulb: FaLightbulb,
    FaGavel: FaGavel,
    FaPencilRuler: FaPencilRuler,
    IoIosMegaphone: IoIosMegaphone,
    MdArrowOutward: MdArrowOutward,
    HiPresentationChartBar: HiPresentationChartBar,
    BsFileEarmarkSpreadsheetFill: BsFileEarmarkSpreadsheetFill,
    GiPadlock: GiPadlock,
    IoDocument: IoDocument,
    SiAircanada: SiAircanada,
  };

  console.log(content, "content");
  return (
    <div>
      <CalloutSection
        imageURL={content.heroSection.imageUrl}
        alt={content.heroSection.altText}
        title={content.heroSection.title}
        text={content.heroSection.text}
        lightBtnText={content.heroSection.lightBtnText}
        primaryBtnLink={content.heroSection.primaryBtnLink}
        primaryBtnText={content.heroSection.primaryBtnText}
        lightBtnLink={content.heroSection.lightBtnLink}
        secondBtn={content.heroSection.isThereSecondBtn}
      />
      <Container className={`${styles.landingPageContent} section`}>
        <h2 className={`xtraBold w-75`}>
          {content.missionStatement.statement}
        </h2>

        <p className="mt-4">{content.missionStatement.paragraph}</p>
      </Container>
      <Container className="mt-5 pb-4">
        <h4 className="xtraBold header">{content.servicesSection.header}</h4>
        <Row className="g-4 mt-2">
          {content.servicesSection?.services?.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Col
                key={index}
                sm={12}
                lg={4}
                className="rounded d-flex flex-column"
              >
                <div className="cardWithGreyBorder flex-grow-1 pt-2 pb-4 px-3">
                  <div className="fs-4 mt-1">
                    {IconComponent && <IconComponent />}
                  </div>
                  <h5 className="xtraBold mt-4">{service.title}</h5>
                  <p className="mt-2 textBlue">{service.text}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>

      <div className="mt-3">
        <CalloutSection
          imageURL={content.getTheGuideSection.imageUrl}
          alt={content.getTheGuideSection.alt}
          title={content.getTheGuideSection.title}
          text={content.getTheGuideSection.text}
          primaryBtnLink={content.getTheGuideSection.primaryBtnLink}
          primaryBtnText={content.getTheGuideSection.primaryBtnText}
          doSomethingForm={content.getTheGuideSection.doSomethingForm}
          doSomethingFormBtnText={
            content.getTheGuideSection.doSomethingFormBtnText
          }
        />
      </div>
      <Container className="mt-4">
        <Stats />
      </Container>
      <Container className="section">
        <h2 className={`xtraBold header`}>
          {content.sellingPointsIntro.header}
        </h2>

        <p className="mt-3 pb-2">{content.sellingPointsIntro.text}</p>
        <Row className="mt-3 gx-4 gy-3">
          {content.sellingPoints?.map((point, index) => {
            const IconComponent = iconMap[point.icon];
            return (
              <Col
                lg={6}
                key={index}
                className="d-flex flex-column align-items-center"
              >
                <div className="cardWithGreyBorder h-100 d-flex flex-column p-4">
                  <div className="fs-4">
                    {IconComponent && <IconComponent />}
                  </div>
                  <h5 className="xtraBold mt-3">{point.title}</h5>
                  <p className="textBlue mt-1">{point.text}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
      <div className="section">
        <Container>
          <h2 className={`xtraBold header`}>
            {content.partnersSection.header}
          </h2>

          <Row className="mt-4">
            {content.partnersSection.partners.map((partner, index) => (
              <Col key={index} lg={4} md={6} sm={12} className="mb-4">
                <div className="logoCard p-4 d-flex justify-content-center align-items-center">
                  <Image
                    src={partner.image}
                    alt={partner.alt}
                    width={225}
                    height={105}
                    layout="intrinsic"
                  />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <CTAWithImage
        header="Build, Launch, and Scale Your Startup with TechX Startup"
        text="Partner with TechX Startup to turn your ideas into thriving businesses. We offer funding, mentorship, and guidance, including navigating the Canada Startup Visa. Book a call today to start scaling your startup."
        img="https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733946918/dai-ke-GkraTrCYA_0-unsplash_zm7zb8.jpg"
        alt="guy on computer"
        btnText="Book via Calendy"
        imageAlign="left"
        // link={calendlyLink}
        link="https://docs.google.com/forms/d/1xpjSnPmxe2qz_K9EKHcudGpOrCG1PC46BqIhqpdgiDA"
      />
    </div>
  );
};

export default LandingPage;
