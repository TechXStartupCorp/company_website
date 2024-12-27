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
        alt="Beautiful landscape"
        title="Our Mission: Empowering Innovation and Growth"
        text="We are dedicated to helping both local founders and Startup Visa applicants navigate the journey of building a successful startup. With expert mentorship, tailored resources, and exclusive insights into the Canada Startup Visa Program, we are your partner every step of the way. Join a community that is driving innovation and shaping the future of entrepreneurship."
        primaryBtnText="Join our team"
        secondBtn={false}
        primaryBtnLink="mailto:team@techxstartup.com"
      />
      <div className="section">
        <Container>
          <h2 className="xtraBold mt-3">A brief history of Tech X Startup</h2>
          <p className="mt-4">
            TechX Startup was founded with the mission to empower aspiring
            entrepreneurs, both locally and globally. From a small team of
            passionate innovators, we have grown into a thriving network of
            startup enthusiasts, mentors, and industry experts. Over the years,
            we&apos;ve helped local founders and Startup Visa applicants
            navigate the complexities of launching a business, establish strong
            foundations, and scale their ideas into successful ventures. Our
            journey is driven by a commitment to innovation, collaboration, and
            supporting the next generation of visionary leaders, wherever they
            are.
          </p>
          <Row className="g-4 mt-2">
            {[
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733949382/dennis-cortes-eBPx9x7Hxyg-unsplash_hsevuk.jpg",
                title: "2021",
                text: "Tech X Startup was incorporated and began developing business ventures for clients.",
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733949783/mimi-thian-IPBGKYnuz8Y-unsplash_uuj5j5.jpg",
                title: "2022",
                text: "Tech X Startup supported numerous companies in establishing and growing their businesses across various Canadian provinces.",
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733949704/pexels-fauxels-3184292_ertp2e.jpg",
                title: "2024",
                text: "Rebranded, appointed a new team and supported startups with idea validation in collaboration with immigration and startup experts.",
              },
            ].map((item, index) => (
              <Col key={index} xs={12} sm={6} lg={4} xl={4} className="rounded">
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

      <div className="section">
        <Container>
          <h2 className={`xtraBold w-75`}>
            Our team values community, innovation, and the power of
            collaboration, using years of expertise to guide entrepreneurs and
            startups through every stage of their journey.
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
          <h3 className="xtraBold mt-3">Startup Visa partners</h3>
          <p className="mt-4">
            With decades of experience collaborating with leading immigration
            firms, we have refined our expertise in the Canada Startup Visa
            process. Our strong partnerships with immigration specialists ensure
            that we provide tailored solutions for each step of the journey.
            From initial consultations to securing the Startup Visa and
            permanent residency, we work closely with our immigration partners
            to offer a seamless, efficient experience for founders seeking to
            establish their businesses in Canada.
          </p>

          <Row className="g-4 mt-2">
            {[
              {
                title: "P & R Immigration",
                text: "For over 20 years, P & R Immigration has been a trusted leader in providing comprehensive immigration services.",
                alt: "P & R Immigration logo",
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733945473/P_n_R_Logo_2_xhvqty.png",
              },

              {
                title: "True global immigration",
                text: "True Global Immigration is a trusted immigration firm dedicated to helping clients achieve their dreams of living and working abroad.",
                alt: "True global immigration logo",
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733937898/True_Global_xxmzrt.png",
              },
              {
                title: "CCN Immigration Services",
                text: "Your partner in making your global aspirations a reality. We provide expert guidance and personalized support for living and working abroad.",
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
            header="Empowering Entrepreneurs to Succeed, Together"
            text="Whether you’re just starting out or ready to scale, we’re here to help you navigate the complexities of entrepreneurship with confidence and clarity. Together, we’ll build a future where your business not only survives but thrives."
            img="https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733949231/pexels-fauxels-3184660_m89p3h.jpg"
            alt="guy on computer"
            btnText="Book via Calendy"
            imageAlign="left"
            link={calendlyLink}
          />
        </div>
      </div>
    </div>
  );
}
