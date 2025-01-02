"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import styles from "./page.module.css";
import { Row, Col, Container } from "react-bootstrap";
import CalloutSection from "./components/CalloutSection/CalloutSection";
import Stats from "./components/Stats/Stats";
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
import CTAWithImage from "./components/CTAWithImage/CTAWithImage";
import { featuredProjects } from "./data/FeaturedProjects";
import { calendlyLink, startupVisaFormLink } from "./data/Links";
import VerticalCard from "./components/VerticalCard/VerticalCard";

export default function Home() {
  const services = [
    {
      title: "Startup Launch Training",
      icon: <FaGraduationCap />,
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733866229/headway-5QgIuuBxKwM-unsplash_knadoy.jpg",
      text: "Empowering early-stage founders and Startup Visa applicants with tailored training to kickstart their ventures.",
    },
    {
      title: "Ideation & Market Validation",
      icon: <FaLightbulb />,
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733935456/mika-baumeister-Y_LgXwQEx2c-unsplash_yfzgmi.jpg",
      text: "Helping founders refine and validate their business ideas with market insights and industry expertise.",
    },
    {
      title: "Business Planning for Startups",
      icon: <IoDocument />,
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733866435/austin-distel-wD1LRb9OeEo-unsplash_vbd1pz.jpg",
      text: "Crafting impactful business plans to attract investors and meet Startup Visa application requirements.",
    },
    {
      title: "Investor-Ready Pitch Decks",
      icon: <HiPresentationChartBar />,
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733866530/slidebean-ymTcgQg-2BE-unsplash_y8rt85.jpg",
      text: "Designing compelling pitch decks to secure funding and incubator placements.",
    },
    {
      title: "Financial Modeling for Success",
      icon: <BsFileEarmarkSpreadsheetFill />,
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733948630/pexels-ivan-samkov-7213434_f0ovyw.jpg",
      text: "Developing robust financial models to guide startups and support funding applications.",
    },
    {
      title: "Incorporation & Legal Services",
      icon: <FaGavel />,
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733933962/scott-graham-OQMZwNd3ThU-unsplash_ciwcak.jpg",
      text: "Facilitating business setup and compliance for early-stage founders and Startup Visa applicants.",
    },
    {
      title: "Strategic Marketing Plans",
      icon: <IoIosMegaphone />,
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733935935/austin-chan-ukzHlkoz1IE-unsplash_jjstzt.jpg",
      text: "Building marketing strategies to drive growth and enhance visibility among investors.",
    },
    {
      title: "Social Engagement & Discovery",
      icon: <FaHeartCirclePlus />,
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733935851/firmbee-com-DfMMzzi3rmg-unsplash_qq6brp.jpg",
      text: "Strengthening social presence and connecting with target audiences for customer discovery.",
    },
    {
      title: "Regulatory Compliance & IP",
      icon: <GiPadlock />,
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733936349/pexels-pixabay-39584_lozgzk.jpg",
      text: "Ensuring regulatory compliance and protecting intellectual property to safeguard your startup's assets.",
    },
    {
      title: "Prototyping & UX/UI Design",
      icon: <FaPencilRuler />,
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733937263/pexels-tranmautritam-326502_hcsllt.jpg",
      text: "Creating prototypes and designs to bring your vision to life and captivate stakeholders.",
    },
  ];

  const partners = [
    {
      alt: "Techspot logo",
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733942395/Screenshot_2024-12-11_122336-removebg-preview_ersorc.png",
    },
    {
      smallerImage: true,
      alt: "P & R Immigration logo",
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733945473/P_n_R_Logo_2_xhvqty.png",
    },
    {
      alt: "Resettler logo",
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733937773/Resettler_Logo_jxgiov.png",
    },
    {
      alt: "True global immigration logo",
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733937898/True_Global_xxmzrt.png",
    },
    {
      alt: "IELTS Batch",
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733937759/IELTS_Batch_logo_lfngb0.png",
    },
    {
      smallerImage: true,
      alt: "CICC Group logo",
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733945838/cicc_logo_1_kxdxr3.png",
    },
    {
      alt: "Genius jobs logo",
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733942209/genius-jobs-logo-1-removebg-preview_jnzk5z.png",
    },
    {
      alt: "Easy business plans logo",
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733937736/easybusiness_cq643p.png",
    },
    {
      alt: "Traveller's Club",
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1734111639/travelers-club-logo_gfiecy.png",
    },
  ];

  const sellingPoints = [
    {
      icon: <FaRegCompass />,
      title: "Comprehensive Startup Support",
      text: "From idea refinement to securing your Startup Visa, we provide end-to-end guidance tailored for entrepreneurs and SUV applicants.",
    },
    {
      icon: <FaNetworkWired />,
      title: "Global Network Access",
      text: "Leverage our extensive connections with investors, incubators, and industry leaders to accelerate your startup's journey in Canada.",
    },
    {
      icon: <FaHandshake />,
      title: "Cross-Border Collaboration",
      text: "Forge strategic partnerships with Canadian businesses and stakeholders, ensuring seamless integration into the Canadian market.",
    },
    {
      icon: <SiAircanada />,
      title: "Startup Visa Expertise",
      text: "With a proven track record of success, we simplify your Startup Visa process and help you establish your venture in Canada.",
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
    (<div>
      <CalloutSection
        imageURL="https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733863599/pexels-mateusz-dach-99805-450035_dp9nh3.jpg"
        alt="Abstract landscape"
        title="Build the Future, Together"
        text="Launch and grow your startup with expert guidance, tailored resources, and mentorship. Whether you're building your first venture or navigating Canada’s Startup Visa Program, we’re here to help you succeed in a competitive global market."
        primaryBtnText="Apply now"
        lightBtnText="Startup Visa"
        secondBtn={true}
        primaryBtnLink={startupVisaFormLink}
        lightBtnLink="/startupvisa"
      />
      <Container className={`${styles.landingPageContent} section`}>
        <h2 className={`xtraBold w-75`}>
          Our mission is to empower founders and innovators to launch startups
          and thrive, leveraging our expertise and Canada&apos;s Startup Visa
          Program
        </h2>

        <p className="mt-4">
          TechX Startup partners with a network of angel investors, incubators,
          and venture capital funds to help turn your innovative ideas into
          successful startups. We provide the essential funding, resources, and
          mentorship to validate and scale your business. Our expert guidance
          ensures you not only navigate the startup journey but also succeed in
          Canada&apos;s Startup Visa Program, securing permanent residence and
          setting the stage for long-term success in Canada.
        </p>
      </Container>
      <div className="mt-4 pb-4">
        <Container>
          <h4 className="xtraBold header">Our services</h4>
          <Row className="g-4 mt-2">
            {services.map((service, index) => (
              <Col
                key={index}
                xs={12}
                sm={6}
                lg={4}
                xl={3}
                className="rounded d-flex flex-column"
              >
                <div className="cardWithGreyBorder flex-grow-1 py-3 px-4">
                  <div className="fs-4 mt-1">
                    {service.icon && service.icon}
                  </div>
                  <h5 className="xtraBold mt-4">{service.title}</h5>
                  <p className="textBlue mt-2">{service.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <Container>
        <div id="featured-projects">
          <h4 className="xtraBold pt-5 header pb-3">Featured projects</h4>
          <Row>
            {featuredProjects.map((project, index) => (
              <Col
                className="d-flex flex-column"
                key={index}
                xs={12}
                md={6}
                lg={4}
              >
                <VerticalCard
                  imageSrc={project.images[0]}
                  alt={project.title}
                  title={project.title}
                  text={project.text}
                  link={`/featured-projects/${project.title
                    .toLowerCase()
                    .replace(/ /g, "-")}`}
                  secondItem={project.industry}
                  icon={<MdArrowOutward />}
                />
              </Col>
            ))}
          </Row>
          {/* <div>
            {sortedYears.map((year) => (
              <div key={year}>
                <h5 className="xtraBold mt-5">{year}</h5>
                {groupedProjects[year].map((project, index) => (
                  <Row className="mt-5 cardWithGreyBorder p-3" key={index}>
                    <Col>
                    <div>
                      <h5 className="xtraBold">{project.title}</h5>
                      <p className="mt-3 text-secondary">{project.text}</p>
                      <div className={styles.caseStudyLinkContainer}>
                        <Link
                          href={`/featuredprojects/${project.title
                            .toLowerCase()
                            .replace(/ /g, "-")}`}
                          rel="noopener noreferrer"
                          className={`text-dark fw-bold text-decoration-none py-2 px-3 rounded ${styles.caseStudyLink}`}
                        >
                          Learn more
                        </Link>
                      </div>
                      </div>
                    </Col>
                    <Col xl={4}>
                      <div
                        className={`${styles.featuredProjImgContainer} position-relative h-auto w-100`}
                      >
                        <Image
                          className="roundedImage"
                          src={project.images[0]}
                          alt={project.title}
                          layout="fill"
                        />
                      </div>
                    </Col>
                  </Row>
                ))}
              </div>
            ))}
          </div> */}
        </div>
      </Container>
      <div className="section">
        <CalloutSection
          imageURL="https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733934684/pexels-weekendplayer-187041_amvoh1.jpg"
          alt="Beautiful landscape"
          title="Transform Your Startup’s Future"
          text="Elevate your startup with expert guidance and resources. Whether you're launching your business or navigating Canada’s Startup Visa Program, we provide the support you need to scale, seize new opportunities, and thrive in a competitive market."
          primaryBtnText="Get the guide"
          secondBtn={true}
          lightBtnLink="/startupvisa"
          lightBtnText="Learn more"
          doSomethingForm={true}
          // doSomethingFormBtnText="Get the guide"
          // onClickBtn1={handleGetGuideClick}
          isLightBtnLinkExternal={false}
          // isPrimaryBtnLinkExternal={false}
        />
      </div>
      <Container>
        <Stats />
      </Container>
      <Container className="section mt-1">
        <h2 className={`xtraBold header`}>Why Choose Tech X Startup?</h2>
        <p className="mt-4 w-75 pb-2">
          Tech X Startup supports you at every stage, from turning your idea
          into a thriving business to navigating Canada&apos;s Startup Visa
          Program. We provide the resources, mentorship, and expertise you need
          to unlock opportunities and scale your startup for long-term success
          in Canada.
        </p>
        <Row className="mt-3 gx-4 gy-3">
          {sellingPoints.map((point, index) => (
            <Col
              lg={6}
              key={index}
              className="d-flex flex-column align-items-center"
            >
              <div className={`cardWithGreyBorder d-flex flex-column p-4`}>
                <div className="fs-4">{point.icon}</div>
                <h5 className="xtraBold mt-3">{point.title}</h5>
                <p className="textBlue mt-1">{point.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <div className="section">
        <Container>
          <h2 className={`xtraBold header`}>Our venture partners</h2>

          <Row className="mt-5">
            {partners.map((partner, index) => (
              <Col key={index} lg={4} md={6} sm={12} className="mb-4">
                <div className={`logoCard p-4`}>
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
        header="Build, Launch, and Scale with TechX Startup"
        text="Partner with TechX Startup to successfully navigate the Canada Startup Visa process. Book a call today and take the first step toward launching your business and thriving in Canada."
        img="https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733946918/dai-ke-GkraTrCYA_0-unsplash_zm7zb8.jpg"
        alt="guy on computer"
        btnText="Book via Calendy"
        imageAlign="left"
        link={calendlyLink}
      />
    </div>)
  );
}
