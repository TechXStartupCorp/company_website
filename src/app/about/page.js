import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import CalloutSection from "../components/CalloutSection/CalloutSection";
import CTAWithImage from "../components/CTAWithImage/CTAWithImage";
import styles from "./page.module.css";
import { calendlyLink } from "../data/Links";

export default function Home() {
  return (
    <div>
      <CalloutSection
        imageURL="https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733934546/pexels-canvastudio-3194521_zoauly.jpg"
        alt="People on computers"
        title="Our Mission: Empowering Startup Growth and Innovation"
        text="At TechX Startup, we help entrepreneurs, from local founders to Canada Startup Visa applicants, build and scale successful startups. Our expert mentorship, tailored resources, and in-depth knowledge of the Canada Startup Visa Program empower you to navigate every stage of your entrepreneurial journey."
        primaryBtnText="Join our team"
        secondBtn={false}
        primaryBtnLink="mailto:team@techxstartup.com"
      />
      <div className="section">
        &apos;
        <Container>
          <h2 className="xtraBold">A brief history of TechX Startup</h2>
          <p className="mt-4">
            TechX Startup was founded with a clear mission: to empower
            entrepreneurs, from local innovators to global Startup Visa
            applicants, by providing the essential resources and mentorship to
            launch and scale successful startups. Starting with a small team of
            passionate individuals, we have grown into a thriving network of
            industry experts, mentors, and investors, offering specialized
            support to fintech companies, venture capital-backed startups, and
            those seeking Canada&apos;s Startup Visa. Over the years, we've
            helped aspiring founders turn their startup ideas into thriving
            businesses, navigate the complexities of product development, secure
            seed funding, and achieve product-market fit. Our commitment to
            innovation, collaboration, and supporting the next generation of
            startup leaders is at the core of our journey.
          </p>
          <Row className="g-4 mt-2">
            {[
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733949382/dennis-cortes-eBPx9x7Hxyg-unsplash_hsevuk.jpg",
                title: "2021",
                text: "Tech X Startup was incorporated to help startups with business development, funding, and mentorship.",
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733949783/mimi-thian-IPBGKYnuz8Y-unsplash_uuj5j5.jpg",
                title: "2022",
                text: "Tech X Startup assisted businesses in scaling across Canada with seed funding and Startup Visa support.",
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733949704/pexels-fauxels-3184292_ertp2e.jpg",
                title: "2024",
                text: "Rebranded and focused on idea validation, mentorship, and helping startups navigate the Canada Startup Visa.",
              },
            ].map((item, index) => (
              <Col key={index} sm={12} lg={4} xl={4} className="rounded">
                <div className="customCard">
                  <div className={`imgContainer position-relative`}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded"
                    />
                  </div>
                  <div>
                    <h5 className="xtraBold mt-3">{item.title}</h5>
                    <p className="textBlue">{item.text}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <div className={`${styles.teamMembersSection} section`}>
        <Container>
          <h2 className={`xtraBold`}>
            Our expert team values innovation, community, and collaboration,
            providing guidance for entrepreneurs and startups at every stage of
            their business journey.
          </h2>
          <h4 className="xtraBold mt-5 pb-2">Our team</h4>
          <div>
            {[
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733950056/rs_w_365_h_365_cg_true_snwzq3.webp",
                name: "Ram Babbar",
                text: "Founder and COO",
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733950058/rs_w_365_h_365_cg_true_1_q4j6sk.webp",
                name: "Simran Babbar",
                text: "CEO and Head of Operations",
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733950054/rs_w_365_h_365_cg_true_2_bb7mju.webp",
                name: "Prof. Chandan Singh",
                text: "Senior advisor and head of venture development",
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733950048/rs_w_365_h_365_cg_true_3_kis04v.webp",
                name: "Sukhpreet Singh Bedi",
                text: "Financial Accounting Advisory",
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733950050/rs_w_365_h_365_cg_true_4_u37w1m.webp",
                name: "Danny Jain",
                text: "Sr. Business Advisory",
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733950046/rs_w_365_h_365_cg_true_5_bbphhq.webp",
                name: "Maninder Kaur",
                text: "International Business Development Officer",
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733950052/rs_w_365_h_365_cg_true_6_bo79xo.webp",
                name: "Dharmendra Patel",
                text: "Head of IT Department",
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1734023031/me_lchm8q.jpg",
                name: "Tatyana Karlen",
                text: "Business development, IT",
              },
            ].map((item, index) => (
              <Row key={index} className="mt-4">
                <Col className="mb-2">
                  <div className="d-flex align-items-center gap-3">
                    <div className={`${styles.imgContainer} position-relative`}>
                      <Image
                        priority
                        src={item.image}
                        alt={item.name}
                        objectFit="cover"
                        className="rounded"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="d-flex flex-column">
                      <span className="xtraBold">{item.name}</span>
                      <span className="textBlue">{item.text}</span>
                    </div>
                  </div>
                </Col>
              </Row>
            ))}
          </div>
        </Container>
      </div>

      <div className="section pb-5">
        <Container>
          <h3 className="xtraBold mt-3">Canada Startup Visa Partners</h3>
          <p className="mt-4">
            With years of experience in the Canada Startup Visa process, we
            collaborate with top immigration specialists to offer tailored
            solutions. From consultations to securing your Startup Visa and
            permanent residency, our partnerships ensure a seamless experience
            for founders looking to establish their businesses in Canada.
          </p>

          <Row className="g-4 mt-2">
            {[
              {
                title: "P & R Immigration",
                text: "With 20+ years of experience, P & R Immigration specializes in guiding entrepreneurs through the Canada Startup Visa process, ensuring seamless business establishment in Canada.",
                alt: "P & R Immigration logo",
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733945473/P_n_R_Logo_2_xhvqty.png",
              },

              {
                title: "True Global Immigration",
                text: "True Global Immigration offers expert services for the Canada Startup Visa, helping entrepreneurs successfully navigate Canada's immigration process and start their business.",
                alt: "True global immigration logo",
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733937898/True_Global_xxmzrt.png",
              },

              {
                title: "CCN Immigration Services",
                text: "CCN Immigration Services provides personalized support for entrepreneurs seeking the Canada Startup Visa, ensuring a smooth and successful immigration process.",
                alt: "CCN Immigration logo",
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1734111531/ccn-immigration-logo_jywvzq.png",
              },
            ].map((item, index) => (
              <Col key={index} lg={4} md={6} sm={12} className="mb-4">
                <div className="d-flex flex-column">
                  <div className={`logoCard p-4`}>
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={225}
                      height={105}
                      layout="intrinsic"
                    />
                  </div>
                  <h5 className="xtraBold mt-3">{item.title}</h5>
                  <p className="textBlue mt-1">{item.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>

        <div className="mt-3">
          <CTAWithImage
            header="Empowering Entrepreneurs to Achieve Their Vision"
            text="Whether you're launching your first business or scaling to new heights, we provide the support and resources to help you succeed. Let’s work together to navigate the entrepreneurial journey and turn your ideas into thriving businesses."
            img="https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733949231/pexels-fauxels-3184660_m89p3h.jpg"
            alt="people on computers"
            btnText="Book via Calendy"
            imageAlign="left"
            link={calendlyLink}
          />
        </div>
      </div>
    </div>
  );
}
