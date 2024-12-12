import Image from "next/image";
import { Button, Container, Row, Col } from "react-bootstrap";
import CalloutSection from "../components/CalloutSection/CalloutSection";
import CTAWithImage from "../components/CTAWithImage/CTAWithImage";
import SectionWithHeaderAndText from "../components/SectionWithHeaderAndText/SectionWithHeaderAndText";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <CalloutSection
        imageURL="https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733934546/pexels-canvastudio-3194521_zoauly.jpg"
        alt="Beautiful landscape"
        title="Our Mission: Empowering Innovation and Growth"
        text="We are committed to providing the resources, guidance, and community support needed to navigate the complex journey of building a successful startup. From expert mentorship to exclusive insights on the Canada Startup Visa Program, we are your partner in success. Become part of a community that’s shaping the future of innovation."
        primaryBtnText="Join our team"
        secondBtn={false}
      />
      <div className="section">
        <Container>
          <h2 className="xtraBold mt-3">A brief history of Tech X Startup</h2>
          <p className="mt-4">
            Tech X Startup began with a mission to empower aspiring
            entrepreneurs worldwide. Since our inception, we’ve grown from a
            small team of passionate innovators to a thriving network of startup
            enthusiasts, mentors, and industry experts. Over the years, we’ve
            helped countless startups navigate the complexities of the Canada
            Startup Visa Program, establish strong foundations, and scale their
            ideas into successful ventures. Our journey is fueled by a
            commitment to innovation, collaboration, and supporting the next
            generation of visionary leaders.
          </p>
          <Row className="g-4 mt-2">
            {[
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733949382/dennis-cortes-eBPx9x7Hxyg-unsplash_hsevuk.jpg",
                title: "2021",
                text: "Tech X Startup is born.",
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733949783/mimi-thian-IPBGKYnuz8Y-unsplash_uuj5j5.jpg",
                title: "2022",
                text: "First successful startup mentorship.",
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733949704/pexels-fauxels-3184292_ertp2e.jpg",
                title: "2023",
                text: "Rebranding and Strategic Growth.",
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
                    <p className="text-secondary">{item.text}</p>
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
            Our team values community and the power of information, using years
            of immigration expertise to guide individuals and families every
            step of the way.
          </h2>
          <h4 className="xtraBold mt-5 pb-2">Our team</h4>
          <div>
            {[
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733950056/rs_w_365_h_365_cg_true_snwzq3.webp",
                name: "Ram Babbar",
                text: "RCIC - Corporate Immigration Consultant",
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733950058/rs_w_365_h_365_cg_true_1_q4j6sk.webp",
                name: "Simran Babbar",
                text: "RCIC - Head of Operations, Immigration Consultants",
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733950054/rs_w_365_h_365_cg_true_2_bb7mju.webp",
                name: "Prof. Chandan Singh",
                text: "RCIC - Business Immigration Consultant, Ph.D",
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
                      <span className="text-secondary">{item.text}</span>
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
          <h3 className="xtraBold mt-3">Our immigration partners</h3>
          <p className="mt-4">
            With decades of experience working alongside top immigration firms,
            we have honed our expertise in the intricacies of the immigration
            process. Our strong partnerships enable us to provide our clients
            with comprehensive, tailored solutions that address every aspect of
            their journey. From initial consultations to securing the necessary
            visas, we work hand-in-hand with our immigration partners to ensure
            a smooth and efficient experience.
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
                title: "Resttler",
                text: "Resettler helps individuals and families transition smoothly to new homes, offering expert relocation and settlement services for a stress-free experience.",
                alt: "Resettler logo",
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733937773/Resettler_Logo_jxgiov.png",
              },
              {
                title: "True global immigration",
                text: "True Global Immigration is a trusted immigration firm dedicated to helping clients achieve their dreams of living and working abroad.",
                alt: "True global immigration logo",
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733937898/True_Global_xxmzrt.png",
              },
              {
                title: "IELTS Batch",
                text: "IELTS Batch prepares students and professionals for success in the IELTS with tailored language training to achieve their desired scores.",
                alt: "IELTS Batch",
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733937759/IELTS_Batch_logo_lfngb0.png",
              },

              {
                title: "Genius jobs",
                text: "IELTS Batch prepares students and professionals for success in the IELTS with tailored language training to achieve their desired scores.",
                alt: "Genius jobs logo",
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733942209/genius-jobs-logo-1-removebg-preview_jnzk5z.png",
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
                  <p className="text-secondary mt-1">{item.text}</p>
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
          />
        </div>
      </div>
    </div>
  );
}
